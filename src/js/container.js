(() => {
  (() => {
    function e() {
      let a = (() => {
          let r = document.createElement("div");
          (r.style.cssText =
            "overflow:scroll; visibility:hidden; position:absolute;"),
            document.body.appendChild(r);
          let d = r.offsetWidth - r.clientWidth;
          return r.remove(), d;
        })(),
        h = () => {
          $("html").css({
            overflow: "hidden",
            background: "#2c2c2c",
          }),
            $("body").css({
              "margin-right": `${a}px`,
            }),
            $(".cmp-header").css({
              width: `calc(100% - ${a}px)`,
            });
        },
        l = () => {
          $("html").removeAttr("style"),
            $("body").css({
              "margin-right": "",
            }),
            $(".cmp-header").css({
              width: "",
            });
        },
        m = ".cmp-container__col--animate-scroll",
        s = document.querySelectorAll(m),
        p = 15,
        E = {
          top: 0,
          left: 0,
        },
        f = !1,
        C = (r, d, _) => {
          r ? l() : d.children[0].scrollBy(_);
        },
        u = (r) => {
          let d = $(r).offset().top,
            _ = d + $(r).outerHeight(),
            b = $(window).scrollTop(),
            v = b + $(window).height();
          return _ < v && d > b;
        },
        S = () => {
          [...s].map((r) => {
            if (u(r)) {
              let d = $(r).find("> div"),
                _ = r?.children[0]?.scrollHeight,
                b = Math.ceil(d.scrollTop());
              h();
              let v = b + d.outerHeight(),
                M = f && b === 0,
                t = !f && v >= _,
                n = M || t;
              (E.top = f ? -p : p), C(n, r, E);
            }
          });
        },
        k = () => {
          l(), $(window).width() > 1200 && requestAnimationFrame(S);
        };
      s.length &&
        ($("body").on("wheel", function (r) {
          (f = r.originalEvent.wheelDelta >= 0), k();
        }),
        $(window).on("resize", k),
        k());
    }
    e();
  })();
  var O = "containerLoaded";
  window.isMobile = window.matchMedia("(max-width: 767px)").matches;
  window.isTablet = window.matchMedia(
    "(min-width: 768px) and (max-width: 1023px)"
  ).matches;
  window.isDesktop = window.matchMedia("(min-width: 1024px)").matches;
  var W = () => {
      let e = document.querySelectorAll(
          ".cmp-container--stacked-img-text-button__scale-image .cmp-image__image"
        ),
        o = () => {
          [...e].map((a) => {
            isElementFullyInViewport(a)
              ? $(a).css("transform", "scale(1)")
              : $(a).css("transform", "scale(1.25)");
          });
        };
      e.length &&
        (o(),
        $(window).on("scroll", function () {
          requestAnimationFrame(o);
        }),
        $(window).on("resize", function () {
          requestAnimationFrame(o);
        }));
    },
    T = W;
  function q() {
    var e = $(".cmp-container__offset-top"),
      o = $(".cmp-container__offset-bottom"),
      a = 100;
    if (e.length) var h = $(".cmp-container__offset-top").offset().top;
    if (o.length) var l = $(".cmp-container__offset-bottom").offset().top;
    let m = () => {
        e.length &&
          ($(window).scrollTop() > h
            ? $(e).addClass("cmp-container__sticky-top")
            : $(e).removeClass("cmp-container__sticky-top")),
          o.length &&
            ($(window).scrollTop() + a > l
              ? $(o).addClass("cmp-container__sticky-bottom")
              : $(o).removeClass("cmp-container__sticky-bottom"));
      },
      s = [],
      p = () => {
        $(".cmp-container__bg-image").each(function (t, n) {
          var i = $(n).children(),
            g = i.attr("style");
          if (!g) return;
          if (!s[t]) {
            var w = {
              minHeightMobile: i.attr("data-mobile-min-height") + "px",
              minHeightTablet: i.attr("data-tablet-min-height") + "px",
              minHeightDesktop: i.attr("data-desktop-min-height") + "px",
              deskImg: i.attr("data-desktop-img-path"),
              mobileImg: i.attr("data-mobile-img-path"),
              tabletImg: i.attr("data-tablet-img-path"),
              containerMinHeight: i.attr("data-container-min-height") + "px",
            };
            s[t] = w;
          }
          let c = s[t];
          n.classList.contains("cmp-container__gradient")
            ? (i.removeAttr("style"),
              $(n).css({
                "min-height": c.containerMinHeight,
              }),
              $(n).prepend(' <div class="cmp-container__img-clone"></div>'),
              $(".cmp-container__img-clone").eq(t).css({
                "background-image": c.deskImg,
                "min-height": c.minHeightDesktop,
              }),
              window.matchMedia("(max-width: 767px)").matches &&
                ($(".cmp-container__img-clone")
                  .eq(t)
                  .css({
                    "background-image": "url(" + c.mobileImg + ")",
                    "min-height": c.minHeightMobile,
                  }),
                $(n).css({
                  "min-height": c.minHeightMobile,
                })))
            : window.matchMedia("(max-width: 767px)").matches
            ? (!n.classList.contains("circular-black") &&
                !n.classList.contains("circular-white") &&
                c.mobileImg &&
                c.mobileImg.length &&
                i.eq(t).css({
                  "background-image": "url(" + c.mobileImg + ")",
                  "background-repeat": "no-repeat",
                }),
              i.eq(t).css("min-height", c.minHeightMobile),
              $(".cmp-container__mobile-overlay").length &&
                i.eq(t).css("background-color", "#000"))
            : window.matchMedia("(min-width: 768px) and (max-width: 1199px)")
                .matches
            ? (!n.classList.contains("circular-black") &&
                !n.classList.contains("circular-white") &&
                (c.tabletImg && c.tabletImg.length
                  ? i.eq(t).css({
                      "background-image": "url(" + c.tabletImg + ")",
                      "min-height": c.minHeightTablet,
                    })
                  : c.mobileImg &&
                    c.mobileImg.length &&
                    i.eq(t).css({
                      "background-image": "url(" + c.mobileImg + ")",
                      "min-height": c.minHeightMobile,
                    })),
              i.eq(t).css({
                "background-repeat": "no-repeat",
              }),
              $(".cmp-container__mobile-overlay").length &&
                i.eq(t).css("background-color", "#000"))
            : i.eq(t).css({
                "min-height": c.minHeightDesktop,
                "background-image": "url(" + c.deskImg + ")",
                "background-repeat": "no-repeat",
              });
        });
      };
    (e.length || o.length) &&
      $(window).on("scroll", function () {
        requestAnimationFrame(m);
      }),
      $(".cmp-container__bg-image").length &&
        (p(),
        $(window).on("resize", function () {
          requestAnimationFrame(p);
        }));
    let E = 160,
      f = document.querySelectorAll(".cmp-container__parallax-image > div"),
      C = {
        top: window.pageYOffset,
        height: document.documentElement.clientHeight,
        bottom: window.pageYOffset + document.documentElement.clientHeight,
      },
      u = {
        top: 0,
        height: 0,
        bottom: 0,
      },
      S = (t) => {
        let n = t.getBoundingClientRect();
        return (
          n.top >= -n.height &&
          n.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) +
              n.height
        );
      },
      k = (t) => {
        let n = t.getBoundingClientRect();
        (u.height = n.height),
          (u.top = n.top + C.top),
          (u.bottom = u.height + u.top);
      },
      r = (t) => {
        k(t);
        let n = ((C.bottom - u.top) / ((C.height + u.height) / 100)).toFixed(1);
        n = Math.min(100, Math.max(0, n));
        let i = ((n / 100) * E - E / 2).toFixed(0);
        t.style.backgroundPositionY = `${-1 * i}px`;
      },
      d = () => {
        [...f].map((t) => {
          S(t) && r(t);
        });
      };
    f.length > 0 &&
      ($(window).on("scroll", function () {
        requestAnimationFrame(d);
      }),
      d()),
      (() => {
        if (!document.querySelectorAll(".cmp-container__bg-video").length)
          return !1;
        let t = window.matchMedia("screen and (max-width:1200px)"),
          n = ({ matches: i }) => {
            document
              .querySelectorAll(".cmp-container__bg-video")
              .forEach((w) => {
                w.querySelector("video")?.[i ? "pause" : "play"]();
              });
          };
        t.addEventListener("change", n), n(t);
      })(),
      (() => {
        let t = (i, g, w) => {
          i.matches ? window.matchHeight(g, w) : window.removeHeight(g, w);
        };
        (() => {
          let i = [".cmp-container--equal-height--tab-desktop"],
            g = ["(min-width: 768px)"];
          i.forEach((w, c) => {
            let y = document.querySelectorAll(w),
              x = w,
              H = ".cmp-container__column--equal-height",
              I = window.matchMedia(g[c]);
            y.forEach(() => {
              t(I, x, H),
                window.addEventListener("resize", () => {
                  requestAnimationFrame(() => {
                    (I = window.matchMedia(g[c])), t(I, x, H);
                  });
                });
            });
          });
        })();
      })();
    let v = (t, n, i) => {
      t.matches
        ? window.floatingElementWidth(n, i)
        : window.removeFloatingElementWidth(n, i);
    };
    (() => {
      let t = [".cmp-container__column--floating-width--tab-desktop"],
        n = ["(min-width: 768px)"];
      t.forEach((i, g) => {
        let w = document.querySelectorAll(i),
          c = i,
          y = ".cmp-container__column--float-width",
          x = window.matchMedia(n[g]);
        w.forEach(() => {
          v(x, c, y),
            window.addEventListener("resize", () => {
              requestAnimationFrame(() => {
                (x = window.matchMedia(n[g])), v(x, c, y);
              });
            });
        });
      });
    })();
  }
  var L = () => {
      if (window.isEditMode === "true" || !window.isEditMode) return !1;
      let e = $(".cmp-container.circular-black"),
        o = $(".cmp-container.circular-white"),
        a = $(
          ".cmp-container.cmp-container__bg-image.cmp-container--bg--content-width .cmp-container-image, .cmp-container.cmp-container-hero__vip-profile .cmp-container-image, .cmp-container.cmp-container-hero__premium-initiatives .cmp-container-image"
        ),
        h = (s) => {
          let p = s.find(".cmp-content-width").clone(!0);
          p &&
            (s.find(".cmp-content-width").remove(),
            $(p).insertAfter(s.find(".cmp-container-image")));
        },
        l = (s) => {
          let p = s.find(".cmp-content-width").clone(!0);
          p && (s.find(".cmp-content-width").remove(), a.append(p));
        };
      e.length > 0 && $(window).width() <= 1023
        ? e.each(function (s) {
            h($(this));
          })
        : e.length > 0 &&
          $(window).width() > 1023 &&
          e.each(function (s) {
            l($(this));
          }),
        o.length > 0 && $(window).width() <= 1023
          ? o.each(function (s) {
              h($(this));
            })
          : o.length > 0 &&
            $(window).width() > 1023 &&
            o.each(function (s) {
              l($(this));
            });
      let m = $(".cmp-container.cmp-container-hero__vip-profile");
      (m.hasClass("circular-black") ||
        m.hasClass("circular-white") ||
        m.hasClass("full-bleed")) &&
        $(
          ".cmp-container.cmp-container-hero__vip-profile .cmp-container-image"
        ).css("min-height", "");
    },
    B = () => {
      let e = $(
          ".cmp-container.cmp-container__bg-image.cmp-container--bg--content-width, .cmp-container.cmp-container-hero__vip-profile, .cmp-container.cmp-container-hero__premium-initiatives"
        ),
        o = $(
          ".cmp-container.cmp-container__bg-image.cmp-container--bg--content-width .cmp-container-image, .cmp-container.cmp-container-hero__vip-profile .cmp-container-image, .cmp-container.cmp-container-hero__premium-initiatives .cmp-container-image"
        ),
        a;
      if (
        (e.hasClass("circular-black") || e.hasClass("circular-white")
          ? (a = o.attr("data-desktop-img-path"))
          : window.matchMedia("(max-width: 767px)").matches
          ? (a = o.attr("data-mobile-img-path"))
          : window.matchMedia("(min-width: 768px) and (max-width: 1023px)")
              .matches
          ? (a = o.attr("data-tablet-img-path"))
          : (a = o.attr("data-desktop-img-path")),
        e.hasClass("circular-black") || e.hasClass("circular-white"))
      ) {
        a = a.replace(/1920-(x-624|x-880)/g, "660-x-660");
        let m;
        e.hasClass("small")
          ? (m = a + "&wid=300&hei=300")
          : e.hasClass("medium")
          ? (m = a + "&wid=475&hei=475")
          : e.hasClass("large")
          ? (m = a + "&wid=660&hei=660")
          : (m = a),
          (o[0].style.backgroundImage = `url('${m}')`),
          window.innerWidth >= 1024 && window.innerWidth <= 1200
            ? (e
                .find(
                  ".cmp-content-width .cmp-container__row > div, .cmp-container__content .cmp-container__row > div"
                )
                .addClass("aem-GridColumn--tablet--6"),
              e
                .find(
                  ".cmp-content-width .cmp-container__row > div, .cmp-container__content .cmp-container__row > div"
                )
                .removeClass("aem-GridColumn--tablet--10"))
            : (e
                .find(
                  ".cmp-content-width .cmp-container__row > div, .cmp-container__content .cmp-container__row > div"
                )
                .addClass("aem-GridColumn--tablet--10"),
              e
                .find(
                  ".cmp-content-width .cmp-container__row > div, .cmp-container__content .cmp-container__row > div"
                )
                .removeClass("aem-GridColumn--tablet--6"));
      } else
        e.hasClass("full-bleed") &&
          o[0] &&
          (o[0].style.backgroundImage = `url('${a}')`);
      if (
        e.hasClass("circular-black") ||
        e.hasClass("circular-white") ||
        e.hasClass("full-bleed")
      )
        if (
          (o.removeClass("no-padding"),
          window.matchMedia("(max-width: 1023px)").matches)
        ) {
          var l = o.attr("data-mobile-min-height");
          l && (o[0].style.minHeight = l + "px");
        } else
          window.matchMedia("(min-width: 1024px)").matches &&
            o.css("min-height", "");
    },
    A = () => {
      let e = new CustomEvent(O);
      window.addEventListener("resize", () => {
        setTimeout(() => {
          L(), B(), F();
        }, 100);
      }),
        setTimeout(() => {
          L(), B(), F(), document.dispatchEvent(e);
        }, 100);
    },
    F = () => {
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent) &&
        document
          .querySelectorAll(
            ".cmp-container__bg-image.cmp-container__parallax:not(.cmp-container__parallax-image)"
          )
          .forEach((a) => {
            if (!a.querySelector(".bg-sticky-image")) {
              let h = a.querySelector("[data-desktop-img-path]"),
                l = document.createElement("div");
              (l.style.backgroundImage = h.style.backgroundImage),
                l.classList.add("bg-sticky-image"),
                a.insertBefore(l, h),
                h.removeAttribute("style");
            }
          });
    };
  document.addEventListener("DOMContentLoaded", q);
  document.addEventListener("DOMContentLoaded", T);
  document.addEventListener("DOMContentLoaded", A);
  q();
  A();
})();
