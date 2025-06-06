(() => {
  var sr = Object.create;
  var oi = Object.defineProperty;
  var ur = Object.getOwnPropertyDescriptor;
  var cr = Object.getOwnPropertyNames;
  var fr = Object.getPrototypeOf,
    lr = Object.prototype.hasOwnProperty;
  var ai = (p, D) => () => (
    D ||
      p(
        (D = {
          exports: {},
        }).exports,
        D
      ),
    D.exports
  );
  var dr = (p, D, j, V) => {
    if ((D && typeof D == "object") || typeof D == "function")
      for (let g of cr(D))
        !lr.call(p, g) &&
          g !== j &&
          oi(p, g, {
            get: () => D[g],
            enumerable: !(V = ur(D, g)) || V.enumerable,
          });
    return p;
  };
  var si = (p, D, j) => (
    (j = p != null ? sr(fr(p)) : {}),
    dr(
      D || !p || !p.__esModule
        ? oi(j, "default", {
            value: p,
            enumerable: !0,
          })
        : j,
      p
    )
  );
  var ci = ai((ui, an) => {
    (function (p, D) {
      "use strict";
      typeof an == "object" && typeof an.exports == "object"
        ? (an.exports = p.document
            ? D(p, !0)
            : function (j) {
                if (!j.document)
                  throw new Error("jQuery requires a window with a document");
                return D(j);
              })
        : D(p);
    })(typeof window < "u" ? window : ui, function (p, D) {
      "use strict";
      var j = [],
        V = Object.getPrototypeOf,
        g = j.slice,
        w = j.flat
          ? function (e) {
              return j.flat.call(e);
            }
          : function (e) {
              return j.concat.apply([], e);
            },
        N = j.push,
        A = j.indexOf,
        Q = {},
        ee = Q.toString,
        ie = Q.hasOwnProperty,
        fe = ie.toString,
        _ = fe.call(Object),
        E = {},
        v = function (t) {
          return (
            typeof t == "function" &&
            typeof t.nodeType != "number" &&
            typeof t.item != "function"
          );
        },
        X = function (t) {
          return t != null && t === t.window;
        },
        O = p.document,
        Se = {
          type: !0,
          src: !0,
          nonce: !0,
          noModule: !0,
        };
      function k(e, t, n) {
        n = n || O;
        var i,
          o,
          a = n.createElement("script");
        if (((a.text = e), t))
          for (i in Se)
            (o = t[i] || (t.getAttribute && t.getAttribute(i))),
              o && a.setAttribute(i, o);
        n.head.appendChild(a).parentNode.removeChild(a);
      }
      function F(e) {
        return e == null
          ? e + ""
          : typeof e == "object" || typeof e == "function"
          ? Q[ee.call(e)] || "object"
          : typeof e;
      }
      var R = "3.7.1",
        Y = /HTML$/i,
        r = function (e, t) {
          return new r.fn.init(e, t);
        };
      (r.fn = r.prototype =
        {
          jquery: R,
          constructor: r,
          length: 0,
          toArray: function () {
            return g.call(this);
          },
          get: function (e) {
            return e == null
              ? g.call(this)
              : e < 0
              ? this[e + this.length]
              : this[e];
          },
          pushStack: function (e) {
            var t = r.merge(this.constructor(), e);
            return (t.prevObject = this), t;
          },
          each: function (e) {
            return r.each(this, e);
          },
          map: function (e) {
            return this.pushStack(
              r.map(this, function (t, n) {
                return e.call(t, n, t);
              })
            );
          },
          slice: function () {
            return this.pushStack(g.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          even: function () {
            return this.pushStack(
              r.grep(this, function (e, t) {
                return (t + 1) % 2;
              })
            );
          },
          odd: function () {
            return this.pushStack(
              r.grep(this, function (e, t) {
                return t % 2;
              })
            );
          },
          eq: function (e) {
            var t = this.length,
              n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: N,
          sort: j.sort,
          splice: j.splice,
        }),
        (r.extend = r.fn.extend =
          function () {
            var e,
              t,
              n,
              i,
              o,
              a,
              s = arguments[0] || {},
              f = 1,
              c = arguments.length,
              d = !1;
            for (
              typeof s == "boolean" && ((d = s), (s = arguments[f] || {}), f++),
                typeof s != "object" && !v(s) && (s = {}),
                f === c && ((s = this), f--);
              f < c;
              f++
            )
              if ((e = arguments[f]) != null)
                for (t in e)
                  (i = e[t]),
                    !(t === "__proto__" || s === i) &&
                      (d && i && (r.isPlainObject(i) || (o = Array.isArray(i)))
                        ? ((n = s[t]),
                          o && !Array.isArray(n)
                            ? (a = [])
                            : !o && !r.isPlainObject(n)
                            ? (a = {})
                            : (a = n),
                          (o = !1),
                          (s[t] = r.extend(d, a, i)))
                        : i !== void 0 && (s[t] = i));
            return s;
          }),
        r.extend({
          expando: "jQuery" + (R + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isPlainObject: function (e) {
            var t, n;
            return !e || ee.call(e) !== "[object Object]"
              ? !1
              : ((t = V(e)),
                t
                  ? ((n = ie.call(t, "constructor") && t.constructor),
                    typeof n == "function" && fe.call(n) === _)
                  : !0);
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function (e, t, n) {
            k(
              e,
              {
                nonce: t && t.nonce,
              },
              n
            );
          },
          each: function (e, t) {
            var n,
              i = 0;
            if (U(e))
              for (n = e.length; i < n && t.call(e[i], i, e[i]) !== !1; i++);
            else for (i in e) if (t.call(e[i], i, e[i]) === !1) break;
            return e;
          },
          text: function (e) {
            var t,
              n = "",
              i = 0,
              o = e.nodeType;
            if (!o) for (; (t = e[i++]); ) n += r.text(t);
            return o === 1 || o === 11
              ? e.textContent
              : o === 9
              ? e.documentElement.textContent
              : o === 3 || o === 4
              ? e.nodeValue
              : n;
          },
          makeArray: function (e, t) {
            var n = t || [];
            return (
              e != null &&
                (U(Object(e))
                  ? r.merge(n, typeof e == "string" ? [e] : e)
                  : N.call(n, e)),
              n
            );
          },
          inArray: function (e, t, n) {
            return t == null ? -1 : A.call(t, e, n);
          },
          isXMLDoc: function (e) {
            var t = e && e.namespaceURI,
              n = e && (e.ownerDocument || e).documentElement;
            return !Y.test(t || (n && n.nodeName) || "HTML");
          },
          merge: function (e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++)
              e[o++] = t[i];
            return (e.length = o), e;
          },
          grep: function (e, t, n) {
            for (var i, o = [], a = 0, s = e.length, f = !n; a < s; a++)
              (i = !t(e[a], a)), i !== f && o.push(e[a]);
            return o;
          },
          map: function (e, t, n) {
            var i,
              o,
              a = 0,
              s = [];
            if (U(e))
              for (i = e.length; a < i; a++)
                (o = t(e[a], a, n)), o != null && s.push(o);
            else for (a in e) (o = t(e[a], a, n)), o != null && s.push(o);
            return w(s);
          },
          guid: 1,
          support: E,
        }),
        typeof Symbol == "function" &&
          (r.fn[Symbol.iterator] = j[Symbol.iterator]),
        r.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            Q["[object " + t + "]"] = t.toLowerCase();
          }
        );
      function U(e) {
        var t = !!e && "length" in e && e.length,
          n = F(e);
        return v(e) || X(e)
          ? !1
          : n === "array" ||
              t === 0 ||
              (typeof t == "number" && t > 0 && t - 1 in e);
      }
      function q(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var be = j.pop,
        he = j.sort,
        tt = j.splice,
        ge = "[\\x20\\t\\r\\n\\f]",
        I = new RegExp(
          "^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$",
          "g"
        );
      r.contains = function (e, t) {
        var n = t && t.parentNode;
        return (
          e === n ||
          !!(
            n &&
            n.nodeType === 1 &&
            (e.contains
              ? e.contains(n)
              : e.compareDocumentPosition && e.compareDocumentPosition(n) & 16)
          )
        );
      };
      var le = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
      function je(e, t) {
        return t
          ? e === "\0"
            ? "\uFFFD"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      }
      r.escapeSelector = function (e) {
        return (e + "").replace(le, je);
      };
      var Ae = O,
        Ye = N;
      (function () {
        var e,
          t,
          n,
          i,
          o,
          a = Ye,
          s,
          f,
          c,
          d,
          b,
          C = r.expando,
          m = 0,
          L = 0,
          ae = tn(),
          we = tn(),
          de = tn(),
          Je = tn(),
          We = function (u, l) {
            return u === l && (o = !0), 0;
          },
          ht =
            "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          gt =
            "(?:\\\\[\\da-fA-F]{1,6}" +
            ge +
            "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
          ve =
            "\\[" +
            ge +
            "*(" +
            gt +
            ")(?:" +
            ge +
            "*([*^$|!~]?=)" +
            ge +
            `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` +
            gt +
            "))|)" +
            ge +
            "*\\]",
          Ot =
            ":(" +
            gt +
            `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` +
            ve +
            ")*)|.*)\\)|)",
          xe = new RegExp(ge + "+", "g"),
          $e = new RegExp("^" + ge + "*," + ge + "*"),
          Wt = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"),
          xn = new RegExp(ge + "|>"),
          mt = new RegExp(Ot),
          Ut = new RegExp("^" + gt + "$"),
          yt = {
            ID: new RegExp("^#(" + gt + ")"),
            CLASS: new RegExp("^\\.(" + gt + ")"),
            TAG: new RegExp("^(" + gt + "|[*])"),
            ATTR: new RegExp("^" + ve),
            PSEUDO: new RegExp("^" + Ot),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                ge +
                "*(even|odd|(([+-]|)(\\d*)n|)" +
                ge +
                "*(?:([+-]|)" +
                ge +
                "*(\\d+)|))" +
                ge +
                "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + ht + ")$", "i"),
            needsContext: new RegExp(
              "^" +
                ge +
                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                ge +
                "*((?:-\\d)?\\d*)" +
                ge +
                "*\\)|)(?=[^-]|$)",
              "i"
            ),
          },
          Ct = /^(?:input|select|textarea|button)$/i,
          Et = /^h\d$/i,
          ot = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          Sn = /[+~]/,
          bt = new RegExp(
            "\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])",
            "g"
          ),
          wt = function (u, l) {
            var h = "0x" + u.slice(1) - 65536;
            return (
              l ||
              (h < 0
                ? String.fromCharCode(h + 65536)
                : String.fromCharCode((h >> 10) | 55296, (h & 1023) | 56320))
            );
          },
          er = function () {
            Tt();
          },
          tr = rn(
            function (u) {
              return u.disabled === !0 && q(u, "fieldset");
            },
            {
              dir: "parentNode",
              next: "legend",
            }
          );
        function nr() {
          try {
            return s.activeElement;
          } catch {}
        }
        try {
          a.apply((j = g.call(Ae.childNodes)), Ae.childNodes),
            j[Ae.childNodes.length].nodeType;
        } catch {
          a = {
            apply: function (l, h) {
              Ye.apply(l, g.call(h));
            },
            call: function (l) {
              Ye.apply(l, g.call(arguments, 1));
            },
          };
        }
        function Te(u, l, h, y) {
          var S,
            P,
            z,
            K,
            B,
            me,
            re,
            ue = l && l.ownerDocument,
            ye = l ? l.nodeType : 9;
          if (
            ((h = h || []),
            typeof u != "string" || !u || (ye !== 1 && ye !== 9 && ye !== 11))
          )
            return h;
          if (!y && (Tt(l), (l = l || s), c)) {
            if (ye !== 11 && (B = ot.exec(u)))
              if ((S = B[1])) {
                if (ye === 9)
                  if ((z = l.getElementById(S))) {
                    if (z.id === S) return a.call(h, z), h;
                  } else return h;
                else if (
                  ue &&
                  (z = ue.getElementById(S)) &&
                  Te.contains(l, z) &&
                  z.id === S
                )
                  return a.call(h, z), h;
              } else {
                if (B[2]) return a.apply(h, l.getElementsByTagName(u)), h;
                if ((S = B[3]) && l.getElementsByClassName)
                  return a.apply(h, l.getElementsByClassName(S)), h;
              }
            if (!Je[u + " "] && (!d || !d.test(u))) {
              if (
                ((re = u), (ue = l), ye === 1 && (xn.test(u) || Wt.test(u)))
              ) {
                for (
                  ue = (Sn.test(u) && Cn(l.parentNode)) || l,
                    (ue != l || !E.scope) &&
                      ((K = l.getAttribute("id"))
                        ? (K = r.escapeSelector(K))
                        : l.setAttribute("id", (K = C))),
                    me = Vt(u),
                    P = me.length;
                  P--;

                )
                  me[P] = (K ? "#" + K : ":scope") + " " + nn(me[P]);
                re = me.join(",");
              }
              try {
                return a.apply(h, ue.querySelectorAll(re)), h;
              } catch {
                Je(u, !0);
              } finally {
                K === C && l.removeAttribute("id");
              }
            }
          }
          return ri(u.replace(I, "$1"), l, h, y);
        }
        function tn() {
          var u = [];
          function l(h, y) {
            return (
              u.push(h + " ") > t.cacheLength && delete l[u.shift()],
              (l[h + " "] = y)
            );
          }
          return l;
        }
        function lt(u) {
          return (u[C] = !0), u;
        }
        function It(u) {
          var l = s.createElement("fieldset");
          try {
            return !!u(l);
          } catch {
            return !1;
          } finally {
            l.parentNode && l.parentNode.removeChild(l), (l = null);
          }
        }
        function ir(u) {
          return function (l) {
            return q(l, "input") && l.type === u;
          };
        }
        function rr(u) {
          return function (l) {
            return (q(l, "input") || q(l, "button")) && l.type === u;
          };
        }
        function ni(u) {
          return function (l) {
            return "form" in l
              ? l.parentNode && l.disabled === !1
                ? "label" in l
                  ? "label" in l.parentNode
                    ? l.parentNode.disabled === u
                    : l.disabled === u
                  : l.isDisabled === u || (l.isDisabled !== !u && tr(l) === u)
                : l.disabled === u
              : "label" in l
              ? l.disabled === u
              : !1;
          };
        }
        function Dt(u) {
          return lt(function (l) {
            return (
              (l = +l),
              lt(function (h, y) {
                for (var S, P = u([], h.length, l), z = P.length; z--; )
                  h[(S = P[z])] && (h[S] = !(y[S] = h[S]));
              })
            );
          });
        }
        function Cn(u) {
          return u && typeof u.getElementsByTagName < "u" && u;
        }
        function Tt(u) {
          var l,
            h = u ? u.ownerDocument || u : Ae;
          return (
            h == s ||
              h.nodeType !== 9 ||
              !h.documentElement ||
              ((s = h),
              (f = s.documentElement),
              (c = !r.isXMLDoc(s)),
              (b = f.matches || f.webkitMatchesSelector || f.msMatchesSelector),
              f.msMatchesSelector &&
                Ae != s &&
                (l = s.defaultView) &&
                l.top !== l &&
                l.addEventListener("unload", er),
              (E.getById = It(function (y) {
                return (
                  (f.appendChild(y).id = r.expando),
                  !s.getElementsByName || !s.getElementsByName(r.expando).length
                );
              })),
              (E.disconnectedMatch = It(function (y) {
                return b.call(y, "*");
              })),
              (E.scope = It(function () {
                return s.querySelectorAll(":scope");
              })),
              (E.cssHas = It(function () {
                try {
                  return s.querySelector(":has(*,:jqfake)"), !1;
                } catch {
                  return !0;
                }
              })),
              E.getById
                ? ((t.filter.ID = function (y) {
                    var S = y.replace(bt, wt);
                    return function (P) {
                      return P.getAttribute("id") === S;
                    };
                  }),
                  (t.find.ID = function (y, S) {
                    if (typeof S.getElementById < "u" && c) {
                      var P = S.getElementById(y);
                      return P ? [P] : [];
                    }
                  }))
                : ((t.filter.ID = function (y) {
                    var S = y.replace(bt, wt);
                    return function (P) {
                      var z =
                        typeof P.getAttributeNode < "u" &&
                        P.getAttributeNode("id");
                      return z && z.value === S;
                    };
                  }),
                  (t.find.ID = function (y, S) {
                    if (typeof S.getElementById < "u" && c) {
                      var P,
                        z,
                        K,
                        B = S.getElementById(y);
                      if (B) {
                        if (
                          ((P = B.getAttributeNode("id")), P && P.value === y)
                        )
                          return [B];
                        for (K = S.getElementsByName(y), z = 0; (B = K[z++]); )
                          if (
                            ((P = B.getAttributeNode("id")), P && P.value === y)
                          )
                            return [B];
                      }
                      return [];
                    }
                  })),
              (t.find.TAG = function (y, S) {
                return typeof S.getElementsByTagName < "u"
                  ? S.getElementsByTagName(y)
                  : S.querySelectorAll(y);
              }),
              (t.find.CLASS = function (y, S) {
                if (typeof S.getElementsByClassName < "u" && c)
                  return S.getElementsByClassName(y);
              }),
              (d = []),
              It(function (y) {
                var S;
                (f.appendChild(y).innerHTML =
                  "<a id='" +
                  C +
                  "' href='' disabled='disabled'></a><select id='" +
                  C +
                  "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                  y.querySelectorAll("[selected]").length ||
                    d.push("\\[" + ge + "*(?:value|" + ht + ")"),
                  y.querySelectorAll("[id~=" + C + "-]").length || d.push("~="),
                  y.querySelectorAll("a#" + C + "+*").length ||
                    d.push(".#.+[+~]"),
                  y.querySelectorAll(":checked").length || d.push(":checked"),
                  (S = s.createElement("input")),
                  S.setAttribute("type", "hidden"),
                  y.appendChild(S).setAttribute("name", "D"),
                  (f.appendChild(y).disabled = !0),
                  y.querySelectorAll(":disabled").length !== 2 &&
                    d.push(":enabled", ":disabled"),
                  (S = s.createElement("input")),
                  S.setAttribute("name", ""),
                  y.appendChild(S),
                  y.querySelectorAll("[name='']").length ||
                    d.push(
                      "\\[" + ge + "*name" + ge + "*=" + ge + `*(?:''|"")`
                    );
              }),
              E.cssHas || d.push(":has"),
              (d = d.length && new RegExp(d.join("|"))),
              (We = function (y, S) {
                if (y === S) return (o = !0), 0;
                var P = !y.compareDocumentPosition - !S.compareDocumentPosition;
                return (
                  P ||
                  ((P =
                    (y.ownerDocument || y) == (S.ownerDocument || S)
                      ? y.compareDocumentPosition(S)
                      : 1),
                  P & 1 ||
                  (!E.sortDetached && S.compareDocumentPosition(y) === P)
                    ? y === s || (y.ownerDocument == Ae && Te.contains(Ae, y))
                      ? -1
                      : S === s || (S.ownerDocument == Ae && Te.contains(Ae, S))
                      ? 1
                      : i
                      ? A.call(i, y) - A.call(i, S)
                      : 0
                    : P & 4
                    ? -1
                    : 1)
                );
              })),
            s
          );
        }
        (Te.matches = function (u, l) {
          return Te(u, null, null, l);
        }),
          (Te.matchesSelector = function (u, l) {
            if ((Tt(u), c && !Je[l + " "] && (!d || !d.test(l))))
              try {
                var h = b.call(u, l);
                if (
                  h ||
                  E.disconnectedMatch ||
                  (u.document && u.document.nodeType !== 11)
                )
                  return h;
              } catch {
                Je(l, !0);
              }
            return Te(l, s, null, [u]).length > 0;
          }),
          (Te.contains = function (u, l) {
            return (u.ownerDocument || u) != s && Tt(u), r.contains(u, l);
          }),
          (Te.attr = function (u, l) {
            (u.ownerDocument || u) != s && Tt(u);
            var h = t.attrHandle[l.toLowerCase()],
              y =
                h && ie.call(t.attrHandle, l.toLowerCase())
                  ? h(u, l, !c)
                  : void 0;
            return y !== void 0 ? y : u.getAttribute(l);
          }),
          (Te.error = function (u) {
            throw new Error("Syntax error, unrecognized expression: " + u);
          }),
          (r.uniqueSort = function (u) {
            var l,
              h = [],
              y = 0,
              S = 0;
            if (
              ((o = !E.sortStable),
              (i = !E.sortStable && g.call(u, 0)),
              he.call(u, We),
              o)
            ) {
              for (; (l = u[S++]); ) l === u[S] && (y = h.push(S));
              for (; y--; ) tt.call(u, h[y], 1);
            }
            return (i = null), u;
          }),
          (r.fn.uniqueSort = function () {
            return this.pushStack(r.uniqueSort(g.apply(this)));
          }),
          (t = r.expr =
            {
              cacheLength: 50,
              createPseudo: lt,
              match: yt,
              attrHandle: {},
              find: {},
              relative: {
                ">": {
                  dir: "parentNode",
                  first: !0,
                },
                " ": {
                  dir: "parentNode",
                },
                "+": {
                  dir: "previousSibling",
                  first: !0,
                },
                "~": {
                  dir: "previousSibling",
                },
              },
              preFilter: {
                ATTR: function (u) {
                  return (
                    (u[1] = u[1].replace(bt, wt)),
                    (u[3] = (u[3] || u[4] || u[5] || "").replace(bt, wt)),
                    u[2] === "~=" && (u[3] = " " + u[3] + " "),
                    u.slice(0, 4)
                  );
                },
                CHILD: function (u) {
                  return (
                    (u[1] = u[1].toLowerCase()),
                    u[1].slice(0, 3) === "nth"
                      ? (u[3] || Te.error(u[0]),
                        (u[4] = +(u[4]
                          ? u[5] + (u[6] || 1)
                          : 2 * (u[3] === "even" || u[3] === "odd"))),
                        (u[5] = +(u[7] + u[8] || u[3] === "odd")))
                      : u[3] && Te.error(u[0]),
                    u
                  );
                },
                PSEUDO: function (u) {
                  var l,
                    h = !u[6] && u[2];
                  return yt.CHILD.test(u[0])
                    ? null
                    : (u[3]
                        ? (u[2] = u[4] || u[5] || "")
                        : h &&
                          mt.test(h) &&
                          (l = Vt(h, !0)) &&
                          (l = h.indexOf(")", h.length - l) - h.length) &&
                          ((u[0] = u[0].slice(0, l)), (u[2] = h.slice(0, l))),
                      u.slice(0, 3));
                },
              },
              filter: {
                TAG: function (u) {
                  var l = u.replace(bt, wt).toLowerCase();
                  return u === "*"
                    ? function () {
                        return !0;
                      }
                    : function (h) {
                        return q(h, l);
                      };
                },
                CLASS: function (u) {
                  var l = ae[u + " "];
                  return (
                    l ||
                    ((l = new RegExp(
                      "(^|" + ge + ")" + u + "(" + ge + "|$)"
                    )) &&
                      ae(u, function (h) {
                        return l.test(
                          (typeof h.className == "string" && h.className) ||
                            (typeof h.getAttribute < "u" &&
                              h.getAttribute("class")) ||
                            ""
                        );
                      }))
                  );
                },
                ATTR: function (u, l, h) {
                  return function (y) {
                    var S = Te.attr(y, u);
                    return S == null
                      ? l === "!="
                      : l
                      ? ((S += ""),
                        l === "="
                          ? S === h
                          : l === "!="
                          ? S !== h
                          : l === "^="
                          ? h && S.indexOf(h) === 0
                          : l === "*="
                          ? h && S.indexOf(h) > -1
                          : l === "$="
                          ? h && S.slice(-h.length) === h
                          : l === "~="
                          ? (" " + S.replace(xe, " ") + " ").indexOf(h) > -1
                          : l === "|="
                          ? S === h || S.slice(0, h.length + 1) === h + "-"
                          : !1)
                      : !0;
                  };
                },
                CHILD: function (u, l, h, y, S) {
                  var P = u.slice(0, 3) !== "nth",
                    z = u.slice(-4) !== "last",
                    K = l === "of-type";
                  return y === 1 && S === 0
                    ? function (B) {
                        return !!B.parentNode;
                      }
                    : function (B, me, re) {
                        var ue,
                          ye,
                          te,
                          Ne,
                          it,
                          Ke = P !== z ? "nextSibling" : "previousSibling",
                          at = B.parentNode,
                          vt = K && B.nodeName.toLowerCase(),
                          Ht = !re && !K,
                          et = !1;
                        if (at) {
                          if (P) {
                            for (; Ke; ) {
                              for (te = B; (te = te[Ke]); )
                                if (K ? q(te, vt) : te.nodeType === 1)
                                  return !1;
                              it = Ke = u === "only" && !it && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((it = [z ? at.firstChild : at.lastChild]), z && Ht)
                          ) {
                            for (
                              ye = at[C] || (at[C] = {}),
                                ue = ye[u] || [],
                                Ne = ue[0] === m && ue[1],
                                et = Ne && ue[2],
                                te = Ne && at.childNodes[Ne];
                              (te =
                                (++Ne && te && te[Ke]) ||
                                (et = Ne = 0) ||
                                it.pop());

                            )
                              if (te.nodeType === 1 && ++et && te === B) {
                                ye[u] = [m, Ne, et];
                                break;
                              }
                          } else if (
                            (Ht &&
                              ((ye = B[C] || (B[C] = {})),
                              (ue = ye[u] || []),
                              (Ne = ue[0] === m && ue[1]),
                              (et = Ne)),
                            et === !1)
                          )
                            for (
                              ;
                              (te =
                                (++Ne && te && te[Ke]) ||
                                (et = Ne = 0) ||
                                it.pop()) &&
                              !(
                                (K ? q(te, vt) : te.nodeType === 1) &&
                                ++et &&
                                (Ht &&
                                  ((ye = te[C] || (te[C] = {})),
                                  (ye[u] = [m, et])),
                                te === B)
                              );

                            );
                          return (
                            (et -= S), et === y || (et % y === 0 && et / y >= 0)
                          );
                        }
                      };
                },
                PSEUDO: function (u, l) {
                  var h,
                    y =
                      t.pseudos[u] ||
                      t.setFilters[u.toLowerCase()] ||
                      Te.error("unsupported pseudo: " + u);
                  return y[C]
                    ? y(l)
                    : y.length > 1
                    ? ((h = [u, u, "", l]),
                      t.setFilters.hasOwnProperty(u.toLowerCase())
                        ? lt(function (S, P) {
                            for (var z, K = y(S, l), B = K.length; B--; )
                              (z = A.call(S, K[B])), (S[z] = !(P[z] = K[B]));
                          })
                        : function (S) {
                            return y(S, 0, h);
                          })
                    : y;
                },
              },
              pseudos: {
                not: lt(function (u) {
                  var l = [],
                    h = [],
                    y = An(u.replace(I, "$1"));
                  return y[C]
                    ? lt(function (S, P, z, K) {
                        for (
                          var B, me = y(S, null, K, []), re = S.length;
                          re--;

                        )
                          (B = me[re]) && (S[re] = !(P[re] = B));
                      })
                    : function (S, P, z) {
                        return (
                          (l[0] = S), y(l, null, z, h), (l[0] = null), !h.pop()
                        );
                      };
                }),
                has: lt(function (u) {
                  return function (l) {
                    return Te(u, l).length > 0;
                  };
                }),
                contains: lt(function (u) {
                  return (
                    (u = u.replace(bt, wt)),
                    function (l) {
                      return (l.textContent || r.text(l)).indexOf(u) > -1;
                    }
                  );
                }),
                lang: lt(function (u) {
                  return (
                    Ut.test(u || "") || Te.error("unsupported lang: " + u),
                    (u = u.replace(bt, wt).toLowerCase()),
                    function (l) {
                      var h;
                      do
                        if (
                          (h = c
                            ? l.lang
                            : l.getAttribute("xml:lang") ||
                              l.getAttribute("lang"))
                        )
                          return (
                            (h = h.toLowerCase()),
                            h === u || h.indexOf(u + "-") === 0
                          );
                      while ((l = l.parentNode) && l.nodeType === 1);
                      return !1;
                    }
                  );
                }),
                target: function (u) {
                  var l = p.location && p.location.hash;
                  return l && l.slice(1) === u.id;
                },
                root: function (u) {
                  return u === f;
                },
                focus: function (u) {
                  return (
                    u === nr() &&
                    s.hasFocus() &&
                    !!(u.type || u.href || ~u.tabIndex)
                  );
                },
                enabled: ni(!1),
                disabled: ni(!0),
                checked: function (u) {
                  return (
                    (q(u, "input") && !!u.checked) ||
                    (q(u, "option") && !!u.selected)
                  );
                },
                selected: function (u) {
                  return (
                    u.parentNode && u.parentNode.selectedIndex,
                    u.selected === !0
                  );
                },
                empty: function (u) {
                  for (u = u.firstChild; u; u = u.nextSibling)
                    if (u.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (u) {
                  return !t.pseudos.empty(u);
                },
                header: function (u) {
                  return Et.test(u.nodeName);
                },
                input: function (u) {
                  return Ct.test(u.nodeName);
                },
                button: function (u) {
                  return (
                    (q(u, "input") && u.type === "button") || q(u, "button")
                  );
                },
                text: function (u) {
                  var l;
                  return (
                    q(u, "input") &&
                    u.type === "text" &&
                    ((l = u.getAttribute("type")) == null ||
                      l.toLowerCase() === "text")
                  );
                },
                first: Dt(function () {
                  return [0];
                }),
                last: Dt(function (u, l) {
                  return [l - 1];
                }),
                eq: Dt(function (u, l, h) {
                  return [h < 0 ? h + l : h];
                }),
                even: Dt(function (u, l) {
                  for (var h = 0; h < l; h += 2) u.push(h);
                  return u;
                }),
                odd: Dt(function (u, l) {
                  for (var h = 1; h < l; h += 2) u.push(h);
                  return u;
                }),
                lt: Dt(function (u, l, h) {
                  var y;
                  for (
                    h < 0 ? (y = h + l) : h > l ? (y = l) : (y = h);
                    --y >= 0;

                  )
                    u.push(y);
                  return u;
                }),
                gt: Dt(function (u, l, h) {
                  for (var y = h < 0 ? h + l : h; ++y < l; ) u.push(y);
                  return u;
                }),
              },
            }),
          (t.pseudos.nth = t.pseudos.eq);
        for (e in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0,
        })
          t.pseudos[e] = ir(e);
        for (e in {
          submit: !0,
          reset: !0,
        })
          t.pseudos[e] = rr(e);
        function ii() {}
        (ii.prototype = t.filters = t.pseudos), (t.setFilters = new ii());
        function Vt(u, l) {
          var h,
            y,
            S,
            P,
            z,
            K,
            B,
            me = we[u + " "];
          if (me) return l ? 0 : me.slice(0);
          for (z = u, K = [], B = t.preFilter; z; ) {
            (!h || (y = $e.exec(z))) &&
              (y && (z = z.slice(y[0].length) || z), K.push((S = []))),
              (h = !1),
              (y = Wt.exec(z)) &&
                ((h = y.shift()),
                S.push({
                  value: h,
                  type: y[0].replace(I, " "),
                }),
                (z = z.slice(h.length)));
            for (P in t.filter)
              (y = yt[P].exec(z)) &&
                (!B[P] || (y = B[P](y))) &&
                ((h = y.shift()),
                S.push({
                  value: h,
                  type: P,
                  matches: y,
                }),
                (z = z.slice(h.length)));
            if (!h) break;
          }
          return l ? z.length : z ? Te.error(u) : we(u, K).slice(0);
        }
        function nn(u) {
          for (var l = 0, h = u.length, y = ""; l < h; l++) y += u[l].value;
          return y;
        }
        function rn(u, l, h) {
          var y = l.dir,
            S = l.next,
            P = S || y,
            z = h && P === "parentNode",
            K = L++;
          return l.first
            ? function (B, me, re) {
                for (; (B = B[y]); )
                  if (B.nodeType === 1 || z) return u(B, me, re);
                return !1;
              }
            : function (B, me, re) {
                var ue,
                  ye,
                  te = [m, K];
                if (re) {
                  for (; (B = B[y]); )
                    if ((B.nodeType === 1 || z) && u(B, me, re)) return !0;
                } else
                  for (; (B = B[y]); )
                    if (B.nodeType === 1 || z)
                      if (((ye = B[C] || (B[C] = {})), S && q(B, S)))
                        B = B[y] || B;
                      else {
                        if ((ue = ye[P]) && ue[0] === m && ue[1] === K)
                          return (te[2] = ue[2]);
                        if (((ye[P] = te), (te[2] = u(B, me, re)))) return !0;
                      }
                return !1;
              };
        }
        function En(u) {
          return u.length > 1
            ? function (l, h, y) {
                for (var S = u.length; S--; ) if (!u[S](l, h, y)) return !1;
                return !0;
              }
            : u[0];
        }
        function or(u, l, h) {
          for (var y = 0, S = l.length; y < S; y++) Te(u, l[y], h);
          return h;
        }
        function on(u, l, h, y, S) {
          for (var P, z = [], K = 0, B = u.length, me = l != null; K < B; K++)
            (P = u[K]) && (!h || h(P, y, S)) && (z.push(P), me && l.push(K));
          return z;
        }
        function Tn(u, l, h, y, S, P) {
          return (
            y && !y[C] && (y = Tn(y)),
            S && !S[C] && (S = Tn(S, P)),
            lt(function (z, K, B, me) {
              var re,
                ue,
                ye,
                te,
                Ne = [],
                it = [],
                Ke = K.length,
                at = z || or(l || "*", B.nodeType ? [B] : B, []),
                vt = u && (z || !l) ? on(at, Ne, u, B, me) : at;
              if (
                (h
                  ? ((te = S || (z ? u : Ke || y) ? [] : K), h(vt, te, B, me))
                  : (te = vt),
                y)
              )
                for (re = on(te, it), y(re, [], B, me), ue = re.length; ue--; )
                  (ye = re[ue]) && (te[it[ue]] = !(vt[it[ue]] = ye));
              if (z) {
                if (S || u) {
                  if (S) {
                    for (re = [], ue = te.length; ue--; )
                      (ye = te[ue]) && re.push((vt[ue] = ye));
                    S(null, (te = []), re, me);
                  }
                  for (ue = te.length; ue--; )
                    (ye = te[ue]) &&
                      (re = S ? A.call(z, ye) : Ne[ue]) > -1 &&
                      (z[re] = !(K[re] = ye));
                }
              } else
                (te = on(te === K ? te.splice(Ke, te.length) : te)),
                  S ? S(null, K, te, me) : a.apply(K, te);
            })
          );
        }
        function kn(u) {
          for (
            var l,
              h,
              y,
              S = u.length,
              P = t.relative[u[0].type],
              z = P || t.relative[" "],
              K = P ? 1 : 0,
              B = rn(
                function (ue) {
                  return ue === l;
                },
                z,
                !0
              ),
              me = rn(
                function (ue) {
                  return A.call(l, ue) > -1;
                },
                z,
                !0
              ),
              re = [
                function (ue, ye, te) {
                  var Ne =
                    (!P && (te || ye != n)) ||
                    ((l = ye).nodeType ? B(ue, ye, te) : me(ue, ye, te));
                  return (l = null), Ne;
                },
              ];
            K < S;
            K++
          )
            if ((h = t.relative[u[K].type])) re = [rn(En(re), h)];
            else {
              if (((h = t.filter[u[K].type].apply(null, u[K].matches)), h[C])) {
                for (y = ++K; y < S && !t.relative[u[y].type]; y++);
                return Tn(
                  K > 1 && En(re),
                  K > 1 &&
                    nn(
                      u.slice(0, K - 1).concat({
                        value: u[K - 2].type === " " ? "*" : "",
                      })
                    ).replace(I, "$1"),
                  h,
                  K < y && kn(u.slice(K, y)),
                  y < S && kn((u = u.slice(y))),
                  y < S && nn(u)
                );
              }
              re.push(h);
            }
          return En(re);
        }
        function ar(u, l) {
          var h = l.length > 0,
            y = u.length > 0,
            S = function (P, z, K, B, me) {
              var re,
                ue,
                ye,
                te = 0,
                Ne = "0",
                it = P && [],
                Ke = [],
                at = n,
                vt = P || (y && t.find.TAG("*", me)),
                Ht = (m += at == null ? 1 : Math.random() || 0.1),
                et = vt.length;
              for (
                me && (n = z == s || z || me);
                Ne !== et && (re = vt[Ne]) != null;
                Ne++
              ) {
                if (y && re) {
                  for (
                    ue = 0, !z && re.ownerDocument != s && (Tt(re), (K = !c));
                    (ye = u[ue++]);

                  )
                    if (ye(re, z || s, K)) {
                      a.call(B, re);
                      break;
                    }
                  me && (m = Ht);
                }
                h && ((re = !ye && re) && te--, P && it.push(re));
              }
              if (((te += Ne), h && Ne !== te)) {
                for (ue = 0; (ye = l[ue++]); ) ye(it, Ke, z, K);
                if (P) {
                  if (te > 0)
                    for (; Ne--; ) it[Ne] || Ke[Ne] || (Ke[Ne] = be.call(B));
                  Ke = on(Ke);
                }
                a.apply(B, Ke),
                  me &&
                    !P &&
                    Ke.length > 0 &&
                    te + l.length > 1 &&
                    r.uniqueSort(B);
              }
              return me && ((m = Ht), (n = at)), it;
            };
          return h ? lt(S) : S;
        }
        function An(u, l) {
          var h,
            y = [],
            S = [],
            P = de[u + " "];
          if (!P) {
            for (l || (l = Vt(u)), h = l.length; h--; )
              (P = kn(l[h])), P[C] ? y.push(P) : S.push(P);
            (P = de(u, ar(S, y))), (P.selector = u);
          }
          return P;
        }
        function ri(u, l, h, y) {
          var S,
            P,
            z,
            K,
            B,
            me = typeof u == "function" && u,
            re = !y && Vt((u = me.selector || u));
          if (((h = h || []), re.length === 1)) {
            if (
              ((P = re[0] = re[0].slice(0)),
              P.length > 2 &&
                (z = P[0]).type === "ID" &&
                l.nodeType === 9 &&
                c &&
                t.relative[P[1].type])
            ) {
              if (
                ((l = (t.find.ID(z.matches[0].replace(bt, wt), l) || [])[0]), l)
              )
                me && (l = l.parentNode);
              else return h;
              u = u.slice(P.shift().value.length);
            }
            for (
              S = yt.needsContext.test(u) ? 0 : P.length;
              S-- && ((z = P[S]), !t.relative[(K = z.type)]);

            )
              if (
                (B = t.find[K]) &&
                (y = B(
                  z.matches[0].replace(bt, wt),
                  (Sn.test(P[0].type) && Cn(l.parentNode)) || l
                ))
              ) {
                if ((P.splice(S, 1), (u = y.length && nn(P)), !u))
                  return a.apply(h, y), h;
                break;
              }
          }
          return (
            (me || An(u, re))(
              y,
              l,
              !c,
              h,
              !l || (Sn.test(u) && Cn(l.parentNode)) || l
            ),
            h
          );
        }
        (E.sortStable = C.split("").sort(We).join("") === C),
          Tt(),
          (E.sortDetached = It(function (u) {
            return u.compareDocumentPosition(s.createElement("fieldset")) & 1;
          })),
          (r.find = Te),
          (r.expr[":"] = r.expr.pseudos),
          (r.unique = r.uniqueSort),
          (Te.compile = An),
          (Te.select = ri),
          (Te.setDocument = Tt),
          (Te.tokenize = Vt),
          (Te.escape = r.escapeSelector),
          (Te.getText = r.text),
          (Te.isXML = r.isXMLDoc),
          (Te.selectors = r.expr),
          (Te.support = r.support),
          (Te.uniqueSort = r.uniqueSort);
      })();
      var Ue = function (e, t, n) {
          for (var i = [], o = n !== void 0; (e = e[t]) && e.nodeType !== 9; )
            if (e.nodeType === 1) {
              if (o && r(e).is(n)) break;
              i.push(e);
            }
          return i;
        },
        st = function (e, t) {
          for (var n = []; e; e = e.nextSibling)
            e.nodeType === 1 && e !== t && n.push(e);
          return n;
        },
        ut = r.expr.match.needsContext,
        x = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function H(e, t, n) {
        return v(t)
          ? r.grep(e, function (i, o) {
              return !!t.call(i, o, i) !== n;
            })
          : t.nodeType
          ? r.grep(e, function (i) {
              return (i === t) !== n;
            })
          : typeof t != "string"
          ? r.grep(e, function (i) {
              return A.call(t, i) > -1 !== n;
            })
          : r.filter(t, e, n);
      }
      (r.filter = function (e, t, n) {
        var i = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          t.length === 1 && i.nodeType === 1
            ? r.find.matchesSelector(i, e)
              ? [i]
              : []
            : r.find.matches(
                e,
                r.grep(t, function (o) {
                  return o.nodeType === 1;
                })
              )
        );
      }),
        r.fn.extend({
          find: function (e) {
            var t,
              n,
              i = this.length,
              o = this;
            if (typeof e != "string")
              return this.pushStack(
                r(e).filter(function () {
                  for (t = 0; t < i; t++) if (r.contains(o[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < i; t++) r.find(e, o[t], n);
            return i > 1 ? r.uniqueSort(n) : n;
          },
          filter: function (e) {
            return this.pushStack(H(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(H(this, e || [], !0));
          },
          is: function (e) {
            return !!H(
              this,
              typeof e == "string" && ut.test(e) ? r(e) : e || [],
              !1
            ).length;
          },
        });
      var ne,
        oe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        Z = (r.fn.init = function (e, t, n) {
          var i, o;
          if (!e) return this;
          if (((n = n || ne), typeof e == "string"))
            if (
              (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3
                ? (i = [null, e, null])
                : (i = oe.exec(e)),
              i && (i[1] || !t))
            )
              if (i[1]) {
                if (
                  ((t = t instanceof r ? t[0] : t),
                  r.merge(
                    this,
                    r.parseHTML(
                      i[1],
                      t && t.nodeType ? t.ownerDocument || t : O,
                      !0
                    )
                  ),
                  x.test(i[1]) && r.isPlainObject(t))
                )
                  for (i in t) v(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
              } else
                return (
                  (o = O.getElementById(i[2])),
                  o && ((this[0] = o), (this.length = 1)),
                  this
                );
            else
              return !t || t.jquery
                ? (t || n).find(e)
                : this.constructor(t).find(e);
          else {
            if (e.nodeType) return (this[0] = e), (this.length = 1), this;
            if (v(e)) return n.ready !== void 0 ? n.ready(e) : e(r);
          }
          return r.makeArray(e, this);
        });
      (Z.prototype = r.fn), (ne = r(O));
      var Ce = /^(?:parents|prev(?:Until|All))/,
        _e = {
          children: !0,
          contents: !0,
          next: !0,
          prev: !0,
        };
      r.fn.extend({
        has: function (e) {
          var t = r(e, this),
            n = t.length;
          return this.filter(function () {
            for (var i = 0; i < n; i++) if (r.contains(this, t[i])) return !0;
          });
        },
        closest: function (e, t) {
          var n,
            i = 0,
            o = this.length,
            a = [],
            s = typeof e != "string" && r(e);
          if (!ut.test(e)) {
            for (; i < o; i++)
              for (n = this[i]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (s
                    ? s.index(n) > -1
                    : n.nodeType === 1 && r.find.matchesSelector(n, e))
                ) {
                  a.push(n);
                  break;
                }
          }
          return this.pushStack(a.length > 1 ? r.uniqueSort(a) : a);
        },
        index: function (e) {
          return e
            ? typeof e == "string"
              ? A.call(r(e), this[0])
              : A.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(r.uniqueSort(r.merge(this.get(), r(e, t))));
        },
        addBack: function (e) {
          return this.add(
            e == null ? this.prevObject : this.prevObject.filter(e)
          );
        },
      });
      function Ve(e, t) {
        for (; (e = e[t]) && e.nodeType !== 1; );
        return e;
      }
      r.each(
        {
          parent: function (e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null;
          },
          parents: function (e) {
            return Ue(e, "parentNode");
          },
          parentsUntil: function (e, t, n) {
            return Ue(e, "parentNode", n);
          },
          next: function (e) {
            return Ve(e, "nextSibling");
          },
          prev: function (e) {
            return Ve(e, "previousSibling");
          },
          nextAll: function (e) {
            return Ue(e, "nextSibling");
          },
          prevAll: function (e) {
            return Ue(e, "previousSibling");
          },
          nextUntil: function (e, t, n) {
            return Ue(e, "nextSibling", n);
          },
          prevUntil: function (e, t, n) {
            return Ue(e, "previousSibling", n);
          },
          siblings: function (e) {
            return st((e.parentNode || {}).firstChild, e);
          },
          children: function (e) {
            return st(e.firstChild);
          },
          contents: function (e) {
            return e.contentDocument != null && V(e.contentDocument)
              ? e.contentDocument
              : (q(e, "template") && (e = e.content || e),
                r.merge([], e.childNodes));
          },
        },
        function (e, t) {
          r.fn[e] = function (n, i) {
            var o = r.map(this, t, n);
            return (
              e.slice(-5) !== "Until" && (i = n),
              i && typeof i == "string" && (o = r.filter(i, o)),
              this.length > 1 &&
                (_e[e] || r.uniqueSort(o), Ce.test(e) && o.reverse()),
              this.pushStack(o)
            );
          };
        }
      );
      var Le = /[^\x20\t\r\n\f]+/g;
      function dt(e) {
        var t = {};
        return (
          r.each(e.match(Le) || [], function (n, i) {
            t[i] = !0;
          }),
          t
        );
      }
      r.Callbacks = function (e) {
        e = typeof e == "string" ? dt(e) : r.extend({}, e);
        var t,
          n,
          i,
          o,
          a = [],
          s = [],
          f = -1,
          c = function () {
            for (o = o || e.once, i = t = !0; s.length; f = -1)
              for (n = s.shift(); ++f < a.length; )
                a[f].apply(n[0], n[1]) === !1 &&
                  e.stopOnFalse &&
                  ((f = a.length), (n = !1));
            e.memory || (n = !1), (t = !1), o && (n ? (a = []) : (a = ""));
          },
          d = {
            add: function () {
              return (
                a &&
                  (n && !t && ((f = a.length - 1), s.push(n)),
                  (function b(C) {
                    r.each(C, function (m, L) {
                      v(L)
                        ? (!e.unique || !d.has(L)) && a.push(L)
                        : L && L.length && F(L) !== "string" && b(L);
                    });
                  })(arguments),
                  n && !t && c()),
                this
              );
            },
            remove: function () {
              return (
                r.each(arguments, function (b, C) {
                  for (var m; (m = r.inArray(C, a, m)) > -1; )
                    a.splice(m, 1), m <= f && f--;
                }),
                this
              );
            },
            has: function (b) {
              return b ? r.inArray(b, a) > -1 : a.length > 0;
            },
            empty: function () {
              return a && (a = []), this;
            },
            disable: function () {
              return (o = s = []), (a = n = ""), this;
            },
            disabled: function () {
              return !a;
            },
            lock: function () {
              return (o = s = []), !n && !t && (a = n = ""), this;
            },
            locked: function () {
              return !!o;
            },
            fireWith: function (b, C) {
              return (
                o ||
                  ((C = C || []),
                  (C = [b, C.slice ? C.slice() : C]),
                  s.push(C),
                  t || c()),
                this
              );
            },
            fire: function () {
              return d.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!i;
            },
          };
        return d;
      };
      function Ze(e) {
        return e;
      }
      function Nt(e) {
        throw e;
      }
      function Rt(e, t, n, i) {
        var o;
        try {
          e && v((o = e.promise))
            ? o.call(e).done(t).fail(n)
            : e && v((o = e.then))
            ? o.call(e, t, n)
            : t.apply(void 0, [e].slice(i));
        } catch (a) {
          n.apply(void 0, [a]);
        }
      }
      r.extend({
        Deferred: function (e) {
          var t = [
              [
                "notify",
                "progress",
                r.Callbacks("memory"),
                r.Callbacks("memory"),
                2,
              ],
              [
                "resolve",
                "done",
                r.Callbacks("once memory"),
                r.Callbacks("once memory"),
                0,
                "resolved",
              ],
              [
                "reject",
                "fail",
                r.Callbacks("once memory"),
                r.Callbacks("once memory"),
                1,
                "rejected",
              ],
            ],
            n = "pending",
            i = {
              state: function () {
                return n;
              },
              always: function () {
                return o.done(arguments).fail(arguments), this;
              },
              catch: function (a) {
                return i.then(null, a);
              },
              pipe: function () {
                var a = arguments;
                return r
                  .Deferred(function (s) {
                    r.each(t, function (f, c) {
                      var d = v(a[c[4]]) && a[c[4]];
                      o[c[1]](function () {
                        var b = d && d.apply(this, arguments);
                        b && v(b.promise)
                          ? b
                              .promise()
                              .progress(s.notify)
                              .done(s.resolve)
                              .fail(s.reject)
                          : s[c[0] + "With"](this, d ? [b] : arguments);
                      });
                    }),
                      (a = null);
                  })
                  .promise();
              },
              then: function (a, s, f) {
                var c = 0;
                function d(b, C, m, L) {
                  return function () {
                    var ae = this,
                      we = arguments,
                      de = function () {
                        var We, ht;
                        if (!(b < c)) {
                          if (((We = m.apply(ae, we)), We === C.promise()))
                            throw new TypeError("Thenable self-resolution");
                          (ht =
                            We &&
                            (typeof We == "object" ||
                              typeof We == "function") &&
                            We.then),
                            v(ht)
                              ? L
                                ? ht.call(We, d(c, C, Ze, L), d(c, C, Nt, L))
                                : (c++,
                                  ht.call(
                                    We,
                                    d(c, C, Ze, L),
                                    d(c, C, Nt, L),
                                    d(c, C, Ze, C.notifyWith)
                                  ))
                              : (m !== Ze && ((ae = void 0), (we = [We])),
                                (L || C.resolveWith)(ae, we));
                        }
                      },
                      Je = L
                        ? de
                        : function () {
                            try {
                              de();
                            } catch (We) {
                              r.Deferred.exceptionHook &&
                                r.Deferred.exceptionHook(We, Je.error),
                                b + 1 >= c &&
                                  (m !== Nt && ((ae = void 0), (we = [We])),
                                  C.rejectWith(ae, we));
                            }
                          };
                    b
                      ? Je()
                      : (r.Deferred.getErrorHook
                          ? (Je.error = r.Deferred.getErrorHook())
                          : r.Deferred.getStackHook &&
                            (Je.error = r.Deferred.getStackHook()),
                        p.setTimeout(Je));
                  };
                }
                return r
                  .Deferred(function (b) {
                    t[0][3].add(d(0, b, v(f) ? f : Ze, b.notifyWith)),
                      t[1][3].add(d(0, b, v(a) ? a : Ze)),
                      t[2][3].add(d(0, b, v(s) ? s : Nt));
                  })
                  .promise();
              },
              promise: function (a) {
                return a != null ? r.extend(a, i) : i;
              },
            },
            o = {};
          return (
            r.each(t, function (a, s) {
              var f = s[2],
                c = s[5];
              (i[s[1]] = f.add),
                c &&
                  f.add(
                    function () {
                      n = c;
                    },
                    t[3 - a][2].disable,
                    t[3 - a][3].disable,
                    t[0][2].lock,
                    t[0][3].lock
                  ),
                f.add(s[3].fire),
                (o[s[0]] = function () {
                  return (
                    o[s[0] + "With"](this === o ? void 0 : this, arguments),
                    this
                  );
                }),
                (o[s[0] + "With"] = f.fireWith);
            }),
            i.promise(o),
            e && e.call(o, o),
            o
          );
        },
        when: function (e) {
          var t = arguments.length,
            n = t,
            i = Array(n),
            o = g.call(arguments),
            a = r.Deferred(),
            s = function (f) {
              return function (c) {
                (i[f] = this),
                  (o[f] = arguments.length > 1 ? g.call(arguments) : c),
                  --t || a.resolveWith(i, o);
              };
            };
          if (
            t <= 1 &&
            (Rt(e, a.done(s(n)).resolve, a.reject, !t),
            a.state() === "pending" || v(o[n] && o[n].then))
          )
            return a.then();
          for (; n--; ) Rt(o[n], s(n), a.reject);
          return a.promise();
        },
      });
      var jt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (r.Deferred.exceptionHook = function (e, t) {
        p.console &&
          p.console.warn &&
          e &&
          jt.test(e.name) &&
          p.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
        (r.readyException = function (e) {
          p.setTimeout(function () {
            throw e;
          });
        });
      var xt = r.Deferred();
      (r.fn.ready = function (e) {
        return (
          xt.then(e).catch(function (t) {
            r.readyException(t);
          }),
          this
        );
      }),
        r.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (e === !0 ? --r.readyWait : r.isReady) ||
              ((r.isReady = !0),
              !(e !== !0 && --r.readyWait > 0) && xt.resolveWith(O, [r]));
          },
        }),
        (r.ready.then = xt.then);
      function kt() {
        O.removeEventListener("DOMContentLoaded", kt),
          p.removeEventListener("load", kt),
          r.ready();
      }
      O.readyState === "complete" ||
      (O.readyState !== "loading" && !O.documentElement.doScroll)
        ? p.setTimeout(r.ready)
        : (O.addEventListener("DOMContentLoaded", kt),
          p.addEventListener("load", kt));
      var rt = function (e, t, n, i, o, a, s) {
          var f = 0,
            c = e.length,
            d = n == null;
          if (F(n) === "object") {
            o = !0;
            for (f in n) rt(e, t, f, n[f], !0, a, s);
          } else if (
            i !== void 0 &&
            ((o = !0),
            v(i) || (s = !0),
            d &&
              (s
                ? (t.call(e, i), (t = null))
                : ((d = t),
                  (t = function (b, C, m) {
                    return d.call(r(b), m);
                  }))),
            t)
          )
            for (; f < c; f++) t(e[f], n, s ? i : i.call(e[f], f, t(e[f], n)));
          return o ? e : d ? t.call(e) : c ? t(e[0], n) : a;
        },
        pt = /^-ms-/,
        sn = /-([a-z])/g;
      function Gt(e, t) {
        return t.toUpperCase();
      }
      function Be(e) {
        return e.replace(pt, "ms-").replace(sn, Gt);
      }
      var St = function (e) {
        return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType;
      };
      function ke() {
        this.expando = r.expando + ke.uid++;
      }
      (ke.uid = 1),
        (ke.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                St(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0,
                      }))),
              t
            );
          },
          set: function (e, t, n) {
            var i,
              o = this.cache(e);
            if (typeof t == "string") o[Be(t)] = n;
            else for (i in t) o[Be(i)] = t[i];
            return o;
          },
          get: function (e, t) {
            return t === void 0
              ? this.cache(e)
              : e[this.expando] && e[this.expando][Be(t)];
          },
          access: function (e, t, n) {
            return t === void 0 || (t && typeof t == "string" && n === void 0)
              ? this.get(e, t)
              : (this.set(e, t, n), n !== void 0 ? n : t);
          },
          remove: function (e, t) {
            var n,
              i = e[this.expando];
            if (i !== void 0) {
              if (t !== void 0)
                for (
                  Array.isArray(t)
                    ? (t = t.map(Be))
                    : ((t = Be(t)), (t = (t in i) ? [t] : t.match(Le) || [])),
                    n = t.length;
                  n--;

                )
                  delete i[t[n]];
              (t === void 0 || r.isEmptyObject(i)) &&
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando]);
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return t !== void 0 && !r.isEmptyObject(t);
          },
        });
      var J = new ke(),
        He = new ke(),
        Xt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Yt = /[A-Z]/g;
      function Qt(e) {
        return e === "true"
          ? !0
          : e === "false"
          ? !1
          : e === "null"
          ? null
          : e === +e + ""
          ? +e
          : Xt.test(e)
          ? JSON.parse(e)
          : e;
      }
      function T(e, t, n) {
        var i;
        if (n === void 0 && e.nodeType === 1)
          if (
            ((i = "data-" + t.replace(Yt, "-$&").toLowerCase()),
            (n = e.getAttribute(i)),
            typeof n == "string")
          ) {
            try {
              n = Qt(n);
            } catch {}
            He.set(e, t, n);
          } else n = void 0;
        return n;
      }
      r.extend({
        hasData: function (e) {
          return He.hasData(e) || J.hasData(e);
        },
        data: function (e, t, n) {
          return He.access(e, t, n);
        },
        removeData: function (e, t) {
          He.remove(e, t);
        },
        _data: function (e, t, n) {
          return J.access(e, t, n);
        },
        _removeData: function (e, t) {
          J.remove(e, t);
        },
      }),
        r.fn.extend({
          data: function (e, t) {
            var n,
              i,
              o,
              a = this[0],
              s = a && a.attributes;
            if (e === void 0) {
              if (
                this.length &&
                ((o = He.get(a)), a.nodeType === 1 && !J.get(a, "hasDataAttrs"))
              ) {
                for (n = s.length; n--; )
                  s[n] &&
                    ((i = s[n].name),
                    i.indexOf("data-") === 0 &&
                      ((i = Be(i.slice(5))), T(a, i, o[i])));
                J.set(a, "hasDataAttrs", !0);
              }
              return o;
            }
            return typeof e == "object"
              ? this.each(function () {
                  He.set(this, e);
                })
              : rt(
                  this,
                  function (f) {
                    var c;
                    if (a && f === void 0)
                      return (
                        (c = He.get(a, e)),
                        c !== void 0 || ((c = T(a, e)), c !== void 0)
                          ? c
                          : void 0
                      );
                    this.each(function () {
                      He.set(this, e, f);
                    });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (e) {
            return this.each(function () {
              He.remove(this, e);
            });
          },
        }),
        r.extend({
          queue: function (e, t, n) {
            var i;
            if (e)
              return (
                (t = (t || "fx") + "queue"),
                (i = J.get(e, t)),
                n &&
                  (!i || Array.isArray(n)
                    ? (i = J.access(e, t, r.makeArray(n)))
                    : i.push(n)),
                i || []
              );
          },
          dequeue: function (e, t) {
            t = t || "fx";
            var n = r.queue(e, t),
              i = n.length,
              o = n.shift(),
              a = r._queueHooks(e, t),
              s = function () {
                r.dequeue(e, t);
              };
            o === "inprogress" && ((o = n.shift()), i--),
              o &&
                (t === "fx" && n.unshift("inprogress"),
                delete a.stop,
                o.call(e, s, a)),
              !i && a && a.empty.fire();
          },
          _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return (
              J.get(e, n) ||
              J.access(e, n, {
                empty: r.Callbacks("once memory").add(function () {
                  J.remove(e, [t + "queue", n]);
                }),
              })
            );
          },
        }),
        r.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return (
              typeof e != "string" && ((t = e), (e = "fx"), n--),
              arguments.length < n
                ? r.queue(this[0], e)
                : t === void 0
                ? this
                : this.each(function () {
                    var i = r.queue(this, e, t);
                    r._queueHooks(this, e),
                      e === "fx" && i[0] !== "inprogress" && r.dequeue(this, e);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              r.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || "fx", []);
          },
          promise: function (e, t) {
            var n,
              i = 1,
              o = r.Deferred(),
              a = this,
              s = this.length,
              f = function () {
                --i || o.resolveWith(a, [a]);
              };
            for (
              typeof e != "string" && ((t = e), (e = void 0)), e = e || "fx";
              s--;

            )
              (n = J.get(a[s], e + "queueHooks")),
                n && n.empty && (i++, n.empty.add(f));
            return f(), o.promise(t);
          },
        });
      var M = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        G = new RegExp("^(?:([+-])=|)(" + M + ")([a-z%]*)$", "i"),
        W = ["Top", "Right", "Bottom", "Left"],
        se = O.documentElement,
        Oe = function (e) {
          return r.contains(e.ownerDocument, e);
        },
        Me = {
          composed: !0,
        };
      se.getRootNode &&
        (Oe = function (e) {
          return (
            r.contains(e.ownerDocument, e) ||
            e.getRootNode(Me) === e.ownerDocument
          );
        });
      var ce = function (e, t) {
        return (
          (e = t || e),
          e.style.display === "none" ||
            (e.style.display === "" && Oe(e) && r.css(e, "display") === "none")
        );
      };
      function Pe(e, t, n, i) {
        var o,
          a,
          s = 20,
          f = i
            ? function () {
                return i.cur();
              }
            : function () {
                return r.css(e, t, "");
              },
          c = f(),
          d = (n && n[3]) || (r.cssNumber[t] ? "" : "px"),
          b =
            e.nodeType &&
            (r.cssNumber[t] || (d !== "px" && +c)) &&
            G.exec(r.css(e, t));
        if (b && b[3] !== d) {
          for (c = c / 2, d = d || b[3], b = +c || 1; s--; )
            r.style(e, t, b + d),
              (1 - a) * (1 - (a = f() / c || 0.5)) <= 0 && (s = 0),
              (b = b / a);
          (b = b * 2), r.style(e, t, b + d), (n = n || []);
        }
        return (
          n &&
            ((b = +b || +c || 0),
            (o = n[1] ? b + (n[1] + 1) * n[2] : +n[2]),
            i && ((i.unit = d), (i.start = b), (i.end = o))),
          o
        );
      }
      var Ee = {};
      function Qe(e) {
        var t,
          n = e.ownerDocument,
          i = e.nodeName,
          o = Ee[i];
        return (
          o ||
          ((t = n.body.appendChild(n.createElement(i))),
          (o = r.css(t, "display")),
          t.parentNode.removeChild(t),
          o === "none" && (o = "block"),
          (Ee[i] = o),
          o)
        );
      }
      function De(e, t) {
        for (var n, i, o = [], a = 0, s = e.length; a < s; a++)
          (i = e[a]),
            i.style &&
              ((n = i.style.display),
              t
                ? (n === "none" &&
                    ((o[a] = J.get(i, "display") || null),
                    o[a] || (i.style.display = "")),
                  i.style.display === "" && ce(i) && (o[a] = Qe(i)))
                : n !== "none" && ((o[a] = "none"), J.set(i, "display", n)));
        for (a = 0; a < s; a++) o[a] != null && (e[a].style.display = o[a]);
        return e;
      }
      r.fn.extend({
        show: function () {
          return De(this, !0);
        },
        hide: function () {
          return De(this);
        },
        toggle: function (e) {
          return typeof e == "boolean"
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                ce(this) ? r(this).show() : r(this).hide();
              });
        },
      });
      var Ie = /^(?:checkbox|radio)$/i,
        Ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ct = /^$|^module$|\/(?:java|ecma)script/i;
      (function () {
        var e = O.createDocumentFragment(),
          t = e.appendChild(O.createElement("div")),
          n = O.createElement("input");
        n.setAttribute("type", "radio"),
          n.setAttribute("checked", "checked"),
          n.setAttribute("name", "t"),
          t.appendChild(n),
          (E.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (t.innerHTML = "<textarea>x</textarea>"),
          (E.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue),
          (t.innerHTML = "<option></option>"),
          (E.option = !!t.lastChild);
      })();
      var qe = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
      (qe.tbody = qe.tfoot = qe.colgroup = qe.caption = qe.thead),
        (qe.th = qe.td),
        E.option ||
          (qe.optgroup = qe.option =
            [1, "<select multiple='multiple'>", "</select>"]);
      function Re(e, t) {
        var n;
        return (
          typeof e.getElementsByTagName < "u"
            ? (n = e.getElementsByTagName(t || "*"))
            : typeof e.querySelectorAll < "u"
            ? (n = e.querySelectorAll(t || "*"))
            : (n = []),
          t === void 0 || (t && q(e, t)) ? r.merge([e], n) : n
        );
      }
      function ze(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
          J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
      }
      var pe = /<|&#?\w+;/;
      function Fe(e, t, n, i, o) {
        for (
          var a,
            s,
            f,
            c,
            d,
            b,
            C = t.createDocumentFragment(),
            m = [],
            L = 0,
            ae = e.length;
          L < ae;
          L++
        )
          if (((a = e[L]), a || a === 0))
            if (F(a) === "object") r.merge(m, a.nodeType ? [a] : a);
            else if (!pe.test(a)) m.push(t.createTextNode(a));
            else {
              for (
                s = s || C.appendChild(t.createElement("div")),
                  f = (Ge.exec(a) || ["", ""])[1].toLowerCase(),
                  c = qe[f] || qe._default,
                  s.innerHTML = c[1] + r.htmlPrefilter(a) + c[2],
                  b = c[0];
                b--;

              )
                s = s.lastChild;
              r.merge(m, s.childNodes),
                (s = C.firstChild),
                (s.textContent = "");
            }
        for (C.textContent = "", L = 0; (a = m[L++]); ) {
          if (i && r.inArray(a, i) > -1) {
            o && o.push(a);
            continue;
          }
          if (
            ((d = Oe(a)), (s = Re(C.appendChild(a), "script")), d && ze(s), n)
          )
            for (b = 0; (a = s[b++]); ) ct.test(a.type || "") && n.push(a);
        }
        return C;
      }
      var Xe = /^([^.]*)(?:\.(.+)|)/;
      function _t() {
        return !0;
      }
      function qt() {
        return !1;
      }
      function un(e, t, n, i, o, a) {
        var s, f;
        if (typeof t == "object") {
          typeof n != "string" && ((i = i || n), (n = void 0));
          for (f in t) un(e, f, n, i, t[f], a);
          return e;
        }
        if (
          (i == null && o == null
            ? ((o = n), (i = n = void 0))
            : o == null &&
              (typeof n == "string"
                ? ((o = i), (i = void 0))
                : ((o = i), (i = n), (n = void 0))),
          o === !1)
        )
          o = qt;
        else if (!o) return e;
        return (
          a === 1 &&
            ((s = o),
            (o = function (c) {
              return r().off(c), s.apply(this, arguments);
            }),
            (o.guid = s.guid || (s.guid = r.guid++))),
          e.each(function () {
            r.event.add(this, t, o, i, n);
          })
        );
      }
      r.event = {
        global: {},
        add: function (e, t, n, i, o) {
          var a,
            s,
            f,
            c,
            d,
            b,
            C,
            m,
            L,
            ae,
            we,
            de = J.get(e);
          if (!!St(e))
            for (
              n.handler && ((a = n), (n = a.handler), (o = a.selector)),
                o && r.find.matchesSelector(se, o),
                n.guid || (n.guid = r.guid++),
                (c = de.events) || (c = de.events = Object.create(null)),
                (s = de.handle) ||
                  (s = de.handle =
                    function (Je) {
                      return typeof r < "u" && r.event.triggered !== Je.type
                        ? r.event.dispatch.apply(e, arguments)
                        : void 0;
                    }),
                t = (t || "").match(Le) || [""],
                d = t.length;
              d--;

            )
              (f = Xe.exec(t[d]) || []),
                (L = we = f[1]),
                (ae = (f[2] || "").split(".").sort()),
                L &&
                  ((C = r.event.special[L] || {}),
                  (L = (o ? C.delegateType : C.bindType) || L),
                  (C = r.event.special[L] || {}),
                  (b = r.extend(
                    {
                      type: L,
                      origType: we,
                      data: i,
                      handler: n,
                      guid: n.guid,
                      selector: o,
                      needsContext: o && r.expr.match.needsContext.test(o),
                      namespace: ae.join("."),
                    },
                    a
                  )),
                  (m = c[L]) ||
                    ((m = c[L] = []),
                    (m.delegateCount = 0),
                    (!C.setup || C.setup.call(e, i, ae, s) === !1) &&
                      e.addEventListener &&
                      e.addEventListener(L, s)),
                  C.add &&
                    (C.add.call(e, b),
                    b.handler.guid || (b.handler.guid = n.guid)),
                  o ? m.splice(m.delegateCount++, 0, b) : m.push(b),
                  (r.event.global[L] = !0));
        },
        remove: function (e, t, n, i, o) {
          var a,
            s,
            f,
            c,
            d,
            b,
            C,
            m,
            L,
            ae,
            we,
            de = J.hasData(e) && J.get(e);
          if (!(!de || !(c = de.events))) {
            for (t = (t || "").match(Le) || [""], d = t.length; d--; ) {
              if (
                ((f = Xe.exec(t[d]) || []),
                (L = we = f[1]),
                (ae = (f[2] || "").split(".").sort()),
                !L)
              ) {
                for (L in c) r.event.remove(e, L + t[d], n, i, !0);
                continue;
              }
              for (
                C = r.event.special[L] || {},
                  L = (i ? C.delegateType : C.bindType) || L,
                  m = c[L] || [],
                  f =
                    f[2] &&
                    new RegExp(
                      "(^|\\.)" + ae.join("\\.(?:.*\\.|)") + "(\\.|$)"
                    ),
                  s = a = m.length;
                a--;

              )
                (b = m[a]),
                  (o || we === b.origType) &&
                    (!n || n.guid === b.guid) &&
                    (!f || f.test(b.namespace)) &&
                    (!i || i === b.selector || (i === "**" && b.selector)) &&
                    (m.splice(a, 1),
                    b.selector && m.delegateCount--,
                    C.remove && C.remove.call(e, b));
              s &&
                !m.length &&
                ((!C.teardown || C.teardown.call(e, ae, de.handle) === !1) &&
                  r.removeEvent(e, L, de.handle),
                delete c[L]);
            }
            r.isEmptyObject(c) && J.remove(e, "handle events");
          }
        },
        dispatch: function (e) {
          var t,
            n,
            i,
            o,
            a,
            s,
            f = new Array(arguments.length),
            c = r.event.fix(e),
            d = (J.get(this, "events") || Object.create(null))[c.type] || [],
            b = r.event.special[c.type] || {};
          for (f[0] = c, t = 1; t < arguments.length; t++) f[t] = arguments[t];
          if (
            ((c.delegateTarget = this),
            !(b.preDispatch && b.preDispatch.call(this, c) === !1))
          ) {
            for (
              s = r.event.handlers.call(this, c, d), t = 0;
              (o = s[t++]) && !c.isPropagationStopped();

            )
              for (
                c.currentTarget = o.elem, n = 0;
                (a = o.handlers[n++]) && !c.isImmediatePropagationStopped();

              )
                (!c.rnamespace ||
                  a.namespace === !1 ||
                  c.rnamespace.test(a.namespace)) &&
                  ((c.handleObj = a),
                  (c.data = a.data),
                  (i = (
                    (r.event.special[a.origType] || {}).handle || a.handler
                  ).apply(o.elem, f)),
                  i !== void 0 &&
                    (c.result = i) === !1 &&
                    (c.preventDefault(), c.stopPropagation()));
            return b.postDispatch && b.postDispatch.call(this, c), c.result;
          }
        },
        handlers: function (e, t) {
          var n,
            i,
            o,
            a,
            s,
            f = [],
            c = t.delegateCount,
            d = e.target;
          if (c && d.nodeType && !(e.type === "click" && e.button >= 1)) {
            for (; d !== this; d = d.parentNode || this)
              if (
                d.nodeType === 1 &&
                !(e.type === "click" && d.disabled === !0)
              ) {
                for (a = [], s = {}, n = 0; n < c; n++)
                  (i = t[n]),
                    (o = i.selector + " "),
                    s[o] === void 0 &&
                      (s[o] = i.needsContext
                        ? r(o, this).index(d) > -1
                        : r.find(o, this, null, [d]).length),
                    s[o] && a.push(i);
                a.length &&
                  f.push({
                    elem: d,
                    handlers: a,
                  });
              }
          }
          return (
            (d = this),
            c < t.length &&
              f.push({
                elem: d,
                handlers: t.slice(c),
              }),
            f
          );
        },
        addProp: function (e, t) {
          Object.defineProperty(r.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: v(t)
              ? function () {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set: function (n) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              });
            },
          });
        },
        fix: function (e) {
          return e[r.expando] ? e : new r.Event(e);
        },
        special: {
          load: {
            noBubble: !0,
          },
          click: {
            setup: function (e) {
              var t = this || e;
              return (
                Ie.test(t.type) &&
                  t.click &&
                  q(t, "input") &&
                  Jt(t, "click", !0),
                !1
              );
            },
            trigger: function (e) {
              var t = this || e;
              return (
                Ie.test(t.type) && t.click && q(t, "input") && Jt(t, "click"),
                !0
              );
            },
            _default: function (e) {
              var t = e.target;
              return (
                (Ie.test(t.type) &&
                  t.click &&
                  q(t, "input") &&
                  J.get(t, "click")) ||
                q(t, "a")
              );
            },
          },
          beforeunload: {
            postDispatch: function (e) {
              e.result !== void 0 &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            },
          },
        },
      };
      function Jt(e, t, n) {
        if (!n) {
          J.get(e, t) === void 0 && r.event.add(e, t, _t);
          return;
        }
        J.set(e, t, !1),
          r.event.add(e, t, {
            namespace: !1,
            handler: function (i) {
              var o,
                a = J.get(this, t);
              if (i.isTrigger & 1 && this[t]) {
                if (a)
                  (r.event.special[t] || {}).delegateType &&
                    i.stopPropagation();
                else if (
                  ((a = g.call(arguments)),
                  J.set(this, t, a),
                  this[t](),
                  (o = J.get(this, t)),
                  J.set(this, t, !1),
                  a !== o)
                )
                  return i.stopImmediatePropagation(), i.preventDefault(), o;
              } else
                a &&
                  (J.set(this, t, r.event.trigger(a[0], a.slice(1), this)),
                  i.stopPropagation(),
                  (i.isImmediatePropagationStopped = _t));
            },
          });
      }
      (r.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
      }),
        (r.Event = function (e, t) {
          if (!(this instanceof r.Event)) return new r.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (e.defaultPrevented === void 0 && e.returnValue === !1)
                  ? _t
                  : qt),
              (this.target =
                e.target && e.target.nodeType === 3
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && r.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[r.expando] = !0);
        }),
        (r.Event.prototype = {
          constructor: r.Event,
          isDefaultPrevented: qt,
          isPropagationStopped: qt,
          isImmediatePropagationStopped: qt,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = _t),
              e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = _t),
              e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = _t),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        r.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: !0,
          },
          r.event.addProp
        ),
        r.each(
          {
            focus: "focusin",
            blur: "focusout",
          },
          function (e, t) {
            function n(i) {
              if (O.documentMode) {
                var o = J.get(this, "handle"),
                  a = r.event.fix(i);
                (a.type = i.type === "focusin" ? "focus" : "blur"),
                  (a.isSimulated = !0),
                  o(i),
                  a.target === a.currentTarget && o(a);
              } else r.event.simulate(t, i.target, r.event.fix(i));
            }
            (r.event.special[e] = {
              setup: function () {
                var i;
                if ((Jt(this, e, !0), O.documentMode))
                  (i = J.get(this, t)),
                    i || this.addEventListener(t, n),
                    J.set(this, t, (i || 0) + 1);
                else return !1;
              },
              trigger: function () {
                return Jt(this, e), !0;
              },
              teardown: function () {
                var i;
                if (O.documentMode)
                  (i = J.get(this, t) - 1),
                    i
                      ? J.set(this, t, i)
                      : (this.removeEventListener(t, n), J.remove(this, t));
                else return !1;
              },
              _default: function (i) {
                return J.get(i.target, e);
              },
              delegateType: t,
            }),
              (r.event.special[t] = {
                setup: function () {
                  var i = this.ownerDocument || this.document || this,
                    o = O.documentMode ? this : i,
                    a = J.get(o, t);
                  a ||
                    (O.documentMode
                      ? this.addEventListener(t, n)
                      : i.addEventListener(e, n, !0)),
                    J.set(o, t, (a || 0) + 1);
                },
                teardown: function () {
                  var i = this.ownerDocument || this.document || this,
                    o = O.documentMode ? this : i,
                    a = J.get(o, t) - 1;
                  a
                    ? J.set(o, t, a)
                    : (O.documentMode
                        ? this.removeEventListener(t, n)
                        : i.removeEventListener(e, n, !0),
                      J.remove(o, t));
                },
              });
          }
        ),
        r.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (e, t) {
            r.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (n) {
                var i,
                  o = this,
                  a = n.relatedTarget,
                  s = n.handleObj;
                return (
                  (!a || (a !== o && !r.contains(o, a))) &&
                    ((n.type = s.origType),
                    (i = s.handler.apply(this, arguments)),
                    (n.type = t)),
                  i
                );
              },
            };
          }
        ),
        r.fn.extend({
          on: function (e, t, n, i) {
            return un(this, e, t, n, i);
          },
          one: function (e, t, n, i) {
            return un(this, e, t, n, i, 1);
          },
          off: function (e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj)
              return (
                (i = e.handleObj),
                r(e.delegateTarget).off(
                  i.namespace ? i.origType + "." + i.namespace : i.origType,
                  i.selector,
                  i.handler
                ),
                this
              );
            if (typeof e == "object") {
              for (o in e) this.off(o, t, e[o]);
              return this;
            }
            return (
              (t === !1 || typeof t == "function") && ((n = t), (t = void 0)),
              n === !1 && (n = qt),
              this.each(function () {
                r.event.remove(this, e, n, t);
              })
            );
          },
        });
      var xi = /<script|<style|<link/i,
        Si = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ci = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
      function _n(e, t) {
        return (
          (q(e, "table") &&
            q(t.nodeType !== 11 ? t : t.firstChild, "tr") &&
            r(e).children("tbody")[0]) ||
          e
        );
      }
      function Ei(e) {
        return (e.type = (e.getAttribute("type") !== null) + "/" + e.type), e;
      }
      function Ti(e) {
        return (
          (e.type || "").slice(0, 5) === "true/"
            ? (e.type = e.type.slice(5))
            : e.removeAttribute("type"),
          e
        );
      }
      function qn(e, t) {
        var n, i, o, a, s, f, c;
        if (t.nodeType === 1) {
          if (J.hasData(e) && ((a = J.get(e)), (c = a.events), c)) {
            J.remove(t, "handle events");
            for (o in c)
              for (n = 0, i = c[o].length; n < i; n++)
                r.event.add(t, o, c[o][n]);
          }
          He.hasData(e) &&
            ((s = He.access(e)), (f = r.extend({}, s)), He.set(t, f));
        }
      }
      function ki(e, t) {
        var n = t.nodeName.toLowerCase();
        n === "input" && Ie.test(e.type)
          ? (t.checked = e.checked)
          : (n === "input" || n === "textarea") &&
            (t.defaultValue = e.defaultValue);
      }
      function Mt(e, t, n, i) {
        t = w(t);
        var o,
          a,
          s,
          f,
          c,
          d,
          b = 0,
          C = e.length,
          m = C - 1,
          L = t[0],
          ae = v(L);
        if (
          ae ||
          (C > 1 && typeof L == "string" && !E.checkClone && Si.test(L))
        )
          return e.each(function (we) {
            var de = e.eq(we);
            ae && (t[0] = L.call(this, we, de.html())), Mt(de, t, n, i);
          });
        if (
          C &&
          ((o = Fe(t, e[0].ownerDocument, !1, e, i)),
          (a = o.firstChild),
          o.childNodes.length === 1 && (o = a),
          a || i)
        ) {
          for (s = r.map(Re(o, "script"), Ei), f = s.length; b < C; b++)
            (c = o),
              b !== m &&
                ((c = r.clone(c, !0, !0)), f && r.merge(s, Re(c, "script"))),
              n.call(e[b], c, b);
          if (f)
            for (
              d = s[s.length - 1].ownerDocument, r.map(s, Ti), b = 0;
              b < f;
              b++
            )
              (c = s[b]),
                ct.test(c.type || "") &&
                  !J.access(c, "globalEval") &&
                  r.contains(d, c) &&
                  (c.src && (c.type || "").toLowerCase() !== "module"
                    ? r._evalUrl &&
                      !c.noModule &&
                      r._evalUrl(
                        c.src,
                        {
                          nonce: c.nonce || c.getAttribute("nonce"),
                        },
                        d
                      )
                    : k(c.textContent.replace(Ci, ""), c, d));
        }
        return e;
      }
      function Mn(e, t, n) {
        for (var i, o = t ? r.filter(t, e) : e, a = 0; (i = o[a]) != null; a++)
          !n && i.nodeType === 1 && r.cleanData(Re(i)),
            i.parentNode &&
              (n && Oe(i) && ze(Re(i, "script")), i.parentNode.removeChild(i));
        return e;
      }
      r.extend({
        htmlPrefilter: function (e) {
          return e;
        },
        clone: function (e, t, n) {
          var i,
            o,
            a,
            s,
            f = e.cloneNode(!0),
            c = Oe(e);
          if (
            !E.noCloneChecked &&
            (e.nodeType === 1 || e.nodeType === 11) &&
            !r.isXMLDoc(e)
          )
            for (s = Re(f), a = Re(e), i = 0, o = a.length; i < o; i++)
              ki(a[i], s[i]);
          if (t)
            if (n)
              for (
                a = a || Re(e), s = s || Re(f), i = 0, o = a.length;
                i < o;
                i++
              )
                qn(a[i], s[i]);
            else qn(e, f);
          return (
            (s = Re(f, "script")),
            s.length > 0 && ze(s, !c && Re(e, "script")),
            f
          );
        },
        cleanData: function (e) {
          for (
            var t, n, i, o = r.event.special, a = 0;
            (n = e[a]) !== void 0;
            a++
          )
            if (St(n)) {
              if ((t = n[J.expando])) {
                if (t.events)
                  for (i in t.events)
                    o[i] ? r.event.remove(n, i) : r.removeEvent(n, i, t.handle);
                n[J.expando] = void 0;
              }
              n[He.expando] && (n[He.expando] = void 0);
            }
        },
      }),
        r.fn.extend({
          detach: function (e) {
            return Mn(this, e, !0);
          },
          remove: function (e) {
            return Mn(this, e);
          },
          text: function (e) {
            return rt(
              this,
              function (t) {
                return t === void 0
                  ? r.text(this)
                  : this.empty().each(function () {
                      (this.nodeType === 1 ||
                        this.nodeType === 11 ||
                        this.nodeType === 9) &&
                        (this.textContent = t);
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function () {
            return Mt(this, arguments, function (e) {
              if (
                this.nodeType === 1 ||
                this.nodeType === 11 ||
                this.nodeType === 9
              ) {
                var t = _n(this, e);
                t.appendChild(e);
              }
            });
          },
          prepend: function () {
            return Mt(this, arguments, function (e) {
              if (
                this.nodeType === 1 ||
                this.nodeType === 11 ||
                this.nodeType === 9
              ) {
                var t = _n(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function () {
            return Mt(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return Mt(this, arguments, function (e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; (e = this[t]) != null; t++)
              e.nodeType === 1 &&
                (r.cleanData(Re(e, !1)), (e.textContent = ""));
            return this;
          },
          clone: function (e, t) {
            return (
              (e = e ?? !1),
              (t = t ?? e),
              this.map(function () {
                return r.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return rt(
              this,
              function (t) {
                var n = this[0] || {},
                  i = 0,
                  o = this.length;
                if (t === void 0 && n.nodeType === 1) return n.innerHTML;
                if (
                  typeof t == "string" &&
                  !xi.test(t) &&
                  !qe[(Ge.exec(t) || ["", ""])[1].toLowerCase()]
                ) {
                  t = r.htmlPrefilter(t);
                  try {
                    for (; i < o; i++)
                      (n = this[i] || {}),
                        n.nodeType === 1 &&
                          (r.cleanData(Re(n, !1)), (n.innerHTML = t));
                    n = 0;
                  } catch {}
                }
                n && this.empty().append(t);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function () {
            var e = [];
            return Mt(
              this,
              arguments,
              function (t) {
                var n = this.parentNode;
                r.inArray(this, e) < 0 &&
                  (r.cleanData(Re(this)), n && n.replaceChild(t, this));
              },
              e
            );
          },
        }),
        r.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (e, t) {
            r.fn[e] = function (n) {
              for (
                var i, o = [], a = r(n), s = a.length - 1, f = 0;
                f <= s;
                f++
              )
                (i = f === s ? this : this.clone(!0)),
                  r(a[f])[t](i),
                  N.apply(o, i.get());
              return this.pushStack(o);
            };
          }
        );
      var cn = new RegExp("^(" + M + ")(?!px)[a-z%]+$", "i"),
        fn = /^--/,
        Kt = function (e) {
          var t = e.ownerDocument.defaultView;
          return (!t || !t.opener) && (t = p), t.getComputedStyle(e);
        },
        Pn = function (e, t, n) {
          var i,
            o,
            a = {};
          for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
          i = n.call(e);
          for (o in t) e.style[o] = a[o];
          return i;
        },
        Ai = new RegExp(W.join("|"), "i");
      (function () {
        function e() {
          if (!!d) {
            (c.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (d.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              se.appendChild(c).appendChild(d);
            var b = p.getComputedStyle(d);
            (n = b.top !== "1%"),
              (f = t(b.marginLeft) === 12),
              (d.style.right = "60%"),
              (a = t(b.right) === 36),
              (i = t(b.width) === 36),
              (d.style.position = "absolute"),
              (o = t(d.offsetWidth / 3) === 12),
              se.removeChild(c),
              (d = null);
          }
        }
        function t(b) {
          return Math.round(parseFloat(b));
        }
        var n,
          i,
          o,
          a,
          s,
          f,
          c = O.createElement("div"),
          d = O.createElement("div");
        !d.style ||
          ((d.style.backgroundClip = "content-box"),
          (d.cloneNode(!0).style.backgroundClip = ""),
          (E.clearCloneStyle = d.style.backgroundClip === "content-box"),
          r.extend(E, {
            boxSizingReliable: function () {
              return e(), i;
            },
            pixelBoxStyles: function () {
              return e(), a;
            },
            pixelPosition: function () {
              return e(), n;
            },
            reliableMarginLeft: function () {
              return e(), f;
            },
            scrollboxSize: function () {
              return e(), o;
            },
            reliableTrDimensions: function () {
              var b, C, m, L;
              return (
                s == null &&
                  ((b = O.createElement("table")),
                  (C = O.createElement("tr")),
                  (m = O.createElement("div")),
                  (b.style.cssText =
                    "position:absolute;left:-11111px;border-collapse:separate"),
                  (C.style.cssText = "box-sizing:content-box;border:1px solid"),
                  (C.style.height = "1px"),
                  (m.style.height = "9px"),
                  (m.style.display = "block"),
                  se.appendChild(b).appendChild(C).appendChild(m),
                  (L = p.getComputedStyle(C)),
                  (s =
                    parseInt(L.height, 10) +
                      parseInt(L.borderTopWidth, 10) +
                      parseInt(L.borderBottomWidth, 10) ===
                    C.offsetHeight),
                  se.removeChild(b)),
                s
              );
            },
          }));
      })();
      function Ft(e, t, n) {
        var i,
          o,
          a,
          s,
          f = fn.test(t),
          c = e.style;
        return (
          (n = n || Kt(e)),
          n &&
            ((s = n.getPropertyValue(t) || n[t]),
            f && s && (s = s.replace(I, "$1") || void 0),
            s === "" && !Oe(e) && (s = r.style(e, t)),
            !E.pixelBoxStyles() &&
              cn.test(s) &&
              Ai.test(t) &&
              ((i = c.width),
              (o = c.minWidth),
              (a = c.maxWidth),
              (c.minWidth = c.maxWidth = c.width = s),
              (s = n.width),
              (c.width = i),
              (c.minWidth = o),
              (c.maxWidth = a))),
          s !== void 0 ? s + "" : s
        );
      }
      function In(e, t) {
        return {
          get: function () {
            if (e()) {
              delete this.get;
              return;
            }
            return (this.get = t).apply(this, arguments);
          },
        };
      }
      var Hn = ["Webkit", "Moz", "ms"],
        Rn = O.createElement("div").style,
        Fn = {};
      function Li(e) {
        for (var t = e[0].toUpperCase() + e.slice(1), n = Hn.length; n--; )
          if (((e = Hn[n] + t), e in Rn)) return e;
      }
      function ln(e) {
        var t = r.cssProps[e] || Fn[e];
        return t || (e in Rn ? e : (Fn[e] = Li(e) || e));
      }
      var Oi = /^(none|table(?!-c[ea]).+)/,
        Di = {
          position: "absolute",
          visibility: "hidden",
          display: "block",
        },
        $n = {
          letterSpacing: "0",
          fontWeight: "400",
        };
      function zn(e, t, n) {
        var i = G.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
      }
      function dn(e, t, n, i, o, a) {
        var s = t === "width" ? 1 : 0,
          f = 0,
          c = 0,
          d = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2)
          n === "margin" && (d += r.css(e, n + W[s], !0, o)),
            i
              ? (n === "content" && (c -= r.css(e, "padding" + W[s], !0, o)),
                n !== "margin" &&
                  (c -= r.css(e, "border" + W[s] + "Width", !0, o)))
              : ((c += r.css(e, "padding" + W[s], !0, o)),
                n !== "padding"
                  ? (c += r.css(e, "border" + W[s] + "Width", !0, o))
                  : (f += r.css(e, "border" + W[s] + "Width", !0, o)));
        return (
          !i &&
            a >= 0 &&
            (c +=
              Math.max(
                0,
                Math.ceil(
                  e["offset" + t[0].toUpperCase() + t.slice(1)] -
                    a -
                    c -
                    f -
                    0.5
                )
              ) || 0),
          c + d
        );
      }
      function Bn(e, t, n) {
        var i = Kt(e),
          o = !E.boxSizingReliable() || n,
          a = o && r.css(e, "boxSizing", !1, i) === "border-box",
          s = a,
          f = Ft(e, t, i),
          c = "offset" + t[0].toUpperCase() + t.slice(1);
        if (cn.test(f)) {
          if (!n) return f;
          f = "auto";
        }
        return (
          ((!E.boxSizingReliable() && a) ||
            (!E.reliableTrDimensions() && q(e, "tr")) ||
            f === "auto" ||
            (!parseFloat(f) && r.css(e, "display", !1, i) === "inline")) &&
            e.getClientRects().length &&
            ((a = r.css(e, "boxSizing", !1, i) === "border-box"),
            (s = c in e),
            s && (f = e[c])),
          (f = parseFloat(f) || 0),
          f + dn(e, t, n || (a ? "border" : "content"), s, i, f) + "px"
        );
      }
      r.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = Ft(e, "opacity");
                return n === "" ? "1" : n;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          aspectRatio: !0,
          borderImageSlice: !0,
          columnCount: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          scale: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
        },
        cssProps: {},
        style: function (e, t, n, i) {
          if (!(!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)) {
            var o,
              a,
              s,
              f = Be(t),
              c = fn.test(t),
              d = e.style;
            if (
              (c || (t = ln(f)),
              (s = r.cssHooks[t] || r.cssHooks[f]),
              n !== void 0)
            ) {
              if (
                ((a = typeof n),
                a === "string" &&
                  (o = G.exec(n)) &&
                  o[1] &&
                  ((n = Pe(e, t, o)), (a = "number")),
                n == null || n !== n)
              )
                return;
              a === "number" &&
                !c &&
                (n += (o && o[3]) || (r.cssNumber[f] ? "" : "px")),
                !E.clearCloneStyle &&
                  n === "" &&
                  t.indexOf("background") === 0 &&
                  (d[t] = "inherit"),
                (!s || !("set" in s) || (n = s.set(e, n, i)) !== void 0) &&
                  (c ? d.setProperty(t, n) : (d[t] = n));
            } else
              return s && "get" in s && (o = s.get(e, !1, i)) !== void 0
                ? o
                : d[t];
          }
        },
        css: function (e, t, n, i) {
          var o,
            a,
            s,
            f = Be(t),
            c = fn.test(t);
          return (
            c || (t = ln(f)),
            (s = r.cssHooks[t] || r.cssHooks[f]),
            s && "get" in s && (o = s.get(e, !0, n)),
            o === void 0 && (o = Ft(e, t, i)),
            o === "normal" && t in $n && (o = $n[t]),
            n === "" || n
              ? ((a = parseFloat(o)), n === !0 || isFinite(a) ? a || 0 : o)
              : o
          );
        },
      }),
        r.each(["height", "width"], function (e, t) {
          r.cssHooks[t] = {
            get: function (n, i, o) {
              if (i)
                return Oi.test(r.css(n, "display")) &&
                  (!n.getClientRects().length ||
                    !n.getBoundingClientRect().width)
                  ? Pn(n, Di, function () {
                      return Bn(n, t, o);
                    })
                  : Bn(n, t, o);
            },
            set: function (n, i, o) {
              var a,
                s = Kt(n),
                f = !E.scrollboxSize() && s.position === "absolute",
                c = f || o,
                d = c && r.css(n, "boxSizing", !1, s) === "border-box",
                b = o ? dn(n, t, o, d, s) : 0;
              return (
                d &&
                  f &&
                  (b -= Math.ceil(
                    n["offset" + t[0].toUpperCase() + t.slice(1)] -
                      parseFloat(s[t]) -
                      dn(n, t, "border", !1, s) -
                      0.5
                  )),
                b &&
                  (a = G.exec(i)) &&
                  (a[3] || "px") !== "px" &&
                  ((n.style[t] = i), (i = r.css(n, t))),
                zn(n, i, b)
              );
            },
          };
        }),
        (r.cssHooks.marginLeft = In(E.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat(Ft(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                  Pn(
                    e,
                    {
                      marginLeft: 0,
                    },
                    function () {
                      return e.getBoundingClientRect().left;
                    }
                  )) + "px"
            );
        })),
        r.each(
          {
            margin: "",
            padding: "",
            border: "Width",
          },
          function (e, t) {
            (r.cssHooks[e + t] = {
              expand: function (n) {
                for (
                  var i = 0,
                    o = {},
                    a = typeof n == "string" ? n.split(" ") : [n];
                  i < 4;
                  i++
                )
                  o[e + W[i] + t] = a[i] || a[i - 2] || a[0];
                return o;
              },
            }),
              e !== "margin" && (r.cssHooks[e + t].set = zn);
          }
        ),
        r.fn.extend({
          css: function (e, t) {
            return rt(
              this,
              function (n, i, o) {
                var a,
                  s,
                  f = {},
                  c = 0;
                if (Array.isArray(i)) {
                  for (a = Kt(n), s = i.length; c < s; c++)
                    f[i[c]] = r.css(n, i[c], !1, a);
                  return f;
                }
                return o !== void 0 ? r.style(n, i, o) : r.css(n, i);
              },
              e,
              t,
              arguments.length > 1
            );
          },
        });
      function nt(e, t, n, i, o) {
        return new nt.prototype.init(e, t, n, i, o);
      }
      (r.Tween = nt),
        (nt.prototype = {
          constructor: nt,
          init: function (e, t, n, i, o, a) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = o || r.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = i),
              (this.unit = a || (r.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
            var e = nt.propHooks[this.prop];
            return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
          },
          run: function (e) {
            var t,
              n = nt.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t =
                    r.easing[this.easing](
                      e,
                      this.options.duration * e,
                      0,
                      1,
                      this.options.duration
                    ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : nt.propHooks._default.set(this),
              this
            );
          },
        }),
        (nt.prototype.init.prototype = nt.prototype),
        (nt.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return e.elem.nodeType !== 1 ||
                (e.elem[e.prop] != null && e.elem.style[e.prop] == null)
                ? e.elem[e.prop]
                : ((t = r.css(e.elem, e.prop, "")), !t || t === "auto" ? 0 : t);
            },
            set: function (e) {
              r.fx.step[e.prop]
                ? r.fx.step[e.prop](e)
                : e.elem.nodeType === 1 &&
                  (r.cssHooks[e.prop] || e.elem.style[ln(e.prop)] != null)
                ? r.style(e.elem, e.prop, e.now + e.unit)
                : (e.elem[e.prop] = e.now);
            },
          },
        }),
        (nt.propHooks.scrollTop = nt.propHooks.scrollLeft =
          {
            set: function (e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
          }),
        (r.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (r.fx = nt.prototype.init),
        (r.fx.step = {});
      var Pt,
        Zt,
        Ni = /^(?:toggle|show|hide)$/,
        ji = /queueHooks$/;
      function pn() {
        Zt &&
          (O.hidden === !1 && p.requestAnimationFrame
            ? p.requestAnimationFrame(pn)
            : p.setTimeout(pn, r.fx.interval),
          r.fx.tick());
      }
      function Wn() {
        return (
          p.setTimeout(function () {
            Pt = void 0;
          }),
          (Pt = Date.now())
        );
      }
      function en(e, t) {
        var n,
          i = 0,
          o = {
            height: e,
          };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
          (n = W[i]), (o["margin" + n] = o["padding" + n] = e);
        return t && (o.opacity = o.width = e), o;
      }
      function Un(e, t, n) {
        for (
          var i,
            o = (ft.tweeners[t] || []).concat(ft.tweeners["*"]),
            a = 0,
            s = o.length;
          a < s;
          a++
        )
          if ((i = o[a].call(n, t, e))) return i;
      }
      function _i(e, t, n) {
        var i,
          o,
          a,
          s,
          f,
          c,
          d,
          b,
          C = "width" in t || "height" in t,
          m = this,
          L = {},
          ae = e.style,
          we = e.nodeType && ce(e),
          de = J.get(e, "fxshow");
        n.queue ||
          ((s = r._queueHooks(e, "fx")),
          s.unqueued == null &&
            ((s.unqueued = 0),
            (f = s.empty.fire),
            (s.empty.fire = function () {
              s.unqueued || f();
            })),
          s.unqueued++,
          m.always(function () {
            m.always(function () {
              s.unqueued--, r.queue(e, "fx").length || s.empty.fire();
            });
          }));
        for (i in t)
          if (((o = t[i]), Ni.test(o))) {
            if (
              (delete t[i],
              (a = a || o === "toggle"),
              o === (we ? "hide" : "show"))
            )
              if (o === "show" && de && de[i] !== void 0) we = !0;
              else continue;
            L[i] = (de && de[i]) || r.style(e, i);
          }
        if (((c = !r.isEmptyObject(t)), !(!c && r.isEmptyObject(L)))) {
          C &&
            e.nodeType === 1 &&
            ((n.overflow = [ae.overflow, ae.overflowX, ae.overflowY]),
            (d = de && de.display),
            d == null && (d = J.get(e, "display")),
            (b = r.css(e, "display")),
            b === "none" &&
              (d
                ? (b = d)
                : (De([e], !0),
                  (d = e.style.display || d),
                  (b = r.css(e, "display")),
                  De([e]))),
            (b === "inline" || (b === "inline-block" && d != null)) &&
              r.css(e, "float") === "none" &&
              (c ||
                (m.done(function () {
                  ae.display = d;
                }),
                d == null && ((b = ae.display), (d = b === "none" ? "" : b))),
              (ae.display = "inline-block"))),
            n.overflow &&
              ((ae.overflow = "hidden"),
              m.always(function () {
                (ae.overflow = n.overflow[0]),
                  (ae.overflowX = n.overflow[1]),
                  (ae.overflowY = n.overflow[2]);
              })),
            (c = !1);
          for (i in L)
            c ||
              (de
                ? "hidden" in de && (we = de.hidden)
                : (de = J.access(e, "fxshow", {
                    display: d,
                  })),
              a && (de.hidden = !we),
              we && De([e], !0),
              m.done(function () {
                we || De([e]), J.remove(e, "fxshow");
                for (i in L) r.style(e, i, L[i]);
              })),
              (c = Un(we ? de[i] : 0, i, m)),
              i in de ||
                ((de[i] = c.start), we && ((c.end = c.start), (c.start = 0)));
        }
      }
      function qi(e, t) {
        var n, i, o, a, s;
        for (n in e)
          if (
            ((i = Be(n)),
            (o = t[i]),
            (a = e[n]),
            Array.isArray(a) && ((o = a[1]), (a = e[n] = a[0])),
            n !== i && ((e[i] = a), delete e[n]),
            (s = r.cssHooks[i]),
            s && "expand" in s)
          ) {
            (a = s.expand(a)), delete e[i];
            for (n in a) n in e || ((e[n] = a[n]), (t[n] = o));
          } else t[i] = o;
      }
      function ft(e, t, n) {
        var i,
          o,
          a = 0,
          s = ft.prefilters.length,
          f = r.Deferred().always(function () {
            delete c.elem;
          }),
          c = function () {
            if (o) return !1;
            for (
              var C = Pt || Wn(),
                m = Math.max(0, d.startTime + d.duration - C),
                L = m / d.duration || 0,
                ae = 1 - L,
                we = 0,
                de = d.tweens.length;
              we < de;
              we++
            )
              d.tweens[we].run(ae);
            return (
              f.notifyWith(e, [d, ae, m]),
              ae < 1 && de
                ? m
                : (de || f.notifyWith(e, [d, 1, 0]), f.resolveWith(e, [d]), !1)
            );
          },
          d = f.promise({
            elem: e,
            props: r.extend({}, t),
            opts: r.extend(
              !0,
              {
                specialEasing: {},
                easing: r.easing._default,
              },
              n
            ),
            originalProperties: t,
            originalOptions: n,
            startTime: Pt || Wn(),
            duration: n.duration,
            tweens: [],
            createTween: function (C, m) {
              var L = r.Tween(
                e,
                d.opts,
                C,
                m,
                d.opts.specialEasing[C] || d.opts.easing
              );
              return d.tweens.push(L), L;
            },
            stop: function (C) {
              var m = 0,
                L = C ? d.tweens.length : 0;
              if (o) return this;
              for (o = !0; m < L; m++) d.tweens[m].run(1);
              return (
                C
                  ? (f.notifyWith(e, [d, 1, 0]), f.resolveWith(e, [d, C]))
                  : f.rejectWith(e, [d, C]),
                this
              );
            },
          }),
          b = d.props;
        for (qi(b, d.opts.specialEasing); a < s; a++)
          if (((i = ft.prefilters[a].call(d, e, b, d.opts)), i))
            return (
              v(i.stop) &&
                (r._queueHooks(d.elem, d.opts.queue).stop = i.stop.bind(i)),
              i
            );
        return (
          r.map(b, Un, d),
          v(d.opts.start) && d.opts.start.call(e, d),
          d
            .progress(d.opts.progress)
            .done(d.opts.done, d.opts.complete)
            .fail(d.opts.fail)
            .always(d.opts.always),
          r.fx.timer(
            r.extend(c, {
              elem: e,
              anim: d,
              queue: d.opts.queue,
            })
          ),
          d
        );
      }
      (r.Animation = r.extend(ft, {
        tweeners: {
          "*": [
            function (e, t) {
              var n = this.createTween(e, t);
              return Pe(n.elem, e, G.exec(t), n), n;
            },
          ],
        },
        tweener: function (e, t) {
          v(e) ? ((t = e), (e = ["*"])) : (e = e.match(Le));
          for (var n, i = 0, o = e.length; i < o; i++)
            (n = e[i]),
              (ft.tweeners[n] = ft.tweeners[n] || []),
              ft.tweeners[n].unshift(t);
        },
        prefilters: [_i],
        prefilter: function (e, t) {
          t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
        },
      })),
        (r.speed = function (e, t, n) {
          var i =
            e && typeof e == "object"
              ? r.extend({}, e)
              : {
                  complete: n || (!n && t) || (v(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !v(t) && t),
                };
          return (
            r.fx.off
              ? (i.duration = 0)
              : typeof i.duration != "number" &&
                (i.duration in r.fx.speeds
                  ? (i.duration = r.fx.speeds[i.duration])
                  : (i.duration = r.fx.speeds._default)),
            (i.queue == null || i.queue === !0) && (i.queue = "fx"),
            (i.old = i.complete),
            (i.complete = function () {
              v(i.old) && i.old.call(this), i.queue && r.dequeue(this, i.queue);
            }),
            i
          );
        }),
        r.fn.extend({
          fadeTo: function (e, t, n, i) {
            return this.filter(ce).css("opacity", 0).show().end().animate(
              {
                opacity: t,
              },
              e,
              n,
              i
            );
          },
          animate: function (e, t, n, i) {
            var o = r.isEmptyObject(e),
              a = r.speed(t, n, i),
              s = function () {
                var f = ft(this, r.extend({}, e), a);
                (o || J.get(this, "finish")) && f.stop(!0);
              };
            return (
              (s.finish = s),
              o || a.queue === !1 ? this.each(s) : this.queue(a.queue, s)
            );
          },
          stop: function (e, t, n) {
            var i = function (o) {
              var a = o.stop;
              delete o.stop, a(n);
            };
            return (
              typeof e != "string" && ((n = t), (t = e), (e = void 0)),
              t && this.queue(e || "fx", []),
              this.each(function () {
                var o = !0,
                  a = e != null && e + "queueHooks",
                  s = r.timers,
                  f = J.get(this);
                if (a) f[a] && f[a].stop && i(f[a]);
                else for (a in f) f[a] && f[a].stop && ji.test(a) && i(f[a]);
                for (a = s.length; a--; )
                  s[a].elem === this &&
                    (e == null || s[a].queue === e) &&
                    (s[a].anim.stop(n), (o = !1), s.splice(a, 1));
                (o || !n) && r.dequeue(this, e);
              })
            );
          },
          finish: function (e) {
            return (
              e !== !1 && (e = e || "fx"),
              this.each(function () {
                var t,
                  n = J.get(this),
                  i = n[e + "queue"],
                  o = n[e + "queueHooks"],
                  a = r.timers,
                  s = i ? i.length : 0;
                for (
                  n.finish = !0,
                    r.queue(this, e, []),
                    o && o.stop && o.stop.call(this, !0),
                    t = a.length;
                  t--;

                )
                  a[t].elem === this &&
                    a[t].queue === e &&
                    (a[t].anim.stop(!0), a.splice(t, 1));
                for (t = 0; t < s; t++)
                  i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        r.each(["toggle", "show", "hide"], function (e, t) {
          var n = r.fn[t];
          r.fn[t] = function (i, o, a) {
            return i == null || typeof i == "boolean"
              ? n.apply(this, arguments)
              : this.animate(en(t, !0), i, o, a);
          };
        }),
        r.each(
          {
            slideDown: en("show"),
            slideUp: en("hide"),
            slideToggle: en("toggle"),
            fadeIn: {
              opacity: "show",
            },
            fadeOut: {
              opacity: "hide",
            },
            fadeToggle: {
              opacity: "toggle",
            },
          },
          function (e, t) {
            r.fn[e] = function (n, i, o) {
              return this.animate(t, n, i, o);
            };
          }
        ),
        (r.timers = []),
        (r.fx.tick = function () {
          var e,
            t = 0,
            n = r.timers;
          for (Pt = Date.now(); t < n.length; t++)
            (e = n[t]), !e() && n[t] === e && n.splice(t--, 1);
          n.length || r.fx.stop(), (Pt = void 0);
        }),
        (r.fx.timer = function (e) {
          r.timers.push(e), r.fx.start();
        }),
        (r.fx.interval = 13),
        (r.fx.start = function () {
          Zt || ((Zt = !0), pn());
        }),
        (r.fx.stop = function () {
          Zt = null;
        }),
        (r.fx.speeds = {
          slow: 600,
          fast: 200,
          _default: 400,
        }),
        (r.fn.delay = function (e, t) {
          return (
            (e = (r.fx && r.fx.speeds[e]) || e),
            (t = t || "fx"),
            this.queue(t, function (n, i) {
              var o = p.setTimeout(n, e);
              i.stop = function () {
                p.clearTimeout(o);
              };
            })
          );
        }),
        (function () {
          var e = O.createElement("input"),
            t = O.createElement("select"),
            n = t.appendChild(O.createElement("option"));
          (e.type = "checkbox"),
            (E.checkOn = e.value !== ""),
            (E.optSelected = n.selected),
            (e = O.createElement("input")),
            (e.value = "t"),
            (e.type = "radio"),
            (E.radioValue = e.value === "t");
        })();
      var Vn,
        $t = r.expr.attrHandle;
      r.fn.extend({
        attr: function (e, t) {
          return rt(this, r.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
          return this.each(function () {
            r.removeAttr(this, e);
          });
        },
      }),
        r.extend({
          attr: function (e, t, n) {
            var i,
              o,
              a = e.nodeType;
            if (!(a === 3 || a === 8 || a === 2)) {
              if (typeof e.getAttribute > "u") return r.prop(e, t, n);
              if (
                ((a !== 1 || !r.isXMLDoc(e)) &&
                  (o =
                    r.attrHooks[t.toLowerCase()] ||
                    (r.expr.match.bool.test(t) ? Vn : void 0)),
                n !== void 0)
              ) {
                if (n === null) {
                  r.removeAttr(e, t);
                  return;
                }
                return o && "set" in o && (i = o.set(e, n, t)) !== void 0
                  ? i
                  : (e.setAttribute(t, n + ""), n);
              }
              return o && "get" in o && (i = o.get(e, t)) !== null
                ? i
                : ((i = r.find.attr(e, t)), i ?? void 0);
            }
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!E.radioValue && t === "radio" && q(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              },
            },
          },
          removeAttr: function (e, t) {
            var n,
              i = 0,
              o = t && t.match(Le);
            if (o && e.nodeType === 1)
              for (; (n = o[i++]); ) e.removeAttribute(n);
          },
        }),
        (Vn = {
          set: function (e, t, n) {
            return t === !1 ? r.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        r.each(r.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = $t[t] || r.find.attr;
          $t[t] = function (i, o, a) {
            var s,
              f,
              c = o.toLowerCase();
            return (
              a ||
                ((f = $t[c]),
                ($t[c] = s),
                (s = n(i, o, a) != null ? c : null),
                ($t[c] = f)),
              s
            );
          };
        });
      var Mi = /^(?:input|select|textarea|button)$/i,
        Pi = /^(?:a|area)$/i;
      r.fn.extend({
        prop: function (e, t) {
          return rt(this, r.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[r.propFix[e] || e];
          });
        },
      }),
        r.extend({
          prop: function (e, t, n) {
            var i,
              o,
              a = e.nodeType;
            if (!(a === 3 || a === 8 || a === 2))
              return (
                (a !== 1 || !r.isXMLDoc(e)) &&
                  ((t = r.propFix[t] || t), (o = r.propHooks[t])),
                n !== void 0
                  ? o && "set" in o && (i = o.set(e, n, t)) !== void 0
                    ? i
                    : (e[t] = n)
                  : o && "get" in o && (i = o.get(e, t)) !== null
                  ? i
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = r.find.attr(e, "tabindex");
                return t
                  ? parseInt(t, 10)
                  : Mi.test(e.nodeName) || (Pi.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: {
            for: "htmlFor",
            class: "className",
          },
        }),
        E.optSelected ||
          (r.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
              var t = e.parentNode;
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
          }),
        r.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            r.propFix[this.toLowerCase()] = this;
          }
        );
      function At(e) {
        var t = e.match(Le) || [];
        return t.join(" ");
      }
      function Lt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
      }
      function hn(e) {
        return Array.isArray(e)
          ? e
          : typeof e == "string"
          ? e.match(Le) || []
          : [];
      }
      r.fn.extend({
        addClass: function (e) {
          var t, n, i, o, a, s;
          return v(e)
            ? this.each(function (f) {
                r(this).addClass(e.call(this, f, Lt(this)));
              })
            : ((t = hn(e)),
              t.length
                ? this.each(function () {
                    if (
                      ((i = Lt(this)),
                      (n = this.nodeType === 1 && " " + At(i) + " "),
                      n)
                    ) {
                      for (a = 0; a < t.length; a++)
                        (o = t[a]),
                          n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                      (s = At(n)), i !== s && this.setAttribute("class", s);
                    }
                  })
                : this);
        },
        removeClass: function (e) {
          var t, n, i, o, a, s;
          return v(e)
            ? this.each(function (f) {
                r(this).removeClass(e.call(this, f, Lt(this)));
              })
            : arguments.length
            ? ((t = hn(e)),
              t.length
                ? this.each(function () {
                    if (
                      ((i = Lt(this)),
                      (n = this.nodeType === 1 && " " + At(i) + " "),
                      n)
                    ) {
                      for (a = 0; a < t.length; a++)
                        for (o = t[a]; n.indexOf(" " + o + " ") > -1; )
                          n = n.replace(" " + o + " ", " ");
                      (s = At(n)), i !== s && this.setAttribute("class", s);
                    }
                  })
                : this)
            : this.attr("class", "");
        },
        toggleClass: function (e, t) {
          var n,
            i,
            o,
            a,
            s = typeof e,
            f = s === "string" || Array.isArray(e);
          return v(e)
            ? this.each(function (c) {
                r(this).toggleClass(e.call(this, c, Lt(this), t), t);
              })
            : typeof t == "boolean" && f
            ? t
              ? this.addClass(e)
              : this.removeClass(e)
            : ((n = hn(e)),
              this.each(function () {
                if (f)
                  for (a = r(this), o = 0; o < n.length; o++)
                    (i = n[o]),
                      a.hasClass(i) ? a.removeClass(i) : a.addClass(i);
                else
                  (e === void 0 || s === "boolean") &&
                    ((i = Lt(this)),
                    i && J.set(this, "__className__", i),
                    this.setAttribute &&
                      this.setAttribute(
                        "class",
                        i || e === !1 ? "" : J.get(this, "__className__") || ""
                      ));
              }));
        },
        hasClass: function (e) {
          var t,
            n,
            i = 0;
          for (t = " " + e + " "; (n = this[i++]); )
            if (n.nodeType === 1 && (" " + At(Lt(n)) + " ").indexOf(t) > -1)
              return !0;
          return !1;
        },
      });
      var Ii = /\r/g;
      r.fn.extend({
        val: function (e) {
          var t,
            n,
            i,
            o = this[0];
          return arguments.length
            ? ((i = v(e)),
              this.each(function (a) {
                var s;
                this.nodeType === 1 &&
                  (i ? (s = e.call(this, a, r(this).val())) : (s = e),
                  s == null
                    ? (s = "")
                    : typeof s == "number"
                    ? (s += "")
                    : Array.isArray(s) &&
                      (s = r.map(s, function (f) {
                        return f == null ? "" : f + "";
                      })),
                  (t =
                    r.valHooks[this.type] ||
                    r.valHooks[this.nodeName.toLowerCase()]),
                  (!t || !("set" in t) || t.set(this, s, "value") === void 0) &&
                    (this.value = s));
              }))
            : o
            ? ((t = r.valHooks[o.type] || r.valHooks[o.nodeName.toLowerCase()]),
              t && "get" in t && (n = t.get(o, "value")) !== void 0
                ? n
                : ((n = o.value),
                  typeof n == "string" ? n.replace(Ii, "") : n ?? ""))
            : void 0;
        },
      }),
        r.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = r.find.attr(e, "value");
                return t ?? At(r.text(e));
              },
            },
            select: {
              get: function (e) {
                var t,
                  n,
                  i,
                  o = e.options,
                  a = e.selectedIndex,
                  s = e.type === "select-one",
                  f = s ? null : [],
                  c = s ? a + 1 : o.length;
                for (a < 0 ? (i = c) : (i = s ? a : 0); i < c; i++)
                  if (
                    ((n = o[i]),
                    (n.selected || i === a) &&
                      !n.disabled &&
                      (!n.parentNode.disabled || !q(n.parentNode, "optgroup")))
                  ) {
                    if (((t = r(n).val()), s)) return t;
                    f.push(t);
                  }
                return f;
              },
              set: function (e, t) {
                for (
                  var n, i, o = e.options, a = r.makeArray(t), s = o.length;
                  s--;

                )
                  (i = o[s]),
                    (i.selected =
                      r.inArray(r.valHooks.option.get(i), a) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), a;
              },
            },
          },
        }),
        r.each(["radio", "checkbox"], function () {
          (r.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t))
                return (e.checked = r.inArray(r(e).val(), t) > -1);
            },
          }),
            E.checkOn ||
              (r.valHooks[this].get = function (e) {
                return e.getAttribute("value") === null ? "on" : e.value;
              });
        });
      var zt = p.location,
        Gn = {
          guid: Date.now(),
        },
        gn = /\?/;
      r.parseXML = function (e) {
        var t, n;
        if (!e || typeof e != "string") return null;
        try {
          t = new p.DOMParser().parseFromString(e, "text/xml");
        } catch {}
        return (
          (n = t && t.getElementsByTagName("parsererror")[0]),
          (!t || n) &&
            r.error(
              "Invalid XML: " +
                (n
                  ? r.map(n.childNodes, function (i) {
                      return i.textContent;
                    }).join(`
`)
                  : e)
            ),
          t
        );
      };
      var Xn = /^(?:focusinfocus|focusoutblur)$/,
        Yn = function (e) {
          e.stopPropagation();
        };
      r.extend(r.event, {
        trigger: function (e, t, n, i) {
          var o,
            a,
            s,
            f,
            c,
            d,
            b,
            C,
            m = [n || O],
            L = ie.call(e, "type") ? e.type : e,
            ae = ie.call(e, "namespace") ? e.namespace.split(".") : [];
          if (
            ((a = C = s = n = n || O),
            !(n.nodeType === 3 || n.nodeType === 8) &&
              !Xn.test(L + r.event.triggered) &&
              (L.indexOf(".") > -1 &&
                ((ae = L.split(".")), (L = ae.shift()), ae.sort()),
              (c = L.indexOf(":") < 0 && "on" + L),
              (e = e[r.expando]
                ? e
                : new r.Event(L, typeof e == "object" && e)),
              (e.isTrigger = i ? 2 : 3),
              (e.namespace = ae.join(".")),
              (e.rnamespace = e.namespace
                ? new RegExp("(^|\\.)" + ae.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (e.result = void 0),
              e.target || (e.target = n),
              (t = t == null ? [e] : r.makeArray(t, [e])),
              (b = r.event.special[L] || {}),
              !(!i && b.trigger && b.trigger.apply(n, t) === !1)))
          ) {
            if (!i && !b.noBubble && !X(n)) {
              for (
                f = b.delegateType || L, Xn.test(f + L) || (a = a.parentNode);
                a;
                a = a.parentNode
              )
                m.push(a), (s = a);
              s === (n.ownerDocument || O) &&
                m.push(s.defaultView || s.parentWindow || p);
            }
            for (o = 0; (a = m[o++]) && !e.isPropagationStopped(); )
              (C = a),
                (e.type = o > 1 ? f : b.bindType || L),
                (d =
                  (J.get(a, "events") || Object.create(null))[e.type] &&
                  J.get(a, "handle")),
                d && d.apply(a, t),
                (d = c && a[c]),
                d &&
                  d.apply &&
                  St(a) &&
                  ((e.result = d.apply(a, t)),
                  e.result === !1 && e.preventDefault());
            return (
              (e.type = L),
              !i &&
                !e.isDefaultPrevented() &&
                (!b._default || b._default.apply(m.pop(), t) === !1) &&
                St(n) &&
                c &&
                v(n[L]) &&
                !X(n) &&
                ((s = n[c]),
                s && (n[c] = null),
                (r.event.triggered = L),
                e.isPropagationStopped() && C.addEventListener(L, Yn),
                n[L](),
                e.isPropagationStopped() && C.removeEventListener(L, Yn),
                (r.event.triggered = void 0),
                s && (n[c] = s)),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          var i = r.extend(new r.Event(), n, {
            type: e,
            isSimulated: !0,
          });
          r.event.trigger(i, null, t);
        },
      }),
        r.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              r.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return r.event.trigger(e, t, n, !0);
          },
        });
      var Hi = /\[\]$/,
        Qn = /\r?\n/g,
        Ri = /^(?:submit|button|image|reset|file)$/i,
        Fi = /^(?:input|select|textarea|keygen)/i;
      function mn(e, t, n, i) {
        var o;
        if (Array.isArray(t))
          r.each(t, function (a, s) {
            n || Hi.test(e)
              ? i(e, s)
              : mn(
                  e + "[" + (typeof s == "object" && s != null ? a : "") + "]",
                  s,
                  n,
                  i
                );
          });
        else if (!n && F(t) === "object")
          for (o in t) mn(e + "[" + o + "]", t[o], n, i);
        else i(e, t);
      }
      (r.param = function (e, t) {
        var n,
          i = [],
          o = function (a, s) {
            var f = v(s) ? s() : s;
            i[i.length] =
              encodeURIComponent(a) + "=" + encodeURIComponent(f ?? "");
          };
        if (e == null) return "";
        if (Array.isArray(e) || (e.jquery && !r.isPlainObject(e)))
          r.each(e, function () {
            o(this.name, this.value);
          });
        else for (n in e) mn(n, e[n], t, o);
        return i.join("&");
      }),
        r.fn.extend({
          serialize: function () {
            return r.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = r.prop(this, "elements");
              return e ? r.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return (
                  this.name &&
                  !r(this).is(":disabled") &&
                  Fi.test(this.nodeName) &&
                  !Ri.test(e) &&
                  (this.checked || !Ie.test(e))
                );
              })
              .map(function (e, t) {
                var n = r(this).val();
                return n == null
                  ? null
                  : Array.isArray(n)
                  ? r.map(n, function (i) {
                      return {
                        name: t.name,
                        value: i.replace(
                          Qn,
                          `\r
`
                        ),
                      };
                    })
                  : {
                      name: t.name,
                      value: n.replace(
                        Qn,
                        `\r
`
                      ),
                    };
              })
              .get();
          },
        });
      var $i = /%20/g,
        zi = /#.*$/,
        Bi = /([?&])_=[^&]*/,
        Wi = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ui = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Vi = /^(?:GET|HEAD)$/,
        Gi = /^\/\//,
        Jn = {},
        yn = {},
        Kn = "*/".concat("*"),
        vn = O.createElement("a");
      vn.href = zt.href;
      function Zn(e) {
        return function (t, n) {
          typeof t != "string" && ((n = t), (t = "*"));
          var i,
            o = 0,
            a = t.toLowerCase().match(Le) || [];
          if (v(n))
            for (; (i = a[o++]); )
              i[0] === "+"
                ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
                : (e[i] = e[i] || []).push(n);
        };
      }
      function ei(e, t, n, i) {
        var o = {},
          a = e === yn;
        function s(f) {
          var c;
          return (
            (o[f] = !0),
            r.each(e[f] || [], function (d, b) {
              var C = b(t, n, i);
              if (typeof C == "string" && !a && !o[C])
                return t.dataTypes.unshift(C), s(C), !1;
              if (a) return !(c = C);
            }),
            c
          );
        }
        return s(t.dataTypes[0]) || (!o["*"] && s("*"));
      }
      function bn(e, t) {
        var n,
          i,
          o = r.ajaxSettings.flatOptions || {};
        for (n in t) t[n] !== void 0 && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && r.extend(!0, e, i), e;
      }
      function Xi(e, t, n) {
        for (var i, o, a, s, f = e.contents, c = e.dataTypes; c[0] === "*"; )
          c.shift(),
            i === void 0 &&
              (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i) {
          for (o in f)
            if (f[o] && f[o].test(i)) {
              c.unshift(o);
              break;
            }
        }
        if (c[0] in n) a = c[0];
        else {
          for (o in n) {
            if (!c[0] || e.converters[o + " " + c[0]]) {
              a = o;
              break;
            }
            s || (s = o);
          }
          a = a || s;
        }
        if (a) return a !== c[0] && c.unshift(a), n[a];
      }
      function Yi(e, t, n, i) {
        var o,
          a,
          s,
          f,
          c,
          d = {},
          b = e.dataTypes.slice();
        if (b[1]) for (s in e.converters) d[s.toLowerCase()] = e.converters[s];
        for (a = b.shift(); a; )
          if (
            (e.responseFields[a] && (n[e.responseFields[a]] = t),
            !c && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            (c = a),
            (a = b.shift()),
            a)
          ) {
            if (a === "*") a = c;
            else if (c !== "*" && c !== a) {
              if (((s = d[c + " " + a] || d["* " + a]), !s)) {
                for (o in d)
                  if (
                    ((f = o.split(" ")),
                    f[1] === a &&
                      ((s = d[c + " " + f[0]] || d["* " + f[0]]), s))
                  ) {
                    s === !0
                      ? (s = d[o])
                      : d[o] !== !0 && ((a = f[0]), b.unshift(f[1]));
                    break;
                  }
              }
              if (s !== !0)
                if (s && e.throws) t = s(t);
                else
                  try {
                    t = s(t);
                  } catch (C) {
                    return {
                      state: "parsererror",
                      error: s ? C : "No conversion from " + c + " to " + a,
                    };
                  }
            }
          }
        return {
          state: "success",
          data: t,
        };
      }
      r.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: zt.href,
          type: "GET",
          isLocal: Ui.test(zt.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": Kn,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript",
          },
          contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/,
          },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON",
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": JSON.parse,
            "text xml": r.parseXML,
          },
          flatOptions: {
            url: !0,
            context: !0,
          },
        },
        ajaxSetup: function (e, t) {
          return t ? bn(bn(e, r.ajaxSettings), t) : bn(r.ajaxSettings, e);
        },
        ajaxPrefilter: Zn(Jn),
        ajaxTransport: Zn(yn),
        ajax: function (e, t) {
          typeof e == "object" && ((t = e), (e = void 0)), (t = t || {});
          var n,
            i,
            o,
            a,
            s,
            f,
            c,
            d,
            b,
            C,
            m = r.ajaxSetup({}, t),
            L = m.context || m,
            ae = m.context && (L.nodeType || L.jquery) ? r(L) : r.event,
            we = r.Deferred(),
            de = r.Callbacks("once memory"),
            Je = m.statusCode || {},
            We = {},
            ht = {},
            gt = "canceled",
            ve = {
              readyState: 0,
              getResponseHeader: function (xe) {
                var $e;
                if (c) {
                  if (!a)
                    for (a = {}; ($e = Wi.exec(o)); )
                      a[$e[1].toLowerCase() + " "] = (
                        a[$e[1].toLowerCase() + " "] || []
                      ).concat($e[2]);
                  $e = a[xe.toLowerCase() + " "];
                }
                return $e == null ? null : $e.join(", ");
              },
              getAllResponseHeaders: function () {
                return c ? o : null;
              },
              setRequestHeader: function (xe, $e) {
                return (
                  c == null &&
                    ((xe = ht[xe.toLowerCase()] = ht[xe.toLowerCase()] || xe),
                    (We[xe] = $e)),
                  this
                );
              },
              overrideMimeType: function (xe) {
                return c == null && (m.mimeType = xe), this;
              },
              statusCode: function (xe) {
                var $e;
                if (xe)
                  if (c) ve.always(xe[ve.status]);
                  else for ($e in xe) Je[$e] = [Je[$e], xe[$e]];
                return this;
              },
              abort: function (xe) {
                var $e = xe || gt;
                return n && n.abort($e), Ot(0, $e), this;
              },
            };
          if (
            (we.promise(ve),
            (m.url = ((e || m.url || zt.href) + "").replace(
              Gi,
              zt.protocol + "//"
            )),
            (m.type = t.method || t.type || m.method || m.type),
            (m.dataTypes = (m.dataType || "*").toLowerCase().match(Le) || [""]),
            m.crossDomain == null)
          ) {
            f = O.createElement("a");
            try {
              (f.href = m.url),
                (f.href = f.href),
                (m.crossDomain =
                  vn.protocol + "//" + vn.host != f.protocol + "//" + f.host);
            } catch {
              m.crossDomain = !0;
            }
          }
          if (
            (m.data &&
              m.processData &&
              typeof m.data != "string" &&
              (m.data = r.param(m.data, m.traditional)),
            ei(Jn, m, t, ve),
            c)
          )
            return ve;
          (d = r.event && m.global),
            d && r.active++ === 0 && r.event.trigger("ajaxStart"),
            (m.type = m.type.toUpperCase()),
            (m.hasContent = !Vi.test(m.type)),
            (i = m.url.replace(zi, "")),
            m.hasContent
              ? m.data &&
                m.processData &&
                (m.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) === 0 &&
                (m.data = m.data.replace($i, "+"))
              : ((C = m.url.slice(i.length)),
                m.data &&
                  (m.processData || typeof m.data == "string") &&
                  ((i += (gn.test(i) ? "&" : "?") + m.data), delete m.data),
                m.cache === !1 &&
                  ((i = i.replace(Bi, "$1")),
                  (C = (gn.test(i) ? "&" : "?") + "_=" + Gn.guid++ + C)),
                (m.url = i + C)),
            m.ifModified &&
              (r.lastModified[i] &&
                ve.setRequestHeader("If-Modified-Since", r.lastModified[i]),
              r.etag[i] && ve.setRequestHeader("If-None-Match", r.etag[i])),
            ((m.data && m.hasContent && m.contentType !== !1) ||
              t.contentType) &&
              ve.setRequestHeader("Content-Type", m.contentType),
            ve.setRequestHeader(
              "Accept",
              m.dataTypes[0] && m.accepts[m.dataTypes[0]]
                ? m.accepts[m.dataTypes[0]] +
                    (m.dataTypes[0] !== "*" ? ", " + Kn + "; q=0.01" : "")
                : m.accepts["*"]
            );
          for (b in m.headers) ve.setRequestHeader(b, m.headers[b]);
          if (m.beforeSend && (m.beforeSend.call(L, ve, m) === !1 || c))
            return ve.abort();
          if (
            ((gt = "abort"),
            de.add(m.complete),
            ve.done(m.success),
            ve.fail(m.error),
            (n = ei(yn, m, t, ve)),
            !n)
          )
            Ot(-1, "No Transport");
          else {
            if (((ve.readyState = 1), d && ae.trigger("ajaxSend", [ve, m]), c))
              return ve;
            m.async &&
              m.timeout > 0 &&
              (s = p.setTimeout(function () {
                ve.abort("timeout");
              }, m.timeout));
            try {
              (c = !1), n.send(We, Ot);
            } catch (xe) {
              if (c) throw xe;
              Ot(-1, xe);
            }
          }
          function Ot(xe, $e, Wt, xn) {
            var mt,
              Ut,
              yt,
              Ct,
              Et,
              ot = $e;
            c ||
              ((c = !0),
              s && p.clearTimeout(s),
              (n = void 0),
              (o = xn || ""),
              (ve.readyState = xe > 0 ? 4 : 0),
              (mt = (xe >= 200 && xe < 300) || xe === 304),
              Wt && (Ct = Xi(m, ve, Wt)),
              !mt &&
                r.inArray("script", m.dataTypes) > -1 &&
                r.inArray("json", m.dataTypes) < 0 &&
                (m.converters["text script"] = function () {}),
              (Ct = Yi(m, Ct, ve, mt)),
              mt
                ? (m.ifModified &&
                    ((Et = ve.getResponseHeader("Last-Modified")),
                    Et && (r.lastModified[i] = Et),
                    (Et = ve.getResponseHeader("etag")),
                    Et && (r.etag[i] = Et)),
                  xe === 204 || m.type === "HEAD"
                    ? (ot = "nocontent")
                    : xe === 304
                    ? (ot = "notmodified")
                    : ((ot = Ct.state),
                      (Ut = Ct.data),
                      (yt = Ct.error),
                      (mt = !yt)))
                : ((yt = ot),
                  (xe || !ot) && ((ot = "error"), xe < 0 && (xe = 0))),
              (ve.status = xe),
              (ve.statusText = ($e || ot) + ""),
              mt
                ? we.resolveWith(L, [Ut, ot, ve])
                : we.rejectWith(L, [ve, ot, yt]),
              ve.statusCode(Je),
              (Je = void 0),
              d &&
                ae.trigger(mt ? "ajaxSuccess" : "ajaxError", [
                  ve,
                  m,
                  mt ? Ut : yt,
                ]),
              de.fireWith(L, [ve, ot]),
              d &&
                (ae.trigger("ajaxComplete", [ve, m]),
                --r.active || r.event.trigger("ajaxStop")));
          }
          return ve;
        },
        getJSON: function (e, t, n) {
          return r.get(e, t, n, "json");
        },
        getScript: function (e, t) {
          return r.get(e, void 0, t, "script");
        },
      }),
        r.each(["get", "post"], function (e, t) {
          r[t] = function (n, i, o, a) {
            return (
              v(i) && ((a = a || o), (o = i), (i = void 0)),
              r.ajax(
                r.extend(
                  {
                    url: n,
                    type: t,
                    dataType: a,
                    data: i,
                    success: o,
                  },
                  r.isPlainObject(n) && n
                )
              )
            );
          };
        }),
        r.ajaxPrefilter(function (e) {
          var t;
          for (t in e.headers)
            t.toLowerCase() === "content-type" &&
              (e.contentType = e.headers[t] || "");
        }),
        (r._evalUrl = function (e, t, n) {
          return r.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
              "text script": function () {},
            },
            dataFilter: function (i) {
              r.globalEval(i, t, n);
            },
          });
        }),
        r.fn.extend({
          wrapAll: function (e) {
            var t;
            return (
              this[0] &&
                (v(e) && (e = e.call(this[0])),
                (t = r(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var n = this; n.firstElementChild; )
                      n = n.firstElementChild;
                    return n;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (e) {
            return v(e)
              ? this.each(function (t) {
                  r(this).wrapInner(e.call(this, t));
                })
              : this.each(function () {
                  var t = r(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function (e) {
            var t = v(e);
            return this.each(function (n) {
              r(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function (e) {
            return (
              this.parent(e)
                .not("body")
                .each(function () {
                  r(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (r.expr.pseudos.hidden = function (e) {
          return !r.expr.pseudos.visible(e);
        }),
        (r.expr.pseudos.visible = function (e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (r.ajaxSettings.xhr = function () {
          try {
            return new p.XMLHttpRequest();
          } catch {}
        });
      var Qi = {
          0: 200,
          1223: 204,
        },
        Bt = r.ajaxSettings.xhr();
      (E.cors = !!Bt && "withCredentials" in Bt),
        (E.ajax = Bt = !!Bt),
        r.ajaxTransport(function (e) {
          var t, n;
          if (E.cors || (Bt && !e.crossDomain))
            return {
              send: function (i, o) {
                var a,
                  s = e.xhr();
                if (
                  (s.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                )
                  for (a in e.xhrFields) s[a] = e.xhrFields[a];
                e.mimeType &&
                  s.overrideMimeType &&
                  s.overrideMimeType(e.mimeType),
                  !e.crossDomain &&
                    !i["X-Requested-With"] &&
                    (i["X-Requested-With"] = "XMLHttpRequest");
                for (a in i) s.setRequestHeader(a, i[a]);
                (t = function (f) {
                  return function () {
                    t &&
                      ((t =
                        n =
                        s.onload =
                        s.onerror =
                        s.onabort =
                        s.ontimeout =
                        s.onreadystatechange =
                          null),
                      f === "abort"
                        ? s.abort()
                        : f === "error"
                        ? typeof s.status != "number"
                          ? o(0, "error")
                          : o(s.status, s.statusText)
                        : o(
                            Qi[s.status] || s.status,
                            s.statusText,
                            (s.responseType || "text") !== "text" ||
                              typeof s.responseText != "string"
                              ? {
                                  binary: s.response,
                                }
                              : {
                                  text: s.responseText,
                                },
                            s.getAllResponseHeaders()
                          ));
                  };
                }),
                  (s.onload = t()),
                  (n = s.onerror = s.ontimeout = t("error")),
                  s.onabort !== void 0
                    ? (s.onabort = n)
                    : (s.onreadystatechange = function () {
                        s.readyState === 4 &&
                          p.setTimeout(function () {
                            t && n();
                          });
                      }),
                  (t = t("abort"));
                try {
                  s.send((e.hasContent && e.data) || null);
                } catch (f) {
                  if (t) throw f;
                }
              },
              abort: function () {
                t && t();
              },
            };
        }),
        r.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        r.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: {
            script: /\b(?:java|ecma)script\b/,
          },
          converters: {
            "text script": function (e) {
              return r.globalEval(e), e;
            },
          },
        }),
        r.ajaxPrefilter("script", function (e) {
          e.cache === void 0 && (e.cache = !1),
            e.crossDomain && (e.type = "GET");
        }),
        r.ajaxTransport("script", function (e) {
          if (e.crossDomain || e.scriptAttrs) {
            var t, n;
            return {
              send: function (i, o) {
                (t = r("<script>")
                  .attr(e.scriptAttrs || {})
                  .prop({
                    charset: e.scriptCharset,
                    src: e.url,
                  })
                  .on(
                    "load error",
                    (n = function (a) {
                      t.remove(),
                        (n = null),
                        a && o(a.type === "error" ? 404 : 200, a.type);
                    })
                  )),
                  O.head.appendChild(t[0]);
              },
              abort: function () {
                n && n();
              },
            };
          }
        });
      var ti = [],
        wn = /(=)\?(?=&|$)|\?\?/;
      r.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = ti.pop() || r.expando + "_" + Gn.guid++;
          return (this[e] = !0), e;
        },
      }),
        r.ajaxPrefilter("json jsonp", function (e, t, n) {
          var i,
            o,
            a,
            s =
              e.jsonp !== !1 &&
              (wn.test(e.url)
                ? "url"
                : typeof e.data == "string" &&
                  (e.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) === 0 &&
                  wn.test(e.data) &&
                  "data");
          if (s || e.dataTypes[0] === "jsonp")
            return (
              (i = e.jsonpCallback =
                v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
              s
                ? (e[s] = e[s].replace(wn, "$1" + i))
                : e.jsonp !== !1 &&
                  (e.url += (gn.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
              (e.converters["script json"] = function () {
                return a || r.error(i + " was not called"), a[0];
              }),
              (e.dataTypes[0] = "json"),
              (o = p[i]),
              (p[i] = function () {
                a = arguments;
              }),
              n.always(function () {
                o === void 0 ? r(p).removeProp(i) : (p[i] = o),
                  e[i] && ((e.jsonpCallback = t.jsonpCallback), ti.push(i)),
                  a && v(o) && o(a[0]),
                  (a = o = void 0);
              }),
              "script"
            );
        }),
        (E.createHTMLDocument = (function () {
          var e = O.implementation.createHTMLDocument("").body;
          return (
            (e.innerHTML = "<form></form><form></form>"),
            e.childNodes.length === 2
          );
        })()),
        (r.parseHTML = function (e, t, n) {
          if (typeof e != "string") return [];
          typeof t == "boolean" && ((n = t), (t = !1));
          var i, o, a;
          return (
            t ||
              (E.createHTMLDocument
                ? ((t = O.implementation.createHTMLDocument("")),
                  (i = t.createElement("base")),
                  (i.href = O.location.href),
                  t.head.appendChild(i))
                : (t = O)),
            (o = x.exec(e)),
            (a = !n && []),
            o
              ? [t.createElement(o[1])]
              : ((o = Fe([e], t, a)),
                a && a.length && r(a).remove(),
                r.merge([], o.childNodes))
          );
        }),
        (r.fn.load = function (e, t, n) {
          var i,
            o,
            a,
            s = this,
            f = e.indexOf(" ");
          return (
            f > -1 && ((i = At(e.slice(f))), (e = e.slice(0, f))),
            v(t)
              ? ((n = t), (t = void 0))
              : t && typeof t == "object" && (o = "POST"),
            s.length > 0 &&
              r
                .ajax({
                  url: e,
                  type: o || "GET",
                  dataType: "html",
                  data: t,
                })
                .done(function (c) {
                  (a = arguments),
                    s.html(i ? r("<div>").append(r.parseHTML(c)).find(i) : c);
                })
                .always(
                  n &&
                    function (c, d) {
                      s.each(function () {
                        n.apply(this, a || [c.responseText, d, c]);
                      });
                    }
                ),
            this
          );
        }),
        (r.expr.pseudos.animated = function (e) {
          return r.grep(r.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
        (r.offset = {
          setOffset: function (e, t, n) {
            var i,
              o,
              a,
              s,
              f,
              c,
              d,
              b = r.css(e, "position"),
              C = r(e),
              m = {};
            b === "static" && (e.style.position = "relative"),
              (f = C.offset()),
              (a = r.css(e, "top")),
              (c = r.css(e, "left")),
              (d =
                (b === "absolute" || b === "fixed") &&
                (a + c).indexOf("auto") > -1),
              d
                ? ((i = C.position()), (s = i.top), (o = i.left))
                : ((s = parseFloat(a) || 0), (o = parseFloat(c) || 0)),
              v(t) && (t = t.call(e, n, r.extend({}, f))),
              t.top != null && (m.top = t.top - f.top + s),
              t.left != null && (m.left = t.left - f.left + o),
              "using" in t ? t.using.call(e, m) : C.css(m);
          },
        }),
        r.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return e === void 0
                ? this
                : this.each(function (o) {
                    r.offset.setOffset(this, e, o);
                  });
            var t,
              n,
              i = this[0];
            if (!!i)
              return i.getClientRects().length
                ? ((t = i.getBoundingClientRect()),
                  (n = i.ownerDocument.defaultView),
                  {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset,
                  })
                : {
                    top: 0,
                    left: 0,
                  };
          },
          position: function () {
            if (!!this[0]) {
              var e,
                t,
                n,
                i = this[0],
                o = {
                  top: 0,
                  left: 0,
                };
              if (r.css(i, "position") === "fixed")
                t = i.getBoundingClientRect();
              else {
                for (
                  t = this.offset(),
                    n = i.ownerDocument,
                    e = i.offsetParent || n.documentElement;
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  r.css(e, "position") === "static";

                )
                  e = e.parentNode;
                e &&
                  e !== i &&
                  e.nodeType === 1 &&
                  ((o = r(e).offset()),
                  (o.top += r.css(e, "borderTopWidth", !0)),
                  (o.left += r.css(e, "borderLeftWidth", !0)));
              }
              return {
                top: t.top - o.top - r.css(i, "marginTop", !0),
                left: t.left - o.left - r.css(i, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var e = this.offsetParent;
                e && r.css(e, "position") === "static";

              )
                e = e.offsetParent;
              return e || se;
            });
          },
        }),
        r.each(
          {
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset",
          },
          function (e, t) {
            var n = t === "pageYOffset";
            r.fn[e] = function (i) {
              return rt(
                this,
                function (o, a, s) {
                  var f;
                  if (
                    (X(o) ? (f = o) : o.nodeType === 9 && (f = o.defaultView),
                    s === void 0)
                  )
                    return f ? f[t] : o[a];
                  f
                    ? f.scrollTo(n ? f.pageXOffset : s, n ? s : f.pageYOffset)
                    : (o[a] = s);
                },
                e,
                i,
                arguments.length
              );
            };
          }
        ),
        r.each(["top", "left"], function (e, t) {
          r.cssHooks[t] = In(E.pixelPosition, function (n, i) {
            if (i)
              return (i = Ft(n, t)), cn.test(i) ? r(n).position()[t] + "px" : i;
          });
        }),
        r.each(
          {
            Height: "height",
            Width: "width",
          },
          function (e, t) {
            r.each(
              {
                padding: "inner" + e,
                content: t,
                "": "outer" + e,
              },
              function (n, i) {
                r.fn[i] = function (o, a) {
                  var s = arguments.length && (n || typeof o != "boolean"),
                    f = n || (o === !0 || a === !0 ? "margin" : "border");
                  return rt(
                    this,
                    function (c, d, b) {
                      var C;
                      return X(c)
                        ? i.indexOf("outer") === 0
                          ? c["inner" + e]
                          : c.document.documentElement["client" + e]
                        : c.nodeType === 9
                        ? ((C = c.documentElement),
                          Math.max(
                            c.body["scroll" + e],
                            C["scroll" + e],
                            c.body["offset" + e],
                            C["offset" + e],
                            C["client" + e]
                          ))
                        : b === void 0
                        ? r.css(c, d, f)
                        : r.style(c, d, b, f);
                    },
                    t,
                    s ? o : void 0,
                    s
                  );
                };
              }
            );
          }
        ),
        r.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (e, t) {
            r.fn[t] = function (n) {
              return this.on(t, n);
            };
          }
        ),
        r.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, n, i) {
            return this.on(t, e, n, i);
          },
          undelegate: function (e, t, n) {
            return arguments.length === 1
              ? this.off(e, "**")
              : this.off(t, e || "**", n);
          },
          hover: function (e, t) {
            return this.on("mouseenter", e).on("mouseleave", t || e);
          },
        }),
        r.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (e, t) {
            r.fn[t] = function (n, i) {
              return arguments.length > 0
                ? this.on(t, null, n, i)
                : this.trigger(t);
            };
          }
        );
      var Ji = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
      (r.proxy = function (e, t) {
        var n, i, o;
        if ((typeof t == "string" && ((n = e[t]), (t = e), (e = n)), !!v(e)))
          return (
            (i = g.call(arguments, 2)),
            (o = function () {
              return e.apply(t || this, i.concat(g.call(arguments)));
            }),
            (o.guid = e.guid = e.guid || r.guid++),
            o
          );
      }),
        (r.holdReady = function (e) {
          e ? r.readyWait++ : r.ready(!0);
        }),
        (r.isArray = Array.isArray),
        (r.parseJSON = JSON.parse),
        (r.nodeName = q),
        (r.isFunction = v),
        (r.isWindow = X),
        (r.camelCase = Be),
        (r.type = F),
        (r.now = Date.now),
        (r.isNumeric = function (e) {
          var t = r.type(e);
          return (
            (t === "number" || t === "string") && !isNaN(e - parseFloat(e))
          );
        }),
        (r.trim = function (e) {
          return e == null ? "" : (e + "").replace(Ji, "$1");
        }),
        typeof define == "function" &&
          define.amd &&
          define("jquery", [], function () {
            return r;
          });
      var Ki = p.jQuery,
        Zi = p.$;
      return (
        (r.noConflict = function (e) {
          return (
            p.$ === r && (p.$ = Zi), e && p.jQuery === r && (p.jQuery = Ki), r
          );
        }),
        typeof D > "u" && (p.jQuery = p.$ = r),
        r
      );
    });
  });
  var pi = ai((Ln, On) => {
    (function (p, D) {
      typeof Ln == "object" && typeof On < "u"
        ? (On.exports = D())
        : typeof define == "function" && define.amd
        ? define(D)
        : (p.AOS = D());
    })(Ln, function () {
      "use strict";
      var p =
          typeof window < "u"
            ? window
            : typeof global < "u"
            ? global
            : typeof self < "u"
            ? self
            : {},
        D = "Expected a function",
        j = NaN,
        V = "[object Symbol]",
        g = /^\s+|\s+$/g,
        w = /^[-+]0x[0-9a-f]+$/i,
        N = /^0b[01]+$/i,
        A = /^0o[0-7]+$/i,
        Q = parseInt,
        ee = typeof p == "object" && p && p.Object === Object && p,
        ie = typeof self == "object" && self && self.Object === Object && self,
        fe = ee || ie || Function("return this")(),
        _ = Object.prototype.toString,
        E = Math.max,
        v = Math.min,
        X = function () {
          return fe.Date.now();
        };
      function O(T, M, G) {
        var W,
          se,
          Oe,
          Me,
          ce,
          Pe,
          Ee = 0,
          Qe = !1,
          De = !1,
          Ie = !0;
        if (typeof T != "function") throw new TypeError(D);
        function Ge(pe) {
          var Fe = W,
            Xe = se;
          return (W = se = void 0), (Ee = pe), (Me = T.apply(Xe, Fe));
        }
        function ct(pe) {
          var Fe = pe - Pe;
          return Pe === void 0 || Fe >= M || Fe < 0 || (De && pe - Ee >= Oe);
        }
        function qe() {
          var pe = X();
          if (ct(pe)) return Re(pe);
          ce = setTimeout(
            qe,
            (function (Fe) {
              var Xe = M - (Fe - Pe);
              return De ? v(Xe, Oe - (Fe - Ee)) : Xe;
            })(pe)
          );
        }
        function Re(pe) {
          return (ce = void 0), Ie && W ? Ge(pe) : ((W = se = void 0), Me);
        }
        function ze() {
          var pe = X(),
            Fe = ct(pe);
          if (((W = arguments), (se = this), (Pe = pe), Fe)) {
            if (ce === void 0)
              return (function (Xe) {
                return (Ee = Xe), (ce = setTimeout(qe, M)), Qe ? Ge(Xe) : Me;
              })(Pe);
            if (De) return (ce = setTimeout(qe, M)), Ge(Pe);
          }
          return ce === void 0 && (ce = setTimeout(qe, M)), Me;
        }
        return (
          (M = k(M) || 0),
          Se(G) &&
            ((Qe = !!G.leading),
            (Oe = (De = "maxWait" in G) ? E(k(G.maxWait) || 0, M) : Oe),
            (Ie = "trailing" in G ? !!G.trailing : Ie)),
          (ze.cancel = function () {
            ce !== void 0 && clearTimeout(ce),
              (Ee = 0),
              (W = Pe = se = ce = void 0);
          }),
          (ze.flush = function () {
            return ce === void 0 ? Me : Re(X());
          }),
          ze
        );
      }
      function Se(T) {
        var M = typeof T;
        return !!T && (M == "object" || M == "function");
      }
      function k(T) {
        if (typeof T == "number") return T;
        if (
          (function (W) {
            return (
              typeof W == "symbol" ||
              ((function (se) {
                return !!se && typeof se == "object";
              })(W) &&
                _.call(W) == V)
            );
          })(T)
        )
          return j;
        if (Se(T)) {
          var M = typeof T.valueOf == "function" ? T.valueOf() : T;
          T = Se(M) ? M + "" : M;
        }
        if (typeof T != "string") return T === 0 ? T : +T;
        T = T.replace(g, "");
        var G = N.test(T);
        return G || A.test(T) ? Q(T.slice(2), G ? 2 : 8) : w.test(T) ? j : +T;
      }
      var F = function (T, M, G) {
          var W = !0,
            se = !0;
          if (typeof T != "function") throw new TypeError(D);
          return (
            Se(G) &&
              ((W = "leading" in G ? !!G.leading : W),
              (se = "trailing" in G ? !!G.trailing : se)),
            O(T, M, {
              leading: W,
              maxWait: M,
              trailing: se,
            })
          );
        },
        R = "Expected a function",
        Y = NaN,
        r = "[object Symbol]",
        U = /^\s+|\s+$/g,
        q = /^[-+]0x[0-9a-f]+$/i,
        be = /^0b[01]+$/i,
        he = /^0o[0-7]+$/i,
        tt = parseInt,
        ge = typeof p == "object" && p && p.Object === Object && p,
        I = typeof self == "object" && self && self.Object === Object && self,
        le = ge || I || Function("return this")(),
        je = Object.prototype.toString,
        Ae = Math.max,
        Ye = Math.min,
        Ue = function () {
          return le.Date.now();
        };
      function st(T) {
        var M = typeof T;
        return !!T && (M == "object" || M == "function");
      }
      function ut(T) {
        if (typeof T == "number") return T;
        if (
          (function (W) {
            return (
              typeof W == "symbol" ||
              ((function (se) {
                return !!se && typeof se == "object";
              })(W) &&
                je.call(W) == r)
            );
          })(T)
        )
          return Y;
        if (st(T)) {
          var M = typeof T.valueOf == "function" ? T.valueOf() : T;
          T = st(M) ? M + "" : M;
        }
        if (typeof T != "string") return T === 0 ? T : +T;
        T = T.replace(U, "");
        var G = be.test(T);
        return G || he.test(T) ? tt(T.slice(2), G ? 2 : 8) : q.test(T) ? Y : +T;
      }
      var x = function (T, M, G) {
          var W,
            se,
            Oe,
            Me,
            ce,
            Pe,
            Ee = 0,
            Qe = !1,
            De = !1,
            Ie = !0;
          if (typeof T != "function") throw new TypeError(R);
          function Ge(pe) {
            var Fe = W,
              Xe = se;
            return (W = se = void 0), (Ee = pe), (Me = T.apply(Xe, Fe));
          }
          function ct(pe) {
            var Fe = pe - Pe;
            return Pe === void 0 || Fe >= M || Fe < 0 || (De && pe - Ee >= Oe);
          }
          function qe() {
            var pe = Ue();
            if (ct(pe)) return Re(pe);
            ce = setTimeout(
              qe,
              (function (Fe) {
                var Xe = M - (Fe - Pe);
                return De ? Ye(Xe, Oe - (Fe - Ee)) : Xe;
              })(pe)
            );
          }
          function Re(pe) {
            return (ce = void 0), Ie && W ? Ge(pe) : ((W = se = void 0), Me);
          }
          function ze() {
            var pe = Ue(),
              Fe = ct(pe);
            if (((W = arguments), (se = this), (Pe = pe), Fe)) {
              if (ce === void 0)
                return (function (Xe) {
                  return (Ee = Xe), (ce = setTimeout(qe, M)), Qe ? Ge(Xe) : Me;
                })(Pe);
              if (De) return (ce = setTimeout(qe, M)), Ge(Pe);
            }
            return ce === void 0 && (ce = setTimeout(qe, M)), Me;
          }
          return (
            (M = ut(M) || 0),
            st(G) &&
              ((Qe = !!G.leading),
              (Oe = (De = "maxWait" in G) ? Ae(ut(G.maxWait) || 0, M) : Oe),
              (Ie = "trailing" in G ? !!G.trailing : Ie)),
            (ze.cancel = function () {
              ce !== void 0 && clearTimeout(ce),
                (Ee = 0),
                (W = Pe = se = ce = void 0);
            }),
            (ze.flush = function () {
              return ce === void 0 ? Me : Re(Ue());
            }),
            ze
          );
        },
        H = function () {};
      function ne(T) {
        T &&
          T.forEach(function (M) {
            var G = Array.prototype.slice.call(M.addedNodes),
              W = Array.prototype.slice.call(M.removedNodes);
            if (
              (function se(Oe) {
                var Me = void 0,
                  ce = void 0;
                for (Me = 0; Me < Oe.length; Me += 1)
                  if (
                    ((ce = Oe[Me]).dataset && ce.dataset.aos) ||
                    (ce.children && se(ce.children))
                  )
                    return !0;
                return !1;
              })(G.concat(W))
            )
              return H();
          });
      }
      function oe() {
        return (
          window.MutationObserver ||
          window.WebKitMutationObserver ||
          window.MozMutationObserver
        );
      }
      var Z = {
          isSupported: function () {
            return !!oe();
          },
          ready: function (T, M) {
            var G = window.document,
              W = new (oe())(ne);
            (H = M),
              W.observe(G.documentElement, {
                childList: !0,
                subtree: !0,
                removedNodes: !0,
              });
          },
        },
        Ce = function (T, M) {
          if (!(T instanceof M))
            throw new TypeError("Cannot call a class as a function");
        },
        _e = (function () {
          function T(M, G) {
            for (var W = 0; W < G.length; W++) {
              var se = G[W];
              (se.enumerable = se.enumerable || !1),
                (se.configurable = !0),
                "value" in se && (se.writable = !0),
                Object.defineProperty(M, se.key, se);
            }
          }
          return function (M, G, W) {
            return G && T(M.prototype, G), W && T(M, W), M;
          };
        })(),
        Ve =
          Object.assign ||
          function (T) {
            for (var M = 1; M < arguments.length; M++) {
              var G = arguments[M];
              for (var W in G)
                Object.prototype.hasOwnProperty.call(G, W) && (T[W] = G[W]);
            }
            return T;
          },
        Le =
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        dt =
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        Ze =
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
        Nt =
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
      function Rt() {
        return navigator.userAgent || navigator.vendor || window.opera || "";
      }
      var jt = new ((function () {
          function T() {
            Ce(this, T);
          }
          return (
            _e(T, [
              {
                key: "phone",
                value: function () {
                  var M = Rt();
                  return !(!Le.test(M) && !dt.test(M.substr(0, 4)));
                },
              },
              {
                key: "mobile",
                value: function () {
                  var M = Rt();
                  return !(!Ze.test(M) && !Nt.test(M.substr(0, 4)));
                },
              },
              {
                key: "tablet",
                value: function () {
                  return this.mobile() && !this.phone();
                },
              },
              {
                key: "ie11",
                value: function () {
                  return (
                    "-ms-scroll-limit" in document.documentElement.style &&
                    "-ms-ime-align" in document.documentElement.style
                  );
                },
              },
            ]),
            T
          );
        })())(),
        xt = function (T, M) {
          var G = void 0;
          return (
            jt.ie11()
              ? (G = document.createEvent("CustomEvent")).initCustomEvent(
                  T,
                  !0,
                  !0,
                  {
                    detail: M,
                  }
                )
              : (G = new CustomEvent(T, {
                  detail: M,
                })),
            document.dispatchEvent(G)
          );
        },
        kt = function (T) {
          return T.forEach(function (M, G) {
            return (function (W, se) {
              var Oe = W.options,
                Me = W.position,
                ce = W.node,
                Pe =
                  (W.data,
                  function () {
                    W.animated &&
                      ((function (Ee, Qe) {
                        Qe &&
                          Qe.forEach(function (De) {
                            return Ee.classList.remove(De);
                          });
                      })(ce, Oe.animatedClassNames),
                      xt("aos:out", ce),
                      W.options.id && xt("aos:in:" + W.options.id, ce),
                      (W.animated = !1));
                  });
              Oe.mirror && se >= Me.out && !Oe.once
                ? Pe()
                : se >= Me.in
                ? W.animated ||
                  ((function (Ee, Qe) {
                    Qe &&
                      Qe.forEach(function (De) {
                        return Ee.classList.add(De);
                      });
                  })(ce, Oe.animatedClassNames),
                  xt("aos:in", ce),
                  W.options.id && xt("aos:in:" + W.options.id, ce),
                  (W.animated = !0))
                : W.animated && !Oe.once && Pe();
            })(M, window.pageYOffset);
          });
        },
        rt = function (T) {
          for (
            var M = 0, G = 0;
            T && !isNaN(T.offsetLeft) && !isNaN(T.offsetTop);

          )
            (M += T.offsetLeft - (T.tagName != "BODY" ? T.scrollLeft : 0)),
              (G += T.offsetTop - (T.tagName != "BODY" ? T.scrollTop : 0)),
              (T = T.offsetParent);
          return {
            top: G,
            left: M,
          };
        },
        pt = function (T, M, G) {
          var W = T.getAttribute("data-aos-" + M);
          if (W !== void 0) {
            if (W === "true") return !0;
            if (W === "false") return !1;
          }
          return W || G;
        },
        sn = function (T, M) {
          return (
            T.forEach(function (G, W) {
              var se = pt(G.node, "mirror", M.mirror),
                Oe = pt(G.node, "once", M.once),
                Me = pt(G.node, "id"),
                ce = M.useClassNames && G.node.getAttribute("data-aos"),
                Pe = [M.animatedClassName]
                  .concat(ce ? ce.split(" ") : [])
                  .filter(function (Ee) {
                    return typeof Ee == "string";
                  });
              M.initClassName && G.node.classList.add(M.initClassName),
                (G.position = {
                  in: (function (Ee, Qe, De) {
                    var Ie = window.innerHeight,
                      Ge = pt(Ee, "anchor"),
                      ct = pt(Ee, "anchor-placement"),
                      qe = Number(pt(Ee, "offset", ct ? 0 : Qe)),
                      Re = ct || De,
                      ze = Ee;
                    Ge &&
                      document.querySelectorAll(Ge) &&
                      (ze = document.querySelectorAll(Ge)[0]);
                    var pe = rt(ze).top - Ie;
                    switch (Re) {
                      case "top-bottom":
                        break;
                      case "center-bottom":
                        pe += ze.offsetHeight / 2;
                        break;
                      case "bottom-bottom":
                        pe += ze.offsetHeight;
                        break;
                      case "top-center":
                        pe += Ie / 2;
                        break;
                      case "center-center":
                        pe += Ie / 2 + ze.offsetHeight / 2;
                        break;
                      case "bottom-center":
                        pe += Ie / 2 + ze.offsetHeight;
                        break;
                      case "top-top":
                        pe += Ie;
                        break;
                      case "bottom-top":
                        pe += Ie + ze.offsetHeight;
                        break;
                      case "center-top":
                        pe += Ie + ze.offsetHeight / 2;
                    }
                    return pe + qe;
                  })(G.node, M.offset, M.anchorPlacement),
                  out:
                    se &&
                    (function (Ee, Qe) {
                      window.innerHeight;
                      var De = pt(Ee, "anchor"),
                        Ie = pt(Ee, "offset", Qe),
                        Ge = Ee;
                      return (
                        De &&
                          document.querySelectorAll(De) &&
                          (Ge = document.querySelectorAll(De)[0]),
                        rt(Ge).top + Ge.offsetHeight - Ie
                      );
                    })(G.node, M.offset),
                }),
                (G.options = {
                  once: Oe,
                  mirror: se,
                  animatedClassNames: Pe,
                  id: Me,
                });
            }),
            T
          );
        },
        Gt = function () {
          var T = document.querySelectorAll("[data-aos]");
          return Array.prototype.map.call(T, function (M) {
            return {
              node: M,
            };
          });
        },
        Be = [],
        St = !1,
        ke = {
          offset: 120,
          delay: 0,
          easing: "ease",
          duration: 400,
          disable: !1,
          once: !1,
          mirror: !1,
          anchorPlacement: "top-bottom",
          startEvent: "DOMContentLoaded",
          animatedClassName: "aos-animate",
          initClassName: "aos-init",
          useClassNames: !1,
          disableMutationObserver: !1,
          throttleDelay: 99,
          debounceDelay: 50,
        },
        J = function () {
          return document.all && !window.atob;
        },
        He = function () {
          arguments.length > 0 &&
            arguments[0] !== void 0 &&
            arguments[0] &&
            (St = !0),
            St &&
              ((Be = sn(Be, ke)),
              kt(Be),
              window.addEventListener(
                "scroll",
                F(function () {
                  kt(Be, ke.once);
                }, ke.throttleDelay)
              ));
        },
        Xt = function () {
          if (((Be = Gt()), Qt(ke.disable) || J())) return Yt();
          He();
        },
        Yt = function () {
          Be.forEach(function (T, M) {
            T.node.removeAttribute("data-aos"),
              T.node.removeAttribute("data-aos-easing"),
              T.node.removeAttribute("data-aos-duration"),
              T.node.removeAttribute("data-aos-delay"),
              ke.initClassName && T.node.classList.remove(ke.initClassName),
              ke.animatedClassName &&
                T.node.classList.remove(ke.animatedClassName);
          });
        },
        Qt = function (T) {
          return (
            T === !0 ||
            (T === "mobile" && jt.mobile()) ||
            (T === "phone" && jt.phone()) ||
            (T === "tablet" && jt.tablet()) ||
            (typeof T == "function" && T() === !0)
          );
        };
      return {
        init: function (T) {
          return (
            (ke = Ve(ke, T)),
            (Be = Gt()),
            ke.disableMutationObserver ||
              Z.isSupported() ||
              (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),
              (ke.disableMutationObserver = !0)),
            ke.disableMutationObserver || Z.ready("[data-aos]", Xt),
            Qt(ke.disable) || J()
              ? Yt()
              : (document
                  .querySelector("body")
                  .setAttribute("data-aos-easing", ke.easing),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-duration", ke.duration),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-delay", ke.delay),
                ["DOMContentLoaded", "load"].indexOf(ke.startEvent) === -1
                  ? document.addEventListener(ke.startEvent, function () {
                      He(!0);
                    })
                  : window.addEventListener("load", function () {
                      He(!0);
                    }),
                ke.startEvent === "DOMContentLoaded" &&
                  ["complete", "interactive"].indexOf(document.readyState) >
                    -1 &&
                  He(!0),
                window.addEventListener("resize", x(He, ke.debounceDelay, !0)),
                window.addEventListener(
                  "orientationchange",
                  x(He, ke.debounceDelay, !0)
                ),
                Be)
          );
        },
        refresh: He,
        refreshHard: Xt,
      };
    });
  });
  var fi = si(ci());
  window.$ = window.jQuery = fi.default;
  function pr() {
    hr(), setConsentShareCookie(), gr();
  }
  function hr() {
    setTimeout(function () {
      var p = document.querySelectorAll(
        "#accept-recommended-btn-handler, #onetrust-accept-btn-handler, #onetrust-reject-all-handler ,.ot-pc-refuse-all-handler, .save-preference-btn-handler, .optanon-button-wrapper.optanon-save-settings-button, .optanon-button-wrapper.optanon-allow-all-button, .optanon-allow-all.accept-cookies-button,.accept-cookies-button"
      );
      p.length &&
        p.forEach(function (D) {
          D.addEventListener("click", function () {
            window.location.reload();
          });
        });
    }, 1e3);
  }
  function gr() {
    if (
      (window.dataLayer?.page?.attributes?.urlCountry === "fr" ||
        window.dataLayer?.page?.attributes?.urlCountry === "afrique") &&
      document.getElementById("onetrust-banner-sdk")
    ) {
      let p = document.getElementById("onetrust-accept-btn-handler"),
        D = document.getElementById("onetrust-reject-all-handler"),
        j = document.getElementById("onetrust-pc-btn-handler");
      document.getElementById("onetrust-button-group").append(p, D, j);
    }
  }
  window.OptanonWrapper = pr;
  (function () {
    var p = 500,
      D = [];
    $("[data-sequence]").each(function (g, w) {
      var N = Number($(w).attr("data-sequence"));
      D.push(N);
    });
    var j = D.some((g) => g > 6);
    $("[data-sequence]").each(function (g, w) {
      if (j) $(w).attr("data-aos-duration", 3e3 / D.length);
      else {
        var N = Number($(w).attr("data-sequence"));
        $(w).attr("data-aos-duration", p * N);
      }
    });
    var V = $("body");
    V.removeAttr("data-aos-easing"),
      V.removeAttr("data-aos-duration"),
      V.removeAttr("data-aos-delay");
  })();
  var di = () => {
    window.viewport = {
      top: window.pageYOffset,
      height: document.documentElement.clientHeight,
      bottom: window.pageYOffset + document.documentElement.clientHeight,
    };
  };
  window.isElementFullyInViewport = (p) => {
    let D = p.getBoundingClientRect();
    return (
      D.top <= viewport.height && D.bottom <= viewport.height && D.bottom >= 0
    );
  };
  window.isElementInViewport = (p) => {
    let D = p.getBoundingClientRect();
    return D.top <= viewport.height && D.bottom >= 0;
  };
  window.getPercentageVisible = (p, D) => {
    let j = {
        offsetTop: 0,
        offsetTopElement: !1,
        offsetBottom: 0,
        offsetBottomElement: !1,
        ...D,
      },
      V =
        j.offsetTop +
        (j.offsetTopElement !== !1 && j.offsetTopElement.length > 0
          ? j.offsetTopElement.outerHeight()
          : 0),
      g =
        j.offsetBottom +
        (j.offsetBottomElement !== !1 && j.offsetBottomElement > 0
          ? j.offsetBottomElement.outerHeight()
          : 0),
      w = window.scrollY + V,
      N = window.innerHeight - V - g,
      A = w + N,
      ee = p.getBoundingClientRect().top + window.scrollY,
      ie = p.offsetHeight,
      fe = ee + ie,
      E = Math.max(fe, A) - Math.min(ee, w) - N,
      v = ie - E,
      X = parseInt(v <= 0 ? 0 : (v / ie) * 100),
      O = X > 0 && X < 100,
      Se = A > fe && w < fe,
      k = w < ee && A > ee;
    return {
      percentageVisible: X,
      isElementPartiallyVisibleOnBottom: O && k && !Se,
      isElementPartiallyVisibleOnTop: O && Se && !k,
    };
  };
  di();
  $(window).resize(function () {
    requestAnimationFrame(di);
  });
  var mr = (p, D) => {
    document.querySelectorAll(p).forEach((V) => {
      let g = V.querySelectorAll(D),
        w = [...g].map((A) => {
          let Q = A.cloneNode(!0),
            ee = getComputedStyle(A),
            ie = Array.from(ee).reduce(
              (_, E) => `${_}${E}:${ee.getPropertyValue(E)};`,
              ""
            );
          document.body.append(Q),
            (Q.style.cssText = ie),
            (Q.style.height = "auto"),
            (Q.style.position = "fixed"),
            (Q.style.overflowWrap = "break-word"),
            (Q.style.visibility = "hidden");
          let fe =
            Q.offsetHeight +
            parseFloat(Q.style.paddingTop) +
            parseFloat(Q.style.paddingBottom) +
            parseFloat(Q.style.marginTop) +
            parseFloat(Q.style.marginBottom);
          return Q.remove(), fe;
        }),
        N = Math.max(...w);
      g.forEach((A) => {
        A.style.height = `${N}px`;
      });
    });
  };
  window.matchHeight = mr;
  var yr = (p, D) => {
    document.querySelectorAll(p).forEach((V) => {
      V.querySelectorAll(D).forEach((w) => w.style.removeProperty("height"));
    });
  };
  window.removeHeight = yr;
  document.addEventListener("keydown", function (p) {
    p.key === "Tab" && $("body").addClass("cmp-element--focus");
  });
  document.addEventListener("click", function (p) {
    $("body").removeClass("cmp-element--focus");
  });
  var vr = () => {
    let p = () => {
      window.isEditMode !== "true"
        ? document.documentElement.style.setProperty(
            "--app-height",
            window.innerHeight + "px"
          )
        : document.documentElement.style.setProperty("--app-height", "800px");
    };
    window.addEventListener("resize", p), p();
  };
  document.addEventListener("DOMContentLoaded", vr, !1);
  var br = () => {
    let p = document.querySelector(".cmp-header");
    p
      ? document.documentElement.style.setProperty(
          "--headerfragment-height",
          p.offsetHeight + "px"
        )
      : document.documentElement.style.setProperty(
          "--headerfragment-height",
          "0px"
        );
  };
  document.addEventListener("DOMContentLoaded", br, !1);
  var wr = (p, D) => {
    document.querySelectorAll(p).forEach((V) => {
      let g = V?.getBoundingClientRect()?.x,
        w = V.querySelector(D);
      g && w && (w.style.width = `calc(100vw - ${g}px)`);
    });
  };
  window.floatingElementWidth = wr;
  var xr = (p, D) => {
    document.querySelectorAll(p).forEach((V) => {
      let g = V.querySelector(D);
      g && g.style.removeProperty("width");
    });
  };
  window.removeFloatingElementWidth = xr;
  function Sr() {
    let p = document.querySelector("body > div.root.responsivegrid"),
      D = p?.querySelector(".bodyresponsivegridcontainer"),
      j = p?.querySelectorAll(
        "div.root.responsivegrid > div.aem-Grid > div.responsivegrid"
      );
    if (D) li(D);
    else if (j?.length > 0) {
      let V = j.length === 3 ? j[1] : j[0];
      li(V);
    }
  }
  function li(p) {
    p?.setAttribute("role", "main");
    let D = document.createElement("div");
    D.setAttribute("id", "maincontent"), p?.prepend(D);
  }
  document.addEventListener("DOMContentLoaded", Sr);
  document.addEventListener("DOMContentLoaded", () => {
    let p = 0,
      D = document.querySelector(".cmp-sticky-bar__inner"),
      j = document.querySelector(".cmp-linklist-multinav");
    if (D) p = D.offsetHeight;
    else if (j) p = j.offsetHeight;
    else {
      let g = document.querySelector(".cmp-header");
      g && (p = g.offsetHeight);
    }
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach((g) => {
      g.addEventListener("click", (w) => {
        let N = g.getAttribute("href"),
          A = document.querySelector(N);
        A && (w.preventDefault(), Cr(A, p));
      });
    });
  });
  function Cr(p, D) {
    requestAnimationFrame(() => {
      let V = p.getBoundingClientRect().top + window.scrollY - D - 15;
      window.scrollTo({
        top: V,
        behavior: "smooth",
      }),
        p.focus({
          preventScroll: !0,
        });
    });
  }
  var Dn = si(pi());
  function hi() {
    let p = new Set(),
      D = new Event("imagesReady"),
      j,
      V = () => {
        (window.isEditMode === "true" || p.size === 0) &&
          (j?.disconnect(),
          setTimeout(() => {
            document.documentElement.classList.add("images-ready"),
              document.documentElement.dispatchEvent(D);
          }, 100),
          setTimeout(() => {
            Dn.default.init();
          }, 160));
      },
      g = (N) => {
        p.has(N) ? p.delete(N) : p.add(N), V();
      };
    (() => {
      let N = {
          childList: !1,
          subtree: !0,
          attributes: !0,
          attributeFilter: ["src"],
        },
        A = document.querySelectorAll(".s7dm-dynamic-media"),
        Q = (ee) => {
          for (let ie of ee)
            if (
              ie.type === "attributes" &&
              !ie.target.src.startsWith("data:image")
            ) {
              let fe = ie.target;
              g(fe),
                fe.complete
                  ? (fe.classList.add("dm-loaded"), g(fe))
                  : (fe.addEventListener("load", () => {
                      fe.classList.add("dm-loaded"), g(fe);
                    }),
                    fe.addEventListener("error", () => {
                      g(fe);
                    }));
            }
        };
      A.length > 0
        ? ((j = new MutationObserver(Q)),
          A.forEach((ee) => {
            j.observe(ee, N);
          }))
        : V();
    })(),
      setTimeout(V, 1100);
  }
  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", hi)
    : hi();
  var Er = new Event("fontsReady"),
    gi = () => {
      let p = null;
      function D() {
        let V = !1;
        try {
          V = document.fonts.check("16px 'Open Sans'");
        } catch (g) {
          console.info("CSS font loading API error", g), j();
          return;
        }
        V && j();
      }
      function j() {
        document.documentElement.dispatchEvent(Er),
          document.documentElement.classList.add("fonts-ready"),
          clearInterval(p);
      }
      p = setInterval(D, 70);
    };
  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", gi)
    : gi();
  window.AOS = Dn.default;
  var mi = () => {
    let p = [];
    if (
      ((p = document.querySelectorAll(`
        .cmp-pull-quote--quote-with-image > div,
        .cmp-pull-quote--quote-with-image-large > div,
        .cmp-cta__homepage-fixed > div,
        .cmp-cta__bg-img--hero .cmp-cta__gradient,
        .cmp-cta__bg-img--hero .cmp-cta__bg-img,
        .cmp-expanding-img__img-section > div,
        .cmp-container__bg-image,
        .cmp-container__bg-image > div,
        .cmp-promo__background,
        .cmp-image-text,
        [data-desktop-img-path]
    `)),
      !p.length)
    )
      return;
    let D = (w, N) => {
        if (!w || w.startsWith(":")) return null;
        let A = w.startsWith("/") ? document.baseURI : void 0;
        return new URL(w, A).searchParams.get(N);
      },
      j = ({ matches: w, elementToHandle: N, url: A, height: Q }) => {
        let ee = N.closest(".circular-black") || N.closest(".circular-white");
        if (w && !ee) {
          let ie = N.style.backgroundImage.slice(4, -1).replace(/"/g, ""),
            fe = D(ie, "wid"),
            _ = D(A, "wid");
          (!fe || Number(_) > Number(fe)) &&
            N.style.setProperty("background-image", `url(${encodeURI(A)})`),
            Q && N.style.setProperty("min-height", `${Q}px`, "important"),
            N.parentElement.className.includes(
              "cmp-container-hero__vip-profile"
            ) &&
              N.style.setProperty(
                "min-height",
                "calc(var(--app-height))",
                "important"
              );
        }
        window.matchMedia("print").matches &&
          document
            .querySelectorAll(".cmp-cta__bg-img--hero .cmp-cta__bg-img")
            .forEach((ie) => {
              ie.style.setProperty("min-height", "auto", "important");
            });
      },
      V = (w) => {
        if (!w.hasAttribute("data-desktop-img-path")) return;
        let N = window.matchMedia("(min-width: 1024px)"),
          A = window.matchMedia("(min-width:768px) and (max-width:1023px)"),
          Q = window.matchMedia("(max-width: 767px)"),
          ee = w.getAttribute("data-desktop-img-path"),
          ie = w.getAttribute("data-desktop-min-height"),
          fe = w.getAttribute("data-tablet-img-path"),
          _ = w.getAttribute("data-tablet-min-height"),
          E = w.getAttribute("data-mobile-img-path"),
          v = w.getAttribute("data-mobile-min-height");
        N.matches &&
          j({
            matches: N.matches,
            elementToHandle: w,
            url: ee,
            height: ie,
          }),
          N.addEventListener("change", ({ matches: X }) =>
            j({
              matches: X,
              elementToHandle: w,
              url: ee,
              height: ie,
            })
          ),
          A.matches &&
            j({
              matches: A.matches,
              elementToHandle: w,
              url: fe,
              height: _,
            }),
          A.addEventListener("change", ({ matches: X }) =>
            j({
              matches: X,
              elementToHandle: w,
              url: fe,
              height: _,
            })
          ),
          Q.matches &&
            j({
              matches: Q.matches,
              elementToHandle: w,
              url: E,
              height: v,
            }),
          Q.addEventListener("change", ({ matches: X }) =>
            j({
              matches: X,
              elementToHandle: w,
              url: E,
              height: v,
            })
          );
      };
    (() => {
      p.forEach(V);
    })();
  };
  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", mi)
    : mi();
  function Tr() {
    var p = window.gigya_api_key,
      D = window.sc_language,
      j = window.myDeloitteSwitch,
      V = "MyDeloitte1B-RegistrationLogin",
      g = !1,
      w = null;
    function N() {
      var v = document.createElement("script");
      (v.type = "text/javascript"),
        (v.defer = !0),
        (v.src =
          "https://cdns.gigya.com/js/gigya.js?apiKey=" +
          p +
          "&services=accounts.screenset"),
        (v.text = "{lang: " + D + " }"),
        document.getElementsByTagName("head")[0].appendChild(v);
    }
    function A() {
      gigya.accounts.getAccountInfo({
        include: "profile",
        callback: this.evalResponse,
      });
    }
    function Q(v) {
      sessionStorage.setItem("gigyaIdInSession", v.UID);
      var X = v.UID;
      v.errorCode === 0
        ? (localStorage.setItem("userLoggedInIs", !0),
          (document.cookie =
            "USER_DCOM=" +
            JSON.stringify(v.UID) +
            ";domain=.deloitte.com;path=/"),
          $(".cmp-header__action-item.cmp-header__user-login").hide(),
          $(".cmp-header__action-item.myd-menu-item").addClass("make-visible"),
          typeof v.profile.thumbnailURL < "u"
            ? $("#profile_pic, #profile_pic_mobile").attr(
                "src",
                v.profile.thumbnailURL
              )
            : typeof v.profile.photoURL < "u"
            ? ($("#profile_pic, #profile_pic_mobile").attr(
                "src",
                v.profile.photoURL
              ),
              $("#profile_pic_id_mobile").css("border-color", "black"),
              $("#profile_pic_id_mobile").css("background-color", "black"),
              $("#profile_pic_span").css("background-color", "black"))
            : ($("#profile_pic").remove(),
              $("#profile_pic_mobile").remove(),
              typeof document.querySelectorAll("#profile_pic_id span ")[0] <
                "u" &&
                (document.querySelectorAll(
                  "#profile_pic_id span "
                )[0].innerText = v.profile.firstName[0]),
              typeof document.querySelectorAll(
                "#profile_pic_id_mobile span "
              )[0] < "u" &&
                (document.querySelectorAll(
                  "#profile_pic_id_mobile span "
                )[0].innerText = v.profile.firstName[0])),
          (g = !0),
          (w = v))
        : (g = !1);
    }
    function ee() {
      gigya.accounts.logout({
        callback: this.logOutResponse,
      });
    }
    function ie(v) {
      v.errorCode === 0 &&
        (typeof USER_IS_LOGGED < "u" && (USER_IS_LOGGED = !1),
        gigyaUtils.deleteThisCookie("userLoggedInIs"),
        (document.cookie =
          "USER_LOG_OUT_DCOM=true;domain=.deloitte.com;path=/"),
        sessionStorage.removeItem("loggedIn"),
        localStorage.removeItem("loggedIn"),
        localStorage.removeItem("userLoggedInIs"),
        sessionStorage.clear(),
        window.location.reload());
    }
    function fe(v) {
      document.cookie =
        v +
        "=;expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=.deloitte.com; path=/";
    }
    function _() {
      w !== null &&
        w !== "undefined" &&
        (document.cookie =
          "PROFILE_PULL_DOWN=" +
          JSON.stringify(w.UID) +
          ";domain=.deloitte.com;path=/");
    }
    function E() {
      window.gigyaUtils = {
        loadGigya: N,
        evalResponse: Q,
        evalSession: A,
        logOut: ee,
        logOutResponse: ie,
        deleteThisCookie: fe,
        setCookieForPullDownMenu: _,
      };
    }
    E(),
      (window.onGigyaServiceReady = function () {
        typeof j != null && j === "false" && gigyaUtils.evalSession();
      }),
      $(document).ready(function () {
        typeof p < "u" && p != null && j === "false" && gigyaUtils.loadGigya();
      }),
      $("document").ready(function () {
        $(".myd-menu-item span#profile_pic_span").on("click", function () {
          $(".myd-menu-item ul.nav-content").hasClass("open")
            ? ($(".myd-menu-item ul.nav-content").removeClass("open"),
              $("#profile_pic_id").attr("aria-expanded", "false"))
            : ($("#profile_pic_id").attr("aria-expanded", "true"),
              $(".myd-menu-item ul.nav-content").addClass("open"));
        }),
          $(document).on("click", function (v) {
            $(v.target).is("#profile_pic_id span") ||
              $(v.target).is("#profile_pic_id span img") ||
              ($("ul.nav-content").hasClass("open") &&
                ($("ul.nav-content").removeClass("open"),
                $("#profile_pic_id").attr("aria-expanded", "false")));
          });
      });
  }
  document.addEventListener("DOMContentLoaded", Tr, !1);
  function kr() {
    let p = [
        ".cmp-cta__container",
        ".cmp-container.cmp-container--bg--content-width",
      ],
      D = $(".sticky-top.elevate-header").prev(),
      j = p.some((N) => !!(D.find(N).length || D.is(N)));
    if (
      $(".sticky-top .link-list-component")[0] &&
      !j &&
      window.isEditMode === "false" &&
      ($(".sticky-top.elevate-header").css({
        "margin-top": "24px",
      }),
      window.innerWidth <= 768)
    ) {
      var V = document.querySelector(".cmp-sitelanguage"),
        g = document.querySelector(".sticky-top.elevate-header"),
        w = V.offsetHeight;
      g.style.marginTop = w + "px";
    }
  }
  document.addEventListener("DOMContentLoaded", kr);
  $(window).on("load", function () {
    var p = "CountryLocale";
    cookieStore.get(p) != "" && j(p);
    var D = window.sc_country + "_" + window.sc_language;
    V(p, D, 180);
    function j(g) {
      let w = "expires=Thu, 01 Jan 1970 00:00:00 UTC;";
      document.cookie = g + "=;" + w + "; path=/;";
    }
    function V(g, w, N) {
      let A = new Date();
      A.setTime(A.getTime() + N * 24 * 60 * 60 * 1e3);
      let Q = "expires=" + A.toUTCString();
      document.cookie = g + "=" + w + ";" + Q + "; path=/";
    }
  });
  var yi = [
      "breadcrumbs",
      "card-dealer",
      "carousel-scrollbar",
      "co-branding",
      "cookie-fallback",
      "divider",
      "download",
      "events-promo-v2",
      "footer",
      "form-elements",
      "image-text",
      "interactive-container",
      "layered-animation",
      "meet-author",
      "office-details-promo",
      "podcast-player",
      "regional-numbers",
      "sectional-divider",
      "site-language",
      "subtitle",
      "text",
      "title",
      "twine-social",
    ],
    vi = [
      "experience-selector",
      "header",
      "cta",
      "container",
      "image",
      "in-page-nav",
      "soical-share",
    ],
    bi = [
      "404-error",
      "accordion",
      "animated-slider",
      "aside",
      "breadcrumbs",
      "button",
      "card-dealer",
      "carousel",
      "carousel-scrollbar",
      "co-branding",
      "custom-form-elements",
      "divider",
      "download",
      "dual-slider",
      "end-notes",
      "event-details-header-banner",
      "expanding-image",
      "feedback-banner",
      "form-elements",
      "header",
      "image",
      "in-page-nav",
      "interactive-container",
      "layered-animation",
      "layout-container",
      "list-image",
      "local-nav",
      "meet-author",
      "mosaic-grid",
      "multiple-authors",
      "page-info",
      "page-progress",
      "people-profile",
      "regional-numbers",
      "scroll-to-top",
      "sectional-divider",
      "site-language",
      "slider",
      "small-title",
      "sticky-bar",
      "transition-images",
      "cta",
      "container",
      "image",
    ],
    Nn = [
      "promo-container-v2",
      "subtitle-v2",
      "socialshare",
      "pageInfo",
      "progress-bar",
    ],
    wi = ["filter-v2-modern", "scroll-to-top"];
  var Ar = (() => {
    let p = [],
      D = window.matchMedia("(max-width: 768px)"),
      j = [],
      V = {};
    function g() {
      let U = new MutationObserver((q) => {
        q.forEach((be) => {
          be.type === "childList" &&
            be.addedNodes.forEach((he) => {
              he.nodeType === 1 && he.hasAttribute("data-clientlibs") && w(he);
            });
        });
      });
      return (
        U.observe(document.documentElement || document.body, {
          childList: !0,
          subtree: !0,
        }),
        U
      );
    }
    function w(U) {
      let q = U?.dataset?.component;
      if (q) {
        let be = JSON.parse(U.dataset.clientlibs);
        k(be),
          q.split(" ")?.forEach((tt) => {
            N(tt);
          });
      }
    }
    function N(U) {
      if (!(Nn.indexOf(U) >= 0) && !(vi.indexOf(U) >= 0) && !V[U]?.cssLoaded)
        try {
          let q = V[U];
          if (q) {
            q.dependentCSS && F(q.dependentCSS, "css", U);
            let be = q.hashCSS;
            if ((_(be, U, "desktop"), D.matches && bi.indexOf(U) < 0)) {
              let he = q.hashMobileCss;
              _(he, U, "mobile");
            }
            V[U].cssLoaded = !0;
          }
        } catch (q) {
          console.error("Error in preloadCss ", q);
        }
    }
    function A() {
      let U = Array.from(document.querySelectorAll("[data-clientlibs]"));
      U.length > 0 &&
        U.forEach((q) => {
          w(q);
        });
    }
    function Q() {
      A(), g();
    }
    function ee() {
      document.documentElement.classList.add("dynamic-loading-enabled");
      let U = ie(),
        q = [];
      U.forEach((be, he) => {
        X("hide", be),
          q.push({
            el: be,
            oIdx: he,
          });
      }),
        (window.templateObj = q),
        fe();
    }
    function ie() {
      return document.querySelectorAll("[data-component]");
    }
    function fe() {
      window.templateObj.forEach((U, q) => {
        if (v()) Se(U);
        else {
          let be = new IntersectionObserver(
            (he) => {
              he.forEach((tt) => {
                tt.isIntersecting &&
                  (Se(U, q),
                  tt.target.querySelector(".aos-init") &&
                    window.AOS?.refresh());
              });
            },
            {
              root: null,
              rootMargin: `${window.innerHeight / 2}px`,
            }
          );
          be.observe(U.el), j.push(be);
        }
      });
    }
    function _(U, q, be) {
      let he = document.createElement("link");
      (he.rel = "stylesheet"),
        (he.type = "text/css"),
        (he.href = U),
        (he.fetchPriority = "high"),
        (he.id = be
          ? `${q}-${be}`
          : `${q}-${Math.random().toString().slice(-3)}`),
        document.getElementsByTagName("head")[0].appendChild(he);
    }
    async function E(U) {
      try {
        let q = U;
        if (Nn.indexOf(q) >= 0 || yi.indexOf(q) >= 0) return;
        let be = V[q];
        be &&
          (be?.dependentJS && F(be.dependentJS, "js"),
          await import(`${be.hashJS}`));
      } catch (q) {
        console.error("Error in dynamic JS import ", q);
      }
    }
    function v() {
      return (
        window.isEditMode === "true" ||
        (typeof $?.cookie == "function" && $?.cookie("wcmmode") === "edit")
      );
    }
    function X(U, q) {
      switch (U) {
        case "hide":
          q.classList.add("no-show");
          break;
        case "show":
          q.classList.remove("no-show");
          break;
      }
    }
    function O(U) {
      let q = p.indexOf(U) >= 0;
      return !q && p.push(U), q;
    }
    function Se(U, q) {
      U.el.dataset.component.split(" ").forEach((he) => {
        !O(he) && E(he, U.oIdx);
      }),
        X("show", U.el),
        q && j[q].unobserve(U.el);
    }
    function k(U) {
      Object.keys(U).forEach((q) => {
        V[q] || (V[q] = U[q]);
      });
    }
    function F(U, q, be) {
      switch (q) {
        case "css":
          U.forEach((he) => {
            _(he, be);
          });
          break;
        case "js":
          U.forEach(async (he) => {
            await import(he);
          });
          break;
      }
    }
    function R() {
      wi.forEach((U) => {
        document.querySelector(`[data-component*="${U}"]`) && (E(U), O(U));
      });
    }
    function Y() {
      R(), ee();
    }
    return {
      init: () => {
        Q(),
          document.readyState === "loading"
            ? document.addEventListener("DOMContentLoaded", Y)
            : Y();
      },
    };
  })();
  Ar.init();
  (function (p, D) {
    typeof define == "function" && define.amd
      ? define(D)
      : typeof exports == "object"
      ? (module.exports = D())
      : ((p = p || (typeof window < "u" ? window : global)),
        (p.ScrollMagic = D()));
  })(void 0, function () {
    "use strict";
    function p() {}
    (p.version = "2.0.8"),
      typeof window < "u" && window.addEventListener("mousewheel", void 0);
    var D = "data-scrollmagic-pin-spacer";
    p.Controller = function (w) {
      function N() {
        var I, le, je;
        Y &&
          O &&
          ((I = g.type.Array(O) ? O : X.slice(0)),
          (O = !1),
          (le = Se),
          (je = (Se = E.scrollPos()) - le) != 0 &&
            (k = 0 < je ? "FORWARD" : ie),
          k === ie && I.reverse(),
          I.forEach(function (Ae, Ye) {
            Ae.update(!0);
          }));
      }
      function A() {
        Q = g.rAF(N);
      }
      var Q,
        ee,
        ie = "REVERSE",
        fe = "PAUSED",
        _ = j.defaults,
        E = this,
        v = g.extend({}, _, w),
        X = [],
        O = !1,
        Se = 0,
        k = fe,
        F = !0,
        R = 0,
        Y = !0,
        r = function () {
          0 < v.refreshInterval &&
            (ee = window.setTimeout(tt, v.refreshInterval));
        },
        U = function () {
          return v.vertical
            ? g.get.scrollTop(v.container)
            : g.get.scrollLeft(v.container);
        },
        q = function () {
          return v.vertical
            ? g.get.height(v.container)
            : g.get.width(v.container);
        },
        be = (this._setScrollPos = function (I) {
          v.vertical
            ? F
              ? window.scrollTo(g.get.scrollLeft(), I)
              : (v.container.scrollTop = I)
            : F
            ? window.scrollTo(I, g.get.scrollTop())
            : (v.container.scrollLeft = I);
        }),
        he = function (I) {
          I.type == "resize" && ((R = q()), (k = fe)),
            O !== !0 && ((O = !0), A());
        },
        tt = function () {
          if (!F && R != q()) {
            var I;
            try {
              I = new Event("resize", {
                bubbles: !1,
                cancelable: !1,
              });
            } catch {
              (I = document.createEvent("Event")).initEvent("resize", !1, !1);
            }
            v.container.dispatchEvent(I);
          }
          X.forEach(function (le, je) {
            le.refresh();
          }),
            r();
        };
      this._options = v;
      function ge(I) {
        if (I.length <= 1) return I;
        var le = I.slice(0);
        return (
          le.sort(function (je, Ae) {
            return je.scrollOffset() > Ae.scrollOffset() ? 1 : -1;
          }),
          le
        );
      }
      return (
        (this.addScene = function (I) {
          if (g.type.Array(I))
            I.forEach(function (je, Ae) {
              E.addScene(je);
            });
          else if (I instanceof p.Scene) {
            if (I.controller() !== E) I.addTo(E);
            else if (!~X.indexOf(I))
              for (var le in (X.push(I),
              (X = ge(X)),
              I.on("shift.controller_sort", function () {
                X = ge(X);
              }),
              v.globalSceneOptions))
                I[le] && I[le].call(I, v.globalSceneOptions[le]);
          }
          return E;
        }),
        (this.removeScene = function (I) {
          var le;
          return (
            g.type.Array(I)
              ? I.forEach(function (je, Ae) {
                  E.removeScene(je);
                })
              : -1 < (le = X.indexOf(I)) &&
                (I.off("shift.controller_sort"), X.splice(le, 1), I.remove()),
            E
          );
        }),
        (this.updateScene = function (I, le) {
          return (
            g.type.Array(I)
              ? I.forEach(function (je, Ae) {
                  E.updateScene(je, le);
                })
              : le
              ? I.update(!0)
              : O !== !0 &&
                I instanceof p.Scene &&
                (~(O = O || []).indexOf(I) || O.push(I), (O = ge(O)), A()),
            E
          );
        }),
        (this.update = function (I) {
          return (
            he({
              type: "resize",
            }),
            I && N(),
            E
          );
        }),
        (this.scrollTo = function (I, le) {
          if (g.type.Number(I)) be.call(v.container, I, le);
          else if (I instanceof p.Scene)
            I.controller() === E && E.scrollTo(I.scrollOffset(), le);
          else if (g.type.Function(I)) be = I;
          else {
            var je = g.get.elements(I)[0];
            if (je) {
              for (; je.parentNode.hasAttribute(D); ) je = je.parentNode;
              var Ae = v.vertical ? "top" : "left",
                Ye = g.get.offset(v.container),
                Ue = g.get.offset(je);
              F || (Ye[Ae] -= E.scrollPos()), E.scrollTo(Ue[Ae] - Ye[Ae], le);
            }
          }
          return E;
        }),
        (this.scrollPos = function (I) {
          return arguments.length
            ? (g.type.Function(I) && (U = I), E)
            : U.call(E);
        }),
        (this.info = function (I) {
          var le = {
            size: R,
            vertical: v.vertical,
            scrollPos: Se,
            scrollDirection: k,
            container: v.container,
            isDocument: F,
          };
          return arguments.length ? (le[I] !== void 0 ? le[I] : void 0) : le;
        }),
        (this.loglevel = function (I) {
          return E;
        }),
        (this.enabled = function (I) {
          return arguments.length
            ? (Y != I && ((Y = !!I), E.updateScene(X, !0)), E)
            : Y;
        }),
        (this.destroy = function (I) {
          window.clearTimeout(ee);
          for (var le = X.length; le--; ) X[le].destroy(I);
          return (
            v.container.removeEventListener("resize", he),
            v.container.removeEventListener("scroll", he),
            g.cAF(Q),
            null
          );
        }),
        (function () {
          for (var I in v) _.hasOwnProperty(I) || delete v[I];
          if (((v.container = g.get.elements(v.container)[0]), !v.container))
            throw "ScrollMagic.Controller init failed.";
          (F =
            v.container === window ||
            v.container === document.body ||
            !document.body.contains(v.container)) && (v.container = window),
            (R = q()),
            v.container.addEventListener("resize", he),
            v.container.addEventListener("scroll", he);
          var le = parseInt(v.refreshInterval, 10);
          (v.refreshInterval = g.type.Number(le) ? le : _.refreshInterval), r();
        })(),
        E
      );
    };
    var j = {
      defaults: {
        container: window,
        vertical: !0,
        globalSceneOptions: {},
        loglevel: 2,
        refreshInterval: 100,
      },
    };
    (p.Controller.addOption = function (w, N) {
      j.defaults[w] = N;
    }),
      (p.Controller.extend = function (w) {
        var N = this;
        (p.Controller = function () {
          return (
            N.apply(this, arguments),
            (this.$super = g.extend({}, this)),
            w.apply(this, arguments) || this
          );
        }),
          g.extend(p.Controller, N),
          (p.Controller.prototype = N.prototype),
          (p.Controller.prototype.constructor = p.Controller);
      }),
      (p.Scene = function (w) {
        var N,
          A,
          Q = "BEFORE",
          ee = "DURING",
          ie = "AFTER",
          fe = V.defaults,
          _ = this,
          E = g.extend({}, fe, w),
          v = Q,
          X = 0,
          O = {
            start: 0,
            end: 0,
          },
          Se = 0,
          k = !0,
          F = {};
        (this.on = function (x, H) {
          return (
            g.type.Function(H) &&
              (x = x.trim().split(" ")).forEach(function (ne) {
                var oe = ne.split("."),
                  Z = oe[0],
                  Ce = oe[1];
                Z != "*" &&
                  (F[Z] || (F[Z] = []),
                  F[Z].push({
                    namespace: Ce || "",
                    callback: H,
                  }));
              }),
            _
          );
        }),
          (this.off = function (x, H) {
            return (
              x &&
                (x = x.trim().split(" ")).forEach(function (ne, oe) {
                  var Z = ne.split("."),
                    Ce = Z[0],
                    _e = Z[1] || "";
                  (Ce === "*" ? Object.keys(F) : [Ce]).forEach(function (Ve) {
                    for (var Le = F[Ve] || [], dt = Le.length; dt--; ) {
                      var Ze = Le[dt];
                      !Ze ||
                        (_e !== Ze.namespace && _e !== "*") ||
                        (H && H != Ze.callback) ||
                        Le.splice(dt, 1);
                    }
                    Le.length || delete F[Ve];
                  });
                }),
              _
            );
          }),
          (this.trigger = function (x, H) {
            var ne, oe, Z, Ce;
            return (
              x &&
                ((ne = x.trim().split(".")),
                (oe = ne[0]),
                (Z = ne[1]),
                (Ce = F[oe]) &&
                  Ce.forEach(function (_e, Ve) {
                    (Z && Z !== _e.namespace) ||
                      _e.callback.call(_, new p.Event(oe, _e.namespace, _, H));
                  })),
              _
            );
          }),
          _.on("change.internal", function (x) {
            x.what !== "loglevel" &&
              x.what !== "tweenChanges" &&
              (x.what === "triggerElement"
                ? q()
                : x.what === "reverse" && _.update());
          }).on("shift.internal", function (x) {
            r(), _.update();
          }),
          (this.addTo = function (x) {
            return (
              x instanceof p.Controller &&
                A != x &&
                (A && A.removeScene(_),
                (A = x),
                tt(),
                U(!0),
                q(!0),
                r(),
                A.info("container").addEventListener("resize", be),
                x.addScene(_),
                _.trigger("add", {
                  controller: A,
                }),
                _.update()),
              _
            );
          }),
          (this.enabled = function (x) {
            return arguments.length
              ? (k != x && ((k = !!x), _.update(!0)), _)
              : k;
          }),
          (this.remove = function () {
            var x;
            return (
              A &&
                (A.info("container").removeEventListener("resize", be),
                (x = A),
                (A = void 0),
                x.removeScene(_),
                _.trigger("remove")),
              _
            );
          }),
          (this.destroy = function (x) {
            return (
              _.trigger("destroy", {
                reset: x,
              }),
              _.remove(),
              _.off("*.*"),
              null
            );
          }),
          (this.update = function (x) {
            var H, ne;
            return (
              A &&
                (x
                  ? A.enabled() && k
                    ? ((H = A.info("scrollPos")),
                      (ne =
                        0 < E.duration
                          ? (H - O.start) / (O.end - O.start)
                          : H >= O.start
                          ? 1
                          : 0),
                      _.trigger("update", {
                        startPos: O.start,
                        endPos: O.end,
                        scrollPos: H,
                      }),
                      _.progress(ne))
                    : R && v === ee && Ye(!0)
                  : A.updateScene(_, !1)),
              _
            );
          }),
          (this.refresh = function () {
            return U(), q(), _;
          }),
          (this.progress = function (x) {
            if (arguments.length) {
              var H,
                ne,
                oe,
                Z = !1,
                Ce = v,
                _e = A ? A.info("scrollDirection") : "PAUSED",
                Ve = E.reverse || X <= x;
              return (
                E.duration === 0
                  ? ((Z = X != x),
                    (v = (X = x < 1 && Ve ? 0 : 1) == 0 ? Q : ee))
                  : x < 0 && v !== Q && Ve
                  ? ((v = Q), (Z = !(X = 0)))
                  : 0 <= x && x < 1 && Ve
                  ? ((X = x), (v = ee), (Z = !0))
                  : 1 <= x && v !== ie
                  ? ((X = 1), (v = ie), (Z = !0))
                  : v !== ee || Ve || Ye(),
                Z &&
                  ((H = {
                    progress: X,
                    state: v,
                    scrollDirection: _e,
                  }),
                  (oe = function (Le) {
                    _.trigger(Le, H);
                  }),
                  (ne = v != Ce) &&
                    Ce !== ee &&
                    (oe("enter"), oe(Ce === Q ? "start" : "end")),
                  oe("progress"),
                  ne &&
                    v !== ee &&
                    (oe(v === Q ? "start" : "end"), oe("leave"))),
                _
              );
            }
            return X;
          });
        var R,
          Y,
          r = function () {
            (O = {
              start: Se + E.offset,
            }),
              A &&
                E.triggerElement &&
                (O.start -= A.info("size") * E.triggerHook),
              (O.end = O.start + E.duration);
          },
          U = function (x) {
            var H;
            !N ||
              (ge((H = "duration"), N.call(_)) &&
                !x &&
                (_.trigger("change", {
                  what: H,
                  newval: E[H],
                }),
                _.trigger("shift", {
                  reason: H,
                })));
          },
          q = function (x) {
            var H = 0,
              ne = E.triggerElement;
            if (A && (ne || 0 < Se)) {
              if (ne)
                if (ne.parentNode) {
                  for (
                    var oe = A.info(),
                      Z = g.get.offset(oe.container),
                      Ce = oe.vertical ? "top" : "left";
                    ne.parentNode.hasAttribute(D);

                  )
                    ne = ne.parentNode;
                  var _e = g.get.offset(ne);
                  oe.isDocument || (Z[Ce] -= A.scrollPos()),
                    (H = _e[Ce] - Z[Ce]);
                } else _.triggerElement(void 0);
              var Ve = H != Se;
              (Se = H),
                Ve &&
                  !x &&
                  _.trigger("shift", {
                    reason: "triggerElementPosition",
                  });
            }
          },
          be = function (x) {
            0 < E.triggerHook &&
              _.trigger("shift", {
                reason: "containerResize",
              });
          },
          he = g.extend(V.validate, {
            duration: function (x) {
              var H;
              if (
                (g.type.String(x) &&
                  x.match(/^\d+(\.\d{1,2})?%$/) &&
                  ((H = parseFloat(x) / 100),
                  (x = function () {
                    return A ? A.info("size") * H : 0;
                  })),
                g.type.Function(x))
              ) {
                N = x;
                try {
                  x = parseFloat(N.call(_));
                } catch {
                  x = -1;
                }
              }
              if (((x = parseFloat(x)), !g.type.Number(x) || x < 0))
                throw ((N = N && void 0), 0);
              return x;
            },
          }),
          tt = function (x) {
            (x = arguments.length ? [x] : Object.keys(he)).forEach(
              function (H, ne) {
                var oe;
                if (he[H])
                  try {
                    oe = he[H](E[H]);
                  } catch {
                    oe = fe[H];
                  } finally {
                    E[H] = oe;
                  }
              }
            );
          },
          ge = function (x, H) {
            var ne = !1,
              oe = E[x];
            return E[x] != H && ((E[x] = H), tt(x), (ne = oe != E[x])), ne;
          },
          I = function (x) {
            _[x] ||
              (_[x] = function (H) {
                return arguments.length
                  ? (x === "duration" && (N = void 0),
                    ge(x, H) &&
                      (_.trigger("change", {
                        what: x,
                        newval: E[x],
                      }),
                      ~V.shifts.indexOf(x) &&
                        _.trigger("shift", {
                          reason: x,
                        })),
                    _)
                  : E[x];
              });
          };
        (this.controller = function () {
          return A;
        }),
          (this.state = function () {
            return v;
          }),
          (this.scrollOffset = function () {
            return O.start;
          }),
          (this.triggerPosition = function () {
            var x = E.offset;
            return (
              A &&
                (E.triggerElement
                  ? (x += Se)
                  : (x += A.info("size") * _.triggerHook())),
              x
            );
          }),
          _.on("shift.internal", function (x) {
            var H = x.reason === "duration";
            ((v === ie && H) || (v === ee && E.duration === 0)) && Ye(),
              H && Ue();
          })
            .on("progress.internal", function (x) {
              Ye();
            })
            .on("add.internal", function (x) {
              Ue();
            })
            .on("destroy.internal", function (x) {
              _.removePin(x.reset);
            });
        function le() {
          A && R && v === ee && !A.info("isDocument") && Ye();
        }
        function je() {
          A &&
            R &&
            v === ee &&
            (((Y.relSize.width || Y.relSize.autoFullWidth) &&
              g.get.width(window) != g.get.width(Y.spacer.parentNode)) ||
              (Y.relSize.height &&
                g.get.height(window) != g.get.height(Y.spacer.parentNode))) &&
            Ue();
        }
        function Ae(x) {
          A &&
            R &&
            v === ee &&
            !A.info("isDocument") &&
            (x.preventDefault(),
            A._setScrollPos(
              A.info("scrollPos") -
                ((x.wheelDelta ||
                  x[A.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 ||
                  30 * -x.detail)
            ));
        }
        var Ye = function (x) {
            var H, ne, oe, Z, Ce, _e;
            R &&
              A &&
              ((H = A.info()),
              (ne = Y.spacer.firstChild),
              x || v !== ee
                ? ((oe = {
                    position: Y.inFlow ? "relative" : "absolute",
                    top: 0,
                    left: 0,
                  }),
                  (Z = g.css(ne, "position") != oe.position),
                  Y.pushFollowers
                    ? 0 < E.duration &&
                      ((v === ie &&
                        parseFloat(g.css(Y.spacer, "padding-top")) === 0) ||
                        (v === Q &&
                          parseFloat(g.css(Y.spacer, "padding-bottom")) ===
                            0)) &&
                      (Z = !0)
                    : (oe[H.vertical ? "top" : "left"] = E.duration * X),
                  g.css(ne, oe),
                  Z && Ue())
                : (g.css(ne, "position") != "fixed" &&
                    (g.css(ne, {
                      position: "fixed",
                    }),
                    Ue()),
                  (Ce = g.get.offset(Y.spacer, !0)),
                  (_e =
                    E.reverse || E.duration === 0
                      ? H.scrollPos - O.start
                      : Math.round(X * E.duration * 10) / 10),
                  (Ce[H.vertical ? "top" : "left"] += _e),
                  g.css(Y.spacer.firstChild, {
                    top: Ce.top,
                    left: Ce.left,
                  })));
          },
          Ue = function () {
            var x, H, ne, oe, Z;
            R &&
              A &&
              Y.inFlow &&
              ((x = v === ee),
              (H = A.info("vertical")),
              (ne = Y.spacer.firstChild),
              (oe = g.isMarginCollapseType(g.css(Y.spacer, "display"))),
              (Z = {}),
              Y.relSize.width || Y.relSize.autoFullWidth
                ? x
                  ? g.css(R, {
                      width: g.get.width(Y.spacer),
                    })
                  : g.css(R, {
                      width: "100%",
                    })
                : ((Z["min-width"] = g.get.width(H ? R : ne, !0, !0)),
                  (Z.width = x ? Z["min-width"] : "auto")),
              Y.relSize.height
                ? x
                  ? g.css(R, {
                      height:
                        g.get.height(Y.spacer) -
                        (Y.pushFollowers ? E.duration : 0),
                    })
                  : g.css(R, {
                      height: "100%",
                    })
                : ((Z["min-height"] = g.get.height(H ? ne : R, !0, !oe)),
                  (Z.height = x ? Z["min-height"] : "auto")),
              Y.pushFollowers &&
                ((Z["padding" + (H ? "Top" : "Left")] = E.duration * X),
                (Z["padding" + (H ? "Bottom" : "Right")] =
                  E.duration * (1 - X))),
              g.css(Y.spacer, Z));
          };
        (this.setPin = function (x, H) {
          if (
            ((H = g.extend(
              {},
              {
                pushFollowers: !0,
                spacerClass: "scrollmagic-pin-spacer",
              },
              H
            )),
            !(x = g.get.elements(x)[0]) || g.css(x, "position") === "fixed")
          )
            return _;
          if (R) {
            if (R === x) return _;
            _.removePin();
          }
          var ne = (R = x).parentNode.style.display,
            oe = [
              "top",
              "left",
              "bottom",
              "right",
              "margin",
              "marginLeft",
              "marginRight",
              "marginTop",
              "marginBottom",
            ];
          R.parentNode.style.display = "none";
          var Z = g.css(R, "position") != "absolute",
            Ce = g.css(R, oe.concat(["display"])),
            _e = g.css(R, ["width", "height"]);
          (R.parentNode.style.display = ne),
            !Z && H.pushFollowers && (H.pushFollowers = !1);
          var Ve,
            Le = R.parentNode.insertBefore(document.createElement("div"), R),
            dt = g.extend(Ce, {
              position: Z ? "relative" : "absolute",
              boxSizing: "content-box",
              mozBoxSizing: "content-box",
              webkitBoxSizing: "content-box",
            });
          return (
            Z || g.extend(dt, g.css(R, ["width", "height"])),
            g.css(Le, dt),
            Le.setAttribute(D, ""),
            g.addClass(Le, H.spacerClass),
            (Y = {
              spacer: Le,
              relSize: {
                width: _e.width.slice(-1) === "%",
                height: _e.height.slice(-1) === "%",
                autoFullWidth:
                  _e.width === "auto" &&
                  Z &&
                  g.isMarginCollapseType(Ce.display),
              },
              pushFollowers: H.pushFollowers,
              inFlow: Z,
            }),
            R.___origStyle ||
              ((R.___origStyle = {}),
              (Ve = R.style),
              oe
                .concat([
                  "width",
                  "height",
                  "position",
                  "boxSizing",
                  "mozBoxSizing",
                  "webkitBoxSizing",
                ])
                .forEach(function (Ze) {
                  R.___origStyle[Ze] = Ve[Ze] || "";
                })),
            Y.relSize.width &&
              g.css(Le, {
                width: _e.width,
              }),
            Y.relSize.height &&
              g.css(Le, {
                height: _e.height,
              }),
            Le.appendChild(R),
            g.css(R, {
              position: Z ? "relative" : "absolute",
              margin: "auto",
              top: "auto",
              left: "auto",
              bottom: "auto",
              right: "auto",
            }),
            (Y.relSize.width || Y.relSize.autoFullWidth) &&
              g.css(R, {
                boxSizing: "border-box",
                mozBoxSizing: "border-box",
                webkitBoxSizing: "border-box",
              }),
            window.addEventListener("scroll", le),
            window.addEventListener("resize", le),
            window.addEventListener("resize", je),
            R.addEventListener("mousewheel", Ae),
            R.addEventListener("DOMMouseScroll", Ae),
            Ye(),
            _
          );
        }),
          (this.removePin = function (x) {
            var H, ne, oe;
            return (
              R &&
                (v === ee && Ye(!0),
                (!x && A) ||
                  ((H = Y.spacer.firstChild).hasAttribute(D) &&
                    ((ne = Y.spacer.style),
                    (oe = {}),
                    [
                      "margin",
                      "marginLeft",
                      "marginRight",
                      "marginTop",
                      "marginBottom",
                    ].forEach(function (Z) {
                      oe[Z] = ne[Z] || "";
                    }),
                    g.css(H, oe)),
                  Y.spacer.parentNode.insertBefore(H, Y.spacer),
                  Y.spacer.parentNode.removeChild(Y.spacer),
                  R.parentNode.hasAttribute(D) ||
                    (g.css(R, R.___origStyle), delete R.___origStyle)),
                window.removeEventListener("scroll", le),
                window.removeEventListener("resize", le),
                window.removeEventListener("resize", je),
                R.removeEventListener("mousewheel", Ae),
                R.removeEventListener("DOMMouseScroll", Ae),
                (R = void 0)),
              _
            );
          });
        var st,
          ut = [];
        return (
          _.on("destroy.internal", function (x) {
            _.removeClassToggle(x.reset);
          }),
          (this.setClassToggle = function (x, H) {
            var ne = g.get.elements(x);
            return (
              ne.length !== 0 &&
                g.type.String(H) &&
                (0 < ut.length && _.removeClassToggle(),
                (st = H),
                (ut = ne),
                _.on(
                  "enter.internal_class leave.internal_class",
                  function (oe) {
                    var Z = oe.type === "enter" ? g.addClass : g.removeClass;
                    ut.forEach(function (Ce, _e) {
                      Z(Ce, st);
                    });
                  }
                )),
              _
            );
          }),
          (this.removeClassToggle = function (x) {
            return (
              x &&
                ut.forEach(function (H, ne) {
                  g.removeClass(H, st);
                }),
              _.off("start.internal_class end.internal_class"),
              (st = void 0),
              (ut = []),
              _
            );
          }),
          (function () {
            for (var x in E) fe.hasOwnProperty(x) || delete E[x];
            for (var H in fe) I(H);
            tt();
          })(),
          _
        );
      });
    var V = {
      defaults: {
        duration: 0,
        offset: 0,
        triggerElement: void 0,
        triggerHook: 0.5,
        reverse: !0,
        loglevel: 2,
      },
      validate: {
        offset: function (w) {
          if (((w = parseFloat(w)), !g.type.Number(w))) throw 0;
          return w;
        },
        triggerElement: function (w) {
          if ((w = w || void 0)) {
            var N = g.get.elements(w)[0];
            if (!N || !N.parentNode) throw 0;
            w = N;
          }
          return w;
        },
        triggerHook: function (w) {
          var N = {
            onCenter: 0.5,
            onEnter: 1,
            onLeave: 0,
          };
          if (g.type.Number(w)) w = Math.max(0, Math.min(parseFloat(w), 1));
          else {
            if (!(w in N)) throw 0;
            w = N[w];
          }
          return w;
        },
        reverse: function (w) {
          return !!w;
        },
      },
      shifts: ["duration", "offset", "triggerHook"],
    };
    (p.Scene.addOption = function (w, N, A, Q) {
      w in V.defaults ||
        ((V.defaults[w] = N), (V.validate[w] = A), Q && V.shifts.push(w));
    }),
      (p.Scene.extend = function (w) {
        var N = this;
        (p.Scene = function () {
          return (
            N.apply(this, arguments),
            (this.$super = g.extend({}, this)),
            w.apply(this, arguments) || this
          );
        }),
          g.extend(p.Scene, N),
          (p.Scene.prototype = N.prototype),
          (p.Scene.prototype.constructor = p.Scene);
      }),
      (p.Event = function (w, N, A, Q) {
        for (var ee in (Q = Q || {})) this[ee] = Q[ee];
        return (
          (this.type = w),
          (this.target = this.currentTarget = A),
          (this.namespace = N || ""),
          (this.timeStamp = this.timestamp = Date.now()),
          this
        );
      });
    var g = (p._util = (function (w) {
      function N(k) {
        return parseFloat(k) || 0;
      }
      function A(k) {
        return k.currentStyle ? k.currentStyle : w.getComputedStyle(k);
      }
      function Q(k, F, R, Y) {
        if ((F = F === document ? w : F) === w) Y = !1;
        else if (!O.DomElement(F)) return 0;
        k = k[0].toUpperCase() + k.substr(1).toLowerCase();
        var r,
          U =
            (R
              ? F["offset" + k] || F["outer" + k]
              : F["client" + k] || F["inner" + k]) || 0;
        return (
          R &&
            Y &&
            ((r = A(F)),
            (U +=
              k === "Height"
                ? N(r.marginTop) + N(r.marginBottom)
                : N(r.marginLeft) + N(r.marginRight))),
          U
        );
      }
      function ee(k) {
        return k
          .replace(/^[^a-z]+([a-z])/g, "$1")
          .replace(/-([a-z])/g, function (F) {
            return F[1].toUpperCase();
          });
      }
      var ie = {};
      (ie.extend = function (k) {
        for (k = k || {}, X = 1; X < arguments.length; X++)
          if (arguments[X])
            for (var F in arguments[X])
              arguments[X].hasOwnProperty(F) && (k[F] = arguments[X][F]);
        return k;
      }),
        (ie.isMarginCollapseType = function (k) {
          return !!~[
            "block",
            "flex",
            "list-item",
            "table",
            "-webkit-box",
          ].indexOf(k);
        });
      for (
        var fe = 0,
          _ = ["ms", "moz", "webkit", "o"],
          E = w.requestAnimationFrame,
          v = w.cancelAnimationFrame,
          X = 0;
        !E && X < 4;
        ++X
      )
        (E = w[_[X] + "RequestAnimationFrame"]),
          (v =
            w[_[X] + "CancelAnimationFrame"] ||
            w[_[X] + "CancelRequestAnimationFrame"]);
      (E =
        E ||
        function (k) {
          var F = new Date().getTime(),
            R = Math.max(0, 16 - (F - fe)),
            Y = w.setTimeout(function () {
              k(F + R);
            }, R);
          return (fe = F + R), Y;
        }),
        (v =
          v ||
          function (k) {
            w.clearTimeout(k);
          }),
        (ie.rAF = E.bind(w)),
        (ie.cAF = v.bind(w));
      var O = (ie.type = function (k) {
        return Object.prototype.toString
          .call(k)
          .replace(/^\[object (.+)\]$/, "$1")
          .toLowerCase();
      });
      (O.String = function (k) {
        return O(k) === "string";
      }),
        (O.Function = function (k) {
          return O(k) === "function";
        }),
        (O.Array = function (k) {
          return Array.isArray(k);
        }),
        (O.Number = function (k) {
          return !O.Array(k) && 0 <= k - parseFloat(k) + 1;
        }),
        (O.DomElement = function (k) {
          return typeof HTMLElement == "object" ||
            typeof HTMLElement == "function"
            ? k instanceof HTMLElement || k instanceof SVGElement
            : k &&
                typeof k == "object" &&
                k !== null &&
                k.nodeType === 1 &&
                typeof k.nodeName == "string";
        });
      var Se = (ie.get = {});
      return (
        (Se.elements = function (k) {
          var F = [];
          if (O.String(k))
            try {
              k = document.querySelectorAll(k);
            } catch {
              return F;
            }
          if (O(k) === "nodelist" || O.Array(k) || k instanceof NodeList)
            for (var R = 0, Y = (F.length = k.length); R < Y; R++) {
              var r = k[R];
              F[R] = O.DomElement(r) ? r : Se.elements(r);
            }
          else (!O.DomElement(k) && k !== document && k !== w) || (F = [k]);
          return F;
        }),
        (Se.scrollTop = function (k) {
          return k && typeof k.scrollTop == "number"
            ? k.scrollTop
            : w.pageYOffset || 0;
        }),
        (Se.scrollLeft = function (k) {
          return k && typeof k.scrollLeft == "number"
            ? k.scrollLeft
            : w.pageXOffset || 0;
        }),
        (Se.width = function (k, F, R) {
          return Q("width", k, F, R);
        }),
        (Se.height = function (k, F, R) {
          return Q("height", k, F, R);
        }),
        (Se.offset = function (k, F) {
          var R,
            Y = {
              top: 0,
              left: 0,
            };
          return (
            k &&
              k.getBoundingClientRect &&
              ((R = k.getBoundingClientRect()),
              (Y.top = R.top),
              (Y.left = R.left),
              F || ((Y.top += Se.scrollTop()), (Y.left += Se.scrollLeft()))),
            Y
          );
        }),
        (ie.addClass = function (k, F) {
          F && (k.classList ? k.classList.add(F) : (k.className += " " + F));
        }),
        (ie.removeClass = function (k, F) {
          F &&
            (k.classList
              ? k.classList.remove(F)
              : (k.className = k.className.replace(
                  RegExp("(^|\\b)" + F.split(" ").join("|") + "(\\b|$)", "gi"),
                  " "
                )));
        }),
        (ie.css = function (k, F) {
          if (O.String(F)) return A(k)[ee(F)];
          if (O.Array(F)) {
            var R = {},
              Y = A(k);
            return (
              F.forEach(function (q, be) {
                R[q] = Y[ee(q)];
              }),
              R
            );
          }
          for (var r in F) {
            var U = F[r];
            U == parseFloat(U) && (U += "px"), (k.style[ee(r)] = U);
          }
        }),
        ie
      );
    })(window || {}));
    return p;
  });
  var jn = ScrollMagic;
  function Lr() {
    let p = document.querySelectorAll(".parallax-on-scroll");
    if (p.length) {
      let D = (V, g, w, N) => {
          let A = "250%";
          new jn.Scene({
            triggerElement: g,
            triggerHook: "onEnter",
            duration: A,
          })
            .on("progress", function (Q) {
              (w.style.transition = "opacity 1s"),
                (w.style.opacity = 1),
                N &&
                  ((N.style.opacity = 1), (N.style.transition = "opacity 1s"));
            })
            .on("leave", function (Q) {
              (w.style.opacity = 0),
                (w.style.transition = "opacity 1s"),
                N &&
                  ((N.style.opacity = 0), (N.style.transition = "opacity 1s"));
            })
            .addTo(V);
        },
        j = new jn.Controller();
      p.forEach((V, g) => {
        let w = p[g],
          N = w.querySelector(".parallax-on-scroll-content"),
          A = w.getAttribute("data-parallax-effect"),
          Q = JSON.parse(w.getAttribute("data-disable-parallax")),
          ee = w.querySelector(".parallax-on-scroll-bg"),
          ie = w.querySelector(".parallax-on-scroll-gradient");
        Q
          ? w.classList.add("parallax-on-scroll-disabled")
          : ee && A === "fade-in-out" && D(j, N, ee, ie);
      });
    }
  }
  document.addEventListener("DOMContentLoaded", Lr);
  (function (p) {
    window.customSwipe = function (D, j) {
      var V = this;
      (this.scrollAmount = j),
        (this.container = D),
        (this.init = function (g) {
          (this.container = g),
            g.append(
              '<a class="icon-chevron-left customScrollArrows" id="leftArrow" style="position: absolute; left: 10px; font-size: 1em; height: 20px; width: 20px;color: #fff; font-weight: 600;"></a>'
            ),
            g.append(
              '<a class="icon-chevron-right customScrollArrows" id="rightArrow" style="position: absolute; right: 10px; font-size: 1em; height: 20px; width: 20px;color: #fff; font-weight: 600;"></a>'
            ),
            this.initListeners();
        }),
        (this.initListeners = function () {
          p("#leftArrow").on("click tap", function () {
            V.container.animate(
              {
                scrollLeft: "-=" + V.scrollAmount,
              },
              100
            );
          }),
            p("#rightArrow").on("click tap", function () {
              V.container.animate(
                {
                  scrollLeft: "+=" + V.scrollAmount,
                },
                100
              );
            });
        }),
        this.init(D, this.scrollAmount);
    };
  })(jQuery);
})();
/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */
/*! ScrollMagic v2.0.8 | (c) 2020 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
