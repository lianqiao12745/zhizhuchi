/*
 * jQuery FlexSlider v2.2.2
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */(function(e){e.flexslider=function(t,n){var r=e(t);r.vars=e.extend({},e.flexslider.defaults,n);var i=r.vars.namespace,s=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,o=("ontouchstart"in window||s||window.DocumentTouch&&document instanceof DocumentTouch)&&r.vars.touch,u="click touchend MSPointerUp",a="",f,l=r.vars.direction==="vertical",c=r.vars.reverse,h=r.vars.itemWidth>0,p=r.vars.animation==="fade",d=r.vars.asNavFor!=="",v={},m=!0;e.data(t,"flexslider",r);v={init:function(){r.animating=!1;r.currentSlide=parseInt(r.vars.startAt?r.vars.startAt:0,10);isNaN(r.currentSlide)&&(r.currentSlide=0);r.animatingTo=r.currentSlide;r.atEnd=r.currentSlide===0||r.currentSlide===r.last;r.containerSelector=r.vars.selector.substr(0,r.vars.selector.search(" "));r.slides=e(r.vars.selector,r);r.container=e(r.containerSelector,r);r.count=r.slides.length;r.syncExists=e(r.vars.sync).length>0;r.vars.animation==="slide"&&(r.vars.animation="swing");r.prop=l?"top":"marginLeft";r.args={};r.manualPause=!1;r.stopped=!1;r.started=!1;r.startTimeout=null;r.transitions=!r.vars.video&&!p&&r.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var n in t)if(e.style[t[n]]!==undefined){r.pfx=t[n].replace("Perspective","").toLowerCase();r.prop="-"+r.pfx+"-transform";return!0}return!1}();r.vars.controlsContainer!==""&&(r.controlsContainer=e(r.vars.controlsContainer).length>0&&e(r.vars.controlsContainer));r.vars.manualControls!==""&&(r.manualControls=e(r.vars.manualControls).length>0&&e(r.vars.manualControls));if(r.vars.randomize){r.slides.sort(function(){return Math.round(Math.random())-.5});r.container.empty().append(r.slides)}r.doMath();r.setup("init");r.vars.controlNav&&v.controlNav.setup();r.vars.directionNav&&v.directionNav.setup();r.vars.keyboard&&(e(r.containerSelector).length===1||r.vars.multipleKeyboard)&&e(document).bind("keyup",function(e){var t=e.keyCode;if(!r.animating&&(t===39||t===37)){var n=t===39?r.getTarget("next"):t===37?r.getTarget("prev"):!1;r.flexAnimate(n,r.vars.pauseOnAction)}});r.vars.mousewheel&&r.bind("mousewheel",function(e,t,n,i){e.preventDefault();var s=t<0?r.getTarget("next"):r.getTarget("prev");r.flexAnimate(s,r.vars.pauseOnAction)});r.vars.pausePlay&&v.pausePlay.setup();r.vars.slideshow&&r.vars.pauseInvisible&&v.pauseInvisible.init();if(r.vars.slideshow){r.vars.pauseOnHover&&r.hover(function(){!r.manualPlay&&!r.manualPause&&r.pause()},function(){!r.manualPause&&!r.manualPlay&&!r.stopped&&r.play()});if(!r.vars.pauseInvisible||!v.pauseInvisible.isHidden())r.vars.initDelay>0?r.startTimeout=setTimeout(r.play,r.vars.initDelay):r.play()}d&&v.asNav.setup();o&&r.vars.touch&&v.touch();(!p||p&&r.vars.smoothHeight)&&e(window).bind("resize orientationchange focus",v.resize);r.find("img").attr("draggable","false");setTimeout(function(){r.vars.start(r)},200)},asNav:{setup:function(){r.asNav=!0;r.animatingTo=Math.floor(r.currentSlide/r.move);r.currentItem=r.currentSlide;r.slides.removeClass(i+"active-slide").eq(r.currentItem).addClass(i+"active-slide");if(!s)r.slides.on(u,function(t){t.preventDefault();var n=e(this),s=n.index(),o=n.offset().left-e(r).scrollLeft();if(o<=0&&n.hasClass(i+"active-slide"))r.flexAnimate(r.getTarget("prev"),!0);else if(!e(r.vars.asNavFor).data("flexslider").animating&&!n.hasClass(i+"active-slide")){r.direction=r.currentItem<s?"next":"prev";r.flexAnimate(s,r.vars.pauseOnAction,!1,!0,!0)}});else{t._slider=r;r.slides.each(function(){var t=this;t._gesture=new MSGesture;t._gesture.target=t;t.addEventListener("MSPointerDown",function(e){e.preventDefault();e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1);t.addEventListener("MSGestureTap",function(t){t.preventDefault();var n=e(this),i=n.index();if(!e(r.vars.asNavFor).data("flexslider").animating&&!n.hasClass("active")){r.direction=r.currentItem<i?"next":"prev";r.flexAnimate(i,r.vars.pauseOnAction,!1,!0,!0)}})})}}},controlNav:{setup:function(){r.manualControls?v.controlNav.setupManual():v.controlNav.setupPaging()},setupPaging:function(){var t=r.vars.controlNav==="thumbnails"?"control-thumbs":"control-paging",n=1,s,o;r.controlNavScaffold=e('<ol class="'+i+"control-nav "+i+t+'"></ol>');if(r.pagingCount>1)for(var f=0;f<r.pagingCount;f++){o=r.slides.eq(f);s=r.vars.controlNav==="thumbnails"?'<img src="'+o.attr("data-thumb")+'"/>':"<a>"+n+"</a>";if("thumbnails"===r.vars.controlNav&&!0===r.vars.thumbCaptions){var l=o.attr("data-thumbcaption");""!=l&&undefined!=l&&(s+='<span class="'+i+'caption">'+l+"</span>")}r.controlNavScaffold.append("<li>"+s+"</li>");n++}r.controlsContainer?e(r.controlsContainer).append(r.controlNavScaffold):r.append(r.controlNavScaffold);v.controlNav.set();v.controlNav.active();r.controlNavScaffold.delegate("a, img",u,function(t){t.preventDefault();if(a===""||a===t.type){var n=e(this),s=r.controlNav.index(n);if(!n.hasClass(i+"active")){r.direction=s>r.currentSlide?"next":"prev";r.flexAnimate(s,r.vars.pauseOnAction)}}a===""&&(a=t.type);v.setToClearWatchedEvent()})},setupManual:function(){r.controlNav=r.manualControls;v.controlNav.active();r.controlNav.bind(u,function(t){t.preventDefault();if(a===""||a===t.type){var n=e(this),s=r.controlNav.index(n);if(!n.hasClass(i+"active")){s>r.currentSlide?r.direction="next":r.direction="prev";r.flexAnimate(s,r.vars.pauseOnAction)}}a===""&&(a=t.type);v.setToClearWatchedEvent()})},set:function(){var t=r.vars.controlNav==="thumbnails"?"img":"a";r.controlNav=e("."+i+"control-nav li "+t,r.controlsContainer?r.controlsContainer:r)},active:function(){r.controlNav.removeClass(i+"active").eq(r.animatingTo).addClass(i+"active")},update:function(t,n){r.pagingCount>1&&t==="add"?r.controlNavScaffold.append(e("<li><a>"+r.count+"</a></li>")):r.pagingCount===1?r.controlNavScaffold.find("li").remove():r.controlNav.eq(n).closest("li").remove();v.controlNav.set();r.pagingCount>1&&r.pagingCount!==r.controlNav.length?r.update(n,t):v.controlNav.active()}},directionNav:{setup:function(){var t=e('<ul class="'+i+'direction-nav"><li><a class="'+i+'prev" href="#">'+r.vars.prevText+'</a></li><li><a class="'+i+'next" href="#">'+r.vars.nextText+"</a></li></ul>");if(r.controlsContainer){e(r.controlsContainer).append(t);r.directionNav=e("."+i+"direction-nav li a",r.controlsContainer)}else{r.append(t);r.directionNav=e("."+i+"direction-nav li a",r)}v.directionNav.update();r.directionNav.bind(u,function(t){t.preventDefault();var n;if(a===""||a===t.type){n=e(this).hasClass(i+"next")?r.getTarget("next"):r.getTarget("prev");r.flexAnimate(n,r.vars.pauseOnAction)}a===""&&(a=t.type);v.setToClearWatchedEvent()})},update:function(){var e=i+"disabled";r.pagingCount===1?r.directionNav.addClass(e).attr("tabindex","-1"):r.vars.animationLoop?r.directionNav.removeClass(e).removeAttr("tabindex"):r.animatingTo===0?r.directionNav.removeClass(e).filter("."+i+"prev").addClass(e).attr("tabindex","-1"):r.animatingTo===r.last?r.directionNav.removeClass(e).filter("."+i+"next").addClass(e).attr("tabindex","-1"):r.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var t=e('<div class="'+i+'pauseplay"><a></a></div>');if(r.controlsContainer){r.controlsContainer.append(t);r.pausePlay=e("."+i+"pauseplay a",r.controlsContainer)}else{r.append(t);r.pausePlay=e("."+i+"pauseplay a",r)}v.pausePlay.update(r.vars.slideshow?i+"pause":i+"play");r.pausePlay.bind(u,function(t){t.preventDefault();if(a===""||a===t.type)if(e(this).hasClass(i+"pause")){r.manualPause=!0;r.manualPlay=!1;r.pause()}else{r.manualPause=!1;r.manualPlay=!0;r.play()}a===""&&(a=t.type);v.setToClearWatchedEvent()})},update:function(e){e==="play"?r.pausePlay.removeClass(i+"pause").addClass(i+"play").html(r.vars.playText):r.pausePlay.removeClass(i+"play").addClass(i+"pause").html(r.vars.pauseText)}},touch:function(){var e,n,i,o,u,a,f=!1,d=0,v=0,m=0;if(!s){t.addEventListener("touchstart",g,!1);function g(s){if(r.animating)s.preventDefault();else if(window.navigator.msPointerEnabled||s.touches.length===1){r.pause();o=l?r.h:r.w;a=Number(new Date);d=s.touches[0].pageX;v=s.touches[0].pageY;i=h&&c&&r.animatingTo===r.last?0:h&&c?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:h&&r.currentSlide===r.last?r.limit:h?(r.itemW+r.vars.itemMargin)*r.move*r.currentSlide:c?(r.last-r.currentSlide+r.cloneOffset)*o:(r.currentSlide+r.cloneOffset)*o;e=l?v:d;n=l?d:v;t.addEventListener("touchmove",y,!1);t.addEventListener("touchend",b,!1)}}function y(t){d=t.touches[0].pageX;v=t.touches[0].pageY;u=l?e-v:e-d;f=l?Math.abs(u)<Math.abs(d-n):Math.abs(u)<Math.abs(v-n);var s=500;if(!f||Number(new Date)-a>s){t.preventDefault();if(!p&&r.transitions){r.vars.animationLoop||(u/=r.currentSlide===0&&u<0||r.currentSlide===r.last&&u>0?Math.abs(u)/o+2:1);r.setProps(i+u,"setTouch")}}}function b(s){t.removeEventListener("touchmove",y,!1);if(r.animatingTo===r.currentSlide&&!f&&u!==null){var l=c?-u:u,h=l>0?r.getTarget("next"):r.getTarget("prev");r.canAdvance(h)&&(Number(new Date)-a<550&&Math.abs(l)>50||Math.abs(l)>o/2)?r.flexAnimate(h,r.vars.pauseOnAction):p||r.flexAnimate(r.currentSlide,r.vars.pauseOnAction,!0)}t.removeEventListener("touchend",b,!1);e=null;n=null;u=null;i=null}}else{t.style.msTouchAction="none";t._gesture=new MSGesture;t._gesture.target=t;t.addEventListener("MSPointerDown",w,!1);t._slider=r;t.addEventListener("MSGestureChange",E,!1);t.addEventListener("MSGestureEnd",S,!1);function w(e){e.stopPropagation();if(r.animating)e.preventDefault();else{r.pause();t._gesture.addPointer(e.pointerId);m=0;o=l?r.h:r.w;a=Number(new Date);i=h&&c&&r.animatingTo===r.last?0:h&&c?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:h&&r.currentSlide===r.last?r.limit:h?(r.itemW+r.vars.itemMargin)*r.move*r.currentSlide:c?(r.last-r.currentSlide+r.cloneOffset)*o:(r.currentSlide+r.cloneOffset)*o}}function E(e){e.stopPropagation();var n=e.target._slider;if(!n)return;var r=-e.translationX,s=-e.translationY;m+=l?s:r;u=m;f=l?Math.abs(m)<Math.abs(-r):Math.abs(m)<Math.abs(-s);if(e.detail===e.MSGESTURE_FLAG_INERTIA){setImmediate(function(){t._gesture.stop()});return}if(!f||Number(new Date)-a>500){e.preventDefault();if(!p&&n.transitions){n.vars.animationLoop||(u=m/(n.currentSlide===0&&m<0||n.currentSlide===n.last&&m>0?Math.abs(m)/o+2:1));n.setProps(i+u,"setTouch")}}}function S(t){t.stopPropagation();var r=t.target._slider;if(!r)return;if(r.animatingTo===r.currentSlide&&!f&&u!==null){var s=c?-u:u,l=s>0?r.getTarget("next"):r.getTarget("prev");r.canAdvance(l)&&(Number(new Date)-a<550&&Math.abs(s)>50||Math.abs(s)>o/2)?r.flexAnimate(l,r.vars.pauseOnAction):p||r.flexAnimate(r.currentSlide,r.vars.pauseOnAction,!0)}e=null;n=null;u=null;i=null;m=0}}},resize:function(){if(!r.animating&&r.is(":visible")){h||r.doMath();if(p)v.smoothHeight();else if(h){r.slides.width(r.computedW);r.update(r.pagingCount);r.setProps()}else if(l){r.viewport.height(r.h);r.setProps(r.h,"setTotal")}else{r.vars.smoothHeight&&v.smoothHeight();r.newSlides.width(r.computedW);r.setProps(r.computedW,"setTotal")}}},smoothHeight:function(e){if(!l||p){var t=p?r:r.viewport;e?t.animate({height:r.slides.eq(r.animatingTo).height()},e):t.height(r.slides.eq(r.animatingTo).height())}},sync:function(t){var n=e(r.vars.sync).data("flexslider"),i=r.animatingTo;switch(t){case"animate":n.flexAnimate(i,r.vars.pauseOnAction,!1,!0);break;case"play":!n.playing&&!n.asNav&&n.play();break;case"pause":n.pause()}},uniqueID:function(t){t.find("[id]").each(function(){var t=e(this);t.attr("id",t.attr("id")+"_clone")});return t},pauseInvisible:{visProp:null,init:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)e[t]+"Hidden"in document&&(v.pauseInvisible.visProp=e[t]+"Hidden");if(v.pauseInvisible.visProp){var n=v.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(n,function(){v.pauseInvisible.isHidden()?r.startTimeout?clearTimeout(r.startTimeout):r.pause():r.started?r.play():r.vars.initDelay>0?setTimeout(r.play,r.vars.initDelay):r.play()})}},isHidden:function(){return document[v.pauseInvisible.visProp]||!1}},setToClearWatchedEvent:function(){clearTimeout(f);f=setTimeout(function(){a=""},3e3)}};r.flexAnimate=function(t,n,s,u,a){!r.vars.animationLoop&&t!==r.currentSlide&&(r.direction=t>r.currentSlide?"next":"prev");d&&r.pagingCount===1&&(r.direction=r.currentItem<t?"next":"prev");if(!r.animating&&(r.canAdvance(t,a)||s)&&r.is(":visible")){if(d&&u){var f=e(r.vars.asNavFor).data("flexslider");r.atEnd=t===0||t===r.count-1;f.flexAnimate(t,!0,!1,!0,a);r.direction=r.currentItem<t?"next":"prev";f.direction=r.direction;if(Math.ceil((t+1)/r.visible)-1===r.currentSlide||t===0){r.currentItem=t;r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");return!1}r.currentItem=t;r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");t=Math.floor(t/r.visible)}r.animating=!0;r.animatingTo=t;n&&r.pause();r.vars.before(r);r.syncExists&&!a&&v.sync("animate");r.vars.controlNav&&v.controlNav.active();h||r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");r.atEnd=t===0||t===r.last;r.vars.directionNav&&v.directionNav.update();if(t===r.last){r.vars.end(r);r.vars.animationLoop||r.pause()}if(!p){var m=l?r.slides.filter(":first").height():r.computedW,g,y,b;if(h){g=r.vars.itemMargin;b=(r.itemW+g)*r.move*r.animatingTo;y=b>r.limit&&r.visible!==1?r.limit:b}else r.currentSlide===0&&t===r.count-1&&r.vars.animationLoop&&r.direction!=="next"?y=c?(r.count+r.cloneOffset)*m:0:r.currentSlide===r.last&&t===0&&r.vars.animationLoop&&r.direction!=="prev"?y=c?0:(r.count+1)*m:y=c?(r.count-1-t+r.cloneOffset)*m:(t+r.cloneOffset)*m;r.setProps(y,"",r.vars.animationSpeed);if(r.transitions){if(!r.vars.animationLoop||!r.atEnd){r.animating=!1;r.currentSlide=r.animatingTo}r.container.unbind("webkitTransitionEnd transitionend");r.container.bind("webkitTransitionEnd transitionend",function(){r.wrapup(m)})}else r.container.animate(r.args,r.vars.animationSpeed,r.vars.easing,function(){r.wrapup(m)})}else if(!o){r.slides.eq(r.currentSlide).css({zIndex:1}).animate({opacity:0},r.vars.animationSpeed,r.vars.easing);r.slides.eq(t).css({zIndex:2}).animate({opacity:1},r.vars.animationSpeed,r.vars.easing,r.wrapup)}else{r.slides.eq(r.currentSlide).css({opacity:0,zIndex:1});r.slides.eq(t).css({opacity:1,zIndex:2});r.wrapup(m)}r.vars.smoothHeight&&v.smoothHeight(r.vars.animationSpeed)}};r.wrapup=function(e){!p&&!h&&(r.currentSlide===0&&r.animatingTo===r.last&&r.vars.animationLoop?r.setProps(e,"jumpEnd"):r.currentSlide===r.last&&r.animatingTo===0&&r.vars.animationLoop&&r.setProps(e,"jumpStart"));r.animating=!1;r.currentSlide=r.animatingTo;r.vars.after(r)};r.animateSlides=function(){!r.animating&&m&&r.flexAnimate(r.getTarget("next"))};r.pause=function(){clearInterval(r.animatedSlides);r.animatedSlides=null;r.playing=!1;r.vars.pausePlay&&v.pausePlay.update("play");r.syncExists&&v.sync("pause")};r.play=function(){r.playing&&clearInterval(r.animatedSlides);r.animatedSlides=r.animatedSlides||setInterval(r.animateSlides,r.vars.slideshowSpeed);r.started=r.playing=!0;r.vars.pausePlay&&v.pausePlay.update("pause");r.syncExists&&v.sync("play")};r.stop=function(){r.pause();r.stopped=!0};r.canAdvance=function(e,t){var n=d?r.pagingCount-1:r.last;return t?!0:d&&r.currentItem===r.count-1&&e===0&&r.direction==="prev"?!0:d&&r.currentItem===0&&e===r.pagingCount-1&&r.direction!=="next"?!1:e===r.currentSlide&&!d?!1:r.vars.animationLoop?!0:r.atEnd&&r.currentSlide===0&&e===n&&r.direction!=="next"?!1:r.atEnd&&r.currentSlide===n&&e===0&&r.direction==="next"?!1:!0};r.getTarget=function(e){r.direction=e;return e==="next"?r.currentSlide===r.last?0:r.currentSlide+1:r.currentSlide===0?r.last:r.currentSlide-1};r.setProps=function(e,t,n){var i=function(){var n=e?e:(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo,i=function(){if(h)return t==="setTouch"?e:c&&r.animatingTo===r.last?0:c?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:r.animatingTo===r.last?r.limit:n;switch(t){case"setTotal":return c?(r.count-1-r.currentSlide+r.cloneOffset)*e:(r.currentSlide+r.cloneOffset)*e;case"setTouch":return c?e:e;case"jumpEnd":return c?e:r.count*e;case"jumpStart":return c?r.count*e:e;default:return e}}();return i*-1+"px"}();if(r.transitions){i=l?"translate3d(0,"+i+",0)":"translate3d("+i+",0,0)";n=n!==undefined?n/1e3+"s":"0s";r.container.css("-"+r.pfx+"-transition-duration",n);r.container.css("transition-duration",n)}r.args[r.prop]=i;(r.transitions||n===undefined)&&r.container.css(r.args);r.container.css("transform",i)};r.setup=function(t){if(!p){var n,s;if(t==="init"){r.viewport=e('<div class="'+i+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(r).append(r.container);r.cloneCount=0;r.cloneOffset=0;if(c){s=e.makeArray(r.slides).reverse();r.slides=e(s);r.container.empty().append(r.slides)}}if(r.vars.animationLoop&&!h){r.cloneCount=2;r.cloneOffset=1;t!=="init"&&r.container.find(".clone").remove();r.container.append(r.slides.first().clone().addClass("clone").attr("aria-hidden","true")).prepend(r.slides.last().clone().addClass("clone").attr("aria-hidden","true"));v.uniqueID(r.slides.first().clone().addClass("clone")).appendTo(r.container);v.uniqueID(r.slides.last().clone().addClass("clone")).prependTo(r.container)}r.newSlides=e(r.vars.selector,r);n=c?r.count-1-r.currentSlide+r.cloneOffset:r.currentSlide+r.cloneOffset;if(l&&!h){r.container.height((r.count+r.cloneCount)*200+"%").css("position","absolute").width("100%");setTimeout(function(){r.newSlides.css({display:"block"});r.doMath();r.viewport.height(r.h);r.setProps(n*r.h,"init")},t==="init"?100:0)}else{r.container.width((r.count+r.cloneCount)*200+"%");r.setProps(n*r.computedW,"init");setTimeout(function(){r.doMath();r.newSlides.css({width:r.computedW,"float":"left",display:"block"});r.vars.smoothHeight&&v.smoothHeight()},t==="init"?100:0)}}else{r.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"});t==="init"&&(o?r.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+r.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(r.currentSlide).css({opacity:1,zIndex:2}):r.slides.css({opacity:0,display:"block",zIndex:1}).eq(r.currentSlide).css({zIndex:2}).animate({opacity:1},r.vars.animationSpeed,r.vars.easing));r.vars.smoothHeight&&v.smoothHeight()}h||r.slides.removeClass(i+"active-slide").eq(r.currentSlide).addClass(i+"active-slide");r.vars.init(r)};r.doMath=function(){var e=r.slides.first(),t=r.vars.itemMargin,n=r.vars.minItems,i=r.vars.maxItems;r.w=r.viewport===undefined?r.width():r.viewport.width();r.h=e.height();r.boxPadding=e.outerWidth()-e.width();if(h){r.itemT=r.vars.itemWidth+t;r.minW=n?n*r.itemT:r.w;r.maxW=i?i*r.itemT-t:r.w;r.itemW=r.minW>r.w?(r.w-t*(n-1))/n:r.maxW<r.w?(r.w-t*(i-1))/i:r.vars.itemWidth>r.w?r.w:r.vars.itemWidth;r.visible=Math.floor(r.w/r.itemW);r.move=r.vars.move>0&&r.vars.move<r.visible?r.vars.move:r.visible;r.pagingCount=Math.ceil((r.count-r.visible)/r.move+1);r.last=r.pagingCount-1;r.limit=r.pagingCount===1?0:r.vars.itemWidth>r.w?r.itemW*(r.count-1)+t*(r.count-1):(r.itemW+t)*r.count-r.w-t}else{r.itemW=r.w;r.pagingCount=r.count;r.last=r.count-1}r.computedW=r.itemW-r.boxPadding};r.update=function(e,t){r.doMath();if(!h){e<r.currentSlide?r.currentSlide+=1:e<=r.currentSlide&&e!==0&&(r.currentSlide-=1);r.animatingTo=r.currentSlide}if(r.vars.controlNav&&!r.manualControls)if(t==="add"&&!h||r.pagingCount>r.controlNav.length)v.controlNav.update("add");else if(t==="remove"&&!h||r.pagingCount<r.controlNav.length){if(h&&r.currentSlide>r.last){r.currentSlide-=1;r.animatingTo-=1}v.controlNav.update("remove",r.last)}r.vars.directionNav&&v.directionNav.update()};r.addSlide=function(t,n){var i=e(t);r.count+=1;r.last=r.count-1;l&&c?n!==undefined?r.slides.eq(r.count-n).after(i):r.container.prepend(i):n!==undefined?r.slides.eq(n).before(i):r.container.append(i);r.update(n,"add");r.slides=e(r.vars.selector+":not(.clone)",r);r.setup();r.vars.added(r)};r.removeSlide=function(t){var n=isNaN(t)?r.slides.index(e(t)):t;r.count-=1;r.last=r.count-1;isNaN(t)?e(t,r.slides).remove():l&&c?r.slides.eq(r.last).remove():r.slides.eq(t).remove();r.doMath();r.update(n,"remove");r.slides=e(r.vars.selector+":not(.clone)",r);r.setup();r.vars.removed(r)};v.init()};e(window).blur(function(e){focused=!1}).focus(function(e){focused=!0});e.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}};e.fn.flexslider=function(t){t===undefined&&(t={});if(typeof t=="object")return this.each(function(){var n=e(this),r=t.selector?t.selector:".slides > li",i=n.find(r);if(i.length===1&&t.allowOneSlide===!0||i.length===0){i.fadeIn(400);t.start&&t.start(n)}else n.data("flexslider")===undefined&&new e.flexslider(this,t)});var n=e(this).data("flexslider");switch(t){case"play":n.play();break;case"pause":n.pause();break;case"stop":n.stop();break;case"next":n.flexAnimate(n.getTarget("next"),!0);break;case"prev":case"previous":n.flexAnimate(n.getTarget("prev"),!0);break;default:typeof t=="number"&&n.flexAnimate(t,!0)}}})(jQuery);(function(e){e.flexslider=function(t,n){var r=e(t);r.vars=e.extend({},e.flexslider.defaults,n);var i=r.vars.namespace,s=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,o=("ontouchstart"in window||s||window.DocumentTouch&&document instanceof DocumentTouch)&&r.vars.touch,u="click touchend MSPointerUp",a="",f,l=r.vars.direction==="vertical",c=r.vars.reverse,h=r.vars.itemWidth>0,p=r.vars.animation==="fade",d=r.vars.asNavFor!=="",v={},m=!0;e.data(t,"flexslider",r);v={init:function(){r.animating=!1;r.currentSlide=parseInt(r.vars.startAt?r.vars.startAt:0,10);isNaN(r.currentSlide)&&(r.currentSlide=0);r.animatingTo=r.currentSlide;r.atEnd=r.currentSlide===0||r.currentSlide===r.last;r.containerSelector=r.vars.selector.substr(0,r.vars.selector.search(" "));r.slides=e(r.vars.selector,r);r.container=e(r.containerSelector,r);r.count=r.slides.length;r.syncExists=e(r.vars.sync).length>0;r.vars.animation==="slide"&&(r.vars.animation="swing");r.prop=l?"top":"marginLeft";r.args={};r.manualPause=!1;r.stopped=!1;r.started=!1;r.startTimeout=null;r.transitions=!r.vars.video&&!p&&r.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var n in t)if(e.style[t[n]]!==undefined){r.pfx=t[n].replace("Perspective","").toLowerCase();r.prop="-"+r.pfx+"-transform";return!0}return!1}();r.vars.controlsContainer!==""&&(r.controlsContainer=e(r.vars.controlsContainer).length>0&&e(r.vars.controlsContainer));r.vars.manualControls!==""&&(r.manualControls=e(r.vars.manualControls).length>0&&e(r.vars.manualControls));if(r.vars.randomize){r.slides.sort(function(){return Math.round(Math.random())-.5});r.container.empty().append(r.slides)}r.doMath();r.setup("init");r.vars.controlNav&&v.controlNav.setup();r.vars.directionNav&&v.directionNav.setup();r.vars.keyboard&&(e(r.containerSelector).length===1||r.vars.multipleKeyboard)&&e(document).bind("keyup",function(e){var t=e.keyCode;if(!r.animating&&(t===39||t===37)){var n=t===39?r.getTarget("next"):t===37?r.getTarget("prev"):!1;r.flexAnimate(n,r.vars.pauseOnAction)}});r.vars.mousewheel&&r.bind("mousewheel",function(e,t,n,i){e.preventDefault();var s=t<0?r.getTarget("next"):r.getTarget("prev");r.flexAnimate(s,r.vars.pauseOnAction)});r.vars.pausePlay&&v.pausePlay.setup();r.vars.slideshow&&r.vars.pauseInvisible&&v.pauseInvisible.init();if(r.vars.slideshow){r.vars.pauseOnHover&&r.hover(function(){!r.manualPlay&&!r.manualPause&&r.pause()},function(){!r.manualPause&&!r.manualPlay&&!r.stopped&&r.play()});if(!r.vars.pauseInvisible||!v.pauseInvisible.isHidden())r.vars.initDelay>0?r.startTimeout=setTimeout(r.play,r.vars.initDelay):r.play()}d&&v.asNav.setup();o&&r.vars.touch&&v.touch();(!p||p&&r.vars.smoothHeight)&&e(window).bind("resize orientationchange focus",v.resize);r.find("img").attr("draggable","false");setTimeout(function(){r.vars.start(r)},200)},asNav:{setup:function(){r.asNav=!0;r.animatingTo=Math.floor(r.currentSlide/r.move);r.currentItem=r.currentSlide;r.slides.removeClass(i+"active-slide").eq(r.currentItem).addClass(i+"active-slide");if(!s)r.slides.on(u,function(t){t.preventDefault();var n=e(this),s=n.index(),o=n.offset().left-e(r).scrollLeft();if(o<=0&&n.hasClass(i+"active-slide"))r.flexAnimate(r.getTarget("prev"),!0);else if(!e(r.vars.asNavFor).data("flexslider").animating&&!n.hasClass(i+"active-slide")){r.direction=r.currentItem<s?"next":"prev";r.flexAnimate(s,r.vars.pauseOnAction,!1,!0,!0)}});else{t._slider=r;r.slides.each(function(){var t=this;t._gesture=new MSGesture;t._gesture.target=t;t.addEventListener("MSPointerDown",function(e){e.preventDefault();e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1);t.addEventListener("MSGestureTap",function(t){t.preventDefault();var n=e(this),i=n.index();if(!e(r.vars.asNavFor).data("flexslider").animating&&!n.hasClass("active")){r.direction=r.currentItem<i?"next":"prev";r.flexAnimate(i,r.vars.pauseOnAction,!1,!0,!0)}})})}}},controlNav:{setup:function(){r.manualControls?v.controlNav.setupManual():v.controlNav.setupPaging()},setupPaging:function(){var t=r.vars.controlNav==="thumbnails"?"control-thumbs":"control-paging",n=1,s,o;r.controlNavScaffold=e('<ol class="'+i+"control-nav "+i+t+'"></ol>');if(r.pagingCount>1)for(var f=0;f<r.pagingCount;f++){o=r.slides.eq(f);s=r.vars.controlNav==="thumbnails"?'<img src="'+o.attr("data-thumb")+'"/>':"<a>"+n+"</a>";if("thumbnails"===r.vars.controlNav&&!0===r.vars.thumbCaptions){var l=o.attr("data-thumbcaption");""!=l&&undefined!=l&&(s+='<span class="'+i+'caption">'+l+"</span>")}r.controlNavScaffold.append("<li>"+s+"</li>");n++}r.controlsContainer?e(r.controlsContainer).append(r.controlNavScaffold):r.append(r.controlNavScaffold);v.controlNav.set();v.controlNav.active();r.controlNavScaffold.delegate("a, img",u,function(t){t.preventDefault();if(a===""||a===t.type){var n=e(this),s=r.controlNav.index(n);if(!n.hasClass(i+"active")){r.direction=s>r.currentSlide?"next":"prev";r.flexAnimate(s,r.vars.pauseOnAction)}}a===""&&(a=t.type);v.setToClearWatchedEvent()})},setupManual:function(){r.controlNav=r.manualControls;v.controlNav.active();r.controlNav.bind(u,function(t){t.preventDefault();if(a===""||a===t.type){var n=e(this),s=r.controlNav.index(n);if(!n.hasClass(i+"active")){s>r.currentSlide?r.direction="next":r.direction="prev";r.flexAnimate(s,r.vars.pauseOnAction)}}a===""&&(a=t.type);v.setToClearWatchedEvent()})},set:function(){var t=r.vars.controlNav==="thumbnails"?"img":"a";r.controlNav=e("."+i+"control-nav li "+t,r.controlsContainer?r.controlsContainer:r)},active:function(){r.controlNav.removeClass(i+"active").eq(r.animatingTo).addClass(i+"active")},update:function(t,n){r.pagingCount>1&&t==="add"?r.controlNavScaffold.append(e("<li><a>"+r.count+"</a></li>")):r.pagingCount===1?r.controlNavScaffold.find("li").remove():r.controlNav.eq(n).closest("li").remove();v.controlNav.set();r.pagingCount>1&&r.pagingCount!==r.controlNav.length?r.update(n,t):v.controlNav.active()}},directionNav:{setup:function(){var t=e('<ul class="'+i+'direction-nav"><li><a class="'+i+'prev" href="#">'+r.vars.prevText+'</a></li><li><a class="'+i+'next" href="#">'+r.vars.nextText+"</a></li></ul>");if(r.controlsContainer){e(r.controlsContainer).append(t);r.directionNav=e("."+i+"direction-nav li a",r.controlsContainer)}else{r.append(t);r.directionNav=e("."+i+"direction-nav li a",r)}v.directionNav.update();r.directionNav.bind(u,function(t){t.preventDefault();var n;if(a===""||a===t.type){n=e(this).hasClass(i+"next")?r.getTarget("next"):r.getTarget("prev");r.flexAnimate(n,r.vars.pauseOnAction)}a===""&&(a=t.type);v.setToClearWatchedEvent()})},update:function(){var e=i+"disabled";r.pagingCount===1?r.directionNav.addClass(e).attr("tabindex","-1"):r.vars.animationLoop?r.directionNav.removeClass(e).removeAttr("tabindex"):r.animatingTo===0?r.directionNav.removeClass(e).filter("."+i+"prev").addClass(e).attr("tabindex","-1"):r.animatingTo===r.last?r.directionNav.removeClass(e).filter("."+i+"next").addClass(e).attr("tabindex","-1"):r.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var t=e('<div class="'+i+'pauseplay"><a></a></div>');if(r.controlsContainer){r.controlsContainer.append(t);r.pausePlay=e("."+i+"pauseplay a",r.controlsContainer)}else{r.append(t);r.pausePlay=e("."+i+"pauseplay a",r)}v.pausePlay.update(r.vars.slideshow?i+"pause":i+"play");r.pausePlay.bind(u,function(t){t.preventDefault();if(a===""||a===t.type)if(e(this).hasClass(i+"pause")){r.manualPause=!0;r.manualPlay=!1;r.pause()}else{r.manualPause=!1;r.manualPlay=!0;r.play()}a===""&&(a=t.type);v.setToClearWatchedEvent()})},update:function(e){e==="play"?r.pausePlay.removeClass(i+"pause").addClass(i+"play").html(r.vars.playText):r.pausePlay.removeClass(i+"play").addClass(i+"pause").html(r.vars.pauseText)}},touch:function(){var e,n,i,o,u,a,f=!1,d=0,v=0,m=0;if(!s){t.addEventListener("touchstart",g,!1);function g(s){if(r.animating)s.preventDefault();else if(window.navigator.msPointerEnabled||s.touches.length===1){r.pause();o=l?r.h:r.w;a=Number(new Date);d=s.touches[0].pageX;v=s.touches[0].pageY;i=h&&c&&r.animatingTo===r.last?0:h&&c?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:h&&r.currentSlide===r.last?r.limit:h?(r.itemW+r.vars.itemMargin)*r.move*r.currentSlide:c?(r.last-r.currentSlide+r.cloneOffset)*o:(r.currentSlide+r.cloneOffset)*o;e=l?v:d;n=l?d:v;t.addEventListener("touchmove",y,!1);t.addEventListener("touchend",b,!1)}}function y(t){d=t.touches[0].pageX;v=t.touches[0].pageY;u=l?e-v:e-d;f=l?Math.abs(u)<Math.abs(d-n):Math.abs(u)<Math.abs(v-n);var s=500;if(!f||Number(new Date)-a>s){t.preventDefault();if(!p&&r.transitions){r.vars.animationLoop||(u/=r.currentSlide===0&&u<0||r.currentSlide===r.last&&u>0?Math.abs(u)/o+2:1);r.setProps(i+u,"setTouch")}}}function b(s){t.removeEventListener("touchmove",y,!1);if(r.animatingTo===r.currentSlide&&!f&&u!==null){var l=c?-u:u,h=l>0?r.getTarget("next"):r.getTarget("prev");r.canAdvance(h)&&(Number(new Date)-a<550&&Math.abs(l)>50||Math.abs(l)>o/2)?r.flexAnimate(h,r.vars.pauseOnAction):p||r.flexAnimate(r.currentSlide,r.vars.pauseOnAction,!0)}t.removeEventListener("touchend",b,!1);e=null;n=null;u=null;i=null}}else{t.style.msTouchAction="none";t._gesture=new MSGesture;t._gesture.target=t;t.addEventListener("MSPointerDown",w,!1);t._slider=r;t.addEventListener("MSGestureChange",E,!1);t.addEventListener("MSGestureEnd",S,!1);function w(e){e.stopPropagation();if(r.animating)e.preventDefault();else{r.pause();t._gesture.addPointer(e.pointerId);m=0;o=l?r.h:r.w;a=Number(new Date);i=h&&c&&r.animatingTo===r.last?0:h&&c?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:h&&r.currentSlide===r.last?r.limit:h?(r.itemW+r.vars.itemMargin)*r.move*r.currentSlide:c?(r.last-r.currentSlide+r.cloneOffset)*o:(r.currentSlide+r.cloneOffset)*o}}function E(e){e.stopPropagation();var n=e.target._slider;if(!n)return;var r=-e.translationX,s=-e.translationY;m+=l?s:r;u=m;f=l?Math.abs(m)<Math.abs(-r):Math.abs(m)<Math.abs(-s);if(e.detail===e.MSGESTURE_FLAG_INERTIA){setImmediate(function(){t._gesture.stop()});return}if(!f||Number(new Date)-a>500){e.preventDefault();if(!p&&n.transitions){n.vars.animationLoop||(u=m/(n.currentSlide===0&&m<0||n.currentSlide===n.last&&m>0?Math.abs(m)/o+2:1));n.setProps(i+u,"setTouch")}}}function S(t){t.stopPropagation();var r=t.target._slider;if(!r)return;if(r.animatingTo===r.currentSlide&&!f&&u!==null){var s=c?-u:u,l=s>0?r.getTarget("next"):r.getTarget("prev");r.canAdvance(l)&&(Number(new Date)-a<550&&Math.abs(s)>50||Math.abs(s)>o/2)?r.flexAnimate(l,r.vars.pauseOnAction):p||r.flexAnimate(r.currentSlide,r.vars.pauseOnAction,!0)}e=null;n=null;u=null;i=null;m=0}}},resize:function(){if(!r.animating&&r.is(":visible")){h||r.doMath();if(p)v.smoothHeight();else if(h){r.slides.width(r.computedW);r.update(r.pagingCount);r.setProps()}else if(l){r.viewport.height(r.h);r.setProps(r.h,"setTotal")}else{r.vars.smoothHeight&&v.smoothHeight();r.newSlides.width(r.computedW
);r.setProps(r.computedW,"setTotal")}}},smoothHeight:function(e){if(!l||p){var t=p?r:r.viewport;e?t.animate({height:r.slides.eq(r.animatingTo).height()},e):t.height(r.slides.eq(r.animatingTo).height())}},sync:function(t){var n=e(r.vars.sync).data("flexslider"),i=r.animatingTo;switch(t){case"animate":n.flexAnimate(i,r.vars.pauseOnAction,!1,!0);break;case"play":!n.playing&&!n.asNav&&n.play();break;case"pause":n.pause()}},uniqueID:function(t){t.find("[id]").each(function(){var t=e(this);t.attr("id",t.attr("id")+"_clone")});return t},pauseInvisible:{visProp:null,init:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)e[t]+"Hidden"in document&&(v.pauseInvisible.visProp=e[t]+"Hidden");if(v.pauseInvisible.visProp){var n=v.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(n,function(){v.pauseInvisible.isHidden()?r.startTimeout?clearTimeout(r.startTimeout):r.pause():r.started?r.play():r.vars.initDelay>0?setTimeout(r.play,r.vars.initDelay):r.play()})}},isHidden:function(){return document[v.pauseInvisible.visProp]||!1}},setToClearWatchedEvent:function(){clearTimeout(f);f=setTimeout(function(){a=""},3e3)}};r.flexAnimate=function(t,n,s,u,a){!r.vars.animationLoop&&t!==r.currentSlide&&(r.direction=t>r.currentSlide?"next":"prev");d&&r.pagingCount===1&&(r.direction=r.currentItem<t?"next":"prev");if(!r.animating&&(r.canAdvance(t,a)||s)&&r.is(":visible")){if(d&&u){var f=e(r.vars.asNavFor).data("flexslider");r.atEnd=t===0||t===r.count-1;f.flexAnimate(t,!0,!1,!0,a);r.direction=r.currentItem<t?"next":"prev";f.direction=r.direction;if(Math.ceil((t+1)/r.visible)-1===r.currentSlide||t===0){r.currentItem=t;r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");return!1}r.currentItem=t;r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");t=Math.floor(t/r.visible)}r.animating=!0;r.animatingTo=t;n&&r.pause();r.vars.before(r);r.syncExists&&!a&&v.sync("animate");r.vars.controlNav&&v.controlNav.active();h||r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");r.atEnd=t===0||t===r.last;r.vars.directionNav&&v.directionNav.update();if(t===r.last){r.vars.end(r);r.vars.animationLoop||r.pause()}if(!p){var m=l?r.slides.filter(":first").height():r.computedW,g,y,b;if(h){g=r.vars.itemMargin;b=(r.itemW+g)*r.move*r.animatingTo;y=b>r.limit&&r.visible!==1?r.limit:b}else r.currentSlide===0&&t===r.count-1&&r.vars.animationLoop&&r.direction!=="next"?y=c?(r.count+r.cloneOffset)*m:0:r.currentSlide===r.last&&t===0&&r.vars.animationLoop&&r.direction!=="prev"?y=c?0:(r.count+1)*m:y=c?(r.count-1-t+r.cloneOffset)*m:(t+r.cloneOffset)*m;r.setProps(y,"",r.vars.animationSpeed);if(r.transitions){if(!r.vars.animationLoop||!r.atEnd){r.animating=!1;r.currentSlide=r.animatingTo}r.container.unbind("webkitTransitionEnd transitionend");r.container.bind("webkitTransitionEnd transitionend",function(){r.wrapup(m)})}else r.container.animate(r.args,r.vars.animationSpeed,r.vars.easing,function(){r.wrapup(m)})}else if(!o){r.slides.eq(r.currentSlide).css({zIndex:1}).animate({opacity:0},r.vars.animationSpeed,r.vars.easing);r.slides.eq(t).css({zIndex:2}).animate({opacity:1},r.vars.animationSpeed,r.vars.easing,r.wrapup)}else{r.slides.eq(r.currentSlide).css({opacity:0,zIndex:1});r.slides.eq(t).css({opacity:1,zIndex:2});r.wrapup(m)}r.vars.smoothHeight&&v.smoothHeight(r.vars.animationSpeed)}};r.wrapup=function(e){!p&&!h&&(r.currentSlide===0&&r.animatingTo===r.last&&r.vars.animationLoop?r.setProps(e,"jumpEnd"):r.currentSlide===r.last&&r.animatingTo===0&&r.vars.animationLoop&&r.setProps(e,"jumpStart"));r.animating=!1;r.currentSlide=r.animatingTo;r.vars.after(r)};r.animateSlides=function(){!r.animating&&m&&r.flexAnimate(r.getTarget("next"))};r.pause=function(){clearInterval(r.animatedSlides);r.animatedSlides=null;r.playing=!1;r.vars.pausePlay&&v.pausePlay.update("play");r.syncExists&&v.sync("pause")};r.play=function(){r.playing&&clearInterval(r.animatedSlides);r.animatedSlides=r.animatedSlides||setInterval(r.animateSlides,r.vars.slideshowSpeed);r.started=r.playing=!0;r.vars.pausePlay&&v.pausePlay.update("pause");r.syncExists&&v.sync("play")};r.stop=function(){r.pause();r.stopped=!0};r.canAdvance=function(e,t){var n=d?r.pagingCount-1:r.last;return t?!0:d&&r.currentItem===r.count-1&&e===0&&r.direction==="prev"?!0:d&&r.currentItem===0&&e===r.pagingCount-1&&r.direction!=="next"?!1:e===r.currentSlide&&!d?!1:r.vars.animationLoop?!0:r.atEnd&&r.currentSlide===0&&e===n&&r.direction!=="next"?!1:r.atEnd&&r.currentSlide===n&&e===0&&r.direction==="next"?!1:!0};r.getTarget=function(e){r.direction=e;return e==="next"?r.currentSlide===r.last?0:r.currentSlide+1:r.currentSlide===0?r.last:r.currentSlide-1};r.setProps=function(e,t,n){var i=function(){var n=e?e:(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo,i=function(){if(h)return t==="setTouch"?e:c&&r.animatingTo===r.last?0:c?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:r.animatingTo===r.last?r.limit:n;switch(t){case"setTotal":return c?(r.count-1-r.currentSlide+r.cloneOffset)*e:(r.currentSlide+r.cloneOffset)*e;case"setTouch":return c?e:e;case"jumpEnd":return c?e:r.count*e;case"jumpStart":return c?r.count*e:e;default:return e}}();return i*-1+"px"}();if(r.transitions){i=l?"translate3d(0,"+i+",0)":"translate3d("+i+",0,0)";n=n!==undefined?n/1e3+"s":"0s";r.container.css("-"+r.pfx+"-transition-duration",n);r.container.css("transition-duration",n)}r.args[r.prop]=i;(r.transitions||n===undefined)&&r.container.css(r.args);r.container.css("transform",i)};r.setup=function(t){if(!p){var n,s;if(t==="init"){r.viewport=e('<div class="'+i+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(r).append(r.container);r.cloneCount=0;r.cloneOffset=0;if(c){s=e.makeArray(r.slides).reverse();r.slides=e(s);r.container.empty().append(r.slides)}}if(r.vars.animationLoop&&!h){r.cloneCount=2;r.cloneOffset=1;t!=="init"&&r.container.find(".clone").remove();r.container.append(r.slides.first().clone().addClass("clone").attr("aria-hidden","true")).prepend(r.slides.last().clone().addClass("clone").attr("aria-hidden","true"));v.uniqueID(r.slides.first().clone().addClass("clone")).appendTo(r.container);v.uniqueID(r.slides.last().clone().addClass("clone")).prependTo(r.container)}r.newSlides=e(r.vars.selector,r);n=c?r.count-1-r.currentSlide+r.cloneOffset:r.currentSlide+r.cloneOffset;if(l&&!h){r.container.height((r.count+r.cloneCount)*200+"%").css("position","absolute").width("100%");setTimeout(function(){r.newSlides.css({display:"block"});r.doMath();r.viewport.height(r.h);r.setProps(n*r.h,"init")},t==="init"?100:0)}else{r.container.width((r.count+r.cloneCount)*200+"%");r.setProps(n*r.computedW,"init");setTimeout(function(){r.doMath();r.newSlides.css({width:r.computedW,"float":"left",display:"block"});r.vars.smoothHeight&&v.smoothHeight()},t==="init"?100:0)}}else{r.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"});t==="init"&&(o?r.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+r.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(r.currentSlide).css({opacity:1,zIndex:2}):r.slides.css({opacity:0,display:"block",zIndex:1}).eq(r.currentSlide).css({zIndex:2}).animate({opacity:1},r.vars.animationSpeed,r.vars.easing));r.vars.smoothHeight&&v.smoothHeight()}h||r.slides.removeClass(i+"active-slide").eq(r.currentSlide).addClass(i+"active-slide");r.vars.init(r)};r.doMath=function(){var e=r.slides.first(),t=r.vars.itemMargin,n=r.vars.minItems,i=r.vars.maxItems;r.w=r.viewport===undefined?r.width():r.viewport.width();r.h=e.height();r.boxPadding=e.outerWidth()-e.width();if(h){r.itemT=r.vars.itemWidth+t;r.minW=n?n*r.itemT:r.w;r.maxW=i?i*r.itemT-t:r.w;r.itemW=r.minW>r.w?(r.w-t*(n-1))/n:r.maxW<r.w?(r.w-t*(i-1))/i:r.vars.itemWidth>r.w?r.w:r.vars.itemWidth;r.visible=Math.floor(r.w/r.itemW);r.move=r.vars.move>0&&r.vars.move<r.visible?r.vars.move:r.visible;r.pagingCount=Math.ceil((r.count-r.visible)/r.move+1);r.last=r.pagingCount-1;r.limit=r.pagingCount===1?0:r.vars.itemWidth>r.w?r.itemW*(r.count-1)+t*(r.count-1):(r.itemW+t)*r.count-r.w-t}else{r.itemW=r.w;r.pagingCount=r.count;r.last=r.count-1}r.computedW=r.itemW-r.boxPadding};r.update=function(e,t){r.doMath();if(!h){e<r.currentSlide?r.currentSlide+=1:e<=r.currentSlide&&e!==0&&(r.currentSlide-=1);r.animatingTo=r.currentSlide}if(r.vars.controlNav&&!r.manualControls)if(t==="add"&&!h||r.pagingCount>r.controlNav.length)v.controlNav.update("add");else if(t==="remove"&&!h||r.pagingCount<r.controlNav.length){if(h&&r.currentSlide>r.last){r.currentSlide-=1;r.animatingTo-=1}v.controlNav.update("remove",r.last)}r.vars.directionNav&&v.directionNav.update()};r.addSlide=function(t,n){var i=e(t);r.count+=1;r.last=r.count-1;l&&c?n!==undefined?r.slides.eq(r.count-n).after(i):r.container.prepend(i):n!==undefined?r.slides.eq(n).before(i):r.container.append(i);r.update(n,"add");r.slides=e(r.vars.selector+":not(.clone)",r);r.setup();r.vars.added(r)};r.removeSlide=function(t){var n=isNaN(t)?r.slides.index(e(t)):t;r.count-=1;r.last=r.count-1;isNaN(t)?e(t,r.slides).remove():l&&c?r.slides.eq(r.last).remove():r.slides.eq(t).remove();r.doMath();r.update(n,"remove");r.slides=e(r.vars.selector+":not(.clone)",r);r.setup();r.vars.removed(r)};v.init()};e(window).blur(function(e){focused=!1}).focus(function(e){focused=!0});e.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}};e.fn.flexslider=function(t){t===undefined&&(t={});if(typeof t=="object")return this.each(function(){var n=e(this),r=t.selector?t.selector:".slides > li",i=n.find(r);if(i.length===1&&t.allowOneSlide===!0||i.length===0){i.fadeIn(400);t.start&&t.start(n)}else n.data("flexslider")===undefined&&new e.flexslider(this,t)});var n=e(this).data("flexslider");switch(t){case"play":n.play();break;case"pause":n.pause();break;case"stop":n.stop();break;case"next":n.flexAnimate(n.getTarget("next"),!0);break;case"prev":case"previous":n.flexAnimate(n.getTarget("prev"),!0);break;default:typeof t=="number"&&n.flexAnimate(t,!0)}}})(jQuery);

/*!
  hey, [be]Lazy.js - v1.4.1 - 2015.10.12
  A lazy loading and multi-serving image script
  (c) Bjoern Klinggaard - @bklinggaard - http://dinbror.dk/blazy
*/


$(document).ready(function(){
    $("#btn-bars").click(function(){
	$(".header .navbar").slideToggle(500);
    });
});
$(function(){
    $('#monavber li').hover(function(){
       $(this).addClass('on');  
    },function(){
       $(this).removeClass('on'); 
    });
});
//????????????
jQuery(document).ready(function($){ 
var datatype=$("#monavber").attr("data-type");
    $(".navbar>li ").each(function(){
        try{
            var myid=$(this).attr("id");
            if("index"==datatype){
                if(myid=="nvabar-item-index"){
                    $("#nvabar-item-index").addClass("active");
                }
            }else if("category"==datatype){
                var infoid=$("#monavber").attr("data-infoid");
                if(infoid!=null){
                    var b=infoid.split(' ');
                    for(var i=0;i<b.length;i++){
                        if(myid=="navbar-category-"+b[i]){
                            $("#navbar-category-"+b[i]+"").addClass("active");
                        }
                    }
                }
            }else if("article"==datatype){
                var infoid=$("#monavber").attr("data-infoid");
                if(infoid!=null){
                    var b=infoid.split(' ');
                    for(var i=0;i<b.length;i++){
                        if(myid=="navbar-category-"+b[i]){
                            $("#navbar-category-"+b[i]+"").addClass("active");
                        }
                    }
                }
            }else if("page"==datatype){
                var infoid=$("#monavber").attr("data-infoid");
                if(infoid!=null){
                    if(myid=="navbar-page-"+infoid){
                        $("#navbar-page-"+infoid+"").addClass("active");
                    }
                }
            }else if("tag"==datatype){
                var infoid=$("#monavber").attr("data-infoid");
                if(infoid!=null){
                    if(myid=="navbar-tag-"+infoid){
                        $("#navbar-tag-"+infoid+"").addClass("active");
                    }
                }
            }
        }catch(E){}
    });
	$("#monavber").delegate("a","click",function(){
		$(".navbar>li").each(function(){
			$(this).removeClass("active");
		});
		if($(this).closest("ul")!=null && $(this).closest("ul").length!=0){
			if($(this).closest("ul").attr("id")=="munavber"){
				$(this).addClass("active");
			}else{
				$(this).closest("ul").closest("li").addClass("active");
			}
		}
	});
});

$(function() {
	    $(window).scroll(function(){		
		    if($(window).scrollTop()>500){		
			    $("#gttop").show();
		    }else{
			    $("#gttop").hide();
		    }
	    });		
	    $("#gttop").click(function(){
		    $("body,html").animate({scrollTop:0},1500);
		    return false;
	    });		
    });
(function($){
    $.extend($.fn, {
		posfixed: function(configSettings){
            var settings = {
            	direction:"top",
            	type:"while",
            	hide:false,
				distance:0
			};			
			$.extend(settings, configSettings);

			//initial
			if($.browser.msie&&$.browser.version==6.0){
				$("html").css("overflow","hidden");
				$("body").css({
					height:"100%",
					overflow:"auto"
				});
			}
			
			var obj = this;
			var initPos = $(obj).offset().top;
			var initPosLeft = $(obj).offset().left;
			var anchoredPos = settings.distance;

			if(settings.type=="while"){
				if($.browser.msie&&$.browser.version==6.0){
					$("body").scroll(function(event) {
						var objTop = $(obj).offset().top - $("body").scrollTop();
						if(objTop<=settings.distance){
							$(obj).css("position","absolute");
							$(obj).css("top",settings.distance+"px");
							$(obj).css("left",initPosLeft+"px");
						}
						if($(obj).offset().top<=initPos){						
							$(obj).css("position","static");
						}
					});
					
				}else{
					$(window).scroll(function(event) {

						if(settings.direction == "top"){
							var objTop = $(obj).offset().top - $(window).scrollTop();
						
							if(objTop<=settings.distance){
								$(obj).css("position","fixed");
								$(obj).css(settings.direction,settings.distance+"px");
								
							}
							if($(obj).offset().top<=initPos){
								$(obj).css("position","static");
							}
						}else{
							var objBottom = $(window).height() - $(obj).offset().top + $(window).scrollTop() - $(obj).outerHeight() ;
							
							if(objBottom<=settings.distance){
								
								$(obj).css("position","fixed");
								$(obj).css(settings.direction,settings.distance+"px");
								
							}
							if($(obj).offset().top>=initPos){
								$(obj).css("position","static");
							}
						}
						


					});
				}
			}
			
			if(settings.type=="always"){
				if($.browser.msie&&$.browser.version==6.0){
					if(settings.hide){
						$(obj).hide();
					}
					$("body").scroll(function(event) {
						if($("body").scrollTop()>300){
							$(obj).fadeIn(200);
						}else{
							$(obj).fadeOut(200);
						}
					});
					$(obj).css("position","absolute");
					$(obj).css(settings.direction,settings.distance+"px");
					if(settings.tag!=null){
						if(settings.tag.obj!=null){
							if(settings.tag.direction=="right"){
								$(obj).css("left",(settings.tag.obj.offset().left+settings.tag.obj.width()+settings.tag.distance)+"px");
								$(window).resize(function(){
									$(obj).css("left",(settings.obj.tag.offset().left+settings.tag.obj.width()+settings.tag.distance)+"px");
								});
							}else{
								console.log(settings.tag.obj.offset().left-settings.tag.obj.width()-settings.tag.distance);
								$(obj).css("left",(settings.tag.obj.offset().left-$(obj).outerWidth()-settings.tag.distance)+"px");
								$(window).resize(function(){
									$(obj).css("left",(settings.tag.obj.offset().left-$(obj).outerWidth()-settings.tag.distance)+"px");
								});
							}
							
						}else{
							$(obj).css(settings.tag.direction,settings.tag.distance+"px");
						}
					}

				}else{
					if(settings.hide){
						$(obj).hide();
					}
					$(window).scroll(function(event) {
						if($(window).scrollTop()>300){
							$(obj).fadeIn(200);
						}else{
							$(obj).fadeOut(200);
						}
					});
					var objLeft = $(obj).offset().left;

					$(obj).css("position","fixed");
					$(obj).css(settings.direction,settings.distance+"px");
					if(settings.tag!=null){
						if(settings.tag.obj!=null){
							if(settings.tag.direction=="right"){
								$(obj).css("left",(settings.tag.obj.offset().left+settings.tag.obj.width()+settings.tag.distance)+"px");
								$(window).resize(function(){
									$(obj).css("left",(settings.obj.tag.offset().left+settings.tag.obj.width()+settings.tag.distance)+"px");
								});
							}else{
								console.log(settings.tag.obj.offset().left-settings.tag.obj.width()-settings.tag.distance);
								$(obj).css("left",(settings.tag.obj.offset().left-$(obj).outerWidth()-settings.tag.distance)+"px");
								$(window).resize(function(){
									$(obj).css("left",(settings.tag.obj.offset().left-$(obj).outerWidth()-settings.tag.distance)+"px");
								});
							}
							
						}else{
							$(obj).css(settings.tag.direction,settings.tag.distance+"px");
						}
					}
				}
				
				
				
			}
			
			
		}
	});
	
	
})(jQuery);

$(document).ready(function(){
	$('.flexslider').flexslider({		
		animation: "fade",
		directionNav:true,
		slideshowSpeed: 5000,
		start: function(slider){
			$('body').removeClass('loading');
		}
	});
});


$(function(){
	$('.header-nav').posfixed({
		distance : 0,
		pos : 'top',
		type : 'while',
		hide : false
	});
});

/*! Lazy Load 1.9.3 - MIT license - Copyright 2010-2013 Mika Tuupola */
!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);

jQuery(document).ready(function($){
 //===================================???????????? jQ??????
     (function(){
         $('#al_expand_collapse,#archives span.al_mon').css({cursor:"pointer"});
         $('#archives span.al_mon').each(function(){
             var num=$(this).next().children('li').size();
             var text=$(this).text();
             $(this).html(text+'( '+num+' ????????? )');
         });
         var $al_post_list=$('#archives ul.al_post_list'),
             $al_post_list_f=$('#archives ul.al_post_list:first');
         $al_post_list.hide(1,function(){
             $al_post_list_f.show();
         });
         $('#archives span.al_mon').click(function(){
             $(this).next().slideToggle(400);
             return false;
         });
         $('#al_expand_collapse').toggle(function(){
             $al_post_list.show();
         },function(){
             $al_post_list.hide();
         });
     })();
 });
 
// ????????????
function copy_code(text) {
  if (window.clipboardData) {
    window.clipboardData.setData("Text", text)
	alert("????????????????????????????????????????????????");
  } else {
	var x=prompt('???????????????????????????????????????\n?????????????????????',text);
  }
};

function tin_check_login(){if(tin.uid>0) return true;if($("div.overlay").length<=0) $("#content-container").append('<div class="overlay"></div>');$("div.overlay").show(),$("body").addClass("fadeIn");$('#sign').removeClass("register").addClass("sign");$("div.overlay, form a.close").bind("click",function(){return $("body").removeClass("fadeIn"),$('#sign').removeAttr("class"),$("div.overlay").remove();});return false;};$(function(){$(".tooltip-trigger").each(function(b){if(this.title){var c=this.title;var a=5;$(this).mouseover(function(d){this.title="";$(this).append('<div class="tooltip top" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner">'+c+'</div></div>');$(".tooltip").css({left:(($(this).width()-$('.tooltip').width())/2)+"px",bottom:($(this).height()+a)+"px"}).addClass('in').fadeIn(250)}).mouseout(function(){this.title=c;$(".tooltip").remove()});}})});$(document).on("click","#content-index-control",function(){if($('#content-index-control').hasClass('open')){$('#content-index-control').html('[??????]');$('#content-index-control').removeClass('open');$('#index-ul').css('display','none');}else{$('#content-index-control').html('[??????]');$('#content-index-control').addClass('open');$('#index-ul').css('display','block');}});

//??????????????????
    $(function() {
        $("img").lazyload({
            effect:"fadeIn"
          });
        });

//?????????????????????
	jQuery(document).ready(function(){
	jQuery('.open-subscribe').click(function(){
		jQuery('.subscribe-wrap').toggleClass('add_light');
		jQuery('.subscribe-wrap #modalWindow').slideToggle("fast");
		});
	}); //Final Ready

/*
 * jQuery Tools 1.2.3 - The missing UI library for the Web
 * 
 * [tabs]
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * http://flowplayer.org/tools/
 * 
 * File generated: Sat Jul 03 19:35:31 GMT 2010
 */
(function(c){function p(e,b,a){var d=this,l=e.add(this),h=e.find(a.tabs),i=b.jquery?b:e.children(b),j;h.length||(h=e.children());i.length||(i=e.parent().find(b));i.length||(i=c(b));c.extend(this,{click:function(f,g){var k=h.eq(f);if(typeof f=="string"&&f.replace("#","")){k=h.filter("[href*="+f.replace("#","")+"]");f=Math.max(h.index(k),0)}if(a.rotate){var n=h.length-1;if(f<0)return d.click(n,g);if(f>n)return d.click(0,g)}if(!k.length){if(j>=0)return d;f=a.initialIndex;k=h.eq(f)}if(f===j)return d;
g=g||c.Event();g.type="onBeforeClick";l.trigger(g,[f]);if(!g.isDefaultPrevented()){o[a.effect].call(d,f,function(){g.type="onClick";l.trigger(g,[f])});j=f;h.removeClass(a.current);k.addClass(a.current);return d}},getConf:function(){return a},getTabs:function(){return h},getPanes:function(){return i},getCurrentPane:function(){return i.eq(j)},getCurrentTab:function(){return h.eq(j)},getIndex:function(){return j},next:function(){return d.click(j+1)},prev:function(){return d.click(j-1)},destroy:function(){h.unbind(a.event).removeClass(a.current);
i.find("a[href^=#]").unbind("click.T");return d}});c.each("onBeforeClick,onClick".split(","),function(f,g){c.isFunction(a[g])&&c(d).bind(g,a[g]);d[g]=function(k){c(d).bind(g,k);return d}});if(a.history&&c.fn.history){c.tools.history.init(h);a.event="history"}h.each(function(f){c(this).bind(a.event,function(g){d.click(f,g);return g.preventDefault()})});i.find("a[href^=#]").bind("click.T",function(f){d.click(c(this).attr("href"),f)});if(location.hash)d.click(location.hash);else if(a.initialIndex===
0||a.initialIndex>0)d.click(a.initialIndex)}c.tools=c.tools||{version:"1.2.3"};c.tools.tabs={conf:{tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",initialIndex:0,event:"click",rotate:false,history:false},addEffect:function(e,b){o[e]=b}};var o={"default":function(e,b){this.getPanes().hide().eq(e).show();b.call()},fade:function(e,b){var a=this.getConf(),d=a.fadeOutSpeed,l=this.getPanes();d?l.fadeOut(d):l.hide();l.eq(e).fadeIn(a.fadeInSpeed,b)},slide:function(e,b){this.getPanes().slideUp(200);
this.getPanes().eq(e).slideDown(400,b)},ajax:function(e,b){this.getPanes().eq(0).load(this.getTabs().eq(e).attr("href"),b)}},m;c.tools.tabs.addEffect("horizontal",function(e,b){m||(m=this.getPanes().eq(0).width());this.getCurrentPane().animate({width:0},function(){c(this).hide()});this.getPanes().eq(e).animate({width:m},function(){c(this).show();b.call()})});c.fn.tabs=function(e,b){var a=this.data("tabs");if(a){a.destroy();this.removeData("tabs")}if(c.isFunction(b))b={onBeforeClick:b};b=c.extend({},
c.tools.tabs.conf,b);this.each(function(){a=new p(c(this),e,b);c(this).data("tabs",a)});return b.api?a:this}})(jQuery);

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

		$(function() {
			
			var indicator = $('#indicator'),
					indicatorHalfWidth = indicator.width()/2,
					lis = $('#tabs').children('li');

			$("#tabs").tabs("#content section", {
				effect: 'fade',
				fadeOutSpeed: 0,
				fadeInSpeed: 400,
				onBeforeClick: function(event, index) {
					var li = lis.eq(index),
					    newPos = li.position().left + (li.width()/2) - indicatorHalfWidth;
					indicator.stop(true).animate({ left: newPos }, 600, 'easeInOutExpo');
				}
			});	

		});		

//????????????
var bigfa_scroll = {
    drawCircle: function(id, percentage, color) {
        var width = jQuery(id).width();
        var height = jQuery(id).height();
        var radius = parseInt(width / 2.20);
        var position = width;
        var positionBy2 = position / 2;
        var bg = jQuery(id)[0];
        id = id.split("#");
        var ctx = bg.getContext("2d");
        var imd = null;
        var circ = Math.PI * 2;
        var quart = Math.PI / 2;
        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineCap = "square";
        ctx.closePath();
        ctx.fill();
        ctx.lineWidth = 3;
        imd = ctx.getImageData(0, 0, position, position);
        var draw = function(current, ctxPass) {
            ctxPass.putImageData(imd, 0, 0);
            ctxPass.beginPath();
            ctxPass.arc(positionBy2, positionBy2, radius, -(quart), ((circ) * current) - quart, false);
            ctxPass.stroke();
        }
        draw(percentage / 100, ctx);
    },
    backToTop: function($this) {
        $this.click(function() {
            jQuery("body,html").animate({
                scrollTop: 0
            },
            800);
            return false;
        });
    },
    scrollHook: function($this, color) {
        color = color ? color: "#000000";
        $this.scroll(function() {
            var docHeight = (jQuery(document).height() - jQuery(window).height()),
            $windowObj = $this,
            $per = jQuery(".per"),
            percentage = 0;
            defaultScroll = $windowObj.scrollTop();
            percentage = parseInt((defaultScroll / docHeight) * 100);
            var backToTop = jQuery("#backtoTop");
            if (backToTop.length > 0) {
                if ($windowObj.scrollTop() > 100) {
                    backToTop.addClass("button--show");
                } else {
                    backToTop.removeClass("button--show");
                }
                $per.attr("data-percent", percentage);
                bigfa_scroll.drawCircle("#backtoTopCanvas", percentage, color);
            }
        });
    }
}
jQuery(document).ready(function() {
    jQuery("body").append('<div id="backtoTop" data-action="gototop"><canvas id="backtoTopCanvas" width="45" height="45"></canvas><div class="per"></div></div>');
    var T = bigfa_scroll;
    T.backToTop(jQuery("#backtoTop"));
    T.scrollHook(jQuery(window), "#00adef");
});

// ????????????
function pr() {
var R=document.getElementById("sidebar");
var L=document.getElementById("article");
if (R.className=="sidebar")
	{
		R.className="widget-area";
		L.className="content-area";
	}
else
	{
		R.className="sidebar";
		L.className="article";
	}
}

 jQuery(document).ready(function($){
 //?????????????????????jQuery????????????????????????????????????????????????????????????~
$('.widget_tabcontent h3 span').click(function(){
    $(this).addClass("selected").siblings().removeClass();
    $(".widget_tabcontent > ul").slideUp('1500').eq($('.widget_tabcontent h3 span').index(this)).slideDown('1500');
});
});

try {
	if (window.console && window.console.log) {
		console.log("%c????????????,??????????????????????????????????????????","color:red");
		console.log("?????????,????????????http://zhangliseo.com/guestbook.html");
	};
} catch (e) {};

//??????????????????
function fuckyou(){
     window.close(); //??????????????????(??????)
     window.location="about:blank"; //?????????????????????????????????
}
  function ck() {
    console.profile();
    console.profileEnd();
    //??????????????????profiles???????????????????????????????????????????????????F12??????????????????
    if(console.clear) { console.clear() };
                        if (typeof console.profiles =="object"){
    return console.profiles.length > 0;
                        }
}
function hehe(){
if( (window.console && (console.firebug || console.table && /firebug/i.test(console.table()) )) || (typeof opera == 'object' && typeof opera.postError == 'function' && console.profile.length > 0)){
  fuckyou();
}
if(typeof console.profiles =="object"&&console.profiles.length > 0){
fuckyou();
}
}
hehe();
window.onresize = function(){
if((window.outerHeight-window.innerHeight)>200)
//??????????????????????????????????????????????????????????????????200???????????????
   fuckyou();
}
