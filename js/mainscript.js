const Ce = (() => {
  const e = () => {
    const a = document.querySelector("#header-hamburger"), n = document.querySelector(".header nav");
    a == null || a.addEventListener("click", () => {
      a == null || a.classList.toggle("active"), n == null || n.classList.toggle("active");
    });
  }, t = () => {
    const a = document.querySelectorAll(".header nav a"), n = document.querySelector("#header-hamburger"), l = document.querySelector(".header nav");
    a.forEach((r) => {
      r.addEventListener("click", () => {
        l == null || l.classList.remove("active"), n == null || n.classList.remove("active"), a.forEach((o) => {
          o.classList.remove("active");
        }), r.classList.add("active");
      });
    });
  }, s = () => {
    const a = document.querySelector(".header .header__logo img");
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? a == null || a.classList.add("active") : a == null || a.classList.remove("active");
    });
  }, i = () => {
    const a = document.querySelector(".loader");
    setTimeout(() => {
      a == null || a.classList.remove("active");
    }, 1e3);
  };
  return {
    setHandleEvent: function() {
      try {
        e();
      } catch {
      }
      try {
        s();
      } catch {
      }
      try {
        t();
      } catch {
      }
      try {
        i();
      } catch {
      }
    }
  };
})(), we = () => {
  Ce.setHandleEvent();
};
function le(e) {
  return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object;
}
function ae(e = {}, t = {}) {
  Object.keys(t).forEach((s) => {
    typeof e[s] > "u" ? e[s] = t[s] : le(t[s]) && le(e[s]) && Object.keys(t[s]).length > 0 && ae(e[s], t[s]);
  });
}
const pe = {
  body: {},
  addEventListener() {
  },
  removeEventListener() {
  },
  activeElement: {
    blur() {
    },
    nodeName: ""
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {
      }
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {
      },
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};
function V() {
  const e = typeof document < "u" ? document : {};
  return ae(e, pe), e;
}
const Me = {
  document: pe,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState() {
    },
    pushState() {
    },
    go() {
    },
    back() {
    }
  },
  CustomEvent: function() {
    return this;
  },
  addEventListener() {
  },
  removeEventListener() {
  },
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      }
    };
  },
  Image() {
  },
  Date() {
  },
  screen: {},
  setTimeout() {
  },
  clearTimeout() {
  },
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  }
};
function G() {
  const e = typeof window < "u" ? window : {};
  return ae(e, Me), e;
}
function Le(e) {
  const t = e;
  Object.keys(t).forEach((s) => {
    try {
      t[s] = null;
    } catch {
    }
    try {
      delete t[s];
    } catch {
    }
  });
}
function se(e, t = 0) {
  return setTimeout(e, t);
}
function Y() {
  return Date.now();
}
function Pe(e) {
  const t = G();
  let s;
  return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s;
}
function Ie(e, t = "x") {
  const s = G();
  let i, a, n;
  const l = Pe(e);
  return s.WebKitCSSMatrix ? (a = l.transform || l.webkitTransform, a.split(",").length > 6 && (a = a.split(", ").map((r) => r.replace(",", ".")).join(", ")), n = new s.WebKitCSSMatrix(a === "none" ? "" : a)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = n.toString().split(",")), t === "x" && (s.WebKitCSSMatrix ? a = n.m41 : i.length === 16 ? a = parseFloat(i[12]) : a = parseFloat(i[4])), t === "y" && (s.WebKitCSSMatrix ? a = n.m42 : i.length === 16 ? a = parseFloat(i[13]) : a = parseFloat(i[5])), a || 0;
}
function j(e) {
  return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object";
}
function Oe(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u" ? e instanceof HTMLElement : e && (e.nodeType === 1 || e.nodeType === 11);
}
function D(...e) {
  const t = Object(e[0]), s = ["__proto__", "constructor", "prototype"];
  for (let i = 1; i < e.length; i += 1) {
    const a = e[i];
    if (a != null && !Oe(a)) {
      const n = Object.keys(Object(a)).filter((l) => s.indexOf(l) < 0);
      for (let l = 0, r = n.length; l < r; l += 1) {
        const o = n[l], c = Object.getOwnPropertyDescriptor(a, o);
        c !== void 0 && c.enumerable && (j(t[o]) && j(a[o]) ? a[o].__swiper__ ? t[o] = a[o] : D(t[o], a[o]) : !j(t[o]) && j(a[o]) ? (t[o] = {}, a[o].__swiper__ ? t[o] = a[o] : D(t[o], a[o])) : t[o] = a[o]);
      }
    }
  }
  return t;
}
function R(e, t, s) {
  e.style.setProperty(t, s);
}
function me({
  swiper: e,
  targetPosition: t,
  side: s
}) {
  const i = G(), a = -e.translate;
  let n = null, l;
  const r = e.params.speed;
  e.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(e.cssModeFrameID);
  const o = t > a ? "next" : "prev", c = (u, g) => o === "next" && u >= g || o === "prev" && u <= g, h = () => {
    l = (/* @__PURE__ */ new Date()).getTime(), n === null && (n = l);
    const u = Math.max(Math.min((l - n) / r, 1), 0), g = 0.5 - Math.cos(u * Math.PI) / 2;
    let p = a + g * (t - a);
    if (c(p, t) && (p = t), e.wrapperEl.scrollTo({
      [s]: p
    }), c(p, t)) {
      e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
        e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
          [s]: p
        });
      }), i.cancelAnimationFrame(e.cssModeFrameID);
      return;
    }
    e.cssModeFrameID = i.requestAnimationFrame(h);
  };
  h();
}
function he(e) {
  return e.querySelector(".swiper-slide-transform") || e.shadowEl && e.shadowEl.querySelector(".swiper-slide-transform") || e;
}
function _(e, t = "") {
  return [...e.children].filter((s) => s.matches(t));
}
function ge(e, t = []) {
  const s = document.createElement(e);
  return s.classList.add(...Array.isArray(t) ? t : [t]), s;
}
function ke(e, t) {
  const s = [];
  for (; e.previousElementSibling; ) {
    const i = e.previousElementSibling;
    t ? i.matches(t) && s.push(i) : s.push(i), e = i;
  }
  return s;
}
function Ae(e, t) {
  const s = [];
  for (; e.nextElementSibling; ) {
    const i = e.nextElementSibling;
    t ? i.matches(t) && s.push(i) : s.push(i), e = i;
  }
  return s;
}
function H(e, t) {
  return G().getComputedStyle(e, null).getPropertyValue(t);
}
function X(e) {
  let t = e, s;
  if (t) {
    for (s = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (s += 1);
    return s;
  }
}
function ve(e, t) {
  const s = [];
  let i = e.parentElement;
  for (; i; )
    t ? i.matches(t) && s.push(i) : s.push(i), i = i.parentElement;
  return s;
}
function ze(e, t) {
  function s(i) {
    i.target === e && (t.call(e, i), e.removeEventListener("transitionend", s));
  }
  t && e.addEventListener("transitionend", s);
}
function ie(e, t, s) {
  const i = G();
  return s ? e[t === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")) : e.offsetWidth;
}
let U;
function De() {
  const e = G(), t = V();
  return {
    smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
    touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
  };
}
function ye() {
  return U || (U = De()), U;
}
let K;
function Ge({
  userAgent: e
} = {}) {
  const t = ye(), s = G(), i = s.navigator.platform, a = e || s.navigator.userAgent, n = {
    ios: !1,
    android: !1
  }, l = s.screen.width, r = s.screen.height, o = a.match(/(Android);?[\s\/]+([\d.]+)?/);
  let c = a.match(/(iPad).*OS\s([\d_]+)/);
  const h = a.match(/(iPod)(.*OS\s([\d_]+))?/), u = !c && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/), g = i === "Win32";
  let p = i === "MacIntel";
  const m = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  return !c && p && t.touch && m.indexOf(`${l}x${r}`) >= 0 && (c = a.match(/(Version)\/([\d.]+)/), c || (c = [0, 1, "13_0_0"]), p = !1), o && !g && (n.os = "android", n.android = !0), (c || u || h) && (n.os = "ios", n.ios = !0), n;
}
function $e(e = {}) {
  return K || (K = Ge(e)), K;
}
let J;
function Be() {
  const e = G();
  let t = !1;
  function s() {
    const i = e.navigator.userAgent.toLowerCase();
    return i.indexOf("safari") >= 0 && i.indexOf("chrome") < 0 && i.indexOf("android") < 0;
  }
  if (s()) {
    const i = String(e.navigator.userAgent);
    if (i.includes("Version/")) {
      const [a, n] = i.split("Version/")[1].split(" ")[0].split(".").map((l) => Number(l));
      t = a < 16 || a === 16 && n < 2;
    }
  }
  return {
    isSafari: t || s(),
    needPerspectiveFix: t,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
  };
}
function _e() {
  return J || (J = Be()), J;
}
function Ve({
  swiper: e,
  on: t,
  emit: s
}) {
  const i = G();
  let a = null, n = null;
  const l = () => {
    !e || e.destroyed || !e.initialized || (s("beforeResize"), s("resize"));
  }, r = () => {
    !e || e.destroyed || !e.initialized || (a = new ResizeObserver((h) => {
      n = i.requestAnimationFrame(() => {
        const {
          width: u,
          height: g
        } = e;
        let p = u, m = g;
        h.forEach(({
          contentBoxSize: y,
          contentRect: b,
          target: d
        }) => {
          d && d !== e.el || (p = b ? b.width : (y[0] || y).inlineSize, m = b ? b.height : (y[0] || y).blockSize);
        }), (p !== u || m !== g) && l();
      });
    }), a.observe(e.el));
  }, o = () => {
    n && i.cancelAnimationFrame(n), a && a.unobserve && e.el && (a.unobserve(e.el), a = null);
  }, c = () => {
    !e || e.destroyed || !e.initialized || s("orientationchange");
  };
  t("init", () => {
    if (e.params.resizeObserver && typeof i.ResizeObserver < "u") {
      r();
      return;
    }
    i.addEventListener("resize", l), i.addEventListener("orientationchange", c);
  }), t("destroy", () => {
    o(), i.removeEventListener("resize", l), i.removeEventListener("orientationchange", c);
  });
}
function Fe({
  swiper: e,
  extendParams: t,
  on: s,
  emit: i
}) {
  const a = [], n = G(), l = (c, h = {}) => {
    const u = n.MutationObserver || n.WebkitMutationObserver, g = new u((p) => {
      if (e.__preventObserver__)
        return;
      if (p.length === 1) {
        i("observerUpdate", p[0]);
        return;
      }
      const m = function() {
        i("observerUpdate", p[0]);
      };
      n.requestAnimationFrame ? n.requestAnimationFrame(m) : n.setTimeout(m, 0);
    });
    g.observe(c, {
      attributes: typeof h.attributes > "u" ? !0 : h.attributes,
      childList: typeof h.childList > "u" ? !0 : h.childList,
      characterData: typeof h.characterData > "u" ? !0 : h.characterData
    }), a.push(g);
  }, r = () => {
    if (e.params.observer) {
      if (e.params.observeParents) {
        const c = ve(e.el);
        for (let h = 0; h < c.length; h += 1)
          l(c[h]);
      }
      l(e.el, {
        childList: e.params.observeSlideChildren
      }), l(e.wrapperEl, {
        attributes: !1
      });
    }
  }, o = () => {
    a.forEach((c) => {
      c.disconnect();
    }), a.splice(0, a.length);
  };
  t({
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
  }), s("init", r), s("destroy", o);
}
const He = {
  on(e, t, s) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof t != "function")
      return i;
    const a = s ? "unshift" : "push";
    return e.split(" ").forEach((n) => {
      i.eventsListeners[n] || (i.eventsListeners[n] = []), i.eventsListeners[n][a](t);
    }), i;
  },
  once(e, t, s) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof t != "function")
      return i;
    function a(...n) {
      i.off(e, a), a.__emitterProxy && delete a.__emitterProxy, t.apply(i, n);
    }
    return a.__emitterProxy = t, i.on(e, a, s);
  },
  onAny(e, t) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof e != "function")
      return s;
    const i = t ? "unshift" : "push";
    return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners)
      return t;
    const s = t.eventsAnyListeners.indexOf(e);
    return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
  },
  off(e, t) {
    const s = this;
    return !s.eventsListeners || s.destroyed || !s.eventsListeners || e.split(" ").forEach((i) => {
      typeof t > "u" ? s.eventsListeners[i] = [] : s.eventsListeners[i] && s.eventsListeners[i].forEach((a, n) => {
        (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[i].splice(n, 1);
      });
    }), s;
  },
  emit(...e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsListeners)
      return t;
    let s, i, a;
    return typeof e[0] == "string" || Array.isArray(e[0]) ? (s = e[0], i = e.slice(1, e.length), a = t) : (s = e[0].events, i = e[0].data, a = e[0].context || t), i.unshift(a), (Array.isArray(s) ? s : s.split(" ")).forEach((l) => {
      t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((r) => {
        r.apply(a, [l, ...i]);
      }), t.eventsListeners && t.eventsListeners[l] && t.eventsListeners[l].forEach((r) => {
        r.apply(a, i);
      });
    }), t;
  }
};
function Ne() {
  const e = this;
  let t, s;
  const i = e.el;
  typeof e.params.width < "u" && e.params.width !== null ? t = e.params.width : t = i.clientWidth, typeof e.params.height < "u" && e.params.height !== null ? s = e.params.height : s = i.clientHeight, !(t === 0 && e.isHorizontal() || s === 0 && e.isVertical()) && (t = t - parseInt(H(i, "padding-left") || 0, 10) - parseInt(H(i, "padding-right") || 0, 10), s = s - parseInt(H(i, "padding-top") || 0, 10) - parseInt(H(i, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
    width: t,
    height: s,
    size: e.isHorizontal() ? t : s
  }));
}
function qe() {
  const e = this;
  function t(x) {
    return e.isHorizontal() ? x : {
      width: "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      marginRight: "marginBottom"
    }[x];
  }
  function s(x, T) {
    return parseFloat(x.getPropertyValue(t(T)) || 0);
  }
  const i = e.params, {
    wrapperEl: a,
    slidesEl: n,
    size: l,
    rtlTranslate: r,
    wrongRTL: o
  } = e, c = e.virtual && i.virtual.enabled, h = c ? e.virtual.slides.length : e.slides.length, u = _(n, `.${e.params.slideClass}, swiper-slide`), g = c ? e.virtual.slides.length : u.length;
  let p = [];
  const m = [], y = [];
  let b = i.slidesOffsetBefore;
  typeof b == "function" && (b = i.slidesOffsetBefore.call(e));
  let d = i.slidesOffsetAfter;
  typeof d == "function" && (d = i.slidesOffsetAfter.call(e));
  const f = e.snapGrid.length, v = e.slidesGrid.length;
  let S = i.spaceBetween, E = -b, C = 0, O = 0;
  if (typeof l > "u")
    return;
  typeof S == "string" && S.indexOf("%") >= 0 ? S = parseFloat(S.replace("%", "")) / 100 * l : typeof S == "string" && (S = parseFloat(S)), e.virtualSize = -S, u.forEach((x) => {
    r ? x.style.marginLeft = "" : x.style.marginRight = "", x.style.marginBottom = "", x.style.marginTop = "";
  }), i.centeredSlides && i.cssMode && (R(a, "--swiper-centered-offset-before", ""), R(a, "--swiper-centered-offset-after", ""));
  const M = i.grid && i.grid.rows > 1 && e.grid;
  M && e.grid.initSlides(g);
  let L;
  const k = i.slidesPerView === "auto" && i.breakpoints && Object.keys(i.breakpoints).filter((x) => typeof i.breakpoints[x].slidesPerView < "u").length > 0;
  for (let x = 0; x < g; x += 1) {
    L = 0;
    let T;
    if (u[x] && (T = u[x]), M && e.grid.updateSlide(x, T, g, t), !(u[x] && H(T, "display") === "none")) {
      if (i.slidesPerView === "auto") {
        k && (u[x].style[t("width")] = "");
        const w = getComputedStyle(T), I = T.style.transform, $ = T.style.webkitTransform;
        if (I && (T.style.transform = "none"), $ && (T.style.webkitTransform = "none"), i.roundLengths)
          L = e.isHorizontal() ? ie(T, "width", !0) : ie(T, "height", !0);
        else {
          const P = s(w, "width"), B = s(w, "padding-left"), A = s(w, "padding-right"), F = s(w, "margin-left"), N = s(w, "margin-right"), re = w.getPropertyValue("box-sizing");
          if (re && re === "border-box")
            L = P + F + N;
          else {
            const {
              clientWidth: xe,
              offsetWidth: Ee
            } = T;
            L = P + B + A + F + N + (Ee - xe);
          }
        }
        I && (T.style.transform = I), $ && (T.style.webkitTransform = $), i.roundLengths && (L = Math.floor(L));
      } else
        L = (l - (i.slidesPerView - 1) * S) / i.slidesPerView, i.roundLengths && (L = Math.floor(L)), u[x] && (u[x].style[t("width")] = `${L}px`);
      u[x] && (u[x].swiperSlideSize = L), y.push(L), i.centeredSlides ? (E = E + L / 2 + C / 2 + S, C === 0 && x !== 0 && (E = E - l / 2 - S), x === 0 && (E = E - l / 2 - S), Math.abs(E) < 1 / 1e3 && (E = 0), i.roundLengths && (E = Math.floor(E)), O % i.slidesPerGroup === 0 && p.push(E), m.push(E)) : (i.roundLengths && (E = Math.floor(E)), (O - Math.min(e.params.slidesPerGroupSkip, O)) % e.params.slidesPerGroup === 0 && p.push(E), m.push(E), E = E + L + S), e.virtualSize += L + S, C = L, O += 1;
    }
  }
  if (e.virtualSize = Math.max(e.virtualSize, l) + d, r && o && (i.effect === "slide" || i.effect === "coverflow") && (a.style.width = `${e.virtualSize + S}px`), i.setWrapperSize && (a.style[t("width")] = `${e.virtualSize + S}px`), M && e.grid.updateWrapperSize(L, p, t), !i.centeredSlides) {
    const x = [];
    for (let T = 0; T < p.length; T += 1) {
      let w = p[T];
      i.roundLengths && (w = Math.floor(w)), p[T] <= e.virtualSize - l && x.push(w);
    }
    p = x, Math.floor(e.virtualSize - l) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - l);
  }
  if (c && i.loop) {
    const x = y[0] + S;
    if (i.slidesPerGroup > 1) {
      const T = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / i.slidesPerGroup), w = x * i.slidesPerGroup;
      for (let I = 0; I < T; I += 1)
        p.push(p[p.length - 1] + w);
    }
    for (let T = 0; T < e.virtual.slidesBefore + e.virtual.slidesAfter; T += 1)
      i.slidesPerGroup === 1 && p.push(p[p.length - 1] + x), m.push(m[m.length - 1] + x), e.virtualSize += x;
  }
  if (p.length === 0 && (p = [0]), S !== 0) {
    const x = e.isHorizontal() && r ? "marginLeft" : t("marginRight");
    u.filter((T, w) => !i.cssMode || i.loop ? !0 : w !== u.length - 1).forEach((T) => {
      T.style[x] = `${S}px`;
    });
  }
  if (i.centeredSlides && i.centeredSlidesBounds) {
    let x = 0;
    y.forEach((w) => {
      x += w + (S || 0);
    }), x -= S;
    const T = x - l;
    p = p.map((w) => w < 0 ? -b : w > T ? T + d : w);
  }
  if (i.centerInsufficientSlides) {
    let x = 0;
    if (y.forEach((T) => {
      x += T + (S || 0);
    }), x -= S, x < l) {
      const T = (l - x) / 2;
      p.forEach((w, I) => {
        p[I] = w - T;
      }), m.forEach((w, I) => {
        m[I] = w + T;
      });
    }
  }
  if (Object.assign(e, {
    slides: u,
    snapGrid: p,
    slidesGrid: m,
    slidesSizesGrid: y
  }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
    R(a, "--swiper-centered-offset-before", `${-p[0]}px`), R(a, "--swiper-centered-offset-after", `${e.size / 2 - y[y.length - 1] / 2}px`);
    const x = -e.snapGrid[0], T = -e.slidesGrid[0];
    e.snapGrid = e.snapGrid.map((w) => w + x), e.slidesGrid = e.slidesGrid.map((w) => w + T);
  }
  if (g !== h && e.emit("slidesLengthChange"), p.length !== f && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), m.length !== v && e.emit("slidesGridLengthChange"), i.watchSlidesProgress && e.updateSlidesOffset(), !c && !i.cssMode && (i.effect === "slide" || i.effect === "fade")) {
    const x = `${i.containerModifierClass}backface-hidden`, T = e.el.classList.contains(x);
    g <= i.maxBackfaceHiddenSlides ? T || e.el.classList.add(x) : T && e.el.classList.remove(x);
  }
}
function je(e) {
  const t = this, s = [], i = t.virtual && t.params.virtual.enabled;
  let a = 0, n;
  typeof e == "number" ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed);
  const l = (r) => i ? t.slides[t.getSlideIndexByData(r)] : t.slides[r];
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((r) => {
        s.push(r);
      });
    else
      for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
        const r = t.activeIndex + n;
        if (r > t.slides.length && !i)
          break;
        s.push(l(r));
      }
  else
    s.push(l(t.activeIndex));
  for (n = 0; n < s.length; n += 1)
    if (typeof s[n] < "u") {
      const r = s[n].offsetHeight;
      a = r > a ? r : a;
    }
  (a || a === 0) && (t.wrapperEl.style.height = `${a}px`);
}
function Re() {
  const e = this, t = e.slides, s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
  for (let i = 0; i < t.length; i += 1)
    t[i].swiperSlideOffset = (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - s - e.cssOverflowAdjustment();
}
function We(e = this && this.translate || 0) {
  const t = this, s = t.params, {
    slides: i,
    rtlTranslate: a,
    snapGrid: n
  } = t;
  if (i.length === 0)
    return;
  typeof i[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let l = -e;
  a && (l = e), i.forEach((o) => {
    o.classList.remove(s.slideVisibleClass);
  }), t.visibleSlidesIndexes = [], t.visibleSlides = [];
  let r = s.spaceBetween;
  typeof r == "string" && r.indexOf("%") >= 0 ? r = parseFloat(r.replace("%", "")) / 100 * t.size : typeof r == "string" && (r = parseFloat(r));
  for (let o = 0; o < i.length; o += 1) {
    const c = i[o];
    let h = c.swiperSlideOffset;
    s.cssMode && s.centeredSlides && (h -= i[0].swiperSlideOffset);
    const u = (l + (s.centeredSlides ? t.minTranslate() : 0) - h) / (c.swiperSlideSize + r), g = (l - n[0] + (s.centeredSlides ? t.minTranslate() : 0) - h) / (c.swiperSlideSize + r), p = -(l - h), m = p + t.slidesSizesGrid[o];
    (p >= 0 && p < t.size - 1 || m > 1 && m <= t.size || p <= 0 && m >= t.size) && (t.visibleSlides.push(c), t.visibleSlidesIndexes.push(o), i[o].classList.add(s.slideVisibleClass)), c.progress = a ? -u : u, c.originalProgress = a ? -g : g;
  }
}
function Ye(e) {
  const t = this;
  if (typeof e > "u") {
    const h = t.rtlTranslate ? -1 : 1;
    e = t && t.translate && t.translate * h || 0;
  }
  const s = t.params, i = t.maxTranslate() - t.minTranslate();
  let {
    progress: a,
    isBeginning: n,
    isEnd: l,
    progressLoop: r
  } = t;
  const o = n, c = l;
  if (i === 0)
    a = 0, n = !0, l = !0;
  else {
    a = (e - t.minTranslate()) / i;
    const h = Math.abs(e - t.minTranslate()) < 1, u = Math.abs(e - t.maxTranslate()) < 1;
    n = h || a <= 0, l = u || a >= 1, h && (a = 0), u && (a = 1);
  }
  if (s.loop) {
    const h = t.getSlideIndexByData(0), u = t.getSlideIndexByData(t.slides.length - 1), g = t.slidesGrid[h], p = t.slidesGrid[u], m = t.slidesGrid[t.slidesGrid.length - 1], y = Math.abs(e);
    y >= g ? r = (y - g) / m : r = (y + m - p) / m, r > 1 && (r -= 1);
  }
  Object.assign(t, {
    progress: a,
    progressLoop: r,
    isBeginning: n,
    isEnd: l
  }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), n && !o && t.emit("reachBeginning toEdge"), l && !c && t.emit("reachEnd toEdge"), (o && !n || c && !l) && t.emit("fromEdge"), t.emit("progress", a);
}
function Xe() {
  const e = this, {
    slides: t,
    params: s,
    slidesEl: i,
    activeIndex: a
  } = e, n = e.virtual && s.virtual.enabled, l = (o) => _(i, `.${s.slideClass}${o}, swiper-slide${o}`)[0];
  t.forEach((o) => {
    o.classList.remove(s.slideActiveClass, s.slideNextClass, s.slidePrevClass);
  });
  let r;
  if (n)
    if (s.loop) {
      let o = a - e.virtual.slidesBefore;
      o < 0 && (o = e.virtual.slides.length + o), o >= e.virtual.slides.length && (o -= e.virtual.slides.length), r = l(`[data-swiper-slide-index="${o}"]`);
    } else
      r = l(`[data-swiper-slide-index="${a}"]`);
  else
    r = t[a];
  if (r) {
    r.classList.add(s.slideActiveClass);
    let o = Ae(r, `.${s.slideClass}, swiper-slide`)[0];
    s.loop && !o && (o = t[0]), o && o.classList.add(s.slideNextClass);
    let c = ke(r, `.${s.slideClass}, swiper-slide`)[0];
    s.loop && !c === 0 && (c = t[t.length - 1]), c && c.classList.add(s.slidePrevClass);
  }
  e.emitSlidesClasses();
}
const W = (e, t) => {
  if (!e || e.destroyed || !e.params)
    return;
  const s = () => e.isElement ? "swiper-slide" : `.${e.params.slideClass}`, i = t.closest(s());
  if (i) {
    const a = i.querySelector(`.${e.params.lazyPreloaderClass}`);
    a && a.remove();
  }
}, oe = (e, t) => {
  if (!e.slides[t])
    return;
  const s = e.slides[t].querySelector('[loading="lazy"]');
  s && s.removeAttribute("loading");
}, ne = (e) => {
  if (!e || e.destroyed || !e.params)
    return;
  let t = e.params.lazyPreloadPrevNext;
  const s = e.slides.length;
  if (!s || !t || t < 0)
    return;
  t = Math.min(t, s);
  const i = e.params.slidesPerView === "auto" ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView), a = e.activeIndex, n = a + i - 1;
  if (e.params.rewind)
    for (let l = a - t; l <= n + t; l += 1) {
      const r = (l % s + s) % s;
      r !== a && r > n && oe(e, r);
    }
  else
    for (let l = Math.max(n - t, 0); l <= Math.min(n + t, s - 1); l += 1)
      l !== a && l > n && oe(e, l);
};
function Ue(e) {
  const {
    slidesGrid: t,
    params: s
  } = e, i = e.rtlTranslate ? e.translate : -e.translate;
  let a;
  for (let n = 0; n < t.length; n += 1)
    typeof t[n + 1] < "u" ? i >= t[n] && i < t[n + 1] - (t[n + 1] - t[n]) / 2 ? a = n : i >= t[n] && i < t[n + 1] && (a = n + 1) : i >= t[n] && (a = n);
  return s.normalizeSlideIndex && (a < 0 || typeof a > "u") && (a = 0), a;
}
function Ke(e) {
  const t = this, s = t.rtlTranslate ? t.translate : -t.translate, {
    snapGrid: i,
    params: a,
    activeIndex: n,
    realIndex: l,
    snapIndex: r
  } = t;
  let o = e, c;
  const h = (g) => {
    let p = g - t.virtual.slidesBefore;
    return p < 0 && (p = t.virtual.slides.length + p), p >= t.virtual.slides.length && (p -= t.virtual.slides.length), p;
  };
  if (typeof o > "u" && (o = Ue(t)), i.indexOf(s) >= 0)
    c = i.indexOf(s);
  else {
    const g = Math.min(a.slidesPerGroupSkip, o);
    c = g + Math.floor((o - g) / a.slidesPerGroup);
  }
  if (c >= i.length && (c = i.length - 1), o === n) {
    c !== r && (t.snapIndex = c, t.emit("snapIndexChange")), t.params.loop && t.virtual && t.params.virtual.enabled && (t.realIndex = h(o));
    return;
  }
  let u;
  t.virtual && a.virtual.enabled && a.loop ? u = h(o) : t.slides[o] ? u = parseInt(t.slides[o].getAttribute("data-swiper-slide-index") || o, 10) : u = o, Object.assign(t, {
    previousSnapIndex: r,
    snapIndex: c,
    previousRealIndex: l,
    realIndex: u,
    previousIndex: n,
    activeIndex: o
  }), t.initialized && ne(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== u && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
}
function Je(e) {
  const t = this, s = t.params, i = e.closest(`.${s.slideClass}, swiper-slide`);
  let a = !1, n;
  if (i) {
    for (let l = 0; l < t.slides.length; l += 1)
      if (t.slides[l] === i) {
        a = !0, n = l;
        break;
      }
  }
  if (i && a)
    t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = n;
  else {
    t.clickedSlide = void 0, t.clickedIndex = void 0;
    return;
  }
  s.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
}
const Qe = {
  updateSize: Ne,
  updateSlides: qe,
  updateAutoHeight: je,
  updateSlidesOffset: Re,
  updateSlidesProgress: We,
  updateProgress: Ye,
  updateSlidesClasses: Xe,
  updateActiveIndex: Ke,
  updateClickedSlide: Je
};
function Ze(e = this.isHorizontal() ? "x" : "y") {
  const t = this, {
    params: s,
    rtlTranslate: i,
    translate: a,
    wrapperEl: n
  } = t;
  if (s.virtualTranslate)
    return i ? -a : a;
  if (s.cssMode)
    return a;
  let l = Ie(n, e);
  return l += t.cssOverflowAdjustment(), i && (l = -l), l || 0;
}
function et(e, t) {
  const s = this, {
    rtlTranslate: i,
    params: a,
    wrapperEl: n,
    progress: l
  } = s;
  let r = 0, o = 0;
  const c = 0;
  s.isHorizontal() ? r = i ? -e : e : o = e, a.roundLengths && (r = Math.floor(r), o = Math.floor(o)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? r : o, a.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -r : -o : a.virtualTranslate || (s.isHorizontal() ? r -= s.cssOverflowAdjustment() : o -= s.cssOverflowAdjustment(), n.style.transform = `translate3d(${r}px, ${o}px, ${c}px)`);
  let h;
  const u = s.maxTranslate() - s.minTranslate();
  u === 0 ? h = 0 : h = (e - s.minTranslate()) / u, h !== l && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
}
function tt() {
  return -this.snapGrid[0];
}
function st() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function it(e = 0, t = this.params.speed, s = !0, i = !0, a) {
  const n = this, {
    params: l,
    wrapperEl: r
  } = n;
  if (n.animating && l.preventInteractionOnTransition)
    return !1;
  const o = n.minTranslate(), c = n.maxTranslate();
  let h;
  if (i && e > o ? h = o : i && e < c ? h = c : h = e, n.updateProgress(h), l.cssMode) {
    const u = n.isHorizontal();
    if (t === 0)
      r[u ? "scrollLeft" : "scrollTop"] = -h;
    else {
      if (!n.support.smoothScroll)
        return me({
          swiper: n,
          targetPosition: -h,
          side: u ? "left" : "top"
        }), !0;
      r.scrollTo({
        [u ? "left" : "top"]: -h,
        behavior: "smooth"
      });
    }
    return !0;
  }
  return t === 0 ? (n.setTransition(0), n.setTranslate(h), s && (n.emit("beforeTransitionStart", t, a), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(h), s && (n.emit("beforeTransitionStart", t, a), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(g) {
    !n || n.destroyed || g.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, s && n.emit("transitionEnd"));
  }), n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))), !0;
}
const nt = {
  getTranslate: Ze,
  setTranslate: et,
  minTranslate: tt,
  maxTranslate: st,
  translateTo: it
};
function at(e, t) {
  const s = this;
  s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`), s.emit("setTransition", e, t);
}
function Se({
  swiper: e,
  runCallbacks: t,
  direction: s,
  step: i
}) {
  const {
    activeIndex: a,
    previousIndex: n
  } = e;
  let l = s;
  if (l || (a > n ? l = "next" : a < n ? l = "prev" : l = "reset"), e.emit(`transition${i}`), t && a !== n) {
    if (l === "reset") {
      e.emit(`slideResetTransition${i}`);
      return;
    }
    e.emit(`slideChangeTransition${i}`), l === "next" ? e.emit(`slideNextTransition${i}`) : e.emit(`slidePrevTransition${i}`);
  }
}
function rt(e = !0, t) {
  const s = this, {
    params: i
  } = s;
  i.cssMode || (i.autoHeight && s.updateAutoHeight(), Se({
    swiper: s,
    runCallbacks: e,
    direction: t,
    step: "Start"
  }));
}
function lt(e = !0, t) {
  const s = this, {
    params: i
  } = s;
  s.animating = !1, !i.cssMode && (s.setTransition(0), Se({
    swiper: s,
    runCallbacks: e,
    direction: t,
    step: "End"
  }));
}
const ot = {
  setTransition: at,
  transitionStart: rt,
  transitionEnd: lt
};
function dt(e = 0, t = this.params.speed, s = !0, i, a) {
  typeof e == "string" && (e = parseInt(e, 10));
  const n = this;
  let l = e;
  l < 0 && (l = 0);
  const {
    params: r,
    snapGrid: o,
    slidesGrid: c,
    previousIndex: h,
    activeIndex: u,
    rtlTranslate: g,
    wrapperEl: p,
    enabled: m
  } = n;
  if (n.animating && r.preventInteractionOnTransition || !m && !i && !a)
    return !1;
  const y = Math.min(n.params.slidesPerGroupSkip, l);
  let b = y + Math.floor((l - y) / n.params.slidesPerGroup);
  b >= o.length && (b = o.length - 1);
  const d = -o[b];
  if (r.normalizeSlideIndex)
    for (let v = 0; v < c.length; v += 1) {
      const S = -Math.floor(d * 100), E = Math.floor(c[v] * 100), C = Math.floor(c[v + 1] * 100);
      typeof c[v + 1] < "u" ? S >= E && S < C - (C - E) / 2 ? l = v : S >= E && S < C && (l = v + 1) : S >= E && (l = v);
    }
  if (n.initialized && l !== u && (!n.allowSlideNext && d < n.translate && d < n.minTranslate() || !n.allowSlidePrev && d > n.translate && d > n.maxTranslate() && (u || 0) !== l))
    return !1;
  l !== (h || 0) && s && n.emit("beforeSlideChangeStart"), n.updateProgress(d);
  let f;
  if (l > u ? f = "next" : l < u ? f = "prev" : f = "reset", g && -d === n.translate || !g && d === n.translate)
    return n.updateActiveIndex(l), r.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), r.effect !== "slide" && n.setTranslate(d), f !== "reset" && (n.transitionStart(s, f), n.transitionEnd(s, f)), !1;
  if (r.cssMode) {
    const v = n.isHorizontal(), S = g ? d : -d;
    if (t === 0) {
      const E = n.virtual && n.params.virtual.enabled;
      E && (n.wrapperEl.style.scrollSnapType = "none", n._immediateVirtual = !0), E && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0 ? (n._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
        p[v ? "scrollLeft" : "scrollTop"] = S;
      })) : p[v ? "scrollLeft" : "scrollTop"] = S, E && requestAnimationFrame(() => {
        n.wrapperEl.style.scrollSnapType = "", n._immediateVirtual = !1;
      });
    } else {
      if (!n.support.smoothScroll)
        return me({
          swiper: n,
          targetPosition: S,
          side: v ? "left" : "top"
        }), !0;
      p.scrollTo({
        [v ? "left" : "top"]: S,
        behavior: "smooth"
      });
    }
    return !0;
  }
  return n.setTransition(t), n.setTranslate(d), n.updateActiveIndex(l), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, i), n.transitionStart(s, f), t === 0 ? n.transitionEnd(s, f) : n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(S) {
    !n || n.destroyed || S.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(s, f));
  }), n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)), !0;
}
function ct(e = 0, t = this.params.speed, s = !0, i) {
  typeof e == "string" && (e = parseInt(e, 10));
  const a = this;
  let n = e;
  return a.params.loop && (a.virtual && a.params.virtual.enabled ? n = n + a.virtual.slidesBefore : n = a.getSlideIndexByData(n)), a.slideTo(n, t, s, i);
}
function ft(e = this.params.speed, t = !0, s) {
  const i = this, {
    enabled: a,
    params: n,
    animating: l
  } = i;
  if (!a)
    return i;
  let r = n.slidesPerGroup;
  n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (r = Math.max(i.slidesPerViewDynamic("current", !0), 1));
  const o = i.activeIndex < n.slidesPerGroupSkip ? 1 : r, c = i.virtual && n.virtual.enabled;
  if (n.loop) {
    if (l && !c && n.loopPreventsSliding)
      return !1;
    i.loopFix({
      direction: "next"
    }), i._clientLeft = i.wrapperEl.clientLeft;
  }
  return n.rewind && i.isEnd ? i.slideTo(0, e, t, s) : i.slideTo(i.activeIndex + o, e, t, s);
}
function ut(e = this.params.speed, t = !0, s) {
  const i = this, {
    params: a,
    snapGrid: n,
    slidesGrid: l,
    rtlTranslate: r,
    enabled: o,
    animating: c
  } = i;
  if (!o)
    return i;
  const h = i.virtual && a.virtual.enabled;
  if (a.loop) {
    if (c && !h && a.loopPreventsSliding)
      return !1;
    i.loopFix({
      direction: "prev"
    }), i._clientLeft = i.wrapperEl.clientLeft;
  }
  const u = r ? i.translate : -i.translate;
  function g(d) {
    return d < 0 ? -Math.floor(Math.abs(d)) : Math.floor(d);
  }
  const p = g(u), m = n.map((d) => g(d));
  let y = n[m.indexOf(p) - 1];
  if (typeof y > "u" && a.cssMode) {
    let d;
    n.forEach((f, v) => {
      p >= f && (d = v);
    }), typeof d < "u" && (y = n[d > 0 ? d - 1 : d]);
  }
  let b = 0;
  if (typeof y < "u" && (b = l.indexOf(y), b < 0 && (b = i.activeIndex - 1), a.slidesPerView === "auto" && a.slidesPerGroup === 1 && a.slidesPerGroupAuto && (b = b - i.slidesPerViewDynamic("previous", !0) + 1, b = Math.max(b, 0))), a.rewind && i.isBeginning) {
    const d = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
    return i.slideTo(d, e, t, s);
  }
  return i.slideTo(b, e, t, s);
}
function pt(e = this.params.speed, t = !0, s) {
  const i = this;
  return i.slideTo(i.activeIndex, e, t, s);
}
function mt(e = this.params.speed, t = !0, s, i = 0.5) {
  const a = this;
  let n = a.activeIndex;
  const l = Math.min(a.params.slidesPerGroupSkip, n), r = l + Math.floor((n - l) / a.params.slidesPerGroup), o = a.rtlTranslate ? a.translate : -a.translate;
  if (o >= a.snapGrid[r]) {
    const c = a.snapGrid[r], h = a.snapGrid[r + 1];
    o - c > (h - c) * i && (n += a.params.slidesPerGroup);
  } else {
    const c = a.snapGrid[r - 1], h = a.snapGrid[r];
    o - c <= (h - c) * i && (n -= a.params.slidesPerGroup);
  }
  return n = Math.max(n, 0), n = Math.min(n, a.slidesGrid.length - 1), a.slideTo(n, e, t, s);
}
function ht() {
  const e = this, {
    params: t,
    slidesEl: s
  } = e, i = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let a = e.clickedIndex, n;
  const l = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating)
      return;
    n = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? a < e.loopedSlides - i / 2 || a > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), a = e.getSlideIndex(_(s, `${l}[data-swiper-slide-index="${n}"]`)[0]), se(() => {
      e.slideTo(a);
    })) : e.slideTo(a) : a > e.slides.length - i ? (e.loopFix(), a = e.getSlideIndex(_(s, `${l}[data-swiper-slide-index="${n}"]`)[0]), se(() => {
      e.slideTo(a);
    })) : e.slideTo(a);
  } else
    e.slideTo(a);
}
const gt = {
  slideTo: dt,
  slideToLoop: ct,
  slideNext: ft,
  slidePrev: ut,
  slideReset: pt,
  slideToClosest: mt,
  slideToClickedSlide: ht
};
function vt(e) {
  const t = this, {
    params: s,
    slidesEl: i
  } = t;
  if (!s.loop || t.virtual && t.params.virtual.enabled)
    return;
  _(i, `.${s.slideClass}, swiper-slide`).forEach((n, l) => {
    n.setAttribute("data-swiper-slide-index", l);
  }), t.loopFix({
    slideRealIndex: e,
    direction: s.centeredSlides ? void 0 : "next"
  });
}
function yt({
  slideRealIndex: e,
  slideTo: t = !0,
  direction: s,
  setTranslate: i,
  activeSlideIndex: a,
  byController: n,
  byMousewheel: l
} = {}) {
  const r = this;
  if (!r.params.loop)
    return;
  r.emit("beforeLoopFix");
  const {
    slides: o,
    allowSlidePrev: c,
    allowSlideNext: h,
    slidesEl: u,
    params: g
  } = r;
  if (r.allowSlidePrev = !0, r.allowSlideNext = !0, r.virtual && g.virtual.enabled) {
    t && (!g.centeredSlides && r.snapIndex === 0 ? r.slideTo(r.virtual.slides.length, 0, !1, !0) : g.centeredSlides && r.snapIndex < g.slidesPerView ? r.slideTo(r.virtual.slides.length + r.snapIndex, 0, !1, !0) : r.snapIndex === r.snapGrid.length - 1 && r.slideTo(r.virtual.slidesBefore, 0, !1, !0)), r.allowSlidePrev = c, r.allowSlideNext = h, r.emit("loopFix");
    return;
  }
  const p = g.slidesPerView === "auto" ? r.slidesPerViewDynamic() : Math.ceil(parseFloat(g.slidesPerView, 10));
  let m = g.loopedSlides || p;
  m % g.slidesPerGroup !== 0 && (m += g.slidesPerGroup - m % g.slidesPerGroup), r.loopedSlides = m;
  const y = [], b = [];
  let d = r.activeIndex;
  typeof a > "u" ? a = r.getSlideIndex(r.slides.filter((C) => C.classList.contains(g.slideActiveClass))[0]) : d = a;
  const f = s === "next" || !s, v = s === "prev" || !s;
  let S = 0, E = 0;
  if (a < m) {
    S = Math.max(m - a, g.slidesPerGroup);
    for (let C = 0; C < m - a; C += 1) {
      const O = C - Math.floor(C / o.length) * o.length;
      y.push(o.length - O - 1);
    }
  } else if (a > r.slides.length - m * 2) {
    E = Math.max(a - (r.slides.length - m * 2), g.slidesPerGroup);
    for (let C = 0; C < E; C += 1) {
      const O = C - Math.floor(C / o.length) * o.length;
      b.push(O);
    }
  }
  if (v && y.forEach((C) => {
    r.slides[C].swiperLoopMoveDOM = !0, u.prepend(r.slides[C]), r.slides[C].swiperLoopMoveDOM = !1;
  }), f && b.forEach((C) => {
    r.slides[C].swiperLoopMoveDOM = !0, u.append(r.slides[C]), r.slides[C].swiperLoopMoveDOM = !1;
  }), r.recalcSlides(), g.slidesPerView === "auto" && r.updateSlides(), g.watchSlidesProgress && r.updateSlidesOffset(), t) {
    if (y.length > 0 && v)
      if (typeof e > "u") {
        const C = r.slidesGrid[d], M = r.slidesGrid[d + S] - C;
        l ? r.setTranslate(r.translate - M) : (r.slideTo(d + S, 0, !1, !0), i && (r.touches[r.isHorizontal() ? "startX" : "startY"] += M));
      } else
        i && r.slideToLoop(e, 0, !1, !0);
    else if (b.length > 0 && f)
      if (typeof e > "u") {
        const C = r.slidesGrid[d], M = r.slidesGrid[d - E] - C;
        l ? r.setTranslate(r.translate - M) : (r.slideTo(d - E, 0, !1, !0), i && (r.touches[r.isHorizontal() ? "startX" : "startY"] += M));
      } else
        r.slideToLoop(e, 0, !1, !0);
  }
  if (r.allowSlidePrev = c, r.allowSlideNext = h, r.controller && r.controller.control && !n) {
    const C = {
      slideRealIndex: e,
      slideTo: !1,
      direction: s,
      setTranslate: i,
      activeSlideIndex: a,
      byController: !0
    };
    Array.isArray(r.controller.control) ? r.controller.control.forEach((O) => {
      !O.destroyed && O.params.loop && O.loopFix(C);
    }) : r.controller.control instanceof r.constructor && r.controller.control.params.loop && r.controller.control.loopFix(C);
  }
  r.emit("loopFix");
}
function St() {
  const e = this, {
    params: t,
    slidesEl: s
  } = e;
  if (!t.loop || e.virtual && e.params.virtual.enabled)
    return;
  e.recalcSlides();
  const i = [];
  e.slides.forEach((a) => {
    const n = typeof a.swiperSlideIndex > "u" ? a.getAttribute("data-swiper-slide-index") * 1 : a.swiperSlideIndex;
    i[n] = a;
  }), e.slides.forEach((a) => {
    a.removeAttribute("data-swiper-slide-index");
  }), i.forEach((a) => {
    s.append(a);
  }), e.recalcSlides(), e.slideTo(e.realIndex, 0);
}
const bt = {
  loopCreate: vt,
  loopFix: yt,
  loopDestroy: St
};
function Tt(e) {
  const t = this;
  if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)
    return;
  const s = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
    t.__preventObserver__ = !1;
  });
}
function xt() {
  const e = this;
  e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
    e.__preventObserver__ = !1;
  }));
}
const Et = {
  setGrabCursor: Tt,
  unsetGrabCursor: xt
};
function Ct(e, t = this) {
  function s(i) {
    if (!i || i === V() || i === G())
      return null;
    i.assignedSlot && (i = i.assignedSlot);
    const a = i.closest(e);
    return !a && !i.getRootNode ? null : a || s(i.getRootNode().host);
  }
  return s(t);
}
function wt(e) {
  const t = this, s = V(), i = G(), a = t.touchEventsData;
  a.evCache.push(e);
  const {
    params: n,
    touches: l,
    enabled: r
  } = t;
  if (!r || !n.simulateTouch && e.pointerType === "mouse" || t.animating && n.preventInteractionOnTransition)
    return;
  !t.animating && n.cssMode && n.loop && t.loopFix();
  let o = e;
  o.originalEvent && (o = o.originalEvent);
  let c = o.target;
  if (n.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(c) || "which" in o && o.which === 3 || "button" in o && o.button > 0 || a.isTouched && a.isMoved)
    return;
  const h = !!n.noSwipingClass && n.noSwipingClass !== "", u = e.composedPath ? e.composedPath() : e.path;
  h && o.target && o.target.shadowRoot && u && (c = u[0]);
  const g = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`, p = !!(o.target && o.target.shadowRoot);
  if (n.noSwiping && (p ? Ct(g, c) : c.closest(g))) {
    t.allowClick = !0;
    return;
  }
  if (n.swipeHandler && !c.closest(n.swipeHandler))
    return;
  l.currentX = o.pageX, l.currentY = o.pageY;
  const m = l.currentX, y = l.currentY, b = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection, d = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
  if (b && (m <= d || m >= i.innerWidth - d))
    if (b === "prevent")
      e.preventDefault();
    else
      return;
  Object.assign(a, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }), l.startX = m, l.startY = y, a.touchStartTime = Y(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, n.threshold > 0 && (a.allowThresholdMove = !1);
  let f = !0;
  c.matches(a.focusableElements) && (f = !1, c.nodeName === "SELECT" && (a.isTouched = !1)), s.activeElement && s.activeElement.matches(a.focusableElements) && s.activeElement !== c && s.activeElement.blur();
  const v = f && t.allowTouchMove && n.touchStartPreventDefault;
  (n.touchStartForcePreventDefault || v) && !c.isContentEditable && o.preventDefault(), t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !n.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", o);
}
function Mt(e) {
  const t = V(), s = this, i = s.touchEventsData, {
    params: a,
    touches: n,
    rtlTranslate: l,
    enabled: r
  } = s;
  if (!r || !a.simulateTouch && e.pointerType === "mouse")
    return;
  let o = e;
  if (o.originalEvent && (o = o.originalEvent), !i.isTouched) {
    i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", o);
    return;
  }
  const c = i.evCache.findIndex((C) => C.pointerId === o.pointerId);
  c >= 0 && (i.evCache[c] = o);
  const h = i.evCache.length > 1 ? i.evCache[0] : o, u = h.pageX, g = h.pageY;
  if (o.preventedByNestedSwiper) {
    n.startX = u, n.startY = g;
    return;
  }
  if (!s.allowTouchMove) {
    o.target.matches(i.focusableElements) || (s.allowClick = !1), i.isTouched && (Object.assign(n, {
      startX: u,
      startY: g,
      prevX: s.touches.currentX,
      prevY: s.touches.currentY,
      currentX: u,
      currentY: g
    }), i.touchStartTime = Y());
    return;
  }
  if (a.touchReleaseOnEdges && !a.loop) {
    if (s.isVertical()) {
      if (g < n.startY && s.translate <= s.maxTranslate() || g > n.startY && s.translate >= s.minTranslate()) {
        i.isTouched = !1, i.isMoved = !1;
        return;
      }
    } else if (u < n.startX && s.translate <= s.maxTranslate() || u > n.startX && s.translate >= s.minTranslate())
      return;
  }
  if (t.activeElement && o.target === t.activeElement && o.target.matches(i.focusableElements)) {
    i.isMoved = !0, s.allowClick = !1;
    return;
  }
  if (i.allowTouchCallbacks && s.emit("touchMove", o), o.targetTouches && o.targetTouches.length > 1)
    return;
  n.currentX = u, n.currentY = g;
  const p = n.currentX - n.startX, m = n.currentY - n.startY;
  if (s.params.threshold && Math.sqrt(p ** 2 + m ** 2) < s.params.threshold)
    return;
  if (typeof i.isScrolling > "u") {
    let C;
    s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : p * p + m * m >= 25 && (C = Math.atan2(Math.abs(m), Math.abs(p)) * 180 / Math.PI, i.isScrolling = s.isHorizontal() ? C > a.touchAngle : 90 - C > a.touchAngle);
  }
  if (i.isScrolling && s.emit("touchMoveOpposite", o), typeof i.startMoving > "u" && (n.currentX !== n.startX || n.currentY !== n.startY) && (i.startMoving = !0), i.isScrolling || s.zoom && s.params.zoom && s.params.zoom.enabled && i.evCache.length > 1) {
    i.isTouched = !1;
    return;
  }
  if (!i.startMoving)
    return;
  s.allowClick = !1, !a.cssMode && o.cancelable && o.preventDefault(), a.touchMoveStopPropagation && !a.nested && o.stopPropagation();
  let y = s.isHorizontal() ? p : m, b = s.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
  a.oneWayMovement && (y = Math.abs(y) * (l ? 1 : -1), b = Math.abs(b) * (l ? 1 : -1)), n.diff = y, y *= a.touchRatio, l && (y = -y, b = -b);
  const d = s.touchesDirection;
  s.swipeDirection = y > 0 ? "prev" : "next", s.touchesDirection = b > 0 ? "prev" : "next";
  const f = s.params.loop && !a.cssMode;
  if (!i.isMoved) {
    if (f && s.loopFix({
      direction: s.swipeDirection
    }), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
      const C = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0
      });
      s.wrapperEl.dispatchEvent(C);
    }
    i.allowMomentumBounce = !1, a.grabCursor && (s.allowSlideNext === !0 || s.allowSlidePrev === !0) && s.setGrabCursor(!0), s.emit("sliderFirstMove", o);
  }
  let v;
  i.isMoved && d !== s.touchesDirection && f && Math.abs(y) >= 1 && (s.loopFix({
    direction: s.swipeDirection,
    setTranslate: !0
  }), v = !0), s.emit("sliderMove", o), i.isMoved = !0, i.currentTranslate = y + i.startTranslate;
  let S = !0, E = a.resistanceRatio;
  if (a.touchReleaseOnEdges && (E = 0), y > 0 ? (f && !v && i.currentTranslate > (a.centeredSlides ? s.minTranslate() - s.size / 2 : s.minTranslate()) && s.loopFix({
    direction: "prev",
    setTranslate: !0,
    activeSlideIndex: 0
  }), i.currentTranslate > s.minTranslate() && (S = !1, a.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + y) ** E))) : y < 0 && (f && !v && i.currentTranslate < (a.centeredSlides ? s.maxTranslate() + s.size / 2 : s.maxTranslate()) && s.loopFix({
    direction: "next",
    setTranslate: !0,
    activeSlideIndex: s.slides.length - (a.slidesPerView === "auto" ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(a.slidesPerView, 10)))
  }), i.currentTranslate < s.maxTranslate() && (S = !1, a.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - y) ** E))), S && (o.preventedByNestedSwiper = !0), !s.allowSlideNext && s.swipeDirection === "next" && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && s.swipeDirection === "prev" && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && !s.allowSlideNext && (i.currentTranslate = i.startTranslate), a.threshold > 0)
    if (Math.abs(y) > a.threshold || i.allowThresholdMove) {
      if (!i.allowThresholdMove) {
        i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY;
        return;
      }
    } else {
      i.currentTranslate = i.startTranslate;
      return;
    }
  !a.followFinger || a.cssMode || ((a.freeMode && a.freeMode.enabled && s.freeMode || a.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && a.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate));
}
function Lt(e) {
  const t = this, s = t.touchEventsData, i = s.evCache.findIndex((v) => v.pointerId === e.pointerId);
  if (i >= 0 && s.evCache.splice(i, 1), ["pointercancel", "pointerout", "pointerleave"].includes(e.type) && !(e.type === "pointercancel" && (t.browser.isSafari || t.browser.isWebView)))
    return;
  const {
    params: a,
    touches: n,
    rtlTranslate: l,
    slidesGrid: r,
    enabled: o
  } = t;
  if (!o || !a.simulateTouch && e.pointerType === "mouse")
    return;
  let c = e;
  if (c.originalEvent && (c = c.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", c), s.allowTouchCallbacks = !1, !s.isTouched) {
    s.isMoved && a.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, s.startMoving = !1;
    return;
  }
  a.grabCursor && s.isMoved && s.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
  const h = Y(), u = h - s.touchStartTime;
  if (t.allowClick) {
    const v = c.path || c.composedPath && c.composedPath();
    t.updateClickedSlide(v && v[0] || c.target), t.emit("tap click", c), u < 300 && h - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", c);
  }
  if (s.lastClickTime = Y(), se(() => {
    t.destroyed || (t.allowClick = !0);
  }), !s.isTouched || !s.isMoved || !t.swipeDirection || n.diff === 0 || s.currentTranslate === s.startTranslate) {
    s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
    return;
  }
  s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
  let g;
  if (a.followFinger ? g = l ? t.translate : -t.translate : g = -s.currentTranslate, a.cssMode)
    return;
  if (t.params.freeMode && a.freeMode.enabled) {
    t.freeMode.onTouchEnd({
      currentPos: g
    });
    return;
  }
  let p = 0, m = t.slidesSizesGrid[0];
  for (let v = 0; v < r.length; v += v < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
    const S = v < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    typeof r[v + S] < "u" ? g >= r[v] && g < r[v + S] && (p = v, m = r[v + S] - r[v]) : g >= r[v] && (p = v, m = r[r.length - 1] - r[r.length - 2]);
  }
  let y = null, b = null;
  a.rewind && (t.isBeginning ? b = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (y = 0));
  const d = (g - r[p]) / m, f = p < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
  if (u > a.longSwipesMs) {
    if (!a.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" && (d >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? y : p + f) : t.slideTo(p)), t.swipeDirection === "prev" && (d > 1 - a.longSwipesRatio ? t.slideTo(p + f) : b !== null && d < 0 && Math.abs(d) > a.longSwipesRatio ? t.slideTo(b) : t.slideTo(p));
  } else {
    if (!a.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation && (c.target === t.navigation.nextEl || c.target === t.navigation.prevEl) ? c.target === t.navigation.nextEl ? t.slideTo(p + f) : t.slideTo(p) : (t.swipeDirection === "next" && t.slideTo(y !== null ? y : p + f), t.swipeDirection === "prev" && t.slideTo(b !== null ? b : p));
  }
}
function de() {
  const e = this, {
    params: t,
    el: s
  } = e;
  if (s && s.offsetWidth === 0)
    return;
  t.breakpoints && e.setBreakpoint();
  const {
    allowSlideNext: i,
    allowSlidePrev: a,
    snapGrid: n
  } = e, l = e.virtual && e.params.virtual.enabled;
  e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
  const r = l && t.loop;
  (t.slidesPerView === "auto" || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides && !r ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.params.loop && !l ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(() => {
    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
  }, 500)), e.allowSlidePrev = a, e.allowSlideNext = i, e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
}
function Pt(e) {
  const t = this;
  t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
}
function It() {
  const e = this, {
    wrapperEl: t,
    rtlTranslate: s,
    enabled: i
  } = e;
  if (!i)
    return;
  e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, e.translate === 0 && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
  let a;
  const n = e.maxTranslate() - e.minTranslate();
  n === 0 ? a = 0 : a = (e.translate - e.minTranslate()) / n, a !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
}
function Ot(e) {
  const t = this;
  W(t, e.target), t.update();
}
let ce = !1;
function kt() {
}
const be = (e, t) => {
  const s = V(), {
    params: i,
    el: a,
    wrapperEl: n,
    device: l
  } = e, r = !!i.nested, o = t === "on" ? "addEventListener" : "removeEventListener", c = t;
  a[o]("pointerdown", e.onTouchStart, {
    passive: !1
  }), s[o]("pointermove", e.onTouchMove, {
    passive: !1,
    capture: r
  }), s[o]("pointerup", e.onTouchEnd, {
    passive: !0
  }), s[o]("pointercancel", e.onTouchEnd, {
    passive: !0
  }), s[o]("pointerout", e.onTouchEnd, {
    passive: !0
  }), s[o]("pointerleave", e.onTouchEnd, {
    passive: !0
  }), (i.preventClicks || i.preventClicksPropagation) && a[o]("click", e.onClick, !0), i.cssMode && n[o]("scroll", e.onScroll), i.updateOnWindowResize ? e[c](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", de, !0) : e[c]("observerUpdate", de, !0), a[o]("load", e.onLoad, {
    capture: !0
  });
};
function At() {
  const e = this, t = V(), {
    params: s
  } = e;
  e.onTouchStart = wt.bind(e), e.onTouchMove = Mt.bind(e), e.onTouchEnd = Lt.bind(e), s.cssMode && (e.onScroll = It.bind(e)), e.onClick = Pt.bind(e), e.onLoad = Ot.bind(e), ce || (t.addEventListener("touchstart", kt), ce = !0), be(e, "on");
}
function zt() {
  be(this, "off");
}
const Dt = {
  attachEvents: At,
  detachEvents: zt
}, fe = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function Gt() {
  const e = this, {
    realIndex: t,
    initialized: s,
    params: i,
    el: a
  } = e, n = i.breakpoints;
  if (!n || n && Object.keys(n).length === 0)
    return;
  const l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
  if (!l || e.currentBreakpoint === l)
    return;
  const o = (l in n ? n[l] : void 0) || e.originalParams, c = fe(e, i), h = fe(e, o), u = i.enabled;
  c && !h ? (a.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !c && h && (a.classList.add(`${i.containerModifierClass}grid`), (o.grid.fill && o.grid.fill === "column" || !o.grid.fill && i.grid.fill === "column") && a.classList.add(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((y) => {
    const b = i[y] && i[y].enabled, d = o[y] && o[y].enabled;
    b && !d && e[y].disable(), !b && d && e[y].enable();
  });
  const g = o.direction && o.direction !== i.direction, p = i.loop && (o.slidesPerView !== i.slidesPerView || g);
  g && s && e.changeDirection(), D(e.params, o);
  const m = e.params.enabled;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev
  }), u && !m ? e.disable() : !u && m && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", o), p && s && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()), e.emit("breakpoint", o);
}
function $t(e, t = "window", s) {
  if (!e || t === "container" && !s)
    return;
  let i = !1;
  const a = G(), n = t === "window" ? a.innerHeight : s.clientHeight, l = Object.keys(e).map((r) => {
    if (typeof r == "string" && r.indexOf("@") === 0) {
      const o = parseFloat(r.substr(1));
      return {
        value: n * o,
        point: r
      };
    }
    return {
      value: r,
      point: r
    };
  });
  l.sort((r, o) => parseInt(r.value, 10) - parseInt(o.value, 10));
  for (let r = 0; r < l.length; r += 1) {
    const {
      point: o,
      value: c
    } = l[r];
    t === "window" ? a.matchMedia(`(min-width: ${c}px)`).matches && (i = o) : c <= s.clientWidth && (i = o);
  }
  return i || "max";
}
const Bt = {
  setBreakpoint: Gt,
  getBreakpoint: $t
};
function _t(e, t) {
  const s = [];
  return e.forEach((i) => {
    typeof i == "object" ? Object.keys(i).forEach((a) => {
      i[a] && s.push(t + a);
    }) : typeof i == "string" && s.push(t + i);
  }), s;
}
function Vt() {
  const e = this, {
    classNames: t,
    params: s,
    rtl: i,
    el: a,
    device: n
  } = e, l = _t(["initialized", s.direction, {
    "free-mode": e.params.freeMode && s.freeMode.enabled
  }, {
    autoheight: s.autoHeight
  }, {
    rtl: i
  }, {
    grid: s.grid && s.grid.rows > 1
  }, {
    "grid-column": s.grid && s.grid.rows > 1 && s.grid.fill === "column"
  }, {
    android: n.android
  }, {
    ios: n.ios
  }, {
    "css-mode": s.cssMode
  }, {
    centered: s.cssMode && s.centeredSlides
  }, {
    "watch-progress": s.watchSlidesProgress
  }], s.containerModifierClass);
  t.push(...l), a.classList.add(...t), e.emitContainerClasses();
}
function Ft() {
  const e = this, {
    el: t,
    classNames: s
  } = e;
  t.classList.remove(...s), e.emitContainerClasses();
}
const Ht = {
  addClasses: Vt,
  removeClasses: Ft
};
function Nt() {
  const e = this, {
    isLocked: t,
    params: s
  } = e, {
    slidesOffsetBefore: i
  } = s;
  if (i) {
    const a = e.slides.length - 1, n = e.slidesGrid[a] + e.slidesSizesGrid[a] + i * 2;
    e.isLocked = e.size > n;
  } else
    e.isLocked = e.snapGrid.length === 1;
  s.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked), s.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
const qt = {
  checkOverflow: Nt
}, ue = {
  init: !0,
  direction: "horizontal",
  oneWayMovement: !1,
  touchEventsTarget: "wrapper",
  initialSlide: 0,
  speed: 300,
  cssMode: !1,
  updateOnWindowResize: !0,
  resizeObserver: !0,
  nested: !1,
  createElements: !1,
  enabled: !0,
  focusableElements: "input, select, option, textarea, button, video, label",
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: !1,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: !1,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: !1,
  // Set wrapper width
  setWrapperSize: !1,
  // Virtual Translate
  virtualTranslate: !1,
  // Effects
  effect: "slide",
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: void 0,
  breakpointsBase: "window",
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: !1,
  centeredSlides: !1,
  centeredSlidesBounds: !1,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: !0,
  centerInsufficientSlides: !1,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: !0,
  // Round length
  roundLengths: !1,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: !0,
  shortSwipes: !0,
  longSwipes: !0,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: !0,
  allowTouchMove: !0,
  threshold: 5,
  touchMoveStopPropagation: !1,
  touchStartPreventDefault: !0,
  touchStartForcePreventDefault: !1,
  touchReleaseOnEdges: !1,
  // Unique Navigation Elements
  uniqueNavElements: !0,
  // Resistance
  resistance: !0,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: !1,
  // Cursor
  grabCursor: !1,
  // Clicks
  preventClicks: !0,
  preventClicksPropagation: !0,
  slideToClickedSlide: !1,
  // loop
  loop: !1,
  loopedSlides: null,
  loopPreventsSliding: !0,
  // rewind
  rewind: !1,
  // Swiping/no swiping
  allowSlidePrev: !0,
  allowSlideNext: !0,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: !0,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: !0,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: "swiper-",
  // NEW
  slideClass: "swiper-slide",
  slideActiveClass: "swiper-slide-active",
  slideVisibleClass: "swiper-slide-visible",
  slideNextClass: "swiper-slide-next",
  slidePrevClass: "swiper-slide-prev",
  wrapperClass: "swiper-wrapper",
  lazyPreloaderClass: "swiper-lazy-preloader",
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: !0,
  // Internals
  _emitClasses: !1
};
function jt(e, t) {
  return function(i = {}) {
    const a = Object.keys(i)[0], n = i[a];
    if (typeof n != "object" || n === null) {
      D(t, i);
      return;
    }
    if (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 && e[a] === !0 && (e[a] = {
      auto: !0
    }), !(a in e && "enabled" in n)) {
      D(t, i);
      return;
    }
    e[a] === !0 && (e[a] = {
      enabled: !0
    }), typeof e[a] == "object" && !("enabled" in e[a]) && (e[a].enabled = !0), e[a] || (e[a] = {
      enabled: !1
    }), D(t, i);
  };
}
const Q = {
  eventsEmitter: He,
  update: Qe,
  translate: nt,
  transition: ot,
  slide: gt,
  loop: bt,
  grabCursor: Et,
  events: Dt,
  breakpoints: Bt,
  checkOverflow: qt,
  classes: Ht
}, Z = {};
class z {
  constructor(...t) {
    let s, i;
    t.length === 1 && t[0].constructor && Object.prototype.toString.call(t[0]).slice(8, -1) === "Object" ? i = t[0] : [s, i] = t, i || (i = {}), i = D({}, i), s && !i.el && (i.el = s);
    const a = V();
    if (i.el && typeof i.el == "string" && a.querySelectorAll(i.el).length > 1) {
      const o = [];
      return a.querySelectorAll(i.el).forEach((c) => {
        const h = D({}, i, {
          el: c
        });
        o.push(new z(h));
      }), o;
    }
    const n = this;
    n.__swiper__ = !0, n.support = ye(), n.device = $e({
      userAgent: i.userAgent
    }), n.browser = _e(), n.eventsListeners = {}, n.eventsAnyListeners = [], n.modules = [...n.__modules__], i.modules && Array.isArray(i.modules) && n.modules.push(...i.modules);
    const l = {};
    n.modules.forEach((o) => {
      o({
        params: i,
        swiper: n,
        extendParams: jt(i, l),
        on: n.on.bind(n),
        once: n.once.bind(n),
        off: n.off.bind(n),
        emit: n.emit.bind(n)
      });
    });
    const r = D({}, ue, l);
    return n.params = D({}, r, Z, i), n.originalParams = D({}, n.params), n.passedParams = D({}, i), n.params && n.params.on && Object.keys(n.params.on).forEach((o) => {
      n.on(o, n.params.on[o]);
    }), n.params && n.params.onAny && n.onAny(n.params.onAny), Object.assign(n, {
      enabled: n.params.enabled,
      el: s,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return n.params.direction === "horizontal";
      },
      isVertical() {
        return n.params.direction === "vertical";
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: !0,
      isEnd: !1,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: !1,
      cssOverflowAdjustment() {
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: n.params.allowSlideNext,
      allowSlidePrev: n.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        // Form elements to match
        focusableElements: n.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: void 0,
        // Velocities
        velocities: [],
        allowMomentumBounce: void 0,
        startMoving: void 0,
        evCache: []
      },
      // Clicks
      allowClick: !0,
      // Touches
      allowTouchMove: n.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    }), n.emit("_swiper"), n.params.init && n.init(), n;
  }
  getSlideIndex(t) {
    const {
      slidesEl: s,
      params: i
    } = this, a = _(s, `.${i.slideClass}, swiper-slide`), n = X(a[0]);
    return X(t) - n;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(this.slides.filter((s) => s.getAttribute("data-swiper-slide-index") * 1 === t)[0]);
  }
  recalcSlides() {
    const t = this, {
      slidesEl: s,
      params: i
    } = t;
    t.slides = _(s, `.${i.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled || (t.enabled = !0, t.params.grabCursor && t.setGrabCursor(), t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled && (t.enabled = !1, t.params.grabCursor && t.unsetGrabCursor(), t.emit("disable"));
  }
  setProgress(t, s) {
    const i = this;
    t = Math.min(Math.max(t, 0), 1);
    const a = i.minTranslate(), l = (i.maxTranslate() - a) * t + a;
    i.translateTo(l, typeof s > "u" ? 0 : s), i.updateActiveIndex(), i.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el)
      return;
    const s = t.el.className.split(" ").filter((i) => i.indexOf("swiper") === 0 || i.indexOf(t.params.containerModifierClass) === 0);
    t.emit("_containerClasses", s.join(" "));
  }
  getSlideClasses(t) {
    const s = this;
    return s.destroyed ? "" : t.className.split(" ").filter((i) => i.indexOf("swiper-slide") === 0 || i.indexOf(s.params.slideClass) === 0).join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el)
      return;
    const s = [];
    t.slides.forEach((i) => {
      const a = t.getSlideClasses(i);
      s.push({
        slideEl: i,
        classNames: a
      }), t.emit("_slideClass", i, a);
    }), t.emit("_slideClasses", s);
  }
  slidesPerViewDynamic(t = "current", s = !1) {
    const i = this, {
      params: a,
      slides: n,
      slidesGrid: l,
      slidesSizesGrid: r,
      size: o,
      activeIndex: c
    } = i;
    let h = 1;
    if (a.centeredSlides) {
      let u = n[c].swiperSlideSize, g;
      for (let p = c + 1; p < n.length; p += 1)
        n[p] && !g && (u += n[p].swiperSlideSize, h += 1, u > o && (g = !0));
      for (let p = c - 1; p >= 0; p -= 1)
        n[p] && !g && (u += n[p].swiperSlideSize, h += 1, u > o && (g = !0));
    } else if (t === "current")
      for (let u = c + 1; u < n.length; u += 1)
        (s ? l[u] + r[u] - l[c] < o : l[u] - l[c] < o) && (h += 1);
    else
      for (let u = c - 1; u >= 0; u -= 1)
        l[c] - l[u] < o && (h += 1);
    return h;
  }
  update() {
    const t = this;
    if (!t || t.destroyed)
      return;
    const {
      snapGrid: s,
      params: i
    } = t;
    i.breakpoints && t.setBreakpoint(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach((l) => {
      l.complete && W(t, l);
    }), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses();
    function a() {
      const l = t.rtlTranslate ? t.translate * -1 : t.translate, r = Math.min(Math.max(l, t.maxTranslate()), t.minTranslate());
      t.setTranslate(r), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let n;
    if (t.params.freeMode && t.params.freeMode.enabled)
      a(), t.params.autoHeight && t.updateAutoHeight();
    else {
      if ((t.params.slidesPerView === "auto" || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides) {
        const l = t.virtual && t.params.virtual.enabled ? t.virtual.slides : t.slides;
        n = t.slideTo(l.length - 1, 0, !1, !0);
      } else
        n = t.slideTo(t.activeIndex, 0, !1, !0);
      n || a();
    }
    i.watchOverflow && s !== t.snapGrid && t.checkOverflow(), t.emit("update");
  }
  changeDirection(t, s = !0) {
    const i = this, a = i.params.direction;
    return t || (t = a === "horizontal" ? "vertical" : "horizontal"), t === a || t !== "horizontal" && t !== "vertical" || (i.el.classList.remove(`${i.params.containerModifierClass}${a}`), i.el.classList.add(`${i.params.containerModifierClass}${t}`), i.emitContainerClasses(), i.params.direction = t, i.slides.forEach((n) => {
      t === "vertical" ? n.style.width = "" : n.style.height = "";
    }), i.emit("changeDirection"), s && i.update()), i;
  }
  changeLanguageDirection(t) {
    const s = this;
    s.rtl && t === "rtl" || !s.rtl && t === "ltr" || (s.rtl = t === "rtl", s.rtlTranslate = s.params.direction === "horizontal" && s.rtl, s.rtl ? (s.el.classList.add(`${s.params.containerModifierClass}rtl`), s.el.dir = "rtl") : (s.el.classList.remove(`${s.params.containerModifierClass}rtl`), s.el.dir = "ltr"), s.update());
  }
  mount(t) {
    const s = this;
    if (s.mounted)
      return !0;
    let i = t || s.params.el;
    if (typeof i == "string" && (i = document.querySelector(i)), !i)
      return !1;
    i.swiper = s, i.shadowEl && (s.isElement = !0);
    const a = () => `.${(s.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let l = (() => i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(a()) : _(i, a())[0])();
    return !l && s.params.createElements && (l = ge("div", s.params.wrapperClass), i.append(l), _(i, `.${s.params.slideClass}`).forEach((r) => {
      l.append(r);
    })), Object.assign(s, {
      el: i,
      wrapperEl: l,
      slidesEl: s.isElement ? i : l,
      mounted: !0,
      // RTL
      rtl: i.dir.toLowerCase() === "rtl" || H(i, "direction") === "rtl",
      rtlTranslate: s.params.direction === "horizontal" && (i.dir.toLowerCase() === "rtl" || H(i, "direction") === "rtl"),
      wrongRTL: H(l, "display") === "-webkit-box"
    }), !0;
  }
  init(t) {
    const s = this;
    return s.initialized || s.mount(t) === !1 || (s.emit("beforeInit"), s.params.breakpoints && s.setBreakpoint(), s.addClasses(), s.updateSize(), s.updateSlides(), s.params.watchOverflow && s.checkOverflow(), s.params.grabCursor && s.enabled && s.setGrabCursor(), s.params.loop && s.virtual && s.params.virtual.enabled ? s.slideTo(s.params.initialSlide + s.virtual.slidesBefore, 0, s.params.runCallbacksOnInit, !1, !0) : s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit, !1, !0), s.params.loop && s.loopCreate(), s.attachEvents(), [...s.el.querySelectorAll('[loading="lazy"]')].forEach((a) => {
      a.complete ? W(s, a) : a.addEventListener("load", (n) => {
        W(s, n.target);
      });
    }), ne(s), s.initialized = !0, ne(s), s.emit("init"), s.emit("afterInit")), s;
  }
  destroy(t = !0, s = !0) {
    const i = this, {
      params: a,
      el: n,
      wrapperEl: l,
      slides: r
    } = i;
    return typeof i.params > "u" || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), a.loop && i.loopDestroy(), s && (i.removeClasses(), n.removeAttribute("style"), l.removeAttribute("style"), r && r.length && r.forEach((o) => {
      o.classList.remove(a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass), o.removeAttribute("style"), o.removeAttribute("data-swiper-slide-index");
    })), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((o) => {
      i.off(o);
    }), t !== !1 && (i.el.swiper = null, Le(i)), i.destroyed = !0), null;
  }
  static extendDefaults(t) {
    D(Z, t);
  }
  static get extendedDefaults() {
    return Z;
  }
  static get defaults() {
    return ue;
  }
  static installModule(t) {
    z.prototype.__modules__ || (z.prototype.__modules__ = []);
    const s = z.prototype.__modules__;
    typeof t == "function" && s.indexOf(t) < 0 && s.push(t);
  }
  static use(t) {
    return Array.isArray(t) ? (t.forEach((s) => z.installModule(s)), z) : (z.installModule(t), z);
  }
}
Object.keys(Q).forEach((e) => {
  Object.keys(Q[e]).forEach((t) => {
    z.prototype[t] = Q[e][t];
  });
});
z.use([Ve, Fe]);
function Te(e, t, s, i) {
  return e.params.createElements && Object.keys(i).forEach((a) => {
    if (!s[a] && s.auto === !0) {
      let n = _(e.el, `.${i[a]}`)[0];
      n || (n = ge("div", i[a]), n.className = i[a], e.el.append(n)), s[a] = n, t[a] = n;
    }
  }), s;
}
function ee({
  swiper: e,
  extendParams: t,
  on: s,
  emit: i
}) {
  t({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled"
    }
  }), e.navigation = {
    nextEl: null,
    prevEl: null
  };
  const a = (m) => (Array.isArray(m) || (m = [m].filter((y) => !!y)), m);
  function n(m) {
    let y;
    return m && typeof m == "string" && e.isElement && (y = e.el.shadowRoot.querySelector(m), y) ? y : (m && (typeof m == "string" && (y = [...document.querySelectorAll(m)]), e.params.uniqueNavElements && typeof m == "string" && y.length > 1 && e.el.querySelectorAll(m).length === 1 && (y = e.el.querySelector(m))), m && !y ? m : y);
  }
  function l(m, y) {
    const b = e.params.navigation;
    m = a(m), m.forEach((d) => {
      d && (d.classList[y ? "add" : "remove"](...b.disabledClass.split(" ")), d.tagName === "BUTTON" && (d.disabled = y), e.params.watchOverflow && e.enabled && d.classList[e.isLocked ? "add" : "remove"](b.lockClass));
    });
  }
  function r() {
    const {
      nextEl: m,
      prevEl: y
    } = e.navigation;
    if (e.params.loop) {
      l(y, !1), l(m, !1);
      return;
    }
    l(y, e.isBeginning && !e.params.rewind), l(m, e.isEnd && !e.params.rewind);
  }
  function o(m) {
    m.preventDefault(), !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(), i("navigationPrev"));
  }
  function c(m) {
    m.preventDefault(), !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(), i("navigationNext"));
  }
  function h() {
    const m = e.params.navigation;
    if (e.params.navigation = Te(e, e.originalParams.navigation, e.params.navigation, {
      nextEl: "swiper-button-next",
      prevEl: "swiper-button-prev"
    }), !(m.nextEl || m.prevEl))
      return;
    let y = n(m.nextEl), b = n(m.prevEl);
    Object.assign(e.navigation, {
      nextEl: y,
      prevEl: b
    }), y = a(y), b = a(b);
    const d = (f, v) => {
      f && f.addEventListener("click", v === "next" ? c : o), !e.enabled && f && f.classList.add(...m.lockClass.split(" "));
    };
    y.forEach((f) => d(f, "next")), b.forEach((f) => d(f, "prev"));
  }
  function u() {
    let {
      nextEl: m,
      prevEl: y
    } = e.navigation;
    m = a(m), y = a(y);
    const b = (d, f) => {
      d.removeEventListener("click", f === "next" ? c : o), d.classList.remove(...e.params.navigation.disabledClass.split(" "));
    };
    m.forEach((d) => b(d, "next")), y.forEach((d) => b(d, "prev"));
  }
  s("init", () => {
    e.params.navigation.enabled === !1 ? p() : (h(), r());
  }), s("toEdge fromEdge lock unlock", () => {
    r();
  }), s("destroy", () => {
    u();
  }), s("enable disable", () => {
    let {
      nextEl: m,
      prevEl: y
    } = e.navigation;
    m = a(m), y = a(y), [...m, ...y].filter((b) => !!b).forEach((b) => b.classList[e.enabled ? "remove" : "add"](e.params.navigation.lockClass));
  }), s("click", (m, y) => {
    let {
      nextEl: b,
      prevEl: d
    } = e.navigation;
    b = a(b), d = a(d);
    const f = y.target;
    if (e.params.navigation.hideOnClick && !d.includes(f) && !b.includes(f)) {
      if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === f || e.pagination.el.contains(f)))
        return;
      let v;
      b.length ? v = b[0].classList.contains(e.params.navigation.hiddenClass) : d.length && (v = d[0].classList.contains(e.params.navigation.hiddenClass)), i(v === !0 ? "navigationShow" : "navigationHide"), [...b, ...d].filter((S) => !!S).forEach((S) => S.classList.toggle(e.params.navigation.hiddenClass));
    }
  });
  const g = () => {
    e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")), h(), r();
  }, p = () => {
    e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")), u();
  };
  Object.assign(e.navigation, {
    enable: g,
    disable: p,
    update: r,
    init: h,
    destroy: u
  });
}
function q(e = "") {
  return `.${e.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
}
function te({
  swiper: e,
  extendParams: t,
  on: s,
  emit: i
}) {
  const a = "swiper-pagination";
  t({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (d) => d,
      formatFractionTotal: (d) => d,
      bulletClass: `${a}-bullet`,
      bulletActiveClass: `${a}-bullet-active`,
      modifierClass: `${a}-`,
      currentClass: `${a}-current`,
      totalClass: `${a}-total`,
      hiddenClass: `${a}-hidden`,
      progressbarFillClass: `${a}-progressbar-fill`,
      progressbarOppositeClass: `${a}-progressbar-opposite`,
      clickableClass: `${a}-clickable`,
      lockClass: `${a}-lock`,
      horizontalClass: `${a}-horizontal`,
      verticalClass: `${a}-vertical`,
      paginationDisabledClass: `${a}-disabled`
    }
  }), e.pagination = {
    el: null,
    bullets: []
  };
  let n, l = 0;
  const r = (d) => (Array.isArray(d) || (d = [d].filter((f) => !!f)), d);
  function o() {
    return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && e.pagination.el.length === 0;
  }
  function c(d, f) {
    const {
      bulletActiveClass: v
    } = e.params.pagination;
    d && (d = d[`${f === "prev" ? "previous" : "next"}ElementSibling`], d && (d.classList.add(`${v}-${f}`), d = d[`${f === "prev" ? "previous" : "next"}ElementSibling`], d && d.classList.add(`${v}-${f}-${f}`)));
  }
  function h(d) {
    const f = d.target.closest(q(e.params.pagination.bulletClass));
    if (!f)
      return;
    d.preventDefault();
    const v = X(f) * e.params.slidesPerGroup;
    if (e.params.loop) {
      if (e.realIndex === v)
        return;
      const S = e.getSlideIndexByData(v), E = e.getSlideIndexByData(e.realIndex);
      S > e.slides.length - e.loopedSlides && e.loopFix({
        direction: S > E ? "next" : "prev",
        activeSlideIndex: S,
        slideTo: !1
      }), e.slideToLoop(v);
    } else
      e.slideTo(v);
  }
  function u() {
    const d = e.rtl, f = e.params.pagination;
    if (o())
      return;
    let v = e.pagination.el;
    v = r(v);
    let S, E;
    const C = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length, O = e.params.loop ? Math.ceil(C / e.params.slidesPerGroup) : e.snapGrid.length;
    if (e.params.loop ? (E = e.previousRealIndex || 0, S = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : typeof e.snapIndex < "u" ? (S = e.snapIndex, E = e.previousSnapIndex) : (E = e.previousIndex || 0, S = e.activeIndex || 0), f.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
      const M = e.pagination.bullets;
      let L, k, x;
      if (f.dynamicBullets && (n = ie(M[0], e.isHorizontal() ? "width" : "height", !0), v.forEach((T) => {
        T.style[e.isHorizontal() ? "width" : "height"] = `${n * (f.dynamicMainBullets + 4)}px`;
      }), f.dynamicMainBullets > 1 && E !== void 0 && (l += S - (E || 0), l > f.dynamicMainBullets - 1 ? l = f.dynamicMainBullets - 1 : l < 0 && (l = 0)), L = Math.max(S - l, 0), k = L + (Math.min(M.length, f.dynamicMainBullets) - 1), x = (k + L) / 2), M.forEach((T) => {
        const w = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((I) => `${f.bulletActiveClass}${I}`)].map((I) => typeof I == "string" && I.includes(" ") ? I.split(" ") : I).flat();
        T.classList.remove(...w);
      }), v.length > 1)
        M.forEach((T) => {
          const w = X(T);
          w === S && T.classList.add(...f.bulletActiveClass.split(" ")), f.dynamicBullets && (w >= L && w <= k && T.classList.add(...`${f.bulletActiveClass}-main`.split(" ")), w === L && c(T, "prev"), w === k && c(T, "next"));
        });
      else {
        const T = M[S];
        if (T && T.classList.add(...f.bulletActiveClass.split(" ")), f.dynamicBullets) {
          const w = M[L], I = M[k];
          for (let $ = L; $ <= k; $ += 1)
            M[$] && M[$].classList.add(...`${f.bulletActiveClass}-main`.split(" "));
          c(w, "prev"), c(I, "next");
        }
      }
      if (f.dynamicBullets) {
        const T = Math.min(M.length, f.dynamicMainBullets + 4), w = (n * T - n) / 2 - x * n, I = d ? "right" : "left";
        M.forEach(($) => {
          $.style[e.isHorizontal() ? I : "top"] = `${w}px`;
        });
      }
    }
    v.forEach((M, L) => {
      if (f.type === "fraction" && (M.querySelectorAll(q(f.currentClass)).forEach((k) => {
        k.textContent = f.formatFractionCurrent(S + 1);
      }), M.querySelectorAll(q(f.totalClass)).forEach((k) => {
        k.textContent = f.formatFractionTotal(O);
      })), f.type === "progressbar") {
        let k;
        f.progressbarOpposite ? k = e.isHorizontal() ? "vertical" : "horizontal" : k = e.isHorizontal() ? "horizontal" : "vertical";
        const x = (S + 1) / O;
        let T = 1, w = 1;
        k === "horizontal" ? T = x : w = x, M.querySelectorAll(q(f.progressbarFillClass)).forEach((I) => {
          I.style.transform = `translate3d(0,0,0) scaleX(${T}) scaleY(${w})`, I.style.transitionDuration = `${e.params.speed}ms`;
        });
      }
      f.type === "custom" && f.renderCustom ? (M.innerHTML = f.renderCustom(e, S + 1, O), L === 0 && i("paginationRender", M)) : (L === 0 && i("paginationRender", M), i("paginationUpdate", M)), e.params.watchOverflow && e.enabled && M.classList[e.isLocked ? "add" : "remove"](f.lockClass);
    });
  }
  function g() {
    const d = e.params.pagination;
    if (o())
      return;
    const f = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length;
    let v = e.pagination.el;
    v = r(v);
    let S = "";
    if (d.type === "bullets") {
      let E = e.params.loop ? Math.ceil(f / e.params.slidesPerGroup) : e.snapGrid.length;
      e.params.freeMode && e.params.freeMode.enabled && E > f && (E = f);
      for (let C = 0; C < E; C += 1)
        d.renderBullet ? S += d.renderBullet.call(e, C, d.bulletClass) : S += `<${d.bulletElement} class="${d.bulletClass}"></${d.bulletElement}>`;
    }
    d.type === "fraction" && (d.renderFraction ? S = d.renderFraction.call(e, d.currentClass, d.totalClass) : S = `<span class="${d.currentClass}"></span> / <span class="${d.totalClass}"></span>`), d.type === "progressbar" && (d.renderProgressbar ? S = d.renderProgressbar.call(e, d.progressbarFillClass) : S = `<span class="${d.progressbarFillClass}"></span>`), e.pagination.bullets = [], v.forEach((E) => {
      d.type !== "custom" && (E.innerHTML = S || ""), d.type === "bullets" && e.pagination.bullets.push(...E.querySelectorAll(q(d.bulletClass)));
    }), d.type !== "custom" && i("paginationRender", v[0]);
  }
  function p() {
    e.params.pagination = Te(e, e.originalParams.pagination, e.params.pagination, {
      el: "swiper-pagination"
    });
    const d = e.params.pagination;
    if (!d.el)
      return;
    let f;
    typeof d.el == "string" && e.isElement && (f = e.el.shadowRoot.querySelector(d.el)), !f && typeof d.el == "string" && (f = [...document.querySelectorAll(d.el)]), f || (f = d.el), !(!f || f.length === 0) && (e.params.uniqueNavElements && typeof d.el == "string" && Array.isArray(f) && f.length > 1 && (f = [...e.el.querySelectorAll(d.el)], f.length > 1 && (f = f.filter((v) => ve(v, ".swiper")[0] === e.el)[0])), Array.isArray(f) && f.length === 1 && (f = f[0]), Object.assign(e.pagination, {
      el: f
    }), f = r(f), f.forEach((v) => {
      d.type === "bullets" && d.clickable && v.classList.add(d.clickableClass), v.classList.add(d.modifierClass + d.type), v.classList.add(e.isHorizontal() ? d.horizontalClass : d.verticalClass), d.type === "bullets" && d.dynamicBullets && (v.classList.add(`${d.modifierClass}${d.type}-dynamic`), l = 0, d.dynamicMainBullets < 1 && (d.dynamicMainBullets = 1)), d.type === "progressbar" && d.progressbarOpposite && v.classList.add(d.progressbarOppositeClass), d.clickable && v.addEventListener("click", h), e.enabled || v.classList.add(d.lockClass);
    }));
  }
  function m() {
    const d = e.params.pagination;
    if (o())
      return;
    let f = e.pagination.el;
    f && (f = r(f), f.forEach((v) => {
      v.classList.remove(d.hiddenClass), v.classList.remove(d.modifierClass + d.type), v.classList.remove(e.isHorizontal() ? d.horizontalClass : d.verticalClass), d.clickable && v.removeEventListener("click", h);
    })), e.pagination.bullets && e.pagination.bullets.forEach((v) => v.classList.remove(...d.bulletActiveClass.split(" ")));
  }
  s("changeDirection", () => {
    if (!e.pagination || !e.pagination.el)
      return;
    const d = e.params.pagination;
    let {
      el: f
    } = e.pagination;
    f = r(f), f.forEach((v) => {
      v.classList.remove(d.horizontalClass, d.verticalClass), v.classList.add(e.isHorizontal() ? d.horizontalClass : d.verticalClass);
    });
  }), s("init", () => {
    e.params.pagination.enabled === !1 ? b() : (p(), g(), u());
  }), s("activeIndexChange", () => {
    typeof e.snapIndex > "u" && u();
  }), s("snapIndexChange", () => {
    u();
  }), s("snapGridLengthChange", () => {
    g(), u();
  }), s("destroy", () => {
    m();
  }), s("enable disable", () => {
    let {
      el: d
    } = e.pagination;
    d && (d = r(d), d.forEach((f) => f.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass)));
  }), s("lock unlock", () => {
    u();
  }), s("click", (d, f) => {
    const v = f.target;
    let {
      el: S
    } = e.pagination;
    if (Array.isArray(S) || (S = [S].filter((E) => !!E)), e.params.pagination.el && e.params.pagination.hideOnClick && S && S.length > 0 && !v.classList.contains(e.params.pagination.bulletClass)) {
      if (e.navigation && (e.navigation.nextEl && v === e.navigation.nextEl || e.navigation.prevEl && v === e.navigation.prevEl))
        return;
      const E = S[0].classList.contains(e.params.pagination.hiddenClass);
      i(E === !0 ? "paginationShow" : "paginationHide"), S.forEach((C) => C.classList.toggle(e.params.pagination.hiddenClass));
    }
  });
  const y = () => {
    e.el.classList.remove(e.params.pagination.paginationDisabledClass);
    let {
      el: d
    } = e.pagination;
    d && (d = r(d), d.forEach((f) => f.classList.remove(e.params.pagination.paginationDisabledClass))), p(), g(), u();
  }, b = () => {
    e.el.classList.add(e.params.pagination.paginationDisabledClass);
    let {
      el: d
    } = e.pagination;
    d && (d = r(d), d.forEach((f) => f.classList.add(e.params.pagination.paginationDisabledClass))), m();
  };
  Object.assign(e.pagination, {
    enable: y,
    disable: b,
    render: g,
    update: u,
    init: p,
    destroy: m
  });
}
function Rt({
  swiper: e,
  extendParams: t,
  on: s,
  emit: i,
  params: a
}) {
  e.autoplay = {
    running: !1,
    paused: !1,
    timeLeft: 0
  }, t({
    autoplay: {
      enabled: !1,
      delay: 3e3,
      waitForTransition: !0,
      disableOnInteraction: !0,
      stopOnLastSlide: !1,
      reverseDirection: !1,
      pauseOnMouseEnter: !1
    }
  });
  let n, l, r = a && a.autoplay ? a.autoplay.delay : 3e3, o = a && a.autoplay ? a.autoplay.delay : 3e3, c, h = (/* @__PURE__ */ new Date()).getTime, u, g, p, m, y, b;
  function d(P) {
    !e || e.destroyed || !e.wrapperEl || P.target === e.wrapperEl && (e.wrapperEl.removeEventListener("transitionend", d), M());
  }
  const f = () => {
    if (e.destroyed || !e.autoplay.running)
      return;
    e.autoplay.paused ? u = !0 : u && (o = c, u = !1);
    const P = e.autoplay.paused ? c : h + o - (/* @__PURE__ */ new Date()).getTime();
    e.autoplay.timeLeft = P, i("autoplayTimeLeft", P, P / r), l = requestAnimationFrame(() => {
      f();
    });
  }, v = () => {
    let P;
    return e.virtual && e.params.virtual.enabled ? P = e.slides.filter((A) => A.classList.contains("swiper-slide-active"))[0] : P = e.slides[e.activeIndex], P ? parseInt(P.getAttribute("data-swiper-autoplay"), 10) : void 0;
  }, S = (P) => {
    if (e.destroyed || !e.autoplay.running)
      return;
    cancelAnimationFrame(l), f();
    let B = typeof P > "u" ? e.params.autoplay.delay : P;
    r = e.params.autoplay.delay, o = e.params.autoplay.delay;
    const A = v();
    !Number.isNaN(A) && A > 0 && typeof P > "u" && (B = A, r = A, o = A), c = B;
    const F = e.params.speed, N = () => {
      !e || e.destroyed || (e.params.autoplay.reverseDirection ? !e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev(F, !0, !0), i("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(e.slides.length - 1, F, !0, !0), i("autoplay")) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext(F, !0, !0), i("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(0, F, !0, !0), i("autoplay")), e.params.cssMode && (h = (/* @__PURE__ */ new Date()).getTime(), requestAnimationFrame(() => {
        S();
      })));
    };
    return B > 0 ? (clearTimeout(n), n = setTimeout(() => {
      N();
    }, B)) : requestAnimationFrame(() => {
      N();
    }), B;
  }, E = () => {
    e.autoplay.running = !0, S(), i("autoplayStart");
  }, C = () => {
    e.autoplay.running = !1, clearTimeout(n), cancelAnimationFrame(l), i("autoplayStop");
  }, O = (P, B) => {
    if (e.destroyed || !e.autoplay.running)
      return;
    clearTimeout(n), P || (b = !0);
    const A = () => {
      i("autoplayPause"), e.params.autoplay.waitForTransition ? e.wrapperEl.addEventListener("transitionend", d) : M();
    };
    if (e.autoplay.paused = !0, B) {
      y && (c = e.params.autoplay.delay), y = !1, A();
      return;
    }
    c = (c || e.params.autoplay.delay) - ((/* @__PURE__ */ new Date()).getTime() - h), !(e.isEnd && c < 0 && !e.params.loop) && (c < 0 && (c = 0), A());
  }, M = () => {
    e.isEnd && c < 0 && !e.params.loop || e.destroyed || !e.autoplay.running || (h = (/* @__PURE__ */ new Date()).getTime(), b ? (b = !1, S(c)) : S(), e.autoplay.paused = !1, i("autoplayResume"));
  }, L = () => {
    if (e.destroyed || !e.autoplay.running)
      return;
    const P = V();
    P.visibilityState === "hidden" && (b = !0, O(!0)), P.visibilityState === "visible" && M();
  }, k = (P) => {
    P.pointerType === "mouse" && (b = !0, O(!0));
  }, x = (P) => {
    P.pointerType === "mouse" && e.autoplay.paused && M();
  }, T = () => {
    e.params.autoplay.pauseOnMouseEnter && (e.el.addEventListener("pointerenter", k), e.el.addEventListener("pointerleave", x));
  }, w = () => {
    e.el.removeEventListener("pointerenter", k), e.el.removeEventListener("pointerleave", x);
  }, I = () => {
    V().addEventListener("visibilitychange", L);
  }, $ = () => {
    V().removeEventListener("visibilitychange", L);
  };
  s("init", () => {
    e.params.autoplay.enabled && (T(), I(), h = (/* @__PURE__ */ new Date()).getTime(), E());
  }), s("destroy", () => {
    w(), $(), e.autoplay.running && C();
  }), s("beforeTransitionStart", (P, B, A) => {
    e.destroyed || !e.autoplay.running || (A || !e.params.autoplay.disableOnInteraction ? O(!0, !0) : C());
  }), s("sliderFirstMove", () => {
    if (!(e.destroyed || !e.autoplay.running)) {
      if (e.params.autoplay.disableOnInteraction) {
        C();
        return;
      }
      g = !0, p = !1, b = !1, m = setTimeout(() => {
        b = !0, p = !0, O(!0);
      }, 200);
    }
  }), s("touchEnd", () => {
    if (!(e.destroyed || !e.autoplay.running || !g)) {
      if (clearTimeout(m), clearTimeout(n), e.params.autoplay.disableOnInteraction) {
        p = !1, g = !1;
        return;
      }
      p && e.params.cssMode && M(), p = !1, g = !1;
    }
  }), s("slideChange", () => {
    e.destroyed || !e.autoplay.running || (y = !0);
  }), Object.assign(e.autoplay, {
    start: E,
    stop: C,
    pause: O,
    resume: M
  });
}
function Wt(e) {
  const {
    effect: t,
    swiper: s,
    on: i,
    setTranslate: a,
    setTransition: n,
    overwriteParams: l,
    perspective: r,
    recreateShadows: o,
    getEffectParams: c
  } = e;
  i("beforeInit", () => {
    if (s.params.effect !== t)
      return;
    s.classNames.push(`${s.params.containerModifierClass}${t}`), r && r() && s.classNames.push(`${s.params.containerModifierClass}3d`);
    const u = l ? l() : {};
    Object.assign(s.params, u), Object.assign(s.originalParams, u);
  }), i("setTranslate", () => {
    s.params.effect === t && a();
  }), i("setTransition", (u, g) => {
    s.params.effect === t && n(g);
  }), i("transitionEnd", () => {
    if (s.params.effect === t && o) {
      if (!c || !c().slideShadows)
        return;
      s.slides.forEach((u) => {
        u.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((g) => g.remove());
      }), o();
    }
  });
  let h;
  i("virtualUpdate", () => {
    s.params.effect === t && (s.slides.length || (h = !0), requestAnimationFrame(() => {
      h && s.slides && s.slides.length && (a(), h = !1);
    }));
  });
}
function Yt(e, t) {
  const s = he(t);
  return s !== t && (s.style.backfaceVisibility = "hidden", s.style["-webkit-backface-visibility"] = "hidden"), s;
}
function Xt({
  swiper: e,
  duration: t,
  transformElements: s,
  allSlides: i
}) {
  const {
    activeIndex: a
  } = e, n = (l) => l.parentElement ? l.parentElement : e.slides.filter((o) => o.shadowEl && o.shadowEl === l.parentNode)[0];
  if (e.params.virtualTranslate && t !== 0) {
    let l = !1, r;
    i ? r = s : r = s.filter((o) => {
      const c = o.classList.contains("swiper-slide-transform") ? n(o) : o;
      return e.getSlideIndex(c) === a;
    }), r.forEach((o) => {
      ze(o, () => {
        if (l || !e || e.destroyed)
          return;
        l = !0, e.animating = !1;
        const c = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0
        });
        e.wrapperEl.dispatchEvent(c);
      });
    });
  }
}
function Ut({
  swiper: e,
  extendParams: t,
  on: s
}) {
  t({
    fadeEffect: {
      crossFade: !1
    }
  }), Wt({
    effect: "fade",
    swiper: e,
    on: s,
    setTranslate: () => {
      const {
        slides: n
      } = e, l = e.params.fadeEffect;
      for (let r = 0; r < n.length; r += 1) {
        const o = e.slides[r];
        let h = -o.swiperSlideOffset;
        e.params.virtualTranslate || (h -= e.translate);
        let u = 0;
        e.isHorizontal() || (u = h, h = 0);
        const g = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(o.progress), 0) : 1 + Math.min(Math.max(o.progress, -1), 0), p = Yt(l, o);
        p.style.opacity = g, p.style.transform = `translate3d(${h}px, ${u}px, 0px)`;
      }
    },
    setTransition: (n) => {
      const l = e.slides.map((r) => he(r));
      l.forEach((r) => {
        r.style.transitionDuration = `${n}ms`;
      }), Xt({
        swiper: e,
        duration: n,
        transformElements: l,
        allSlides: !0
      });
    },
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: !0,
      spaceBetween: 0,
      virtualTranslate: !e.params.cssMode
    })
  });
}
const Kt = (() => {
  const e = () => {
    new z(".swiper-banner", {
      modules: [Rt, ee, te, Ut],
      slidesPerView: 1,
      spaceBetween: 20,
      effect: "fade",
      autoplay: {
        delay: 3e3,
        disableOnInteraction: !0
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: !0
      }
    }), new z(".swiper-causes", {
      modules: [ee, te],
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination",
        clickable: !0
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 50
        }
      }
    }), new z(".swiper-cancer", {
      modules: [ee, te],
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination",
        clickable: !0
      }
    });
  };
  return {
    setHandleEvent: function() {
      try {
        e();
      } catch {
      }
    }
  };
})(), Jt = () => {
  Kt.setHandleEvent();
}, Qt = (() => {
  const e = () => {
    document.querySelectorAll(".cancer__cards__item").forEach((s) => {
      s.addEventListener("click", () => {
        s.classList.toggle("active");
      });
    });
  };
  return {
    setHandleEvent: function() {
      try {
        e();
      } catch {
      }
    }
  };
})(), Zt = () => {
  Qt.setHandleEvent();
}, es = (() => {
  const e = () => {
    const s = document.querySelector("#modal-welcome"), i = document.querySelectorAll(".modal--close");
    setTimeout(() => {
      s == null || s.classList.add("active");
    }, 5e3), i.forEach((a) => {
      a.addEventListener("click", () => {
        const n = a.closest(".modal");
        n == null || n.classList.remove("active");
      });
    });
  }, t = () => {
    const s = document.querySelector("#open-modal"), i = document.querySelector("#modal-iframe");
    s == null || s.addEventListener("click", () => {
      i == null || i.classList.add("active");
    });
  };
  return {
    setHandleEvent: function() {
      try {
        e();
      } catch {
      }
      try {
        t();
      } catch {
      }
    }
  };
})(), ts = () => {
  es.setHandleEvent();
};
window.addEventListener("load", () => {
  we(), Jt(), Zt(), ts();
});
//# sourceMappingURL=mainscript.js.map
