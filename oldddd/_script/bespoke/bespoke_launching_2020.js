(function() {
    // constants
    const GID = 'UA-100137701-4';
    const UTM_CAMPAIGN_DEFAULT = 'bespoke.2020';

    // gtag
    let utils = {
        html_element: function(tagname, attrs, appendTo, onLoad) {
            let se = document.createElement(tagname);
            Object.keys(attrs).forEach(function(ak) {
                se[ak] = attrs[ak];
            });
            se.addEventListener('load', onLoad);
            appendTo.appendChild(se);
        },
        query_parent: function(selector, starting, limits) {
            // max 10 levels
            limits = limits || 10;
            cursor = starting.parentElement;

            for(let l=0; l<limits; l++) {
                let el = cursor.querySelector(selector);
                if(el) { return el; }
                else { cursor = cursor.parentElement; }
            }
            return null;
        }
    };
    utils.import_script = function(u,o) {
        utils.html_element('script', {async: true, type: 'text/javascript', src: u}, document.head, o);
    };

    utils.import_script('https://www.googletagmanager.com/gtag/js');
    if(!window.dataLayer) {
        window.dataLayer = [];
    }
    if(!window.gtag) {
        window.gtag = function() { window.dataLayer.push(arguments); };
        gtag('js', new Date());
        }

    // utils
    let split_parse = function(s,sep,delim) {
        let separator = sep || '&';
        let delimiter = delim || '=';
        return s.split(separator).reduce(function(agg,t) {
            if(t && 0<t.length) {
                let ts = t.split(delimiter);
                let k = ts && 0<ts.length ? ts[0].toString() : null;
                let v = ts && 1<ts.length ? ts[1] : undefined;
                try { v = JSON.parse(v);} catch(ex) {}
                agg[k] = v;
            }
            return agg;
        }, {});
    };

    let active_custom = function() {
        // install type
        try {
            let install_type = document.querySelector('a.type-select_btn.active');
            // module type
            let module_type = document.querySelector('.module_type.slider-item.active a');
            // model selection
            let model = document.querySelector('input[name="model"]:checked');
            // doors
            let doors = {};
            document.querySelectorAll('.making_doors_btns button[data-color]').forEach(function(door) {
                let position = null;
                let color = null;
                try {
                    door.parentElement.classList.forEach(function(cl){
                        if(!position && /door_(\w(_\w)?)/i.test(cl)) {
                            position = /door_(\w(_\w)?)/i.exec(cl)[1];
                        }
                    });
                    color = door.dataset.color;
                    if(position && color)
                        doors[position] = color;
                } catch {
                    return;
                }
            });
            return {
                type: install_type.dataset.dep,
                mod: module_type.dataset.type,
                img: module_type.querySelector('.product-item_img img').src,
                code: model.nextElementSibling.textContent.trim(),
                price: model.parentElement.parentElement.querySelector('td:last-child').textContent.replace(/[^\d]+/g, ''),
                doors: doors,
            };
        } catch(ex) {
            return null;
        }
    };
    
    //
    let log_pageview = function() {
        if(!window.gtag) return;

        window.gtag('config', GID, {
            
            page_location : location.origin + location.pathname + (location.search || '?') + 
                (utms ? '&' + Object.keys(utms).map((uk)=>'utm_'+uk+'='+utms[uk]).join('&') : ''),

            //page_location: 'https://www.samsung.com/sec/templateEvent/bespoke_buy/?id=bespoke_color3' +   
            //    (utms ? '&' + Object.keys(utms).map((uk)=>'utm_'+uk+'='+utms[uk]).join('&') : ''),
        });
    }

    

    let __cookies = split_parse(document.cookie, /;\s*/);
    let __searches = split_parse(location.search, /[\?&]/);


    // CID to UTM
    let utms;
    let assign_utms = function(campaign, source, medium, content, term) {
        if(!utms) utms = {};

        // required
        utms.campaign = utms.campaign || campaign;
        utms.source = source;
        utms.medium = medium;

        // optional
        if(content) utms.content = content;
        if(term) utms.term = term;

        return utms;
    }
    
    // url에 utm 있을시
    if(__searches.utm_campaign) {
        utms = ['campaign','source','medium','content','term'].reduce(function(gg, uk) {
            if(__searches['utm_'+uk]) gg[uk] = __searches['utm_'+uk];
            return gg;
        }, {});
    } 
    // url에 cid 있을시
    else if(__searches.cid && typeof(__searches.cid)=='string') {
        let ctoks = __searches.cid.split('_');
        if(9<=ctoks.length) {
            assign_utms(ctoks[6] || UTM_CAMPAIGN_DEFAULT, ctoks[1], ctoks[3], ctoks[8], 10<=ctoks.length ? ctoks[9] : null);
        }
    }

    //실행단
    log_pageview();

    // mobion 추가. 20200609. YG.
    
    let mobion = function() {
        const account = 'pengsamsung';

        // 커스텀 빌드
        let track = function(top, the_product) {
            window.ENP_VAR = {
                collect: {
                    productCode: the_product.code,
                    productName: 'Bespoke',
                    price: the_product.price,
                    dcPrice: '0',
                    soldOut: 'N',
                    imageUrl: the_product.img,
                    topCategory: top,
                    firstSubCategory: the_product.type,
                    secondSubCategory: the_product.mod,
                },
            };
            window.enp = function(){(window.enp.q = window.enp.q||[]).push(arguments)};
            window.enp('create', 'collect', account, {device: 'B'});
            // run
            (function(a,g,e,n,t){n=g.createElement(e);n.src="https://cdn.megadata.co.kr/dist/prod/enp_tracker_self_hosted.min.js";
            t=g.getElementsByTagName(e)[0];t.parentNode.insertBefore(n,t)})(window,document,"script");
        }
        const collectors = {
            'button.buy_btn': (()=>{ track('bespoke_custom_purchase', active_custom()); }),
            'button.save_btn': (()=>{ track('bespoke_custom_save', active_custom()); }), 
            'a.bespoke-store_buy_btn': ((ev)=>{
                let container = utils.query_parent('.best-slide-cont', ev.currentTarget);
                let prd = {
                    code: container.querySelector('.pd-code').textContent.trim(),
                    price: container.querySelector('.pd-price').textContent.trim(),
                    img: container.querySelector('img').src,
                    type: 'premade',
                    mod: container.querySelector('.pd-name').textContent.trim(),
                };
                track('bespoke_premade_purchase', prd);
            })
        };
        Object.keys(collectors).forEach(function(selector) {
            let handler = collectors[selector];
            document.querySelectorAll(selector).forEach(function(element) {
                element.addEventListener('click', handler);
            })
        });
    };
    if(document.readyState == 'complete') { mobion(); }
    else { window.addEventListener('load', mobion) }
})();
