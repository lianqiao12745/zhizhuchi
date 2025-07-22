// islider
!function(a){function b(a,b){this.options={effect:"hslide",speed:4e3,index:0,delay:120,timing:!0,ctrlHandle:!0,trigger:["mouseover","click"],pauseHover:!0,active:"active",elements:{roll:".slider-wrap .slider-roll .item",ctrl:".slider-ctrl li",prev:".slider-prev",next:".slider-next"}},this._init(a,b)}a.fn.iSlider=function(a){new b(this,a)},b.prototype={_paused:!1,_stopflag:!1,_timer:null,_type:null,_etag:null,_cur:0,_mover:"mouseover",_init:function(b,c){if(a.extend(!0,this.options,c),a(b)&&a(this.options.elements.roll)){var d=this,e=d.options.elements.roll.split(" ");d.tap=a(b),d.ctrl=d.tap.find(d.options.elements.ctrl),d.prev=d.tap.find(d.options.elements.prev),d.next=d.tap.find(d.options.elements.next),d.wrap=d.tap.find(e[0]),d.roll=d.wrap.find(e[1]),d.item=d.roll.find(e[2]),d.count=d.item.length,d.last=d.count-1,d._trigger=d.options.trigger,0!=d.options.index&&(d._cur=d.options.index),d._type="init",d._effect(),d._active(),d.options.timing&&(d._set(),d.options.pauseHover&&d.tap.hover(function(){d._clear()},function(){d._set()})),d.ctrl&&d.options.ctrlHandle&&d.ctrl.each(function(b){a(this).bind(d._trigger[0],function(){d._clear(),d.etag=b,d._trigger[0]===d._mover?d._ctrlOut=setTimeout(function(){d._ctrl()},d.options.delay):d._ctrl()}).mouseout(function(){d._trigger[0]===d._mover&&clearTimeout(d._ctrlOut)})}),d.prev&&d.prev.bind(d._trigger[1],function(){d._clear(),d._trigger[1]===d._mover?d._prevOut=setTimeout(function(){d._prev()},d.options.delay):d._prev()}).mouseout(function(){d._trigger[1]===d._mover&&clearTimeout(d._prevOut)}),d.next&&d.next.bind(d._trigger[1],function(){d._clear(),d._trigger[1]===d._mover?d._nextOut=setTimeout(function(){d._next()},d.options.delay):d._next()}).mouseout(function(){d._trigger[1]===d._mover&&clearTimeout(d._nextOut)})}},_clear:function(){var a=this;clearInterval(a._timer)},_set:function(){var a=this;a._timer=setInterval(function(){a._auto()},a.options.speed)},_ctrl:function(){var a=this;"show"===a.options.effect||"fade"===a.options.effect||"vcover"===a.options.effect||"hcover"===a.options.effect?a.item.eq(a.etag).stop(!0,!0):a.roll.stop(!0),a._cur=a.etag,a._type="anim",a.u=-1,a._effect(),a._active()},_prev:function(){var a=this;a._stopflag||(a._stopflag=!0,a._cur<=0?a._cur=a.last:a._cur--,a._type="anim",a.u=0,a._effect(),a._active())},_next:function(){var a=this;a._stopflag||(a._stopflag=!0,a._auto())},_auto:function(){var a=this;a._paused||(a._paused=!0,a._cur>=a.last?a._cur=0:a._cur++,a._type="anim",a.u=1,a._effect(),a._active())},_active:function(){var a=this,b=a.options.active;a.item.eq(a._cur).addClass(b).siblings().removeClass(b),a.ctrl.eq(a._cur).addClass(b).siblings().removeClass(b),a._paused=!1},_call:function(){var a=this;a._stopflag=!1},_effect:function(){var a=this,b=a._type;switch(a.options.effect){case"show":switch(b){case"init":a.item.eq(a._cur).show().siblings().hide();break;case"anim":a.item.eq(a._cur).show().siblings().hide(),a._call()}break;case"fade":switch(b){case"init":a.item.eq(a._cur).show().siblings().hide(),a.item.css({position:"absolute"});break;case"anim":a.item.eq(a._cur).fadeIn(700).siblings().fadeOut(700),a._call()}break;case"vcover":switch(b){case"init":a.size=a.wrap.height(),a.item.css({position:"absolute",top:a.size+"px"}),a.item.eq(a._cur).css({top:0});break;case"anim":a.item.not(a.item[a._cur]).css({zIndex:0}),a.item.eq(a._cur).css({zIndex:1}),a.item.eq(a._cur).animate({top:0},400,function(){a.item.not(a.item[a._cur]).css({top:a.size+"px"}),a._call()})}break;case"hcover":switch(b){case"init":a.size=a.wrap.width(),a.item.css({position:"absolute",left:a.size+"px"}),a.item.eq(a._cur).css({left:0});break;case"anim":a.item.not(a.item[a._cur]).css({zIndex:0}),a.item.eq(a._cur).css({zIndex:1}),a.item.eq(a._cur).animate({left:0},400,function(){a.item.not(a.item[a._cur]).css({left:a.size+"px"}),a._call()})}break;case"vslide":switch(b){case"init":a.size=a.wrap.height(),a.roll.css({top:"-"+a._cur*a.size+"px"}),a.item.css({position:"relative",height:a.size+"px"});break;case"anim":0===a.u&&a._cur===a.last?(a.item.eq(a.last).css({top:"-"+a.size*a.count+"px"}),a.roll.animate({top:a.size+"px"},400,function(){a.roll.css({top:"-"+a.size*a.last+"px"}),a.item.eq(a.last).css({top:0}),a._call()})):1===a.u&&0===a._cur?(a.item.eq(a._cur).css({top:a.size*a.count+"px"}),a.roll.animate({top:"-"+a.size*a.count+"px"},400,function(){a.roll.css({top:0}),a.item.eq(a._cur).css({top:0}),a._call()})):a.roll.animate({top:"-"+a.size*a._cur+"px"},400,function(){a._call()})}break;case"hslide":switch(b){case"init":a.size=a.wrap.width(),a.roll.css({width:a.size*a.count+"px",left:"-"+a._cur*a.size+"px"}),a.item.css({position:"relative",width:a.size+"px","float":"left"});break;case"anim":0===a.u&&a._cur===a.last?(a.item.eq(a._cur).css({left:"-"+a.size*a.count+"px"}),a.roll.animate({left:a.size+"px"},function(){a.roll.css({left:"-"+a.size*a._cur+"px"}),a.item.eq(a._cur).css({left:0}),a._call()})):1===a.u&&0===a._cur?(a.item.eq(a._cur).css({left:a.size*a.count+"px"}),a.roll.animate({left:"-"+a.size*a.count+"px"},function(){a.roll.css({left:a._cur}),a.item.eq(a._cur).css({left:a._cur}),a._call()})):a.roll.animate({left:"-"+a.size*a._cur+"px"},400,function(){a._call()})}}}}}(jQuery);

// transition,modal,dropdown,tab,tooltip,popover,loading
!function(a){"use strict";a(function(){a.support.transition=function(){var a=function(){var c,a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(c in b)if(void 0!==a.style[c])return b[c]}();return a&&{end:a}}()})}(window.jQuery),!function(a){"use strict";var c,b=function(b,c){this.options=c,this.$element=a(b).delegate('[data-dismiss="modal"]',"click.dismiss.modal",a.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};b.prototype={constructor:b,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var b=this,c=a.Event("show");this.$element.trigger(c),this.isShown||c.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.backdrop(function(){var c=a.support.transition&&b.$element.hasClass("fade");b.$element.parent().length||b.$element.appendTo(document.body),b.$element.show(),c&&b.$element[0].offsetWidth,b.$element.addClass("in").attr("aria-hidden",!1),b.enforceFocus(),c?b.$element.one(a.support.transition.end,function(){b.$element.focus().trigger("shown")}):b.$element.focus().trigger("shown")}))},hide:function(b){b&&b.preventDefault(),b=a.Event("hide"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),a.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal())},enforceFocus:function(){var b=this;a(document).on("focusin.modal",function(a){b.$element[0]===a.target||b.$element.has(a.target).length||b.$element.focus()})},escape:function(){var a=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(b){27==b.which&&a.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var b=this,c=setTimeout(function(){b.$element.off(a.support.transition.end),b.hideModal()},500);this.$element.one(a.support.transition.end,function(){clearTimeout(c),b.hideModal()})},hideModal:function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},backdrop:function(b){var e,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){if(e=a.support.transition&&d,this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(document.body),this.$backdrop.click("static"==this.options.backdrop?a.proxy(this.$element[0].focus,this.$element[0]):a.proxy(this.hide,this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;e?this.$backdrop.one(a.support.transition.end,b):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b):b()):b&&b()}},c=a.fn.modal,a.fn.modal=function(c){return this.each(function(){var d=a(this),e=d.data("modal"),f=a.extend({},a.fn.modal.defaults,d.data(),"object"==typeof c&&c);e||d.data("modal",e=new b(this,f)),"string"==typeof c?e[c]():f.show&&e.show()})},a.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f).one("hide",function(){c.focus()})})}(window.jQuery),!function(a){"use strict";function d(){a(b).each(function(){e(a(this)).removeClass("open")})}function e(b){var d,c=b.attr("data-target");return c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,"")),d=c&&a(c),d&&d.length||(d=b.parent()),d}var f,b="[data-toggle=dropdown]",c=function(b){var c=a(b).on("click.dropdown.data-api",this.toggle);a("html").on("click.dropdown.data-api",function(){c.parent().removeClass("open")})};c.prototype={constructor:c,toggle:function(){var f,g,c=a(this);if(!c.is(".disabled, :disabled"))return f=e(c),g=f.hasClass("open"),d(),g||f.toggleClass("open"),c.focus(),!1},keydown:function(c){var d,f,h,i,j;if(/(38|40|27)/.test(c.keyCode)&&(d=a(this),c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled"))){if(h=e(d),i=h.hasClass("open"),!i||i&&27==c.keyCode)return 27==c.which&&h.find(b).focus(),d.click();f=a("[role=menu] li:not(.divider):visible a",h),f.length&&(j=f.index(f.filter(":focus")),38==c.keyCode&&j>0&&j--,40==c.keyCode&&j<f.length-1&&j++,~j||(j=0),f.eq(j).focus())}}},f=a.fn.dropdown,a.fn.dropdown=function(b){return this.each(function(){var d=a(this),e=d.data("dropdown");e||d.data("dropdown",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.dropdown.Constructor=c,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=f,this},a(document).on("click.dropdown.data-api",d).on("click.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.dropdown-menu",function(a){a.stopPropagation()}).on("click.dropdown.data-api",b,c.prototype.toggle).on("keydown.dropdown.data-api",b+", [role=menu]",c.prototype.keydown)}(window.jQuery),!function(a){"use strict";var c,b=function(b){this.element=a(b)};b.prototype={constructor:b,show:function(){var e,f,g,b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.attr("data-target");d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),b.parent("li").hasClass("active")||(e=c.find(".active:last a")[0],g=a.Event("show",{relatedTarget:e}),b.trigger(g),g.isDefaultPrevented()||(f=a(d),this.activate(b.parent("li"),c),this.activate(f,f.parent(),function(){b.trigger({type:"shown",relatedTarget:e})})))},activate:function(b,c,d){function g(){e.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),f?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var e=c.find("> .active"),f=d&&a.support.transition&&e.hasClass("fade");f?e.one(a.support.transition.end,g):g(),e.removeClass("in")}},c=a.fn.tab,a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("tab");e||d.data("tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(window.jQuery),!function(a){"use strict";var c,b=function(a,b){this.init("tooltip",a,b)};b.prototype={constructor:b,init:function(b,c,d){var e,f,g,h,i;for(this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.enabled=!0,g=this.options.trigger.split(" "),i=g.length;i--;)h=g[i],"click"==h?this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this)):"manual"!=h&&(e="hover"==h?"mouseenter":"focus",f="hover"==h?"mouseleave":"blur",this.$element.on(e+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(f+"."+this.type,this.options.selector,a.proxy(this.leave,this)));this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(b){return b=a.extend({},a.fn[this.type].defaults,this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},enter:function(b){var e,c=a.fn[this.type].defaults,d={};return this._options&&a.each(this._options,function(a,b){c[a]!=b&&(d[a]=b)},this),e=a(b.currentTarget)[this.type](d).data(this.type),e.options.delay&&e.options.delay.show?(clearTimeout(this.timeout),e.hoverState="in",this.timeout=setTimeout(function(){"in"==e.hoverState&&e.show()},e.options.delay.show),void 0):e.show()},leave:function(b){var c=a(b.currentTarget)[this.type](this._options).data(this.type);return this.timeout&&clearTimeout(this.timeout),c.options.delay&&c.options.delay.hide?(c.hoverState="out",this.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide),void 0):c.hide()},show:function(){var b,c,d,e,f,g,h=a.Event("show");if(this.hasContent()&&this.enabled){if(this.$element.trigger(h),h.isDefaultPrevented())return;switch(b=this.tip(),this.setContent(),this.options.animation&&b.addClass("fade"),f="function"==typeof this.options.placement?this.options.placement.call(this,b[0],this.$element[0]):this.options.placement,b.detach().css({top:0,left:0,display:"block"}),this.options.container?b.appendTo(this.options.container):b.insertAfter(this.$element),c=this.getPosition(),d=b[0].offsetWidth,e=b[0].offsetHeight,f){case"bottom":g={top:c.top+c.height,left:c.left+c.width/2-d/2};break;case"top":g={top:c.top-e,left:c.left+c.width/2-d/2};break;case"left":g={top:c.top+c.height/2-e/2,left:c.left-d};break;case"right":g={top:c.top+c.height/2-e/2,left:c.left+c.width}}this.applyPlacement(g,f),this.$element.trigger("shown")}},applyPlacement:function(a,b){var f,g,h,i,c=this.tip(),d=c[0].offsetWidth,e=c[0].offsetHeight;c.offset(a).addClass(b).addClass("in"),f=c[0].offsetWidth,g=c[0].offsetHeight,"top"==b&&g!=e&&(a.top=a.top+e-g,i=!0),"bottom"==b||"top"==b?(h=0,a.left<0&&(h=-2*a.left,a.left=0,c.offset(a),f=c[0].offsetWidth,g=c[0].offsetHeight),this.replaceArrow(h-d+f,f,"left")):this.replaceArrow(g-e,g,"top"),i&&c.offset(a)},replaceArrow:function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},setContent:function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},hide:function(){function e(){var b=setTimeout(function(){c.off(a.support.transition.end).detach()},500);c.one(a.support.transition.end,function(){clearTimeout(b),c.detach()})}var c=this.tip(),d=a.Event("hide");return this.$element.trigger(d),d.isDefaultPrevented()?void 0:(c.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?e():c.detach(),this.$element.trigger("hidden"),this)},fixTitle:function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},getTitle:function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},tip:function(){return this.$tip=this.$tip||a(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(b){var c=b?a(b.currentTarget)[this.type](this._options).data(this.type):this;c.tip().hasClass("in")?c.hide():c.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}},c=a.fn.tooltip,a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("tooltip"),f="object"==typeof c&&c;e||d.data("tooltip",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(window.jQuery),!function(a){"use strict";var c,b=function(a,b){this.init("popover",a,b)};b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype,{constructor:b,setContent:function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var a,b=this.$element,c=this.options;return a=("function"==typeof c.content?c.content.call(b[0]):c.content)||b.attr("data-content")},tip:function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}}),c=a.fn.popover,a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("popover"),f="object"==typeof c&&c;e||d.data("popover",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.defaults=a.extend({},a.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(window.jQuery);

// Infinite Ajax Scroll, a jQuery plugin 1.0.2
(function(e){"use strict";Date.now=Date.now||function(){return+(new Date)},e.ias=function(t){function u(){var t;i.onChangePage(function(e,t,r){s&&s.setPage(e,r),n.onPageChange.call(this,e,r,t)});if(n.triggerPageThreshold>0)a();else if(e(n.next).attr("href")){var u=r.getCurrentScrollOffset(n.scrollContainer);E(function(){p(u)})}return s&&s.havePage()&&(l(),t=s.getPage(),r.forceScrollTop(function(){var n;t>1?(v(t),n=h(!0),e("html, body").scrollTop(n)):a()})),o}function a(){c(),n.scrollContainer.scroll(f)}function f(){var e,t;e=r.getCurrentScrollOffset(n.scrollContainer),t=h(),e>=t&&(m()>=n.triggerPageThreshold?(l(),E(function(){p(e)})):p(e))}function l(){n.scrollContainer.unbind("scroll",f)}function c(){e(n.pagination).hide()}function h(t){var r,i;return r=e(n.container).find(n.item).last(),r.size()===0?0:(i=r.offset().top+r.height(),t||(i+=n.thresholdMargin),i)}function p(t,r){var s;s=e(n.next).attr("href");if(!s)return n.noneleft&&e(n.container).find(n.item).last().after(n.noneleft),l();if(n.beforePageChange&&e.isFunction(n.beforePageChange)&&n.beforePageChange(t,s)===!1)return;i.pushPages(t,s),l(),y(),d(s,function(t,i){var o=n.onLoadItems.call(this,i),u;o!==!1&&(e(i).hide(),u=e(n.container).find(n.item).last(),u.after(i),e(i).fadeIn()),s=e(n.next,t).attr("href"),e(n.pagination).replaceWith(e(n.pagination,t)),b(),c(),s?a():l(),n.onRenderComplete.call(this,i),r&&r.call(this)})}function d(t,r,i){var s=[],o,u=Date.now(),a,f;i=i||n.loaderDelay,e.get(t,null,function(t){o=e(n.container,t).eq(0),0===o.length&&(o=e(t).filter(n.container).eq(0)),o&&o.find(n.item).each(function(){s.push(this)}),r&&(f=this,a=Date.now()-u,a<i?setTimeout(function(){r.call(f,t,s)},i-a):r.call(f,t,s))},"html")}function v(t){var n=h(!0);n>0&&p(n,function(){l(),i.getCurPageNum(n)+1<t?(v(t),e("html,body").animate({scrollTop:n},400,"swing")):(e("html,body").animate({scrollTop:n},1e3,"swing"),a())})}function m(){var e=r.getCurrentScrollOffset(n.scrollContainer);return i.getCurPageNum(e)}function g(){var t=e(".ias_loader");return t.size()===0&&(t=e('<div class="ias_loader">'+n.loader+"</div>"),t.hide()),t}function y(){var t=g(),r;n.customLoaderProc!==!1?n.customLoaderProc(t):(r=e(n.container).find(n.item).last(),r.after(t),t.fadeIn())}function b(){var e=g();e.remove()}function w(t){var r=e(".ias_trigger");return r.size()===0&&(r=e('<div class="ias_trigger"><a href="#">'+n.trigger+"</a></div>"),r.hide()),e("a",r).unbind("click").bind("click",function(){return S(),t.call(),!1}),r}function E(t){var r=w(t),i;n.customTriggerProc!==!1?n.customTriggerProc(r):(i=e(n.container).find(n.item).last(),i.after(r),r.fadeIn())}function S(){var e=w();e.remove()}var n=e.extend({},e.ias.defaults,t),r=new e.ias.util,i=new e.ias.paging(n.scrollContainer),s=n.history?new e.ias.history:!1,o=this;u()},e.ias.defaults={container:"#container",scrollContainer:e(window),item:".item",pagination:"#pagination",next:".next",noneleft:!1,loader:'<img src="images/loader.gif"/>',loaderDelay:600,triggerPageThreshold:3,trigger:"Load more items",thresholdMargin:0,history:!0,onPageChange:function(){},beforePageChange:function(){},onLoadItems:function(){},onRenderComplete:function(){},customLoaderProc:!1,customTriggerProc:!1},e.ias.util=function(){function i(){e(window).load(function(){t=!0})}var t=!1,n=!1,r=this;i(),this.forceScrollTop=function(i){e("html,body").scrollTop(0),n||(t?(i.call(),n=!0):setTimeout(function(){r.forceScrollTop(i)},1))},this.getCurrentScrollOffset=function(e){var t,n;return e.get(0)===window?t=e.scrollTop():t=e.offset().top,n=e.height(),t+n}},e.ias.paging=function(){function s(){e(window).scroll(o)}function o(){var t,s,o,f,l;t=i.getCurrentScrollOffset(e(window)),s=u(t),o=a(t),r!==s&&(f=o[0],l=o[1],n.call({},s,f,l)),r=s}function u(e){for(var n=t.length-1;n>0;n--)if(e>t[n][0])return n+1;return 1}function a(e){for(var n=t.length-1;n>=0;n--)if(e>t[n][0])return t[n];return null}var t=[[0,document.location.toString()]],n=function(){},r=1,i=new e.ias.util;s(),this.getCurPageNum=function(t){return t=t||i.getCurrentScrollOffset(e(window)),u(t)},this.onChangePage=function(e){n=e},this.pushPages=function(e,n){t.push([e,n])}},e.ias.history=function(){function n(){t=!!(window.history&&history.pushState&&history.replaceState),t=!1}var e=!1,t=!1;n(),this.setPage=function(e,t){this.updateState({page:e},"",t)},this.havePage=function(){return this.getState()!==!1},this.getPage=function(){var e;return this.havePage()?(e=this.getState(),e.page):1},this.getState=function(){var e,n,r;if(t){n=history.state;if(n&&n.ias)return n.ias}else{e=window.location.hash.substring(0,7)==="#/page/";if(e)return r=parseInt(window.location.hash.replace("#/page/",""),10),{page:r}}return!1},this.updateState=function(t,n,r){e?this.replaceState(t,n,r):this.pushState(t,n,r)},this.pushState=function(n,r,i){var s;t?history.pushState({ias:n},r,i):(s=n.page>0?"#/page/"+n.page:"",window.location.hash=s),e=!0},this.replaceState=function(e,n,r){t?history.replaceState({ias:e},n,r):this.pushState(e,n,r)}}})(jQuery);

// Lazy Load - jQuery plugin for lazy loading images Version: 1.9.0
!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.data(j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.data(j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/iphone|ipod|ipad.*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);

!function(){var a=jQuery.event.special,b="D"+ +new Date,c="D"+(+new Date+1);a.scrollstart={setup:function(){var c,d=function(b){var d=this,e=arguments;c?clearTimeout(c):(b.type="scrollstart",jQuery.event.dispatch.apply(d,e)),c=setTimeout(function(){c=null},a.scrollstop.latency)};jQuery(this).bind("scroll",d).data(b,d)},teardown:function(){jQuery(this).unbind("scroll",jQuery(this).data(b))}},a.scrollstop={latency:300,setup:function(){var b,d=function(c){var d=this,e=arguments;b&&clearTimeout(b),b=setTimeout(function(){b=null,c.type="scrollstop",jQuery.event.dispatch.apply(d,e)},a.scrollstop.latency)};jQuery(this).bind("scroll",d).data(c,d)},teardown:function(){jQuery(this).unbind("scroll",jQuery(this).data(c))}}}();

+(function($){
$(document).ready(function(){

	var s=document.location;
	$(".navbar ul>li").each(function(){
	if ($(this).find("a").attr("href") == s.toString().split("#")[0]){
		$(this).attr("class","current-menu-item");
	}	});	// ???????????????class current-menu-item

/*
	if( $('.bdsharebuttonbox').length ){
		if( $('.article-content').length ) $('.article-content img').attr('data-tag', 'bdshare')

		window._bd_share_config={
			"common":{
				"bdSnsKey":{
					"tqq":_deel.appkey.tqq || null,
					"tsina":_deel.appkey.tsina || null,
					"t163":_deel.appkey.t163 || null,
					"tsohu":_deel.appkey.tsohu || null,
				},
				"bdText":"",
				"bdMini":"2",
				"bdMiniList":false,
				"bdPic":"",
				"bdStyle":"0",
				"bdSize":"24"
			},
			"share":{}/*,
			"image":{
				tag: 'bdshare',
				"viewList":["qzone","tsina","tqq","renren","weixin"],
				"viewText":" ",
				"viewSize":"16"
			},
			"selectShare":{
				"bdContainerClass":'article-content',
				"bdSelectMiniList":["qzone","tsina","tqq","renren","weixin"]
			}
		};
		with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
	}

*/
	// lazy avatar
/*	$('.content .avatar, .sidebar .avatar, .pagecontent .avatar').lazyload({
		placeholder: _deel.url+'/img/default.png',
		event: 'scrollstop'
	});*/

//	$('.wp-smiley').lazyload({
//		placeholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC',
//		event: 'scrollstop'
//	});  // ?????????
/*
	if( _deel.ajaxpager ){
		// next page 
		$.ias({
		    thresholdMargin: -100,
		    triggerPageThreshold: 5,
		    history: false,
		    container : '.content',
		    item: '.excerpt',
		    pagination: '.pagination',
		    next: '.next-page a',
		    loader: '<div class="pagination-loading">???????????????...</div>',
		    trigger: '?????????',
		    onPageChange: function(pageNum, pageUrl, scrollOffset) {
		        window._gaq && window._gaq.push(['_trackPageview', jQuery('<a/>').attr('href',pageUrl)[0].pathname.replace(/^[^\/]/,'/')]);
		    }
		});
	}*/


	//window.prettyPrint && window.prettyPrint()

	/* components
	 * ====================================================
	*/
	if( $('.article-content').length ) $('.article-content a').tooltip({container: 'body'})

	if( $('.d_reader').length ) $('.d_reader a').tooltip({container: 'body'})

	if( $('.d_slidebanner').length ) $('.d_slidebanner').each(function(){ $(this).iSlider()})

	if( $('.readers').length ) $('.readers .avatar').parent().tooltip({container: 'body'})

	$('.article-content').removeAttr('height')


	/* sidebar scroll !ie6
	 * ====================================================
	*/
/*	if( !is_ie6() && $('.sidebar').length ){
		var rollbox = $('.sidebar .widget'), rolllen = rollbox.length;
		if( rolllen && 0<_deel.roll[0]<=rolllen && 0<_deel.roll[1]<=rolllen ){
			$(window).scroll(function(){
				var roll = document.documentElement.scrollTop+document.body.scrollTop;
				if( roll>rollbox.eq(rolllen-1).offset().top+rollbox.eq(rolllen-1).height() ){
					if( $('.widgetRoller').length==0 ){
						rollbox.parent().append( '<div class="widgetRoller"></div>' );
						rollbox.eq(_deel.roll[0]-1).clone().appendTo('.widgetRoller');
						if( _deel.roll[0]!==_deel.roll[1] )
							rollbox.eq(_deel.roll[1]-1).clone().appendTo('.widgetRoller')
						var toper = 10;
						if($('.navbar-wrap').css('position')=='fixed') toper = 62;
						$('.widgetRoller').css({position:'fixed',top:toper,zIndex:0,width:360});
					}else{
						$('.widgetRoller').fadeIn(300);
					}
				}else{
					$('.widgetRoller').hide();
				}
			})
		}

	}*/
$(window).on('scroll', nbluescroll);
function nbluescroll(){
			var scroller = $('.rollto');
			document.documentElement.scrollTop+document.body.scrollTop>200?scroller.fadeIn():scroller.fadeOut();
    
}
/* ??????bug
		$(window).scroll(function(){
			var scroller = $('.rollto');
			document.documentElement.scrollTop+document.body.scrollTop>200?scroller.fadeIn():scroller.fadeOut();
		})
*/
	/* nav for tablet and phone
	 * ====================================================
	*/
	$('.navbar .nav:first').after('<div class="screen-mini"><button data-type="screen-nav" class="btn btn-inverse screen-nav"><i class="icon-tasks icon-white"></i></button></div>')


	/* append body code
	 * ====================================================
	*/
	// $('body').append('<div class="modal hide fade" id="feed" tabindex="-1" style="width:400px;margin-left:-200px;"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h3>??????'+_deel.name+'</h3></div><div class="modal-body"><p><strong>????????????</strong><br><input type="text" class="input-block-level" value="'+_deel.rss+'" readonly=""></p>'+(_deel.maillist?'<p><form class="subscribe-mail" action="https://list.qq.com/cgi-bin/qf_compose_send" target="_blank" method="post"><input type="hidden" name="t" value="qf_booked_feedback"><input type="hidden" name="id" value="'+_deel.maillistCode+'"><strong>????????????</strong><br><div class="form-inline clearfix"><input class="pull-left" style="width:300px;" id="to" name="to" type="email" placeholder="a@b.com"><input class="btn btn-primary pull-right" style="width:51px;" type="submit" value="??????"></div></form></p>':'')+'</div></div><div class="rollto"><button class="btn btn-inverse" data-type="totop" title="?????????"><i class="icon-eject icon-white"></i></button>'+(_deel.commenton?'<button class="btn btn-inverse" data-type="torespond" title="?????????"><i class="icon-comment icon-white"></i></button>':'')+'</div>')


	/* after feed show
	 * ====================================================
	*/
	$('#feed').on('shown', function(){
		$('#feed input:first').select()
	})
	

	/* event click
	 * ====================================================
	*/
	$(document).on('click', function(e){
        e = e || window.event;
        var target = e.target || e.srcElement, _ta = $(target)

        if( _ta.hasClass('disabled') ) return
        if( _ta.parent().attr('data-type') ) _ta = $(_ta.parent()[0])
        if( _ta.parent().parent().attr('data-type') ) _ta = $(_ta.parent().parent()[0])

        var type = _ta.attr('data-type')

        switch( type ){
            case 'screen-nav':
            	var el = $('.navbar .nav'), so = $('.navbar .nav')

            	el.toggleClass('active')
            	so.slideToggle(300)

            break; case 'totop':
            	scrollTo()

            break; case 'torespond':
            	scrollTo('#respond')
				$('#txaArticle').focus()

            break; case 'switch-author':
            	$('.comt-comterinfo').slideToggle(300);
				$('#inpName').focus();
            	

            break; 
        }
    })
	
	
	/* comment
	 * ====================================================
	*/
	var options = {
		smilies: {
			'mrgreen': 'mrgreen',
			'razz': 'razz',
			'sad': 'sad',
			'smile': 'smile',
			'oops': 'redface',
			'grin': 'biggrin',
			'eek': 'surprised',
			'???': 'confused',
			'cool': 'cool',
			'lol': 'lol',
			'mad': 'mad',
			'twisted': 'twisted',
			'roll': 'rolleyes',
			'wink': 'wink',
			'idea': 'idea',
			'arrow': 'arrow',
			'neutral': 'neutral',
			'cry': 'cry',
			'?': 'question',
			'evil': 'evil',
			'shock': 'eek',
			'!': 'exclaim'
		}
	}

	$('.commentlist .url').attr('target','_blank')
	
	$('#comment-author-info p input').focus(function() {
		$(this).parent('p').addClass('on')
	})
	$('#comment-author-info p input').blur(function() {
		$(this).parent('p').removeClass('on')
	})

	$('#txaArticle').focus(function(){
		if( $('#inpName').val()=='' || $('#inpEmail').val()=='' ) $('.comt-comterinfo').slideDown(300)
	})

	var edit_mode = '0',
		txt1 = '<div class="comt-tip comt-loading">????????????, ?????????...</div>',
		txt2 = '<div class="comt-tip comt-error">#</div>',
		txt3 = '">????????????',
		cancel_edit = '????????????',
		edit,
		num = 1,
		comm_array = [];
	comm_array.push('');

	$comments = $('#comments-title');
	$cancel = $('#cancel-reply');
	cancel_text = $cancel.text();
	$submit = $('#commentform #submit');
	$submit.attr('disabled', false);
	$('.comt-tips').append(txt1 + txt2);
	$('.comt-loading').hide();
	$('.comt-error').hide();
	$body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
	/*
	$('#commentform').submit(function() {
	var strFormAction=$("#inpId").parent("form").attr("action");
	var strName=$("#inpName").val();
	var strEmail=$("#inpEmail").val();
	var strHomePage=$("#inpHomePage").val();
	var strVerify=$("#inpVerify").val();
	var strArticle=$("#txaArticle").val();
	var intReplyID=$("#inpRevID").val();
	var intPostID=$("#inpId").val();
	
	var intMaxLen=200;
	if(strName==""){
		alert("?????????????????????!");
		return false;
	}
	else{
		re = new RegExp("^[\.\_A-Za-z0-9\u4e00-\u9fa5]+$");
		if (!re.test(strName)){
			alert("????????????????????????!");
			return false;
		}
	}

	if(strEmail==""){
		alert("??????????????????!");
		return false;
	}
	else{
		re = new RegExp("^[\\w-]+(\\.[\\w-]+)*@[\\w-]+(\\.[\\w-]+)+$");
		if (!re.test(strEmail)){
			alert("?????????????????????!");
			return false;
		}
	}

	if(typeof(strArticle)=="undefined"){
		alert("????????????????????????!");
		return false;
	}

	if(typeof(strArticle)=="string"){
		if(strArticle==""){
			alert("????????????????????????!");
			return false;
		}
		if(strArticle.length>intMaxLen)
		{
			alert("????????????????????????!");
			return false;
		}
	}


	//ajax comment begin
	var strSubmit=$("#inpId").parent("form").find(":submit").val();
		$('.comt-loading').show();
		$submit.attr('disabled', true).fadeTo('slow', 0.5);
		if (edit) $('#txaArticle').after('<input type="text" name="edit_id" id="edit_id" value="' + edit + '" style="display:none;" />');
	$.post(strFormAction,
		{
		"isajax":true,
		"postid":intPostID,
		"verify":strVerify,
		"name":strName,		
		"email":strEmail,
		"content":strArticle,
		"homepage":strHomePage,
		"replyid":intReplyID,
		},
		function(data) {
					var s =data;
			if((s.search("faultCode")>0)&&(s.search("faultString")>0))
			{
				alert(s.match("<string>.+?</string>")[0].replace("<string>","").replace("</string>",""))
				$('.comt-loading').hide();
        $submit.val(submit_val).attr('disabled', false).fadeTo('slow', 1);
        $('.comt-comterinfo').slideDown(300);
			}
			else{
				$('.comt-loading').hide();
				comm_array.push($('#txaArticle').val());
				$('textarea').each(function() {
					this.value = ''
				});
				var t = addComment,
				cancel = t.I('cancel-reply'),
				temp = t.I('wp-temp-form-div'),
				respond = t.I(t.respondId),
				post = t.I('inpId').value,
				parent = t.I('inpRevID').value;
				if (!edit && $comments.length) {
					n = parseInt($comments.text().match(/\d+/));
					$comments.text($comments.text().replace(n, n + 1))
				}
				new_htm = '" id="new_comm_' + num + '"></';
				new_htm = (parent == '0') ? ('\n<ol style="clear:both;" class="commentlist commentnew' + new_htm + 'ol>') : ('\n<ul class="children' + new_htm + 'ul>');
				ok_htm = '\n<span id="success_' + num + txt3;
				ok_htm += '</span><span></span>\n';

				if( parent == '0' ){
					if( $('#postcomments .commentlist').length ){
						$('#postcomments .commentlist').before(new_htm);
					}else{
						$('#respond').after(new_htm);
					}
				}else{
					$('#respond').after(new_htm);
				}

				$('#comment-author-info').slideUp()

				console.log( $('#new_comm_' + num) )
				$('#new_comm_' + num).hide().append(data);
				$('#new_comm_' + num + ' li').append(ok_htm);
				$('#new_comm_' + num).fadeIn(4000);
				$body.animate({
					scrollTop: $('#new_comm_' + num).offset().top - 200
				},
				500);
				$('.comt-avatar .avatar').attr('src',$('.commentnew .avatar:last').attr('src'));
				countdown();
				num++;
				edit = '';
				$('*').remove('#edit_id');
				cancel.style.display = 'none';
				cancel.onclick = null;
					$("#inpRevID").val(0);
				if (temp && respond) {
					temp.parentNode.insertBefore(respond, temp);
					temp.parentNode.removeChild(temp)
				}
			}
		});
				SaveRememberInfo();
				CommentComplete();
		return false
	});
*/


zbp.plugin.unbind("comment.postsuccess", "system");
zbp.plugin.on("comment.postsuccess", "nblue", function (formData, dataarray, textStatus, jqXhr) {
        var obj = JSON.parse(dataarray);
        if (obj.err.code !== 0) {

				$('.comt-loading').hide();
        $submit.val(submit_val).attr('disabled', false).fadeTo('slow', 1);
        $('.comt-comterinfo').slideDown(300);
                alert(obj.err.msg);
                throw "ERROR - " + obj.err.msg
       }


        var data=obj.data.html;
				$('.comt-loading').hide();
        $submit.val(submit_val).attr('disabled', false).fadeTo('slow', 1);
        $("#cancel-reply").click();


				$('.comt-loading').hide();
				comm_array.push($('#txaArticle').val());
				$('textarea').each(function() {
					this.value = ''
				});
				var t = addComment,
				cancel = t.I('cancel-reply'),
				temp = t.I('wp-temp-form-div'),
				respond = t.I(t.respondId),
				post = t.I('inpId').value,
				parent = formData.replyid;
				if (!edit && $comments.length) {
					n = parseInt($comments.text().match(/\d+/));
					$comments.text($comments.text().replace(n, n + 1))
				}
				new_htm = '" id="new_comm_' + num + '"></';
				new_htm = (formData.replyid == '0') ? ('\n<ol style="clear:both;" class="commentlist commentnew' + new_htm + 'ol>') : ('\n<ul class="children' + new_htm + 'ul>');
				ok_htm = '\n<span id="success_' + num + txt3;
				ok_htm += '</span><span></span>\n';


            if (formData.replyid == "0") {
                $("#postcomments .commentlist").before(new_htm);
            } else {
                $("#div-comment-" + formData.replyid).after(new_htm);
            }



				$('#comment-author-info').slideUp()

				console.log( $('#new_comm_' + num) )
				$('#new_comm_' + num).hide().append(data);
				$('#new_comm_' + num + ' li').append(ok_htm);
				$('#new_comm_' + num).fadeIn(4000);
				$body.animate({
					scrollTop: $('#new_comm_' + num).offset().top - 200
				},
				500);
				$('.comt-avatar .avatar').attr('src',$('.commentnew .avatar:last').attr('src'));
				countdown();
				num++;
				edit = '';
				$('*').remove('#edit_id');
				cancel.style.display = 'none';
				cancel.onclick = null;
					$("#inpRevID").val(0);
				if (temp && respond) {
					temp.parentNode.insertBefore(respond, temp);
					temp.parentNode.removeChild(temp)
				}

            location.hash = "#cmt" + obj.data.ID;
            zbp.$("#txaArticle").val("");
            zbp.userinfo.saveFromHtml()






});
zbp.plugin.on("comment.posterror", "nblue", function () {
				$('.comt-loading').hide();
        $submit.val(submit_val).attr('disabled', false).fadeTo('slow', 1);
        $('.comt-comterinfo').slideDown(300);
});

zbp.plugin.on("comment.verifydata", "nblue", function () {
    $('.comt-loading').show();
		$submit.attr('disabled', true).fadeTo('slow', 0.5);

});
	addComment = {
		moveForm: function(commId, parentId, respondId, postId, num) {
			$("#inpRevID").val(parentId);
			var t = this,
			div, comm = t.I(commId),
			respond = t.I(respondId),
			cancel = t.I('cancel-reply'),
			parent = t.I('inpRevID'),
			post = t.I('inpId');
			if (edit) exit_prev_edit();
			num ? (t.I('comment').value = comm_array[num], edit = t.I('new_comm_' + num).innerHTML.match(/(comment-)(\d+)/)[2], $new_sucs = $('#success_' + num), $new_sucs.hide(), $new_comm = $('#new_comm_' + num), $new_comm.hide(), $cancel.text(cancel_edit)) : $cancel.text(cancel_text);
			t.respondId = respondId;
			postId = postId || false;
			if (!t.I('wp-temp-form-div')) {
				div = document.createElement('div');
				div.id = 'wp-temp-form-div';
				div.style.display = 'none';
				respond.parentNode.insertBefore(div, respond)
			} ! comm ? (temp = t.I('wp-temp-form-div'), t.I('inpRevID').value = '0', temp.parentNode.insertBefore(respond, temp), temp.parentNode.removeChild(temp)) : comm.parentNode.insertBefore(respond, comm.nextSibling);
			$body.animate({
				scrollTop: $('#respond').offset().top - 180
			},
			400);
			if (post && postId) post.value = postId;
			parent.value = parentId;
			cancel.style.display = '';
			cancel.onclick = function() {
				if (edit) exit_prev_edit();
				var t = addComment,
				temp = t.I('wp-temp-form-div'),
				respond = t.I(t.respondId);
				$("#inpRevID").val(0);
				if (temp && respond) {
					temp.parentNode.insertBefore(respond, temp);
					temp.parentNode.removeChild(temp)
				}
				this.style.display = 'none';
				this.onclick = null;
				return false
			};
			try {
				t.I('txaArticle').focus()
			} catch(e) {}
			return false
		},
		I: function(e) {
			return document.getElementById(e)
		}
	};
	function exit_prev_edit() {
		$new_comm.show();
		$new_sucs.show();
		$('textarea').each(function() {
			this.value = ''
		});
		edit = ''
	}
	var wait = 15,
	submit_val = $submit.val();
	function countdown() {
		if (wait > 0) {
			$submit.val(wait);
			wait--;
			setTimeout(countdown, 1000)
		} else {
			$submit.val(submit_val).attr('disabled', false).fadeTo('slow', 1);
			wait = 15
		}
	}


	/* functions
	 * ====================================================
	*/
	function scrollTo(name, speed){
        if( !speed ) speed = 300
        if( !name ){
            $('html,body').animate({scrollTop: 0},speed)
        }else{
            if( $(name).length>0 ){
                $('html,body').animate({scrollTop: $(name).offset().top},speed)
            }
        }
    }

    function is_ie6() {
      if ('undefined' == typeof(document.body.style.maxHeight)) {
             return true;        
      }
		return false;
	}

	function grin(tag) {
		tag = ' :' + tag + ': ';
		myField = document.getElementById('comment');
		document.selection ? (myField.focus(), sel = document.selection.createRange(), sel.text = tag, myField.focus()) : insertTag(tag)
	}

	function insertTag(tag) {
		myField = document.getElementById('comment');
		myField.selectionStart || myField.selectionStart == '0' ? (startPos = myField.selectionStart, endPos = myField.selectionEnd, cursorPos = startPos, myField.value = myField.value.substring(0, startPos) + tag + myField.value.substring(endPos, myField.value.length), cursorPos += tag.length, myField.focus(), myField.selectionStart = cursorPos, myField.selectionEnd = cursorPos) : (myField.value += tag, myField.focus())
	}

})
})(window.jQuery);




