(function($) {
    "use strict";
    
    function Draggable_local(el, options) {
        var self = this,
            defaults = {
                //options
                handle: false,
                delegate: false,
                revert: false,
                placeholder: false,
                droptarget: false,
                container: false,
                scroll: false,
                //callbacks
                update: null,
                drop: null
            };

        self.$draggable = $(el).data('draggable', self);
        self.options = $.extend({}, defaults, options);

        self.init();
    }

    Draggable_local.prototype.init = function() {
        var self = this,
            $clone,
            origin;

        self.$draggable
        .addClass('draggable')
        .on('destroy.draggable', function() {
            self.destroy();
        });

        function check_droptarget(pos) {
            var $over;

            $clone.hide();
            $over = $(document.elementFromPoint(pos.clientX, pos.clientY)).parents(self.options.droptarget);
            $clone.show();

            if ($over.length) {
                $over.find("button").addClass('active').parent().siblings().find("button").removeClass("active");;
                return $over;
            }
        }

        self.$draggable.dragaware($.extend({}, self.options, {
            /**
                * drag start - create clone, keep drag start origin.
                */
            dragstart: function(evt) {
                var $this = $(this);
                if (self.options.placeholder || self.options.revert) {
                    $clone = $this.clone()
                                    .removeAttr('id')
                                    .addClass('draggable_clone')
                                    // 2021.05.06, 드래그 이미지 가려달라는 요청
                                    .css({position: 'absolute',display:'none'})
                                    .appendTo(self.options.container || $this.parent())
                                    .offset($this.offset());
                    if (!self.options.placeholder) {
                        $(this).invisible();
                    }
                } else {
                    $clone = $this;
                }

                origin = new PositionHelper($clone.offset());
            },

            /**
                * drag - reposition clone.
                */
            drag: function(evt, pos) {
                var $droptarget = check_droptarget(pos);
                $clone.offset(origin.absolutize(pos));
            },

            /**
                * drag stop - clean up.
                */
            dragstop: function(evt, pos) {
                var $this = $(this),
                    $droptarget = check_droptarget(pos);

                if (self.options.revert || self.options.placeholder) {
                    $this.visible();
                    if (!self.options.revert) {
                        $this.offset(origin.absolutize(pos));
                    }
                    $clone.remove();
                }

                $clone = null;

                if (self.options.update) {
                    self.options.update.call($this, evt, self);
                }

                $this.trigger('update');

                if ($droptarget) {
                    if (self.options.drop) {
                        self.options.drop.call($this, evt, $droptarget[0]);
                    }
                    $droptarget.trigger('drop', [$this]);
                    $droptarget.removeClass('active');
                }
            }
        }));
    };

    function Dragaware(el, options) {
        var $dragaware = $(el),
            $reference = null,
            origin = null,
            lastpos = null,
            defaults = {
                //options
                handle: null,
                delegate: null,
                scroll: false,
                scrollspeed: 15,
                scrolltimeout: 50,
                //callbacks
                dragstart: null,
                drag: null,
                dragstop: null
            },
            scrolltimeout;

        options = $.extend({}, defaults, options);

        /**
            * Returns the event position
            * dX, dY relative to drag start
            * pageX, pageY relative to document
            * clientX, clientY relative to browser window
            */
        function evtpos(evt) {
            evt = window.hasOwnProperty('event') ? window.event : evt;
            //extract touch event if present
            if (evt.type.substr(0, 5) === 'touch') {
                evt = evt.hasOwnProperty('originalEvent') ? evt.originalEvent : evt;
                evt = evt.touches[0];
            }

            return {
                pageX: evt.pageX,
                pageY: evt.pageY,
                clientX: evt.clientX,
                clientY: evt.clientY,
                dX: origin ? evt.pageX - origin.pageX : 0,
                dY: origin ? evt.pageY - origin.pageY : 0
            };
        }

        function start(evt) {
            var $target = $(evt.target);

            $reference = options.delegate ? $target.closest(options.delegate) : $dragaware;

            if ($target.closest(options.handle || '*').length && (evt.type == 'touchstart' || evt.button == 0)) {
                origin = lastpos = evtpos(evt);
                if (options.dragstart) {
                    options.dragstart.call($reference, evt, lastpos);
                }

                $reference.addClass('dragging');
                $('body').addClass('dragcursor'); // 20190723 Ŀ����纯��
                $reference.trigger('dragstart');

                //late binding of event listeners
                $(document)
                .on('touchend.dragaware mouseup.dragaware click.dragaware', end)
                .on('touchmove.dragaware mousemove.dragaware', move);
                return false
            }
        }

        function move(evt) {
            lastpos = evtpos(evt);

            if (options.scroll) {
                autoscroll(lastpos);
            }

            $reference.trigger('dragging');

            if (options.drag) {
                options.drag.call($reference, evt, lastpos);
                return false;
            }
        }

        function end(evt) {
            window.clearTimeout(scrolltimeout);

            if (options.dragstop) {
                options.dragstop.call($reference, evt, lastpos);
            }

            $('body').removeClass('dragcursor');
            $reference.removeClass('dragging');
            $reference.trigger('dragstop');

            origin = false;
            lastpos = false;
            $reference = false;

            //unbinding of event listeners
            $(document)
            .off('.dragaware');

            return false;
        }

        $dragaware
        .addClass('dragaware')
        .on('touchstart.dragaware mousedown.dragaware', options.delegate, start);

        $dragaware.on('destroy.dragaware', function() {
            $dragaware
            .removeClass('dragaware')
            .off('.dragaware');
        });
    }

    function PositionHelper(origin) {
        this.origin = origin;
    }

    PositionHelper.prototype.absolutize = function(pos) {
        if (!pos) {
            return this.origin;
        }
        return {top: this.origin.top + pos.dY, left: this.origin.left + pos.dX};

    };

    // Plugin registration.

    /**
        * Draggable plugin.
        */
    $.fn.draggable_local = function(options) {
        if (options === 'destroy') {
            this.trigger('destroy.draggable');
        } else {
            this.not('.draggable').each(function(ix, el) {
                new Draggable_local(el, options);
            });
        }
        return this;
    };

    /**
        * Dragaware plugin.
        */
    $.fn.dragaware = function(options) {
        if (options === 'destroy') {
            this.trigger('destroy.dragaware');
        } else {
            this.not('.dragaware').each(function(ix, el) {
                new Dragaware(el, options);
            });
        }
        return this;
    };

    $.fn.visible = function() {
        return this.css({visibility: 'visible'});
    };

    }(jQuery));