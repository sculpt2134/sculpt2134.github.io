var noProduct=false;var noSaleProduct=false;
var brands={button:{toggle:function(value,type){var $TargetParenstDiv=$("#qookerBrandDiv").find("div[data-brd='"+value+"']");$TargetParenstDiv.removeClass("swiper-slide-active").addClass(type=="enable"?"swiper-slide-active":"")},getClickBrand:function(){var brdVal=$(".swiper-slide-active").map(function(index,value){return value.getAttribute("data-brd")}).get();return brdVal},removeMoreBtn:function(){var crdQty=$("#nowOnSaleDiv").children("div .box-product-card").length;console.log(crdQty);if(crdQty>=
8)console.log("확인"+brands.functions.checkMorePrd())}},functions:{fnClickBrandBest:function(btn){var btnBrd=$(btn).data("brd");brands.button.toggle(btnBrd,"enable");$(".swiper-slide a").each(function(index,element){var thisBrd=$(this).data("brd");if(Boolean(thisBrd!==btnBrd))brands.button.toggle(thisBrd,"disable")});noProduct=false;brands.functions.fnRemoveBrandBestPage();pages.setPage(1,$("#brandBestDiv"));brands.functions.fnGetBrandGoods(1,$("#brandBestDiv"))},fnNowOnSaleSet:function(){pages.setPage(1,
$("#nowOnSaleDiv"));brands.functions.fnGetBrandGoods(1,$("#nowOnSaleDiv"))},fnClickBrandBestMore:function(div){var noLeaveProduct=pages.isNowOnSale(div)?noSaleProduct:noProduct;var leaveQty=pages.getCrdQty(div)%pages.getRows(div);if(pages.getPage($(div))>1||leaveQty!=0||noLeaveProduct){$("#moreNowOnSaleGoods").css("display","none");return}brands.functions.fnGetBrandGoods(parseInt(pages.getPage(div))+1,div)},fnGetBrandGoods:function(page,div){var getBrand=pages.isNowOnSale(div)?null:brands.button.getClickBrand();
var getRows=pages.getRows(div);var getPage=parseInt(page);var pageName=pages.isNowOnSale(div)?"002":"001";console.log("getBrand, getRows,getPage, pageName: ",getBrand,getRows,getPage,pageName);var url="/sec/xhr/qooker/getGoodsCardInfo";var options={url:url,data:{brdEnNm:getBrand,page:getPage,rows:getRows,qukrPromotion:pageName},dataType:"html",done:function(data){$(div).append(data);if(pageName=="002"&&noSaleProduct)return;if($(div).attr("id")=="brandBestDiv"&&noProduct)return;pages.setPage(getPage,
$(div));var crdQty=$("#nowOnSaleDiv").children("div .box-product-card").length;console.log("crdQty"+crdQty);if(crdQty==8)brands.functions.checkMorePrd();if(crdQty>8){console.log("if문 안에 들어오는지");$("#moreNowOnSaleGoods").css("display","none")}var setCols=4;if(pages.isNowOnSale(div)){listHeightControl("#qookerNowOnSaleDiv",".box-product-card");$("#qookerNowOnSaleDiv .card-images").each(function(){$(this).height($(this).outerWidth())})}else{listHeightControl("#qookerBrandDiv",".box-product-card");$("#qookerBrandDiv .card-images").each(function(){$(this).height($(this).outerWidth())})}var winw=
$(window).width();setCols=winw>800?4:2;CpnPrdCardSet(setCols);filterSel();colorOptSel()}};ajax.call(options)},fnGoToPrdDetail:function(url){window.location.href="/sec/"+url},fnRemoveBrandBestPage:function(){$("#brandBestDiv").children().remove()},checkMorePrd:function(){var options={url:"/sec/xhr/qooker/checkMorePrd",dataType:"json",done:function(data){console.log("data: "+data);if(data)$("#moreNowOnSaleGoods").css("display","inline-block")}};ajax.call(options)}}};
var pages={setPage:function(page,div){var crdQty=$(div).children("div .box-product-card").length;var text=parseInt(page)+"/2";$(div).data("crd-qty",crdQty);$(div).attr("data-page",page);var $moreBtn=$(div).attr("id")==="nowOnSaleDiv"?$("#moreNowOnSaleGoods"):$("#moreBestBrandGoods");$moreBtn.children("em").text(text)},getPage:function(div){return parseInt($(div).attr("data-page"))},getCrdQty:function(div){return parseInt($(div).data("crd-qty"))},getRows:function(div){return parseInt($(div).attr("data-rows"))},
isNowOnSale:function(div){return $(div).attr("id")==="nowOnSaleDiv"?true:false}};
