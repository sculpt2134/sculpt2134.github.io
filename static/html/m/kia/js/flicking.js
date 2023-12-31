/*
Copyright (c) 2015-present NAVER Corp.
name: @egjs/flicking
license: MIT
author: NAVER Corp.
repository: https://github.com/naver/egjs-flicking
version: 4.4.0
*/
! function(e, t) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Flicking = t()
}(this, function() {
	"use strict";
	var i = function(e, t) {
		return (i = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array && function(e, t) {
				e.__proto__ = t
			} || function(e, t) {
				for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
			})(e, t)
	};

	function o(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

		function n() {
			this.constructor = e
		}
		i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
	}
	var r = function() {
		return (r = Object.assign || function(e) {
			for (var t, n = 1, i = arguments.length; n < i; n++)
				for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
			return e
		}).apply(this, arguments)
	};

	function h(e, a, s, u) {
		return new(s = s || Promise)(function(n, t) {
			function i(e) {
				try {
					o(u.next(e))
				} catch (e) {
					t(e)
				}
			}

			function r(e) {
				try {
					o(u.throw(e))
				} catch (e) {
					t(e)
				}
			}

			function o(e) {
				var t;
				e.done ? n(e.value) : ((t = e.value) instanceof s ? t : new s(function(e) {
					e(t)
				})).then(i, r)
			}
			o((u = u.apply(e, a || [])).next())
		})
	}

	function m(n, i) {
		var r, o, a, s = {
				label: 0,
				sent: function() {
					if (1 & a[0]) throw a[1];
					return a[1]
				},
				trys: [],
				ops: []
			},
			e = {
				next: t(0),
				throw: t(1),
				return: t(2)
			};
		return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
			return this
		}), e;

		function t(t) {
			return function(e) {
				return function(t) {
					if (r) throw new TypeError("Generator is already executing.");
					for (; s;) try {
						if (r = 1, o && (a = 2 & t[0] ? o.return : t[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, t[1])).done) return a;
						switch (o = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {
							case 0:
							case 1:
								a = t;
								break;
							case 4:
								return s.label++, {
									value: t[1],
									done: !1
								};
							case 5:
								s.label++, o = t[1], t = [0];
								continue;
							case 7:
								t = s.ops.pop(), s.trys.pop();
								continue;
							default:
								if (!(a = 0 < (a = s.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
									s = 0;
									continue
								}
								if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
									s.label = t[1];
									break
								}
								if (6 === t[0] && s.label < a[1]) {
									s.label = a[1], a = t;
									break
								}
								if (a && s.label < a[2]) {
									s.label = a[2], s.ops.push(t);
									break
								}
								a[2] && s.ops.pop(), s.trys.pop();
								continue
						}
						t = i.call(n, s)
					} catch (e) {
						t = [6, e], o = 0
					} finally {
						r = a = 0
					}
					if (5 & t[0]) throw t[1];
					return {
						value: t[0] ? t[1] : void 0,
						done: !0
					}
				}([t, e])
			}
		}
	}

	function c(e) {
		var t = "function" == typeof Symbol && Symbol.iterator,
			n = t && e[t],
			i = 0;
		if (n) return n.call(e);
		if (e && "number" == typeof e.length) return {
			next: function() {
				return {
					value: (e = e && i >= e.length ? void 0 : e) && e[i++],
					done: !e
				}
			}
		};
		throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
	}

	function f(e, t) {
		var n = "function" == typeof Symbol && e[Symbol.iterator];
		if (!n) return e;
		var i, r, o = n.call(e),
			a = [];
		try {
			for (;
				(void 0 === t || 0 < t--) && !(i = o.next()).done;) a.push(i.value)
		} catch (e) {
			r = {
				error: e
			}
		} finally {
			try {
				i && !i.done && (n = o.return) && n.call(o)
			} finally {
				if (r) throw r.error
			}
		}
		return a
	}

	function d(e, t) {
		for (var n = 0, i = t.length, r = e.length; n < i; n++, r++) e[r] = t[n];
		return e
	}

	function p(e) {
		var t = "function" == typeof Symbol && Symbol.iterator,
			n = t && e[t],
			i = 0;
		if (n) return n.call(e);
		if (e && "number" == typeof e.length) return {
			next: function() {
				return {
					value: (e = e && i >= e.length ? void 0 : e) && e[i++],
					done: !e
				}
			}
		};
		throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
	}

	function a() {
		for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(function(e, t) {
			var n = "function" == typeof Symbol && e[Symbol.iterator];
			if (!n) return e;
			var i, r, o = n.call(e),
				a = [];
			try {
				for (;
					(void 0 === t || 0 < t--) && !(i = o.next()).done;) a.push(i.value)
			} catch (e) {
				r = {
					error: e
				}
			} finally {
				try {
					i && !i.done && (n = o.return) && n.call(o)
				} finally {
					if (r) throw r.error
				}
			}
			return a
		}(arguments[t]));
		return e
	}

	function g(e) {
		return void 0 === e
	}

	function e(n) {
		for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
		return e.forEach(function(t) {
			Object.keys(t).forEach(function(e) {
				n[e] = t[e]
			})
		}), n
	}

	function S(e, t) {
		var n = null;
		if (O(e)) {
			t = (t || document).querySelector(e);
			if (!t) throw new ue(F(e), H.ELEMENT_NOT_FOUND);
			n = t
		} else e && e.nodeType === Node.ELEMENT_NODE && (n = e);
		if (!n) throw new ue(V(e, ["HTMLElement", "string"]), H.WRONG_TYPE);
		return n
	}

	function t(e, t) {
		if (null == e) throw new ue(G(e, t), H.VAL_MUST_NOT_NULL)
	}

	function _(e, t, n) {
		return Math.max(Math.min(e, n), t)
	}

	function y(e) {
		if (!e) throw new ue(X, H.NOT_ATTACHED_TO_FLICKING);
		return e
	}

	function s(e) {
		return [].slice.call(e)
	}

	function u(e, t) {
		var n;
		if (O(e)) switch (e) {
			case ee.PREV:
				n = 0;
				break;
			case ee.CENTER:
				n = .5 * t;
				break;
			case ee.NEXT:
				n = t;
				break;
			default:
				if (null == (n = v(e, t))) throw new ue(B("align", e), H.WRONG_OPTION)
		} else n = e;
		return n
	}

	function l(t, n) {
		var e;
		return (Array.isArray(t) ? t.map(function(e) {
			return v(e, n)
		}) : [e = v(t, n), e]).map(function(e) {
			if (null == e) throw new ue(B("bounce", t), H.WRONG_OPTION);
			return e
		})
	}

	function v(e, t) {
		return null == (e = oe(e)) ? null : e.percentage * t + e.absolute
	}

	function b(e) {
		return "object" == typeof e ? e.panel : e
	}

	function E(e, t) {
		return e === t ? te.NONE : e < t ? te.NEXT : te.PREV
	}

	function P(e) {
		Array.isArray(e) || (e = [e]);
		var n = [];
		return e.forEach(function(e) {
			if (O(e)) {
				var t = document.createElement("div");
				for (t.innerHTML = e, n.push.apply(n, d([], f(s(t.children)))); t.firstChild;) t.removeChild(t.firstChild)
			} else {
				if (!e || e.nodeType !== Node.ELEMENT_NODE) throw new ue(V(e, ["HTMLElement", "string"]), H.WRONG_TYPE);
				n.push(e)
			}
		}), n
	}

	function x(e, t) {
		return _(e < 0 ? e + t : e, 0, t)
	}

	function T(e, t) {
		var n, i;
		try {
			for (var r = c(e), o = r.next(); !o.done; o = r.next())
				if (o.value === t) return !0
		} catch (e) {
			n = {
				error: e
			}
		} finally {
			try {
				o && !o.done && (i = r.return) && i.call(r)
			} finally {
				if (n) throw n.error
			}
		}
		return !1
	}

	function O(e) {
		return "string" == typeof e
	}

	function w(e, t, n) {
		var i = n - t;
		return e < t ? e = n - (t - e) % i : n < e && (e = t + (e - n) % i), e
	}

	function n(e, t) {
		var n, i;
		try {
			for (var r = c(e), o = r.next(); !o.done; o = r.next()) {
				var a = o.value;
				if (t(a)) return a
			}
		} catch (e) {
			n = {
				error: e
			}
		} finally {
			try {
				o && !o.done && (i = r.return) && i.call(r)
			} finally {
				if (n) throw n.error
			}
		}
		return null
	}

	function R(e, t) {
		for (var n = 0; n < e.length; n++)
			if (t(e[n])) return n;
		return -1
	}

	function I(e, t, n) {
		return (e - t) / (n - t)
	}

	function A(e) {
		return window.getComputedStyle(e) || e.currentStyle
	}

	function C(e, t) {
		var n = t.width,
			t = t.height;
		null != n && (O(n) ? e.style.width = n : e.style.width = n + "px"), null != t && (O(t) ? e.style.height = t : e.style.height = t + "px")
	}

	function k(e, t, n) {
		return t <= e && e <= n
	}

	function N(e, t) {
		return t <= e ? e % t : e < 0 ? x((e + 1) % t - 1, t) : e
	}

	function D(e) {
		for (var t = new Array(e), n = 0; n < e; n++) t[n] = n;
		return t
	}
	var j, L = function() {
			function e(e, t) {
				var n, i;
				if (this.eventType = e, this._canceled = !1, t) try {
					for (var r = p(Object.keys(t)), o = r.next(); !o.done; o = r.next()) {
						var a = o.value;
						this[a] = t[a]
					}
				} catch (e) {
					n = {
						error: e
					}
				} finally {
					try {
						o && !o.done && (i = r.return) && i.call(r)
					} finally {
						if (n) throw n.error
					}
				}
			}
			var t = e.prototype;
			return t.stop = function() {
				this._canceled = !0
			}, t.isCanceled = function() {
				return this._canceled
			}, e
		}(),
		z = function() {
			function e() {
				this._eventHandler = {}
			}
			var t = e.prototype;
			return t.trigger = function(t) {
				for (var n = [], e = 1; e < arguments.length; e++) n[e - 1] = arguments[e];
				var i = t instanceof L ? t.eventType : t,
					i = a(this._eventHandler[i] || []);
				return i.length <= 0 || (t instanceof L ? (t.currentTarget = this, i.forEach(function(e) {
					e(t)
				})) : i.forEach(function(e) {
					e.apply(void 0, a(n))
				})), this
			}, t.once = function(n, i) {
				var r, o = this;
				if ("object" == typeof n && g(i)) {
					var e, t = n;
					for (e in t) this.once(e, t[e]);
					return this
				}
				return "string" == typeof n && "function" == typeof i && this.on(n, r = function() {
					for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
					i.apply(void 0, a(e)), o.off(n, r)
				}), this
			}, t.hasOn = function(e) {
				return !!this._eventHandler[e]
			}, t.on = function(e, t) {
				if ("object" == typeof e && g(t)) {
					var n, i = e;
					for (n in i) this.on(n, i[n]);
					return this
				}
				var r;
				return "string" == typeof e && "function" == typeof t && (r = this._eventHandler[e], g(r) && (this._eventHandler[e] = [], r = this._eventHandler[e]), r.push(t)), this
			}, t.off = function(e, t) {
				var n, i;
				if (g(e)) return this._eventHandler = {}, this;
				if (g(t)) {
					if ("string" == typeof e) return delete this._eventHandler[e], this;
					var r, o = e;
					for (r in o) this.off(r, o[r]);
					return this
				}
				var a = this._eventHandler[e];
				if (a) {
					var s = 0;
					try {
						for (var u = p(a), l = u.next(); !l.done; l = u.next()) {
							if (l.value === t) {
								a.splice(s, 1), a.length <= 0 && delete this._eventHandler[e];
								break
							}
							s++
						}
					} catch (e) {
						n = {
							error: e
						}
					} finally {
						try {
							l && !l.done && (i = u.return) && i.call(u)
						} finally {
							if (n) throw n.error
						}
					}
				}
				return this
			}, e.VERSION = "3.0.1", e
		}(),
		M = L,
		H = {
			WRONG_TYPE: 0,
			ELEMENT_NOT_FOUND: 1,
			VAL_MUST_NOT_NULL: 2,
			NOT_ATTACHED_TO_FLICKING: 3,
			WRONG_OPTION: 4,
			INDEX_OUT_OF_RANGE: 5,
			POSITION_NOT_REACHABLE: 6,
			TRANSFORM_NOT_SUPPORTED: 7,
			STOP_CALLED_BY_USER: 8,
			ANIMATION_INTERRUPTED: 9,
			ANIMATION_ALREADY_PLAYING: 10,
			NOT_ALLOWED_IN_FRAMEWORK: 11,
			NOT_INITIALIZED: 12,
			NO_ACTIVE: 13,
			NOT_ALLOWED_IN_VIRTUAL: 14
		},
		V = function(e, t) {
			return e + "(" + typeof e + ") is not a " + t.map(function(e) {
				return '"' + e + '"'
			}).join(" or ") + "."
		},
		F = function(e) {
			return 'Element with selector "' + e + '" not found.'
		},
		G = function(e, t) {
			return t + " should be provided. Given: " + e
		},
		X = 'This module is not attached to the Flicking instance. "init()" should be called first.',
		B = function(e, t) {
			return 'Option "' + e + '" is not in correct format, given: ' + t
		},
		Y = function(e, t, n) {
			return 'Index "' + e + '" is out of range: should be between ' + t + " and " + n + "."
		},
		W = function(e) {
			return 'Position "' + e + '" is not reachable.'
		},
		U = "Browser does not support CSS transform.",
		q = "Event stop() is called by user.",
		Z = "Animation is interrupted by user input.",
		K = "Animation is already playing.",
		J = "This behavior is not allowed in the frameworks like React, Vue, or Angular.",
		Q = "Flicking is not initialized yet, call init() first.",
		$ = {
			READY: "ready",
			BEFORE_RESIZE: "beforeResize",
			AFTER_RESIZE: "afterResize",
			HOLD_START: "holdStart",
			HOLD_END: "holdEnd",
			MOVE_START: "moveStart",
			MOVE: "move",
			MOVE_END: "moveEnd",
			WILL_CHANGE: "willChange",
			CHANGED: "changed",
			WILL_RESTORE: "willRestore",
			RESTORED: "restored",
			SELECT: "select",
			NEED_PANEL: "needPanel",
			VISIBLE_CHANGE: "visibleChange",
			REACH_EDGE: "reachEdge",
			PANEL_CHANGE: "panelChange"
		},
		ee = {
			PREV: "prev",
			CENTER: "center",
			NEXT: "next"
		},
		te = {
			PREV: "PREV",
			NEXT: "NEXT",
			NONE: null
		},
		ne = {
			SNAP: "snap",
			FREE_SCROLL: "freeScroll",
			STRICT: "strict"
		},
		ie = {
			VERTICAL: "vertical",
			HIDDEN: "flicking-hidden",
			DEFAULT_VIRTUAL: "flicking-panel"
		},
		re = {
			__proto__: null,
			EVENTS: $,
			ALIGN: ee,
			DIRECTION: te,
			MOVE_TYPE: ne,
			CLASS: ie,
			ERROR_CODE: H
		},
		oe = function(e) {
			var t = /(?:(\+|\-)\s*)?(\d+(?:\.\d+)?(%|px)?)/g;
			if ("number" == typeof e) return {
				percentage: 0,
				absolute: e
			};
			for (var n = {
					percentage: 0,
					absolute: 0
				}, i = 0, r = t.exec(e); null != r;) {
				var o = r[1],
					a = r[2],
					s = r[3],
					a = parseFloat(a);
				if (!(o = i <= 0 ? o || "+" : o)) return null;
				o = "+" === o ? 1 : -1;
				"%" === s ? n.percentage += a / 100 * o : n.absolute += o * a, ++i, r = t.exec(e)
			}
			return 0 === i ? null : n
		},
		ae = Object.setPrototypeOf || function(e, t) {
			return e.__proto__ = t, e
		},
		se = {
			__proto__: null,
			merge: e,
			getElement: S,
			checkExistence: t,
			clamp: _,
			getFlickingAttached: y,
			toArray: s,
			parseAlign: u,
			parseBounce: l,
			parseArithmeticSize: v,
			parseArithmeticExpression: oe,
			parseCSSSizeValue: function(e) {
				return O(e) ? e : e + "px"
			},
			parsePanelAlign: b,
			getDirection: E,
			parseElement: P,
			getMinusCompensatedIndex: x,
			includes: T,
			isString: O,
			circulatePosition: w,
			find: n,
			findRight: function(e, t) {
				for (var n = e.length - 1; 0 <= n; n--) {
					var i = e[n];
					if (t(i)) return i
				}
				return null
			},
			findIndex: R,
			getProgress: I,
			getStyle: A,
			setSize: C,
			isBetween: k,
			circulateIndex: N,
			range: D,
			setPrototypeOf: ae
		},
		ue = (o(le, j = Error), le);

	function le(e, t) {
		e = j.call(this, e) || this;
		return ae(e, le.prototype), e.name = "FlickingError", e.code = t, e
	}
	var ce = (gi = he.prototype, Object.defineProperty(gi, "element", {
		get: function() {
			return this._el
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(gi, "width", {
		get: function() {
			return this._width - this._padding.left - this._padding.right
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(gi, "height", {
		get: function() {
			return this._height - this._padding.top - this._padding.bottom
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(gi, "padding", {
		get: function() {
			return this._padding
		},
		enumerable: !1,
		configurable: !0
	}), gi.setSize = function(e) {
		var t = e.width,
			n = e.height,
			i = this._el,
			r = this._padding,
			e = this._isBorderBoxSizing;
		null != t && (O(t) ? i.style.width = t : (t = e ? t + r.left + r.right : t, i.style.width = t + "px")), null != n && (O(n) ? i.style.height = n : (n = e ? n + r.top + r.bottom : n, i.style.height = n + "px")), this.resize()
	}, gi.resize = function() {
		var e = this._el,
			t = A(e);
		this._width = e.clientWidth, this._height = e.clientHeight, this._padding = {
			left: parseFloat(t.paddingLeft),
			right: parseFloat(t.paddingRight),
			top: parseFloat(t.paddingTop),
			bottom: parseFloat(t.paddingBottom)
		}, this._isBorderBoxSizing = "border-box" === t.boxSizing
	}, he);

	function he(e) {
		this._el = e, this._width = 0, this._height = 0, this._padding = {
			left: 0,
			right: 0,
			top: 0,
			bottom: 0
		}, this._isBorderBoxSizing = !1
	}
	var fe = (Ae = de.prototype, Object.defineProperty(Ae, "enabled", {
		get: function() {
			return this._enabled
		},
		enumerable: !1,
		configurable: !0
	}), Ae.enable = function() {
		var e = this._flicking,
			t = e.viewport;
		return this._enabled && this.disable(), e.useResizeObserver && window.ResizeObserver ? ((t = 0 !== t.width || 0 !== t.height ? new ResizeObserver(this._skipFirstResize) : new ResizeObserver(this._onResize)).observe(e.viewport.element), this._resizeObserver = t) : window.addEventListener("resize", this._onResize), this._enabled = !0, this
	}, Ae.disable = function() {
		if (!this._enabled) return this;
		var e = this._resizeObserver;
		return e ? (e.disconnect(), this._resizeObserver = null) : window.removeEventListener("resize", this._onResize), this._enabled = !1, this
	}, de);

	function de(e) {
		var t, n = this;
		this._onResize = function() {
			n._flicking.resize()
		}, this._skipFirstResize = (t = !0, function() {
			t ? t = !1 : n._onResize()
		}), this._flicking = e, this._enabled = !1, this._resizeObserver = null
	}
	var pe = (_n = ge.prototype, Object.defineProperty(_n, "element", {
		get: function() {
			return this._elProvider.element
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(_n, "elementProvider", {
		get: function() {
			return this._elProvider
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(_n, "index", {
		get: function() {
			return this._index
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(_n, "position", {
		get: function() {
			return this._pos + this._alignPos
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(_n, "size", {
		get: function() {
			return this._size
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(_n, "sizeIncludingMargin", {
		get: function() {
			return this._size + this._margin.prev + this._margin.next
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(_n, "height", {
		get: function() {
			return this._height
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(_n, "margin", {
		get: function() {
			return this._margin
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(_n, "alignPosition", {
		get: function() {
			return this._alignPos
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(_n, "removed", {
		get: function() {
			return this._removed
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(_n, "rendered", {
		get: function() {
			return this._rendered
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(_n, "loading", {
		get: function() {
			return this._loading
		},
		set: function(e) {
			this._loading = e
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(_n, "range", {
		get: function() {
			return {
				min: this._pos,
				max: this._pos + this._size
			}
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(_n, "toggled", {
		get: function() {
			return this._toggled
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(_n, "toggleDirection", {
		get: function() {
			return this._toggleDirection
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(_n, "offset", {
		get: function() {
			var e = this._toggleDirection,
				t = this._flicking.camera.rangeDiff;
			return e !== te.NONE && this._toggled ? e === te.PREV ? -t : t : 0
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(_n, "progress", {
		get: function() {
			var e = this._flicking;
			return this.index - e.camera.progress
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(_n, "outsetProgress", {
		get: function() {
			var e = this.position + this.offset,
				t = this._alignPos,
				n = this._flicking.camera,
				i = n.position;
			if (i === e) return 0;
			if (i < e) {
				var r = e + (n.size - n.alignPosition) + t;
				return -I(i, e, r)
			}
			t = e - (n.alignPosition + this._size - t);
			return 1 - I(i, t, e)
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(_n, "visibleRatio", {
		get: function() {
			var e = this.range,
				t = this._size,
				n = this.offset,
				i = this._flicking.camera.visibleRange,
				r = e.min + n,
				e = e.max + n;
			if (e <= i.min || r >= i.max) return 0;
			n = t;
			return i.min > r && (n -= i.min - r), i.max < e && (n -= e - i.max), n / t
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(_n, "align", {
		get: function() {
			return this._align
		},
		set: function(e) {
			this._align = e
		},
		enumerable: !1,
		configurable: !0
	}), _n.markForShow = function() {
		this._rendered = !0, this._elProvider.show(this._flicking)
	}, _n.markForHide = function() {
		this._rendered = !1, this._elProvider.hide(this._flicking)
	}, _n.resize = function(e) {
		var t = this.element,
			n = this._flicking.horizontal;
		return e ? (this._size = e.size, this._margin = r({}, e.margin), this._height = e.height) : (e = A(t), this._size = n ? t.offsetWidth : t.offsetHeight, this._margin = n ? {
			prev: parseFloat(e.marginLeft || "0"),
			next: parseFloat(e.marginRight || "0")
		} : {
			prev: parseFloat(e.marginTop || "0"),
			next: parseFloat(e.marginBottom || "0")
		}, this._height = n ? t.offsetHeight : this._size), this.updatePosition(), this._updateAlignPos(), this
	}, _n.setSize = function(e) {
		return C(this.element, e), this
	}, _n.contains = function(e) {
		var t;
		return !(null === (t = this.element) || void 0 === t || !t.contains(e))
	}, _n.destroy = function() {
		this._resetInternalStates(), this._removed = !0
	}, _n.includePosition = function(e, t) {
		return this.includeRange(e, e, t = void 0 === t ? !1 : t)
	}, _n.includeRange = function(e, t, n) {
		var i = this._margin,
			r = this.range;
		return (n = void 0 === n ? !1 : n) && (r.min -= i.prev, r.max += i.next), t >= r.min && e <= r.max
	}, _n.isVisibleOnRange = function(e, t) {
		var n = this.range;
		return t > n.min && e < n.max
	}, _n.focus = function(e) {
		return this._flicking.moveTo(this._index, e)
	}, _n.prev = function() {
		var e = this._index,
			t = this._flicking,
			n = t.renderer,
			i = n.panelCount;
		return 1 === i ? null : t.circularEnabled ? n.getPanel(0 === e ? i - 1 : e - 1) : n.getPanel(e - 1)
	}, _n.next = function() {
		var e = this._index,
			t = this._flicking,
			n = t.renderer,
			i = n.panelCount;
		return 1 === i ? null : t.circularEnabled ? n.getPanel(e === i - 1 ? 0 : e + 1) : n.getPanel(e + 1)
	}, _n.increaseIndex = function(e) {
		return this._index += Math.max(e, 0), this
	}, _n.decreaseIndex = function(e) {
		return this._index -= Math.max(e, 0), this
	}, _n.updatePosition = function() {
		var e = this._flicking.renderer.panels[this._index - 1];
		return this._pos = e ? e.range.max + e.margin.next + this._margin.prev : this._margin.prev, this
	}, _n.toggle = function(e, t) {
		var n = this._toggleDirection,
			i = this._togglePosition;
		if (n === te.NONE || t === e) return !1;
		var r = this._toggled;
		return e < t ? e <= i && i <= t && (this._toggled = n === te.NEXT) : i <= e && t <= i && (this._toggled = n !== te.NEXT), r !== this._toggled
	}, _n.updateCircularToggleDirection = function() {
		var e = this._flicking;
		if (!e.circularEnabled) return this._toggleDirection = te.NONE, this._toggled = !1, this;
		var t = e.camera,
			n = t.range,
			i = t.alignPosition,
			r = t.visibleRange,
			o = r.max - r.min,
			e = n.min - i,
			r = n.max - i + o,
			r = this.includeRange(r - o, r, !1),
			e = this.includeRange(e, e + o, !1);
		return this._toggled = !1, r ? (this._toggleDirection = te.PREV, this._togglePosition = this.range.max + n.min - n.max + i, this.toggle(1 / 0, t.position)) : e ? (this._toggleDirection = te.NEXT, this._togglePosition = this.range.min + n.max - o + i, this.toggle(-1 / 0, t.position)) : (this._toggleDirection = te.NONE, this._togglePosition = 0), this
	}, _n._updateAlignPos = function() {
		this._alignPos = u(this._align, this._size)
	}, _n._resetInternalStates = function() {
		this._size = 0, this._pos = 0, this._margin = {
			prev: 0,
			next: 0
		}, this._height = 0, this._alignPos = 0, this._toggled = !1, this._togglePosition = 0, this._toggleDirection = te.NONE
	}, ge);

	function ge(e) {
		var t = e.index,
			n = e.align,
			i = e.flicking,
			e = e.elementProvider;
		this._index = t, this._flicking = i, this._elProvider = e, this._align = n, this._removed = !1, this._rendered = !0, this._loading = !1, this._resetInternalStates()
	}
	var ve = function(n) {
			function e(e) {
				var t = n.call(this, e) || this;
				return t._elProvider = e.elementProvider, t
			}
			o(e, n);
			var t = e.prototype;
			return Object.defineProperty(t, "rendered", {
				get: function() {
					return this._elProvider.rendered
				},
				enumerable: !1,
				configurable: !0
			}), t.markForShow = function() {
				return this._elProvider.show(this._flicking), n.prototype.markForShow.call(this)
			}, t.markForHide = function() {
				return this._elProvider.hide(this._flicking), n.prototype.markForHide.call(this)
			}, e
		}(pe),
		me = function(n) {
			function e(e) {
				var t = n.call(this, e) || this;
				return e.elementProvider.init(t), t._elProvider = e.elementProvider, t._cachedInnerHTML = null, t
			}
			o(e, n);
			var t = e.prototype;
			return Object.defineProperty(t, "element", {
				get: function() {
					return this._elProvider.element
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "cachedInnerHTML", {
				get: function() {
					return this._cachedInnerHTML
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "elementIndex", {
				get: function() {
					var e = this._flicking,
						t = e.panelsPerView + 1,
						n = e.panelCount,
						e = this._index;
					return this._toggled && (e = this._toggleDirection === te.NEXT ? e + n : e - n), N(e, t)
				},
				enumerable: !1,
				configurable: !0
			}), t.cacheRenderResult = function(e) {
				this._cachedInnerHTML = e
			}, t.uncacheRenderResult = function() {
				this._cachedInnerHTML = null
			}, t.render = function() {
				var e = this._flicking.virtual,
					t = e.renderPanel,
					n = e.cache,
					e = this._elProvider.element,
					t = this._cachedInnerHTML || t(this, this._index);
				t !== e.innerHTML && (e.innerHTML = t, n && this.cacheRenderResult(t))
			}, t.increaseIndex = function(e) {
				return this.uncacheRenderResult(), n.prototype.increaseIndex.call(this, e)
			}, t.decreaseIndex = function(e) {
				return this.uncacheRenderResult(), n.prototype.decreaseIndex.call(this, e)
			}, e
		}(pe),
		_e = (qn = ye.prototype, Object.defineProperty(qn, "element", {
			get: function() {
				return this._element
			},
			enumerable: !1,
			configurable: !0
		}), qn.show = function(e) {
			var t = this.element,
				e = e.camera.element;
			t.parentElement !== e && e.appendChild(t)
		}, qn.hide = function(e) {
			var t = this.element,
				e = e.camera.element;
			t.parentElement === e && e.removeChild(t)
		}, ye);

	function ye(e) {
		this._element = e
	}
	var be = (ki = Ee.prototype, Object.defineProperty(ki, "element", {
		get: function() {
			var e = this._flicking,
				t = this._panel.elementIndex;
			return e.virtual.elements[t].nativeElement
		},
		enumerable: !1,
		configurable: !0
	}), ki.init = function(e) {
		this._panel = e
	}, ki.show = function() {}, ki.hide = function() {}, Ee);

	function Ee(e) {
		this._flicking = e
	}
	var Pe = (gi = xe.prototype, Object.defineProperty(gi, "elements", {
		get: function() {
			return this._elements
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(gi, "renderPanel", {
		get: function() {
			return this._renderPanel
		},
		set: function(e) {
			this._renderPanel = e, this._flicking.renderer.panels.forEach(function(e) {
				return e.uncacheRenderResult()
			})
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(gi, "initialPanelCount", {
		get: function() {
			return this._initialPanelCount
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(gi, "cache", {
		get: function() {
			return this._cache
		},
		set: function(e) {
			this._cache = e
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(gi, "panelClass", {
		get: function() {
			return this._panelClass
		},
		set: function(e) {
			this._panelClass = e
		},
		enumerable: !1,
		configurable: !0
	}), gi.init = function() {
		var e = this._flicking;
		e.virtualEnabled && (e.renderExternal || this._initVirtualElements(), e = e.camera.children, this._elements = e.map(function(e) {
			return {
				nativeElement: e,
				visible: !0
			}
		}))
	}, gi.show = function(e) {
		var t = this._elements[e],
			e = t.nativeElement;
		t.visible = !0, e.style.display && (e.style.display = "")
	}, gi.hide = function(e) {
		var t = this._elements[e],
			e = t.nativeElement;
		t.visible = !1, e.style.display = "none"
	}, gi.append = function(e) {
		var t = this._flicking;
		return this.insert(t.panels.length, e = void 0 === e ? 1 : e)
	}, gi.prepend = function(e) {
		return this.insert(0, e = void 0 === e ? 1 : e)
	}, gi.insert = function(e, t) {
		return (t = void 0 === t ? 1 : t) <= 0 ? [] : this._flicking.renderer.batchInsert({
			index: e,
			elements: D(t),
			hasDOMInElements: !1
		})
	}, gi.remove = function(e, t) {
		return t <= 0 ? [] : this._flicking.renderer.batchRemove({
			index: e,
			deleteCount: t,
			hasDOMInElements: !1
		})
	}, gi._initVirtualElements = function() {
		var n = this,
			e = this._flicking,
			t = e.camera.element,
			e = e.panelsPerView,
			i = document.createDocumentFragment();
		D(e + 1).map(function(e) {
			var t = document.createElement("div");
			return t.className = n._panelClass, t.dataset.elementIndex = e.toString(), t
		}).forEach(function(e) {
			i.appendChild(e)
		}), t.appendChild(i)
	}, xe);

	function xe(e, t) {
		this._flicking = e, this._renderPanel = null !== (e = null == t ? void 0 : t.renderPanel) && void 0 !== e ? e : function() {
			return ""
		}, this._initialPanelCount = null !== (e = null == t ? void 0 : t.initialPanelCount) && void 0 !== e ? e : -1, this._cache = null !== (e = null == t ? void 0 : t.cache) && void 0 !== e && e, this._panelClass = null !== (t = null == t ? void 0 : t.panelClass) && void 0 !== t ? t : ie.DEFAULT_VIRTUAL, this._elements = []
	}

	function Te() {
		return (Te = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n, i = arguments[t];
				for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
			}
			return e
		}).apply(this, arguments)
	}

	function Oe(e, t) {
		e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t
	}

	function we(e) {
		if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e
	}
	var Re = "function" != typeof Object.assign ? function(e) {
			if (null == e) throw new TypeError("Cannot convert undefined or null to object");
			for (var t = Object(e), n = 1; n < arguments.length; n++) {
				var i = arguments[n];
				if (null != i)
					for (var r in i) i.hasOwnProperty(r) && (t[r] = i[r])
			}
			return t
		} : Object.assign,
		Ie = ["", "webkit", "Moz", "MS", "ms", "o"],
		Ae = "undefined" == typeof document ? {
			style: {}
		} : document.createElement("div"),
		Ce = Math.round,
		Se = Math.abs,
		ke = Date.now;

	function Ne(e, t) {
		for (var n, i = t[0].toUpperCase() + t.slice(1), r = 0; r < Ie.length;) {
			if ((n = (n = Ie[r]) ? n + i : t) in e) return n;
			r++
		}
	}
	var De = "undefined" == typeof window ? {} : window,
		je = Ne(Ae.style, "touchAction"),
		Le = void 0 !== je;
	var ze = "compute",
		Me = "manipulation",
		He = "none",
		Ve = "pan-x",
		Fe = "pan-y",
		Ge = function() {
			if (!Le) return !1;
			var t = {},
				n = De.CSS && De.CSS.supports;
			return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(e) {
				return t[e] = !n || De.CSS.supports("touch-action", e)
			}), t
		}(),
		Xe = "ontouchstart" in De,
		Be = void 0 !== Ne(De, "PointerEvent"),
		Ye = Xe && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
		We = "touch",
		Ue = "mouse",
		qe = 1,
		Ze = 4,
		Ke = 8,
		Je = ["x", "y"],
		Qe = ["clientX", "clientY"];

	function $e(e, t, n) {
		if (e)
			if (e.forEach) e.forEach(t, n);
			else if (void 0 !== e.length)
			for (i = 0; i < e.length;) t.call(n, e[i], i, e), i++;
		else
			for (var i in e) e.hasOwnProperty(i) && t.call(n, e[i], i, e)
	}

	function et(e, t) {
		return "function" == typeof e ? e.apply(t && t[0] || void 0, t) : e
	}

	function tt(e, t) {
		return -1 < e.indexOf(t)
	}
	var nt = function() {
		function e(e, t) {
			this.manager = e, this.set(t)
		}
		var t = e.prototype;
		return t.set = function(e) {
			e === ze && (e = this.compute()), Le && this.manager.element.style && Ge[e] && (this.manager.element.style[je] = e), this.actions = e.toLowerCase().trim()
		}, t.update = function() {
			this.set(this.manager.options.touchAction)
		}, t.compute = function() {
			var t = [];
			return $e(this.manager.recognizers, function(e) {
					et(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
				}),
				function(e) {
					if (tt(e, He)) return He;
					var t = tt(e, Ve),
						n = tt(e, Fe);
					return t && n ? He : t || n ? t ? Ve : Fe : tt(e, Me) ? Me : "auto"
				}(t.join(" "))
		}, t.preventDefaults = function(e) {
			var t = e.srcEvent,
				n = e.offsetDirection;
			if (this.manager.session.prevented) t.preventDefault();
			else {
				var i = this.actions,
					r = tt(i, He) && !Ge[He],
					o = tt(i, Fe) && !Ge[Fe],
					a = tt(i, Ve) && !Ge[Ve];
				if (r) {
					var s = 1 === e.pointers.length,
						i = e.distance < 2,
						e = e.deltaTime < 250;
					if (s && i && e) return
				}
				if (!a || !o) return r || o && 6 & n || a && 24 & n ? this.preventSrc(t) : void 0
			}
		}, t.preventSrc = function(e) {
			this.manager.session.prevented = !0, e.preventDefault()
		}, e
	}();

	function it(e, t) {
		for (; e;) {
			if (e === t) return !0;
			e = e.parentNode
		}
		return !1
	}

	function rt(e) {
		var t = e.length;
		if (1 === t) return {
			x: Ce(e[0].clientX),
			y: Ce(e[0].clientY)
		};
		for (var n = 0, i = 0, r = 0; r < t;) n += e[r].clientX, i += e[r].clientY, r++;
		return {
			x: Ce(n / t),
			y: Ce(i / t)
		}
	}

	function ot(e) {
		for (var t = [], n = 0; n < e.pointers.length;) t[n] = {
			clientX: Ce(e.pointers[n].clientX),
			clientY: Ce(e.pointers[n].clientY)
		}, n++;
		return {
			timeStamp: ke(),
			pointers: t,
			center: rt(t),
			deltaX: e.deltaX,
			deltaY: e.deltaY
		}
	}

	function at(e, t, n) {
		var i = t[(n = n || Je)[0]] - e[n[0]],
			n = t[n[1]] - e[n[1]];
		return Math.sqrt(i * i + n * n)
	}

	function st(e, t, n) {
		var i = t[(n = n || Je)[0]] - e[n[0]],
			n = t[n[1]] - e[n[1]];
		return 180 * Math.atan2(n, i) / Math.PI
	}

	function ut(e, t) {
		return e === t ? 1 : Se(e) >= Se(t) ? e < 0 ? 2 : 4 : t < 0 ? 8 : 16
	}

	function lt(e, t, n) {
		return {
			x: t / e || 0,
			y: n / e || 0
		}
	}

	function ct(e, t) {
		var n = e.session,
			i = t.pointers,
			r = i.length;
		n.firstInput || (n.firstInput = ot(t)), 1 < r && !n.firstMultiple ? n.firstMultiple = ot(t) : 1 === r && (n.firstMultiple = !1);
		var o, a, s = n.firstInput,
			u = n.firstMultiple,
			l = (u || s).center,
			c = t.center = rt(i);
		t.timeStamp = ke(), t.deltaTime = t.timeStamp - s.timeStamp, t.angle = st(l, c), t.distance = at(l, c), o = n, r = (a = t).center, s = o.offsetDelta || {}, l = o.prevDelta || {}, c = o.prevInput || {}, a.eventType !== qe && c.eventType !== Ze || (l = o.prevDelta = {
			x: c.deltaX || 0,
			y: c.deltaY || 0
		}, s = o.offsetDelta = {
			x: r.x,
			y: r.y
		}), a.deltaX = l.x + (r.x - s.x), a.deltaY = l.y + (r.y - s.y), t.offsetDirection = ut(t.deltaX, t.deltaY);
		var h, f, d, p, s = lt(t.deltaTime, t.deltaX, t.deltaY);
		t.overallVelocityX = s.x, t.overallVelocityY = s.y, t.overallVelocity = Se(s.x) > Se(s.y) ? s.x : s.y, t.scale = u ? (s = u.pointers, at(i[0], i[1], Qe) / at(s[0], s[1], Qe)) : 1, t.rotation = u ? (p = u.pointers, st(i[1], i[0], Qe) + st(p[1], p[0], Qe)) : 0, t.maxPointers = !n.prevInput || t.pointers.length > n.prevInput.maxPointers ? t.pointers.length : n.prevInput.maxPointers, u = t, p = (i = n).lastInterval || u, n = u.timeStamp - p.timeStamp, u.eventType !== Ke && (25 < n || void 0 === p.velocity) ? (h = (d = lt(n, n = u.deltaX - p.deltaX, g = u.deltaY - p.deltaY)).x, f = d.y, d = Se(d.x) > Se(d.y) ? d.x : d.y, g = ut(n, g), i.lastInterval = u) : (d = p.velocity, h = p.velocityX, f = p.velocityY, g = p.direction), u.velocity = d, u.velocityX = h, u.velocityY = f, u.direction = g;
		var g = e.element,
			e = t.srcEvent,
			e = e.composedPath ? e.composedPath()[0] : e.path ? e.path[0] : e.target;
		it(e, g) && (g = e), t.target = g
	}

	function ht(e, t, n) {
		var i = n.pointers.length,
			r = n.changedPointers.length,
			o = t & qe && i - r == 0,
			r = t & (Ze | Ke) && i - r == 0;
		n.isFirst = !!o, n.isFinal = !!r, o && (e.session = {}), n.eventType = t, ct(e, n), e.emit("hammer.input", n), e.recognize(n), e.session.prevInput = n
	}

	function ft(e) {
		return e.trim().split(/\s+/g)
	}

	function dt(t, e, n) {
		$e(ft(e), function(e) {
			t.addEventListener(e, n, !1)
		})
	}

	function pt(t, e, n) {
		$e(ft(e), function(e) {
			t.removeEventListener(e, n, !1)
		})
	}

	function gt(e) {
		e = e.ownerDocument || e;
		return e.defaultView || e.parentWindow || window
	}
	var vt = function() {
		function e(t, e) {
			var n = this;
			this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
				et(t.options.enable, [t]) && n.handler(e)
			}, this.init()
		}
		var t = e.prototype;
		return t.handler = function() {}, t.init = function() {
			this.evEl && dt(this.element, this.evEl, this.domHandler), this.evTarget && dt(this.target, this.evTarget, this.domHandler), this.evWin && dt(gt(this.element), this.evWin, this.domHandler)
		}, t.destroy = function() {
			this.evEl && pt(this.element, this.evEl, this.domHandler), this.evTarget && pt(this.target, this.evTarget, this.domHandler), this.evWin && pt(gt(this.element), this.evWin, this.domHandler)
		}, e
	}();

	function mt(e, t, n) {
		if (e.indexOf && !n) return e.indexOf(t);
		for (var i = 0; i < e.length;) {
			if (n && e[i][n] == t || !n && e[i] === t) return i;
			i++
		}
		return -1
	}
	var _t = {
			pointerdown: qe,
			pointermove: 2,
			pointerup: Ze,
			pointercancel: Ke,
			pointerout: Ke
		},
		yt = {
			2: We,
			3: "pen",
			4: Ue,
			5: "kinect"
		},
		bt = "pointerdown",
		Et = "pointermove pointerup pointercancel";
	De.MSPointerEvent && !De.PointerEvent && (bt = "MSPointerDown", Et = "MSPointerMove MSPointerUp MSPointerCancel");
	var Pt = function(t) {
		function n() {
			var e = n.prototype;
			return e.evEl = bt, e.evWin = Et, (e = t.apply(this, arguments) || this).store = e.manager.session.pointerEvents = [], e
		}
		return Oe(n, t), n.prototype.handler = function(e) {
			var t = this.store,
				n = !1,
				i = e.type.toLowerCase().replace("ms", ""),
				r = _t[i],
				o = yt[e.pointerType] || e.pointerType,
				a = o === We,
				i = mt(t, e.pointerId, "pointerId");
			r & qe && (0 === e.button || a) ? i < 0 && (t.push(e), i = t.length - 1) : r & (Ze | Ke) && (n = !0), i < 0 || (t[i] = e, this.callback(this.manager, r, {
				pointers: t,
				changedPointers: [e],
				pointerType: o,
				srcEvent: e
			}), n && t.splice(i, 1))
		}, n
	}(vt);

	function xt(e) {
		return Array.prototype.slice.call(e, 0)
	}

	function Tt(e, n, t) {
		for (var i = [], r = [], o = 0; o < e.length;) {
			var a = n ? e[o][n] : e[o];
			mt(r, a) < 0 && i.push(e[o]), r[o] = a, o++
		}
		return i = t ? n ? i.sort(function(e, t) {
			return e[n] > t[n]
		}) : i.sort() : i
	}
	var Ot = {
			touchstart: qe,
			touchmove: 2,
			touchend: Ze,
			touchcancel: Ke
		},
		wt = function(t) {
			function n() {
				var e;
				return n.prototype.evTarget = "touchstart touchmove touchend touchcancel", (e = t.apply(this, arguments) || this).targetIds = {}, e
			}
			return Oe(n, t), n.prototype.handler = function(e) {
				var t = Ot[e.type],
					n = function(e, t) {
						var n, i, r = xt(e.touches),
							o = this.targetIds;
						if (t & (2 | qe) && 1 === r.length) return o[r[0].identifier] = !0, [r, r];
						var a = xt(e.changedTouches),
							s = [],
							u = this.target;
						if (i = r.filter(function(e) {
								return it(e.target, u)
							}), t === qe)
							for (n = 0; n < i.length;) o[i[n].identifier] = !0, n++;
						n = 0;
						for (; n < a.length;) o[a[n].identifier] && s.push(a[n]), t & (Ze | Ke) && delete o[a[n].identifier], n++;
						if (s.length) return [Tt(i.concat(s), "identifier", !0), s]
					}.call(this, e, t);
				n && this.callback(this.manager, t, {
					pointers: n[0],
					changedPointers: n[1],
					pointerType: We,
					srcEvent: e
				})
			}, n
		}(vt);
	var Rt = {
			mousedown: qe,
			mousemove: 2,
			mouseup: Ze
		},
		It = function(t) {
			function n() {
				var e = n.prototype;
				return e.evEl = "mousedown", e.evWin = "mousemove mouseup", (e = t.apply(this, arguments) || this).pressed = !1, e
			}
			return Oe(n, t), n.prototype.handler = function(e) {
				var t = Rt[e.type];
				t & qe && 0 === e.button && (this.pressed = !0), 2 & t && 1 !== e.which && (t = Ze), this.pressed && (t & Ze && (this.pressed = !1), this.callback(this.manager, t, {
					pointers: [e],
					changedPointers: [e],
					pointerType: Ue,
					srcEvent: e
				}))
			}, n
		}(vt),
		At = 2500,
		Ct = 25;

	function St(e) {
		var t, n, e = e.changedPointers[0];
		e.identifier === this.primaryTouch && (t = {
			x: e.clientX,
			y: e.clientY
		}, n = this.lastTouches, this.lastTouches.push(t), setTimeout(function() {
			var e = n.indexOf(t); - 1 < e && n.splice(e, 1)
		}, At))
	}
	var kt = function() {
		return function(n) {
			function e(e, t) {
				var o = n.call(this, e, t) || this;
				return o.handler = function(e, t, n) {
					var i = n.pointerType === We,
						r = n.pointerType === Ue;
					if (!(r && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
						if (i) ! function(e, t) {
							e & qe ? (this.primaryTouch = t.changedPointers[0].identifier, St.call(this, t)) : e & (Ze | Ke) && St.call(this, t)
						}.call(we(we(o)), t, n);
						else if (r && function(e) {
								for (var t = e.srcEvent.clientX, n = e.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
									var r = this.lastTouches[i],
										o = Math.abs(t - r.x),
										r = Math.abs(n - r.y);
									if (o <= Ct && r <= Ct) return !0
								}
								return !1
							}.call(we(we(o)), n)) return;
						o.callback(e, t, n)
					}
				}, o.touch = new wt(o.manager, o.handler), o.mouse = new It(o.manager, o.handler), o.primaryTouch = null, o.lastTouches = [], o
			}
			return Oe(e, n), e.prototype.destroy = function() {
				this.touch.destroy(), this.mouse.destroy()
			}, e
		}(vt)
	}();

	function Nt(e, t, n) {
		return Array.isArray(e) && ($e(e, n[t], n), 1)
	}
	var Dt = 1;

	function jt(e, t) {
		t = t.manager;
		return t ? t.get(e) : e
	}

	function Lt(e) {
		return 16 & e ? "cancel" : 8 & e ? "end" : 4 & e ? "move" : 2 & e ? "start" : ""
	}
	var zt = function() {
			function e(e) {
				this.options = Te({
					enable: !0
				}, e = void 0 === e ? {} : e), this.id = Dt++, this.manager = null, this.state = 1, this.simultaneous = {}, this.requireFail = []
			}
			var t = e.prototype;
			return t.set = function(e) {
				return Re(this.options, e), this.manager && this.manager.touchAction.update(), this
			}, t.recognizeWith = function(e) {
				if (Nt(e, "recognizeWith", this)) return this;
				var t = this.simultaneous;
				return t[(e = jt(e, this)).id] || (t[e.id] = e).recognizeWith(this), this
			}, t.dropRecognizeWith = function(e) {
				return Nt(e, "dropRecognizeWith", this) || (e = jt(e, this), delete this.simultaneous[e.id]), this
			}, t.requireFailure = function(e) {
				if (Nt(e, "requireFailure", this)) return this;
				var t = this.requireFail;
				return -1 === mt(t, e = jt(e, this)) && (t.push(e), e.requireFailure(this)), this
			}, t.dropRequireFailure = function(e) {
				if (Nt(e, "dropRequireFailure", this)) return this;
				e = jt(e, this);
				e = mt(this.requireFail, e);
				return -1 < e && this.requireFail.splice(e, 1), this
			}, t.hasRequireFailures = function() {
				return 0 < this.requireFail.length
			}, t.canRecognizeWith = function(e) {
				return !!this.simultaneous[e.id]
			}, t.emit = function(t) {
				var n = this,
					e = this.state;

				function i(e) {
					n.manager.emit(e, t)
				}
				e < 8 && i(n.options.event + Lt(e)), i(n.options.event), t.additionalEvent && i(t.additionalEvent), 8 <= e && i(n.options.event + Lt(e))
			}, t.tryEmit = function(e) {
				if (this.canEmit()) return this.emit(e);
				this.state = 32
			}, t.canEmit = function() {
				for (var e = 0; e < this.requireFail.length;) {
					if (!(33 & this.requireFail[e].state)) return !1;
					e++
				}
				return !0
			}, t.recognize = function(e) {
				e = Re({}, e);
				if (!et(this.options.enable, [this, e])) return this.reset(), void(this.state = 32);
				56 & this.state && (this.state = 1), this.state = this.process(e), 30 & this.state && this.tryEmit(e)
			}, t.process = function(e) {}, t.getTouchAction = function() {}, t.reset = function() {}, e
		}(),
		Mt = function(t) {
			function e(e) {
				return (e = t.call(this, Te({
					event: "tap",
					pointers: 1,
					taps: 1,
					interval: 300,
					time: 250,
					threshold: 9,
					posThreshold: 10
				}, e = void 0 === e ? {} : e)) || this).pTime = !1, e.pCenter = !1, e._timer = null, e._input = null, e.count = 0, e
			}
			Oe(e, t);
			var n = e.prototype;
			return n.getTouchAction = function() {
				return [Me]
			}, n.process = function(e) {
				var t = this,
					n = this.options,
					i = e.pointers.length === n.pointers,
					r = e.distance < n.threshold,
					o = e.deltaTime < n.time;
				if (this.reset(), e.eventType & qe && 0 === this.count) return this.failTimeout();
				if (r && o && i) {
					if (e.eventType !== Ze) return this.failTimeout();
					o = !this.pTime || e.timeStamp - this.pTime < n.interval, i = !this.pCenter || at(this.pCenter, e.center) < n.posThreshold;
					if (this.pTime = e.timeStamp, this.pCenter = e.center, i && o ? this.count += 1 : this.count = 1, this._input = e, 0 == this.count % n.taps) return this.hasRequireFailures() ? (this._timer = setTimeout(function() {
						t.state = 8, t.tryEmit()
					}, n.interval), 2) : 8
				}
				return 32
			}, n.failTimeout = function() {
				var e = this;
				return this._timer = setTimeout(function() {
					e.state = 32
				}, this.options.interval), 32
			}, n.reset = function() {
				clearTimeout(this._timer)
			}, n.emit = function() {
				8 === this.state && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
			}, e
		}(zt),
		Ht = function(t) {
			function e(e) {
				return t.call(this, Te({
					pointers: 1
				}, e = void 0 === e ? {} : e)) || this
			}
			Oe(e, t);
			var n = e.prototype;
			return n.attrTest = function(e) {
				var t = this.options.pointers;
				return 0 === t || e.pointers.length === t
			}, n.process = function(e) {
				var t = this.state,
					n = e.eventType,
					i = 6 & t,
					e = this.attrTest(e);
				return i && (n & Ke || !e) ? 16 | t : i || e ? n & Ze ? 8 | t : 2 & t ? 4 | t : 2 : 32
			}, e
		}(zt);

	function Vt(e) {
		return 16 === e ? "down" : 8 === e ? "up" : 2 === e ? "left" : 4 === e ? "right" : ""
	}
	var Ft = function(n) {
			function e(e) {
				return (e = n.call(this, Te({
					event: "pan",
					threshold: 10,
					pointers: 1,
					direction: 30
				}, e = void 0 === e ? {} : e)) || this).pX = null, e.pY = null, e
			}
			Oe(e, n);
			var t = e.prototype;
			return t.getTouchAction = function() {
				var e = this.options.direction,
					t = [];
				return 6 & e && t.push(Fe), 24 & e && t.push(Ve), t
			}, t.directionTest = function(e) {
				var t = this.options,
					n = !0,
					i = e.distance,
					r = e.direction,
					o = e.deltaX,
					a = e.deltaY;
				return r & t.direction || (i = 6 & t.direction ? (r = 0 === o ? 1 : o < 0 ? 2 : 4, n = o !== this.pX, Math.abs(e.deltaX)) : (r = 0 === a ? 1 : a < 0 ? 8 : 16, n = a !== this.pY, Math.abs(e.deltaY))), e.direction = r, n && i > t.threshold && r & t.direction
			}, t.attrTest = function(e) {
				return Ht.prototype.attrTest.call(this, e) && (2 & this.state || !(2 & this.state) && this.directionTest(e))
			}, t.emit = function(e) {
				this.pX = e.deltaX, this.pY = e.deltaY;
				var t = Vt(e.direction);
				t && (e.additionalEvent = this.options.event + t), n.prototype.emit.call(this, e)
			}, e
		}(Ht),
		Gt = function(i) {
			function e(e) {
				return i.call(this, Te({
					event: "swipe",
					threshold: 10,
					velocity: .3,
					direction: 30,
					pointers: 1
				}, e = void 0 === e ? {} : e)) || this
			}
			Oe(e, i);
			var t = e.prototype;
			return t.getTouchAction = function() {
				return Ft.prototype.getTouchAction.call(this)
			}, t.attrTest = function(e) {
				var t, n = this.options.direction;
				return 30 & n ? t = e.overallVelocity : 6 & n ? t = e.overallVelocityX : 24 & n && (t = e.overallVelocityY), i.prototype.attrTest.call(this, e) && n & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers === this.options.pointers && Se(t) > this.options.velocity && e.eventType & Ze
			}, t.emit = function(e) {
				var t = Vt(e.offsetDirection);
				t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
			}, e
		}(Ht),
		Xt = function(n) {
			function e(e) {
				return n.call(this, Te({
					event: "pinch",
					threshold: 0,
					pointers: 2
				}, e = void 0 === e ? {} : e)) || this
			}
			Oe(e, n);
			var t = e.prototype;
			return t.getTouchAction = function() {
				return [He]
			}, t.attrTest = function(e) {
				return n.prototype.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || 2 & this.state)
			}, t.emit = function(e) {
				var t;
				1 !== e.scale && (t = e.scale < 1 ? "in" : "out", e.additionalEvent = this.options.event + t), n.prototype.emit.call(this, e)
			}, e
		}(Ht),
		Bt = function(t) {
			function e(e) {
				return t.call(this, Te({
					event: "rotate",
					threshold: 0,
					pointers: 2
				}, e = void 0 === e ? {} : e)) || this
			}
			Oe(e, t);
			var n = e.prototype;
			return n.getTouchAction = function() {
				return [He]
			}, n.attrTest = function(e) {
				return t.prototype.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || 2 & this.state)
			}, e
		}(Ht),
		Yt = function(t) {
			function e(e) {
				return (e = t.call(this, Te({
					event: "press",
					pointers: 1,
					time: 251,
					threshold: 9
				}, e = void 0 === e ? {} : e)) || this)._timer = null, e._input = null, e
			}
			Oe(e, t);
			var n = e.prototype;
			return n.getTouchAction = function() {
				return ["auto"]
			}, n.process = function(e) {
				var t = this,
					n = this.options,
					i = e.pointers.length === n.pointers,
					r = e.distance < n.threshold,
					o = e.deltaTime > n.time;
				if (this._input = e, !r || !i || e.eventType & (Ze | Ke) && !o) this.reset();
				else if (e.eventType & qe) this.reset(), this._timer = setTimeout(function() {
					t.state = 8, t.tryEmit()
				}, n.time);
				else if (e.eventType & Ze) return 8;
				return 32
			}, n.reset = function() {
				clearTimeout(this._timer)
			}, n.emit = function(e) {
				8 === this.state && (e && e.eventType & Ze ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = ke(), this.manager.emit(this.options.event, this._input)))
			}, e
		}(zt),
		Wt = {
			domEvents: !1,
			touchAction: ze,
			enable: !0,
			inputTarget: null,
			inputClass: null,
			cssProps: {
				userSelect: "none",
				touchSelect: "none",
				touchCallout: "none",
				contentZooming: "none",
				userDrag: "none",
				tapHighlightColor: "rgba(0,0,0,0)"
			}
		},
		Ut = [
			[Bt, {
				enable: !1
			}],
			[Xt, {
					enable: !1
				},
				["rotate"]
			],
			[Gt, {
				direction: 6
			}],
			[Ft, {
					direction: 6
				},
				["swipe"]
			],
			[Mt],
			[Mt, {
					event: "doubletap",
					taps: 2
				},
				["tap"]
			],
			[Yt]
		];

	function qt(n, i) {
		var r, o = n.element;
		o.style && ($e(n.options.cssProps, function(e, t) {
			r = Ne(o.style, t), i ? (n.oldCssProps[r] = o.style[r], o.style[r] = e) : o.style[r] = n.oldCssProps[r] || ""
		}), i || (n.oldCssProps = {}))
	}
	var Zt = function() {
			function e(e, t) {
				var n = this;
				this.options = Re({}, Wt, t || {}), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = e, this.input = new((e = this).options.inputClass || (Be ? Pt : Ye ? wt : Xe ? kt : It))(e, ht), this.touchAction = new nt(this, this.options.touchAction), qt(this, !0), $e(this.options.recognizers, function(e) {
					var t = n.add(new e[0](e[1]));
					e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3])
				}, this)
			}
			var t = e.prototype;
			return t.set = function(e) {
				return Re(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this
			}, t.stop = function(e) {
				this.session.stopped = e ? 2 : 1
			}, t.recognize = function(e) {
				var t, n = this.session;
				if (!n.stopped) {
					this.touchAction.preventDefaults(e);
					var i = this.recognizers,
						r = n.curRecognizer;
					(!r || 8 & r.state) && (r = n.curRecognizer = null);
					for (var o = 0; o < i.length;) t = i[o], 2 === n.stopped || r && t !== r && !t.canRecognizeWith(r) ? t.reset() : t.recognize(e), !r && 14 & t.state && (r = n.curRecognizer = t), o++
				}
			}, t.get = function(e) {
				if (e instanceof zt) return e;
				for (var t = this.recognizers, n = 0; n < t.length; n++)
					if (t[n].options.event === e) return t[n];
				return null
			}, t.add = function(e) {
				if (Nt(e, "add", this)) return this;
				var t = this.get(e.options.event);
				return t && this.remove(t), this.recognizers.push(e), (e.manager = this).touchAction.update(), e
			}, t.remove = function(e) {
				if (Nt(e, "remove", this)) return this;
				var t = this.get(e);
				return !e || -1 !== (t = mt(e = this.recognizers, t)) && (e.splice(t, 1), this.touchAction.update()), this
			}, t.on = function(e, t) {
				if (void 0 === e || void 0 === t) return this;
				var n = this.handlers;
				return $e(ft(e), function(e) {
					n[e] = n[e] || [], n[e].push(t)
				}), this
			}, t.off = function(e, t) {
				if (void 0 === e) return this;
				var n = this.handlers;
				return $e(ft(e), function(e) {
					t ? n[e] && n[e].splice(mt(n[e], t), 1) : delete n[e]
				}), this
			}, t.emit = function(e, t) {
				var n, i, r;
				this.options.domEvents && (n = e, i = t, (r = document.createEvent("Event")).initEvent(n, !0, !0), (r.gesture = i).target.dispatchEvent(r));
				var o = this.handlers[e] && this.handlers[e].slice();
				if (o && o.length) {
					t.type = e, t.preventDefault = function() {
						t.srcEvent.preventDefault()
					};
					for (var a = 0; a < o.length;) o[a](t), a++
				}
			}, t.destroy = function() {
				this.element && qt(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
			}, e
		}(),
		Kt = {
			touchstart: qe,
			touchmove: 2,
			touchend: Ze,
			touchcancel: Ke
		},
		Jt = function(t) {
			function n() {
				var e = n.prototype;
				return e.evTarget = "touchstart", e.evWin = "touchstart touchmove touchend touchcancel", (e = t.apply(this, arguments) || this).started = !1, e
			}
			return Oe(n, t), n.prototype.handler = function(e) {
				var t, n = Kt[e.type];
				n === qe && (this.started = !0), this.started && (t = function(e, t) {
					var n = xt(e.touches),
						e = xt(e.changedTouches);
					t & (Ze | Ke) && (n = Tt(n.concat(e), "identifier", !0));
					return [n, e]
				}.call(this, e, n), n & (Ze | Ke) && t[0].length - t[1].length == 0 && (this.started = !1), this.callback(this.manager, n, {
					pointers: t[0],
					changedPointers: t[1],
					pointerType: We,
					srcEvent: e
				}))
			}, n
		}(vt);

	function Qt(n, e, t) {
		var i = "DEPRECATED METHOD: " + e + "\n" + t + " AT \n";
		return function() {
			var e = new Error("get-stack-trace"),
				t = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
				e = window.console && (window.console.warn || window.console.log);
			return e && e.call(window.console, i, t), n.apply(this, arguments)
		}
	}
	var $t = Qt(function(e, t, n) {
			for (var i = Object.keys(t), r = 0; r < i.length;) n && void 0 !== e[i[r]] || (e[i[r]] = t[i[r]]), r++;
			return e
		}, "extend", "Use `assign`."),
		en = Qt(function(e, t) {
			return $t(e, t, !0)
		}, "merge", "Use `assign`.");

	function tn(e, t, n) {
		var i = t.prototype,
			t = e.prototype = Object.create(i);
		t.constructor = e, t._super = i, n && Re(t, n)
	}

	function nn(e, t) {
		return function() {
			return e.apply(t, arguments)
		}
	}

	function rn(e, t) {
		for (var n = e.length, i = 0; i < n; ++i)
			if (t(e[i], i)) return !0;
		return !1
	}

	function on(e, t) {
		for (var n = e.length, i = 0; i < n; ++i)
			if (t(e[i], i)) return e[i];
		return null
	}

	function an(e, t) {
		try {
			return new RegExp(e, "g").exec(t)
		} catch (e) {
			return null
		}
	}

	function sn(e) {
		return e.replace(/_/g, ".")
	}

	function un(e, n) {
		var i = null,
			r = "-1";
		return rn(e, function(e) {
			var t = an("(" + e.test + ")((?:\\/|\\s|:)([0-9|\\.|_]+))?", n);
			return t && !e.brand && (i = e, r = t[3] || "-1", e.versionAlias ? r = e.versionAlias : e.versionTest && (e = e.versionTest.toLowerCase(), r = ((e = an("(" + e + ")((?:\\/|\\s|:)([0-9|\\.|_]+))", e = n)) ? e[3] : "") || r), r = sn(r), 1)
		}), {
			preset: i,
			version: r
		}
	}

	function ln(e, n) {
		var i = {
			brand: "",
			version: "-1"
		};
		return rn(e, function(e) {
			var t = cn(n, e);
			return t && (i.brand = e.id, i.version = e.versionAlias || t.version, "-1" !== i.version)
		}), i
	}

	function cn(e, t) {
		return on(e, function(e) {
			e = e.brand;
			return an("" + t.test, e.toLowerCase())
		})
	}(function() {
		function e(e, t) {
			return void 0 === t && (t = {}), new Zt(e, Te({
				recognizers: Ut.concat()
			}, t))
		}
		return e.VERSION = "2.0.17-rc", e.DIRECTION_ALL = 30, e.DIRECTION_DOWN = 16, e.DIRECTION_LEFT = 2, e.DIRECTION_RIGHT = 4, e.DIRECTION_UP = 8, e.DIRECTION_HORIZONTAL = 6, e.DIRECTION_VERTICAL = 24, e.DIRECTION_NONE = 1, e.DIRECTION_DOWN = 16, e.INPUT_START = qe, e.INPUT_MOVE = 2, e.INPUT_END = Ze, e.INPUT_CANCEL = Ke, e.STATE_POSSIBLE = 1, e.STATE_BEGAN = 2, e.STATE_CHANGED = 4, e.STATE_ENDED = 8, e.STATE_RECOGNIZED = 8, e.STATE_CANCELLED = 16, e.STATE_FAILED = 32, e.Manager = Zt, e.Input = vt, e.TouchAction = nt, e.TouchInput = wt, e.MouseInput = It, e.PointerEventInput = Pt, e.TouchMouseInput = kt, e.SingleTouchInput = Jt, e.Recognizer = zt, e.AttrRecognizer = Ht, e.Tap = Mt, e.Pan = Ft, e.Swipe = Gt, e.Pinch = Xt, e.Rotate = Bt, e.Press = Yt, e.on = dt, e.off = pt, e.each = $e, e.merge = en, e.extend = $t, e.bindFn = nn, e.assign = Re, e.inherit = tn, e.bindFn = nn, e.prefixed = Ne, e.toArray = xt, e.inArray = mt, e.uniqueArray = Tt, e.splitStr = ft, e.boolOrFn = et, e.hasParent = it, e.addEventListeners = dt, e.removeEventListeners = pt, e.defaults = Re({}, Wt, {
			preset: Ut
		}), e
	})().defaults;
	var hn = [{
			test: "phantomjs",
			id: "phantomjs"
		}, {
			test: "whale",
			id: "whale"
		}, {
			test: "edgios|edge|edg",
			id: "edge"
		}, {
			test: "msie|trident|windows phone",
			id: "ie",
			versionTest: "iemobile|msie|rv"
		}, {
			test: "miuibrowser",
			id: "miui browser"
		}, {
			test: "samsungbrowser",
			id: "samsung internet"
		}, {
			test: "samsung",
			id: "samsung internet",
			versionTest: "version"
		}, {
			test: "chrome|crios",
			id: "chrome"
		}, {
			test: "firefox|fxios",
			id: "firefox"
		}, {
			test: "android",
			id: "android browser",
			versionTest: "version"
		}, {
			test: "safari|iphone|ipad|ipod",
			id: "safari",
			versionTest: "version"
		}],
		fn = [{
			test: "(?=.*applewebkit/(53[0-7]|5[0-2]|[0-4]))(?=.*\\schrome)",
			id: "chrome",
			versionTest: "chrome"
		}, {
			test: "chromium",
			id: "chrome"
		}, {
			test: "whale",
			id: "chrome",
			versionAlias: "-1",
			brand: !0
		}],
		dn = [{
			test: "applewebkit",
			id: "webkit",
			versionTest: "applewebkit|safari"
		}],
		pn = [{
			test: "(?=(iphone|ipad))(?!(.*version))",
			id: "webview"
		}, {
			test: "(?=(android|iphone|ipad))(?=.*(naver|daum|; wv))",
			id: "webview"
		}, {
			test: "webview",
			id: "webview"
		}],
		gn = [{
			test: "windows phone",
			id: "windows phone"
		}, {
			test: "windows 2000",
			id: "window",
			versionAlias: "5.0"
		}, {
			test: "windows nt",
			id: "window"
		}, {
			test: "iphone|ipad|ipod",
			id: "ios",
			versionTest: "iphone os|cpu os"
		}, {
			test: "mac os x",
			id: "mac"
		}, {
			test: "android",
			id: "android"
		}, {
			test: "tizen",
			id: "tizen"
		}, {
			test: "webos|web0s",
			id: "webos"
		}];

	function vn(e) {
		var t = function(e) {
				if (void 0 === e) {
					if ("undefined" == typeof navigator || !navigator) return "";
					e = navigator.userAgent || ""
				}
				return e.toLowerCase()
			}(e),
			n = !!/mobi/g.exec(t),
			i = {
				name: "unknown",
				version: "-1",
				majorVersion: -1,
				webview: !!un(pn, t).preset,
				chromium: !1,
				chromiumVersion: "-1",
				webkit: !1,
				webkitVersion: "-1"
			},
			r = {
				name: "unknown",
				version: "-1",
				majorVersion: -1
			},
			o = un(hn, t),
			a = o.preset,
			s = o.version,
			u = un(gn, t),
			e = u.preset,
			o = u.version,
			u = un(fn, t);
		return i.chromium = !!u.preset, i.chromiumVersion = u.version, i.chromium || (t = un(dn, t), i.webkit = !!t.preset, i.webkitVersion = t.version), e && (r.name = e.id, r.version = o, r.majorVersion = parseInt(o, 10)), a && (i.name = a.id, i.version = s, i.webview && "ios" === r.name && "safari" !== i.name && (i.webview = !1)), i.majorVersion = parseInt(i.version, 10), {
			browser: i,
			os: r,
			isMobile: n,
			isHints: !1
		}
	}

	function mn(e) {
		return void 0 === e
	}
	var _n = function() {
			function e() {
				this.options = {}, this._eventHandler = {}
			}
			var t = e.prototype;
			return t.trigger = function(e) {
				for (var t = this, n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
				if (!(0 < (a = this._eventHandler[e] || []).length)) return !0;
				var r = n[0] || {},
					o = n.slice(1),
					a = a.concat(),
					s = !1;
				r.eventType = e, r.stop = function() {
					s = !0
				}, r.currentTarget = this;
				var u = [r];
				return 1 <= o.length && (u = u.concat(o)), a.forEach(function(e) {
					e.apply(t, u)
				}), !s
			}, t.once = function(n, i) {
				var r, o = this;
				if ("object" == typeof n && mn(i)) {
					var e, t = n;
					for (e in t) this.once(e, t[e]);
					return this
				}
				return "string" == typeof n && "function" == typeof i && this.on(n, r = function() {
					for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
					i.apply(o, e), o.off(n, r)
				}), this
			}, t.hasOn = function(e) {
				return !!this._eventHandler[e]
			}, t.on = function(e, t) {
				if ("object" == typeof e && mn(t)) {
					var n, i = e;
					for (n in i) this.on(n, i[n]);
					return this
				}
				var r;
				return "string" == typeof e && "function" == typeof t && (mn(r = this._eventHandler[e]) && (this._eventHandler[e] = [], r = this._eventHandler[e]), r.push(t)), this
			}, t.off = function(e, t) {
				var n, i;
				if (mn(e)) return this._eventHandler = {}, this;
				if (mn(t)) {
					if ("string" == typeof e) return delete this._eventHandler[e], this;
					var r, o = e;
					for (r in o) this.off(r, o[r]);
					return this
				}
				var a = this._eventHandler[e];
				if (a) {
					var s = 0;
					try {
						for (var u = function(e) {
								var t = "function" == typeof Symbol && Symbol.iterator,
									n = t && e[t],
									i = 0;
								if (n) return n.call(e);
								if (e && "number" == typeof e.length) return {
									next: function() {
										return {
											value: (e = e && i >= e.length ? void 0 : e) && e[i++],
											done: !e
										}
									}
								};
								throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
							}(a), l = u.next(); !l.done; l = u.next()) {
							if (l.value === t) {
								a.splice(s, 1);
								break
							}
							s++
						}
					} catch (e) {
						n = {
							error: e
						}
					} finally {
						try {
							l && !l.done && (i = u.return) && i.call(u)
						} finally {
							if (n) throw n.error
						}
					}
				}
				return this
			}, e.VERSION = "2.2.2", e
		}(),
		yn = function(e, t) {
			return (yn = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(e, t) {
					e.__proto__ = t
				} || function(e, t) {
					for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				})(e, t)
		};
	var bn = function() {
		return (bn = Object.assign || function(e) {
			for (var t, n = 1, i = arguments.length; n < i; n++)
				for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
			return e
		}).apply(this, arguments)
	};

	function En(e, t, n, i) {
		var t = [!n[0] && i ? t[0] - i[0] : t[0], !n[1] && i ? t[1] + i[1] : t[1]],
			r = Math.max(t[0], e);
		return Math.min(t[1], r)
	}

	function Pn(e, t) {
		return e < t[0] || e > t[1]
	}

	function xn(e, t, n) {
		return n[1] && e > t[1] || n[0] && e < t[0]
	}

	function Tn(e, t, n) {
		var i = e,
			r = t[0],
			o = t[1],
			t = o - r;
		return n[1] && o < e && (i = (i - o) % t + r), i = n[0] && e < r ? (i - r) % t + o : i
	}

	function On(e) {
		for (var t = [], n = 0, i = e.length; n < i; n++) t.push(e[n]);
		return t
	}
	var wn, Rn, In, An = (wn = "undefined" == typeof window ? {
			navigator: {
				userAgent: ""
			}
		} : window).requestAnimationFrame || wn.webkitRequestAnimationFrame,
		Cn = wn.cancelAnimationFrame || wn.webkitCancelAnimationFrame;

	function Sn(e, t) {
		var n, i = {};
		for (n in e) n && (i[n] = t(e[n], n));
		return i
	}

	function kn(e, t) {
		var n, i = {};
		for (n in e) n && t(e[n], n) && (i[n] = e[n]);
		return i
	}

	function Nn(e, t) {
		for (var n in e)
			if (n && !t(e[n], n)) return !1;
		return !0
	}

	function Dn(e, n) {
		return Nn(e, function(e, t) {
			return e === n[t]
		})
	}
	An && !Cn ? (Rn = {}, In = An, An = function(t) {
		var n = In(function(e) {
			Rn[n] && t(e)
		});
		return Rn[n] = !0, n
	}, Cn = function(e) {
		delete Rn[e]
	}) : An && Cn || (An = function(e) {
		return wn.setTimeout(function() {
			e(wn.performance && wn.performance.now && wn.performance.now() || (new Date).getTime())
		}, 16)
	}, Cn = wn.clearTimeout);
	var jn = {};

	function Ln(e, t) {
		var n, i;
		return jn[t] || (jn[t] = (i = (n = t) < 1 ? Math.pow(10, Mn(n)) : 1, function(e) {
			return 0 === n ? 0 : Math.round(Math.round(e / n) * n * i) / i
		})), jn[t](e)
	}

	function zn(e, n) {
		if (!e || !n) return e;
		var i = "number" == typeof n;
		return Sn(e, function(e, t) {
			return Ln(e, i ? n : n[t])
		})
	}

	function Mn(e) {
		if (!isFinite(e)) return 0;
		var t = e + "";
		if (0 <= t.indexOf("e")) {
			for (var n = 0, i = 1; Math.round(e * i) / i !== e;) i *= 10, n++;
			return n
		}
		return 0 <= t.indexOf(".") ? t.length - t.indexOf(".") - 1 : 0
	}

	function Hn(e, t, n) {
		return Math.max(Math.min(e, n), t)
	}
	var Vn, Fn = function() {
			function e(e) {
				var t = e.options,
					n = e.itm,
					i = e.em,
					e = e.axm;
				this.options = t, this.itm = n, this.em = i, this.axm = e, this.animationEnd = this.animationEnd.bind(this)
			}
			var t = e.prototype;
			return t.getDuration = function(n, e, t) {
				var i, r = this;
				return Hn(void 0 !== t ? t : (i = Sn(e, function(e, t) {
					return e = Math.abs(e - n[t]), t = r.options.deceleration, (t = Math.sqrt(e / t * 2)) < 100 ? 0 : t
				}), Object.keys(i).reduce(function(e, t) {
					return Math.max(e, i[t])
				}, -1 / 0)), this.options.minimumDuration, this.options.maximumDuration)
			}, t.createAnimationParam = function(e, t, n) {
				var i = this.axm.get(),
					r = e,
					e = n && n.event || null;
				return {
					depaPos: i,
					destPos: r,
					duration: Hn(t, this.options.minimumDuration, this.options.maximumDuration),
					delta: this.axm.getDelta(i, r),
					inputEvent: e,
					input: n && n.input || null,
					isTrusted: !!e,
					done: this.animationEnd
				}
			}, t.grab = function(e, t) {
				var n;
				this._animateParam && e.length && (n = this.axm.get(e), Nn(e = this.axm.map(n, function(e, t) {
					return Tn(e, t.range, t.circular)
				}), function(e, t) {
					return n[t] === e
				}) || this.em.triggerChange(e, !1, n, t, !!t), this._animateParam = null, this._raf && (e = this._raf, Cn(e)), this._raf = null, this.em.triggerAnimationEnd(!(!t || !t.event)))
			}, t.getEventInfo = function() {
				return this._animateParam && this._animateParam.input && this._animateParam.inputEvent ? {
					input: this._animateParam.input,
					event: this._animateParam.inputEvent
				} : null
			}, t.restore = function(e) {
				var t = this.axm.get(),
					n = this.axm.map(t, function(e, t) {
						return Math.min(t.range[1], Math.max(t.range[0], e))
					});
				this.animateTo(n, this.getDuration(t, n), e)
			}, t.animationEnd = function() {
				var e = this.getEventInfo();
				this._animateParam = null;
				var t = this.axm.filter(this.axm.get(), function(e, t) {
					return xn(e, t.range, t.circular)
				});
				0 < Object.keys(t).length && this.setTo(this.axm.map(t, function(e, t) {
					return Tn(e, t.range, t.circular)
				})), this.itm.setInterrupt(!1), this.em.triggerAnimationEnd(!!e), this.axm.isOutside() ? this.restore(e) : this.finish(!!e)
			}, t.finish = function(e) {
				this._animateParam = null, this.itm.setInterrupt(!1), this.em.triggerFinish(e)
			}, t.animateLoop = function(a, s) {
				var u, l, c, h, f, d, p, g;
				a.duration ? (this._animateParam = bn({}, a), u = this._animateParam, l = this, c = u.destPos, h = u.depaPos, f = 0, d = Sn(h, function(e, t) {
					return e <= c[t] ? 1 : -1
				}), p = Sn(c, function(e) {
					return e
				}), g = (new Date).getTime(), u.startTime = g, function e() {
					l._raf = null;
					var t = (new Date).getTime(),
						r = (t - u.startTime) / a.duration,
						o = l.easing(r),
						n = l.axm.map(h, function(e, t, n) {
							var i = 1 <= r ? c[n] : e + u.delta[n] * (o - f),
								e = Tn(i, t.range, t.circular);
							return i !== e && (t = d[n] * (t.range[1] - t.range[0]), c[n] -= t, h[n] -= t), e
						}),
						i = !l.em.triggerChange(n, !1, h);
					h = n, g = t, 1 <= (f = o) ? (Dn(c = l.getFinalPos(c, p), l.axm.get(Object.keys(c))) || l.em.triggerChange(c, !0, h), s()) : i ? l.finish(!1) : l._raf = An(e)
				}()) : (this.em.triggerChange(a.destPos, !0), s())
			}, t.getFinalPos = function(e, n) {
				var i = this;
				return Sn(e, function(e, t) {
					return e >= n[t] - 1e-6 && e <= n[t] + 1e-6 ? n[t] : Ln(e, i.getRoundUnit(e, t))
				})
			}, t.getRoundUnit = function(e, t) {
				var n = this.options.round,
					i = null;
				return n || (t = this.axm.getAxisOptions(t), e = Math.max(Mn(t.range[0]), Mn(t.range[1]), Mn(e)), i = 1 / Math.pow(10, e)), i || n
			}, t.getUserControll = function(e) {
				e = e.setTo();
				return e.destPos = this.axm.get(e.destPos), e.duration = Hn(e.duration, this.options.minimumDuration, this.options.maximumDuration), e
			}, t.animateTo = function(e, t, n) {
				var i = this,
					r = this.createAnimationParam(e, t, n),
					e = bn({}, r.depaPos),
					t = this.em.triggerAnimationStart(r),
					r = this.getUserControll(r);
				!t && this.axm.every(r.destPos, function(e, t) {
					return xn(e, t.range, t.circular)
				}) && console.warn("You can't stop the 'animation' event when 'circular' is true."), t && !Dn(r.destPos, e) && (t = n && n.event || null, this.animateLoop({
					depaPos: e,
					destPos: r.destPos,
					duration: r.duration,
					delta: this.axm.getDelta(e, r.destPos),
					isTrusted: !!t,
					inputEvent: t,
					input: n && n.input || null
				}, function() {
					return i.animationEnd()
				}))
			}, t.easing = function(e) {
				return 1 < e ? 1 : this.options.easing(e)
			}, t.setTo = function(e, t) {
				void 0 === t && (t = 0);
				var n = Object.keys(e);
				this.grab(n);
				var i = this.axm.get(n);
				if (Dn(e, i)) return this;
				this.itm.setInterrupt(!0);
				e = kn(e, function(e, t) {
					return i[t] !== e
				});
				return Object.keys(e).length && (Dn(e = this.axm.map(e, function(e, t) {
					var n = t.range,
						t = t.circular;
					return t && (t[0] || t[1]) ? e : En(e, n, t)
				}), i) || (0 < t ? this.animateTo(e, t) : (this.em.triggerChange(e), this.finish(!1)))), this
			}, t.setBy = function(n, e) {
				return void 0 === e && (e = 0), this.setTo(Sn(this.axm.get(Object.keys(n)), function(e, t) {
					return e + n[t]
				}), e)
			}, e
		}(),
		Gn = function() {
			function e(e) {
				this.axes = e
			}
			var t = e.prototype;
			return t.triggerHold = function(e, t) {
				e = this.getRoundPos(e).roundPos;
				this.axes.trigger("hold", {
					pos: e,
					input: t.input || null,
					inputEvent: t.event || null,
					isTrusted: !0
				})
			}, t.triggerRelease = function(e) {
				var t = this.getRoundPos(e.destPos, e.depaPos),
					n = t.roundPos,
					t = t.roundDepa;
				e.destPos = n, e.depaPos = t, e.setTo = this.createUserControll(e.destPos, e.duration), this.axes.trigger("release", e)
			}, t.triggerChange = function(e, t, n, i, r) {
				void 0 === r && (r = !1);
				var o = this.am,
					a = o.axm,
					o = o.getEventInfo(),
					e = this.getRoundPos(e, n),
					n = e.roundPos,
					e = e.roundDepa,
					n = a.moveTo(n, e),
					e = i && i.event || o && o.event || null,
					o = {
						pos: n.pos,
						delta: n.delta,
						holding: r,
						inputEvent: e,
						isTrusted: !!e,
						input: i && i.input || o && o.input || null,
						set: e ? this.createUserControll(n.pos) : function() {}
					},
					n = this.axes.trigger("change", o);
				return e && a.set(o.set().destPos), n
			}, t.triggerAnimationStart = function(e) {
				var t = this.getRoundPos(e.destPos, e.depaPos),
					n = t.roundPos,
					t = t.roundDepa;
				return e.destPos = n, e.depaPos = t, e.setTo = this.createUserControll(e.destPos, e.duration), this.axes.trigger("animationStart", e)
			}, t.triggerAnimationEnd = function(e) {
				this.axes.trigger("animationEnd", {
					isTrusted: e = void 0 === e ? !1 : e
				})
			}, t.triggerFinish = function(e) {
				this.axes.trigger("finish", {
					isTrusted: e = void 0 === e ? !1 : e
				})
			}, t.createUserControll = function(e, t) {
				void 0 === t && (t = 0);
				var n = {
					destPos: bn({}, e),
					duration: t
				};
				return function(e, t) {
					return e && (n.destPos = bn({}, e)), void 0 !== t && (n.duration = t), n
				}
			}, t.setAnimationManager = function(e) {
				this.am = e
			}, t.destroy = function() {
				this.axes.off()
			}, t.getRoundPos = function(e, t) {
				var n = this.axes.options.round;
				return {
					roundPos: zn(e, n),
					roundDepa: zn(t, n)
				}
			}, e
		}(),
		Xn = function() {
			function e(e) {
				this.options = e, this._prevented = !1
			}
			var t = e.prototype;
			return t.isInterrupting = function() {
				return this.options.interruptable || this._prevented
			}, t.isInterrupted = function() {
				return !this.options.interruptable && this._prevented
			}, t.setInterrupt = function(e) {
				this.options.interruptable || (this._prevented = e)
			}, e
		}(),
		Bn = function() {
			function e(e, t) {
				var n = this;
				this.axis = e, this.options = t, this._complementOptions(), this._pos = Object.keys(this.axis).reduce(function(e, t) {
					return e[t] = n.axis[t].range[0], e
				}, {})
			}
			var t = e.prototype;
			return t._complementOptions = function() {
				var r = this;
				Object.keys(this.axis).forEach(function(i) {
					r.axis[i] = bn({
						range: [0, 100],
						bounce: [0, 0],
						circular: [!1, !1]
					}, r.axis[i]), ["bounce", "circular"].forEach(function(e) {
						var t = r.axis,
							n = t[i][e];
						/string|number|boolean/.test(typeof n) && (t[i][e] = [n, n])
					})
				})
			}, t.getDelta = function(e, t) {
				var n = this.get(e);
				return Sn(this.get(t), function(e, t) {
					return e - n[t]
				})
			}, t.get = function(e) {
				var n = this;
				return e && Array.isArray(e) ? e.reduce(function(e, t) {
					return t && t in n._pos && (e[t] = n._pos[t]), e
				}, {}) : bn(bn({}, this._pos), e || {})
			}, t.moveTo = function(n, i) {
				void 0 === i && (i = this._pos);
				var e = Sn(this._pos, function(e, t) {
					return t in n && t in i ? n[t] - i[t] : 0
				});
				return this.set(this.map(n, function(e, t) {
					return t ? Tn(e, t.range, t.circular) : 0
				})), {
					pos: bn({}, this._pos),
					delta: e
				}
			}, t.set = function(e) {
				for (var t in e) t && t in this._pos && (this._pos[t] = e[t])
			}, t.every = function(e, n) {
				var i = this.axis;
				return Nn(e, function(e, t) {
					return n(e, i[t], t)
				})
			}, t.filter = function(e, n) {
				var i = this.axis;
				return kn(e, function(e, t) {
					return n(e, i[t], t)
				})
			}, t.map = function(e, n) {
				var i = this.axis;
				return Sn(e, function(e, t) {
					return n(e, i[t], t)
				})
			}, t.isOutside = function(e) {
				return !this.every(e ? this.get(e) : this._pos, function(e, t) {
					return !Pn(e, t.range)
				})
			}, t.getAxisOptions = function(e) {
				return this.axis[e]
			}, e
		}(),
		Yn = function() {
			function e(e) {
				var t = e.options,
					n = e.itm,
					i = e.em,
					r = e.axm,
					e = e.am;
				this.isOutside = !1, this.moveDistance = null, this.isStopped = !1, this.options = t, this.itm = n, this.em = i, this.axm = r, this.am = e
			}
			var t = e.prototype;
			return t.atOutside = function(e) {
				var o = this;
				if (this.isOutside) return this.axm.map(e, function(e, t) {
					var n = t.range[0] - t.bounce[0],
						t = t.range[1] + t.bounce[1];
					return t < e ? t : e < n ? n : e
				});
				var a = this.am.easing(1e-5) / 1e-5;
				return this.axm.map(e, function(e, t) {
					var n = t.range[0],
						i = t.range[1],
						r = t.bounce,
						t = t.circular;
					return t && (t[0] || t[1]) ? e : e < n ? n - o.am.easing((n - e) / (r[0] * a)) * r[0] : i < e ? i + o.am.easing((e - i) / (r[1] * a)) * r[1] : e
				})
			}, t.get = function(e) {
				return this.axm.get(e.axes)
			}, t.hold = function(e, t) {
				!this.itm.isInterrupted() && e.axes.length && (this.isStopped = !(t = {
					input: e,
					event: t
				}), this.itm.setInterrupt(!0), this.am.grab(e.axes, t), this.moveDistance || this.em.triggerHold(this.axm.get(), t), this.isOutside = this.axm.isOutside(e.axes), this.moveDistance = this.axm.get(e.axes))
			}, t.change = function(e, t, n) {
				var i, r;
				this.isStopped || !this.itm.isInterrupting() || this.axm.every(n, function(e) {
					return 0 === e
				}) || (r = Sn(i = this.moveDistance || this.axm.get(e.axes), function(e, t) {
					return e + (n[t] || 0)
				}), this.moveDistance && (this.moveDistance = r), this.isOutside && this.axm.every(i, function(e, t) {
					return !Pn(e, t.range)
				}) && (this.isOutside = !1), i = this.atOutside(i), r = this.atOutside(r), this.em.triggerChange(r, !1, i, {
					input: e,
					event: t
				}, !0) || (this.isStopped = !0, this.moveDistance = null, this.am.finish(!1)))
			}, t.release = function(e, t, n, i) {
				var r, o;
				!this.isStopped && this.itm.isInterrupting() && this.moveDistance && (r = this.axm.get(e.axes), o = this.axm.get(), n = this.axm.get(this.axm.map(n, function(e, t, n) {
					return t.circular && (t.circular[0] || t.circular[1]) ? r[n] + e : En(r[n] + e, t.range, t.circular, t.bounce)
				})), n = {
					depaPos: o,
					destPos: n = 0 === (i = this.am.getDuration(n, r, i)) ? bn({}, o) : n,
					duration: i,
					delta: this.axm.getDelta(o, n),
					inputEvent: t,
					input: e,
					isTrusted: !0
				}, this.em.triggerRelease(n), this.moveDistance = null, e = {
					input: e,
					event: t
				}, (n = Dn((t = this.am.getUserControll(n)).destPos, o)) || 0 === t.duration ? (n || this.em.triggerChange(t.destPos, !1, o, e, !0), this.itm.setInterrupt(!1), this.axm.isOutside() ? this.am.restore(e) : this.em.triggerFinish(!0)) : this.am.animateTo(t.destPos, t.duration, e))
			}, e
		}(),
		Wn = "ontouchstart" in wn && "safari" === (void 0 === Vn && function() {
			if ("undefined" != typeof navigator && navigator && navigator.userAgentData) {
				var e = navigator.userAgentData,
					e = e.brands || e.uaList;
				return e && e.length
			}
		}() ? function(e) {
			var t = ((r = navigator.userAgentData).uaList || r.brands).slice(),
				n = r.mobile || !1,
				i = {
					name: (a = t[0]).brand,
					version: a.version,
					majorVersion: -1,
					webkit: !1,
					webkitVersion: "-1",
					chromium: !1,
					chromiumVersion: "-1",
					webview: !!ln(pn, t).brand
				},
				r = {
					name: "unknown",
					version: "-1",
					majorVersion: -1
				};
			i.webkit = !i.chromium && rn(dn, function(e) {
				return cn(t, e)
			});
			var o, a = ln(fn, t);
			i.chromium = !!a.brand, i.chromiumVersion = a.version, i.chromium || (a = ln(dn, t), i.webkit = !!a.brand, i.webkitVersion = a.version), e && (o = e.platform.toLowerCase(), s = on(gn, function(e) {
				return new RegExp("" + e.test, "g").exec(o)
			}), r.name = s ? s.id : o, r.version = e.platformVersion);
			var s = ln(hn, t);
			return s.brand && (i.name = s.brand, i.version = e ? e.uaFullVersion : s.version), "Linux armv8l" === navigator.platform ? r.name = "android" : i.webkit && (r.name = n ? "ios" : "mac"), "ios" === r.name && i.webview && (i.version = "-1"), r.version = sn(r.version), i.version = sn(i.version), r.majorVersion = parseInt(r.version, 10), i.majorVersion = parseInt(i.version, 10), {
				browser: i,
				os: r,
				isMobile: n,
				isHints: !0
			}
		}() : vn(Vn)).browser.name,
		Un = function() {
			if ("undefined" == typeof document) return "";
			for (var e = (document.head || document.getElementsByTagName("head")[0]).style, t = ["transform", "webkitTransform", "msTransform", "mozTransform"], n = 0, i = t.length; n < i; n++)
				if (t[n] in e) return t[n];
			return ""
		}(),
		qn = function(r) {
			function e() {
				this.constructor = t
			}
			var t;

			function n(e, t, n) {
				void 0 === e && (e = {}), void 0 === t && (t = {});
				var i = r.call(this) || this;
				return i.axis = e, i._inputs = [], i.options = bn({
					easing: function(e) {
						return 1 - Math.pow(1 - e, 3)
					},
					interruptable: !0,
					maximumDuration: 1 / 0,
					minimumDuration: 0,
					deceleration: 6e-4,
					round: null
				}, t), i.itm = new Xn(i.options), i.axm = new Bn(i.axis, i.options), i.em = new Gn(i), i.am = new Fn(i), i.io = new Yn(i), i.em.setAnimationManager(i.am), n && i.em.triggerChange(n), i
			}
			yn(t = n, i = r), t.prototype = null === i ? Object.create(i) : (e.prototype = i.prototype, new e);
			var i = n.prototype;
			return i.connect = function(e, t) {
				var n = "string" == typeof e ? e.split(" ") : e.concat();
				return ~this._inputs.indexOf(t) && this.disconnect(t), "hammer" in t && ((e = this._inputs.filter(function(e) {
					return e.hammer && e.element === t.element
				})).length && (t.hammer = e[0].hammer)), t.mapAxes(n), t.connect(this.io), this._inputs.push(t), this
			}, i.disconnect = function(e) {
				return e ? 0 <= (e = this._inputs.indexOf(e)) && (this._inputs[e].disconnect(), this._inputs.splice(e, 1)) : (this._inputs.forEach(function(e) {
					return e.disconnect()
				}), this._inputs = []), this
			}, i.get = function(e) {
				return this.axm.get(e)
			}, i.setTo = function(e, t) {
				return this.am.setTo(e, t = void 0 === t ? 0 : t), this
			}, i.setBy = function(e, t) {
				return this.am.setBy(e, t = void 0 === t ? 0 : t), this
			}, i.isBounceArea = function(e) {
				return this.axm.isOutside(e)
			}, i.destroy = function() {
				this.disconnect(), this.em.destroy()
			}, n.VERSION = "2.8.0", n.TRANSFORM = Un, n.DIRECTION_NONE = 1, n.DIRECTION_LEFT = 2, n.DIRECTION_RIGHT = 4, n.DIRECTION_UP = 8, n.DIRECTION_DOWN = 16, n.DIRECTION_HORIZONTAL = 6, n.DIRECTION_VERTICAL = 24, n.DIRECTION_ALL = 30, n
		}(_n),
		Zn = "PointerEvent" in wn || "MSPointerEvent" in wn,
		Kn = "ontouchstart" in wn,
		Jn = "_EGJS_AXES_INPUTTYPE_";

	function Qn(i, e) {
		return e.reduce(function(e, t, n) {
			return i[n] && (e[i[n]] = t), e
		}, {})
	}

	function $n(e, t, n) {
		return n ? !!(30 === t || t & e && n & e) : !!(t & e)
	}
	var ei, ti = function() {
			function e(e, t) {
				if (this.axes = [], this.hammer = null, this.element = null, this.panRecognizer = null, this.isRightEdge = !1, this.rightEdgeTimer = 0, this.panFlag = !1, void 0 === Zt) throw new Error("The Hammerjs must be loaded before eg.Axes.PanInput.\nhttp://hammerjs.github.io/");
				this.element = function t(e, n) {
					var i;
					return void 0 === n && (n = !1), "string" == typeof e ? (i = e.match(/^<([a-z]+)\s*([^>]*)>/) ? ((i = document.createElement("div")).innerHTML = e, On(i.childNodes)) : On(document.querySelectorAll(e)), n || (i = 1 <= i.length ? i[0] : void 0)) : e === wn || e.nodeName && (1 === e.nodeType || 9 === e.nodeType) ? i = e : "jQuery" in wn && e instanceof jQuery || e.constructor.prototype.jquery ? i = n ? e.toArray() : e.get(0) : Array.isArray(e) && (i = e.map(function(e) {
						return t(e)
					}), n || (i = 1 <= i.length ? i[0] : void 0)), i
				}(e), this.options = bn({
					inputType: ["touch", "mouse", "pointer"],
					scale: [1, 1],
					thresholdAngle: 45,
					threshold: 0,
					iOSEdgeSwipeThreshold: 30,
					releaseOnScroll: !1,
					hammerManagerOptions: {
						cssProps: {
							userSelect: "none",
							touchSelect: "none",
							touchCallout: "none",
							userDrag: "none"
						}
					}
				}, t), this.onHammerInput = this.onHammerInput.bind(this), this.onPanmove = this.onPanmove.bind(this), this.onPanend = this.onPanend.bind(this)
			}
			var t = e.prototype;
			return t.mapAxes = function(e) {
				var t = !!e[0],
					n = !!e[1];
				this._direction = t && n ? 30 : t ? 6 : n ? 24 : 1, this.axes = e
			}, t.connect = function(e) {
				var t, n, i, r = {
					direction: this._direction,
					threshold: this.options.threshold
				};
				if (this.hammer) this.removeRecognizer(), this.dettachEvent();
				else {
					var o = (o = this.element[Jn]) || String(Math.round(Math.random() * (new Date).getTime())),
						a = (a = this.options.inputType, i = n = t = !1, (a = void 0 === a ? [] : a).forEach(function(e) {
							switch (e) {
								case "mouse":
									n = !0;
									break;
								case "touch":
									t = Kn;
									break;
								case "pointer":
									i = Zn
							}
						}), i ? Pt : t && n ? kt : t ? wt : n ? It : null);
					if (!a) throw new Error("Wrong inputType parameter!");
					this.hammer = function(e, t) {
						try {
							return new Zt(e, bn({}, t))
						} catch (e) {
							return null
						}
					}(this.element, bn({
						inputClass: a
					}, this.options.hammerManagerOptions)), this.element[Jn] = o
				}
				return this.panRecognizer = new Ft(r), this.hammer.add(this.panRecognizer), this.attachEvent(e), this
			}, t.disconnect = function() {
				return this.removeRecognizer(), this.hammer && this.dettachEvent(), this._direction = 1, this
			}, t.destroy = function() {
				this.disconnect(), this.hammer && 0 === this.hammer.recognizers.length && this.hammer.destroy(), delete this.element[Jn], this.element = null, this.hammer = null
			}, t.enable = function() {
				return this.hammer && (this.hammer.get("pan").options.enable = !0), this
			}, t.disable = function() {
				return this.hammer && (this.hammer.get("pan").options.enable = !1), this
			}, t.isEnable = function() {
				return !(!this.hammer || !this.hammer.get("pan").options.enable)
			}, t.removeRecognizer = function() {
				this.hammer && this.panRecognizer && (this.hammer.remove(this.panRecognizer), this.panRecognizer = null)
			}, t.onHammerInput = function(e) {
				var t;
				this.isEnable() && (e.isFirst ? (this.panFlag = !1) !== e.srcEvent.cancelable && (t = this.options.iOSEdgeSwipeThreshold, this.observer.hold(this, e), this.isRightEdge = Wn && e.center.x > window.innerWidth - t, this.panFlag = !0) : e.isFinal && this.onPanend(e))
			}, t.onPanmove = function(e) {
				var t = this;
				if (this.panFlag) {
					var n, i = this.options,
						r = i.iOSEdgeSwipeThreshold,
						o = i.releaseOnScroll,
						i = (n = e.angle, (i = this.options.thresholdAngle) < 0 || 90 < i ? 1 : (n = Math.abs(n), i < n && n < 180 - i ? 24 : 6)),
						a = this.hammer.session.prevInput;
					if (!o || e.srcEvent.cancelable) {
						if (a && Wn) {
							if (e.center.x < 0) return void this.onPanend(bn(bn({}, a), {
								velocityX: 0,
								velocityY: 0,
								offsetX: 0,
								offsetY: 0
							}));
							this.isRightEdge && (clearTimeout(this.rightEdgeTimer), e.deltaX < -r ? this.isRightEdge = !1 : this.rightEdgeTimer = window.setTimeout(function() {
								t.onPanend(bn(bn({}, a), {
									velocityX: 0,
									velocityY: 0,
									offsetX: 0,
									offsetY: 0
								}))
							}, 100))
						}
						a ? (e.offsetX = e.deltaX - a.deltaX, e.offsetY = e.deltaY - a.deltaY) : (e.offsetX = 0, e.offsetY = 0);
						o = this.getOffset([e.offsetX, e.offsetY], [$n(6, this._direction, i), $n(24, this._direction, i)]), r = o.some(function(e) {
							return 0 !== e
						});
						r && (!1 !== (i = e.srcEvent).cancelable && i.preventDefault(), i.stopPropagation()), (e.preventSystemEvent = r) && this.observer.change(this, e, Qn(this.axes, o))
					} else this.onPanend(bn(bn({}, e), {
						velocityX: 0,
						velocityY: 0,
						offsetX: 0,
						offsetY: 0
					}))
				}
			}, t.onPanend = function(e) {
				var t, n, i, r;
				this.panFlag && (clearTimeout(this.rightEdgeTimer), this.panFlag = !1, t = this.getOffset([Math.abs(e.velocityX) * (e.deltaX < 0 ? -1 : 1), Math.abs(e.velocityY) * (e.deltaY < 0 ? -1 : 1)], [$n(6, this._direction), $n(24, this._direction)]), n = t, i = this.observer.options.deceleration, r = Math.sqrt(n[0] * n[0] + n[1] * n[1]), i = Math.abs(r / -i), t = [n[0] / 2 * i, n[1] / 2 * i], this.observer.release(this, e, Qn(this.axes, t)))
			}, t.attachEvent = function(e) {
				this.observer = e, this.hammer.on("hammer.input", this.onHammerInput).on("panstart panmove", this.onPanmove)
			}, t.dettachEvent = function() {
				this.hammer.off("hammer.input", this.onHammerInput).off("panstart panmove", this.onPanmove), this.observer = null
			}, t.getOffset = function(e, t) {
				var n = [0, 0],
					i = this.options.scale;
				return t[0] && (n[0] = e[0] * i[0]), t[1] && (n[1] = e[1] * i[1]), n
			}, e
		}(),
		ni = qn,
		ii = {
			HOLD: "hold",
			CHANGE: "change",
			RELEASE: "release",
			ANIMATION_END: "animationEnd",
			FINISH: "finish"
		},
		ri = "flick";
	(ki = ei = ei || {})[ki.IDLE = 0] = "IDLE", ki[ki.HOLDING = 1] = "HOLDING", ki[ki.DRAGGING = 2] = "DRAGGING", ki[ki.ANIMATING = 3] = "ANIMATING", ki[ki.DISABLED = 4] = "DISABLED";
	gi = oi.prototype, Object.defineProperty(gi, "delta", {
		get: function() {
			return this._delta
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(gi, "targetPanel", {
		get: function() {
			return this._targetPanel
		},
		set: function(e) {
			this._targetPanel = e
		},
		enumerable: !1,
		configurable: !0
	}), gi.onEnter = function(e) {
		this._delta = e._delta, this._targetPanel = e._targetPanel
	}, gi.onHold = function(e) {}, gi.onChange = function(e) {}, gi.onRelease = function(e) {}, gi.onAnimationEnd = function(e) {}, gi.onFinish = function(e) {}, gi._moveToChangedPosition = function(e) {
		var t, n = e.flicking,
			i = e.axesEvent,
			r = e.transitTo,
			o = i.delta[ri];
		o && (this._delta += o, e = (t = n.camera).position, o = i.pos[ri], o = n.circularEnabled ? w(o, t.range.min, t.range.max) : o, t.lookAt(o), i = new M($.MOVE, {
			isTrusted: i.isTrusted,
			holding: this.holding,
			direction: E(0, i.delta[ri]),
			axesEvent: i
		}), n.trigger(i), i.isCanceled() && (t.lookAt(e), r(ei.DISABLED)))
	}, Ae = oi;

	function oi() {
		this._delta = 0, this._targetPanel = null
	}
	var ai = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.holding = !1, e.animating = !1, e
			}
			o(e, t);
			var n = e.prototype;
			return n.onEnter = function() {
				this._delta = 0, this._targetPanel = null
			}, n.onHold = function(e) {
				var t = e.flicking,
					n = e.axesEvent,
					e = e.transitTo;
				t.renderer.panelCount <= 0 ? e(ei.DISABLED) : (n = new M($.HOLD_START, {
					axesEvent: n
				}), t.trigger(n), n.isCanceled() ? e(ei.DISABLED) : e(ei.HOLDING))
			}, n.onChange = function(e) {
				var t = e.flicking,
					n = e.axesEvent,
					i = e.transitTo,
					r = t.control.controller.animatingContext,
					n = new M($.MOVE_START, {
						isTrusted: n.isTrusted,
						holding: this.holding,
						direction: E(r.start, r.end),
						axesEvent: n
					});
				t.trigger(n), n.isCanceled() ? i(ei.DISABLED) : i(ei.ANIMATING).onChange(e)
			}, e
		}(Ae),
		si = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.holding = !0, e.animating = !1, e._releaseEvent = null, e
			}
			o(e, t);
			var n = e.prototype;
			return n.onChange = function(e) {
				var t = e.flicking,
					n = e.axesEvent,
					i = e.transitTo,
					r = n.inputEvent,
					r = t.horizontal ? r.offsetX : r.offsetY,
					n = new M($.MOVE_START, {
						isTrusted: n.isTrusted,
						holding: this.holding,
						direction: E(0, -r),
						axesEvent: n
					});
				t.trigger(n), n.isCanceled() ? i(ei.DISABLED) : i(ei.DRAGGING).onChange(e)
			}, n.onRelease = function(e) {
				var t = e.flicking,
					n = e.axesEvent,
					e = e.transitTo;
				if (t.trigger(new M($.HOLD_END, {
						axesEvent: n
					})), 0 !== n.delta.flick) return n.setTo({
					flick: t.camera.position
				}, 0), void e(ei.IDLE);
				this._releaseEvent = n
			}, n.onFinish = function(e) {
				var t = e.flicking;
				if ((0, e.transitTo)(ei.IDLE), this._releaseEvent) {
					var n, i = this._releaseEvent.inputEvent.srcEvent;
					n = "touchend" === i.type ? (e = i.changedTouches[0], document.elementFromPoint(e.clientX, e.clientY)) : i.target;
					var r, o, i = t.renderer.panels,
						a = null;
					try {
						for (var s = c(i), u = s.next(); !u.done; u = s.next()) {
							var l = u.value;
							if (l.contains(n)) {
								a = l;
								break
							}
						}
					} catch (e) {
						o = {
							error: e
						}
					} finally {
						try {
							u && !u.done && (r = s.return) && r.call(s)
						} finally {
							if (o) throw o.error
						}
					}
					a && (r = t.camera.position, o = a.position, t.trigger(new M($.SELECT, {
						index: a.index,
						panel: a,
						direction: E(r, o)
					})))
				}
			}, e
		}(Ae),
		ui = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.holding = !0, e.animating = !0, e
			}
			o(e, t);
			var n = e.prototype;
			return n.onChange = function(e) {
				this._moveToChangedPosition(e)
			}, n.onRelease = function(e) {
				var t = e.flicking,
					n = e.axesEvent,
					i = e.transitTo;
				t.trigger(new M($.HOLD_END, {
					axesEvent: n
				})), t.renderer.panelCount <= 0 ? i(ei.IDLE) : (i(ei.ANIMATING), e = t.control, i = n.destPos[ri], t = Math.max(n.duration, t.duration), e.moveToPosition(i, t, n))
			}, e
		}(Ae),
		li = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.holding = !1, e.animating = !0, e
			}
			o(e, t);
			var n = e.prototype;
			return n.onHold = function(e) {
				var t = e.flicking,
					n = e.axesEvent,
					e = e.transitTo;
				this._delta = 0, t.control.updateInput();
				n = new M($.HOLD_START, {
					axesEvent: n
				});
				t.trigger(n), n.isCanceled() ? e(ei.DISABLED) : e(ei.DRAGGING)
			}, n.onChange = function(e) {
				this._moveToChangedPosition(e)
			}, n.onFinish = function(e) {
				var t = e.flicking,
					n = e.axesEvent,
					i = e.transitTo,
					r = t.control,
					e = r.controller.animatingContext;
				i(ei.IDLE), t.trigger(new M($.MOVE_END, {
					isTrusted: n.isTrusted,
					direction: E(e.start, e.end),
					axesEvent: n
				})), r.setActive(this._targetPanel, r.activePanel, n.isTrusted)
			}, e
		}(Ae),
		ci = function(t) {
			function e() {
				var e = null !== t && t.apply(this, arguments) || this;
				return e.holding = !1, e.animating = !0, e
			}
			o(e, t);
			var n = e.prototype;
			return n.onAnimationEnd = function(e) {
				(0, e.transitTo)(ei.IDLE)
			}, n.onChange = function(e) {
				var t = e.axesEvent,
					e = e.transitTo;
				t.stop(), e(ei.IDLE)
			}, n.onRelease = function(e) {
				var t = e.axesEvent,
					e = e.transitTo;
				0 === t.delta.flick && e(ei.IDLE)
			}, e
		}(Ae),
		hi = (_n = fi.prototype, Object.defineProperty(_n, "state", {
			get: function() {
				return this._state
			},
			enumerable: !1,
			configurable: !0
		}), _n.fire = function(e, t) {
			var n = this._state,
				i = r(r({}, t), {
					transitTo: this.transitTo
				});
			switch (e) {
				case ii.HOLD:
					n.onHold(i);
					break;
				case ii.CHANGE:
					n.onChange(i);
					break;
				case ii.RELEASE:
					n.onRelease(i);
					break;
				case ii.ANIMATION_END:
					n.onAnimationEnd(i);
					break;
				case ii.FINISH:
					n.onFinish(i)
			}
		}, fi);

	function fi() {
		var n = this;
		this.transitTo = function(e) {
			var t;
			switch (e) {
				case ei.IDLE:
					t = new ai;
					break;
				case ei.HOLDING:
					t = new si;
					break;
				case ei.DRAGGING:
					t = new ui;
					break;
				case ei.ANIMATING:
					t = new li;
					break;
				case ei.DISABLED:
					t = new ci
			}
			return t.onEnter(n._state), n._state = t, n._state
		}, this._state = new ai
	}
	var di = (qn = pi.prototype, Object.defineProperty(qn, "axes", {
		get: function() {
			return this._axes
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(qn, "stateMachine", {
		get: function() {
			return this._stateMachine
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(qn, "state", {
		get: function() {
			return this._stateMachine.state
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(qn, "animatingContext", {
		get: function() {
			return this._animatingContext
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(qn, "controlParams", {
		get: function() {
			var e = this._axes;
			if (!e) return {
				range: {
					min: 0,
					max: 0
				},
				position: 0,
				circular: !1
			};
			e = e.axis[ri];
			return {
				range: {
					min: e.range[0],
					max: e.range[1]
				},
				circular: e.circular[0],
				position: this.position
			}
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(qn, "enabled", {
		get: function() {
			var e;
			return null !== (e = null === (e = this._panInput) || void 0 === e ? void 0 : e.isEnable()) && void 0 !== e && e
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(qn, "position", {
		get: function() {
			var e;
			return null !== (e = null === (e = this._axes) || void 0 === e ? void 0 : e.get([ri])[ri]) && void 0 !== e ? e : 0
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(qn, "range", {
		get: function() {
			var e;
			return null !== (e = null === (e = this._axes) || void 0 === e ? void 0 : e.axis[ri].range) && void 0 !== e ? e : [0, 0]
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(qn, "bounce", {
		get: function() {
			var e;
			return null === (e = this._axes) || void 0 === e ? void 0 : e.axis[ri].bounce
		},
		enumerable: !1,
		configurable: !0
	}), qn.init = function(n) {
		var e, i = this;
		this._flicking = n, this._axes = new ni(((e = {})[ri] = {
			range: [0, 0],
			circular: !1,
			bounce: [0, 0]
		}, e), {
			deceleration: n.deceleration,
			interruptable: n.interruptable,
			easing: n.easing
		}), this._panInput = new ti(n.viewport.element, {
			inputType: n.inputType,
			iOSEdgeSwipeThreshold: n.iOSEdgeSwipeThreshold,
			scale: n.horizontal ? [-1, 0] : [0, -1],
			releaseOnScroll: !0
		});
		var r = this._axes;
		r.connect(n.horizontal ? [ri, ""] : ["", ri], this._panInput);
		for (var t in ii) ! function(e) {
			var t = ii[e];
			r.on(t, function(e) {
				i._stateMachine.fire(t, {
					flicking: n,
					axesEvent: e
				})
			})
		}(t);
		return this
	}, qn.destroy = function() {
		var e;
		this._axes && (this.removePreventClickHandler(), this._axes.destroy()), null !== (e = this._panInput) && void 0 !== e && e.destroy(), this._resetInternalValues()
	}, qn.enable = function() {
		var e;
		return null !== (e = this._panInput) && void 0 !== e && e.enable(), this
	}, qn.disable = function() {
		var e;
		return null !== (e = this._panInput) && void 0 !== e && e.disable(), this
	}, qn.update = function(e) {
		var t = y(this._flicking),
			n = t.camera,
			i = this._axes,
			r = i.axis[ri];
		return r.circular = [e.circular, e.circular], r.range = [e.range.min, e.range.max], r.bounce = l(t.bounce, n.size), i.axm.set(((i = {})[ri] = e.position, i)), this
	}, qn.addPreventClickHandler = function() {
		var e = y(this._flicking),
			t = this._axes,
			e = e.camera.element;
		return t.on(ii.HOLD, this._onAxesHold), t.on(ii.CHANGE, this._onAxesChange), e.addEventListener("click", this._preventClickWhenDragged, !0), this
	}, qn.removePreventClickHandler = function() {
		var e = y(this._flicking),
			t = this._axes,
			e = e.camera.element;
		return t.off(ii.HOLD, this._onAxesHold), t.off(ii.CHANGE, this._onAxesChange), e.removeEventListener("click", this._preventClickWhenDragged, !0), this
	}, qn.animateTo = function(t, n, i) {
		var r = this,
			o = this._axes,
			e = this._stateMachine.state;
		if (!o) return Promise.reject(new ue(X, H.NOT_ATTACHED_TO_FLICKING));
		var a = o.get([ri])[ri];
		if (a === t) return (u = y(this._flicking)).camera.lookAt(t), e.targetPanel && u.control.setActive(e.targetPanel, u.control.activePanel, null !== (e = null == i ? void 0 : i.isTrusted) && void 0 !== e && e), Promise.resolve();
		this._animatingContext = {
			start: a,
			end: t,
			offset: 0
		};

		function s() {
			var e;
			o.once(ii.FINISH, function() {
				r._animatingContext = {
					start: 0,
					end: 0,
					offset: 0
				}
			}), i ? i.setTo(((e = {})[ri] = t, e), n) : o.setTo(((e = {})[ri] = t, e), n)
		}
		if (0 !== n) return new Promise(function(e, t) {
			function n() {
				o.off(ii.FINISH, i), t(new ue(Z, H.ANIMATION_INTERRUPTED))
			}
			var i = function() {
				o.off(ii.HOLD, n), e()
			};
			o.once(ii.FINISH, i), o.once(ii.HOLD, n), s()
		});
		var a = (u = y(this._flicking)).camera;
		s();
		var u = u.circularEnabled ? w(t, a.range.min, a.range.max) : t;
		return o.axm.set(((a = {})[ri] = u, a)), Promise.resolve()
	}, qn._resetInternalValues = function() {
		this._flicking = null, this._axes = null, this._panInput = null, this._animatingContext = {
			start: 0,
			end: 0,
			offset: 0
		}, this._dragged = !1
	}, pi);

	function pi() {
		var t = this;
		this._onAxesHold = function() {
			t._dragged = !1
		}, this._onAxesChange = function() {
			t._dragged = !0
		}, this._preventClickWhenDragged = function(e) {
			t._dragged && (e.preventDefault(), e.stopPropagation()), t._dragged = !1
		}, this._resetInternalValues(), this._stateMachine = new hi
	}
	var gi = (ki = vi.prototype, Object.defineProperty(ki, "controller", {
		get: function() {
			return this._controller
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(ki, "activeIndex", {
		get: function() {
			var e;
			return null !== (e = null === (e = this._activePanel) || void 0 === e ? void 0 : e.index) && void 0 !== e ? e : -1
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(ki, "activePanel", {
		get: function() {
			return this._activePanel
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(ki, "animating", {
		get: function() {
			return this._controller.state.animating
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(ki, "holding", {
		get: function() {
			return this._controller.state.holding
		},
		enumerable: !1,
		configurable: !0
	}), ki.init = function(e) {
		return this._flicking = e, this._controller.init(e), this
	}, ki.destroy = function() {
		this._controller.destroy(), this._flicking = null, this._activePanel = null
	}, ki.enable = function() {
		return this._controller.enable(), this
	}, ki.disable = function() {
		return this._controller.disable(), this
	}, ki.updatePosition = function(e) {
		var t = y(this._flicking).camera,
			n = this._activePanel;
		n && t.lookAt(t.clampToReachablePosition(n.position))
	}, ki.updateInput = function() {
		var e = y(this._flicking).camera;
		return this._controller.update(e.controlParams), this
	}, ki.resetActive = function() {
		return this._activePanel = null, this
	}, ki.moveToPanel = function(a, e) {
		var s = e.duration,
			t = e.direction,
			u = void 0 === t ? te.NONE : t,
			l = e.axesEvent;
		return h(this, void 0, void 0, function() {
			var t, n, i, r, o;
			return m(this, function(e) {
				return t = y(this._flicking), o = t.camera, n = a.position, i = o.findNearestAnchor(n), a.removed || !i ? [2, Promise.reject(new ue(W(a.position), H.POSITION_NOT_REACHABLE))] : (o.canReach(a) ? t.circularEnabled && (r = this._controller.position, o = o.rangeDiff, n = [n, n + o, n - o].filter(function(e) {
					return u === te.NONE || (u === te.PREV ? e <= r : r <= e)
				}).reduce(function(e, t) {
					return Math.abs(r - t) < Math.abs(r - e) ? t : e
				}, 1 / 0)) : (n = i.position, a = i.panel), this._triggerIndexChangeEvent(a, a.position, l), [2, this._animateToPosition({
					position: n,
					duration: s,
					newActivePanel: a,
					axesEvent: l
				})])
			})
		})
	}, ki.setActive = function(e, t, n) {
		var i, r = y(this._flicking);
		this._activePanel = e, r.camera.updateAdaptiveHeight(), e !== t ? r.trigger(new M($.CHANGED, {
			index: e.index,
			panel: e,
			prevIndex: null !== (i = null == t ? void 0 : t.index) && void 0 !== i ? i : -1,
			prevPanel: t,
			isTrusted: n,
			direction: t ? E(t.position, e.position) : te.NONE
		})) : r.trigger(new M($.RESTORED, {
			isTrusted: n
		}))
	}, ki._triggerIndexChangeEvent = function(e, t, n) {
		var i = y(this._flicking),
			r = e !== this._activePanel ? $.WILL_CHANGE : $.WILL_RESTORE,
			o = i.camera,
			a = this._activePanel,
			t = new M(r, {
				index: e.index,
				panel: e,
				isTrusted: (null == n ? void 0 : n.isTrusted) || !1,
				direction: E(null !== (a = null == a ? void 0 : a.position) && void 0 !== a ? a : o.position, t)
			});
		if (i.trigger(t), t.isCanceled()) throw new ue(q, H.STOP_CALLED_BY_USER)
	}, ki._animateToPosition = function(e) {
		var r = e.position,
			o = e.duration,
			a = e.newActivePanel,
			s = e.axesEvent;
		return h(this, void 0, void 0, function() {
			var t, n, i = this;
			return m(this, function(e) {
				return t = y(this._flicking), n = function() {
					return i._controller.animateTo(r, o, s)
				}, this._controller.state.targetPanel = a, o <= 0 ? [2, n()] : [2, n().then(function() {
					return h(i, void 0, void 0, function() {
						return m(this, function(e) {
							switch (e.label) {
								case 0:
									return [4, t.renderer.render()];
								case 1:
									return e.sent(), [2]
							}
						})
					})
				}).catch(function(e) {
					if (!(s && e instanceof ue && e.code === H.ANIMATION_INTERRUPTED)) throw e
				})]
			})
		})
	}, vi);

	function vi() {
		this._flicking = null, this._controller = new di, this._activePanel = null
	}
	var mi = (_n = _i.prototype, Object.defineProperty(_n, "index", {
		get: function() {
			return this._index
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(_n, "position", {
		get: function() {
			return this._pos
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(_n, "panel", {
		get: function() {
			return this._panel
		},
		enumerable: !1,
		configurable: !0
	}), _i);

	function _i(e) {
		var t = e.index,
			n = e.position,
			e = e.panel;
		this._index = t, this._pos = n, this._panel = e
	}
	var yi = function(n) {
			function e(e) {
				var t = (void 0 === e ? {} : e).count,
					e = void 0 === t ? 1 / 0 : t,
					t = n.call(this) || this;
				return t._count = e, t
			}
			o(e, n);
			var t = e.prototype;
			return Object.defineProperty(t, "count", {
				get: function() {
					return this._count
				},
				set: function(e) {
					this._count = e
				},
				enumerable: !1,
				configurable: !0
			}), t.moveToPosition = function(u, l, c) {
				return h(this, void 0, void 0, function() {
					var t, n, i, r, o, a, s;
					return m(this, function(e) {
						return t = y(this._flicking), n = t.camera, o = n.findActiveAnchor(), s = n.findNearestAnchor(n.position), a = t.control.controller.state, o && s ? (i = this._calcSnapThreshold(u, o), r = t.animating ? a.delta : u - n.position, o = Math.abs(r), a = c && 0 !== c.delta[ri] ? Math.abs(c.delta[ri]) : o, s = i <= a && 0 < a ? this._findSnappedAnchor(u, s) : o >= t.threshold && 0 < o ? this._findAdjacentAnchor(r, s) : s, this._triggerIndexChangeEvent(s.panel, u, c), [2, this._animateToPosition({
							position: n.clampToReachablePosition(s.position),
							duration: l,
							newActivePanel: s.panel,
							axesEvent: c
						})]) : [2, Promise.reject(new ue(W(u), H.POSITION_NOT_REACHABLE))]
					})
				})
			}, t._findSnappedAnchor = function(e, t) {
				var n = y(this._flicking),
					i = n.camera,
					r = this._count,
					o = i.position,
					a = i.clampToReachablePosition(e),
					s = i.findAnchorIncludePosition(a);
				if (!t || !s) throw new ue(W(e), H.POSITION_NOT_REACHABLE);
				if (!isFinite(r)) return s;
				var u = n.panelCount,
					l = i.anchorPoints,
					c = Math.sign(e - o) * Math.floor(Math.abs(e - o) / i.rangeDiff);
				o < e && s.index < t.index || s.position > t.position && s.index === t.index ? c += 1 : (e < o && s.index > t.index || s.position < t.position && s.index === t.index) && --c;
				a = s.index + c * u;
				if (Math.abs(a - t.index) <= r) {
					s = l[s.index];
					return new mi({
						index: s.index,
						position: s.position + c * i.rangeDiff,
						panel: s.panel
					})
				}
				if (n.circularEnabled) {
					n = l[N(t.index + Math.sign(e - o) * r, u)], u = Math.floor(r / u);
					return o < e && n.index < t.index ? u += 1 : e < o && n.index > t.index && --u, new mi({
						index: n.index,
						position: n.position + u * i.rangeDiff,
						panel: n.panel
					})
				}
				return l[_(t.index + Math.sign(e - o) * r, 0, l.length - 1)]
			}, t._findAdjacentAnchor = function(e, t) {
				var n = y(this._flicking).camera;
				return null !== (n = 0 < e ? n.getNextAnchor(t) : n.getPrevAnchor(t)) && void 0 !== n ? n : t
			}, t._calcSnapThreshold = function(e, t) {
				var n = e > t.position,
					i = t.panel,
					e = i.size,
					t = i.alignPosition;
				return n ? e - t + i.margin.next : t + i.margin.prev
			}, e
		}(gi),
		bi = function(n) {
			function e(e) {
				var t = (void 0 === e ? {} : e).stopAtEdge,
					e = void 0 === t || t,
					t = n.call(this) || this;
				return t._stopAtEdge = e, t
			}
			o(e, n);
			var t = e.prototype;
			return Object.defineProperty(t, "stopAtEdge", {
				get: function() {
					return this._stopAtEdge
				},
				set: function(e) {
					this._stopAtEdge = e
				},
				enumerable: !1,
				configurable: !0
			}), t.updatePosition = function(e) {
				var t = y(this._flicking).camera,
					n = this._activePanel;
				n && (e = (n = n.range).min + (n.max - n.min) * e, t.lookAt(t.clampToReachablePosition(e)))
			}, t.moveToPosition = function(i, r, o) {
				return h(this, void 0, void 0, function() {
					var t, n;
					return m(this, function(e) {
						return t = y(this._flicking), n = t.camera, t = n.clampToReachablePosition(i), (n = n.findAnchorIncludePosition(t)) ? ((n = n.panel) !== this._activePanel && this._triggerIndexChangeEvent(n, i, o), [2, this._animateToPosition({
							position: this._stopAtEdge ? t : i,
							duration: r,
							newActivePanel: n,
							axesEvent: o
						})]) : [2, Promise.reject(new ue(W(i), H.POSITION_NOT_REACHABLE))]
					})
				})
			}, e
		}(gi),
		Ei = function(r) {
			function e(e) {
				var e = (void 0 === e ? {} : e).count,
					e = void 0 === e ? 1 : e,
					i = r.call(this) || this;
				return i.setActive = function(e, t, n) {
					r.prototype.setActive.call(i, e, t, n), i.updateInput()
				}, i._count = e, i._resetIndexRange(), i
			}
			o(e, r);
			var t = e.prototype;
			return Object.defineProperty(t, "count", {
				get: function() {
					return this._count
				},
				set: function(e) {
					this._count = e
				},
				enumerable: !1,
				configurable: !0
			}), t.destroy = function() {
				r.prototype.destroy.call(this), this._resetIndexRange()
			}, t.updateInput = function() {
				var e = y(this._flicking),
					t = e.camera,
					n = e.renderer,
					i = this._controller,
					r = t.controlParams,
					o = this._count,
					a = i.state.animating ? null === (c = t.findNearestAnchor(t.position)) || void 0 === c ? void 0 : c.panel : this._activePanel;
				if (!a) return i.update(r), this._resetIndexRange(), this;
				var s = r.range,
					u = a.position,
					l = a.index,
					c = n.panelCount,
					a = l - o,
					o = l + o;
				a < 0 && (a = e.circularEnabled ? x((a + 1) % c - 1, c) : _(a, 0, c - 1)), c <= o && (o = e.circularEnabled ? o % c : _(o, 0, c - 1));
				a = n.panels[a], n = n.panels[o], o = Math.max(a.position, s.min), s = Math.min(n.position, s.max);
				return u < o && (o -= t.rangeDiff), s < u && (s += t.rangeDiff), r.range = {
					min: o,
					max: s
				}, r.circular && (r.position < o && (r.position += t.rangeDiff), r.position > s && (r.position -= t.rangeDiff)), r.circular = !1, i.update(r), this._indexRange = {
					min: a.index,
					max: n.index
				}, this
			}, t.moveToPosition = function(p, g, v) {
				return h(this, void 0, void 0, function() {
					var t, n, i, r, o, a, s, u, l, c, h, f, d;
					return m(this, function(e) {
						return c = y(this._flicking), t = c.camera, n = this._activePanel, f = this._controller.range, i = this._indexRange, r = t.range, l = _(t.clampToReachablePosition(p), f[0], f[1]), (o = t.findAnchorIncludePosition(l)) && n ? (h = n.position, a = Math.abs(p - h) >= c.threshold, s = h < p ? t.getNextAnchor(o) : t.getPrevAnchor(o), f = t.anchorPoints, l = f[0], c = f[f.length - 1], h = p <= r.min && k(l.panel.index, i.min, i.max), f = p >= r.max && k(c.panel.index, i.min, i.max), h || f ? (d = p < r.min ? l : c, u = d.panel, d = d.position) : a && o.position !== n.position ? (u = o.panel, d = o.position) : a && s && k(s.index, i.min, i.max) ? (u = s.panel, d = s.position) : (d = t.clampToReachablePosition(n.position), u = n), this._triggerIndexChangeEvent(u, p, v), [2, this._animateToPosition({
							position: d,
							duration: g,
							newActivePanel: u,
							axesEvent: v
						})]) : [2, Promise.reject(new ue(W(p), H.POSITION_NOT_REACHABLE))]
					})
				})
			}, t._resetIndexRange = function() {
				this._indexRange = {
					min: 0,
					max: 0
				}
			}, e
		}(gi),
		qn = {
			__proto__: null,
			Control: gi,
			SnapControl: yi,
			FreeControl: bi,
			StrictControl: Ei,
			AxesController: di,
			State: Ae,
			IdleState: ai,
			HoldingState: si,
			DraggingState: ui,
			AnimatingState: li,
			DisabledState: ci,
			StateMachine: hi
		},
		_n = (ki = Pi.prototype, Object.defineProperty(ki, "element", {
			get: function() {
				return this._el
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(ki, "children", {
			get: function() {
				return s(this._el.children)
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(ki, "position", {
			get: function() {
				return this._position
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(ki, "alignPosition", {
			get: function() {
				return this._alignPos
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(ki, "offset", {
			get: function() {
				return this._offset
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(ki, "range", {
			get: function() {
				return this._range
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(ki, "rangeDiff", {
			get: function() {
				return this._range.max - this._range.min
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(ki, "visiblePanels", {
			get: function() {
				return this._visiblePanels
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(ki, "visibleRange", {
			get: function() {
				return {
					min: this._position - this._alignPos,
					max: this._position - this._alignPos + this.size
				}
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(ki, "anchorPoints", {
			get: function() {
				return this._anchors
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(ki, "controlParams", {
			get: function() {
				return {
					range: this._range,
					position: this._position,
					circular: !1
				}
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(ki, "atEdge", {
			get: function() {
				return this._position <= this._range.min || this._position >= this._range.max
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(ki, "size", {
			get: function() {
				var e = this._flicking;
				return e ? e.horizontal ? e.viewport.width : e.viewport.height : 0
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(ki, "progress", {
			get: function() {
				var e = this._flicking,
					t = this._position + this._offset,
					n = this.findNearestAnchor(this._position);
				if (!e || !n) return NaN;
				var i = n.panel,
					r = i.position + i.offset,
					o = e.control.controller.bounce,
					a = this.range,
					n = a.min,
					e = a.max,
					a = this.rangeDiff;
				if (t === r) return i.index;
				if (t < r) {
					var s = i.prev(),
						s = s ? s.position + s.offset : n - o[0];
					return r < s && (s -= a), i.index - 1 + I(t, s, r)
				}
				s = i.next(), o = s ? s.position + s.offset : e + o[1];
				return o < r && (o += a), i.index + I(t, r, o)
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(ki, "align", {
			get: function() {
				return this._align
			},
			set: function(e) {
				this._align = e
			},
			enumerable: !1,
			configurable: !0
		}), ki.init = function(e) {
			e = (this._flicking = e).viewport.element;
			return t(e.firstElementChild, "First element child of the viewport element"), this._el = e.firstElementChild, this._checkTranslateSupport(), this
		}, ki.destroy = function() {
			return this._flicking = null, this._resetInternalValues(), this
		}, ki.lookAt = function(e) {
			var t = this._position;
			this._position = e, this._refreshVisiblePanels(), this._checkNeedPanel(), this._checkReachEnd(t, e), this.applyTransform()
		}, ki.getPrevAnchor = function(e) {
			return this._anchors[e.index - 1] || null
		}, ki.getNextAnchor = function(e) {
			return this._anchors[e.index + 1] || null
		}, ki.getProgressInPanel = function(e) {
			e = e.range;
			return (this._position - e.min) / (e.max - e.min)
		}, ki.findAnchorIncludePosition = function(n) {
			return this._anchors.filter(function(e) {
				return e.panel.includePosition(n, !0)
			}).reduce(function(e, t) {
				return e && Math.abs(e.position - n) < Math.abs(t.position - n) ? e : t
			}, null)
		}, ki.findNearestAnchor = function(e) {
			var t = this._anchors;
			if (t.length <= 0) return null;
			for (var n = 1 / 0, i = 0; i < t.length; i++) {
				var r = t[i],
					r = Math.abs(r.position - e);
				if (n < r) return t[i - 1];
				n = r
			}
			return t[t.length - 1]
		}, ki.findActiveAnchor = function() {
			var t = y(this._flicking).control.activeIndex;
			return n(this._anchors, function(e) {
				return e.panel.index === t
			})
		}, ki.clampToReachablePosition = function(e) {
			var t = this._range;
			return _(e, t.min, t.max)
		}, ki.canReach = function(e) {
			var t = this._range;
			if (e.removed) return !1;
			e = e.position;
			return e >= t.min && e <= t.max
		}, ki.canSee = function(e) {
			var t = this.visibleRange;
			return e.isVisibleOnRange(t.min, t.max)
		}, ki.updateAlignPos = function() {
			var e = this._align,
				e = "object" == typeof e ? e.camera : e;
			return this._alignPos = u(e, this.size), this
		}, ki.updateAnchors = function() {
			var e = y(this._flicking).renderer.panels;
			return this._anchors = e.map(function(e, t) {
				return new mi({
					index: t,
					position: e.position,
					panel: e
				})
			}), this
		}, ki.updateAdaptiveHeight = function() {
			var e = y(this._flicking),
				t = e.control.activePanel;
			e.horizontal && e.adaptive && t && e.viewport.setSize({
				height: t.height
			})
		}, ki.updateOffset = function() {
			var e = y(this._flicking),
				t = this._position,
				e = e.panels.filter(function(e) {
					return !e.rendered
				});
			return this._offset = e.filter(function(e) {
				return e.position + e.offset < t
			}).reduce(function(e, t) {
				return e + t.sizeIncludingMargin
			}, 0), this.applyTransform(), this
		}, ki.resetNeedPanelHistory = function() {
			return this._needPanelTriggered = {
				prev: !1,
				next: !1
			}, this
		}, ki.applyTransform = function() {
			var e = this._el,
				t = y(this._flicking),
				n = this._position - this._alignPos - this._offset;
			return e.style[this._transform] = t.horizontal ? "translate(" + -n + "px)" : "translate(0, " + -n + "px)", this
		}, ki._resetInternalValues = function() {
			this._position = 0, this._alignPos = 0, this._offset = 0, this._range = {
				min: 0,
				max: 0
			}, this._visiblePanels = [], this._anchors = [], this._needPanelTriggered = {
				prev: !1,
				next: !1
			}
		}, ki._refreshVisiblePanels = function() {
			var t = this,
				e = y(this._flicking),
				n = e.renderer.panels.filter(function(e) {
					return t.canSee(e)
				}),
				i = this._visiblePanels,
				r = (this._visiblePanels = n).filter(function(e) {
					return !T(i, e)
				}),
				o = i.filter(function(e) {
					return !T(n, e)
				});
			(0 < r.length || 0 < o.length) && e.renderer.render().then(function() {
				e.trigger(new M($.VISIBLE_CHANGE, {
					added: r,
					removed: o,
					visiblePanels: n
				}))
			})
		}, ki._checkNeedPanel = function() {
			var e = this._needPanelTriggered;
			if (!e.prev || !e.next) {
				var t = y(this._flicking),
					n = t.renderer.panels;
				if (n.length <= 0) return e.prev || (t.trigger(new M($.NEED_PANEL, {
					direction: te.PREV
				})), e.prev = !0), void(e.next || (t.trigger(new M($.NEED_PANEL, {
					direction: te.NEXT
				})), e.next = !0));
				var i = this._position,
					r = this.size,
					o = this._range,
					a = t.needPanelThreshold,
					s = i - this._alignPos,
					u = s + r,
					r = n[0],
					n = n[n.length - 1];
				e.prev || (s <= r.range.min + a || i <= o.min + a) && (t.trigger(new M($.NEED_PANEL, {
					direction: te.PREV
				})), e.prev = !0), e.next || (n.range.max - a <= u || i >= o.max - a) && (t.trigger(new M($.NEED_PANEL, {
					direction: te.NEXT
				})), e.next = !0)
			}
		}, ki._checkReachEnd = function(e, t) {
			var n = y(this._flicking),
				i = this._range,
				r = e > i.min && e < i.max,
				e = t > i.min && t < i.max;
			r && !e && (i = t <= i.min ? te.PREV : te.NEXT, n.trigger(new M($.REACH_EDGE, {
				direction: i
			})))
		}, Pi);

	function Pi(e) {
		var s = this,
			e = (void 0 === e ? {} : e).align,
			e = void 0 === e ? ee.CENTER : e;
		this._checkTranslateSupport = function() {
			var t, e, n = document.documentElement.style,
				i = "";
			try {
				for (var r = c(["webkitTransform", "msTransform", "MozTransform", "OTransform", "transform"]), o = r.next(); !o.done; o = r.next()) {
					var a = o.value;
					a in n && (i = a)
				}
			} catch (e) {
				t = {
					error: e
				}
			} finally {
				try {
					o && !o.done && (e = r.return) && e.call(r)
				} finally {
					if (t) throw t.error
				}
			}
			if (!i) throw new ue(U, H.TRANSFORM_NOT_SUPPORTED);
			s._transform = i
		}, this._flicking = null, this._resetInternalValues(), this._align = e
	}
	var xi, Ti = (o(Oi, xi = _n), Oi.prototype.updateRange = function() {
		var e = y(this._flicking).renderer,
			t = e.getPanel(0),
			e = e.getPanel(e.panelCount - 1);
		return this._range = {
			min: null !== (t = null == t ? void 0 : t.position) && void 0 !== t ? t : 0,
			max: null !== (e = null == e ? void 0 : e.position) && void 0 !== e ? e : 0
		}, this
	}, Oi);

	function Oi() {
		return null !== xi && xi.apply(this, arguments) || this
	}
	var wi = function(s) {
			function e() {
				var e = null !== s && s.apply(this, arguments) || this;
				return e._circularOffset = 0, e._circularEnabled = !1, e
			}
			o(e, s);
			var t = e.prototype;
			return Object.defineProperty(t, "offset", {
				get: function() {
					return this._offset - this._circularOffset
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "controlParams", {
				get: function() {
					return {
						range: this._range,
						position: this._position,
						circular: this._circularEnabled
					}
				},
				enumerable: !1,
				configurable: !0
			}), t.getPrevAnchor = function(e) {
				if (!this._circularEnabled || 0 !== e.index) return s.prototype.getPrevAnchor.call(this, e);
				var t = this._anchors,
					e = this.rangeDiff,
					t = t[t.length - 1];
				return new mi({
					index: t.index,
					position: t.position - e,
					panel: t.panel
				})
			}, t.getNextAnchor = function(e) {
				var t = this._anchors;
				if (!this._circularEnabled || e.index !== t.length - 1) return s.prototype.getNextAnchor.call(this, e);
				e = this.rangeDiff, t = t[0];
				return new mi({
					index: t.index,
					position: t.position + e,
					panel: t.panel
				})
			}, t.findAnchorIncludePosition = function(n) {
				if (!this._circularEnabled) return s.prototype.findAnchorIncludePosition.call(this, n);
				var e = this._range,
					t = this._anchors,
					i = this.rangeDiff,
					r = t.length,
					o = w(n, e.min, e.max),
					o = s.prototype.findAnchorIncludePosition.call(this, o);
				if (!(o = 0 < r && (n === e.min || n === e.max) ? [o, new mi({
						index: 0,
						position: t[0].position + i,
						panel: t[0].panel
					}), new mi({
						index: r - 1,
						position: t[r - 1].position - i,
						panel: t[r - 1].panel
					})].filter(function(e) {
						return !!e
					}).reduce(function(e, t) {
						return e && Math.abs(e.position - n) < Math.abs(t.position - n) ? e : t
					}, null) : o)) return null;
				if (n < e.min) {
					var a = -Math.floor((e.min - n) / i) - 1;
					return new mi({
						index: o.index,
						position: o.position + i * a,
						panel: o.panel
					})
				}
				if (n > e.max) {
					a = Math.floor((n - e.max) / i) + 1;
					return new mi({
						index: o.index,
						position: o.position + i * a,
						panel: o.panel
					})
				}
				return o
			}, t.clampToReachablePosition = function(e) {
				return this._circularEnabled ? e : s.prototype.clampToReachablePosition.call(this, e)
			}, t.canReach = function(e) {
				return !e.removed && (!!this._circularEnabled || s.prototype.canReach.call(this, e))
			}, t.canSee = function(e) {
				var t = this._range,
					n = this.rangeDiff,
					i = this.visibleRange,
					r = s.prototype.canSee.call(this, e);
				return this._circularEnabled ? i.min < t.min ? r || e.isVisibleOnRange(i.min + n, i.max + n) : i.max > t.max ? r || e.isVisibleOnRange(i.min - n, i.max - n) : r : r
			}, t.updateRange = function() {
				var e = y(this._flicking).renderer.panels;
				if (e.length <= 0) return this._resetInternalValues(), this;
				var t = e[0],
					n = e[e.length - 1],
					i = t.range.min - t.margin.prev,
					r = n.range.max + n.margin.next,
					o = this.size,
					a = r - i,
					s = e.every(function(e) {
						return a - e.size >= o
					});
				return (this._circularEnabled = s) ? (this._range = {
					min: i,
					max: r
				}, e.forEach(function(e) {
					return e.updateCircularToggleDirection()
				})) : this._range = {
					min: t.position,
					max: n.position
				}, this.updateOffset(), this
			}, t.updateOffset = function() {
				return this._updateCircularOffset(), s.prototype.updateOffset.call(this)
			}, t.lookAt = function(t) {
				var e = this,
					n = y(this._flicking),
					i = this._position;
				if (t === i) return s.prototype.lookAt.call(this, t);
				var r = n.renderer.panels.map(function(e) {
					return e.toggle(i, t)
				});
				this._position = t, s.prototype.lookAt.call(this, t), r.some(function(e) {
					return e
				}) && n.renderer.render().then(function() {
					e.updateOffset()
				})
			}, t.applyTransform = function() {
				var e = this._el,
					t = y(this._flicking),
					n = this._position - this._alignPos - this._offset + this._circularOffset;
				return e.style[this._transform] = t.horizontal ? "translate(" + -n + "px)" : "translate(0, " + -n + "px)", this
			}, t._resetInternalValues = function() {
				s.prototype._resetInternalValues.call(this), this._circularOffset = 0, this._circularEnabled = !1
			}, t._calcPanelAreaSum = function(e) {
				return e.reduce(function(e, t) {
					return e + t.sizeIncludingMargin
				}, 0)
			}, t._updateCircularOffset = function() {
				var e, t;
				this._circularEnabled ? (e = (t = y(this._flicking).panels.filter(function(e) {
					return e.toggled
				})).filter(function(e) {
					return e.toggleDirection === te.PREV
				}), t = t.filter(function(e) {
					return e.toggleDirection === te.NEXT
				}), this._circularOffset = this._calcPanelAreaSum(e) - this._calcPanelAreaSum(t)) : this._circularOffset = 0
			}, e
		}(_n),
		Ri = function(i) {
			function e() {
				return null !== i && i.apply(this, arguments) || this
			}
			o(e, i);
			var t = e.prototype;
			return t.updateRange = function() {
				var e = y(this._flicking).renderer,
					t = this._alignPos,
					n = e.getPanel(0),
					i = e.getPanel(e.panelCount - 1);
				if (!n || !i) return this._range = {
					min: 0,
					max: 0
				}, this;
				var r = this.size,
					e = n.range.min,
					n = i.range.max,
					i = e + t,
					t = n - r + t;
				return r < n - e ? this._range = {
					min: i,
					max: t
				} : (e = "object" == typeof(e = this._align) ? e.camera : e, i = i + u(e, t - i), this._range = {
					min: i,
					max: i
				}), this
			}, t.updateAnchors = function() {
				var t = this,
					e = y(this._flicking).renderer.panels;
				if (e.length <= 0) return this._anchors = [], this;
				var n, i, r, o, a = this._range,
					s = e.filter(function(e) {
						return t.canReach(e)
					});
				return 0 < s.length ? (n = s[0].position !== a.min, i = s[s.length - 1].position !== a.max, r = n ? 1 : 0, o = s.map(function(e, t) {
					return new mi({
						index: t + r,
						position: e.position,
						panel: e
					})
				}), n && o.splice(0, 0, new mi({
					index: 0,
					position: a.min,
					panel: e[s[0].index - 1]
				})), i && o.push(new mi({
					index: o.length,
					position: a.max,
					panel: e[s[s.length - 1].index + 1]
				})), this._anchors = o) : a.min !== a.max ? (s = (o = (s = this._findNearestPanel(a.min, e)).index === e.length - 1 ? s.prev() : s).next(), this._anchors = [new mi({
					index: 0,
					position: a.min,
					panel: o
				}), new mi({
					index: 1,
					position: a.max,
					panel: s
				})]) : this._anchors = [new mi({
					index: 0,
					position: a.min,
					panel: this._findNearestPanel(a.min, e)
				})], this
			}, t.findAnchorIncludePosition = function(e) {
				var t = this._range,
					n = this._anchors;
				return n.length <= 0 ? null : e <= t.min ? n[0] : e >= t.max ? n[n.length - 1] : i.prototype.findAnchorIncludePosition.call(this, e)
			}, t._findNearestPanel = function(e, t) {
				for (var n = 1 / 0, i = 0; i < t.length; i++) {
					var r = t[i],
						r = Math.abs(r.position - e);
					if (n < r) return t[i - 1];
					n = r
				}
				return t[t.length - 1]
			}, e
		}(_n),
		gi = {
			__proto__: null,
			Camera: _n,
			LinearCamera: Ti,
			CircularCamera: wi,
			BoundCamera: Ri
		};

	function Ii(e) {
		return void 0 === e
	}
	var Ae = function() {
			function e() {
				this.options = {}, this._eventHandler = {}
			}
			var t = e.prototype;
			return t.trigger = function(e) {
				for (var t = this, n = [], i = 1; i < arguments.length; i++) n[i - 1] = arguments[i];
				if (!(0 < (a = this._eventHandler[e] || []).length)) return !0;
				var r = n[0] || {},
					o = n.slice(1),
					a = a.concat(),
					s = !1;
				r.eventType = e, r.stop = function() {
					s = !0
				}, r.currentTarget = this;
				var u = [r];
				return 1 <= o.length && (u = u.concat(o)), a.forEach(function(e) {
					e.apply(t, u)
				}), !s
			}, t.once = function(n, i) {
				var r, o = this;
				if ("object" == typeof n && Ii(i)) {
					var e, t = n;
					for (e in t) this.once(e, t[e]);
					return this
				}
				return "string" == typeof n && "function" == typeof i && this.on(n, r = function() {
					for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
					i.apply(o, e), o.off(n, r)
				}), this
			}, t.hasOn = function(e) {
				return !!this._eventHandler[e]
			}, t.on = function(e, t) {
				if ("object" == typeof e && Ii(t)) {
					var n, i = e;
					for (n in i) this.on(n, i[n]);
					return this
				}
				var r;
				return "string" == typeof e && "function" == typeof t && (Ii(r = this._eventHandler[e]) && (this._eventHandler[e] = [], r = this._eventHandler[e]), r.push(t)), this
			}, t.off = function(e, t) {
				var n, i;
				if (Ii(e)) return this._eventHandler = {}, this;
				if (Ii(t)) {
					if ("string" == typeof e) return delete this._eventHandler[e], this;
					var r, o = e;
					for (r in o) this.off(r, o[r]);
					return this
				}
				var a = this._eventHandler[e];
				if (a) {
					var s = 0;
					try {
						for (var u = function(e) {
								var t = "function" == typeof Symbol && Symbol.iterator,
									n = t && e[t],
									i = 0;
								if (n) return n.call(e);
								if (e && "number" == typeof e.length) return {
									next: function() {
										return {
											value: (e = e && i >= e.length ? void 0 : e) && e[i++],
											done: !e
										}
									}
								};
								throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
							}(a), l = u.next(); !l.done; l = u.next()) {
							if (l.value === t) {
								a.splice(s, 1);
								break
							}
							s++
						}
					} catch (e) {
						n = {
							error: e
						}
					} finally {
						try {
							l && !l.done && (i = u.return) && i.call(u)
						} finally {
							if (n) throw n.error
						}
					}
				}
				return this
			}, e.VERSION = "2.2.2", e
		}(),
		Ai = function(e, t) {
			return (Ai = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(e, t) {
					e.__proto__ = t
				} || function(e, t) {
					for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
				})(e, t)
		};

	function Ci(e, t) {
		function n() {
			this.constructor = e
		}
		Ai(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
	}
	var Si = function() {
		return (Si = Object.assign || function(e) {
			for (var t, n = 1, i = arguments.length; n < i; n++)
				for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
			return e
		}).apply(this, arguments)
	};
	var ki = "undefined" != typeof window,
		_n = ki ? window.navigator.userAgent : "",
		Ni = ki && !!("getComputedStyle" in window),
		Di = /MSIE|Trident|Windows Phone|Edge/.test(_n),
		ji = ki && !!("addEventListener" in document),
		Li = "width",
		zi = "height";

	function Mi(e, t) {
		return e.getAttribute(t) || ""
	}

	function Hi(e) {
		return [].slice.call(e)
	}

	function Vi(e) {
		return "loading" in e && "lazy" === e.getAttribute("loading")
	}

	function Fi(e, t, n) {
		ji ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n
	}

	function Gi(e, t, n) {
		e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = null
	}

	function Xi(e, t) {
		var n = e["client" + t] || e["offset" + t];
		return parseFloat(n || (e = e, ((Ni ? window.getComputedStyle(e) : e.currentStyle) || {})[t.toLowerCase()])) || 0
	}

	function Bi(e, t, n) {
		var i = Hi(e.querySelectorAll(function() {
			for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
			for (var i = Array(e), r = 0, t = 0; t < n; t++)
				for (var o = arguments[t], a = 0, s = o.length; a < s; a++, r++) i[r] = o[a];
			return i
		}(["[" + n + "skip] [" + n + "width]"], t.map(function(e) {
			return ["[" + n + "skip] " + e, e + "[" + n + "skip]", "[" + n + "width] " + e].join(", ")
		})).join(", ")));
		return Hi(e.querySelectorAll("[" + n + "width], " + t.join(", "))).filter(function(e) {
			return -1 === i.indexOf(e)
		})
	}
	var Yi = [];

	function Wi(e, t) {
		Yi.length || Fi(window, "resize", qi), e.__PREFIX__ = t, Yi.push(e), Ui(e)
	}

	function Ui(e, t) {
		void 0 === t && (t = "data-");
		var n, i = e.__PREFIX__ || t,
			r = parseInt(Mi(e, "" + i + Li), 10) || 0,
			t = parseInt(Mi(e, "" + i + zi), 10) || 0;
		Mi(e, i + "fixed") === zi ? (n = Xi(e, "Height") || t, e.style[Li] = r / t * n + "px") : (n = Xi(e, "Width") || r, e.style[zi] = t / r * n + "px")
	}

	function qi() {
		Yi.forEach(function(e) {
			Ui(e)
		})
	}
	var _n = function(r) {
			function e(e, t) {
				void 0 === t && (t = {});
				var n, i = r.call(this) || this;
				return i.isReady = !1, i.isPreReady = !1, i.hasDataSize = !1, i.hasLoading = !1, i.isSkip = !1, i.onCheck = function(e) {
					i.clear(), e && "error" === e.type && i.onError(i.element);
					e = !i.hasDataSize && !i.hasLoading;
					i.onReady(e)
				}, i.options = Si({
					prefix: "data-"
				}, t), i.element = e, i.hasDataSize = (t = i.options.prefix, !!e.getAttribute((t = void 0 === t ? "data-" : t) + "width")), i.hasLoading = Vi(e), i.isSkip = !!i.element.getAttribute((n = void 0 === n ? "data-" : n) + "skip"), i
			}
			Ci(e, r);
			var t = e.prototype;
			return t.check = function() {
				return this.isSkip || !this.checkElement() ? (this.onAlreadyReady(!0), !1) : (this.hasDataSize && Wi(this.element, this.options.prefix), (this.hasDataSize || this.hasLoading) && this.onAlreadyPreReady(), !0)
			}, t.addEvents = function() {
				var t = this,
					n = this.element;
				this.constructor.EVENTS.forEach(function(e) {
					Fi(n, e, t.onCheck)
				})
			}, t.clear = function() {
				var t = this,
					n = this.element;
				this.constructor.EVENTS.forEach(function(e) {
					Gi(n, e, t.onCheck)
				}), this.removeAutoSizer()
			}, t.destroy = function() {
				this.clear(), this.off()
			}, t.removeAutoSizer = function() {
				var e, t, n;
				this.hasDataSize && (n = this.options.prefix, e = this.element, t = n, (n = Yi.indexOf(e)) < 0 || (t = Mi(e, t + "fixed"), delete e.__PREFIX__, e.style[t === zi ? Li : zi] = "", Yi.splice(n, 1), Yi.length || Gi(window, "resize", qi)))
			}, t.onError = function(e) {
				this.trigger("error", {
					element: this.element,
					target: e
				})
			}, t.onPreReady = function() {
				this.isPreReady || (this.isPreReady = !0, this.trigger("preReady", {
					element: this.element,
					hasLoading: this.hasLoading,
					isSkip: this.isSkip
				}))
			}, t.onReady = function(e) {
				this.isReady || ((e = !this.isPreReady && e) && (this.isPreReady = !0), this.removeAutoSizer(), this.isReady = !0, this.trigger("ready", {
					element: this.element,
					withPreReady: e,
					hasLoading: this.hasLoading,
					isSkip: this.isSkip
				}))
			}, t.onAlreadyError = function(e) {
				var t = this;
				setTimeout(function() {
					t.onError(e)
				})
			}, t.onAlreadyPreReady = function() {
				var e = this;
				setTimeout(function() {
					e.onPreReady()
				})
			}, t.onAlreadyReady = function(e) {
				var t = this;
				setTimeout(function() {
					t.onReady(e)
				})
			}, e.EVENTS = [], e
		}(Ae),
		Zi = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			Ci(t, e);
			var n = t.prototype;
			return n.setHasLoading = function(e) {
				this.hasLoading = e
			}, n.check = function() {
				return this.isSkip ? (this.onAlreadyReady(!0), !1) : (this.hasDataSize ? (Wi(this.element, this.options.prefix), this.onAlreadyPreReady()) : this.trigger("requestChildren"), !0)
			}, n.checkElement = function() {
				return !0
			}, n.destroy = function() {
				this.clear(), this.trigger("requestDestroy"), this.off()
			}, n.onAlreadyPreReady = function() {
				e.prototype.onAlreadyPreReady.call(this), this.trigger("reqeustReadyChildren")
			}, t.EVENTS = [], t
		}(_n),
		ki = function(n) {
			function e(e) {
				void 0 === e && (e = {});
				var t = n.call(this) || this;
				return t.readyCount = 0, t.preReadyCount = 0, t.totalCount = 0, t.totalErrorCount = 0, t.isPreReadyOver = !0, t.elementInfos = [], t.options = Si({
					loaders: {},
					prefix: "data-"
				}, e), t
			}
			Ci(e, n);
			var t = e.prototype;
			return t.check = function(e) {
				var o = this,
					n = this.options.prefix;
				this.clear(), this.elementInfos = Hi(e).map(function(e, r) {
					var t = o.getLoader(e, {
						prefix: n
					});
					return t.check(), t.on("error", function(e) {
						o.onError(r, e.target)
					}).on("preReady", function(e) {
						var t = o.elementInfos[r];
						t.hasLoading = e.hasLoading, t.isSkip = e.isSkip;
						e = o.checkPreReady(r);
						o.onPreReadyElement(r), e && o.onPreReady()
					}).on("ready", function(e) {
						var t = e.withPreReady,
							n = e.hasLoading,
							i = e.isSkip,
							e = o.elementInfos[r];
						e.hasLoading = n, e.isSkip = i;
						e = t && o.checkPreReady(r), i = o.checkReady(r);
						t && o.onPreReadyElement(r), o.onReadyElement(r), e && o.onPreReady(), i && o.onReady()
					}), {
						loader: t,
						element: e,
						hasLoading: !1,
						hasError: !1,
						isPreReady: !1,
						isReady: !1,
						isSkip: !1
					}
				});
				e = this.elementInfos.length;
				return (this.totalCount = e) || setTimeout(function() {
					o.onPreReady(), o.onReady()
				}), this
			}, t.getTotalCount = function() {
				return this.totalCount
			}, t.isPreReady = function() {
				return this.elementInfos.every(function(e) {
					return e.isPreReady
				})
			}, t.isReady = function() {
				return this.elementInfos.every(function(e) {
					return e.isReady
				})
			}, t.hasError = function() {
				return 0 < this.totalErrorCount
			}, t.clear = function() {
				this.isPreReadyOver = !1, this.totalCount = 0, this.preReadyCount = 0, this.readyCount = 0, this.totalErrorCount = 0, this.elementInfos.forEach(function(e) {
					!e.isReady && e.loader && e.loader.destroy()
				}), this.elementInfos = []
			}, t.destroy = function() {
				this.clear(), this.off()
			}, t.getLoader = function(t, e) {
				var n = this,
					i = t.tagName.toLowerCase(),
					r = this.options.loaders,
					o = Object.keys(r);
				if (r[i]) return new r[i](t, e);
				var a = new Zi(t, e),
					s = Hi(t.querySelectorAll(o.join(", ")));
				a.setHasLoading(s.some(Vi));
				var u = !1,
					l = this.clone().on("error", function(e) {
						a.onError(e.target)
					}).on("ready", function() {
						a.onReady(u)
					});
				return a.on("requestChildren", function() {
					var e = Bi(t, o, n.options.prefix);
					l.check(e).on("preReady", function(e) {
						(u = e.isReady) || a.onPreReady()
					})
				}).on("reqeustReadyChildren", function() {
					l.check(s)
				}).on("requestDestroy", function() {
					l.destroy()
				}), a
			}, t.clone = function() {
				return new e(Si({}, this.options))
			}, t.checkPreReady = function(e) {
				return this.elementInfos[e].isPreReady = !0, ++this.preReadyCount, !(this.preReadyCount < this.totalCount)
			}, t.checkReady = function(e) {
				return this.elementInfos[e].isReady = !0, ++this.readyCount, !(this.readyCount < this.totalCount)
			}, t.onError = function(e, t) {
				var n = this.elementInfos[e];
				n.hasError = !0, this.trigger("error", {
					element: n.element,
					index: e,
					target: t,
					errorCount: this.getErrorCount(),
					totalErrorCount: ++this.totalErrorCount
				})
			}, t.onPreReadyElement = function(e) {
				var t = this.elementInfos[e];
				this.trigger("preReadyElement", {
					element: t.element,
					index: e,
					preReadyCount: this.preReadyCount,
					readyCount: this.readyCount,
					totalCount: this.totalCount,
					isPreReady: this.isPreReady(),
					isReady: this.isReady(),
					hasLoading: t.hasLoading,
					isSkip: t.isSkip
				})
			}, t.onPreReady = function() {
				this.isPreReadyOver = !0, this.trigger("preReady", {
					readyCount: this.readyCount,
					totalCount: this.totalCount,
					isReady: this.isReady(),
					hasLoading: this.hasLoading()
				})
			}, t.onReadyElement = function(e) {
				var t = this.elementInfos[e];
				this.trigger("readyElement", {
					index: e,
					element: t.element,
					hasError: t.hasError,
					errorCount: this.getErrorCount(),
					totalErrorCount: this.totalErrorCount,
					preReadyCount: this.preReadyCount,
					readyCount: this.readyCount,
					totalCount: this.totalCount,
					isPreReady: this.isPreReady(),
					isReady: this.isReady(),
					hasLoading: t.hasLoading,
					isPreReadyOver: this.isPreReadyOver,
					isSkip: t.isSkip
				})
			}, t.onReady = function() {
				this.trigger("ready", {
					errorCount: this.getErrorCount(),
					totalErrorCount: this.totalErrorCount,
					totalCount: this.totalCount
				})
			}, t.getErrorCount = function() {
				return this.elementInfos.filter(function(e) {
					return e.hasError
				}).length
			}, t.hasLoading = function() {
				return this.elementInfos.some(function(e) {
					return e.hasLoading
				})
			}, e
		}(Ae),
		Ki = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return Ci(t, e), t.prototype.checkElement = function() {
				var e = this.element,
					t = e.getAttribute("src");
				if (e.complete) {
					if (t) return e.naturalWidth || this.onAlreadyError(e), !1;
					this.onAlreadyPreReady()
				}
				return this.addEvents(), Di && e.setAttribute("src", t), !0
			}, t.EVENTS = ["load", "error"], t
		}(_n),
		Ji = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return Ci(t, e), t.prototype.checkElement = function() {
				var e = this.element;
				return !(1 <= e.readyState) && (e.error ? (this.onAlreadyError(e), !1) : (this.addEvents(), !0))
			}, t.EVENTS = ["loadedmetadata", "error"], t
		}(_n),
		Qi = function(t) {
			function e(e) {
				return t.call(this, Si({
					loaders: {
						img: Ki,
						video: Ji
					}
				}, e = void 0 === e ? {} : e)) || this
			}
			return Ci(e, t), e
		}(ki),
		_n = (Ae = $i.prototype, Object.defineProperty(Ae, "panels", {
			get: function() {
				return this._panels
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(Ae, "panelCount", {
			get: function() {
				return this._panels.length
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(Ae, "strategy", {
			get: function() {
				return this._strategy
			},
			enumerable: !1,
			configurable: !0
		}), Object.defineProperty(Ae, "align", {
			get: function() {
				return this._align
			},
			set: function(e) {
				this._align = e;
				var t = b(e);
				this._panels.forEach(function(e) {
					e.align = t
				})
			},
			enumerable: !1,
			configurable: !0
		}), Ae.init = function(e) {
			return this._flicking = e, this._collectPanels(), this
		}, Ae.destroy = function() {
			this._flicking = null, this._panels = []
		}, Ae.getPanel = function(e) {
			return this._panels[e] || null
		}, Ae.forceRenderAllPanels = function() {
			return this._panels.forEach(function(e) {
				return e.markForShow()
			}), Promise.resolve()
		}, Ae.updatePanelSize = function() {
			var e, t = y(this._flicking),
				n = this._panels;
			return n.length <= 0 || (0 < t.panelsPerView ? ((e = n[0]).resize(), this._updatePanelSizeByGrid(e, n)) : t.panels.forEach(function(e) {
				return e.resize()
			})), this
		}, Ae.batchInsert = function() {
			for (var a = this, e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
			var s = this._panels,
				u = y(this._flicking),
				n = u.control,
				l = s[0],
				c = b(this._align),
				i = e.reduce(function(e, t) {
					var n, i = x(t.index, s.length),
						r = s.slice(i),
						o = t.elements.map(function(e, t) {
							return a._createPanel(e, {
								index: i + t,
								align: c,
								flicking: u
							})
						});
					return s.splice.apply(s, d([i, 0], f(o))), t.hasDOMInElements && a._insertPanelElements(o, null !== (n = r[0]) && void 0 !== n ? n : null), 0 < u.panelsPerView ? (n = l || o[0].resize(), a._updatePanelSizeByGrid(n, o)) : o.forEach(function(e) {
						return e.resize()
					}), r.forEach(function(e) {
						e.increaseIndex(o.length), e.updatePosition()
					}), d(d([], f(e)), f(o))
				}, []);
			return i.length <= 0 ? [] : (this._updateCameraAndControl(), this.render(), 0 < i.length && !n.animating && n.moveToPanel(n.activePanel || i[0], {
				duration: 0
			}).catch(function() {}), u.camera.updateOffset(), u.trigger(new M($.PANEL_CHANGE, {
				added: i,
				removed: []
			})), this.checkPanelContentsReady(i), i)
		}, Ae.batchRemove = function() {
			for (var a = this, e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
			var s = this._panels,
				n = y(this._flicking),
				i = n.camera,
				u = n.control,
				l = u.activePanel,
				r = u.activeIndex,
				o = e.reduce(function(e, t) {
					var n = t.index,
						i = t.deleteCount,
						r = x(n, s.length),
						n = s.slice(r + i),
						o = s.splice(r, i);
					return o.length <= 0 ? [] : (n.forEach(function(e) {
						e.decreaseIndex(o.length), e.updatePosition()
					}), t.hasDOMInElements && a._removePanelElements(o), o.forEach(function(e) {
						return e.destroy()
					}), T(o, l) && u.resetActive(), d(d([], f(e)), f(o)))
				}, []);
			return this._updateCameraAndControl(), this.render(), 0 < o.length && !u.animating && ((r = T(o, l) ? s[r] || s[s.length - 1] : l) ? u.moveToPanel(r, {
				duration: 0
			}).catch(function() {}) : i.lookAt(0)), n.camera.updateOffset(), n.trigger(new M($.PANEL_CHANGE, {
				added: [],
				removed: o
			})), o
		}, Ae.checkPanelContentsReady = function(r) {
			var o, a = this,
				s = y(this._flicking),
				e = s.resizeOnContentsReady,
				u = this._panels;
			e && !s.virtualEnabled && ((r = r.filter(function(e) {
				return !!e.element.querySelector("img, video")
			})).length <= 0 || (o = new Qi, r.forEach(function(e) {
				e.loading = !0
			}), o.on("readyElement", function(e) {
				var t, n, i;
				a._flicking ? (t = r[e.index], n = s.camera, e = (i = s.control).activePanel ? n.getProgressInPanel(i.activePanel) : 0, t.loading = !1, t.resize(), u.slice(t.index + 1).forEach(function(e) {
					return e.updatePosition()
				}), s.initialized && (n.updateRange(), n.updateAnchors(), i.animating || (i.updatePosition(e), i.updateInput()))) : o.destroy()
			}), o.on("preReady", function(e) {
				a._flicking && a.render(), e.readyCount === e.totalCount && o.destroy()
			}), o.on("ready", function() {
				a._flicking && a.render(), o.destroy()
			}), o.check(r.map(function(e) {
				return e.element
			}))))
		}, Ae._updateCameraAndControl = function() {
			var e = y(this._flicking),
				t = e.camera,
				e = e.control;
			t.updateRange(), t.updateAnchors(), t.resetNeedPanelHistory(), e.updateInput()
		}, Ae._showOnlyVisiblePanels = function(t) {
			var e = t.renderer.panels,
				n = t.camera.visiblePanels.reduce(function(e, t) {
					return e[t.index] = !0, e
				}, {});
			e.forEach(function(e) {
				e.index in n || e.loading ? e.markForShow() : t.holding || e.markForHide()
			})
		}, Ae._updatePanelSizeByGrid = function(e, t) {
			var n, i = y(this._flicking),
				r = i.panelsPerView;
			if (r <= 0) throw new ue(B("panelsPerView", r), H.WRONG_OPTION);
			t.length <= 0 || (t = (i.camera.size - (e.margin.prev + e.margin.next) * (r - 1)) / r, r = i.horizontal ? {
				width: t
			} : {
				height: t
			}, n = {
				size: t,
				height: e.height,
				margin: e.margin
			}, i.noPanelStyleOverride || this._strategy.updatePanelSizes(i, r), i.panels.forEach(function(e) {
				return e.resize(n)
			}))
		}, Ae._removeAllChildsFromCamera = function() {
			for (var e = y(this._flicking).camera.element; e.firstChild;) e.removeChild(e.firstChild)
		}, Ae._insertPanelElements = function(e, t) {
			void 0 === t && (t = null);
			var n = y(this._flicking).camera.element,
				t = (null == t ? void 0 : t.element) || null,
				i = document.createDocumentFragment();
			e.forEach(function(e) {
				return i.appendChild(e.element)
			}), n.insertBefore(i, t)
		}, Ae._removePanelElements = function(e) {
			var t = y(this._flicking).camera.element;
			e.forEach(function(e) {
				t.removeChild(e.element)
			})
		}, $i);

	function $i(e) {
		var t = e.align,
			t = void 0 === t ? ee.CENTER : t,
			e = e.strategy;
		this._flicking = null, this._panels = [], this._align = t, this._strategy = e
	}
	var er = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			o(t, e);
			var n = t.prototype;
			return n.render = function() {
				return h(this, void 0, void 0, function() {
					var t, n;
					return m(this, function(e) {
						return t = y(this._flicking), (n = this._strategy).updateRenderingPanels(t), n.renderPanels(t), this._resetPanelElementOrder(), [2]
					})
				})
			}, n._collectPanels = function() {
				var e = y(this._flicking),
					t = e.camera;
				this._removeAllTextNodes(), this._panels = this._strategy.collectPanels(e, t.children)
			}, n._createPanel = function(e, t) {
				return this._strategy.createPanel(e, t)
			}, n._resetPanelElementOrder = function() {
				var e = y(this._flicking),
					n = e.camera.element,
					i = this._strategy.getRenderingElementsByOrder(e).reverse();
				i.forEach(function(e, t) {
					t = i[t - 1] || null;
					e.nextElementSibling !== t && n.insertBefore(e, t)
				})
			}, n._removeAllTextNodes = function() {
				var t = y(this._flicking).camera.element;
				s(t.childNodes).forEach(function(e) {
					e.nodeType === Node.TEXT_NODE && t.removeChild(e)
				})
			}, t
		}(_n),
		ki = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			o(t, e);
			var n = t.prototype;
			return n._insertPanelElements = function(e, t) {}, n._removePanelElements = function(e) {}, n._removeAllChildsFromCamera = function() {}, t
		}(_n),
		tr = ((Ae = nr.prototype).renderPanels = function() {}, Ae.getRenderingIndexesByOrder = function(e) {
			var t = e.renderer.panels.filter(function(e) {
					return e.rendered
				}),
				n = t.filter(function(e) {
					return e.toggled && e.toggleDirection === te.PREV
				}),
				e = t.filter(function(e) {
					return e.toggled && e.toggleDirection === te.NEXT
				}),
				t = t.filter(function(e) {
					return !e.toggled
				});
			return d(d(d([], f(n)), f(t)), f(e)).map(function(e) {
				return e.index
			})
		}, Ae.getRenderingElementsByOrder = function(e) {
			var t = e.panels;
			return this.getRenderingIndexesByOrder(e).map(function(e) {
				return t[e].element
			})
		}, Ae.updateRenderingPanels = function(e) {
			e.renderOnlyVisible ? this._showOnlyVisiblePanels(e) : e.panels.forEach(function(e) {
				return e.markForShow()
			})
		}, Ae.collectPanels = function(n, e) {
			var i = this,
				r = b(n.renderer.align);
			return e.map(function(e, t) {
				return new i._panelCtor({
					index: t,
					elementProvider: new i._providerCtor(e),
					align: r,
					flicking: n
				})
			})
		}, Ae.createPanel = function(e, t) {
			return new this._panelCtor(r(r({}, t), {
				elementProvider: new this._providerCtor(e)
			}))
		}, Ae.updatePanelSizes = function(e, t) {
			e.panels.forEach(function(e) {
				return e.setSize(t)
			})
		}, Ae._showOnlyVisiblePanels = function(t) {
			var e = t.renderer.panels,
				n = t.camera,
				i = n.visiblePanels.reduce(function(e, t) {
					return e[t.index] = !0, e
				}, {});
			e.forEach(function(e) {
				e.index in i || e.loading ? e.markForShow() : t.holding || e.markForHide()
			}), n.updateOffset()
		}, nr);

	function nr(e) {
		var t = e.providerCtor,
			e = e.panelCtor;
		this._providerCtor = t, this._panelCtor = e
	}
	var ir = ((Ae = rr.prototype).renderPanels = function(e) {
		var n = e.virtual,
			t = e.visiblePanels,
			i = D(e.panelsPerView + 1);
		t.forEach(function(e) {
			var t = e.elementIndex;
			e.render(), n.show(t), i[t] = -1
		}), i.filter(function(e) {
			return 0 <= e
		}).forEach(function(e) {
			n.hide(e)
		})
	}, Ae.getRenderingIndexesByOrder = function(e) {
		var t = e.virtual,
			e = d([], f(e.visiblePanels)).filter(function(e) {
				return e.rendered
			}).sort(function(e, t) {
				return e.position + e.offset - (t.position + t.offset)
			});
		if (e.length <= 0) return t.elements.map(function(e, t) {
			return t
		});
		e = e.map(function(e) {
			return e.elementIndex
		}), t = t.elements.map(function(e, t) {
			return r(r({}, e), {
				idx: t
			})
		}).filter(function(e) {
			return !e.visible
		}).map(function(e) {
			return e.idx
		});
		return d(d([], f(e)), f(t))
	}, Ae.getRenderingElementsByOrder = function(e) {
		var t = e.virtual.elements;
		return this.getRenderingIndexesByOrder(e).map(function(e) {
			return t[e].nativeElement
		})
	}, Ae.updateRenderingPanels = function(e) {
		var t = e.renderer.panels,
			e = e.camera,
			n = e.visiblePanels.reduce(function(e, t) {
				return e[t.index] = !0, e
			}, {});
		t.forEach(function(e) {
			e.index in n || e.loading ? e.markForShow() : e.markForHide()
		}), e.updateOffset()
	}, Ae.collectPanels = function(t) {
		var n = b(t.renderer.align);
		return D(t.virtual.initialPanelCount).map(function(e) {
			return new me({
				index: e,
				elementProvider: new be(t),
				align: n,
				flicking: t
			})
		})
	}, Ae.createPanel = function(e, t) {
		return new me(r(r({}, t), {
			elementProvider: new be(t.flicking)
		}))
	}, Ae.updatePanelSizes = function(e, t) {
		e.virtual.elements.forEach(function(e) {
			C(e.nativeElement, t)
		}), e.panels.forEach(function(e) {
			return e.setSize(t)
		})
	}, rr);

	function rr() {}

	function or(e, n, i, t, r) {
		e.batchInsert.apply(e, d([], f(n.added.slice(t, r).map(function(e, t) {
			return {
				index: e,
				elements: [i[t + n.prevList.length]],
				hasDOMInElements: !1
			}
		}))))
	}

	function ar(e, t, n) {
		n = e.panels.slice(t, n), e.batchRemove({
			index: t,
			deleteCount: n.length,
			hasDOMInElements: !1
		})
	}
	var _n = {
			__proto__: null,
			Renderer: _n,
			VanillaRenderer: er,
			ExternalRenderer: ki,
			NormalRenderingStrategy: tr,
			VirtualRenderingStrategy: ir
		},
		sr = function(C) {
			function e(e, t) {
				var n = void 0 === t ? {} : t,
					i = n.align,
					r = void 0 === i ? ee.CENTER : i,
					o = n.defaultIndex,
					a = void 0 === o ? 0 : o,
					s = n.horizontal,
					u = void 0 === s || s,
					l = n.circular,
					c = void 0 !== l && l,
					h = n.bound,
					f = void 0 !== h && h,
					d = n.adaptive,
					p = void 0 !== d && d,
					g = n.panelsPerView,
					v = void 0 === g ? -1 : g,
					m = n.noPanelStyleOverride,
					_ = void 0 !== m && m,
					y = n.resizeOnContentsReady,
					b = void 0 !== y && y,
					E = n.needPanelThreshold,
					P = void 0 === E ? 0 : E,
					x = n.preventEventsBeforeInit,
					T = void 0 === x || x,
					O = n.deceleration,
					w = void 0 === O ? .0075 : O,
					R = n.duration,
					I = void 0 === R ? 500 : R,
					A = n.easing,
					t = void 0 === A ? function(e) {
						return 1 - Math.pow(1 - e, 3)
					} : A,
					i = n.inputType,
					o = void 0 === i ? ["mouse", "touch"] : i,
					s = n.moveType,
					l = void 0 === s ? "snap" : s,
					h = n.threshold,
					d = void 0 === h ? 40 : h,
					g = n.interruptable,
					m = void 0 === g || g,
					y = n.bounce,
					E = void 0 === y ? "20%" : y,
					x = n.iOSEdgeSwipeThreshold,
					O = void 0 === x ? 30 : x,
					R = n.preventClickOnDrag,
					A = void 0 === R || R,
					i = n.disableOnInit,
					s = void 0 !== i && i,
					h = n.renderOnlyVisible,
					g = void 0 !== h && h,
					y = n.virtual,
					x = void 0 === y ? null : y,
					R = n.autoInit,
					i = void 0 === R || R,
					h = n.autoResize,
					y = void 0 === h || h,
					R = n.useResizeObserver,
					h = void 0 === R || R,
					R = n.renderExternal,
					n = void 0 === R ? null : R,
					R = C.call(this) || this;
				return R._initialized = !1, R._plugins = [], R._align = r, R._defaultIndex = a, R._horizontal = u, R._circular = c, R._bound = f, R._adaptive = p, R._panelsPerView = v, R._noPanelStyleOverride = _, R._resizeOnContentsReady = b, R._virtual = x, R._needPanelThreshold = P, R._preventEventsBeforeInit = T, R._deceleration = w, R._duration = I, R._easing = t, R._inputType = o, R._moveType = l, R._threshold = d, R._interruptable = m, R._bounce = E, R._iOSEdgeSwipeThreshold = O, R._preventClickOnDrag = A, R._disableOnInit = s, R._renderOnlyVisible = g, R._autoInit = i, R._autoResize = y, R._useResizeObserver = h, R._renderExternal = n, R._viewport = new ce(S(e)), R._autoResizer = new fe(R), R._renderer = R._createRenderer(), R._camera = R._createCamera(), R._control = R._createControl(), R._virtualManager = new Pe(R, x), R._autoInit && R.init(), R
			}
			o(e, C);
			var t = e.prototype;
			return Object.defineProperty(t, "control", {
				get: function() {
					return this._control
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "camera", {
				get: function() {
					return this._camera
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "renderer", {
				get: function() {
					return this._renderer
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "viewport", {
				get: function() {
					return this._viewport
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "initialized", {
				get: function() {
					return this._initialized
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "circularEnabled", {
				get: function() {
					return this._camera.controlParams.circular
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "virtualEnabled", {
				get: function() {
					return 0 < this._panelsPerView && null != this._virtual
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "index", {
				get: function() {
					return this._control.activeIndex
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "element", {
				get: function() {
					return this._viewport.element
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "currentPanel", {
				get: function() {
					return this._control.activePanel
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "panels", {
				get: function() {
					return this._renderer.panels
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "panelCount", {
				get: function() {
					return this._renderer.panelCount
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "visiblePanels", {
				get: function() {
					return this._camera.visiblePanels
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "animating", {
				get: function() {
					return this._control.animating
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "holding", {
				get: function() {
					return this._control.holding
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "activePlugins", {
				get: function() {
					return this._plugins
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "align", {
				get: function() {
					return this._align
				},
				set: function(e) {
					this._align = e, this._renderer.align = e, this._camera.align = e
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "defaultIndex", {
				get: function() {
					return this._defaultIndex
				},
				set: function(e) {
					this._defaultIndex = e
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "horizontal", {
				get: function() {
					return this._horizontal
				},
				set: function(e) {
					this._horizontal = e
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "circular", {
				get: function() {
					return this._circular
				},
				set: function(e) {
					this._circular = e
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "bound", {
				get: function() {
					return this._bound
				},
				set: function(e) {
					this._bound = e
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "adaptive", {
				get: function() {
					return this._adaptive
				},
				set: function(e) {
					this._adaptive = e
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "panelsPerView", {
				get: function() {
					return this._panelsPerView
				},
				set: function(e) {
					this._panelsPerView = e
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "noPanelStyleOverride", {
				get: function() {
					return this._noPanelStyleOverride
				},
				set: function(e) {
					this._noPanelStyleOverride = e
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "resizeOnContentsReady", {
				get: function() {
					return this._resizeOnContentsReady
				},
				set: function(e) {
					this._resizeOnContentsReady = e
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "needPanelThreshold", {
				get: function() {
					return this._needPanelThreshold
				},
				set: function(e) {
					this._needPanelThreshold = e
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "preventEventsBeforeInit", {
				get: function() {
					return this._preventEventsBeforeInit
				},
				set: function(e) {
					this._preventEventsBeforeInit = e
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "deceleration", {
				get: function() {
					return this._deceleration
				},
				set: function(e) {
					this._deceleration = e
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "easing", {
				get: function() {
					return this._easing
				},
				set: function(e) {
					this._easing = e
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "duration", {
				get: function() {
					return this._duration
				},
				set: function(e) {
					this._duration = e
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "inputType", {
				get: function() {
					return this._inputType
				},
				set: function(e) {
					this._inputType = e
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "moveType", {
				get: function() {
					return this._moveType
				},
				set: function(e) {
					this._moveType = e
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "threshold", {
				get: function() {
					return this._threshold
				},
				set: function(e) {
					this._threshold = e
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "interruptable", {
				get: function() {
					return this._interruptable
				},
				set: function(e) {
					this._interruptable = e
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "bounce", {
				get: function() {
					return this._bounce
				},
				set: function(e) {
					this._bounce = e
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "iOSEdgeSwipeThreshold", {
				get: function() {
					return this._iOSEdgeSwipeThreshold
				},
				set: function(e) {
					this._iOSEdgeSwipeThreshold = e
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "preventClickOnDrag", {
				get: function() {
					return this._preventClickOnDrag
				},
				set: function(e) {
					var t;
					e !== this._preventClickOnDrag && (t = this._control.controller, e ? t.addPreventClickHandler() : t.removePreventClickHandler(), this._preventClickOnDrag = e)
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "disableOnInit", {
				get: function() {
					return this._disableOnInit
				},
				set: function(e) {
					this._disableOnInit = e
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "renderOnlyVisible", {
				get: function() {
					return this._renderOnlyVisible
				},
				set: function(e) {
					this._renderOnlyVisible = e
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "virtual", {
				get: function() {
					return this._virtualManager
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "autoInit", {
				get: function() {
					return this._autoInit
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "autoResize", {
				get: function() {
					return this._autoResize
				},
				set: function(e) {
					(this._autoResize = e) ? this._autoResizer.enable(): this._autoResizer.disable()
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "useResizeObserver", {
				get: function() {
					return this._useResizeObserver
				},
				set: function(e) {
					this._useResizeObserver = e, this._autoResize && this._autoResizer.enable()
				},
				enumerable: !1,
				configurable: !0
			}), Object.defineProperty(t, "renderExternal", {
				get: function() {
					return this._renderExternal
				},
				enumerable: !1,
				configurable: !0
			}), t.init = function() {
				return h(this, void 0, void 0, function() {
					var t, n, i, r, o, a, s = this;
					return m(this, function(e) {
						switch (e.label) {
							case 0:
								return this._initialized ? [2] : (t = this._camera, n = this._renderer, i = this._control, r = this._virtualManager, o = this.trigger, a = this._preventEventsBeforeInit, t.init(this), r.init(), n.init(this), i.init(this), a && (this.trigger = function() {
									return s
								}), [4, this.resize()]);
							case 1:
								return e.sent(), [4, this._moveToInitialPanel()];
							case 2:
								return e.sent(), this._autoResize && this._autoResizer.enable(), this._preventClickOnDrag && i.controller.addPreventClickHandler(), this._disableOnInit && this.disableInput(), n.checkPanelContentsReady(n.panels), this._plugins.forEach(function(e) {
									return e.init(s)
								}), this._initialized = !0, a && (this.trigger = o), this.trigger(new M($.READY)), [2]
						}
					})
				})
			}, t.destroy = function() {
				this.off(), this._autoResizer.disable(), this._control.destroy(), this._camera.destroy(), this._renderer.destroy(), this._plugins.forEach(function(e) {
					return e.destroy()
				}), this._initialized = !1
			}, t.prev = function(e) {
				var t;
				return void 0 === e && (e = this._duration), this.moveTo(null !== (t = null === (t = null === (t = this._control.activePanel) || void 0 === t ? void 0 : t.prev()) || void 0 === t ? void 0 : t.index) && void 0 !== t ? t : -1, e, te.PREV)
			}, t.next = function(e) {
				var t;
				return void 0 === e && (e = this._duration), this.moveTo(null !== (t = null === (t = null === (t = this._control.activePanel) || void 0 === t ? void 0 : t.next()) || void 0 === t ? void 0 : t.index) && void 0 !== t ? t : this._renderer.panelCount, e, te.NEXT)
			}, t.moveTo = function(e, t, n) {
				void 0 === t && (t = this._duration), void 0 === n && (n = te.NONE);
				var i = this._renderer,
					r = i.panelCount,
					i = i.getPanel(e);
				return i ? this._control.animating ? Promise.reject(new ue(K, H.ANIMATION_ALREADY_PLAYING)) : this._control.moveToPanel(i, {
					duration: t,
					direction: n
				}) : Promise.reject(new ue(Y(e, 0, r - 1), H.INDEX_OUT_OF_RANGE))
			}, t.getPanel = function(e) {
				return this._renderer.getPanel(e)
			}, t.enableInput = function() {
				return this._control.enable(), this
			}, t.disableInput = function() {
				return this._control.disable(), this
			}, t.getStatus = function(e) {
				var t = void 0 === e ? {} : e,
					n = t.index,
					i = void 0 === n || n,
					r = t.position,
					e = void 0 === r || r,
					n = t.includePanelHTML,
					o = void 0 !== n && n,
					r = t.visiblePanelsOnly,
					n = void 0 !== r && r,
					t = this._camera,
					r = {
						panels: (n ? this.visiblePanels : this.panels).map(function(e) {
							var t = {
								index: e.index
							};
							return o && (t.html = e.element.outerHTML), t
						})
					};
				return i && (r.index = this.index), !e || (e = t.findNearestAnchor(t.position)) && (r.position = {
					panel: e.panel.index,
					progressInPanel: t.getProgressInPanel(e.panel)
				}), n && (n = this.visiblePanels, r.visibleOffset = null !== (n = null === (n = n[0]) || void 0 === n ? void 0 : n.index) && void 0 !== n ? n : 0), r
			}, t.setStatus = function(e) {
				if (!this._initialized) throw new ue(Q, H.NOT_INITIALIZED);
				var t = e.index,
					n = e.position,
					i = e.visibleOffset,
					r = e.panels,
					o = this._renderer,
					a = this._control;
				null !== (e = r[0]) && void 0 !== e && e.html && !this._renderExternal && (o.batchRemove({
					index: 0,
					deleteCount: this.panels.length,
					hasDOMInElements: !0
				}), o.batchInsert({
					index: 0,
					elements: P(r.map(function(e) {
						return e.html
					})),
					hasDOMInElements: !0
				})), t && this.moveTo(i ? t - i : t, 0).catch(function() {}), n && this._moveType === ne.FREE_SCROLL && (t = n.panel, n = n.progressInPanel, n = (t = o.panels[i ? t - i : t].range).min + (t.max - t.min) * n, a.moveToPosition(n, 0).catch(function() {}))
			}, t.addPlugins = function() {
				for (var e, t = this, n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i];
				return this._initialized && n.forEach(function(e) {
					return e.init(t)
				}), (e = this._plugins).push.apply(e, d([], f(n))), this
			}, t.removePlugins = function() {
				for (var n = this, e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				return e.forEach(function(t) {
					var e = R(n._plugins, function(e) {
						return e === t
					});
					0 <= e && (t.destroy(), n._plugins.splice(e, 1))
				}), this
			}, t.resize = function() {
				return h(this, void 0, void 0, function() {
					var t, n, i, r, o, a, s, u, l;
					return m(this, function(e) {
						switch (e.label) {
							case 0:
								return t = this._viewport, n = this._renderer, i = this._camera, r = this._control, l = r.activePanel, o = t.width, a = t.height, s = l ? i.getProgressInPanel(l) : 0, this.trigger(new M($.BEFORE_RESIZE, {
									width: o,
									height: a,
									element: t.element
								})), t.resize(), [4, n.forceRenderAllPanels()];
							case 1:
								return e.sent(), n.updatePanelSize(), i.updateAlignPos(), i.updateRange(), i.updateAnchors(), [4, n.render()];
							case 2:
								return e.sent(), r.animating || (r.updatePosition(s), r.updateInput()), u = t.width, l = t.height, l = u !== o || l !== a, this.trigger(new M($.AFTER_RESIZE, {
									width: t.width,
									height: t.height,
									prev: {
										width: o,
										height: a
									},
									sizeChanged: l,
									element: t.element
								})), [2]
						}
					})
				})
			}, t.append = function(e) {
				return this.insert(this._renderer.panelCount, e)
			}, t.prepend = function(e) {
				return this.insert(0, e)
			}, t.insert = function(e, t) {
				if (this._renderExternal) throw new ue(J, H.NOT_ALLOWED_IN_FRAMEWORK);
				return this._renderer.batchInsert({
					index: e,
					elements: P(t),
					hasDOMInElements: !0
				})
			}, t.remove = function(e, t) {
				if (void 0 === t && (t = 1), this._renderExternal) throw new ue(J, H.NOT_ALLOWED_IN_FRAMEWORK);
				return this._renderer.batchRemove({
					index: e,
					deleteCount: t,
					hasDOMInElements: !0
				})
			}, t._createControl = function() {
				var e, t = this._moveType,
					n = Object.keys(ne).map(function(e) {
						return ne[e]
					}),
					i = Array.isArray(t) ? t[0] : t,
					r = Array.isArray(t) && null !== (e = t[1]) && void 0 !== e ? e : {};
				if (!T(n, i)) throw new ue(B("moveType", JSON.stringify(t)), H.WRONG_OPTION);
				switch (i) {
					case ne.SNAP:
						return new yi(r);
					case ne.FREE_SCROLL:
						return new bi(r);
					case ne.STRICT:
						return new Ei(r)
				}
			}, t._createCamera = function() {
				var e = {
					align: this._align
				};
				return this._circular ? (this._bound && console.warn('"circular" and "bound" option cannot be used together, ignoring bound.'), new wi(e)) : new(this._bound ? Ri : Ti)(e)
			}, t._createRenderer = function() {
				var e = this._renderExternal;
				return this._virtual && this._panelsPerView <= 0 && console.warn('"virtual" and "panelsPerView" option should be used together, ignoring virtual.'), e ? this._createExternalRenderer() : this._createVanillaRenderer()
			}, t._createVanillaRenderer = function() {
				var e = this.virtualEnabled;
				return new er({
					align: this._align,
					strategy: e ? new ir : new tr({
						providerCtor: _e,
						panelCtor: pe
					})
				})
			}, t._createExternalRenderer = function() {
				var e = this._renderExternal,
					t = e.renderer,
					e = e.rendererOptions;
				return new t(r({
					align: this._align
				}, e))
			}, t._moveToInitialPanel = function() {
				return h(this, void 0, void 0, function() {
					var t, n;
					return m(this, function(e) {
						return n = this._renderer, t = this._control, (n = n.getPanel(this._defaultIndex) || n.getPanel(0)) ? (t.setActive(n, null, !1), [2, t.moveToPanel(n, {
							duration: 0
						})]) : [2]
					})
				})
			}, e.VERSION = "4.4.0", e
		}(z),
		ur = function(e) {
			if ("number" == typeof e) return e + "px";
			switch (e) {
				case ee.CENTER:
					return "50%";
				case ee.NEXT:
					return "100%";
				case ee.PREV:
					return "0%";
				default:
					return e
			}
		},
		ki = {
			__proto__: null,
			withFlickingMethods: function(r, o) {
				[z.prototype, sr.prototype].forEach(function(n) {
					Object.getOwnPropertyNames(n).filter(function(e) {
						return !r[e] && !e.startsWith("_") && "constructor" !== e
					}).forEach(function(e) {
						var t, i = Object.getOwnPropertyDescriptor(n, e);
						i.value ? Object.defineProperty(r, e, {
							value: function() {
								for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
								return (e = i.value).call.apply(e, d([this[o]], f(t)))
							}
						}) : (t = {}, i.get && (t.get = function() {
							var e;
							return null === (e = i.get) || void 0 === e ? void 0 : e.call(this[o])
						}), i.set && (t.set = function() {
							for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
							return null === (e = i.set) || void 0 === e ? void 0 : e.call.apply(e, d([this[o]], f(t)))
						}), Object.defineProperty(r, e, t))
					})
				})
			},
			sync: function(e, n, i) {
				var t, r, o, a, s = e.renderer,
					u = s.panels;
				0 < n.removed.length && (r = t = -1, n.removed.forEach(function(e) {
					t < 0 && (t = e), r = 0 <= r && e !== r - 1 ? (ar(s, r, t + 1), t = e) : e
				}), ar(s, r, t + 1)), n.ordered.forEach(function(e) {
					var t, n = f(e, 2),
						i = n[0],
						r = n[1],
						e = u[i],
						n = r - i;
					0 < n ? (t = u.slice(i + 1, r + 1), e.increaseIndex(n), t.forEach(function(e) {
						return e.decreaseIndex(1)
					})) : (t = u.slice(r, i), e.decreaseIndex(-n), t.forEach(function(e) {
						return e.increaseIndex(1)
					})), e.resize()
				}), 0 < n.ordered.length && u.sort(function(e, t) {
					return e.index - t.index
				}), 0 < n.added.length && (a = o = -1, n.added.forEach(function(e, t) {
					o < 0 && (o = t), a = 0 <= a && e !== a + 1 ? (or(s, n, i, o, t + 1), o = -1) : e
				}), 0 <= o && or(s, n, i, o))
			},
			getRenderingPanels: function(e, t) {
				var n = t.removed.reduce(function(e, t) {
						return e[t] = !0, e
					}, {}),
					i = t.maintained.reduce(function(e, t) {
						var n = f(t, 2),
							t = n[0],
							n = n[1];
						return e[t] = n, e
					}, {});
				return d(d([], f(e.panels.filter(function(e) {
					return !n[e.index]
				}).sort(function(e, t) {
					return e.position + e.offset - (t.position + t.offset)
				}).map(function(e) {
					return t.list[i[e.index]]
				}))), f(t.added.map(function(e) {
					return t.list[e]
				})))
			},
			getDefaultCameraTransform: function(e, t, n) {
				void 0 === t && (t = !0);
				var i, i = (i = "object" == typeof(i = e = void 0 === e ? ee.CENTER : e) ? i.camera : i, ur(i)),
					e = (e = "object" == typeof(e = e) ? e.panel : e, oe(ur(e)));
				if (null == e) return "";
				e = "calc(" + i + " - (" + (n || "0px") + " * " + e.percentage + ") - " + e.absolute + "px)";
				return t ? "translate(" + e + ")" : "translate(0, " + e + ")"
			}
		};
	return e(sr, {
		__proto__: null,
		Viewport: ce,
		FlickingError: ue,
		AnchorPoint: mi,
		VirtualManager: Pe,
		VanillaElementProvider: _e,
		VirtualElementProvider: be,
		Panel: pe,
		ExternalPanel: ve,
		VirtualPanel: me
	}), e(sr, gi), e(sr, qn), e(sr, _n), e(sr, re), e(sr, ki), e(sr, se), sr
});
//# sourceMappingURL=flicking.pkgd.min.js.map