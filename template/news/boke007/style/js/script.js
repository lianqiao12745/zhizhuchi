/*!
 * tipso - A Lightweight Responsive jQuery Tooltip Plugin v1.0.1
 * Copyright (c) 2014 Bojan Petkovski
 * http://tipso.object505.com
 * Licensed under the MIT license
 * http://object505.mit-license.org/
 */
!
function(t, o, s, e) {
	function r(o, s) {
		this.element = t(o), this.settings = t.extend({}, l, s), this._defaults = l, this._name = d, this._title = this.element.attr("title"), this.mode = "hide", this.init()
	}
	function i() {
		var t = o.navigator.msMaxTouchPoints,
			e = "ontouchstart" in s.createElement("div");
		return t || e ? !0 : !1
	}
	function n(o) {
		var s = o.clone();
		s.css("visibility", "hidden"), t("body").append(s);
		var e = s.outerHeight();
		return s.remove(), e
	}
	function a(s) {
		var e, r, i, a = s.tooltip(),
			d = s.element,
			l = s,
			f = t(o),
			p = 10;
		switch (l.settings.position) {
		case "top":
			r = d.offset().left + d.outerWidth() / 2 - a.outerWidth() / 2, e = d.offset().top - n(a) - p, a.find(".tipso_arrow").css({
				marginLeft: -8
			}), e < f.scrollTop() ? (e = d.offset().top + d.outerHeight() + p, a.find(".tipso_arrow").css({
				"border-bottom-color": l.settings.background,
				"border-top-color": "transparent"
			}), a.removeClass("top bottom left right"), a.addClass("bottom")) : (a.find(".tipso_arrow").css({
				"border-top-color": l.settings.background,
				"border-bottom-color": "transparent"
			}), a.removeClass("top bottom left right"), a.addClass("top"));
			break;
		case "bottom":
			r = d.offset().left + d.outerWidth() / 2 - a.outerWidth() / 2, e = d.offset().top + d.outerHeight() + p, a.find(".tipso_arrow").css({
				marginLeft: -8
			}), e + n(a) > f.scrollTop() + f.outerHeight() ? (e = d.offset().top - n(a) - p, a.find(".tipso_arrow").css({
				"border-top-color": l.settings.background,
				"border-bottom-color": "transparent"
			}), a.removeClass("top bottom left right"), a.addClass("top")) : (a.find(".tipso_arrow").css({
				"border-bottom-color": l.settings.background,
				"border-top-color": "transparent"
			}), a.removeClass("top bottom left right"), a.addClass(l.settings.position));
			break;
		case "left":
			r = d.offset().left - a.outerWidth() - p, e = d.offset().top + d.outerHeight() / 2 - n(a) / 2, a.find(".tipso_arrow").css({
				marginTop: -8,
				marginLeft: ""
			}), r < f.scrollLeft() ? (r = d.offset().left + d.outerWidth() + p, a.find(".tipso_arrow").css({
				"border-right-color": l.settings.background,
				"border-left-color": "transparent",
				"border-top-color": "transparent",
				"border-bottom-color": "transparent"
			}), a.removeClass("top bottom left right"), a.addClass("right")) : (a.find(".tipso_arrow").css({
				"border-left-color": l.settings.background,
				"border-right-color": "transparent",
				"border-top-color": "transparent",
				"border-bottom-color": "transparent"
			}), a.removeClass("top bottom left right"), a.addClass(l.settings.position));
			break;
		case "right":
			r = d.offset().left + d.outerWidth() + p, e = d.offset().top + d.outerHeight() / 2 - n(a) / 2, a.find(".tipso_arrow").css({
				marginTop: -8,
				marginLeft: ""
			}), r + p + l.settings.width > f.scrollLeft() + f.outerWidth() ? (r = d.offset().left - a.outerWidth() - p, a.find(".tipso_arrow").css({
				"border-left-color": l.settings.background,
				"border-right-color": "transparent",
				"border-top-color": "transparent",
				"border-bottom-color": "transparent"
			}), a.removeClass("top bottom left right"), a.addClass("left")) : (a.find(".tipso_arrow").css({
				"border-right-color": l.settings.background,
				"border-left-color": "transparent",
				"border-top-color": "transparent",
				"border-bottom-color": "transparent"
			}), a.removeClass("top bottom left right"), a.addClass(l.settings.position))
		}
		r < f.scrollLeft() && ("bottom" == l.settings.position || "top" == l.settings.position) && (a.find(".tipso_arrow").css({
			marginLeft: r - 8
		}), r = 0), r + l.settings.width > f.outerWidth() && ("bottom" == l.settings.position || "top" == l.settings.position) && (i = f.outerWidth() - (r + l.settings.width), a.find(".tipso_arrow").css({
			marginLeft: -i - 8,
			marginTop: ""
		}), r += i), r < f.scrollLeft() && ("left" == l.settings.position || "right" == l.settings.position) && (r = d.offset().left + d.outerWidth() / 2 - a.outerWidth() / 2, a.find(".tipso_arrow").css({
			marginLeft: -8,
			marginTop: ""
		}), e = d.offset().top - n(a) - p, e < f.scrollTop() ? (e = d.offset().top + d.outerHeight() + p, a.find(".tipso_arrow").css({
			"border-bottom-color": l.settings.background,
			"border-top-color": "transparent",
			"border-left-color": "transparent",
			"border-right-color": "transparent"
		}), a.removeClass("top bottom left right"), a.addClass("bottom")) : (a.find(".tipso_arrow").css({
			"border-top-color": l.settings.background,
			"border-bottom-color": "transparent",
			"border-left-color": "transparent",
			"border-right-color": "transparent"
		}), a.removeClass("top bottom left right"), a.addClass("top")), r + l.settings.width > f.outerWidth() && (i = f.outerWidth() - (r + l.settings.width), a.find(".tipso_arrow").css({
			marginLeft: -i - 8,
			marginTop: ""
		}), r += i), r < f.scrollLeft() && (a.find(".tipso_arrow").css({
			marginLeft: r - 8
		}), r = 0)), r + l.settings.width > f.outerWidth() && ("left" == l.settings.position || "right" == l.settings.position) && (r = d.offset().left + d.outerWidth() / 2 - a.outerWidth() / 2, a.find(".tipso_arrow").css({
			marginLeft: -8,
			marginTop: ""
		}), e = d.offset().top - n(a) - p, e < f.scrollTop() ? (e = d.offset().top + d.outerHeight() + p, a.find(".tipso_arrow").css({
			"border-bottom-color": l.settings.background,
			"border-top-color": "transparent",
			"border-left-color": "transparent",
			"border-right-color": "transparent"
		}), a.removeClass("top bottom left right"), a.addClass("bottom")) : (a.find(".tipso_arrow").css({
			"border-top-color": l.settings.background,
			"border-bottom-color": "transparent",
			"border-left-color": "transparent",
			"border-right-color": "transparent"
		}), a.removeClass("top bottom left right"), a.addClass("top")), r + l.settings.width > f.outerWidth() && (i = f.outerWidth() - (r + l.settings.width), a.find(".tipso_arrow").css({
			marginLeft: -i - 8,
			marginTop: ""
		}), r += i), r < f.scrollLeft() && (a.find(".tipso_arrow").css({
			marginLeft: r - 8
		}), r = 0)), a.css({
			left: r + l.settings.offsetX,
			top: e + l.settings.offsetY
		})
	}
}(jQuery, window, document);


$(document).ready(function(a) {
	// removeClass
	if (typeof scrollMonitor != 'undefined') {
		a(".wow").each(function(i, el) {
			var ael = a(el),
			watcher = scrollMonitor.create(el, -100);
			ael.addClass('wow');
			watcher.enterViewport(function(ev) {
				ael.removeClass('fadeInUp');
			});
		});
	}
})

$(document).ready(function() {
	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		mobile: false,
		live: true,
		callback: function(box) {}
	});
	var badVersion = "8.0";
	var UA = navigator.userAgent.toLowerCase();
	var isIE = UA.indexOf("msie") > -1;
	var goodVersion;
	if (isIE) {
		goodVersion = UA.match(/msie ([\d.]+)/)[1]
	}
	if (goodVersion > badVersion || !isIE) {
		wow.init()
	}
});