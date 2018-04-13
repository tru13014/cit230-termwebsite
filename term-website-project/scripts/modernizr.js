! function (e, t, n) {
    function r(e, t) {
        return typeof e === t
    }

    function i() {
        var e, t, n, i, o, s, a;
        for (var l in b)
            if (b.hasOwnProperty(l)) {
                if (e = [], t = b[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (i = r(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) s = e[o], a = s.split("."), 1 === a.length ? Modernizr[a[0]] = i : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = i), x.push((i ? "" : "no-") + a.join("-"))
            }
    }

    function o(e) {
        var t = T.className,
            n = Modernizr._config.classPrefix || "";
        if (w && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), w ? T.className.baseVal = t : T.className = t)
    }

    function s() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : w ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function a() {
        var e = t.body;
        return e || (e = s(w ? "svg" : "body"), e.fake = !0), e
    }

    function l(e) {
        return e.replace(/([a-z])-([a-z])/g, function (e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }

    function d(e, n, r, i) {
        var o, l, d, u, f = "modernizr",
            c = s("div"),
            p = a();
        if (parseInt(r, 10))
            for (; r--;) d = s("div"), d.id = i ? i[r] : f + (r + 1), c.appendChild(d);
        return o = s("style"), o.type = "text/css", o.id = "s" + f, (p.fake ? p : c).appendChild(o), p.appendChild(c), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(t.createTextNode(e)), c.id = f, p.fake && (p.style.background = "", p.style.overflow = "hidden", u = T.style.overflow, T.style.overflow = "hidden", T.appendChild(p)), l = n(c, e), p.fake ? (p.parentNode.removeChild(p), T.style.overflow = u, T.offsetHeight) : c.parentNode.removeChild(c), !!l
    }

    function u(e, t) {
        if ("object" == typeof e)
            for (var n in e) k(e, n) && u(n, e[n]);
        else {
            e = e.toLowerCase();
            var r = e.split("."),
                i = Modernizr[r[0]];
            if (2 == r.length && (i = i[r[1]]), "undefined" != typeof i) return Modernizr;
            t = "function" == typeof t ? t() : t, 1 == r.length ? Modernizr[r[0]] = t : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = t), o([(t && 0 != t ? "" : "no-") + r.join("-")]), Modernizr._trigger(e, t)
        }
        return Modernizr
    }

    function f(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function c(e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    }

    function p(e, t, n) {
        var i;
        for (var o in e)
            if (e[o] in t) return n === !1 ? e[o] : (i = t[e[o]], r(i, "function") ? c(i, n || t) : i);
        return !1
    }

    function m(e) {
        return e.replace(/([A-Z])/g, function (e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function h(t, n, r) {
        var i;
        if ("getComputedStyle" in e) {
            i = getComputedStyle.call(e, t, n);
            var o = e.console;
            if (null !== i) r && (i = i.getPropertyValue(r));
            else if (o) {
                var s = o.error ? "error" : "log";
                o[s].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else i = !n && t.currentStyle && t.currentStyle[r];
        return i
    }

    function v(t, r) {
        var i = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; i--;)
                if (e.CSS.supports(m(t[i]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var o = []; i--;) o.push("(" + m(t[i]) + ":" + r + ")");
            return o = o.join(" or "), d("@supports (" + o + ") { #modernizr { position: absolute; } }", function (e) {
                return "absolute" == h(e, null, "position")
            })
        }
        return n
    }

    function g(e, t, i, o) {
        function a() {
            u && (delete q.style, delete q.modElem)
        }
        if (o = r(o, "undefined") ? !1 : o, !r(i, "undefined")) {
            var d = v(e, i);
            if (!r(d, "undefined")) return d
        }
        for (var u, c, p, m, h, g = ["modernizr", "tspan", "samp"]; !q.style && g.length;) u = !0, q.modElem = s(g.shift()), q.style = q.modElem.style;
        for (p = e.length, c = 0; p > c; c++)
            if (m = e[c], h = q.style[m], f(m, "-") && (m = l(m)), q.style[m] !== n) {
                if (o || r(i, "undefined")) return a(), "pfx" == t ? m : !0;
                try {
                    q.style[m] = i
                } catch (y) {}
                if (q.style[m] != h) return a(), "pfx" == t ? m : !0
            }
        return a(), !1
    }

    function y(e, t, n, i, o) {
        var s = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + N.join(s + " ") + s).split(" ");
        return r(t, "string") || r(t, "undefined") ? g(a, t, i, o) : (a = (e + " " + O.join(s + " ") + s).split(" "), p(a, t, n))
    }

    function A(e, t, r) {
        return y(e, n, n, t, r)
    }
    var x = [],
        b = [],
        C = {
            _version: "3.5.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function (e, t) {
                var n = this;
                setTimeout(function () {
                    t(n[e])
                }, 0)
            },
            addTest: function (e, t, n) {
                b.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function (e) {
                b.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function () {};
    Modernizr.prototype = C, Modernizr = new Modernizr, Modernizr.addTest("eventlistener", "addEventListener" in e), Modernizr.addTest("picture", "HTMLPictureElement" in e);
    var T = t.documentElement,
        w = "svg" === T.nodeName.toLowerCase();
    Modernizr.addTest("bgpositionshorthand", function () {
        var e = s("a"),
            t = e.style,
            n = "right 10px bottom 10px";
        return t.cssText = "background-position: " + n + ";", t.backgroundPosition === n
    }), Modernizr.addTest("cssremunit", function () {
        var e = s("a").style;
        try {
            e.fontSize = "3rem"
        } catch (t) {}
        return /rem/.test(e.fontSize)
    }), Modernizr.addTest("hidden", "hidden" in s("a")), Modernizr.addTest("progressbar", s("progress").max !== n), Modernizr.addTest("meter", s("meter").max !== n), Modernizr.addTest("scriptdefer", "defer" in s("script"));
    var _ = s("input"),
        S = "search tel url email datetime date month week time datetime-local number range color".split(" "),
        z = {};
    Modernizr.inputtypes = function (e) {
        for (var r, i, o, s = e.length, a = "1)", l = 0; s > l; l++) _.setAttribute("type", r = e[l]), o = "text" !== _.type && "style" in _, o && (_.value = a, _.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(r) && _.style.WebkitAppearance !== n ? (T.appendChild(_), i = t.defaultView, o = i.getComputedStyle && "textfield" !== i.getComputedStyle(_, null).WebkitAppearance && 0 !== _.offsetHeight, T.removeChild(_)) : /^(search|tel)$/.test(r) || (o = /^(url|email)$/.test(r) ? _.checkValidity && _.checkValidity() === !1 : _.value != a)), z[e[l]] = !!o;
        return z
    }(S);
    var E = C._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    C._prefixes = E, Modernizr.addTest("opacity", function () {
        var e = s("a").style;
        return e.cssText = E.join("opacity:.55;"), /^0.55$/.test(e.opacity)
    });
    var P = C.testStyles = d;
    P("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}", function (e) {
        var t, n = e.childNodes;
        t = n[0].offsetLeft < n[1].offsetLeft, Modernizr.addTest("displaytable", t, {
            aliases: ["display-table"]
        })
    }, 2), Modernizr.addTest("formvalidation", function () {
        var t = s("form");
        if (!("checkValidity" in t && "addEventListener" in t)) return !1;
        if ("reportValidity" in t) return !0;
        var n, r = !1;
        return Modernizr.formvalidationapi = !0, t.addEventListener("submit", function (t) {
            (!e.opera || e.operamini) && t.preventDefault(), t.stopPropagation()
        }, !1), t.innerHTML = '<input name="modTest" required="required" /><button></button>', P("#modernizr form{position:absolute;top:-99999em}", function (e) {
            e.appendChild(t), n = t.getElementsByTagName("input")[0], n.addEventListener("invalid", function (e) {
                r = !0, e.preventDefault(), e.stopPropagation()
            }, !1), Modernizr.formvalidationmessage = !!n.validationMessage, t.getElementsByTagName("button")[0].click()
        }), r
    }), Modernizr.addTest("localizednumber", function () {
        if (!Modernizr.inputtypes.number) return !1;
        if (!Modernizr.formvalidation) return !1;
        var e, n = s("div"),
            r = a(),
            i = function () {
                return T.insertBefore(r, T.firstElementChild || T.firstChild)
            }();
        n.innerHTML = '<input type="number" value="1.0" step="0.1"/>';
        var o = n.childNodes[0];
        i.appendChild(n), o.focus();
        try {
            t.execCommand("SelectAll", !1), t.execCommand("InsertText", !1, "1,1")
        } catch (l) {}
        return e = "number" === o.type && 1.1 === o.valueAsNumber && o.checkValidity(), i.removeChild(n), r.fake && i.parentNode.removeChild(i), e
    });
    var k;
    ! function () {
        var e = {}.hasOwnProperty;
        k = r(e, "undefined") || r(e.call, "undefined") ? function (e, t) {
            return t in e && r(e.constructor.prototype[t], "undefined")
        } : function (t, n) {
            return e.call(t, n)
        }
    }(), C._l = {}, C.on = function (e, t) {
        this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function () {
            Modernizr._trigger(e, Modernizr[e])
        }, 0)
    }, C._trigger = function (e, t) {
        if (this._l[e]) {
            var n = this._l[e];
            setTimeout(function () {
                var e, r;
                for (e = 0; e < n.length; e++)(r = n[e])(t)
            }, 0), delete this._l[e]
        }
    }, Modernizr._q.push(function () {
        C.addTest = u
    }), Modernizr.addAsyncTest(function () {
        var e, t, n, r = s("img"),
            i = "sizes" in r;
        !i && "srcset" in r ? (t = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==", e = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", n = function () {
            u("sizes", 2 == r.width)
        }, r.onload = n, r.onerror = n, r.setAttribute("sizes", "9px"), r.srcset = e + " 1w," + t + " 8w", r.src = e) : u("sizes", i)
    }), Modernizr.addTest("placeholder", "placeholder" in s("input") && "placeholder" in s("textarea"));
    var L = "Moz O ms Webkit",
        N = C._config.usePrefixes ? L.split(" ") : [];
    C._cssomPrefixes = N;
    var B = function (t) {
        var r, i = E.length,
            o = e.CSSRule;
        if ("undefined" == typeof o) return n;
        if (!t) return !1;
        if (t = t.replace(/^@/, ""), r = t.replace(/-/g, "_").toUpperCase() + "_RULE", r in o) return "@" + t;
        for (var s = 0; i > s; s++) {
            var a = E[s],
                l = a.toUpperCase() + "_" + r;
            if (l in o) return "@-" + a.toLowerCase() + "-" + t
        }
        return !1
    };
    C.atRule = B;
    var O = C._config.usePrefixes ? L.toLowerCase().split(" ") : [];
    C._domPrefixes = O;
    var j = {
        elem: s("modernizr")
    };
    Modernizr._q.push(function () {
        delete j.elem
    });
    var q = {
        style: j.elem.style
    };
    Modernizr._q.unshift(function () {
        delete q.style
    });
    var V = C.testProp = function (e, t, r) {
        return g([e], n, t, r)
    };
    Modernizr.addTest("textshadow", V("textShadow", "1px 1px")), C.testAllProps = y;
    var M = C.prefixed = function (e, t, n) {
        return 0 === e.indexOf("@") ? B(e) : (-1 != e.indexOf("-") && (e = l(e)), t ? y(e, t, n) : y(e, "pfx"))
    };
    Modernizr.addTest("fullscreen", !(!M("exitFullscreen", t, !1) && !M("cancelFullScreen", t, !1))), Modernizr.addTest("requestautocomplete", !!M("requestAutocomplete", s("form"))), C.testAllProps = A, Modernizr.addTest("backgroundsize", A("backgroundSize", "100%", !0)), Modernizr.addTest("borderimage", A("borderImage", "url() 1", !0)), Modernizr.addTest("boxshadow", A("boxShadow", "1px 1px", !0)), Modernizr.addTest("boxsizing", A("boxSizing", "border-box", !0) && (t.documentMode === n || t.documentMode > 7)), Modernizr.addTest("flexbox", A("flexBasis", "1px", !0)), Modernizr.addTest("flexboxlegacy", A("boxDirection", "reverse", !0)), Modernizr.addTest("flexboxtweener", A("flexAlign", "end", !0)), Modernizr.addTest("flexwrap", A("flexWrap", "wrap", !0)), Modernizr.addTest("csstransitions", A("transition", "all", !0)), i(), o(x), delete C.addTest, delete C.addAsyncTest;
    for (var R = 0; R < Modernizr._q.length; R++) Modernizr._q[R]();
    e.Modernizr = Modernizr
}(window, document);