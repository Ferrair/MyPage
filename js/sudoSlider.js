/* Sudo Slider v. 3.2.2 ( http://webbies.dk/SudoSlider/ ), licenced under GPL and MIT license */
(function (f, ua) {
    function T(a, b, d, s, g) {
        if (f.isFunction(b))s ? T(a, ["", "Up", "Right", "Down", "Left", b], d, 0, g) : a[d] = function (a) {
            var d = [a].concat(g), l = d.length - 1;
            if (0 === s && 0 == d[l]) {
                var f = a.diff;
                d[l] = a.options.vertical ? 0 > f ? 1 : 3 : 0 > f ? 2 : 4
            }
            b.apply(this, d)
        }; else if (f.isArray(b))for (var k = b.length - 1, q = b[k], p = 0; p < k; p++) {
            var h = g.slice();
            h.push(p);
            T(a, q, d + b[p], s, h)
        } else f.each(b, function (b, f) {
            T(a, f, d + b, s, g)
        })
    }

    function U(a, b, l, g, m, k, q, p) {
        var h = a.options, C = h.ease, w = h.boxrows, x = h.boxcols, n = w * x, t = h.speed / (1 == n ? 1 : 2.5), v =
            va(a, x, w, !p), F = h = 0, P = 0, E = [];
        E[F] = [];
        b && da(v);
        m && ea(v);
        v.each(function () {
            E[F][P] = this;
            P++;
            P == x && (l && da(E[F]), F++, P = 0, E[F] = [])
        });
        m = [];
        if (1 == k)for (v = 0; v < 2 * x + 1; v++) {
            k = v;
            for (var n = [], u = 0; u < w; u++) {
                if (0 <= k && k < x) {
                    var A = E[u][k];
                    if (!A)return;
                    n.push(A)
                }
                k--
            }
            0 != n.length && m.push(n)
        } else if (2 == k) {
            k = w / 2;
            for (var B = b ? n : -1, y = b ? -1 : 1, A = 0; A < k; A++) {
                for (n = u = A; n < x - A - 1; n++)m[B += y] = v.eq(u * x + n);
                n = x - A - 1;
                for (u = A; u < w - A - 1; u++)m[B += y] = v.eq(u * x + n);
                u = w - A - 1;
                for (n = x - A - 1; n > A; n--)m[B += y] = v.eq(u * x + n);
                n = A;
                for (u = w - A - 1; u > A; u--)m[B += y] = v.eq(u *
                    x + n)
            }
        } else for (v = 0; v < w; v++)for (k = 0; k < x; k++)m.push([E[v][k]]);
        p && a.goToNext();
        for (var G = 0, w = 0; w < m.length; w++) {
            v = m[w];
            for (k = 0; k < v.length; k++)(function (f, k) {
                var h = f.children(), m = f.width(), n = f.height(), x = Y(f.css("left")), u = Y(f.css("top")), v = x, w = u, P = Y(h.css("left")), y = Y(h.css("top")), F = P, E = y;
                if (q) {
                    var A = b != l ? -m : m, B = b ? -n : n;
                    p ? (v -= 1.5 * A, w -= 1.5 * B) : f.css({left: x + 1.5 * A, top: u + 1.5 * B})
                }
                g && (p ? (F -= m / 2, v += m / 2, E -= n / 2, w += n / 2, n = m = 0) : (f.css({
                    left: x + m / 2,
                    top: u + n / 2
                }), h.css({left: P - m / 2, top: y - n / 2}), f.width(0).height(0)));
                p && f.css({opacity: 1});
                G++;
                setTimeout(function () {
                    L(h, {left: F, top: E}, t, C, d, a);
                    L(f, {opacity: p ? 0 : 1, width: m, height: n, left: v, top: w}, t, C, function () {
                        G--;
                        0 == G && a.callback()
                    }, a)
                }, k)
            })(f(v[k]), h);
            h += t / m.length * 1.5
        }
    }

    function Q(a, b, l, s, m, k, q, p) {
        var h = a.options, C = h.slices, w = h.speed / 2, x = h.ease, h = a.slider, n = va(a, b ? C : 1, b ? 1 : C, !p), t = 0, v = d;
        l ? da(n) : f(da(n.get())).appendTo(h);
        s && ea(n);
        n.each(function (s) {
            s *= w / C;
            var h = f(this), n = h.width(), u = h.height(), A = h.css("left"), B = h.css("top"), y = b ? A : B, G = h.children()[b ? "width" : "height"]();
            1 == k ? y = 0 : 2 == k && (y = G / 2);
            l && (y = G - y);
            b ? h.css({width: m || q ? n : 0, left: y}) : h.css({height: m || q ? u : 0, top: y});
            p && (y = 1 == q ? -1 : 1, h.css({
                top: B,
                left: A,
                width: n,
                height: u,
                opacity: 1
            }), b ? B = y * u : A = y * n);
            q && (y = g, 3 == q ? v = v ? y = d : g : 2 == q && (y = d), b ? p ? B = (y ? -1 : 1) * u : h.css({
                bottom: y ? 0 : u,
                top: y ? u : 0,
                height: p ? u : 0
            }) : p ? A = (y ? -1 : 1) * n : h.css({right: y ? 0 : n, left: y ? n : 0, width: p ? n : 0}));
            t++;
            setTimeout(function () {
                L(h, {width: n, height: u, opacity: p ? 0 : 1, left: A, top: B}, w, x, function () {
                    t--;
                    0 == t && a.callback()
                }, a)
            }, s)
        });
        p && a.goToNext()
    }

    function la(a, b, l) {
        var f = 2 ==
            l || 4 == l;
        l = 2 == l || 3 == l ? 1 : -1;
        var m = a.options, k = m.ease, m = m.speed;
        if (b) {
            b = a.fromSlides;
            var q = V(a, g).hide();
            q.prependTo(a.slider);
            var p = W(q.height(), b.height()), h = W(q.width(), b.width());
            q.css(f ? {left: l * h} : {top: l * p}).show();
            L(q, {left: 0, top: 0}, m, k, a.callback, a)
        } else b = V(a, d), b.prependTo(a.slider), a.goToNext(), q = a.toSlides, q = -1 == l ? b : q, p = q.height(), h = q.width(), L(b, f ? {left: l * h} : {top: l * p}, m, k, a.callback, a)
    }

    function L(a, b, l, f, m, k, q) {
        function p() {
            if (!q) {
                var b = {};
                b[x] = "0s";
                b[n] = "";
                b[w] = "";
                a.css(b)
            }
        }

        var h = !k || k.options.usecss;
        if (X !== d && h) {
            var C = {}, w = X + "transition", h = wa(b);
            C[w] = h.join(" ") + ("" == X ? "" : " " + X + h.join(" " + X));
            var x = w + "-duration";
            C[x] = l + "ms";
            var n = w + "-timing-function";
            "swing" == f && (f = "ease-in-out");
            C[n] = f;
            k && k.stopCallbacks.push(p);
            f = X.replace(/\-/g, "");
            var t = f + ((f ? "T" : "t") + "ransitionend") + " transitionend", v = d, F = function () {
                v || (v = g, a.unbind(t), p(), m && m())
            };
            M(function () {
                20 > l ? (a.css(b), F()) : (a.css(C), M(function () {
                    a.css(b);
                    a.on(t, function (b) {
                        a.is(b.target) && F()
                    });
                    setTimeout(F, l + 100)
                }))
            });
            return F
        }
        a.animate(b, l, f, m)
    }

    function ma(a, b) {
        var d = a.options;
        d.boxcols = 1;
        d.boxrows = 1;
        d.speed = b;
        U(a)
    }

    function va(a, b, l, s) {
        for (var m = a.slider, k = f(), q, p, h = g, t = 0; t < l; t++)for (var w = 0; w < b; w++) {
            var x = V(a, s);
            h && (h = d, q = Math.ceil(x.width() / b), p = Math.ceil(x.height() / l));
            x = na(x, p * t, q * w, p, q, a);
            m.append(x);
            k = k.add(x)
        }
        return k
    }

    function na(a, b, d, g, m, k) {
        a.css({width: a.width(), height: a.height(), display: "block", top: -b, left: -d});
        b = f("<div>").css({
            left: d,
            top: b,
            width: m,
            height: g,
            opacity: 0,
            overflow: "hidden",
            position: Z,
            zIndex: k.options.animationzindex
        });
        b.append(a).addClass(oa);
        return b
    }

    function V(a, b) {
        var d = b ? a.toSlides : a.fromSlides, s = d.eq(0).position(), m = s.left, k = s.top, q = 0, p = 0, h = f("<div>").css({
            zIndex: a.options.animationzindex,
            position: Z,
            top: 0,
            left: 0
        }).addClass(oa);
        d.each(function (a, b) {
            var d = f(b), l = d.outerWidth(g), s = d.outerHeight(g), v = d.clone(), t = d.position(), d = t.left - m, t = t.top - k;
            v.css({position: Z, left: d, top: t, opacity: 1});
            q = W(q, t + s);
            p = W(p, d + l);
            h.append(v)
        });
        h.width(p).height(q);
        return h
    }

    function $a(a) {
        for (var b = f.fn.jquery.split("."), l = b.length,
                 s = 0; s < l; s++)if (a[s] && +b[s] < +a[s])return d;
        return g
    }

    function wa(a) {
        var b = [], d;
        for (d in a)b.push(d);
        return b
    }

    function M(a) {
        setTimeout(a, 0)
    }

    function da(a) {
        return [].reverse.call(a)
    }

    function xa(a) {
        return a.children().not("." + oa)
    }

    function fa(a) {
        var b = {}, d;
        for (d in a)b[d.toLowerCase()] = a[d];
        return b
    }

    function ea(a) {
        for (var b, d, f = a.length; f; b = parseInt(Math.random() * f), d = a[--f], a[f] = a[b], a[b] = d);
        return a
    }

    function t(a) {
        return parseInt(a, 10)
    }

    function Y(a) {
        return parseFloat(a)
    }

    function pa(a) {
        return 0 > a ? -a : a
    }

    function W(a,
               b) {
        return a > b ? a : b
    }

    function qa(a) {
        if (f.isArray(a))return $(a);
        if (f.isFunction(a))return a;
        a = a.replace(/^\s+|\s+$/g, "");
        if (-1 != a.indexOf(",")) {
            var b = a.split(",");
            return $(b)
        }
        var d = fa(f.fn.sudoSlider.effects);
        a = a.toLowerCase();
        if (b = d[a])return b;
        var b = [], g;
        for (g in d)0 == g.indexOf(a) && b.push(d[g]);
        return b.length ? $(b) : ab
    }

    function $(a) {
        return function (b) {
            var d = a[ea(wa(a))[0]];
            return qa(d)(b)
        }
    }

    var d = !1, g = !0, Ka = "pages", aa = "next", ga = "prev", bb = "last", cb = "first", Z = "absolute", N = function () {
    }, oa = "sudo-box", X =
        function () {
            var a;
            a:{
                var b = f("<div>")[0].style;
                for (a in b)if (b = a.toLowerCase(), -1 !== b.indexOf("transition", b.length - 10))break a;
                a = d
            }
            if (a === d)return d;
            a = a.slice(0, a.length - 10);
            return 0 != a.length ? "-" + a + "-" : ""
        }();
    f.fn.sudoSlider = function (a) {
        var b = this;
        a = f.extend(fa({
            effect: "slide",
            speed: 1500,
            customLink: d,
            controlsShow: g,
            controlsFadeSpeed: 400,
            controlsFade: g,
            insertAfter: g,
            vertical: d,
            slideCount: 1,
            moveCount: 1,
            startSlide: 1,
            responsive: d,
            ease: "swing",
            auto: d,
            pause: 2E3,
            resumePause: d,
            continuous: d,
            prevNext: g,
            numeric: d,
            numericText: [],
            slices: 15,
            boxCols: 8,
            boxRows: 4,
            initCallback: N,
            ajaxLoad: N,
            beforeAnimation: N,
            afterAnimation: N,
            history: d,
            autoHeight: g,
            autoWidth: g,
            updateBefore: d,
            ajax: d,
            preloadAjax: 100,
            loadingText: "",
            prevHtml: '<a href="#" class="prevBtn"> previous </a>',
            nextHtml: '<a href="#" class="nextBtn"> next </a>',
            controlsAttr: 'id="controls"',
            numericAttr: 'class="controls"',
            animationZIndex: 1E4,
            interruptible: d,
            useCSS: g,
            loadStart: N,
            loadFinish: N
        }), fa(a));
        X !== d && $a([1, 8, 0]) || (a.usecss = d);
        return this.each(function () {
            function l() {
                var c =
                    0, a;
                for (a in ba)e[c] = ba[a], c++;
                O = g;
                ya = [];
                La = [];
                za = [];
                ra = [];
                Aa = [];
                H = xa(I);
                c = H.length;
                a = f("<div></div>");
                c ? (Ba = H.is("ul")) || Ra || (a.append(H), I.append(H = a)) : (I.append(H = a), Ba = d);
                Ra = g;
                c = xa(H);
                D = [];
                z = c.length;
                c.each(function (c, a) {
                    D[c] = f(a)
                });
                if (e[31] && (a = e[31].length, a > z)) {
                    for (c = 1; c <= a - z; c++) {
                        var b;
                        b = Ba ? "li" : "div";
                        b = f("<" + b + ">" + e[33] + "</" + b + ">");
                        H.append(b);
                        D[z + (c - 1)] = b
                    }
                    c = xa(H);
                    z = a
                }
                c.each(function (c, a) {
                    ya[c] = d;
                    E(f(a), g, function () {
                        ya[c] = g
                    })
                });
                r = R === d ? 0 : R;
                S = g;
                Ca = [];
                sa = d;
                I.css({overflow: "hidden"});
                "static" ==
                I.css("position") && I.css({position: "relative"});
                c.css({"float": "left", listStyle: "none"});
                H.add(c).css({display: "block", position: "relative", margin: "0"});
                e[8] = t(e[8]);
                K = e[8];
                e[8] += e[9] - 1;
                e[10] = t(e[10]) - 1 || 0;
                e[0] = qa(e[0]);
                for (c = 0; c < z; c++)e[19][c] || "" == e[19][c] || (e[19][c] = c + 1), e[31][c] = e[31][c] || d;
                e[5] = e[5] && !e[16];
                e[11] && m(g);
                H[e[7] ? "height" : "width"](9E6);
                e[29] = e[29] && !e[11];
                if (e[11])f(ua).on("resize focus", m);
                if (e[3]) {
                    ha = f("<span " + e[36] + "></span>");
                    I[e[6] ? "after" : "before"](ha);
                    if (e[18])for (Ma = f("<ol " +
                        e[37] + "></ol>"), ha.prepend(Ma), b = (a = e[18] == Ka) ? K : 1, c = 0; c < z - (e[16] || a ? 1 : K) + 1; c += b)Ca[c] = f("<li data-target='" + (c + 1) + "'><a href='#'><span>" + e[19][c] + "</span></a></li>").appendTo(Ma).click(function () {
                        n(k(this) - 1, g);
                        return d
                    });
                    e[17] && (na = x(e[35], aa), Sa = x(e[34], ga))
                }
                c = [4, 1, 14];
                for (a = 0; a < c.length; a++)e[c[a]] = w(e[c[a]]);
                if (e[2])f(document).on("click", e[2], s);
                E(ma(e[10], e[8]), g, function () {
                    if (R !== d)Da(R, d); else if (e[27]) {
                        var c = f(ua), a;
                        if (a = c.hashchange)a(q); else if (a = f.address)a.change(q); else c.on("hashchange",
                            q);
                        q()
                    } else Da(e[10], d);
                    F(r)
                });
                e[31][e[10]] && ja(e[10]);
                if (e[32] === g)for (a = 0; a < z; a++)e[31][a] && e[10] != a && ja(a); else p()
            }

            function s() {
                var c;
                if (c = k(this))"stop" == c ? (e[13] = d, C()) : "start" == c ? (h(), e[13] = g) : "block" == c ? S = d : "unblock" == c ? S = g : n(c == t(c) ? c - 1 : c, g);
                return d
            }

            function m(c) {
                function a() {
                    if (I.is(":visible") && !O || c) {
                        for (var b = D[r].width(), d = I.width() / K, e = 0; e < z; e++)D[e].width(d);
                        b != d && (ta(), Ja(), G(r), u(r, 0))
                    }
                }

                a();
                M(a)
            }

            function k(c) {
                c = f(c);
                return c.attr("data-target") || c.attr("rel")
            }

            function q() {
                var c;
                a:{
                    c = location.hash.substr(1);
                    for (var a = 0; a < e[19].length; a++)if (e[19][a] == c) {
                        c = a;
                        break a
                    }
                    c = c ? r : 0
                }
                O ? Da(c, d) : n(c, d)
            }

            function p() {
                if (e[32] !== d) {
                    var c = t(e[32]);
                    if (e[31])for (var a = 0; a < e[31].length; a++)if (e[31][a]) {
                        clearTimeout(Ea);
                        Ea = setTimeout(function () {
                            e[31][a] ? ja(t(a)) : p()
                        }, c);
                        break
                    }
                }
            }

            function h(c) {
                void 0 === c && (c = D[r].attr("data-pause"), c = void 0 !== c ? t(c) : e[14]);
                C();
                Fa = g;
                Ta = setTimeout(function () {
                    Fa && n(aa, d)
                }, c)
            }

            function C(c) {
                clearTimeout(Ta);
                c || (Fa = d)
            }

            function w(c) {
                return t(c) || 0 == c ? t(c) : "fast" == c ? 200 :
                    "normal" == c || "medium" == c ? 400 : "slow" == c ? 600 : 400
            }

            function x(c, a) {
                return f(c).prependTo(ha).click(function () {
                    n(a, g);
                    return d
                })
            }

            function n(c, a, b) {
                if (S && !O)C(g), sa || va(c, a, b); else if (e[39] && ia)ta(), n(c, a, b); else if (Ga = c, Ua = a, Va = b, e[31])for (a = c = Y(c); a < c + K; a++)e[31][a] && ja(J(a))
            }

            function Q(c, a, b) {
                function g() {
                    c || 0 != l.css("opacity") || l.css({visibility: "hidden"})
                }

                c = c ? 1 : 0;
                var l = f();
                e[3] && e[17] && (l = b ? na : Sa);
                if (e[2]) {
                    var h = f(e[2]);
                    b = '="' + (b ? aa : ga) + '"]';
                    h = h.filter("[rel" + b + ", [data-target" + b + "");
                    l = l.add(h)
                }
                h =
                {opacity: c};
                c && l.css({visibility: "visible"});
                e[40] ? L(l, h, a, e[12], g) : l.animate(h, {queue: d, duration: a, easing: e[12], callback: g})
            }

            function v(c, a) {
                Q(c, a, d);
                Q(c < z - K, a, g)
            }

            function F(c) {
                c = J(c) + 1;
                e[18] != Ka || c != z - K + 1 || e[16] || (c = z);
                if (e[18])for (var a = 0; a < Ca.length; ++a)P(Ca[a], c);
                e[2] && P(f(e[2]), c)
            }

            function P(c, a) {
                c && c.filter && (c.filter(".current").removeClass("current"), c.filter(function () {
                    var c = k(this);
                    if (e[18] == Ka)for (var b = K - 1; 0 <= b; b--) {
                        if (c == a - b)return g
                    } else return c == a;
                    return d
                }).addClass("current"))
            }

            function E(c, a, b) {
                c = c.add(c.find("img")).filter("img");
                var d = c.length;
                d ? c.each(function () {
                    var c = this;
                    f(c).on("load error", function () {
                        f(c).off("load error");
                        c.naturalHeight && !c.clientHeight && f(c).height(c.naturalHeight).width(c.naturalWidth);
                        a ? (d--, 0 == d && b()) : b()
                    });
                    if ("complete" == c.readyState)f(c).trigger("load"); else if (c.readyState)c.src = c.src; else if (c.complete)f(c).trigger("load"); else if (void 0 === c.complete) {
                        var e = c.src;
                        c.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
                        c.src = e
                    }
                }) : b()
            }

            function u(c, a) {
                Wa = c = J(c);
                Na = +new Date + a;
                (e[28] || e[29]) && A(c)
            }

            function A(c) {
                I.ready(function () {
                    y(c);
                    E(D[c], d, function () {
                        y(c)
                    })
                })
            }

            function B(c, a) {
                for (var b = 0, d = c; d < c + K; d++)var f = D[J(d)]["outer" + (a ? "Height" : "Width")](g), b = a == e[7] ? b + f : W(f, b);
                return b
            }

            function y(c) {
                if (c == Wa && I.is(":visible") && !O) {
                    var a = Na - +new Date, a = W(a, 0), b = {};
                    e[28] && (b.height = B(c, g) || 1);
                    e[29] && (b.width = B(c, d) || 1);
                    e[40] ? L(I, b, a, e[12]) : 0 == a ? I.stop().css(b) : I.animate(b, {
                        queue: d,
                        duration: a,
                        easing: e[12]
                    })
                }
            }

            function G(c) {
                var a =
                    N(c, d);
                c = N(c, g);
                e[40] ? H.css({transform: "translate(" + a + "px, " + c + "px)"}) : (H.css({
                    marginLeft: 0,
                    marginTop: 0
                }), H.css({marginLeft: a, marginTop: c}))
            }

            function N(c, a) {
                var b = D[J(c)];
                return b.length ? -b.position()[a ? "top" : "left"] : 0
            }

            function T() {
                if (Ga !== d) {
                    var c = Ga;
                    Ga = d;
                    M(function () {
                        n(c, Ua, Va)
                    })
                }
            }

            function U(c, a, b) {
                c = J(c);
                var d = function () {
                    (a ? ca : da)(D[c], c + 1)
                };
                b ? d() : M(d)
            }

            function ca(c, a) {
                e[26].call(c, a)
            }

            function da(c, a) {
                e[25].call(c, a)
            }

            function Y(c) {
                return c == aa ? V(r + e[9], c) : c == ga ? V(r - e[9], c) : c == cb ? 0 : c == bb ? z - 1 : V(t(c),
                    c)
            }

            function V(c, a) {
                if (e[16])return a == aa || a == ga ? c : J(c);
                var b = z - K;
                return c > b ? r == b && a == aa ? 0 : b : 0 > c ? 0 == r && a == ga ? b : 0 : c
            }

            function ja(c, a) {
                function b() {
                    var a = new Image;
                    a.src = h;
                    var d = f(a);
                    E(d, g, function () {
                        ka(function () {
                            var b = "";
                            d.height() || (b = 20);
                            d.height(b).width(b);
                            k.empty().append(a);
                            $(c, g)
                        })
                    })
                }

                if (a) {
                    var l = za[c];
                    l || (l = za[c] = []);
                    l.push(a)
                }
                if (Aa[c])a && E(c, g, function () {
                    M(a)
                }); else if (!ra[c]) {
                    ra[c] = g;
                    Ea && clearTimeout(Ea);
                    var h = e[31][c], k = D[c], m = d;
                    f.ajax({
                        url: h, success: function (a, e, f) {
                            m = g;
                            ka(function () {
                                var e =
                                    f.getResponseHeader("Content-Type");
                                e && "i" != e.substr(0, 1) ? (k.html(a), $(c, d)) : b()
                            })
                        }, complete: function () {
                            m || b()
                        }
                    });
                    e[31][c] = d;
                    ba.ajax[c] = d
                }
            }

            function ka(c) {
                ia ? La.push(c) : M(c)
            }

            function $(c, a) {
                var b = D[c];
                G(r);
                u(r, 0);
                E(b, g, function () {
                    ka(function () {
                        G(r);
                        u(r, 0);
                        Aa[c] = g;
                        var b = za[c];
                        b && Z(b);
                        p();
                        M(function () {
                            e[24].call(D[c], t(c) + 1, a)
                        });
                        O && (O = d, M(ea))
                    })
                })
            }

            function ea() {
                e[16] && Oa(r, 0);
                u(r, 0);
                G(r);
                T();
                e[11] && m();
                e[13] && h();
                e[23].call(b);
                E(ma(r, z), d, function () {
                    ka(function () {
                        u(r, 0);
                        G(r)
                    })
                })
            }

            function Z(c) {
                for (; c.length;)c.splice(0,
                    1)[0]()
            }

            function fa(c) {
                return ya[c] ? e[31] ? e[31][c] || ra[c] && !Aa[c] : g : d
            }

            function va(c, a, f) {
                var g = Y(c), l = c == aa || c == ga;
                c = J(g);
                if (c != r)if (S = d, e[31]) {
                    for (var h = 0, k = c; k < c + K; k++)fa(k) && (h++, ja(J(k), function () {
                        h--;
                        0 == h && (e[42].call(b, g + 1), Pa(g, f, a, l))
                    }));
                    0 == h ? Pa(g, f, a, l) : e[41].call(b, g + 1)
                } else Pa(g, f, a, l)
            }

            function Ja() {
                e[40] && H.css(X + "transition-duration", "")
            }

            function la(c) {
                if (J(c) != Xa) {
                    for (var a = 0; a < z; a++)if (!fa(a))return;
                    Xa = c;
                    Ja();
                    for (a = 0; a < z; a++) {
                        var b = D[J(c + a)];
                        H.append(b)
                    }
                    G(r)
                }
            }

            function Oa(c, a) {
                var b =
                    W(t((z - a - K) / 2), 0);
                c = ((c - b) % z + z) % z;
                la(c)
            }

            function wa(c) {
                var a = c < r ? c : r;
                c = pa(c - r);
                Oa(a, c)
            }

            function Pa(a, l, h, k) {
                e[30] && F(a);
                e[27] && h && (ua.location.hash = e[19][a]);
                e[5] && v(a, e[4]);
                for (var m = f(), n = f(), s = 0; s < K; s++)m = m.add(D[J(r + s)]), n = n.add(D[J(a + s)]);
                var s = -r + a, p;
                if (e[16] && !k) {
                    k = pa(s);
                    p = a;
                    var q = -r + a + z;
                    pa(q) < k && (p = a + z, s = q, k = pa(s));
                    q = -r + a - z;
                    pa(q) < k && (p = a - z, s = q)
                } else p = a;
                e[16] && wa(p);
                k = N(p, d);
                var q = N(p, g), w = D[J(a)], x = f.extend(g, {}, ba), y = e[1], A = w.attr("data-speed");
                void 0 != A && (y = t(A));
                void 0 != l && (y = t(l));
                x.speed =
                    y;
                var C = e[0];
                (l = w.attr("data-effect")) && (C = qa(l));
                (l = D[r].attr("data-effectout")) && (C = qa(l));
                ia = g;
                Ya = C;
                var B = g;
                Za = function () {
                    B = ia = d;
                    Da(a, h);
                    screen.fontSmoothingEnabled && n.style && n.style.removeAttribute("filter");
                    e[16] && Oa(p, 0);
                    U(a, g);
                    Z(La)
                };
                Qa = {
                    fromSlides: m,
                    toSlides: n,
                    slider: I,
                    options: x,
                    to: a + 1,
                    from: r + 1,
                    diff: s,
                    target: {left: k, top: q},
                    stopCallbacks: [],
                    callback: function () {
                        B && (B = d, ta())
                    },
                    goToNext: function () {
                        B && E(f("." + oa, I), g, function () {
                            G(a)
                        })
                    }
                };
                u(a, y);
                M(function () {
                    U(a, d, g);
                    C.call(b, Qa)
                })
            }

            function ta() {
                if (ia) {
                    Za();
                    Z(Qa.stopCallbacks);
                    var a = Ya.stop;
                    a ? a() : (f("." + oa, I).remove(), H.stop());
                    u(r, 0);
                    G(r)
                }
            }

            function Da(a, b) {
                S = !b && !e[13];
                r = a;
                u(r, 0);
                r = J(r);
                e[30] || F(r);
                G(r);
                S = g;
                e[13] && (b ? (C(), e[15] && h(e[15])) : O || h());
                T();
                e[5] && O && v(r, 0);
                !O || e[31][r] || ra[r] || (O = d, M(ea))
            }

            function ma(a, b) {
                for (var d = f(), e = 0; e < b; e++)d = d.add(D[J(a + e)]);
                return d
            }

            function J(a) {
                return (a % z + z) % z
            }

            function Ha() {
                ta();
                sa = g;
                R = r;
                e[11] && f(ua).off("resize focus", m);
                Ja();
                ha && ha.remove();
                f(document).off("click", e[2], s);
                la(0);
                G(r);
                u(r, 0)
            }

            function Ia() {
                sa && l()
            }

            var O, Ba, H, D, ya, z, r, S, Ca, Ma, sa, R = d, ha, na, Sa, Ta, Fa, K, Ea, I = f(this), Wa, Na = 0, ia = d, Ya, Za, Qa, La, za, ra, Aa, Ga = d, Ua, Va, Ra = d, e = [], ba = {};
            f.extend(g, ba, a);
            var Xa = 0;
            b.destroy = Ha;
            b.init = Ia;
            b.getOption = function (a) {
                return ba[a.toLowerCase()]
            };
            b.setOption = function (a, b) {
                Ha();
                ba[a.toLowerCase()] = b;
                Ia()
            };
            b.runWhenNotAnimating = ka;
            b.insertSlide = function (a, b, d, l) {
                Ha();
                b > z && (b = z);
                a = f(a || "<div>");
                Ba ? a = f("<li>").prepend(a) : 1 != a.length && (a = f("<div>").prepend(a));
                b && 0 != b ? D[b - 1].after(a) : H.prepend(a);
                l ? R = l - 1 : (b <= R || !b || 0 == b) &&
                R++;
                e[19].length < b && (e[19].length = b);
                e[19].splice(b, 0, d || t(b) + 1);
                Ia()
            };
            b.removeSlide = function (a) {
                a--;
                Ha();
                D[a].remove();
                e[19].splice(a, 1);
                a < R && R--;
                Ia()
            };
            b.goToSlide = function (a, b) {
                var d = a == t(a) ? a - 1 : a;
                M(function () {
                    n(d, g, b)
                })
            };
            b.block = function () {
                S = d
            };
            b.unblock = function () {
                S = g
            };
            b.startAuto = function () {
                e[13] = g;
                h()
            };
            b.stopAuto = function () {
                e[13] = d;
                C()
            };
            b.adjust = function () {
                var a = W(Na - +new Date, 0);
                u(r, a);
                ia || G(r)
            };
            b.getValue = function (a) {
                return {
                    currentslide: r + 1,
                    totalslides: z,
                    clickable: S,
                    destroyed: sa,
                    autoanimation: Fa
                }[a.toLowerCase()]
            };
            b.getSlide = function (a) {
                return D[J(t(a) - 1)]
            };
            b.stopAnimation = ta;
            l()
        })
    };
    var ca = {};
    T(ca, {
        blinds: ["1", "2", function (a, b, f) {
            b++;
            Q(a, 2 == f || 4 == f, 1 == f || 4 == f, d, d, b)
        }], fold: function (a, b) {
            Q(a, 2 == b || 4 == b, 1 == b || 4 == b)
        }, push: ["Out", "In", la], reveal: function (a, b) {
            var f = 1 == b || 3 == b, s = a.options, m = s.ease, s = s.speed, k = V(a, g), q = k.width(), p = k.height(), h = na(k, 0, 0, 0, 0, a).css({opacity: 1}).appendTo(a.slider), t = h.add(k);
            t.hide();
            f ? (h.css({width: q}), 1 == b && (k.css({top: -p}), h.css({
                bottom: 0,
                top: "auto"
            }))) : (h.css({height: p}), 4 == b &&
            (k.css({left: -q}), h.css({right: 0, left: "auto"})));
            t.show();
            f ? t.width(q) : t.height(p);
            L(k, {left: 0, top: 0}, s, m, d, a);
            L(h, {width: q, height: p}, s, m, a.callback, a)
        }, slice: {
            "": ["", "Reveal", ["", "Reverse", "Random", function (a, b, f, g) {
                Q(a, 1 == g || 3 == g, f, 2 == f, d, 0, 1 == g || 4 == g ? 1 : 2, b)
            }]], Fade: function (a, b) {
                Q(a, 2 == b || 4 == b, 1 == b || 4 == b, d, g)
            }
        }, zip: function (a, b) {
            Q(a, 2 == b || 4 == b, 1 == b || 4 == b, d, d, 0, 3)
        }, unzip: function (a, b) {
            Q(a, 2 == b || 4 == b, 1 == b || 4 == b, d, d, 0, 3, g)
        }
    }, "", g, []);
    T(ca, {
        box: {
            Random: ["", "GrowIn", "GrowOut", function (a, b) {
                U(a, d, d,
                    b, g, 0, d, 2 == b)
            }],
            Rain: ["", "GrowIn", "GrowOut", "FlyIn", "FlyOut", ["UpLeft", "DownLeft", "DownRight", "UpRight", function (a, b, f) {
                U(a, 0 == f || 3 == f, 1 == f || 3 == f, 1 == b || 2 == b, d, 1, 3 == b || 4 == b, 4 == b || 2 == b)
            }]],
            Spiral: ["InWards", "OutWards", {
                "": function (a, b) {
                    U(a, b, d, d, d, 2, d, d)
                }, Grow: ["In", "Out", function (a, b, f) {
                    U(a, b, d, g, d, 2, d, f)
                }]
            }]
        }, fade: {
            "": function (a) {
                ma(a, a.options.speed)
            }, OutIn: function (a) {
                var b = a.options, d = b.speed, b = b.ease, f = t(0.6 * d), f = d - f;
                a.stopCallbacks.push(function () {
                    a.fromSlides.stop().css({opacity: 1})
                });
                L(a.fromSlides,
                    {opacity: 1E-4}, f, b, function () {
                        ma(a, d)
                    }, a)
            }
        }, foldRandom: ["Horizontal", "Vertical", function (a, b) {
            Q(a, b, d, g)
        }], slide: function (a) {
            var b = xa(a.slider), d = a.options, f = d.ease, d = d.speed, m = a.target, k = m.left, m = m.top;
            a.options.usecss ? L(b, {transform: "translate(" + k + "px, " + m + "px)"}, d, f, a.callback, a, g) : L(b, {
                marginTop: m,
                marginLeft: k
            }, d, f, a.callback, a)
        }, stack: ["Up", "Right", "Down", "Left", ["", "Reverse", function (a, b, d) {
            var f = 0 < a.diff;
            d && (f = !f);
            la(a, f, ++b)
        }]]
    }, "", d, []);
    ca.random = $(ca);
    f.fn.sudoSlider.effects = ca;
    var ab = qa("slide")
})(jQuery,
    window);