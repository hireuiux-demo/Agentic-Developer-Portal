import {
  u as Oa,
  r as i,
  a as Ia,
  b as _a,
  j as c,
  c as jn,
  d as It,
  e as Ma,
  f as Oe,
  L as Da,
} from "./index-DnipGW_q.js";
function La(e) {
  const t = Oa({ warn: e?.router === void 0 }),
    n = e?.router || t,
    r = i.useRef(void 0);
  return Ia(n.stores.__store, (o) => {
    if (e?.select) {
      if (e.structuralSharing ?? n.options.defaultStructuralSharing) {
        const s = _a(r.current, e.select(o));
        return ((r.current = s), s);
      }
      return e.select(o);
    }
    return o;
  });
}
function nr(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function Xe(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = nr(o, t);
      return (!n && typeof s == "function" && (n = !0), s);
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const s = r[o];
          typeof s == "function" ? s() : nr(e[o], null);
        }
      };
  };
}
function J(...e) {
  return i.useCallback(Xe(...e), e);
}
var $a = Symbol.for("react.lazy"),
  Ct = jn[" use ".trim().toString()];
function za(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function Vr(e) {
  return (
    e != null &&
    typeof e == "object" &&
    "$$typeof" in e &&
    e.$$typeof === $a &&
    "_payload" in e &&
    za(e._payload)
  );
}
function Hr(e) {
  const t = Fa(e),
    n = i.forwardRef((r, o) => {
      let { children: s, ...a } = r;
      Vr(s) && typeof Ct == "function" && (s = Ct(s._payload));
      const l = i.Children.toArray(s),
        d = l.find(Ba);
      if (d) {
        const u = d.props.children,
          f = l.map((p) =>
            p === d
              ? i.Children.count(u) > 1
                ? i.Children.only(null)
                : i.isValidElement(u)
                  ? u.props.children
                  : null
              : p,
          );
        return c.jsx(t, {
          ...a,
          ref: o,
          children: i.isValidElement(u) ? i.cloneElement(u, void 0, f) : null,
        });
      }
      return c.jsx(t, { ...a, ref: o, children: s });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
var Ze = Hr("Slot");
function Fa(e) {
  const t = i.forwardRef((n, r) => {
    let { children: o, ...s } = n;
    if (
      (Vr(o) && typeof Ct == "function" && (o = Ct(o._payload)),
      i.isValidElement(o))
    ) {
      const a = Ha(o),
        l = Va(s, o.props);
      return (
        o.type !== i.Fragment && (l.ref = r ? Xe(r, a) : a),
        i.cloneElement(o, l)
      );
    }
    return i.Children.count(o) > 1 ? i.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var Wa = Symbol("radix.slottable");
function Ba(e) {
  return (
    i.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === Wa
  );
}
function Va(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      s = t[r];
    /^on[A-Z]/.test(r)
      ? o && s
        ? (n[r] = (...l) => {
            const d = s(...l);
            return (o(...l), d);
          })
        : o && (n[r] = o)
      : r === "style"
        ? (n[r] = { ...o, ...s })
        : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Ha(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function Ur(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Ur(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function Gr() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Ur(e)) && (r && (r += " "), (r += t));
  return r;
}
const rr = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  or = Gr,
  Tn = (e, t) => (n) => {
    var r;
    if (t?.variants == null) return or(e, n?.class, n?.className);
    const { variants: o, defaultVariants: s } = t,
      a = Object.keys(o).map((u) => {
        const f = n?.[u],
          p = s?.[u];
        if (f === null) return null;
        const g = rr(f) || rr(p);
        return o[u][g];
      }),
      l =
        n &&
        Object.entries(n).reduce((u, f) => {
          let [p, g] = f;
          return (g === void 0 || (u[p] = g), u);
        }, {}),
      d =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, f) => {
              let { class: p, className: g, ...h } = f;
              return Object.entries(h).every((b) => {
                let [m, v] = b;
                return Array.isArray(v)
                  ? v.includes({ ...s, ...l }[m])
                  : { ...s, ...l }[m] === v;
              })
                ? [...u, p, g]
                : u;
            }, []);
    return or(e, a, d, n?.class, n?.className);
  };
const Kr = (...e) =>
  e
    .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
    .join(" ")
    .trim();
const Ua = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const Ga = (e) =>
  e.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, n, r) =>
    r ? r.toUpperCase() : n.toLowerCase(),
  );
const sr = (e) => {
  const t = Ga(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
};
var Ka = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const Ya = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
  return !1;
};
const qa = i.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: s,
      iconNode: a,
      ...l
    },
    d,
  ) =>
    i.createElement(
      "svg",
      {
        ref: d,
        ...Ka,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: Kr("lucide", o),
        ...(!s && !Ya(l) && { "aria-hidden": "true" }),
        ...l,
      },
      [
        ...a.map(([u, f]) => i.createElement(u, f)),
        ...(Array.isArray(s) ? s : [s]),
      ],
    ),
);
const Q = (e, t) => {
  const n = i.forwardRef(({ className: r, ...o }, s) =>
    i.createElement(qa, {
      ref: s,
      iconNode: t,
      className: Kr(`lucide-${Ua(sr(e))}`, `lucide-${e}`, r),
      ...o,
    }),
  );
  return ((n.displayName = sr(e)), n);
};
const Xa = [
    [
      "path",
      {
        d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
        key: "169zse",
      },
    ],
  ],
  Za = Q("activity", Xa);
const Ja = [
    [
      "path",
      {
        d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",
        key: "lc1i9w",
      },
    ],
    ["path", { d: "m7 16.5-4.74-2.85", key: "1o9zyk" }],
    ["path", { d: "m7 16.5 5-3", key: "va8pkn" }],
    ["path", { d: "M7 16.5v5.17", key: "jnp8gn" }],
    [
      "path",
      {
        d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",
        key: "8zsnat",
      },
    ],
    ["path", { d: "m17 16.5-5-3", key: "8arw3v" }],
    ["path", { d: "m17 16.5 4.74-2.85", key: "8rfmw" }],
    ["path", { d: "M17 16.5v5.17", key: "k6z78m" }],
    [
      "path",
      {
        d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",
        key: "1xygjf",
      },
    ],
    ["path", { d: "M12 8 7.26 5.15", key: "1vbdud" }],
    ["path", { d: "m12 8 4.74-2.85", key: "3rx089" }],
    ["path", { d: "M12 13.5V8", key: "1io7kd" }],
  ],
  Qa = Q("boxes", Ja);
const ei = [
    [
      "path",
      {
        d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",
        key: "ezmyqa",
      },
    ],
    [
      "path",
      {
        d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",
        key: "e1hn23",
      },
    ],
  ],
  ti = Q("braces", ei);
const ni = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  ri = Q("check", ni);
const oi = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  Yr = Q("chevron-down", oi);
const si = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]],
  ai = Q("chevron-up", si);
const ii = [
    ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
    ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
    ["path", { d: "m14.5 4-5 16", key: "e7oirm" }],
  ],
  li = Q("code-xml", ii);
const ci = [
    ["path", { d: "M10 2v2", key: "7u0qdc" }],
    ["path", { d: "M14 2v2", key: "6buw04" }],
    [
      "path",
      {
        d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",
        key: "pwadti",
      },
    ],
    ["path", { d: "M6 2v2", key: "colzsn" }],
  ],
  di = Q("coffee", ci);
const ui = [
    [
      "path",
      {
        d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
        key: "1oefj6",
      },
    ],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
    [
      "path",
      {
        d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",
        key: "1oajmo",
      },
    ],
    [
      "path",
      {
        d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",
        key: "mpwhp6",
      },
    ],
  ],
  fi = Q("file-braces", ui);
const pi = [
    [
      "path",
      {
        d: "M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",
        key: "1wthlu",
      },
    ],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
    ["path", { d: "m5 16-3 3 3 3", key: "331omg" }],
    ["path", { d: "m9 22 3-3-3-3", key: "lsp7cz" }],
  ],
  mi = Q("file-code-corner", pi);
const hi = [
    [
      "path",
      {
        d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
        key: "1oefj6",
      },
    ],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
    ["circle", { cx: "11.5", cy: "14.5", r: "2.5", key: "1bq0ko" }],
    ["path", { d: "M13.3 16.3 15 18", key: "2quom7" }],
  ],
  gi = Q("file-search", hi);
const vi = [
    ["path", { d: "M15 6a9 9 0 0 0-9 9V3", key: "1cii5b" }],
    ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
    ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ],
  bi = Q("git-branch", vi);
const xi = [
    ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
    ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
    ["path", { d: "M13 6h3a2 2 0 0 1 2 2v7", key: "1yeb86" }],
    ["line", { x1: "6", x2: "6", y1: "9", y2: "21", key: "rroup" }],
  ],
  yi = Q("git-pull-request", xi);
const wi = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]],
  mn = Q("loader-circle", wi);
const Si = [
    [
      "path",
      {
        d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
        key: "1a0edw",
      },
    ],
    ["path", { d: "M12 22V12", key: "d0xqtd" }],
    ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
    ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ],
  Ci = Q("package", Si);
const Ri = [
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
    ],
    ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ],
  Ni = Q("panel-left", Ri);
const Ei = [
    [
      "path",
      {
        d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
        key: "10ikf1",
      },
    ],
  ],
  ki = Q("play", Ei);
const Ai = [
    [
      "path",
      { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", key: "1p45f6" },
    ],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ],
  Pi = Q("rotate-cw", Ai);
const ji = [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ],
  Ti = Q("search", ji);
const Oi = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  Ii = Q("shield-check", Oi);
const _i = [
    ["path", { d: "M12 19h8", key: "baeox8" }],
    ["path", { d: "m4 17 6-6-6-6", key: "1yngyt" }],
  ],
  qr = Q("terminal", _i);
const Mi = [
    [
      "path",
      {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
        key: "wmoenq",
      },
    ],
    ["path", { d: "M12 9v4", key: "juzpu7" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }],
  ],
  Di = Q("triangle-alert", Mi);
const Li = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  On = Q("x", Li),
  tn = 768;
function $i() {
  const [e, t] = i.useState(void 0);
  return (
    i.useEffect(() => {
      const n = window.matchMedia(`(max-width: ${tn - 1}px)`),
        r = () => {
          t(window.innerWidth < tn);
        };
      return (
        n.addEventListener("change", r),
        t(window.innerWidth < tn),
        () => n.removeEventListener("change", r)
      );
    }, []),
    !!e
  );
}
const zi = (e, t) => {
    const n = new Array(e.length + t.length);
    for (let r = 0; r < e.length; r++) n[r] = e[r];
    for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
    return n;
  },
  Fi = (e, t) => ({ classGroupId: e, validator: t }),
  Xr = (e = new Map(), t = null, n) => ({
    nextPart: e,
    validators: t,
    classGroupId: n,
  }),
  Rt = "-",
  ar = [],
  Wi = "arbitrary..",
  Bi = (e) => {
    const t = Hi(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (a) => {
        if (a.startsWith("[") && a.endsWith("]")) return Vi(a);
        const l = a.split(Rt),
          d = l[0] === "" && l.length > 1 ? 1 : 0;
        return Zr(l, d, t);
      },
      getConflictingClassGroupIds: (a, l) => {
        if (l) {
          const d = r[a],
            u = n[a];
          return d ? (u ? zi(u, d) : d) : u || ar;
        }
        return n[a] || ar;
      },
    };
  },
  Zr = (e, t, n) => {
    if (e.length - t === 0) return n.classGroupId;
    const o = e[t],
      s = n.nextPart.get(o);
    if (s) {
      const u = Zr(e, t + 1, s);
      if (u) return u;
    }
    const a = n.validators;
    if (a === null) return;
    const l = t === 0 ? e.join(Rt) : e.slice(t).join(Rt),
      d = a.length;
    for (let u = 0; u < d; u++) {
      const f = a[u];
      if (f.validator(l)) return f.classGroupId;
    }
  },
  Vi = (e) =>
    e.slice(1, -1).indexOf(":") === -1
      ? void 0
      : (() => {
          const t = e.slice(1, -1),
            n = t.indexOf(":"),
            r = t.slice(0, n);
          return r ? Wi + r : void 0;
        })(),
  Hi = (e) => {
    const { theme: t, classGroups: n } = e;
    return Ui(n, t);
  },
  Ui = (e, t) => {
    const n = Xr();
    for (const r in e) {
      const o = e[r];
      In(o, n, r, t);
    }
    return n;
  },
  In = (e, t, n, r) => {
    const o = e.length;
    for (let s = 0; s < o; s++) {
      const a = e[s];
      Gi(a, t, n, r);
    }
  },
  Gi = (e, t, n, r) => {
    if (typeof e == "string") {
      Ki(e, t, n);
      return;
    }
    if (typeof e == "function") {
      Yi(e, t, n, r);
      return;
    }
    qi(e, t, n, r);
  },
  Ki = (e, t, n) => {
    const r = e === "" ? t : Jr(t, e);
    r.classGroupId = n;
  },
  Yi = (e, t, n, r) => {
    if (Xi(e)) {
      In(e(r), t, n, r);
      return;
    }
    (t.validators === null && (t.validators = []), t.validators.push(Fi(n, e)));
  },
  qi = (e, t, n, r) => {
    const o = Object.entries(e),
      s = o.length;
    for (let a = 0; a < s; a++) {
      const [l, d] = o[a];
      In(d, Jr(t, l), n, r);
    }
  },
  Jr = (e, t) => {
    let n = e;
    const r = t.split(Rt),
      o = r.length;
    for (let s = 0; s < o; s++) {
      const a = r[s];
      let l = n.nextPart.get(a);
      (l || ((l = Xr()), n.nextPart.set(a, l)), (n = l));
    }
    return n;
  },
  Xi = (e) => "isThemeGetter" in e && e.isThemeGetter === !0,
  Zi = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = Object.create(null),
      r = Object.create(null);
    const o = (s, a) => {
      ((n[s] = a), t++, t > e && ((t = 0), (r = n), (n = Object.create(null))));
    };
    return {
      get(s) {
        let a = n[s];
        if (a !== void 0) return a;
        if ((a = r[s]) !== void 0) return (o(s, a), a);
      },
      set(s, a) {
        s in n ? (n[s] = a) : o(s, a);
      },
    };
  },
  hn = "!",
  ir = ":",
  Ji = [],
  lr = (e, t, n, r, o) => ({
    modifiers: e,
    hasImportantModifier: t,
    baseClassName: n,
    maybePostfixModifierPosition: r,
    isExternal: o,
  }),
  Qi = (e) => {
    const { prefix: t, experimentalParseClassName: n } = e;
    let r = (o) => {
      const s = [];
      let a = 0,
        l = 0,
        d = 0,
        u;
      const f = o.length;
      for (let m = 0; m < f; m++) {
        const v = o[m];
        if (a === 0 && l === 0) {
          if (v === ir) {
            (s.push(o.slice(d, m)), (d = m + 1));
            continue;
          }
          if (v === "/") {
            u = m;
            continue;
          }
        }
        v === "[" ? a++ : v === "]" ? a-- : v === "(" ? l++ : v === ")" && l--;
      }
      const p = s.length === 0 ? o : o.slice(d);
      let g = p,
        h = !1;
      p.endsWith(hn)
        ? ((g = p.slice(0, -1)), (h = !0))
        : p.startsWith(hn) && ((g = p.slice(1)), (h = !0));
      const b = u && u > d ? u - d : void 0;
      return lr(s, h, g, b);
    };
    if (t) {
      const o = t + ir,
        s = r;
      r = (a) =>
        a.startsWith(o) ? s(a.slice(o.length)) : lr(Ji, !1, a, void 0, !0);
    }
    if (n) {
      const o = r;
      r = (s) => n({ className: s, parseClassName: o });
    }
    return r;
  },
  el = (e) => {
    const t = new Map();
    return (
      e.orderSensitiveModifiers.forEach((n, r) => {
        t.set(n, 1e6 + r);
      }),
      (n) => {
        const r = [];
        let o = [];
        for (let s = 0; s < n.length; s++) {
          const a = n[s],
            l = a[0] === "[",
            d = t.has(a);
          l || d
            ? (o.length > 0 && (o.sort(), r.push(...o), (o = [])), r.push(a))
            : o.push(a);
        }
        return (o.length > 0 && (o.sort(), r.push(...o)), r);
      }
    );
  },
  tl = (e) => ({
    cache: Zi(e.cacheSize),
    parseClassName: Qi(e),
    sortModifiers: el(e),
    ...Bi(e),
  }),
  nl = /\s+/,
  rl = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
        sortModifiers: s,
      } = t,
      a = [],
      l = e.trim().split(nl);
    let d = "";
    for (let u = l.length - 1; u >= 0; u -= 1) {
      const f = l[u],
        {
          isExternal: p,
          modifiers: g,
          hasImportantModifier: h,
          baseClassName: b,
          maybePostfixModifierPosition: m,
        } = n(f);
      if (p) {
        d = f + (d.length > 0 ? " " + d : d);
        continue;
      }
      let v = !!m,
        y = r(v ? b.substring(0, m) : b);
      if (!y) {
        if (!v) {
          d = f + (d.length > 0 ? " " + d : d);
          continue;
        }
        if (((y = r(b)), !y)) {
          d = f + (d.length > 0 ? " " + d : d);
          continue;
        }
        v = !1;
      }
      const x = g.length === 0 ? "" : g.length === 1 ? g[0] : s(g).join(":"),
        w = h ? x + hn : x,
        S = w + y;
      if (a.indexOf(S) > -1) continue;
      a.push(S);
      const R = o(y, v);
      for (let E = 0; E < R.length; ++E) {
        const N = R[E];
        a.push(w + N);
      }
      d = f + (d.length > 0 ? " " + d : d);
    }
    return d;
  },
  ol = (...e) => {
    let t = 0,
      n,
      r,
      o = "";
    for (; t < e.length; )
      (n = e[t++]) && (r = Qr(n)) && (o && (o += " "), (o += r));
    return o;
  },
  Qr = (e) => {
    if (typeof e == "string") return e;
    let t,
      n = "";
    for (let r = 0; r < e.length; r++)
      e[r] && (t = Qr(e[r])) && (n && (n += " "), (n += t));
    return n;
  },
  sl = (e, ...t) => {
    let n, r, o, s;
    const a = (d) => {
        const u = t.reduce((f, p) => p(f), e());
        return (
          (n = tl(u)),
          (r = n.cache.get),
          (o = n.cache.set),
          (s = l),
          l(d)
        );
      },
      l = (d) => {
        const u = r(d);
        if (u) return u;
        const f = rl(d, n);
        return (o(d, f), f);
      };
    return ((s = a), (...d) => s(ol(...d)));
  },
  al = [],
  te = (e) => {
    const t = (n) => n[e] || al;
    return ((t.isThemeGetter = !0), t);
  },
  eo = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  to = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  il = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  ll = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  cl =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  dl = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  ul = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  fl =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Ce = (e) => il.test(e),
  M = (e) => !!e && !Number.isNaN(Number(e)),
  Re = (e) => !!e && Number.isInteger(Number(e)),
  nn = (e) => e.endsWith("%") && M(e.slice(0, -1)),
  ve = (e) => ll.test(e),
  no = () => !0,
  pl = (e) => cl.test(e) && !dl.test(e),
  _n = () => !1,
  ml = (e) => ul.test(e),
  hl = (e) => fl.test(e),
  gl = (e) => !A(e) && !P(e),
  vl = (e) => Pe(e, so, _n),
  A = (e) => eo.test(e),
  Ie = (e) => Pe(e, ao, pl),
  cr = (e) => Pe(e, Nl, M),
  bl = (e) => Pe(e, lo, no),
  xl = (e) => Pe(e, io, _n),
  dr = (e) => Pe(e, ro, _n),
  yl = (e) => Pe(e, oo, hl),
  ft = (e) => Pe(e, co, ml),
  P = (e) => to.test(e),
  nt = (e) => Be(e, ao),
  wl = (e) => Be(e, io),
  ur = (e) => Be(e, ro),
  Sl = (e) => Be(e, so),
  Cl = (e) => Be(e, oo),
  pt = (e) => Be(e, co, !0),
  Rl = (e) => Be(e, lo, !0),
  Pe = (e, t, n) => {
    const r = eo.exec(e);
    return r ? (r[1] ? t(r[1]) : n(r[2])) : !1;
  },
  Be = (e, t, n = !1) => {
    const r = to.exec(e);
    return r ? (r[1] ? t(r[1]) : n) : !1;
  },
  ro = (e) => e === "position" || e === "percentage",
  oo = (e) => e === "image" || e === "url",
  so = (e) => e === "length" || e === "size" || e === "bg-size",
  ao = (e) => e === "length",
  Nl = (e) => e === "number",
  io = (e) => e === "family-name",
  lo = (e) => e === "number" || e === "weight",
  co = (e) => e === "shadow",
  El = () => {
    const e = te("color"),
      t = te("font"),
      n = te("text"),
      r = te("font-weight"),
      o = te("tracking"),
      s = te("leading"),
      a = te("breakpoint"),
      l = te("container"),
      d = te("spacing"),
      u = te("radius"),
      f = te("shadow"),
      p = te("inset-shadow"),
      g = te("text-shadow"),
      h = te("drop-shadow"),
      b = te("blur"),
      m = te("perspective"),
      v = te("aspect"),
      y = te("ease"),
      x = te("animate"),
      w = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      S = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      R = () => [...S(), P, A],
      E = () => ["auto", "hidden", "clip", "visible", "scroll"],
      N = () => ["auto", "contain", "none"],
      C = () => [P, A, d],
      _ = () => [Ce, "full", "auto", ...C()],
      L = () => [Re, "none", "subgrid", P, A],
      F = () => ["auto", { span: ["full", Re, P, A] }, Re, P, A],
      W = () => [Re, "auto", P, A],
      B = () => ["auto", "min", "max", "fr", P, A],
      $ = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      H = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      I = () => ["auto", ...C()],
      D = () => [
        Ce,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...C(),
      ],
      O = () => [
        Ce,
        "screen",
        "full",
        "dvw",
        "lvw",
        "svw",
        "min",
        "max",
        "fit",
        ...C(),
      ],
      U = () => [
        Ce,
        "screen",
        "full",
        "lh",
        "dvh",
        "lvh",
        "svh",
        "min",
        "max",
        "fit",
        ...C(),
      ],
      k = () => [e, P, A],
      fe = () => [...S(), ur, dr, { position: [P, A] }],
      we = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      Se = () => ["auto", "cover", "contain", Sl, vl, { size: [P, A] }],
      ae = () => [nn, nt, Ie],
      ee = () => ["", "none", "full", u, P, A],
      Z = () => ["", M, nt, Ie],
      T = () => ["solid", "dashed", "dotted", "double"],
      q = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      z = () => [M, nn, ur, dr],
      K = () => ["", "none", b, P, A],
      G = () => ["none", M, P, A],
      X = () => ["none", M, P, A],
      ne = () => [M, P, A],
      ie = () => [Ce, "full", ...C()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [ve],
        breakpoint: [ve],
        color: [no],
        container: [ve],
        "drop-shadow": [ve],
        ease: ["in", "out", "in-out"],
        font: [gl],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [ve],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [ve],
        shadow: [ve],
        spacing: ["px", M],
        text: [ve],
        "text-shadow": [ve],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", Ce, A, P, v] }],
        container: ["container"],
        columns: [{ columns: [M, A, P, l] }],
        "break-after": [{ "break-after": w() }],
        "break-before": [{ "break-before": w() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: R() }],
        overflow: [{ overflow: E() }],
        "overflow-x": [{ "overflow-x": E() }],
        "overflow-y": [{ "overflow-y": E() }],
        overscroll: [{ overscroll: N() }],
        "overscroll-x": [{ "overscroll-x": N() }],
        "overscroll-y": [{ "overscroll-y": N() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: _() }],
        "inset-x": [{ "inset-x": _() }],
        "inset-y": [{ "inset-y": _() }],
        start: [{ "inset-s": _(), start: _() }],
        end: [{ "inset-e": _(), end: _() }],
        "inset-bs": [{ "inset-bs": _() }],
        "inset-be": [{ "inset-be": _() }],
        top: [{ top: _() }],
        right: [{ right: _() }],
        bottom: [{ bottom: _() }],
        left: [{ left: _() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [Re, "auto", P, A] }],
        basis: [{ basis: [Ce, "full", "auto", l, ...C()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [M, Ce, "auto", "initial", "none", A] }],
        grow: [{ grow: ["", M, P, A] }],
        shrink: [{ shrink: ["", M, P, A] }],
        order: [{ order: [Re, "first", "last", "none", P, A] }],
        "grid-cols": [{ "grid-cols": L() }],
        "col-start-end": [{ col: F() }],
        "col-start": [{ "col-start": W() }],
        "col-end": [{ "col-end": W() }],
        "grid-rows": [{ "grid-rows": L() }],
        "row-start-end": [{ row: F() }],
        "row-start": [{ "row-start": W() }],
        "row-end": [{ "row-end": W() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": B() }],
        "auto-rows": [{ "auto-rows": B() }],
        gap: [{ gap: C() }],
        "gap-x": [{ "gap-x": C() }],
        "gap-y": [{ "gap-y": C() }],
        "justify-content": [{ justify: [...$(), "normal"] }],
        "justify-items": [{ "justify-items": [...H(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...H()] }],
        "align-content": [{ content: ["normal", ...$()] }],
        "align-items": [{ items: [...H(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...H(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": $() }],
        "place-items": [{ "place-items": [...H(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...H()] }],
        p: [{ p: C() }],
        px: [{ px: C() }],
        py: [{ py: C() }],
        ps: [{ ps: C() }],
        pe: [{ pe: C() }],
        pbs: [{ pbs: C() }],
        pbe: [{ pbe: C() }],
        pt: [{ pt: C() }],
        pr: [{ pr: C() }],
        pb: [{ pb: C() }],
        pl: [{ pl: C() }],
        m: [{ m: I() }],
        mx: [{ mx: I() }],
        my: [{ my: I() }],
        ms: [{ ms: I() }],
        me: [{ me: I() }],
        mbs: [{ mbs: I() }],
        mbe: [{ mbe: I() }],
        mt: [{ mt: I() }],
        mr: [{ mr: I() }],
        mb: [{ mb: I() }],
        ml: [{ ml: I() }],
        "space-x": [{ "space-x": C() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": C() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: D() }],
        "inline-size": [{ inline: ["auto", ...O()] }],
        "min-inline-size": [{ "min-inline": ["auto", ...O()] }],
        "max-inline-size": [{ "max-inline": ["none", ...O()] }],
        "block-size": [{ block: ["auto", ...U()] }],
        "min-block-size": [{ "min-block": ["auto", ...U()] }],
        "max-block-size": [{ "max-block": ["none", ...U()] }],
        w: [{ w: [l, "screen", ...D()] }],
        "min-w": [{ "min-w": [l, "screen", "none", ...D()] }],
        "max-w": [
          { "max-w": [l, "screen", "none", "prose", { screen: [a] }, ...D()] },
        ],
        h: [{ h: ["screen", "lh", ...D()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...D()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...D()] }],
        "font-size": [{ text: ["base", n, nt, Ie] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [r, Rl, bl] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              nn,
              A,
            ],
          },
        ],
        "font-family": [{ font: [wl, xl, t] }],
        "font-features": [{ "font-features": [A] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [o, P, A] }],
        "line-clamp": [{ "line-clamp": [M, "none", P, cr] }],
        leading: [{ leading: [s, ...C()] }],
        "list-image": [{ "list-image": ["none", P, A] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", P, A] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: k() }],
        "text-color": [{ text: k() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...T(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [M, "from-font", "auto", P, Ie] },
        ],
        "text-decoration-color": [{ decoration: k() }],
        "underline-offset": [{ "underline-offset": [M, "auto", P, A] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: C() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              P,
              A,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", P, A] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: fe() }],
        "bg-repeat": [{ bg: we() }],
        "bg-size": [{ bg: Se() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  Re,
                  P,
                  A,
                ],
                radial: ["", P, A],
                conic: [Re, P, A],
              },
              Cl,
              yl,
            ],
          },
        ],
        "bg-color": [{ bg: k() }],
        "gradient-from-pos": [{ from: ae() }],
        "gradient-via-pos": [{ via: ae() }],
        "gradient-to-pos": [{ to: ae() }],
        "gradient-from": [{ from: k() }],
        "gradient-via": [{ via: k() }],
        "gradient-to": [{ to: k() }],
        rounded: [{ rounded: ee() }],
        "rounded-s": [{ "rounded-s": ee() }],
        "rounded-e": [{ "rounded-e": ee() }],
        "rounded-t": [{ "rounded-t": ee() }],
        "rounded-r": [{ "rounded-r": ee() }],
        "rounded-b": [{ "rounded-b": ee() }],
        "rounded-l": [{ "rounded-l": ee() }],
        "rounded-ss": [{ "rounded-ss": ee() }],
        "rounded-se": [{ "rounded-se": ee() }],
        "rounded-ee": [{ "rounded-ee": ee() }],
        "rounded-es": [{ "rounded-es": ee() }],
        "rounded-tl": [{ "rounded-tl": ee() }],
        "rounded-tr": [{ "rounded-tr": ee() }],
        "rounded-br": [{ "rounded-br": ee() }],
        "rounded-bl": [{ "rounded-bl": ee() }],
        "border-w": [{ border: Z() }],
        "border-w-x": [{ "border-x": Z() }],
        "border-w-y": [{ "border-y": Z() }],
        "border-w-s": [{ "border-s": Z() }],
        "border-w-e": [{ "border-e": Z() }],
        "border-w-bs": [{ "border-bs": Z() }],
        "border-w-be": [{ "border-be": Z() }],
        "border-w-t": [{ "border-t": Z() }],
        "border-w-r": [{ "border-r": Z() }],
        "border-w-b": [{ "border-b": Z() }],
        "border-w-l": [{ "border-l": Z() }],
        "divide-x": [{ "divide-x": Z() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": Z() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...T(), "hidden", "none"] }],
        "divide-style": [{ divide: [...T(), "hidden", "none"] }],
        "border-color": [{ border: k() }],
        "border-color-x": [{ "border-x": k() }],
        "border-color-y": [{ "border-y": k() }],
        "border-color-s": [{ "border-s": k() }],
        "border-color-e": [{ "border-e": k() }],
        "border-color-bs": [{ "border-bs": k() }],
        "border-color-be": [{ "border-be": k() }],
        "border-color-t": [{ "border-t": k() }],
        "border-color-r": [{ "border-r": k() }],
        "border-color-b": [{ "border-b": k() }],
        "border-color-l": [{ "border-l": k() }],
        "divide-color": [{ divide: k() }],
        "outline-style": [{ outline: [...T(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [M, P, A] }],
        "outline-w": [{ outline: ["", M, nt, Ie] }],
        "outline-color": [{ outline: k() }],
        shadow: [{ shadow: ["", "none", f, pt, ft] }],
        "shadow-color": [{ shadow: k() }],
        "inset-shadow": [{ "inset-shadow": ["none", p, pt, ft] }],
        "inset-shadow-color": [{ "inset-shadow": k() }],
        "ring-w": [{ ring: Z() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: k() }],
        "ring-offset-w": [{ "ring-offset": [M, Ie] }],
        "ring-offset-color": [{ "ring-offset": k() }],
        "inset-ring-w": [{ "inset-ring": Z() }],
        "inset-ring-color": [{ "inset-ring": k() }],
        "text-shadow": [{ "text-shadow": ["none", g, pt, ft] }],
        "text-shadow-color": [{ "text-shadow": k() }],
        opacity: [{ opacity: [M, P, A] }],
        "mix-blend": [{ "mix-blend": [...q(), "plus-darker", "plus-lighter"] }],
        "bg-blend": [{ "bg-blend": q() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [M] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": z() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": z() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": k() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": k() }],
        "mask-image-t-from-pos": [{ "mask-t-from": z() }],
        "mask-image-t-to-pos": [{ "mask-t-to": z() }],
        "mask-image-t-from-color": [{ "mask-t-from": k() }],
        "mask-image-t-to-color": [{ "mask-t-to": k() }],
        "mask-image-r-from-pos": [{ "mask-r-from": z() }],
        "mask-image-r-to-pos": [{ "mask-r-to": z() }],
        "mask-image-r-from-color": [{ "mask-r-from": k() }],
        "mask-image-r-to-color": [{ "mask-r-to": k() }],
        "mask-image-b-from-pos": [{ "mask-b-from": z() }],
        "mask-image-b-to-pos": [{ "mask-b-to": z() }],
        "mask-image-b-from-color": [{ "mask-b-from": k() }],
        "mask-image-b-to-color": [{ "mask-b-to": k() }],
        "mask-image-l-from-pos": [{ "mask-l-from": z() }],
        "mask-image-l-to-pos": [{ "mask-l-to": z() }],
        "mask-image-l-from-color": [{ "mask-l-from": k() }],
        "mask-image-l-to-color": [{ "mask-l-to": k() }],
        "mask-image-x-from-pos": [{ "mask-x-from": z() }],
        "mask-image-x-to-pos": [{ "mask-x-to": z() }],
        "mask-image-x-from-color": [{ "mask-x-from": k() }],
        "mask-image-x-to-color": [{ "mask-x-to": k() }],
        "mask-image-y-from-pos": [{ "mask-y-from": z() }],
        "mask-image-y-to-pos": [{ "mask-y-to": z() }],
        "mask-image-y-from-color": [{ "mask-y-from": k() }],
        "mask-image-y-to-color": [{ "mask-y-to": k() }],
        "mask-image-radial": [{ "mask-radial": [P, A] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": z() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": z() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": k() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": k() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": S() }],
        "mask-image-conic-pos": [{ "mask-conic": [M] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": z() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": z() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": k() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": k() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: fe() }],
        "mask-repeat": [{ mask: we() }],
        "mask-size": [{ mask: Se() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", P, A] }],
        filter: [{ filter: ["", "none", P, A] }],
        blur: [{ blur: K() }],
        brightness: [{ brightness: [M, P, A] }],
        contrast: [{ contrast: [M, P, A] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", h, pt, ft] }],
        "drop-shadow-color": [{ "drop-shadow": k() }],
        grayscale: [{ grayscale: ["", M, P, A] }],
        "hue-rotate": [{ "hue-rotate": [M, P, A] }],
        invert: [{ invert: ["", M, P, A] }],
        saturate: [{ saturate: [M, P, A] }],
        sepia: [{ sepia: ["", M, P, A] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", P, A] }],
        "backdrop-blur": [{ "backdrop-blur": K() }],
        "backdrop-brightness": [{ "backdrop-brightness": [M, P, A] }],
        "backdrop-contrast": [{ "backdrop-contrast": [M, P, A] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", M, P, A] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [M, P, A] }],
        "backdrop-invert": [{ "backdrop-invert": ["", M, P, A] }],
        "backdrop-opacity": [{ "backdrop-opacity": [M, P, A] }],
        "backdrop-saturate": [{ "backdrop-saturate": [M, P, A] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", M, P, A] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": C() }],
        "border-spacing-x": [{ "border-spacing-x": C() }],
        "border-spacing-y": [{ "border-spacing-y": C() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              P,
              A,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [M, "initial", P, A] }],
        ease: [{ ease: ["linear", "initial", y, P, A] }],
        delay: [{ delay: [M, P, A] }],
        animate: [{ animate: ["none", x, P, A] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [m, P, A] }],
        "perspective-origin": [{ "perspective-origin": R() }],
        rotate: [{ rotate: G() }],
        "rotate-x": [{ "rotate-x": G() }],
        "rotate-y": [{ "rotate-y": G() }],
        "rotate-z": [{ "rotate-z": G() }],
        scale: [{ scale: X() }],
        "scale-x": [{ "scale-x": X() }],
        "scale-y": [{ "scale-y": X() }],
        "scale-z": [{ "scale-z": X() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: ne() }],
        "skew-x": [{ "skew-x": ne() }],
        "skew-y": [{ "skew-y": ne() }],
        transform: [{ transform: [P, A, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: R() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: ie() }],
        "translate-x": [{ "translate-x": ie() }],
        "translate-y": [{ "translate-y": ie() }],
        "translate-z": [{ "translate-z": ie() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: k() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: k() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              P,
              A,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": C() }],
        "scroll-mx": [{ "scroll-mx": C() }],
        "scroll-my": [{ "scroll-my": C() }],
        "scroll-ms": [{ "scroll-ms": C() }],
        "scroll-me": [{ "scroll-me": C() }],
        "scroll-mbs": [{ "scroll-mbs": C() }],
        "scroll-mbe": [{ "scroll-mbe": C() }],
        "scroll-mt": [{ "scroll-mt": C() }],
        "scroll-mr": [{ "scroll-mr": C() }],
        "scroll-mb": [{ "scroll-mb": C() }],
        "scroll-ml": [{ "scroll-ml": C() }],
        "scroll-p": [{ "scroll-p": C() }],
        "scroll-px": [{ "scroll-px": C() }],
        "scroll-py": [{ "scroll-py": C() }],
        "scroll-ps": [{ "scroll-ps": C() }],
        "scroll-pe": [{ "scroll-pe": C() }],
        "scroll-pbs": [{ "scroll-pbs": C() }],
        "scroll-pbe": [{ "scroll-pbe": C() }],
        "scroll-pt": [{ "scroll-pt": C() }],
        "scroll-pr": [{ "scroll-pr": C() }],
        "scroll-pb": [{ "scroll-pb": C() }],
        "scroll-pl": [{ "scroll-pl": C() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", P, A] },
        ],
        fill: [{ fill: ["none", ...k()] }],
        "stroke-w": [{ stroke: [M, nt, Ie, cr] }],
        stroke: [{ stroke: ["none", ...k()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "inset-bs",
          "inset-be",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-bs",
          "border-w-be",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-bs",
          "border-color-be",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mbs",
          "scroll-mbe",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pbs",
          "scroll-pbe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  kl = sl(El);
function j(...e) {
  return kl(Gr(e));
}
const Al = Tn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground shadow hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
          outline:
            "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-9 px-4 py-2",
          sm: "h-8 rounded-md px-3 text-xs",
          lg: "h-10 rounded-md px-8",
          icon: "h-9 w-9",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  Ee = i.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, s) => {
      const a = r ? Ze : "button";
      return c.jsx(a, {
        className: j(Al({ variant: t, size: n, className: e })),
        ref: s,
        ...o,
      });
    },
  );
Ee.displayName = "Button";
const Mn = i.forwardRef(({ className: e, type: t, ...n }, r) =>
  c.jsx("input", {
    type: t,
    className: j(
      "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e,
    ),
    ref: r,
    ...n,
  }),
);
Mn.displayName = "Input";
var Pl = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  jl = Pl.reduce((e, t) => {
    const n = Hr(`Primitive.${t}`),
      r = i.forwardRef((o, s) => {
        const { asChild: a, ...l } = o,
          d = a ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          c.jsx(d, { ...l, ref: s })
        );
      });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
  }, {}),
  Tl = "Separator",
  fr = "horizontal",
  Ol = ["horizontal", "vertical"],
  uo = i.forwardRef((e, t) => {
    const { decorative: n, orientation: r = fr, ...o } = e,
      s = Il(r) ? r : fr,
      l = n
        ? { role: "none" }
        : {
            "aria-orientation": s === "vertical" ? s : void 0,
            role: "separator",
          };
    return c.jsx(jl.div, { "data-orientation": s, ...l, ...o, ref: t });
  });
uo.displayName = Tl;
function Il(e) {
  return Ol.includes(e);
}
var fo = uo;
const po = i.forwardRef(
  (
    { className: e, orientation: t = "horizontal", decorative: n = !0, ...r },
    o,
  ) =>
    c.jsx(fo, {
      ref: o,
      decorative: n,
      orientation: t,
      className: j(
        "shrink-0 bg-border",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e,
      ),
      ...r,
    }),
);
po.displayName = fo.displayName;
function V(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e?.(o), n === !1 || !o.defaultPrevented)) return t?.(o);
  };
}
function _l(e, t) {
  const n = i.createContext(t),
    r = (s) => {
      const { children: a, ...l } = s,
        d = i.useMemo(() => l, Object.values(l));
      return c.jsx(n.Provider, { value: d, children: a });
    };
  r.displayName = e + "Provider";
  function o(s) {
    const a = i.useContext(n);
    if (a) return a;
    if (t !== void 0) return t;
    throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function lt(e, t = []) {
  let n = [];
  function r(s, a) {
    const l = i.createContext(a),
      d = n.length;
    n = [...n, a];
    const u = (p) => {
      const { scope: g, children: h, ...b } = p,
        m = g?.[e]?.[d] || l,
        v = i.useMemo(() => b, Object.values(b));
      return c.jsx(m.Provider, { value: v, children: h });
    };
    u.displayName = s + "Provider";
    function f(p, g) {
      const h = g?.[e]?.[d] || l,
        b = i.useContext(h);
      if (b) return b;
      if (a !== void 0) return a;
      throw new Error(`\`${p}\` must be used within \`${s}\``);
    }
    return [u, f];
  }
  const o = () => {
    const s = n.map((a) => i.createContext(a));
    return function (l) {
      const d = l?.[e] || s;
      return i.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: d } }), [l, d]);
    };
  };
  return ((o.scopeName = e), [r, Ml(o, ...t)]);
}
function Ml(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (s) {
      const a = r.reduce((l, { useScope: d, scopeName: u }) => {
        const p = d(s)[`__scope${u}`];
        return { ...l, ...p };
      }, {});
      return i.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return ((n.scopeName = t.scopeName), n);
}
var re = globalThis?.document ? i.useLayoutEffect : () => {},
  Dl = jn[" useId ".trim().toString()] || (() => {}),
  Ll = 0;
function De(e) {
  const [t, n] = i.useState(Dl());
  return (
    re(() => {
      n((r) => r ?? String(Ll++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
var $l = jn[" useInsertionEffect ".trim().toString()] || re;
function Nt({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  const [o, s, a] = zl({ defaultProp: t, onChange: n }),
    l = e !== void 0,
    d = l ? e : o;
  {
    const f = i.useRef(e !== void 0);
    i.useEffect(() => {
      const p = f.current;
      (p !== l &&
        console.warn(
          `${r} is changing from ${p ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (f.current = l));
    }, [l, r]);
  }
  const u = i.useCallback(
    (f) => {
      if (l) {
        const p = Fl(f) ? f(e) : f;
        p !== e && a.current?.(p);
      } else s(f);
    },
    [l, e, s, a],
  );
  return [d, u];
}
function zl({ defaultProp: e, onChange: t }) {
  const [n, r] = i.useState(e),
    o = i.useRef(n),
    s = i.useRef(t);
  return (
    $l(() => {
      s.current = t;
    }, [t]),
    i.useEffect(() => {
      o.current !== n && (s.current?.(n), (o.current = n));
    }, [n, o]),
    [n, r, s]
  );
}
function Fl(e) {
  return typeof e == "function";
}
function Wl(e) {
  const t = Bl(e),
    n = i.forwardRef((r, o) => {
      const { children: s, ...a } = r,
        l = i.Children.toArray(s),
        d = l.find(Hl);
      if (d) {
        const u = d.props.children,
          f = l.map((p) =>
            p === d
              ? i.Children.count(u) > 1
                ? i.Children.only(null)
                : i.isValidElement(u)
                  ? u.props.children
                  : null
              : p,
          );
        return c.jsx(t, {
          ...a,
          ref: o,
          children: i.isValidElement(u) ? i.cloneElement(u, void 0, f) : null,
        });
      }
      return c.jsx(t, { ...a, ref: o, children: s });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
function Bl(e) {
  const t = i.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (i.isValidElement(o)) {
      const a = Gl(o),
        l = Ul(s, o.props);
      return (
        o.type !== i.Fragment && (l.ref = r ? Xe(r, a) : a),
        i.cloneElement(o, l)
      );
    }
    return i.Children.count(o) > 1 ? i.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var Vl = Symbol("radix.slottable");
function Hl(e) {
  return (
    i.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === Vl
  );
}
function Ul(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      s = t[r];
    /^on[A-Z]/.test(r)
      ? o && s
        ? (n[r] = (...l) => {
            const d = s(...l);
            return (o(...l), d);
          })
        : o && (n[r] = o)
      : r === "style"
        ? (n[r] = { ...o, ...s })
        : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Gl(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var Kl = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  Y = Kl.reduce((e, t) => {
    const n = Wl(`Primitive.${t}`),
      r = i.forwardRef((o, s) => {
        const { asChild: a, ...l } = o,
          d = a ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          c.jsx(d, { ...l, ref: s })
        );
      });
    return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
  }, {});
function Yl(e, t) {
  e && It.flushSync(() => e.dispatchEvent(t));
}
function Le(e) {
  const t = i.useRef(e);
  return (
    i.useEffect(() => {
      t.current = e;
    }),
    i.useMemo(
      () =>
        (...n) =>
          t.current?.(...n),
      [],
    )
  );
}
function ql(e, t = globalThis?.document) {
  const n = Le(e);
  i.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var Xl = "DismissableLayer",
  gn = "dismissableLayer.update",
  Zl = "dismissableLayer.pointerDownOutside",
  Jl = "dismissableLayer.focusOutside",
  pr,
  mo = i.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  _t = i.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: s,
        onInteractOutside: a,
        onDismiss: l,
        ...d
      } = e,
      u = i.useContext(mo),
      [f, p] = i.useState(null),
      g = f?.ownerDocument ?? globalThis?.document,
      [, h] = i.useState({}),
      b = J(t, (N) => p(N)),
      m = Array.from(u.layers),
      [v] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      y = m.indexOf(v),
      x = f ? m.indexOf(f) : -1,
      w = u.layersWithOutsidePointerEventsDisabled.size > 0,
      S = x >= y,
      R = tc((N) => {
        const C = N.target,
          _ = [...u.branches].some((L) => L.contains(C));
        !S || _ || (o?.(N), a?.(N), N.defaultPrevented || l?.());
      }, g),
      E = nc((N) => {
        const C = N.target;
        [...u.branches].some((L) => L.contains(C)) ||
          (s?.(N), a?.(N), N.defaultPrevented || l?.());
      }, g);
    return (
      ql((N) => {
        x === u.layers.size - 1 &&
          (r?.(N), !N.defaultPrevented && l && (N.preventDefault(), l()));
      }, g),
      i.useEffect(() => {
        if (f)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((pr = g.body.style.pointerEvents),
                (g.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(f)),
            u.layers.add(f),
            mr(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (g.body.style.pointerEvents = pr);
            }
          );
      }, [f, g, n, u]),
      i.useEffect(
        () => () => {
          f &&
            (u.layers.delete(f),
            u.layersWithOutsidePointerEventsDisabled.delete(f),
            mr());
        },
        [f, u],
      ),
      i.useEffect(() => {
        const N = () => h({});
        return (
          document.addEventListener(gn, N),
          () => document.removeEventListener(gn, N)
        );
      }, []),
      c.jsx(Y.div, {
        ...d,
        ref: b,
        style: {
          pointerEvents: w ? (S ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: V(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: V(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: V(e.onPointerDownCapture, R.onPointerDownCapture),
      })
    );
  });
_t.displayName = Xl;
var Ql = "DismissableLayerBranch",
  ec = i.forwardRef((e, t) => {
    const n = i.useContext(mo),
      r = i.useRef(null),
      o = J(t, r);
    return (
      i.useEffect(() => {
        const s = r.current;
        if (s)
          return (
            n.branches.add(s),
            () => {
              n.branches.delete(s);
            }
          );
      }, [n.branches]),
      c.jsx(Y.div, { ...e, ref: o })
    );
  });
ec.displayName = Ql;
function tc(e, t = globalThis?.document) {
  const n = Le(e),
    r = i.useRef(!1),
    o = i.useRef(() => {});
  return (
    i.useEffect(() => {
      const s = (l) => {
          if (l.target && !r.current) {
            let d = function () {
              ho(Zl, n, u, { discrete: !0 });
            };
            const u = { originalEvent: l };
            l.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = d),
                t.addEventListener("click", o.current, { once: !0 }))
              : d();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        a = window.setTimeout(() => {
          t.addEventListener("pointerdown", s);
        }, 0);
      return () => {
        (window.clearTimeout(a),
          t.removeEventListener("pointerdown", s),
          t.removeEventListener("click", o.current));
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function nc(e, t = globalThis?.document) {
  const n = Le(e),
    r = i.useRef(!1);
  return (
    i.useEffect(() => {
      const o = (s) => {
        s.target &&
          !r.current &&
          ho(Jl, n, { originalEvent: s }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function mr() {
  const e = new CustomEvent(gn);
  document.dispatchEvent(e);
}
function ho(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  (t && o.addEventListener(e, t, { once: !0 }),
    r ? Yl(o, s) : o.dispatchEvent(s));
}
var rn = "focusScope.autoFocusOnMount",
  on = "focusScope.autoFocusOnUnmount",
  hr = { bubbles: !1, cancelable: !0 },
  rc = "FocusScope",
  Dn = i.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: s,
        ...a
      } = e,
      [l, d] = i.useState(null),
      u = Le(o),
      f = Le(s),
      p = i.useRef(null),
      g = J(t, (m) => d(m)),
      h = i.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    (i.useEffect(() => {
      if (r) {
        let m = function (w) {
            if (h.paused || !l) return;
            const S = w.target;
            l.contains(S) ? (p.current = S) : Ne(p.current, { select: !0 });
          },
          v = function (w) {
            if (h.paused || !l) return;
            const S = w.relatedTarget;
            S !== null && (l.contains(S) || Ne(p.current, { select: !0 }));
          },
          y = function (w) {
            if (document.activeElement === document.body)
              for (const R of w) R.removedNodes.length > 0 && Ne(l);
          };
        (document.addEventListener("focusin", m),
          document.addEventListener("focusout", v));
        const x = new MutationObserver(y);
        return (
          l && x.observe(l, { childList: !0, subtree: !0 }),
          () => {
            (document.removeEventListener("focusin", m),
              document.removeEventListener("focusout", v),
              x.disconnect());
          }
        );
      }
    }, [r, l, h.paused]),
      i.useEffect(() => {
        if (l) {
          vr.add(h);
          const m = document.activeElement;
          if (!l.contains(m)) {
            const y = new CustomEvent(rn, hr);
            (l.addEventListener(rn, u),
              l.dispatchEvent(y),
              y.defaultPrevented ||
                (oc(cc(go(l)), { select: !0 }),
                document.activeElement === m && Ne(l)));
          }
          return () => {
            (l.removeEventListener(rn, u),
              setTimeout(() => {
                const y = new CustomEvent(on, hr);
                (l.addEventListener(on, f),
                  l.dispatchEvent(y),
                  y.defaultPrevented || Ne(m ?? document.body, { select: !0 }),
                  l.removeEventListener(on, f),
                  vr.remove(h));
              }, 0));
          };
        }
      }, [l, u, f, h]));
    const b = i.useCallback(
      (m) => {
        if ((!n && !r) || h.paused) return;
        const v = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey,
          y = document.activeElement;
        if (v && y) {
          const x = m.currentTarget,
            [w, S] = sc(x);
          w && S
            ? !m.shiftKey && y === S
              ? (m.preventDefault(), n && Ne(w, { select: !0 }))
              : m.shiftKey &&
                y === w &&
                (m.preventDefault(), n && Ne(S, { select: !0 }))
            : y === x && m.preventDefault();
        }
      },
      [n, r, h.paused],
    );
    return c.jsx(Y.div, { tabIndex: -1, ...a, ref: g, onKeyDown: b });
  });
Dn.displayName = rc;
function oc(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((Ne(r, { select: t }), document.activeElement !== n)) return;
}
function sc(e) {
  const t = go(e),
    n = gr(t, e),
    r = gr(t.reverse(), e);
  return [n, r];
}
function go(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function gr(e, t) {
  for (const n of e) if (!ac(n, { upTo: t })) return n;
}
function ac(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function ic(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ne(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    (e.focus({ preventScroll: !0 }), e !== n && ic(e) && t && e.select());
  }
}
var vr = lc();
function lc() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      (t !== n && n?.pause(), (e = br(e, t)), e.unshift(t));
    },
    remove(t) {
      ((e = br(e, t)), e[0]?.resume());
    },
  };
}
function br(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return (r !== -1 && n.splice(r, 1), n);
}
function cc(e) {
  return e.filter((t) => t.tagName !== "A");
}
var dc = "Portal",
  Mt = i.forwardRef((e, t) => {
    const { container: n, ...r } = e,
      [o, s] = i.useState(!1);
    re(() => s(!0), []);
    const a = n || (o && globalThis?.document?.body);
    return a ? Ma.createPortal(c.jsx(Y.div, { ...r, ref: t }), a) : null;
  });
Mt.displayName = dc;
function uc(e, t) {
  return i.useReducer((n, r) => t[n][r] ?? n, e);
}
var Je = (e) => {
  const { present: t, children: n } = e,
    r = fc(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : i.Children.only(n),
    s = J(r.ref, pc(o));
  return typeof n == "function" || r.isPresent
    ? i.cloneElement(o, { ref: s })
    : null;
};
Je.displayName = "Presence";
function fc(e) {
  const [t, n] = i.useState(),
    r = i.useRef(null),
    o = i.useRef(e),
    s = i.useRef("none"),
    a = e ? "mounted" : "unmounted",
    [l, d] = uc(a, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    i.useEffect(() => {
      const u = mt(r.current);
      s.current = l === "mounted" ? u : "none";
    }, [l]),
    re(() => {
      const u = r.current,
        f = o.current;
      if (f !== e) {
        const g = s.current,
          h = mt(u);
        (e
          ? d("MOUNT")
          : h === "none" || u?.display === "none"
            ? d("UNMOUNT")
            : d(f && g !== h ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e));
      }
    }, [e, d]),
    re(() => {
      if (t) {
        let u;
        const f = t.ownerDocument.defaultView ?? window,
          p = (h) => {
            const m = mt(r.current).includes(CSS.escape(h.animationName));
            if (h.target === t && m && (d("ANIMATION_END"), !o.current)) {
              const v = t.style.animationFillMode;
              ((t.style.animationFillMode = "forwards"),
                (u = f.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = v);
                })));
            }
          },
          g = (h) => {
            h.target === t && (s.current = mt(r.current));
          };
        return (
          t.addEventListener("animationstart", g),
          t.addEventListener("animationcancel", p),
          t.addEventListener("animationend", p),
          () => {
            (f.clearTimeout(u),
              t.removeEventListener("animationstart", g),
              t.removeEventListener("animationcancel", p),
              t.removeEventListener("animationend", p));
          }
        );
      } else d("ANIMATION_END");
    }, [t, d]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(l),
      ref: i.useCallback((u) => {
        ((r.current = u ? getComputedStyle(u) : null), n(u));
      }, []),
    }
  );
}
function mt(e) {
  return e?.animationName || "none";
}
function pc(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var sn = 0;
function vo() {
  i.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? xr()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? xr()),
      sn++,
      () => {
        (sn === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          sn--);
      }
    );
  }, []);
}
function xr() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
var pe = function () {
  return (
    (pe =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var s in n)
            Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
        }
        return t;
      }),
    pe.apply(this, arguments)
  );
};
function bo(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function mc(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, s; r < o; r++)
      (s || !(r in t)) &&
        (s || (s = Array.prototype.slice.call(t, 0, r)), (s[r] = t[r]));
  return e.concat(s || Array.prototype.slice.call(t));
}
var yt = "right-scroll-bar-position",
  wt = "width-before-scroll-bar",
  hc = "with-scroll-bars-hidden",
  gc = "--removed-body-scroll-bar-size";
function an(e, t) {
  return (typeof e == "function" ? e(t) : e && (e.current = t), e);
}
function vc(e, t) {
  var n = i.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return ((n.callback = t), n.facade);
}
var bc = typeof window < "u" ? i.useLayoutEffect : i.useEffect,
  yr = new WeakMap();
function xc(e, t) {
  var n = vc(null, function (r) {
    return e.forEach(function (o) {
      return an(o, r);
    });
  });
  return (
    bc(
      function () {
        var r = yr.get(n);
        if (r) {
          var o = new Set(r),
            s = new Set(e),
            a = n.current;
          (o.forEach(function (l) {
            s.has(l) || an(l, null);
          }),
            s.forEach(function (l) {
              o.has(l) || an(l, a);
            }));
        }
        yr.set(n, e);
      },
      [e],
    ),
    n
  );
}
function yc(e) {
  return e;
}
function wc(e, t) {
  t === void 0 && (t = yc);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (s) {
        var a = t(s, r);
        return (
          n.push(a),
          function () {
            n = n.filter(function (l) {
              return l !== a;
            });
          }
        );
      },
      assignSyncMedium: function (s) {
        for (r = !0; n.length; ) {
          var a = n;
          ((n = []), a.forEach(s));
        }
        n = {
          push: function (l) {
            return s(l);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (s) {
        r = !0;
        var a = [];
        if (n.length) {
          var l = n;
          ((n = []), l.forEach(s), (a = n));
        }
        var d = function () {
            var f = a;
            ((a = []), f.forEach(s));
          },
          u = function () {
            return Promise.resolve().then(d);
          };
        (u(),
          (n = {
            push: function (f) {
              (a.push(f), u());
            },
            filter: function (f) {
              return ((a = a.filter(f)), n);
            },
          }));
      },
    };
  return o;
}
function Sc(e) {
  e === void 0 && (e = {});
  var t = wc(null);
  return ((t.options = pe({ async: !0, ssr: !1 }, e)), t);
}
var xo = function (e) {
  var t = e.sideCar,
    n = bo(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car",
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return i.createElement(r, pe({}, n));
};
xo.isSideCarExport = !0;
function Cc(e, t) {
  return (e.useMedium(t), xo);
}
var yo = Sc(),
  ln = function () {},
  Dt = i.forwardRef(function (e, t) {
    var n = i.useRef(null),
      r = i.useState({
        onScrollCapture: ln,
        onWheelCapture: ln,
        onTouchMoveCapture: ln,
      }),
      o = r[0],
      s = r[1],
      a = e.forwardProps,
      l = e.children,
      d = e.className,
      u = e.removeScrollBar,
      f = e.enabled,
      p = e.shards,
      g = e.sideCar,
      h = e.noRelative,
      b = e.noIsolation,
      m = e.inert,
      v = e.allowPinchZoom,
      y = e.as,
      x = y === void 0 ? "div" : y,
      w = e.gapMode,
      S = bo(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      R = g,
      E = xc([n, t]),
      N = pe(pe({}, S), o);
    return i.createElement(
      i.Fragment,
      null,
      f &&
        i.createElement(R, {
          sideCar: yo,
          removeScrollBar: u,
          shards: p,
          noRelative: h,
          noIsolation: b,
          inert: m,
          setCallbacks: s,
          allowPinchZoom: !!v,
          lockRef: n,
          gapMode: w,
        }),
      a
        ? i.cloneElement(i.Children.only(l), pe(pe({}, N), { ref: E }))
        : i.createElement(x, pe({}, N, { className: d, ref: E }), l),
    );
  });
Dt.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Dt.classNames = { fullWidth: wt, zeroRight: yt };
var Rc = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function Nc() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Rc();
  return (t && e.setAttribute("nonce", t), e);
}
function Ec(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function kc(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Ac = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        (e == 0 && (t = Nc()) && (Ec(t, n), kc(t)), e++);
      },
      remove: function () {
        (e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null)));
      },
    };
  },
  Pc = function () {
    var e = Ac();
    return function (t, n) {
      i.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n],
      );
    };
  },
  wo = function () {
    var e = Pc(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return (e(r, o), null);
      };
    return t;
  },
  jc = { left: 0, top: 0, right: 0, gap: 0 },
  cn = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  Tc = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [cn(n), cn(r), cn(o)];
  },
  Oc = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return jc;
    var t = Tc(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  Ic = wo(),
  Ge = "data-scroll-locked",
  _c = function (e, t, n, r) {
    var o = e.left,
      s = e.top,
      a = e.right,
      l = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          hc,
          ` {
   overflow: hidden `,
        )
        .concat(
          r,
          `;
   padding-right: `,
        )
        .concat(l, "px ")
        .concat(
          r,
          `;
  }
  body[`,
        )
        .concat(
          Ge,
          `] {
    overflow: hidden `,
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `,
                )
                .concat(
                  s,
                  `px;
    padding-right: `,
                )
                .concat(
                  a,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(l, "px ")
                .concat(
                  r,
                  `;
    `,
                ),
            n === "padding" &&
              "padding-right: ".concat(l, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`,
        )
        .concat(
          yt,
          ` {
    right: `,
        )
        .concat(l, "px ")
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(
          wt,
          ` {
    margin-right: `,
        )
        .concat(l, "px ")
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(yt, " .")
        .concat(
          yt,
          ` {
    right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(wt, " .")
        .concat(
          wt,
          ` {
    margin-right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  body[`,
        )
        .concat(
          Ge,
          `] {
    `,
        )
        .concat(gc, ": ")
        .concat(
          l,
          `px;
  }
`,
        )
    );
  },
  wr = function () {
    var e = parseInt(document.body.getAttribute(Ge) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  Mc = function () {
    i.useEffect(function () {
      return (
        document.body.setAttribute(Ge, (wr() + 1).toString()),
        function () {
          var e = wr() - 1;
          e <= 0
            ? document.body.removeAttribute(Ge)
            : document.body.setAttribute(Ge, e.toString());
        }
      );
    }, []);
  },
  Dc = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    Mc();
    var s = i.useMemo(
      function () {
        return Oc(o);
      },
      [o],
    );
    return i.createElement(Ic, { styles: _c(s, !t, o, n ? "" : "!important") });
  },
  vn = !1;
if (typeof window < "u")
  try {
    var ht = Object.defineProperty({}, "passive", {
      get: function () {
        return ((vn = !0), !0);
      },
    });
    (window.addEventListener("test", ht, ht),
      window.removeEventListener("test", ht, ht));
  } catch {
    vn = !1;
  }
var Ve = vn ? { passive: !1 } : !1,
  Lc = function (e) {
    return e.tagName === "TEXTAREA";
  },
  So = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !Lc(e) && n[t] === "visible")
    );
  },
  $c = function (e) {
    return So(e, "overflowY");
  },
  zc = function (e) {
    return So(e, "overflowX");
  },
  Sr = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = Co(e, r);
      if (o) {
        var s = Ro(e, r),
          a = s[1],
          l = s[2];
        if (a > l) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  Fc = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  Wc = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  Co = function (e, t) {
    return e === "v" ? $c(t) : zc(t);
  },
  Ro = function (e, t) {
    return e === "v" ? Fc(t) : Wc(t);
  },
  Bc = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  Vc = function (e, t, n, r, o) {
    var s = Bc(e, window.getComputedStyle(t).direction),
      a = s * r,
      l = n.target,
      d = t.contains(l),
      u = !1,
      f = a > 0,
      p = 0,
      g = 0;
    do {
      if (!l) break;
      var h = Ro(e, l),
        b = h[0],
        m = h[1],
        v = h[2],
        y = m - v - s * b;
      (b || y) && Co(e, l) && ((p += y), (g += b));
      var x = l.parentNode;
      l = x && x.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? x.host : x;
    } while ((!d && l !== document.body) || (d && (t.contains(l) || t === l)));
    return (((f && Math.abs(p) < 1) || (!f && Math.abs(g) < 1)) && (u = !0), u);
  },
  gt = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Cr = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Rr = function (e) {
    return e && "current" in e ? e.current : e;
  },
  Hc = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  Uc = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      );
  },
  Gc = 0,
  He = [];
function Kc(e) {
  var t = i.useRef([]),
    n = i.useRef([0, 0]),
    r = i.useRef(),
    o = i.useState(Gc++)[0],
    s = i.useState(wo)[0],
    a = i.useRef(e);
  (i.useEffect(
    function () {
      a.current = e;
    },
    [e],
  ),
    i.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var m = mc([e.lockRef.current], (e.shards || []).map(Rr), !0).filter(
            Boolean,
          );
          return (
            m.forEach(function (v) {
              return v.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              (document.body.classList.remove("block-interactivity-".concat(o)),
                m.forEach(function (v) {
                  return v.classList.remove("allow-interactivity-".concat(o));
                }));
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    ));
  var l = i.useCallback(function (m, v) {
      if (
        ("touches" in m && m.touches.length === 2) ||
        (m.type === "wheel" && m.ctrlKey)
      )
        return !a.current.allowPinchZoom;
      var y = gt(m),
        x = n.current,
        w = "deltaX" in m ? m.deltaX : x[0] - y[0],
        S = "deltaY" in m ? m.deltaY : x[1] - y[1],
        R,
        E = m.target,
        N = Math.abs(w) > Math.abs(S) ? "h" : "v";
      if ("touches" in m && N === "h" && E.type === "range") return !1;
      var C = window.getSelection(),
        _ = C && C.anchorNode,
        L = _ ? _ === E || _.contains(E) : !1;
      if (L) return !1;
      var F = Sr(N, E);
      if (!F) return !0;
      if ((F ? (R = N) : ((R = N === "v" ? "h" : "v"), (F = Sr(N, E))), !F))
        return !1;
      if (
        (!r.current && "changedTouches" in m && (w || S) && (r.current = R), !R)
      )
        return !0;
      var W = r.current || R;
      return Vc(W, v, m, W === "h" ? w : S);
    }, []),
    d = i.useCallback(function (m) {
      var v = m;
      if (!(!He.length || He[He.length - 1] !== s)) {
        var y = "deltaY" in v ? Cr(v) : gt(v),
          x = t.current.filter(function (R) {
            return (
              R.name === v.type &&
              (R.target === v.target || v.target === R.shadowParent) &&
              Hc(R.delta, y)
            );
          })[0];
        if (x && x.should) {
          v.cancelable && v.preventDefault();
          return;
        }
        if (!x) {
          var w = (a.current.shards || [])
              .map(Rr)
              .filter(Boolean)
              .filter(function (R) {
                return R.contains(v.target);
              }),
            S = w.length > 0 ? l(v, w[0]) : !a.current.noIsolation;
          S && v.cancelable && v.preventDefault();
        }
      }
    }, []),
    u = i.useCallback(function (m, v, y, x) {
      var w = { name: m, delta: v, target: y, should: x, shadowParent: Yc(y) };
      (t.current.push(w),
        setTimeout(function () {
          t.current = t.current.filter(function (S) {
            return S !== w;
          });
        }, 1));
    }, []),
    f = i.useCallback(function (m) {
      ((n.current = gt(m)), (r.current = void 0));
    }, []),
    p = i.useCallback(function (m) {
      u(m.type, Cr(m), m.target, l(m, e.lockRef.current));
    }, []),
    g = i.useCallback(function (m) {
      u(m.type, gt(m), m.target, l(m, e.lockRef.current));
    }, []);
  i.useEffect(function () {
    return (
      He.push(s),
      e.setCallbacks({
        onScrollCapture: p,
        onWheelCapture: p,
        onTouchMoveCapture: g,
      }),
      document.addEventListener("wheel", d, Ve),
      document.addEventListener("touchmove", d, Ve),
      document.addEventListener("touchstart", f, Ve),
      function () {
        ((He = He.filter(function (m) {
          return m !== s;
        })),
          document.removeEventListener("wheel", d, Ve),
          document.removeEventListener("touchmove", d, Ve),
          document.removeEventListener("touchstart", f, Ve));
      }
    );
  }, []);
  var h = e.removeScrollBar,
    b = e.inert;
  return i.createElement(
    i.Fragment,
    null,
    b ? i.createElement(s, { styles: Uc(o) }) : null,
    h
      ? i.createElement(Dc, { noRelative: e.noRelative, gapMode: e.gapMode })
      : null,
  );
}
function Yc(e) {
  for (var t = null; e !== null; )
    (e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
      (e = e.parentNode));
  return t;
}
const qc = Cc(yo, Kc);
var Ln = i.forwardRef(function (e, t) {
  return i.createElement(Dt, pe({}, e, { ref: t, sideCar: qc }));
});
Ln.classNames = Dt.classNames;
var Xc = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Ue = new WeakMap(),
  vt = new WeakMap(),
  bt = {},
  dn = 0,
  No = function (e) {
    return e && (e.host || No(e.parentNode));
  },
  Zc = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = No(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing",
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  Jc = function (e, t, n, r) {
    var o = Zc(t, Array.isArray(e) ? e : [e]);
    bt[n] || (bt[n] = new WeakMap());
    var s = bt[n],
      a = [],
      l = new Set(),
      d = new Set(o),
      u = function (p) {
        !p || l.has(p) || (l.add(p), u(p.parentNode));
      };
    o.forEach(u);
    var f = function (p) {
      !p ||
        d.has(p) ||
        Array.prototype.forEach.call(p.children, function (g) {
          if (l.has(g)) f(g);
          else
            try {
              var h = g.getAttribute(r),
                b = h !== null && h !== "false",
                m = (Ue.get(g) || 0) + 1,
                v = (s.get(g) || 0) + 1;
              (Ue.set(g, m),
                s.set(g, v),
                a.push(g),
                m === 1 && b && vt.set(g, !0),
                v === 1 && g.setAttribute(n, "true"),
                b || g.setAttribute(r, "true"));
            } catch (y) {
              console.error("aria-hidden: cannot operate on ", g, y);
            }
        });
    };
    return (
      f(t),
      l.clear(),
      dn++,
      function () {
        (a.forEach(function (p) {
          var g = Ue.get(p) - 1,
            h = s.get(p) - 1;
          (Ue.set(p, g),
            s.set(p, h),
            g || (vt.has(p) || p.removeAttribute(r), vt.delete(p)),
            h || p.removeAttribute(n));
        }),
          dn--,
          dn ||
            ((Ue = new WeakMap()),
            (Ue = new WeakMap()),
            (vt = new WeakMap()),
            (bt = {})));
      }
    );
  },
  Eo = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = Xc(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))),
        Jc(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  };
function Qc(e) {
  const t = ed(e),
    n = i.forwardRef((r, o) => {
      const { children: s, ...a } = r,
        l = i.Children.toArray(s),
        d = l.find(nd);
      if (d) {
        const u = d.props.children,
          f = l.map((p) =>
            p === d
              ? i.Children.count(u) > 1
                ? i.Children.only(null)
                : i.isValidElement(u)
                  ? u.props.children
                  : null
              : p,
          );
        return c.jsx(t, {
          ...a,
          ref: o,
          children: i.isValidElement(u) ? i.cloneElement(u, void 0, f) : null,
        });
      }
      return c.jsx(t, { ...a, ref: o, children: s });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
function ed(e) {
  const t = i.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (i.isValidElement(o)) {
      const a = od(o),
        l = rd(s, o.props);
      return (
        o.type !== i.Fragment && (l.ref = r ? Xe(r, a) : a),
        i.cloneElement(o, l)
      );
    }
    return i.Children.count(o) > 1 ? i.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var td = Symbol("radix.slottable");
function nd(e) {
  return (
    i.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === td
  );
}
function rd(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      s = t[r];
    /^on[A-Z]/.test(r)
      ? o && s
        ? (n[r] = (...l) => {
            const d = s(...l);
            return (o(...l), d);
          })
        : o && (n[r] = o)
      : r === "style"
        ? (n[r] = { ...o, ...s })
        : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function od(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var Lt = "Dialog",
  [ko] = lt(Lt),
  [sd, ue] = ko(Lt),
  Ao = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: s,
        modal: a = !0,
      } = e,
      l = i.useRef(null),
      d = i.useRef(null),
      [u, f] = Nt({ prop: r, defaultProp: o ?? !1, onChange: s, caller: Lt });
    return c.jsx(sd, {
      scope: t,
      triggerRef: l,
      contentRef: d,
      contentId: De(),
      titleId: De(),
      descriptionId: De(),
      open: u,
      onOpenChange: f,
      onOpenToggle: i.useCallback(() => f((p) => !p), [f]),
      modal: a,
      children: n,
    });
  };
Ao.displayName = Lt;
var Po = "DialogTrigger",
  ad = i.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = ue(Po, n),
      s = J(t, o.triggerRef);
    return c.jsx(Y.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": o.open,
      "aria-controls": o.contentId,
      "data-state": Fn(o.open),
      ...r,
      ref: s,
      onClick: V(e.onClick, o.onOpenToggle),
    });
  });
ad.displayName = Po;
var $n = "DialogPortal",
  [id, jo] = ko($n, { forceMount: void 0 }),
  To = (e) => {
    const { __scopeDialog: t, forceMount: n, children: r, container: o } = e,
      s = ue($n, t);
    return c.jsx(id, {
      scope: t,
      forceMount: n,
      children: i.Children.map(r, (a) =>
        c.jsx(Je, {
          present: n || s.open,
          children: c.jsx(Mt, { asChild: !0, container: o, children: a }),
        }),
      ),
    });
  };
To.displayName = $n;
var Et = "DialogOverlay",
  Oo = i.forwardRef((e, t) => {
    const n = jo(Et, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      s = ue(Et, e.__scopeDialog);
    return s.modal
      ? c.jsx(Je, {
          present: r || s.open,
          children: c.jsx(cd, { ...o, ref: t }),
        })
      : null;
  });
Oo.displayName = Et;
var ld = Qc("DialogOverlay.RemoveScroll"),
  cd = i.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = ue(Et, n);
    return c.jsx(Ln, {
      as: ld,
      allowPinchZoom: !0,
      shards: [o.contentRef],
      children: c.jsx(Y.div, {
        "data-state": Fn(o.open),
        ...r,
        ref: t,
        style: { pointerEvents: "auto", ...r.style },
      }),
    });
  }),
  $e = "DialogContent",
  Io = i.forwardRef((e, t) => {
    const n = jo($e, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      s = ue($e, e.__scopeDialog);
    return c.jsx(Je, {
      present: r || s.open,
      children: s.modal
        ? c.jsx(dd, { ...o, ref: t })
        : c.jsx(ud, { ...o, ref: t }),
    });
  });
Io.displayName = $e;
var dd = i.forwardRef((e, t) => {
    const n = ue($e, e.__scopeDialog),
      r = i.useRef(null),
      o = J(t, n.contentRef, r);
    return (
      i.useEffect(() => {
        const s = r.current;
        if (s) return Eo(s);
      }, []),
      c.jsx(_o, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: V(e.onCloseAutoFocus, (s) => {
          (s.preventDefault(), n.triggerRef.current?.focus());
        }),
        onPointerDownOutside: V(e.onPointerDownOutside, (s) => {
          const a = s.detail.originalEvent,
            l = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || l) && s.preventDefault();
        }),
        onFocusOutside: V(e.onFocusOutside, (s) => s.preventDefault()),
      })
    );
  }),
  ud = i.forwardRef((e, t) => {
    const n = ue($e, e.__scopeDialog),
      r = i.useRef(!1),
      o = i.useRef(!1);
    return c.jsx(_o, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (s) => {
        (e.onCloseAutoFocus?.(s),
          s.defaultPrevented ||
            (r.current || n.triggerRef.current?.focus(), s.preventDefault()),
          (r.current = !1),
          (o.current = !1));
      },
      onInteractOutside: (s) => {
        (e.onInteractOutside?.(s),
          s.defaultPrevented ||
            ((r.current = !0),
            s.detail.originalEvent.type === "pointerdown" && (o.current = !0)));
        const a = s.target;
        (n.triggerRef.current?.contains(a) && s.preventDefault(),
          s.detail.originalEvent.type === "focusin" &&
            o.current &&
            s.preventDefault());
      },
    });
  }),
  _o = i.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: o,
        onCloseAutoFocus: s,
        ...a
      } = e,
      l = ue($e, n),
      d = i.useRef(null),
      u = J(t, d);
    return (
      vo(),
      c.jsxs(c.Fragment, {
        children: [
          c.jsx(Dn, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: s,
            children: c.jsx(_t, {
              role: "dialog",
              id: l.contentId,
              "aria-describedby": l.descriptionId,
              "aria-labelledby": l.titleId,
              "data-state": Fn(l.open),
              ...a,
              ref: u,
              onDismiss: () => l.onOpenChange(!1),
            }),
          }),
          c.jsxs(c.Fragment, {
            children: [
              c.jsx(fd, { titleId: l.titleId }),
              c.jsx(md, { contentRef: d, descriptionId: l.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  zn = "DialogTitle",
  Mo = i.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = ue(zn, n);
    return c.jsx(Y.h2, { id: o.titleId, ...r, ref: t });
  });
Mo.displayName = zn;
var Do = "DialogDescription",
  Lo = i.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = ue(Do, n);
    return c.jsx(Y.p, { id: o.descriptionId, ...r, ref: t });
  });
Lo.displayName = Do;
var $o = "DialogClose",
  zo = i.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = ue($o, n);
    return c.jsx(Y.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: V(e.onClick, () => o.onOpenChange(!1)),
    });
  });
zo.displayName = $o;
function Fn(e) {
  return e ? "open" : "closed";
}
var Fo = "DialogTitleWarning",
  [Dp, Wo] = _l(Fo, { contentName: $e, titleName: zn, docsSlug: "dialog" }),
  fd = ({ titleId: e }) => {
    const t = Wo(Fo),
      n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return (
      i.useEffect(() => {
        e && (document.getElementById(e) || console.error(n));
      }, [n, e]),
      null
    );
  },
  pd = "DialogDescriptionWarning",
  md = ({ contentRef: e, descriptionId: t }) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Wo(pd).contentName}}.`;
    return (
      i.useEffect(() => {
        const o = e.current?.getAttribute("aria-describedby");
        t && o && (document.getElementById(t) || console.warn(r));
      }, [r, e, t]),
      null
    );
  },
  Bo = Ao,
  Vo = To,
  $t = Oo,
  zt = Io,
  Ft = Mo,
  Wt = Lo,
  Ho = zo;
const Uo = Bo,
  hd = Vo,
  Go = i.forwardRef(({ className: e, ...t }, n) =>
    c.jsx($t, {
      className: j(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e,
      ),
      ...t,
      ref: n,
    }),
  );
Go.displayName = $t.displayName;
const gd = Tn(
    "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
    {
      variants: {
        side: {
          top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
          bottom:
            "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
          left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
          right:
            "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
        },
      },
      defaultVariants: { side: "right" },
    },
  ),
  Wn = i.forwardRef(
    ({ side: e = "right", className: t, children: n, ...r }, o) =>
      c.jsxs(hd, {
        children: [
          c.jsx(Go, {}),
          c.jsxs(zt, {
            ref: o,
            className: j(gd({ side: e }), t),
            ...r,
            children: [
              c.jsxs(Ho, {
                className:
                  "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                children: [
                  c.jsx(On, { className: "h-4 w-4" }),
                  c.jsx("span", { className: "sr-only", children: "Close" }),
                ],
              }),
              n,
            ],
          }),
        ],
      }),
  );
Wn.displayName = zt.displayName;
const Bn = ({ className: e, ...t }) =>
  c.jsx("div", {
    className: j("flex flex-col space-y-2 text-center sm:text-left", e),
    ...t,
  });
Bn.displayName = "SheetHeader";
const Vn = i.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Ft, {
    ref: n,
    className: j("text-lg font-semibold text-foreground", e),
    ...t,
  }),
);
Vn.displayName = Ft.displayName;
const Hn = i.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Wt, { ref: n, className: j("text-sm text-muted-foreground", e), ...t }),
);
Hn.displayName = Wt.displayName;
function Nr({ className: e, ...t }) {
  return c.jsx("div", {
    className: j("animate-pulse rounded-md bg-primary/10", e),
    ...t,
  });
}
const vd = ["top", "right", "bottom", "left"],
  ke = Math.min,
  oe = Math.max,
  kt = Math.round,
  xt = Math.floor,
  he = (e) => ({ x: e, y: e }),
  bd = { left: "right", right: "left", bottom: "top", top: "bottom" };
function bn(e, t, n) {
  return oe(e, ke(t, n));
}
function be(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function xe(e) {
  return e.split("-")[0];
}
function Qe(e) {
  return e.split("-")[1];
}
function Un(e) {
  return e === "x" ? "y" : "x";
}
function Gn(e) {
  return e === "y" ? "height" : "width";
}
function me(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function Kn(e) {
  return Un(me(e));
}
function xd(e, t, n) {
  n === void 0 && (n = !1);
  const r = Qe(e),
    o = Kn(e),
    s = Gn(o);
  let a =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
        ? "bottom"
        : "top";
  return (t.reference[s] > t.floating[s] && (a = At(a)), [a, At(a)]);
}
function yd(e) {
  const t = At(e);
  return [xn(e), t, xn(t)];
}
function xn(e) {
  return e.includes("start")
    ? e.replace("start", "end")
    : e.replace("end", "start");
}
const Er = ["left", "right"],
  kr = ["right", "left"],
  wd = ["top", "bottom"],
  Sd = ["bottom", "top"];
function Cd(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? kr : Er) : t ? Er : kr;
    case "left":
    case "right":
      return t ? wd : Sd;
    default:
      return [];
  }
}
function Rd(e, t, n, r) {
  const o = Qe(e);
  let s = Cd(xe(e), n === "start", r);
  return (
    o && ((s = s.map((a) => a + "-" + o)), t && (s = s.concat(s.map(xn)))),
    s
  );
}
function At(e) {
  const t = xe(e);
  return bd[t] + e.slice(t.length);
}
function Nd(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Ko(e) {
  return typeof e != "number"
    ? Nd(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Pt(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function Ar(e, t, n) {
  let { reference: r, floating: o } = e;
  const s = me(t),
    a = Kn(t),
    l = Gn(a),
    d = xe(t),
    u = s === "y",
    f = r.x + r.width / 2 - o.width / 2,
    p = r.y + r.height / 2 - o.height / 2,
    g = r[l] / 2 - o[l] / 2;
  let h;
  switch (d) {
    case "top":
      h = { x: f, y: r.y - o.height };
      break;
    case "bottom":
      h = { x: f, y: r.y + r.height };
      break;
    case "right":
      h = { x: r.x + r.width, y: p };
      break;
    case "left":
      h = { x: r.x - o.width, y: p };
      break;
    default:
      h = { x: r.x, y: r.y };
  }
  switch (Qe(t)) {
    case "start":
      h[a] -= g * (n && u ? -1 : 1);
      break;
    case "end":
      h[a] += g * (n && u ? -1 : 1);
      break;
  }
  return h;
}
async function Ed(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: s, rects: a, elements: l, strategy: d } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: f = "viewport",
      elementContext: p = "floating",
      altBoundary: g = !1,
      padding: h = 0,
    } = be(t, e),
    b = Ko(h),
    v = l[g ? (p === "floating" ? "reference" : "floating") : p],
    y = Pt(
      await s.getClippingRect({
        element:
          (n = await (s.isElement == null ? void 0 : s.isElement(v))) == null ||
          n
            ? v
            : v.contextElement ||
              (await (s.getDocumentElement == null
                ? void 0
                : s.getDocumentElement(l.floating))),
        boundary: u,
        rootBoundary: f,
        strategy: d,
      }),
    ),
    x =
      p === "floating"
        ? { x: r, y: o, width: a.floating.width, height: a.floating.height }
        : a.reference,
    w = await (s.getOffsetParent == null
      ? void 0
      : s.getOffsetParent(l.floating)),
    S = (await (s.isElement == null ? void 0 : s.isElement(w)))
      ? (await (s.getScale == null ? void 0 : s.getScale(w))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    R = Pt(
      s.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: l,
            rect: x,
            offsetParent: w,
            strategy: d,
          })
        : x,
    );
  return {
    top: (y.top - R.top + b.top) / S.y,
    bottom: (R.bottom - y.bottom + b.bottom) / S.y,
    left: (y.left - R.left + b.left) / S.x,
    right: (R.right - y.right + b.right) / S.x,
  };
}
const kd = 50,
  Ad = async (e, t, n) => {
    const {
        placement: r = "bottom",
        strategy: o = "absolute",
        middleware: s = [],
        platform: a,
      } = n,
      l = a.detectOverflow ? a : { ...a, detectOverflow: Ed },
      d = await (a.isRTL == null ? void 0 : a.isRTL(t));
    let u = await a.getElementRects({ reference: e, floating: t, strategy: o }),
      { x: f, y: p } = Ar(u, r, d),
      g = r,
      h = 0;
    const b = {};
    for (let m = 0; m < s.length; m++) {
      const v = s[m];
      if (!v) continue;
      const { name: y, fn: x } = v,
        {
          x: w,
          y: S,
          data: R,
          reset: E,
        } = await x({
          x: f,
          y: p,
          initialPlacement: r,
          placement: g,
          strategy: o,
          middlewareData: b,
          rects: u,
          platform: l,
          elements: { reference: e, floating: t },
        });
      ((f = w ?? f),
        (p = S ?? p),
        (b[y] = { ...b[y], ...R }),
        E &&
          h < kd &&
          (h++,
          typeof E == "object" &&
            (E.placement && (g = E.placement),
            E.rects &&
              (u =
                E.rects === !0
                  ? await a.getElementRects({
                      reference: e,
                      floating: t,
                      strategy: o,
                    })
                  : E.rects),
            ({ x: f, y: p } = Ar(u, g, d))),
          (m = -1)));
    }
    return { x: f, y: p, placement: g, strategy: o, middlewareData: b };
  },
  Pd = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: s,
          platform: a,
          elements: l,
          middlewareData: d,
        } = t,
        { element: u, padding: f = 0 } = be(e, t) || {};
      if (u == null) return {};
      const p = Ko(f),
        g = { x: n, y: r },
        h = Kn(o),
        b = Gn(h),
        m = await a.getDimensions(u),
        v = h === "y",
        y = v ? "top" : "left",
        x = v ? "bottom" : "right",
        w = v ? "clientHeight" : "clientWidth",
        S = s.reference[b] + s.reference[h] - g[h] - s.floating[b],
        R = g[h] - s.reference[h],
        E = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
      let N = E ? E[w] : 0;
      (!N || !(await (a.isElement == null ? void 0 : a.isElement(E)))) &&
        (N = l.floating[w] || s.floating[b]);
      const C = S / 2 - R / 2,
        _ = N / 2 - m[b] / 2 - 1,
        L = ke(p[y], _),
        F = ke(p[x], _),
        W = L,
        B = N - m[b] - F,
        $ = N / 2 - m[b] / 2 + C,
        H = bn(W, $, B),
        I =
          !d.arrow &&
          Qe(o) != null &&
          $ !== H &&
          s.reference[b] / 2 - ($ < W ? L : F) - m[b] / 2 < 0,
        D = I ? ($ < W ? $ - W : $ - B) : 0;
      return {
        [h]: g[h] + D,
        data: {
          [h]: H,
          centerOffset: $ - H - D,
          ...(I && { alignmentOffset: D }),
        },
        reset: I,
      };
    },
  }),
  jd = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: s,
              rects: a,
              initialPlacement: l,
              platform: d,
              elements: u,
            } = t,
            {
              mainAxis: f = !0,
              crossAxis: p = !0,
              fallbackPlacements: g,
              fallbackStrategy: h = "bestFit",
              fallbackAxisSideDirection: b = "none",
              flipAlignment: m = !0,
              ...v
            } = be(e, t);
          if ((n = s.arrow) != null && n.alignmentOffset) return {};
          const y = xe(o),
            x = me(l),
            w = xe(l) === l,
            S = await (d.isRTL == null ? void 0 : d.isRTL(u.floating)),
            R = g || (w || !m ? [At(l)] : yd(l)),
            E = b !== "none";
          !g && E && R.push(...Rd(l, m, b, S));
          const N = [l, ...R],
            C = await d.detectOverflow(t, v),
            _ = [];
          let L = ((r = s.flip) == null ? void 0 : r.overflows) || [];
          if ((f && _.push(C[y]), p)) {
            const $ = xd(o, a, S);
            _.push(C[$[0]], C[$[1]]);
          }
          if (
            ((L = [...L, { placement: o, overflows: _ }]),
            !_.every(($) => $ <= 0))
          ) {
            var F, W;
            const $ = (((F = s.flip) == null ? void 0 : F.index) || 0) + 1,
              H = N[$];
            if (
              H &&
              (!(p === "alignment" ? x !== me(H) : !1) ||
                L.every((O) =>
                  me(O.placement) === x ? O.overflows[0] > 0 : !0,
                ))
            )
              return {
                data: { index: $, overflows: L },
                reset: { placement: H },
              };
            let I =
              (W = L.filter((D) => D.overflows[0] <= 0).sort(
                (D, O) => D.overflows[1] - O.overflows[1],
              )[0]) == null
                ? void 0
                : W.placement;
            if (!I)
              switch (h) {
                case "bestFit": {
                  var B;
                  const D =
                    (B = L.filter((O) => {
                      if (E) {
                        const U = me(O.placement);
                        return U === x || U === "y";
                      }
                      return !0;
                    })
                      .map((O) => [
                        O.placement,
                        O.overflows
                          .filter((U) => U > 0)
                          .reduce((U, k) => U + k, 0),
                      ])
                      .sort((O, U) => O[1] - U[1])[0]) == null
                      ? void 0
                      : B[0];
                  D && (I = D);
                  break;
                }
                case "initialPlacement":
                  I = l;
                  break;
              }
            if (o !== I) return { reset: { placement: I } };
          }
          return {};
        },
      }
    );
  };
function Pr(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function jr(e) {
  return vd.some((t) => e[t] >= 0);
}
const Td = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: n, platform: r } = t,
            { strategy: o = "referenceHidden", ...s } = be(e, t);
          switch (o) {
            case "referenceHidden": {
              const a = await r.detectOverflow(t, {
                  ...s,
                  elementContext: "reference",
                }),
                l = Pr(a, n.reference);
              return {
                data: { referenceHiddenOffsets: l, referenceHidden: jr(l) },
              };
            }
            case "escaped": {
              const a = await r.detectOverflow(t, { ...s, altBoundary: !0 }),
                l = Pr(a, n.floating);
              return { data: { escapedOffsets: l, escaped: jr(l) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  Yo = new Set(["left", "top"]);
async function Od(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    a = xe(n),
    l = Qe(n),
    d = me(n) === "y",
    u = Yo.has(a) ? -1 : 1,
    f = s && d ? -1 : 1,
    p = be(t, e);
  let {
    mainAxis: g,
    crossAxis: h,
    alignmentAxis: b,
  } = typeof p == "number"
    ? { mainAxis: p, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: p.mainAxis || 0,
        crossAxis: p.crossAxis || 0,
        alignmentAxis: p.alignmentAxis,
      };
  return (
    l && typeof b == "number" && (h = l === "end" ? b * -1 : b),
    d ? { x: h * f, y: g * u } : { x: g * u, y: h * f }
  );
}
const Id = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: s, placement: a, middlewareData: l } = t,
            d = await Od(t, e);
          return a === ((n = l.offset) == null ? void 0 : n.placement) &&
            (r = l.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + d.x, y: s + d.y, data: { ...d, placement: a } };
        },
      }
    );
  },
  _d = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o, platform: s } = t,
            {
              mainAxis: a = !0,
              crossAxis: l = !1,
              limiter: d = {
                fn: (y) => {
                  let { x, y: w } = y;
                  return { x, y: w };
                },
              },
              ...u
            } = be(e, t),
            f = { x: n, y: r },
            p = await s.detectOverflow(t, u),
            g = me(xe(o)),
            h = Un(g);
          let b = f[h],
            m = f[g];
          if (a) {
            const y = h === "y" ? "top" : "left",
              x = h === "y" ? "bottom" : "right",
              w = b + p[y],
              S = b - p[x];
            b = bn(w, b, S);
          }
          if (l) {
            const y = g === "y" ? "top" : "left",
              x = g === "y" ? "bottom" : "right",
              w = m + p[y],
              S = m - p[x];
            m = bn(w, m, S);
          }
          const v = d.fn({ ...t, [h]: b, [g]: m });
          return {
            ...v,
            data: { x: v.x - n, y: v.y - r, enabled: { [h]: a, [g]: l } },
          };
        },
      }
    );
  },
  Md = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: s, middlewareData: a } = t,
            { offset: l = 0, mainAxis: d = !0, crossAxis: u = !0 } = be(e, t),
            f = { x: n, y: r },
            p = me(o),
            g = Un(p);
          let h = f[g],
            b = f[p];
          const m = be(l, t),
            v =
              typeof m == "number"
                ? { mainAxis: m, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...m };
          if (d) {
            const w = g === "y" ? "height" : "width",
              S = s.reference[g] - s.floating[w] + v.mainAxis,
              R = s.reference[g] + s.reference[w] - v.mainAxis;
            h < S ? (h = S) : h > R && (h = R);
          }
          if (u) {
            var y, x;
            const w = g === "y" ? "width" : "height",
              S = Yo.has(xe(o)),
              R =
                s.reference[p] -
                s.floating[w] +
                ((S && ((y = a.offset) == null ? void 0 : y[p])) || 0) +
                (S ? 0 : v.crossAxis),
              E =
                s.reference[p] +
                s.reference[w] +
                (S ? 0 : ((x = a.offset) == null ? void 0 : x[p]) || 0) -
                (S ? v.crossAxis : 0);
            b < R ? (b = R) : b > E && (b = E);
          }
          return { [g]: h, [p]: b };
        },
      }
    );
  },
  Dd = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: s, platform: a, elements: l } = t,
            { apply: d = () => {}, ...u } = be(e, t),
            f = await a.detectOverflow(t, u),
            p = xe(o),
            g = Qe(o),
            h = me(o) === "y",
            { width: b, height: m } = s.floating;
          let v, y;
          p === "top" || p === "bottom"
            ? ((v = p),
              (y =
                g ===
                ((await (a.isRTL == null ? void 0 : a.isRTL(l.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((y = p), (v = g === "end" ? "top" : "bottom"));
          const x = m - f.top - f.bottom,
            w = b - f.left - f.right,
            S = ke(m - f[v], x),
            R = ke(b - f[y], w),
            E = !t.middlewareData.shift;
          let N = S,
            C = R;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (C = w),
            (r = t.middlewareData.shift) != null && r.enabled.y && (N = x),
            E && !g)
          ) {
            const L = oe(f.left, 0),
              F = oe(f.right, 0),
              W = oe(f.top, 0),
              B = oe(f.bottom, 0);
            h
              ? (C = b - 2 * (L !== 0 || F !== 0 ? L + F : oe(f.left, f.right)))
              : (N =
                  m - 2 * (W !== 0 || B !== 0 ? W + B : oe(f.top, f.bottom)));
          }
          await d({ ...t, availableWidth: C, availableHeight: N });
          const _ = await a.getDimensions(l.floating);
          return b !== _.width || m !== _.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Bt() {
  return typeof window < "u";
}
function et(e) {
  return qo(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function se(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function ge(e) {
  var t;
  return (t = (qo(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function qo(e) {
  return Bt() ? e instanceof Node || e instanceof se(e).Node : !1;
}
function ce(e) {
  return Bt() ? e instanceof Element || e instanceof se(e).Element : !1;
}
function ye(e) {
  return Bt() ? e instanceof HTMLElement || e instanceof se(e).HTMLElement : !1;
}
function Tr(e) {
  return !Bt() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof se(e).ShadowRoot;
}
function ct(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = de(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    o !== "inline" &&
    o !== "contents"
  );
}
function Ld(e) {
  return /^(table|td|th)$/.test(et(e));
}
function Vt(e) {
  try {
    if (e.matches(":popover-open")) return !0;
  } catch {}
  try {
    return e.matches(":modal");
  } catch {
    return !1;
  }
}
const $d = /transform|translate|scale|rotate|perspective|filter/,
  zd = /paint|layout|strict|content/,
  _e = (e) => !!e && e !== "none";
let un;
function Yn(e) {
  const t = ce(e) ? de(e) : e;
  return (
    _e(t.transform) ||
    _e(t.translate) ||
    _e(t.scale) ||
    _e(t.rotate) ||
    _e(t.perspective) ||
    (!qn() && (_e(t.backdropFilter) || _e(t.filter))) ||
    $d.test(t.willChange || "") ||
    zd.test(t.contain || "")
  );
}
function Fd(e) {
  let t = Ae(e);
  for (; ye(t) && !Ye(t); ) {
    if (Yn(t)) return t;
    if (Vt(t)) return null;
    t = Ae(t);
  }
  return null;
}
function qn() {
  return (
    un == null &&
      (un =
        typeof CSS < "u" &&
        CSS.supports &&
        CSS.supports("-webkit-backdrop-filter", "none")),
    un
  );
}
function Ye(e) {
  return /^(html|body|#document)$/.test(et(e));
}
function de(e) {
  return se(e).getComputedStyle(e);
}
function Ht(e) {
  return ce(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Ae(e) {
  if (et(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Tr(e) && e.host) || ge(e);
  return Tr(t) ? t.host : t;
}
function Xo(e) {
  const t = Ae(e);
  return Ye(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : ye(t) && ct(t)
      ? t
      : Xo(t);
}
function at(e, t, n) {
  var r;
  (t === void 0 && (t = []), n === void 0 && (n = !0));
  const o = Xo(e),
    s = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    a = se(o);
  if (s) {
    const l = yn(a);
    return t.concat(
      a,
      a.visualViewport || [],
      ct(o) ? o : [],
      l && n ? at(l) : [],
    );
  } else return t.concat(o, at(o, [], n));
}
function yn(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Zo(e) {
  const t = de(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = ye(e),
    s = o ? e.offsetWidth : n,
    a = o ? e.offsetHeight : r,
    l = kt(n) !== s || kt(r) !== a;
  return (l && ((n = s), (r = a)), { width: n, height: r, $: l });
}
function Xn(e) {
  return ce(e) ? e : e.contextElement;
}
function Ke(e) {
  const t = Xn(e);
  if (!ye(t)) return he(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: s } = Zo(t);
  let a = (s ? kt(n.width) : n.width) / r,
    l = (s ? kt(n.height) : n.height) / o;
  return (
    (!a || !Number.isFinite(a)) && (a = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    { x: a, y: l }
  );
}
const Wd = he(0);
function Jo(e) {
  const t = se(e);
  return !qn() || !t.visualViewport
    ? Wd
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function Bd(e, t, n) {
  return (t === void 0 && (t = !1), !n || (t && n !== se(e)) ? !1 : t);
}
function ze(e, t, n, r) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  const o = e.getBoundingClientRect(),
    s = Xn(e);
  let a = he(1);
  t && (r ? ce(r) && (a = Ke(r)) : (a = Ke(e)));
  const l = Bd(s, n, r) ? Jo(s) : he(0);
  let d = (o.left + l.x) / a.x,
    u = (o.top + l.y) / a.y,
    f = o.width / a.x,
    p = o.height / a.y;
  if (s) {
    const g = se(s),
      h = r && ce(r) ? se(r) : r;
    let b = g,
      m = yn(b);
    for (; m && r && h !== b; ) {
      const v = Ke(m),
        y = m.getBoundingClientRect(),
        x = de(m),
        w = y.left + (m.clientLeft + parseFloat(x.paddingLeft)) * v.x,
        S = y.top + (m.clientTop + parseFloat(x.paddingTop)) * v.y;
      ((d *= v.x),
        (u *= v.y),
        (f *= v.x),
        (p *= v.y),
        (d += w),
        (u += S),
        (b = se(m)),
        (m = yn(b)));
    }
  }
  return Pt({ width: f, height: p, x: d, y: u });
}
function Ut(e, t) {
  const n = Ht(e).scrollLeft;
  return t ? t.left + n : ze(ge(e)).left + n;
}
function Qo(e, t) {
  const n = e.getBoundingClientRect(),
    r = n.left + t.scrollLeft - Ut(e, n),
    o = n.top + t.scrollTop;
  return { x: r, y: o };
}
function Vd(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const s = o === "fixed",
    a = ge(r),
    l = t ? Vt(t.floating) : !1;
  if (r === a || (l && s)) return n;
  let d = { scrollLeft: 0, scrollTop: 0 },
    u = he(1);
  const f = he(0),
    p = ye(r);
  if ((p || (!p && !s)) && ((et(r) !== "body" || ct(a)) && (d = Ht(r)), p)) {
    const h = ze(r);
    ((u = Ke(r)), (f.x = h.x + r.clientLeft), (f.y = h.y + r.clientTop));
  }
  const g = a && !p && !s ? Qo(a, d) : he(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - d.scrollLeft * u.x + f.x + g.x,
    y: n.y * u.y - d.scrollTop * u.y + f.y + g.y,
  };
}
function Hd(e) {
  return Array.from(e.getClientRects());
}
function Ud(e) {
  const t = ge(e),
    n = Ht(e),
    r = e.ownerDocument.body,
    o = oe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    s = oe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + Ut(e);
  const l = -n.scrollTop;
  return (
    de(r).direction === "rtl" && (a += oe(t.clientWidth, r.clientWidth) - o),
    { width: o, height: s, x: a, y: l }
  );
}
const Or = 25;
function Gd(e, t) {
  const n = se(e),
    r = ge(e),
    o = n.visualViewport;
  let s = r.clientWidth,
    a = r.clientHeight,
    l = 0,
    d = 0;
  if (o) {
    ((s = o.width), (a = o.height));
    const f = qn();
    (!f || (f && t === "fixed")) && ((l = o.offsetLeft), (d = o.offsetTop));
  }
  const u = Ut(r);
  if (u <= 0) {
    const f = r.ownerDocument,
      p = f.body,
      g = getComputedStyle(p),
      h =
        (f.compatMode === "CSS1Compat" &&
          parseFloat(g.marginLeft) + parseFloat(g.marginRight)) ||
        0,
      b = Math.abs(r.clientWidth - p.clientWidth - h);
    b <= Or && (s -= b);
  } else u <= Or && (s += u);
  return { width: s, height: a, x: l, y: d };
}
function Kd(e, t) {
  const n = ze(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    s = ye(e) ? Ke(e) : he(1),
    a = e.clientWidth * s.x,
    l = e.clientHeight * s.y,
    d = o * s.x,
    u = r * s.y;
  return { width: a, height: l, x: d, y: u };
}
function Ir(e, t, n) {
  let r;
  if (t === "viewport") r = Gd(e, n);
  else if (t === "document") r = Ud(ge(e));
  else if (ce(t)) r = Kd(t, n);
  else {
    const o = Jo(e);
    r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return Pt(r);
}
function es(e, t) {
  const n = Ae(e);
  return n === t || !ce(n) || Ye(n)
    ? !1
    : de(n).position === "fixed" || es(n, t);
}
function Yd(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = at(e, [], !1).filter((l) => ce(l) && et(l) !== "body"),
    o = null;
  const s = de(e).position === "fixed";
  let a = s ? Ae(e) : e;
  for (; ce(a) && !Ye(a); ) {
    const l = de(a),
      d = Yn(a);
    (!d && l.position === "fixed" && (o = null),
      (
        s
          ? !d && !o
          : (!d &&
              l.position === "static" &&
              !!o &&
              (o.position === "absolute" || o.position === "fixed")) ||
            (ct(a) && !d && es(e, a))
      )
        ? (r = r.filter((f) => f !== a))
        : (o = l),
      (a = Ae(a)));
  }
  return (t.set(e, r), r);
}
function qd(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const a = [
      ...(n === "clippingAncestors"
        ? Vt(t)
          ? []
          : Yd(t, this._c)
        : [].concat(n)),
      r,
    ],
    l = Ir(t, a[0], o);
  let d = l.top,
    u = l.right,
    f = l.bottom,
    p = l.left;
  for (let g = 1; g < a.length; g++) {
    const h = Ir(t, a[g], o);
    ((d = oe(h.top, d)),
      (u = ke(h.right, u)),
      (f = ke(h.bottom, f)),
      (p = oe(h.left, p)));
  }
  return { width: u - p, height: f - d, x: p, y: d };
}
function Xd(e) {
  const { width: t, height: n } = Zo(e);
  return { width: t, height: n };
}
function Zd(e, t, n) {
  const r = ye(t),
    o = ge(t),
    s = n === "fixed",
    a = ze(e, !0, s, t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const d = he(0);
  function u() {
    d.x = Ut(o);
  }
  if (r || (!r && !s))
    if (((et(t) !== "body" || ct(o)) && (l = Ht(t)), r)) {
      const h = ze(t, !0, s, t);
      ((d.x = h.x + t.clientLeft), (d.y = h.y + t.clientTop));
    } else o && u();
  s && !r && o && u();
  const f = o && !r && !s ? Qo(o, l) : he(0),
    p = a.left + l.scrollLeft - d.x - f.x,
    g = a.top + l.scrollTop - d.y - f.y;
  return { x: p, y: g, width: a.width, height: a.height };
}
function fn(e) {
  return de(e).position === "static";
}
function _r(e, t) {
  if (!ye(e) || de(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return (ge(e) === n && (n = n.ownerDocument.body), n);
}
function ts(e, t) {
  const n = se(e);
  if (Vt(e)) return n;
  if (!ye(e)) {
    let o = Ae(e);
    for (; o && !Ye(o); ) {
      if (ce(o) && !fn(o)) return o;
      o = Ae(o);
    }
    return n;
  }
  let r = _r(e, t);
  for (; r && Ld(r) && fn(r); ) r = _r(r, t);
  return r && Ye(r) && fn(r) && !Yn(r) ? n : r || Fd(e) || n;
}
const Jd = async function (e) {
  const t = this.getOffsetParent || ts,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: Zd(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function Qd(e) {
  return de(e).direction === "rtl";
}
const eu = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Vd,
  getDocumentElement: ge,
  getClippingRect: qd,
  getOffsetParent: ts,
  getElementRects: Jd,
  getClientRects: Hd,
  getDimensions: Xd,
  getScale: Ke,
  isElement: ce,
  isRTL: Qd,
};
function ns(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function tu(e, t) {
  let n = null,
    r;
  const o = ge(e);
  function s() {
    var l;
    (clearTimeout(r), (l = n) == null || l.disconnect(), (n = null));
  }
  function a(l, d) {
    (l === void 0 && (l = !1), d === void 0 && (d = 1), s());
    const u = e.getBoundingClientRect(),
      { left: f, top: p, width: g, height: h } = u;
    if ((l || t(), !g || !h)) return;
    const b = xt(p),
      m = xt(o.clientWidth - (f + g)),
      v = xt(o.clientHeight - (p + h)),
      y = xt(f),
      w = {
        rootMargin: -b + "px " + -m + "px " + -v + "px " + -y + "px",
        threshold: oe(0, ke(1, d)) || 1,
      };
    let S = !0;
    function R(E) {
      const N = E[0].intersectionRatio;
      if (N !== d) {
        if (!S) return a();
        N
          ? a(!1, N)
          : (r = setTimeout(() => {
              a(!1, 1e-7);
            }, 1e3));
      }
      (N === 1 && !ns(u, e.getBoundingClientRect()) && a(), (S = !1));
    }
    try {
      n = new IntersectionObserver(R, { ...w, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(R, w);
    }
    n.observe(e);
  }
  return (a(!0), s);
}
function nu(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: s = !0,
      elementResize: a = typeof ResizeObserver == "function",
      layoutShift: l = typeof IntersectionObserver == "function",
      animationFrame: d = !1,
    } = r,
    u = Xn(e),
    f = o || s ? [...(u ? at(u) : []), ...(t ? at(t) : [])] : [];
  f.forEach((y) => {
    (o && y.addEventListener("scroll", n, { passive: !0 }),
      s && y.addEventListener("resize", n));
  });
  const p = u && l ? tu(u, n) : null;
  let g = -1,
    h = null;
  a &&
    ((h = new ResizeObserver((y) => {
      let [x] = y;
      (x &&
        x.target === u &&
        h &&
        t &&
        (h.unobserve(t),
        cancelAnimationFrame(g),
        (g = requestAnimationFrame(() => {
          var w;
          (w = h) == null || w.observe(t);
        }))),
        n());
    })),
    u && !d && h.observe(u),
    t && h.observe(t));
  let b,
    m = d ? ze(e) : null;
  d && v();
  function v() {
    const y = ze(e);
    (m && !ns(m, y) && n(), (m = y), (b = requestAnimationFrame(v)));
  }
  return (
    n(),
    () => {
      var y;
      (f.forEach((x) => {
        (o && x.removeEventListener("scroll", n),
          s && x.removeEventListener("resize", n));
      }),
        p?.(),
        (y = h) == null || y.disconnect(),
        (h = null),
        d && cancelAnimationFrame(b));
    }
  );
}
const ru = Id,
  ou = _d,
  su = jd,
  au = Dd,
  iu = Td,
  Mr = Pd,
  lu = Md,
  cu = (e, t, n) => {
    const r = new Map(),
      o = { platform: eu, ...n },
      s = { ...o.platform, _c: r };
    return Ad(e, t, { ...o, platform: s });
  };
var du = typeof document < "u",
  uu = function () {},
  St = du ? i.useLayoutEffect : uu;
function jt(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!jt(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === "_owner" && e.$$typeof) && !jt(e[s], t[s])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function rs(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Dr(e, t) {
  const n = rs(e);
  return Math.round(t * n) / n;
}
function pn(e) {
  const t = i.useRef(e);
  return (
    St(() => {
      t.current = e;
    }),
    t
  );
}
function fu(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: s, floating: a } = {},
      transform: l = !0,
      whileElementsMounted: d,
      open: u,
    } = e,
    [f, p] = i.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [g, h] = i.useState(r);
  jt(g, r) || h(r);
  const [b, m] = i.useState(null),
    [v, y] = i.useState(null),
    x = i.useCallback((O) => {
      O !== E.current && ((E.current = O), m(O));
    }, []),
    w = i.useCallback((O) => {
      O !== N.current && ((N.current = O), y(O));
    }, []),
    S = s || b,
    R = a || v,
    E = i.useRef(null),
    N = i.useRef(null),
    C = i.useRef(f),
    _ = d != null,
    L = pn(d),
    F = pn(o),
    W = pn(u),
    B = i.useCallback(() => {
      if (!E.current || !N.current) return;
      const O = { placement: t, strategy: n, middleware: g };
      (F.current && (O.platform = F.current),
        cu(E.current, N.current, O).then((U) => {
          const k = { ...U, isPositioned: W.current !== !1 };
          $.current &&
            !jt(C.current, k) &&
            ((C.current = k),
            It.flushSync(() => {
              p(k);
            }));
        }));
    }, [g, t, n, F, W]);
  St(() => {
    u === !1 &&
      C.current.isPositioned &&
      ((C.current.isPositioned = !1), p((O) => ({ ...O, isPositioned: !1 })));
  }, [u]);
  const $ = i.useRef(!1);
  (St(
    () => (
      ($.current = !0),
      () => {
        $.current = !1;
      }
    ),
    [],
  ),
    St(() => {
      if ((S && (E.current = S), R && (N.current = R), S && R)) {
        if (L.current) return L.current(S, R, B);
        B();
      }
    }, [S, R, B, L, _]));
  const H = i.useMemo(
      () => ({ reference: E, floating: N, setReference: x, setFloating: w }),
      [x, w],
    ),
    I = i.useMemo(() => ({ reference: S, floating: R }), [S, R]),
    D = i.useMemo(() => {
      const O = { position: n, left: 0, top: 0 };
      if (!I.floating) return O;
      const U = Dr(I.floating, f.x),
        k = Dr(I.floating, f.y);
      return l
        ? {
            ...O,
            transform: "translate(" + U + "px, " + k + "px)",
            ...(rs(I.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: U, top: k };
    }, [n, l, I.floating, f.x, f.y]);
  return i.useMemo(
    () => ({ ...f, update: B, refs: H, elements: I, floatingStyles: D }),
    [f, B, H, I, D],
  );
}
const pu = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? Mr({ element: r.current, padding: o }).fn(n)
            : {}
          : r
            ? Mr({ element: r, padding: o }).fn(n)
            : {};
      },
    };
  },
  mu = (e, t) => {
    const n = ru(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  hu = (e, t) => {
    const n = ou(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  gu = (e, t) => ({ fn: lu(e).fn, options: [e, t] }),
  vu = (e, t) => {
    const n = su(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  bu = (e, t) => {
    const n = au(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  xu = (e, t) => {
    const n = iu(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  },
  yu = (e, t) => {
    const n = pu(e);
    return { name: n.name, fn: n.fn, options: [e, t] };
  };
var wu = "Arrow",
  os = i.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...s } = e;
    return c.jsx(Y.svg, {
      ...s,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : c.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
os.displayName = wu;
var Su = os;
function Cu(e) {
  const [t, n] = i.useState(void 0);
  return (
    re(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const s = o[0];
          let a, l;
          if ("borderBoxSize" in s) {
            const d = s.borderBoxSize,
              u = Array.isArray(d) ? d[0] : d;
            ((a = u.inlineSize), (l = u.blockSize));
          } else ((a = e.offsetWidth), (l = e.offsetHeight));
          n({ width: a, height: l });
        });
        return (r.observe(e, { box: "border-box" }), () => r.unobserve(e));
      } else n(void 0);
    }, [e]),
    t
  );
}
var Zn = "Popper",
  [ss, Gt] = lt(Zn),
  [Ru, as] = ss(Zn),
  is = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, o] = i.useState(null);
    return c.jsx(Ru, { scope: t, anchor: r, onAnchorChange: o, children: n });
  };
is.displayName = Zn;
var ls = "PopperAnchor",
  cs = i.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      s = as(ls, n),
      a = i.useRef(null),
      l = J(t, a),
      d = i.useRef(null);
    return (
      i.useEffect(() => {
        const u = d.current;
        ((d.current = r?.current || a.current),
          u !== d.current && s.onAnchorChange(d.current));
      }),
      r ? null : c.jsx(Y.div, { ...o, ref: l })
    );
  });
cs.displayName = ls;
var Jn = "PopperContent",
  [Nu, Eu] = ss(Jn),
  ds = i.forwardRef((e, t) => {
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: s = "center",
        alignOffset: a = 0,
        arrowPadding: l = 0,
        avoidCollisions: d = !0,
        collisionBoundary: u = [],
        collisionPadding: f = 0,
        sticky: p = "partial",
        hideWhenDetached: g = !1,
        updatePositionStrategy: h = "optimized",
        onPlaced: b,
        ...m
      } = e,
      v = as(Jn, n),
      [y, x] = i.useState(null),
      w = J(t, (T) => x(T)),
      [S, R] = i.useState(null),
      E = Cu(S),
      N = E?.width ?? 0,
      C = E?.height ?? 0,
      _ = r + (s !== "center" ? "-" + s : ""),
      L =
        typeof f == "number"
          ? f
          : { top: 0, right: 0, bottom: 0, left: 0, ...f },
      F = Array.isArray(u) ? u : [u],
      W = F.length > 0,
      B = { padding: L, boundary: F.filter(Au), altBoundary: W },
      {
        refs: $,
        floatingStyles: H,
        placement: I,
        isPositioned: D,
        middlewareData: O,
      } = fu({
        strategy: "fixed",
        placement: _,
        whileElementsMounted: (...T) =>
          nu(...T, { animationFrame: h === "always" }),
        elements: { reference: v.anchor },
        middleware: [
          mu({ mainAxis: o + C, alignmentAxis: a }),
          d &&
            hu({
              mainAxis: !0,
              crossAxis: !1,
              limiter: p === "partial" ? gu() : void 0,
              ...B,
            }),
          d && vu({ ...B }),
          bu({
            ...B,
            apply: ({
              elements: T,
              rects: q,
              availableWidth: z,
              availableHeight: K,
            }) => {
              const { width: G, height: X } = q.reference,
                ne = T.floating.style;
              (ne.setProperty("--radix-popper-available-width", `${z}px`),
                ne.setProperty("--radix-popper-available-height", `${K}px`),
                ne.setProperty("--radix-popper-anchor-width", `${G}px`),
                ne.setProperty("--radix-popper-anchor-height", `${X}px`));
            },
          }),
          S && yu({ element: S, padding: l }),
          Pu({ arrowWidth: N, arrowHeight: C }),
          g && xu({ strategy: "referenceHidden", ...B }),
        ],
      }),
      [U, k] = ps(I),
      fe = Le(b);
    re(() => {
      D && fe?.();
    }, [D, fe]);
    const we = O.arrow?.x,
      Se = O.arrow?.y,
      ae = O.arrow?.centerOffset !== 0,
      [ee, Z] = i.useState();
    return (
      re(() => {
        y && Z(window.getComputedStyle(y).zIndex);
      }, [y]),
      c.jsx("div", {
        ref: $.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...H,
          transform: D ? H.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: ee,
          "--radix-popper-transform-origin": [
            O.transformOrigin?.x,
            O.transformOrigin?.y,
          ].join(" "),
          ...(O.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: c.jsx(Nu, {
          scope: n,
          placedSide: U,
          onArrowChange: R,
          arrowX: we,
          arrowY: Se,
          shouldHideArrow: ae,
          children: c.jsx(Y.div, {
            "data-side": U,
            "data-align": k,
            ...m,
            ref: w,
            style: { ...m.style, animation: D ? void 0 : "none" },
          }),
        }),
      })
    );
  });
ds.displayName = Jn;
var us = "PopperArrow",
  ku = { top: "bottom", right: "left", bottom: "top", left: "right" },
  fs = i.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      s = Eu(us, r),
      a = ku[s.placedSide];
    return c.jsx("span", {
      ref: s.onArrowChange,
      style: {
        position: "absolute",
        left: s.arrowX,
        top: s.arrowY,
        [a]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[s.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[s.placedSide],
        visibility: s.shouldHideArrow ? "hidden" : void 0,
      },
      children: c.jsx(Su, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
fs.displayName = us;
function Au(e) {
  return e !== null;
}
var Pu = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t,
      a = o.arrow?.centerOffset !== 0,
      l = a ? 0 : e.arrowWidth,
      d = a ? 0 : e.arrowHeight,
      [u, f] = ps(n),
      p = { start: "0%", center: "50%", end: "100%" }[f],
      g = (o.arrow?.x ?? 0) + l / 2,
      h = (o.arrow?.y ?? 0) + d / 2;
    let b = "",
      m = "";
    return (
      u === "bottom"
        ? ((b = a ? p : `${g}px`), (m = `${-d}px`))
        : u === "top"
          ? ((b = a ? p : `${g}px`), (m = `${r.floating.height + d}px`))
          : u === "right"
            ? ((b = `${-d}px`), (m = a ? p : `${h}px`))
            : u === "left" &&
              ((b = `${r.floating.width + d}px`), (m = a ? p : `${h}px`)),
      { data: { x: b, y: m } }
    );
  },
});
function ps(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var ms = is,
  hs = cs,
  gs = ds,
  vs = fs,
  ju = Symbol("radix.slottable");
function Tu(e) {
  const t = ({ children: n }) => c.jsx(c.Fragment, { children: n });
  return ((t.displayName = `${e}.Slottable`), (t.__radixId = ju), t);
}
var bs = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  Ou = "VisuallyHidden",
  xs = i.forwardRef((e, t) =>
    c.jsx(Y.span, { ...e, ref: t, style: { ...bs, ...e.style } }),
  );
xs.displayName = Ou;
var Iu = xs,
  [Kt] = lt("Tooltip", [Gt]),
  Yt = Gt(),
  ys = "TooltipProvider",
  _u = 700,
  wn = "tooltip.open",
  [Mu, Qn] = Kt(ys),
  ws = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = _u,
        skipDelayDuration: r = 300,
        disableHoverableContent: o = !1,
        children: s,
      } = e,
      a = i.useRef(!0),
      l = i.useRef(!1),
      d = i.useRef(0);
    return (
      i.useEffect(() => {
        const u = d.current;
        return () => window.clearTimeout(u);
      }, []),
      c.jsx(Mu, {
        scope: t,
        isOpenDelayedRef: a,
        delayDuration: n,
        onOpen: i.useCallback(() => {
          (window.clearTimeout(d.current), (a.current = !1));
        }, []),
        onClose: i.useCallback(() => {
          (window.clearTimeout(d.current),
            (d.current = window.setTimeout(() => (a.current = !0), r)));
        }, [r]),
        isPointerInTransitRef: l,
        onPointerInTransitChange: i.useCallback((u) => {
          l.current = u;
        }, []),
        disableHoverableContent: o,
        children: s,
      })
    );
  };
ws.displayName = ys;
var it = "Tooltip",
  [Du, dt] = Kt(it),
  Ss = (e) => {
    const {
        __scopeTooltip: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: s,
        disableHoverableContent: a,
        delayDuration: l,
      } = e,
      d = Qn(it, e.__scopeTooltip),
      u = Yt(t),
      [f, p] = i.useState(null),
      g = De(),
      h = i.useRef(0),
      b = a ?? d.disableHoverableContent,
      m = l ?? d.delayDuration,
      v = i.useRef(!1),
      [y, x] = Nt({
        prop: r,
        defaultProp: o ?? !1,
        onChange: (N) => {
          (N
            ? (d.onOpen(), document.dispatchEvent(new CustomEvent(wn)))
            : d.onClose(),
            s?.(N));
        },
        caller: it,
      }),
      w = i.useMemo(
        () => (y ? (v.current ? "delayed-open" : "instant-open") : "closed"),
        [y],
      ),
      S = i.useCallback(() => {
        (window.clearTimeout(h.current),
          (h.current = 0),
          (v.current = !1),
          x(!0));
      }, [x]),
      R = i.useCallback(() => {
        (window.clearTimeout(h.current), (h.current = 0), x(!1));
      }, [x]),
      E = i.useCallback(() => {
        (window.clearTimeout(h.current),
          (h.current = window.setTimeout(() => {
            ((v.current = !0), x(!0), (h.current = 0));
          }, m)));
      }, [m, x]);
    return (
      i.useEffect(
        () => () => {
          h.current && (window.clearTimeout(h.current), (h.current = 0));
        },
        [],
      ),
      c.jsx(ms, {
        ...u,
        children: c.jsx(Du, {
          scope: t,
          contentId: g,
          open: y,
          stateAttribute: w,
          trigger: f,
          onTriggerChange: p,
          onTriggerEnter: i.useCallback(() => {
            d.isOpenDelayedRef.current ? E() : S();
          }, [d.isOpenDelayedRef, E, S]),
          onTriggerLeave: i.useCallback(() => {
            b ? R() : (window.clearTimeout(h.current), (h.current = 0));
          }, [R, b]),
          onOpen: S,
          onClose: R,
          disableHoverableContent: b,
          children: n,
        }),
      })
    );
  };
Ss.displayName = it;
var Sn = "TooltipTrigger",
  Cs = i.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = dt(Sn, n),
      s = Qn(Sn, n),
      a = Yt(n),
      l = i.useRef(null),
      d = J(t, l, o.onTriggerChange),
      u = i.useRef(!1),
      f = i.useRef(!1),
      p = i.useCallback(() => (u.current = !1), []);
    return (
      i.useEffect(
        () => () => document.removeEventListener("pointerup", p),
        [p],
      ),
      c.jsx(hs, {
        asChild: !0,
        ...a,
        children: c.jsx(Y.button, {
          "aria-describedby": o.open ? o.contentId : void 0,
          "data-state": o.stateAttribute,
          ...r,
          ref: d,
          onPointerMove: V(e.onPointerMove, (g) => {
            g.pointerType !== "touch" &&
              !f.current &&
              !s.isPointerInTransitRef.current &&
              (o.onTriggerEnter(), (f.current = !0));
          }),
          onPointerLeave: V(e.onPointerLeave, () => {
            (o.onTriggerLeave(), (f.current = !1));
          }),
          onPointerDown: V(e.onPointerDown, () => {
            (o.open && o.onClose(),
              (u.current = !0),
              document.addEventListener("pointerup", p, { once: !0 }));
          }),
          onFocus: V(e.onFocus, () => {
            u.current || o.onOpen();
          }),
          onBlur: V(e.onBlur, o.onClose),
          onClick: V(e.onClick, o.onClose),
        }),
      })
    );
  });
Cs.displayName = Sn;
var er = "TooltipPortal",
  [Lu, $u] = Kt(er, { forceMount: void 0 }),
  Rs = (e) => {
    const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e,
      s = dt(er, t);
    return c.jsx(Lu, {
      scope: t,
      forceMount: n,
      children: c.jsx(Je, {
        present: n || s.open,
        children: c.jsx(Mt, { asChild: !0, container: o, children: r }),
      }),
    });
  };
Rs.displayName = er;
var qe = "TooltipContent",
  Ns = i.forwardRef((e, t) => {
    const n = $u(qe, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: o = "top", ...s } = e,
      a = dt(qe, e.__scopeTooltip);
    return c.jsx(Je, {
      present: r || a.open,
      children: a.disableHoverableContent
        ? c.jsx(Es, { side: o, ...s, ref: t })
        : c.jsx(zu, { side: o, ...s, ref: t }),
    });
  }),
  zu = i.forwardRef((e, t) => {
    const n = dt(qe, e.__scopeTooltip),
      r = Qn(qe, e.__scopeTooltip),
      o = i.useRef(null),
      s = J(t, o),
      [a, l] = i.useState(null),
      { trigger: d, onClose: u } = n,
      f = o.current,
      { onPointerInTransitChange: p } = r,
      g = i.useCallback(() => {
        (l(null), p(!1));
      }, [p]),
      h = i.useCallback(
        (b, m) => {
          const v = b.currentTarget,
            y = { x: b.clientX, y: b.clientY },
            x = Hu(y, v.getBoundingClientRect()),
            w = Uu(y, x),
            S = Gu(m.getBoundingClientRect()),
            R = Yu([...w, ...S]);
          (l(R), p(!0));
        },
        [p],
      );
    return (
      i.useEffect(() => () => g(), [g]),
      i.useEffect(() => {
        if (d && f) {
          const b = (v) => h(v, f),
            m = (v) => h(v, d);
          return (
            d.addEventListener("pointerleave", b),
            f.addEventListener("pointerleave", m),
            () => {
              (d.removeEventListener("pointerleave", b),
                f.removeEventListener("pointerleave", m));
            }
          );
        }
      }, [d, f, h, g]),
      i.useEffect(() => {
        if (a) {
          const b = (m) => {
            const v = m.target,
              y = { x: m.clientX, y: m.clientY },
              x = d?.contains(v) || f?.contains(v),
              w = !Ku(y, a);
            x ? g() : w && (g(), u());
          };
          return (
            document.addEventListener("pointermove", b),
            () => document.removeEventListener("pointermove", b)
          );
        }
      }, [d, f, a, u, g]),
      c.jsx(Es, { ...e, ref: s })
    );
  }),
  [Fu, Wu] = Kt(it, { isInside: !1 }),
  Bu = Tu("TooltipContent"),
  Es = i.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": o,
        onEscapeKeyDown: s,
        onPointerDownOutside: a,
        ...l
      } = e,
      d = dt(qe, n),
      u = Yt(n),
      { onClose: f } = d;
    return (
      i.useEffect(
        () => (
          document.addEventListener(wn, f),
          () => document.removeEventListener(wn, f)
        ),
        [f],
      ),
      i.useEffect(() => {
        if (d.trigger) {
          const p = (g) => {
            g.target?.contains(d.trigger) && f();
          };
          return (
            window.addEventListener("scroll", p, { capture: !0 }),
            () => window.removeEventListener("scroll", p, { capture: !0 })
          );
        }
      }, [d.trigger, f]),
      c.jsx(_t, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: a,
        onFocusOutside: (p) => p.preventDefault(),
        onDismiss: f,
        children: c.jsxs(gs, {
          "data-state": d.stateAttribute,
          ...u,
          ...l,
          ref: t,
          style: {
            ...l.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            c.jsx(Bu, { children: r }),
            c.jsx(Fu, {
              scope: n,
              isInside: !0,
              children: c.jsx(Iu, {
                id: d.contentId,
                role: "tooltip",
                children: o || r,
              }),
            }),
          ],
        }),
      })
    );
  });
Ns.displayName = qe;
var ks = "TooltipArrow",
  Vu = i.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = Yt(n);
    return Wu(ks, n).isInside ? null : c.jsx(vs, { ...o, ...r, ref: t });
  });
Vu.displayName = ks;
function Hu(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    o = Math.abs(t.right - e.x),
    s = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, s)) {
    case s:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Uu(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function Gu(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r },
  ];
}
function Ku(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, a = t.length - 1; s < t.length; a = s++) {
    const l = t[s],
      d = t[a],
      u = l.x,
      f = l.y,
      p = d.x,
      g = d.y;
    f > r != g > r && n < ((p - u) * (r - f)) / (g - f) + u && (o = !o);
  }
  return o;
}
function Yu(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0,
    ),
    qu(t)
  );
}
function qu(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1],
        a = t[t.length - 2];
      if ((s.x - a.x) * (o.y - a.y) >= (s.y - a.y) * (o.x - a.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const s = n[n.length - 1],
        a = n[n.length - 2];
      if ((s.x - a.x) * (o.y - a.y) >= (s.y - a.y) * (o.x - a.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var Xu = ws,
  Zu = Ss,
  Ju = Cs,
  Qu = Rs,
  As = Ns;
const ef = Xu,
  tf = Zu,
  nf = Ju,
  Ps = i.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    c.jsx(Qu, {
      children: c.jsx(As, {
        ref: r,
        sideOffset: t,
        className: j(
          "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-tooltip-content-transform-origin)",
          e,
        ),
        ...n,
      }),
    }),
  );
Ps.displayName = As.displayName;
const rf = "sidebar_state",
  of = 3600 * 24 * 7,
  sf = "16rem",
  af = "18rem",
  lf = "3rem",
  cf = "b",
  js = i.createContext(null);
function ut() {
  const e = i.useContext(js);
  if (!e) throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
const Ts = i.forwardRef(
  (
    {
      defaultOpen: e = !0,
      open: t,
      onOpenChange: n,
      className: r,
      style: o,
      children: s,
      ...a
    },
    l,
  ) => {
    const d = $i(),
      [u, f] = i.useState(!1),
      [p, g] = i.useState(e),
      h = t ?? p,
      b = i.useCallback(
        (x) => {
          const w = typeof x == "function" ? x(h) : x;
          (n ? n(w) : g(w),
            (document.cookie = `${rf}=${w}; path=/; max-age=${of}`));
        },
        [n, h],
      ),
      m = i.useCallback(() => (d ? f((x) => !x) : b((x) => !x)), [d, b, f]);
    i.useEffect(() => {
      const x = (w) => {
        w.key === cf && (w.metaKey || w.ctrlKey) && (w.preventDefault(), m());
      };
      return (
        window.addEventListener("keydown", x),
        () => window.removeEventListener("keydown", x)
      );
    }, [m]);
    const v = h ? "expanded" : "collapsed",
      y = i.useMemo(
        () => ({
          state: v,
          open: h,
          setOpen: b,
          isMobile: d,
          openMobile: u,
          setOpenMobile: f,
          toggleSidebar: m,
        }),
        [v, h, b, d, u, f, m],
      );
    return c.jsx(js.Provider, {
      value: y,
      children: c.jsx(ef, {
        delayDuration: 0,
        children: c.jsx("div", {
          style: { "--sidebar-width": sf, "--sidebar-width-icon": lf, ...o },
          className: j(
            "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
            r,
          ),
          ref: l,
          ...a,
          children: s,
        }),
      }),
    });
  },
);
Ts.displayName = "SidebarProvider";
const Os = i.forwardRef(
  (
    {
      side: e = "left",
      variant: t = "sidebar",
      collapsible: n = "offcanvas",
      className: r,
      children: o,
      ...s
    },
    a,
  ) => {
    const { isMobile: l, state: d, openMobile: u, setOpenMobile: f } = ut();
    return n === "none"
      ? c.jsx("div", {
          className: j(
            "flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground",
            r,
          ),
          ref: a,
          ...s,
          children: o,
        })
      : l
        ? c.jsx(Uo, {
            open: u,
            onOpenChange: f,
            ...s,
            children: c.jsxs(Wn, {
              "data-sidebar": "sidebar",
              "data-mobile": "true",
              className:
                "w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
              style: { "--sidebar-width": af },
              side: e,
              children: [
                c.jsxs(Bn, {
                  className: "sr-only",
                  children: [
                    c.jsx(Vn, { children: "Sidebar" }),
                    c.jsx(Hn, { children: "Displays the mobile sidebar." }),
                  ],
                }),
                c.jsx("div", {
                  className: "flex h-full w-full flex-col",
                  children: o,
                }),
              ],
            }),
          })
        : c.jsxs("div", {
            ref: a,
            className: "group peer hidden text-sidebar-foreground md:block",
            "data-state": d,
            "data-collapsible": d === "collapsed" ? n : "",
            "data-variant": t,
            "data-side": e,
            children: [
              c.jsx("div", {
                className: j(
                  "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
                  "group-data-[collapsible=offcanvas]:w-0",
                  "group-data-[side=right]:rotate-180",
                  t === "floating" || t === "inset"
                    ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
                    : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)",
                ),
              }),
              c.jsx("div", {
                className: j(
                  "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
                  e === "left"
                    ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
                    : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
                  t === "floating" || t === "inset"
                    ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
                    : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
                  r,
                ),
                ...s,
                children: c.jsx("div", {
                  "data-sidebar": "sidebar",
                  className:
                    "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow",
                  children: o,
                }),
              }),
            ],
          });
  },
);
Os.displayName = "Sidebar";
const Is = i.forwardRef(({ className: e, onClick: t, ...n }, r) => {
  const { toggleSidebar: o } = ut();
  return c.jsxs(Ee, {
    ref: r,
    "data-sidebar": "trigger",
    variant: "ghost",
    size: "icon",
    className: j("h-7 w-7", e),
    onClick: (s) => {
      (t?.(s), o());
    },
    ...n,
    children: [
      c.jsx(Ni, {}),
      c.jsx("span", { className: "sr-only", children: "Toggle Sidebar" }),
    ],
  });
});
Is.displayName = "SidebarTrigger";
const df = i.forwardRef(({ className: e, ...t }, n) => {
  const { toggleSidebar: r } = ut();
  return c.jsx("button", {
    ref: n,
    "data-sidebar": "rail",
    "aria-label": "Toggle Sidebar",
    tabIndex: -1,
    onClick: r,
    title: "Toggle Sidebar",
    className: j(
      "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
      "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
      "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
      "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
      "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
      "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
      e,
    ),
    ...t,
  });
});
df.displayName = "SidebarRail";
const uf = i.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("main", {
    ref: n,
    className: j(
      "relative flex w-full flex-1 flex-col bg-background",
      "md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
      e,
    ),
    ...t,
  }),
);
uf.displayName = "SidebarInset";
const ff = i.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Mn, {
    ref: n,
    "data-sidebar": "input",
    className: j(
      "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
      e,
    ),
    ...t,
  }),
);
ff.displayName = "SidebarInput";
const _s = i.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", {
    ref: n,
    "data-sidebar": "header",
    className: j("flex flex-col gap-2 p-2", e),
    ...t,
  }),
);
_s.displayName = "SidebarHeader";
const pf = i.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", {
    ref: n,
    "data-sidebar": "footer",
    className: j("flex flex-col gap-2 p-2", e),
    ...t,
  }),
);
pf.displayName = "SidebarFooter";
const mf = i.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(po, {
    ref: n,
    "data-sidebar": "separator",
    className: j("mx-2 w-auto bg-sidebar-border", e),
    ...t,
  }),
);
mf.displayName = "SidebarSeparator";
const Ms = i.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", {
    ref: n,
    "data-sidebar": "content",
    className: j(
      "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
      e,
    ),
    ...t,
  }),
);
Ms.displayName = "SidebarContent";
const Ds = i.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", {
    ref: n,
    "data-sidebar": "group",
    className: j("relative flex w-full min-w-0 flex-col p-2", e),
    ...t,
  }),
);
Ds.displayName = "SidebarGroup";
const Ls = i.forwardRef(({ className: e, asChild: t = !1, ...n }, r) => {
  const o = t ? Ze : "div";
  return c.jsx(o, {
    ref: r,
    "data-sidebar": "group-label",
    className: j(
      "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
      "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
      e,
    ),
    ...n,
  });
});
Ls.displayName = "SidebarGroupLabel";
const hf = i.forwardRef(({ className: e, asChild: t = !1, ...n }, r) => {
  const o = t ? Ze : "button";
  return c.jsx(o, {
    ref: r,
    "data-sidebar": "group-action",
    className: j(
      "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
      "after:absolute after:-inset-2 after:md:hidden",
      "group-data-[collapsible=icon]:hidden",
      e,
    ),
    ...n,
  });
});
hf.displayName = "SidebarGroupAction";
const $s = i.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", {
    ref: n,
    "data-sidebar": "group-content",
    className: j("w-full text-sm", e),
    ...t,
  }),
);
$s.displayName = "SidebarGroupContent";
const zs = i.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("ul", {
    ref: n,
    "data-sidebar": "menu",
    className: j("flex w-full min-w-0 flex-col gap-1", e),
    ...t,
  }),
);
zs.displayName = "SidebarMenu";
const Fs = i.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("li", {
    ref: n,
    "data-sidebar": "menu-item",
    className: j("group/menu-item relative", e),
    ...t,
  }),
);
Fs.displayName = "SidebarMenuItem";
const gf = Tn(
    "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
    {
      variants: {
        variant: {
          default:
            "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
          outline:
            "bg-background shadow-[0_0_0_1px_var(--sidebar-border)] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_var(--sidebar-accent)]",
        },
        size: {
          default: "h-8 text-sm",
          sm: "h-7 text-xs",
          lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  Ws = i.forwardRef(
    (
      {
        asChild: e = !1,
        isActive: t = !1,
        variant: n = "default",
        size: r = "default",
        tooltip: o,
        className: s,
        ...a
      },
      l,
    ) => {
      const d = e ? Ze : "button",
        { isMobile: u, state: f } = ut(),
        p = c.jsx(d, {
          ref: l,
          "data-sidebar": "menu-button",
          "data-size": r,
          "data-active": t,
          className: j(gf({ variant: n, size: r }), s),
          ...a,
        });
      return o
        ? (typeof o == "string" && (o = { children: o }),
          c.jsxs(tf, {
            children: [
              c.jsx(nf, { asChild: !0, children: p }),
              c.jsx(Ps, {
                side: "right",
                align: "center",
                hidden: f !== "collapsed" || u,
                ...o,
              }),
            ],
          }))
        : p;
    },
  );
Ws.displayName = "SidebarMenuButton";
const vf = i.forwardRef(
  ({ className: e, asChild: t = !1, showOnHover: n = !1, ...r }, o) => {
    const s = t ? Ze : "button";
    return c.jsx(s, {
      ref: o,
      "data-sidebar": "menu-action",
      className: j(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        n &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        e,
      ),
      ...r,
    });
  },
);
vf.displayName = "SidebarMenuAction";
const bf = i.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", {
    ref: n,
    "data-sidebar": "menu-badge",
    className: j(
      "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground",
      "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
      "peer-data-[size=sm]/menu-button:top-1",
      "peer-data-[size=default]/menu-button:top-1.5",
      "peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:hidden",
      e,
    ),
    ...t,
  }),
);
bf.displayName = "SidebarMenuBadge";
const xf = i.forwardRef(({ className: e, showIcon: t = !1, ...n }, r) => {
  const o = i.useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []);
  return c.jsxs("div", {
    ref: r,
    "data-sidebar": "menu-skeleton",
    className: j("flex h-8 items-center gap-2 rounded-md px-2", e),
    ...n,
    children: [
      t &&
        c.jsx(Nr, {
          className: "size-4 rounded-md",
          "data-sidebar": "menu-skeleton-icon",
        }),
      c.jsx(Nr, {
        className: "h-4 max-w-(--skeleton-width) flex-1",
        "data-sidebar": "menu-skeleton-text",
        style: { "--skeleton-width": o },
      }),
    ],
  });
});
xf.displayName = "SidebarMenuSkeleton";
const yf = i.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("ul", {
    ref: n,
    "data-sidebar": "menu-sub",
    className: j(
      "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
      "group-data-[collapsible=icon]:hidden",
      e,
    ),
    ...t,
  }),
);
yf.displayName = "SidebarMenuSub";
const wf = i.forwardRef(({ ...e }, t) => c.jsx("li", { ref: t, ...e }));
wf.displayName = "SidebarMenuSubItem";
const Sf = i.forwardRef(
  ({ asChild: e = !1, size: t = "md", isActive: n, className: r, ...o }, s) => {
    const a = e ? Ze : "a";
    return c.jsx(a, {
      ref: s,
      "data-sidebar": "menu-sub-button",
      "data-size": t,
      "data-active": n,
      className: j(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        t === "sm" && "text-xs",
        t === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        r,
      ),
      ...o,
    });
  },
);
Sf.displayName = "SidebarMenuSubButton";
function Lr(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function $r(e) {
  const t = Cf(e),
    n = i.forwardRef((r, o) => {
      const { children: s, ...a } = r,
        l = i.Children.toArray(s),
        d = l.find(Nf);
      if (d) {
        const u = d.props.children,
          f = l.map((p) =>
            p === d
              ? i.Children.count(u) > 1
                ? i.Children.only(null)
                : i.isValidElement(u)
                  ? u.props.children
                  : null
              : p,
          );
        return c.jsx(t, {
          ...a,
          ref: o,
          children: i.isValidElement(u) ? i.cloneElement(u, void 0, f) : null,
        });
      }
      return c.jsx(t, { ...a, ref: o, children: s });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
function Cf(e) {
  const t = i.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (i.isValidElement(o)) {
      const a = kf(o),
        l = Ef(s, o.props);
      return (
        o.type !== i.Fragment && (l.ref = r ? Xe(r, a) : a),
        i.cloneElement(o, l)
      );
    }
    return i.Children.count(o) > 1 ? i.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var Rf = Symbol("radix.slottable");
function Nf(e) {
  return (
    i.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === Rf
  );
}
function Ef(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      s = t[r];
    /^on[A-Z]/.test(r)
      ? o && s
        ? (n[r] = (...l) => {
            const d = s(...l);
            return (o(...l), d);
          })
        : o && (n[r] = o)
      : r === "style"
        ? (n[r] = { ...o, ...s })
        : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function kf(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function Af(e) {
  const t = e + "CollectionProvider",
    [n, r] = lt(t),
    [o, s] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    a = (m) => {
      const { scope: v, children: y } = m,
        x = Oe.useRef(null),
        w = Oe.useRef(new Map()).current;
      return c.jsx(o, { scope: v, itemMap: w, collectionRef: x, children: y });
    };
  a.displayName = t;
  const l = e + "CollectionSlot",
    d = $r(l),
    u = Oe.forwardRef((m, v) => {
      const { scope: y, children: x } = m,
        w = s(l, y),
        S = J(v, w.collectionRef);
      return c.jsx(d, { ref: S, children: x });
    });
  u.displayName = l;
  const f = e + "CollectionItemSlot",
    p = "data-radix-collection-item",
    g = $r(f),
    h = Oe.forwardRef((m, v) => {
      const { scope: y, children: x, ...w } = m,
        S = Oe.useRef(null),
        R = J(v, S),
        E = s(f, y);
      return (
        Oe.useEffect(
          () => (
            E.itemMap.set(S, { ref: S, ...w }),
            () => {
              E.itemMap.delete(S);
            }
          ),
        ),
        c.jsx(g, { [p]: "", ref: R, children: x })
      );
    });
  h.displayName = f;
  function b(m) {
    const v = s(e + "CollectionConsumer", m);
    return Oe.useCallback(() => {
      const x = v.collectionRef.current;
      if (!x) return [];
      const w = Array.from(x.querySelectorAll(`[${p}]`));
      return Array.from(v.itemMap.values()).sort(
        (E, N) => w.indexOf(E.ref.current) - w.indexOf(N.ref.current),
      );
    }, [v.collectionRef, v.itemMap]);
  }
  return [{ Provider: a, Slot: u, ItemSlot: h }, b, r];
}
var Pf = i.createContext(void 0);
function jf(e) {
  const t = i.useContext(Pf);
  return e || t || "ltr";
}
function Tf(e) {
  const t = Of(e),
    n = i.forwardRef((r, o) => {
      const { children: s, ...a } = r,
        l = i.Children.toArray(s),
        d = l.find(_f);
      if (d) {
        const u = d.props.children,
          f = l.map((p) =>
            p === d
              ? i.Children.count(u) > 1
                ? i.Children.only(null)
                : i.isValidElement(u)
                  ? u.props.children
                  : null
              : p,
          );
        return c.jsx(t, {
          ...a,
          ref: o,
          children: i.isValidElement(u) ? i.cloneElement(u, void 0, f) : null,
        });
      }
      return c.jsx(t, { ...a, ref: o, children: s });
    });
  return ((n.displayName = `${e}.Slot`), n);
}
function Of(e) {
  const t = i.forwardRef((n, r) => {
    const { children: o, ...s } = n;
    if (i.isValidElement(o)) {
      const a = Df(o),
        l = Mf(s, o.props);
      return (
        o.type !== i.Fragment && (l.ref = r ? Xe(r, a) : a),
        i.cloneElement(o, l)
      );
    }
    return i.Children.count(o) > 1 ? i.Children.only(null) : null;
  });
  return ((t.displayName = `${e}.SlotClone`), t);
}
var If = Symbol("radix.slottable");
function _f(e) {
  return (
    i.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === If
  );
}
function Mf(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      s = t[r];
    /^on[A-Z]/.test(r)
      ? o && s
        ? (n[r] = (...l) => {
            const d = s(...l);
            return (o(...l), d);
          })
        : o && (n[r] = o)
      : r === "style"
        ? (n[r] = { ...o, ...s })
        : r === "className" && (n[r] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Df(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, "ref")?.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function Lf(e) {
  const t = i.useRef({ value: e, previous: e });
  return i.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e],
  );
}
var $f = [" ", "Enter", "ArrowUp", "ArrowDown"],
  zf = [" ", "Enter"],
  Fe = "Select",
  [qt, Xt, Ff] = Af(Fe),
  [tt] = lt(Fe, [Ff, Gt]),
  Zt = Gt(),
  [Wf, je] = tt(Fe),
  [Bf, Vf] = tt(Fe),
  Bs = (e) => {
    const {
        __scopeSelect: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: s,
        value: a,
        defaultValue: l,
        onValueChange: d,
        dir: u,
        name: f,
        autoComplete: p,
        disabled: g,
        required: h,
        form: b,
      } = e,
      m = Zt(t),
      [v, y] = i.useState(null),
      [x, w] = i.useState(null),
      [S, R] = i.useState(!1),
      E = jf(u),
      [N, C] = Nt({ prop: r, defaultProp: o ?? !1, onChange: s, caller: Fe }),
      [_, L] = Nt({ prop: a, defaultProp: l, onChange: d, caller: Fe }),
      F = i.useRef(null),
      W = v ? b || !!v.closest("form") : !0,
      [B, $] = i.useState(new Set()),
      H = Array.from(B)
        .map((I) => I.props.value)
        .join(";");
    return c.jsx(ms, {
      ...m,
      children: c.jsxs(Wf, {
        required: h,
        scope: t,
        trigger: v,
        onTriggerChange: y,
        valueNode: x,
        onValueNodeChange: w,
        valueNodeHasChildren: S,
        onValueNodeHasChildrenChange: R,
        contentId: De(),
        value: _,
        onValueChange: L,
        open: N,
        onOpenChange: C,
        dir: E,
        triggerPointerDownPosRef: F,
        disabled: g,
        children: [
          c.jsx(qt.Provider, {
            scope: t,
            children: c.jsx(Bf, {
              scope: e.__scopeSelect,
              onNativeOptionAdd: i.useCallback((I) => {
                $((D) => new Set(D).add(I));
              }, []),
              onNativeOptionRemove: i.useCallback((I) => {
                $((D) => {
                  const O = new Set(D);
                  return (O.delete(I), O);
                });
              }, []),
              children: n,
            }),
          }),
          W
            ? c.jsxs(
                fa,
                {
                  "aria-hidden": !0,
                  required: h,
                  tabIndex: -1,
                  name: f,
                  autoComplete: p,
                  value: _,
                  onChange: (I) => L(I.target.value),
                  disabled: g,
                  form: b,
                  children: [
                    _ === void 0 ? c.jsx("option", { value: "" }) : null,
                    Array.from(B),
                  ],
                },
                H,
              )
            : null,
        ],
      }),
    });
  };
Bs.displayName = Fe;
var Vs = "SelectTrigger",
  Hs = i.forwardRef((e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e,
      s = Zt(n),
      a = je(Vs, n),
      l = a.disabled || r,
      d = J(t, a.onTriggerChange),
      u = Xt(n),
      f = i.useRef("touch"),
      [p, g, h] = ma((m) => {
        const v = u().filter((w) => !w.disabled),
          y = v.find((w) => w.value === a.value),
          x = ha(v, m, y);
        x !== void 0 && a.onValueChange(x.value);
      }),
      b = (m) => {
        (l || (a.onOpenChange(!0), h()),
          m &&
            (a.triggerPointerDownPosRef.current = {
              x: Math.round(m.pageX),
              y: Math.round(m.pageY),
            }));
      };
    return c.jsx(hs, {
      asChild: !0,
      ...s,
      children: c.jsx(Y.button, {
        type: "button",
        role: "combobox",
        "aria-controls": a.contentId,
        "aria-expanded": a.open,
        "aria-required": a.required,
        "aria-autocomplete": "none",
        dir: a.dir,
        "data-state": a.open ? "open" : "closed",
        disabled: l,
        "data-disabled": l ? "" : void 0,
        "data-placeholder": pa(a.value) ? "" : void 0,
        ...o,
        ref: d,
        onClick: V(o.onClick, (m) => {
          (m.currentTarget.focus(), f.current !== "mouse" && b(m));
        }),
        onPointerDown: V(o.onPointerDown, (m) => {
          f.current = m.pointerType;
          const v = m.target;
          (v.hasPointerCapture(m.pointerId) &&
            v.releasePointerCapture(m.pointerId),
            m.button === 0 &&
              m.ctrlKey === !1 &&
              m.pointerType === "mouse" &&
              (b(m), m.preventDefault()));
        }),
        onKeyDown: V(o.onKeyDown, (m) => {
          const v = p.current !== "";
          (!(m.ctrlKey || m.altKey || m.metaKey) &&
            m.key.length === 1 &&
            g(m.key),
            !(v && m.key === " ") &&
              $f.includes(m.key) &&
              (b(), m.preventDefault()));
        }),
      }),
    });
  });
Hs.displayName = Vs;
var Us = "SelectValue",
  Gs = i.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        className: r,
        style: o,
        children: s,
        placeholder: a = "",
        ...l
      } = e,
      d = je(Us, n),
      { onValueNodeHasChildrenChange: u } = d,
      f = s !== void 0,
      p = J(t, d.onValueNodeChange);
    return (
      re(() => {
        u(f);
      }, [u, f]),
      c.jsx(Y.span, {
        ...l,
        ref: p,
        style: { pointerEvents: "none" },
        children: pa(d.value) ? c.jsx(c.Fragment, { children: a }) : s,
      })
    );
  });
Gs.displayName = Us;
var Hf = "SelectIcon",
  Ks = i.forwardRef((e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return c.jsx(Y.span, {
      "aria-hidden": !0,
      ...o,
      ref: t,
      children: r || "▼",
    });
  });
Ks.displayName = Hf;
var Uf = "SelectPortal",
  Ys = (e) => c.jsx(Mt, { asChild: !0, ...e });
Ys.displayName = Uf;
var We = "SelectContent",
  qs = i.forwardRef((e, t) => {
    const n = je(We, e.__scopeSelect),
      [r, o] = i.useState();
    if (
      (re(() => {
        o(new DocumentFragment());
      }, []),
      !n.open)
    ) {
      const s = r;
      return s
        ? It.createPortal(
            c.jsx(Xs, {
              scope: e.__scopeSelect,
              children: c.jsx(qt.Slot, {
                scope: e.__scopeSelect,
                children: c.jsx("div", { children: e.children }),
              }),
            }),
            s,
          )
        : null;
    }
    return c.jsx(Zs, { ...e, ref: t });
  });
qs.displayName = We;
var le = 10,
  [Xs, Te] = tt(We),
  Gf = "SelectContentImpl",
  Kf = Tf("SelectContent.RemoveScroll"),
  Zs = i.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        position: r = "item-aligned",
        onCloseAutoFocus: o,
        onEscapeKeyDown: s,
        onPointerDownOutside: a,
        side: l,
        sideOffset: d,
        align: u,
        alignOffset: f,
        arrowPadding: p,
        collisionBoundary: g,
        collisionPadding: h,
        sticky: b,
        hideWhenDetached: m,
        avoidCollisions: v,
        ...y
      } = e,
      x = je(We, n),
      [w, S] = i.useState(null),
      [R, E] = i.useState(null),
      N = J(t, (T) => S(T)),
      [C, _] = i.useState(null),
      [L, F] = i.useState(null),
      W = Xt(n),
      [B, $] = i.useState(!1),
      H = i.useRef(!1);
    (i.useEffect(() => {
      if (w) return Eo(w);
    }, [w]),
      vo());
    const I = i.useCallback(
        (T) => {
          const [q, ...z] = W().map((X) => X.ref.current),
            [K] = z.slice(-1),
            G = document.activeElement;
          for (const X of T)
            if (
              X === G ||
              (X?.scrollIntoView({ block: "nearest" }),
              X === q && R && (R.scrollTop = 0),
              X === K && R && (R.scrollTop = R.scrollHeight),
              X?.focus(),
              document.activeElement !== G)
            )
              return;
        },
        [W, R],
      ),
      D = i.useCallback(() => I([C, w]), [I, C, w]);
    i.useEffect(() => {
      B && D();
    }, [B, D]);
    const { onOpenChange: O, triggerPointerDownPosRef: U } = x;
    (i.useEffect(() => {
      if (w) {
        let T = { x: 0, y: 0 };
        const q = (K) => {
            T = {
              x: Math.abs(Math.round(K.pageX) - (U.current?.x ?? 0)),
              y: Math.abs(Math.round(K.pageY) - (U.current?.y ?? 0)),
            };
          },
          z = (K) => {
            (T.x <= 10 && T.y <= 10
              ? K.preventDefault()
              : w.contains(K.target) || O(!1),
              document.removeEventListener("pointermove", q),
              (U.current = null));
          };
        return (
          U.current !== null &&
            (document.addEventListener("pointermove", q),
            document.addEventListener("pointerup", z, {
              capture: !0,
              once: !0,
            })),
          () => {
            (document.removeEventListener("pointermove", q),
              document.removeEventListener("pointerup", z, { capture: !0 }));
          }
        );
      }
    }, [w, O, U]),
      i.useEffect(() => {
        const T = () => O(!1);
        return (
          window.addEventListener("blur", T),
          window.addEventListener("resize", T),
          () => {
            (window.removeEventListener("blur", T),
              window.removeEventListener("resize", T));
          }
        );
      }, [O]));
    const [k, fe] = ma((T) => {
        const q = W().filter((G) => !G.disabled),
          z = q.find((G) => G.ref.current === document.activeElement),
          K = ha(q, T, z);
        K && setTimeout(() => K.ref.current.focus());
      }),
      we = i.useCallback(
        (T, q, z) => {
          const K = !H.current && !z;
          ((x.value !== void 0 && x.value === q) || K) &&
            (_(T), K && (H.current = !0));
        },
        [x.value],
      ),
      Se = i.useCallback(() => w?.focus(), [w]),
      ae = i.useCallback(
        (T, q, z) => {
          const K = !H.current && !z;
          ((x.value !== void 0 && x.value === q) || K) && F(T);
        },
        [x.value],
      ),
      ee = r === "popper" ? Cn : Js,
      Z =
        ee === Cn
          ? {
              side: l,
              sideOffset: d,
              align: u,
              alignOffset: f,
              arrowPadding: p,
              collisionBoundary: g,
              collisionPadding: h,
              sticky: b,
              hideWhenDetached: m,
              avoidCollisions: v,
            }
          : {};
    return c.jsx(Xs, {
      scope: n,
      content: w,
      viewport: R,
      onViewportChange: E,
      itemRefCallback: we,
      selectedItem: C,
      onItemLeave: Se,
      itemTextRefCallback: ae,
      focusSelectedItem: D,
      selectedItemText: L,
      position: r,
      isPositioned: B,
      searchRef: k,
      children: c.jsx(Ln, {
        as: Kf,
        allowPinchZoom: !0,
        children: c.jsx(Dn, {
          asChild: !0,
          trapped: x.open,
          onMountAutoFocus: (T) => {
            T.preventDefault();
          },
          onUnmountAutoFocus: V(o, (T) => {
            (x.trigger?.focus({ preventScroll: !0 }), T.preventDefault());
          }),
          children: c.jsx(_t, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: s,
            onPointerDownOutside: a,
            onFocusOutside: (T) => T.preventDefault(),
            onDismiss: () => x.onOpenChange(!1),
            children: c.jsx(ee, {
              role: "listbox",
              id: x.contentId,
              "data-state": x.open ? "open" : "closed",
              dir: x.dir,
              onContextMenu: (T) => T.preventDefault(),
              ...y,
              ...Z,
              onPlaced: () => $(!0),
              ref: N,
              style: {
                display: "flex",
                flexDirection: "column",
                outline: "none",
                ...y.style,
              },
              onKeyDown: V(y.onKeyDown, (T) => {
                const q = T.ctrlKey || T.altKey || T.metaKey;
                if (
                  (T.key === "Tab" && T.preventDefault(),
                  !q && T.key.length === 1 && fe(T.key),
                  ["ArrowUp", "ArrowDown", "Home", "End"].includes(T.key))
                ) {
                  let K = W()
                    .filter((G) => !G.disabled)
                    .map((G) => G.ref.current);
                  if (
                    (["ArrowUp", "End"].includes(T.key) &&
                      (K = K.slice().reverse()),
                    ["ArrowUp", "ArrowDown"].includes(T.key))
                  ) {
                    const G = T.target,
                      X = K.indexOf(G);
                    K = K.slice(X + 1);
                  }
                  (setTimeout(() => I(K)), T.preventDefault());
                }
              }),
            }),
          }),
        }),
      }),
    });
  });
Zs.displayName = Gf;
var Yf = "SelectItemAlignedPosition",
  Js = i.forwardRef((e, t) => {
    const { __scopeSelect: n, onPlaced: r, ...o } = e,
      s = je(We, n),
      a = Te(We, n),
      [l, d] = i.useState(null),
      [u, f] = i.useState(null),
      p = J(t, (N) => f(N)),
      g = Xt(n),
      h = i.useRef(!1),
      b = i.useRef(!0),
      {
        viewport: m,
        selectedItem: v,
        selectedItemText: y,
        focusSelectedItem: x,
      } = a,
      w = i.useCallback(() => {
        if (s.trigger && s.valueNode && l && u && m && v && y) {
          const N = s.trigger.getBoundingClientRect(),
            C = u.getBoundingClientRect(),
            _ = s.valueNode.getBoundingClientRect(),
            L = y.getBoundingClientRect();
          if (s.dir !== "rtl") {
            const G = L.left - C.left,
              X = _.left - G,
              ne = N.left - X,
              ie = N.width + ne,
              Jt = Math.max(ie, C.width),
              Qt = window.innerWidth - le,
              en = Lr(X, [le, Math.max(le, Qt - Jt)]);
            ((l.style.minWidth = ie + "px"), (l.style.left = en + "px"));
          } else {
            const G = C.right - L.right,
              X = window.innerWidth - _.right - G,
              ne = window.innerWidth - N.right - X,
              ie = N.width + ne,
              Jt = Math.max(ie, C.width),
              Qt = window.innerWidth - le,
              en = Lr(X, [le, Math.max(le, Qt - Jt)]);
            ((l.style.minWidth = ie + "px"), (l.style.right = en + "px"));
          }
          const F = g(),
            W = window.innerHeight - le * 2,
            B = m.scrollHeight,
            $ = window.getComputedStyle(u),
            H = parseInt($.borderTopWidth, 10),
            I = parseInt($.paddingTop, 10),
            D = parseInt($.borderBottomWidth, 10),
            O = parseInt($.paddingBottom, 10),
            U = H + I + B + O + D,
            k = Math.min(v.offsetHeight * 5, U),
            fe = window.getComputedStyle(m),
            we = parseInt(fe.paddingTop, 10),
            Se = parseInt(fe.paddingBottom, 10),
            ae = N.top + N.height / 2 - le,
            ee = W - ae,
            Z = v.offsetHeight / 2,
            T = v.offsetTop + Z,
            q = H + I + T,
            z = U - q;
          if (q <= ae) {
            const G = F.length > 0 && v === F[F.length - 1].ref.current;
            l.style.bottom = "0px";
            const X = u.clientHeight - m.offsetTop - m.offsetHeight,
              ne = Math.max(ee, Z + (G ? Se : 0) + X + D),
              ie = q + ne;
            l.style.height = ie + "px";
          } else {
            const G = F.length > 0 && v === F[0].ref.current;
            l.style.top = "0px";
            const ne = Math.max(ae, H + m.offsetTop + (G ? we : 0) + Z) + z;
            ((l.style.height = ne + "px"),
              (m.scrollTop = q - ae + m.offsetTop));
          }
          ((l.style.margin = `${le}px 0`),
            (l.style.minHeight = k + "px"),
            (l.style.maxHeight = W + "px"),
            r?.(),
            requestAnimationFrame(() => (h.current = !0)));
        }
      }, [g, s.trigger, s.valueNode, l, u, m, v, y, s.dir, r]);
    re(() => w(), [w]);
    const [S, R] = i.useState();
    re(() => {
      u && R(window.getComputedStyle(u).zIndex);
    }, [u]);
    const E = i.useCallback(
      (N) => {
        N && b.current === !0 && (w(), x?.(), (b.current = !1));
      },
      [w, x],
    );
    return c.jsx(Xf, {
      scope: n,
      contentWrapper: l,
      shouldExpandOnScrollRef: h,
      onScrollButtonChange: E,
      children: c.jsx("div", {
        ref: d,
        style: {
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          zIndex: S,
        },
        children: c.jsx(Y.div, {
          ...o,
          ref: p,
          style: { boxSizing: "border-box", maxHeight: "100%", ...o.style },
        }),
      }),
    });
  });
Js.displayName = Yf;
var qf = "SelectPopperPosition",
  Cn = i.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        align: r = "start",
        collisionPadding: o = le,
        ...s
      } = e,
      a = Zt(n);
    return c.jsx(gs, {
      ...a,
      ...s,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        boxSizing: "border-box",
        ...s.style,
        "--radix-select-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-select-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
      },
    });
  });
Cn.displayName = qf;
var [Xf, tr] = tt(We, {}),
  Rn = "SelectViewport",
  Qs = i.forwardRef((e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e,
      s = Te(Rn, n),
      a = tr(Rn, n),
      l = J(t, s.onViewportChange),
      d = i.useRef(0);
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx("style", {
          dangerouslySetInnerHTML: {
            __html:
              "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
          },
          nonce: r,
        }),
        c.jsx(qt.Slot, {
          scope: n,
          children: c.jsx(Y.div, {
            "data-radix-select-viewport": "",
            role: "presentation",
            ...o,
            ref: l,
            style: {
              position: "relative",
              flex: 1,
              overflow: "hidden auto",
              ...o.style,
            },
            onScroll: V(o.onScroll, (u) => {
              const f = u.currentTarget,
                { contentWrapper: p, shouldExpandOnScrollRef: g } = a;
              if (g?.current && p) {
                const h = Math.abs(d.current - f.scrollTop);
                if (h > 0) {
                  const b = window.innerHeight - le * 2,
                    m = parseFloat(p.style.minHeight),
                    v = parseFloat(p.style.height),
                    y = Math.max(m, v);
                  if (y < b) {
                    const x = y + h,
                      w = Math.min(b, x),
                      S = x - w;
                    ((p.style.height = w + "px"),
                      p.style.bottom === "0px" &&
                        ((f.scrollTop = S > 0 ? S : 0),
                        (p.style.justifyContent = "flex-end")));
                  }
                }
              }
              d.current = f.scrollTop;
            }),
          }),
        }),
      ],
    });
  });
Qs.displayName = Rn;
var ea = "SelectGroup",
  [Zf, Jf] = tt(ea),
  Qf = i.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = De();
    return c.jsx(Zf, {
      scope: n,
      id: o,
      children: c.jsx(Y.div, {
        role: "group",
        "aria-labelledby": o,
        ...r,
        ref: t,
      }),
    });
  });
Qf.displayName = ea;
var ta = "SelectLabel",
  na = i.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = Jf(ta, n);
    return c.jsx(Y.div, { id: o.id, ...r, ref: t });
  });
na.displayName = ta;
var Tt = "SelectItem",
  [ep, ra] = tt(Tt),
  oa = i.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        value: r,
        disabled: o = !1,
        textValue: s,
        ...a
      } = e,
      l = je(Tt, n),
      d = Te(Tt, n),
      u = l.value === r,
      [f, p] = i.useState(s ?? ""),
      [g, h] = i.useState(!1),
      b = J(t, (x) => d.itemRefCallback?.(x, r, o)),
      m = De(),
      v = i.useRef("touch"),
      y = () => {
        o || (l.onValueChange(r), l.onOpenChange(!1));
      };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.",
      );
    return c.jsx(ep, {
      scope: n,
      value: r,
      disabled: o,
      textId: m,
      isSelected: u,
      onItemTextChange: i.useCallback((x) => {
        p((w) => w || (x?.textContent ?? "").trim());
      }, []),
      children: c.jsx(qt.ItemSlot, {
        scope: n,
        value: r,
        disabled: o,
        textValue: f,
        children: c.jsx(Y.div, {
          role: "option",
          "aria-labelledby": m,
          "data-highlighted": g ? "" : void 0,
          "aria-selected": u && g,
          "data-state": u ? "checked" : "unchecked",
          "aria-disabled": o || void 0,
          "data-disabled": o ? "" : void 0,
          tabIndex: o ? void 0 : -1,
          ...a,
          ref: b,
          onFocus: V(a.onFocus, () => h(!0)),
          onBlur: V(a.onBlur, () => h(!1)),
          onClick: V(a.onClick, () => {
            v.current !== "mouse" && y();
          }),
          onPointerUp: V(a.onPointerUp, () => {
            v.current === "mouse" && y();
          }),
          onPointerDown: V(a.onPointerDown, (x) => {
            v.current = x.pointerType;
          }),
          onPointerMove: V(a.onPointerMove, (x) => {
            ((v.current = x.pointerType),
              o
                ? d.onItemLeave?.()
                : v.current === "mouse" &&
                  x.currentTarget.focus({ preventScroll: !0 }));
          }),
          onPointerLeave: V(a.onPointerLeave, (x) => {
            x.currentTarget === document.activeElement && d.onItemLeave?.();
          }),
          onKeyDown: V(a.onKeyDown, (x) => {
            (d.searchRef?.current !== "" && x.key === " ") ||
              (zf.includes(x.key) && y(), x.key === " " && x.preventDefault());
          }),
        }),
      }),
    });
  });
oa.displayName = Tt;
var st = "SelectItemText",
  sa = i.forwardRef((e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e,
      a = je(st, n),
      l = Te(st, n),
      d = ra(st, n),
      u = Vf(st, n),
      [f, p] = i.useState(null),
      g = J(
        t,
        (y) => p(y),
        d.onItemTextChange,
        (y) => l.itemTextRefCallback?.(y, d.value, d.disabled),
      ),
      h = f?.textContent,
      b = i.useMemo(
        () =>
          c.jsx(
            "option",
            { value: d.value, disabled: d.disabled, children: h },
            d.value,
          ),
        [d.disabled, d.value, h],
      ),
      { onNativeOptionAdd: m, onNativeOptionRemove: v } = u;
    return (
      re(() => (m(b), () => v(b)), [m, v, b]),
      c.jsxs(c.Fragment, {
        children: [
          c.jsx(Y.span, { id: d.textId, ...s, ref: g }),
          d.isSelected && a.valueNode && !a.valueNodeHasChildren
            ? It.createPortal(s.children, a.valueNode)
            : null,
        ],
      })
    );
  });
sa.displayName = st;
var aa = "SelectItemIndicator",
  ia = i.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return ra(aa, n).isSelected
      ? c.jsx(Y.span, { "aria-hidden": !0, ...r, ref: t })
      : null;
  });
ia.displayName = aa;
var Nn = "SelectScrollUpButton",
  la = i.forwardRef((e, t) => {
    const n = Te(Nn, e.__scopeSelect),
      r = tr(Nn, e.__scopeSelect),
      [o, s] = i.useState(!1),
      a = J(t, r.onScrollButtonChange);
    return (
      re(() => {
        if (n.viewport && n.isPositioned) {
          let l = function () {
            const u = d.scrollTop > 0;
            s(u);
          };
          const d = n.viewport;
          return (
            l(),
            d.addEventListener("scroll", l),
            () => d.removeEventListener("scroll", l)
          );
        }
      }, [n.viewport, n.isPositioned]),
      o
        ? c.jsx(da, {
            ...e,
            ref: a,
            onAutoScroll: () => {
              const { viewport: l, selectedItem: d } = n;
              l && d && (l.scrollTop = l.scrollTop - d.offsetHeight);
            },
          })
        : null
    );
  });
la.displayName = Nn;
var En = "SelectScrollDownButton",
  ca = i.forwardRef((e, t) => {
    const n = Te(En, e.__scopeSelect),
      r = tr(En, e.__scopeSelect),
      [o, s] = i.useState(!1),
      a = J(t, r.onScrollButtonChange);
    return (
      re(() => {
        if (n.viewport && n.isPositioned) {
          let l = function () {
            const u = d.scrollHeight - d.clientHeight,
              f = Math.ceil(d.scrollTop) < u;
            s(f);
          };
          const d = n.viewport;
          return (
            l(),
            d.addEventListener("scroll", l),
            () => d.removeEventListener("scroll", l)
          );
        }
      }, [n.viewport, n.isPositioned]),
      o
        ? c.jsx(da, {
            ...e,
            ref: a,
            onAutoScroll: () => {
              const { viewport: l, selectedItem: d } = n;
              l && d && (l.scrollTop = l.scrollTop + d.offsetHeight);
            },
          })
        : null
    );
  });
ca.displayName = En;
var da = i.forwardRef((e, t) => {
    const { __scopeSelect: n, onAutoScroll: r, ...o } = e,
      s = Te("SelectScrollButton", n),
      a = i.useRef(null),
      l = Xt(n),
      d = i.useCallback(() => {
        a.current !== null &&
          (window.clearInterval(a.current), (a.current = null));
      }, []);
    return (
      i.useEffect(() => () => d(), [d]),
      re(() => {
        l()
          .find((f) => f.ref.current === document.activeElement)
          ?.ref.current?.scrollIntoView({ block: "nearest" });
      }, [l]),
      c.jsx(Y.div, {
        "aria-hidden": !0,
        ...o,
        ref: t,
        style: { flexShrink: 0, ...o.style },
        onPointerDown: V(o.onPointerDown, () => {
          a.current === null && (a.current = window.setInterval(r, 50));
        }),
        onPointerMove: V(o.onPointerMove, () => {
          (s.onItemLeave?.(),
            a.current === null && (a.current = window.setInterval(r, 50)));
        }),
        onPointerLeave: V(o.onPointerLeave, () => {
          d();
        }),
      })
    );
  }),
  tp = "SelectSeparator",
  ua = i.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return c.jsx(Y.div, { "aria-hidden": !0, ...r, ref: t });
  });
ua.displayName = tp;
var kn = "SelectArrow",
  np = i.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = Zt(n),
      s = je(kn, n),
      a = Te(kn, n);
    return s.open && a.position === "popper"
      ? c.jsx(vs, { ...o, ...r, ref: t })
      : null;
  });
np.displayName = kn;
var rp = "SelectBubbleInput",
  fa = i.forwardRef(({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = i.useRef(null),
      s = J(r, o),
      a = Lf(t);
    return (
      i.useEffect(() => {
        const l = o.current;
        if (!l) return;
        const d = window.HTMLSelectElement.prototype,
          f = Object.getOwnPropertyDescriptor(d, "value").set;
        if (a !== t && f) {
          const p = new Event("change", { bubbles: !0 });
          (f.call(l, t), l.dispatchEvent(p));
        }
      }, [a, t]),
      c.jsx(Y.select, {
        ...n,
        style: { ...bs, ...n.style },
        ref: s,
        defaultValue: t,
      })
    );
  });
fa.displayName = rp;
function pa(e) {
  return e === "" || e === void 0;
}
function ma(e) {
  const t = Le(e),
    n = i.useRef(""),
    r = i.useRef(0),
    o = i.useCallback(
      (a) => {
        const l = n.current + a;
        (t(l),
          (function d(u) {
            ((n.current = u),
              window.clearTimeout(r.current),
              u !== "" && (r.current = window.setTimeout(() => d(""), 1e3)));
          })(l));
      },
      [t],
    ),
    s = i.useCallback(() => {
      ((n.current = ""), window.clearTimeout(r.current));
    }, []);
  return (
    i.useEffect(() => () => window.clearTimeout(r.current), []),
    [n, o, s]
  );
}
function ha(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t,
    s = n ? e.indexOf(n) : -1;
  let a = op(e, Math.max(s, 0));
  o.length === 1 && (a = a.filter((u) => u !== n));
  const d = a.find((u) =>
    u.textValue.toLowerCase().startsWith(o.toLowerCase()),
  );
  return d !== n ? d : void 0;
}
function op(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var sp = Bs,
  ga = Hs,
  ap = Gs,
  ip = Ks,
  lp = Ys,
  va = qs,
  cp = Qs,
  ba = na,
  xa = oa,
  dp = sa,
  up = ia,
  ya = la,
  wa = ca,
  Sa = ua;
const zr = sp,
  Fr = ap,
  An = i.forwardRef(({ className: e, children: t, ...n }, r) =>
    c.jsxs(ga, {
      ref: r,
      className: j(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        e,
      ),
      ...n,
      children: [
        t,
        c.jsx(ip, {
          asChild: !0,
          children: c.jsx(Yr, { className: "h-4 w-4 opacity-50" }),
        }),
      ],
    }),
  );
An.displayName = ga.displayName;
const Ca = i.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(ya, {
    ref: n,
    className: j("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: c.jsx(ai, { className: "h-4 w-4" }),
  }),
);
Ca.displayName = ya.displayName;
const Ra = i.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(wa, {
    ref: n,
    className: j("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: c.jsx(Yr, { className: "h-4 w-4" }),
  }),
);
Ra.displayName = wa.displayName;
const Pn = i.forwardRef(
  ({ className: e, children: t, position: n = "popper", ...r }, o) =>
    c.jsx(lp, {
      children: c.jsxs(va, {
        ref: o,
        className: j(
          "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
          n === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          e,
        ),
        position: n,
        ...r,
        children: [
          c.jsx(Ca, {}),
          c.jsx(cp, {
            className: j(
              "p-1",
              n === "popper" &&
                "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
            ),
            children: t,
          }),
          c.jsx(Ra, {}),
        ],
      }),
    }),
);
Pn.displayName = va.displayName;
const fp = i.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(ba, {
    ref: n,
    className: j("px-2 py-1.5 text-sm font-semibold", e),
    ...t,
  }),
);
fp.displayName = ba.displayName;
const Me = i.forwardRef(({ className: e, children: t, ...n }, r) =>
  c.jsxs(xa, {
    ref: r,
    className: j(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e,
    ),
    ...n,
    children: [
      c.jsx("span", {
        className:
          "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
        children: c.jsx(up, { children: c.jsx(ri, { className: "h-4 w-4" }) }),
      }),
      c.jsx(dp, { children: t }),
    ],
  }),
);
Me.displayName = xa.displayName;
const pp = i.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Sa, { ref: n, className: j("-mx-1 my-1 h-px bg-muted", e), ...t }),
);
pp.displayName = Sa.displayName;
const Ot = [
    {
      id: "1",
      name: "frontend-web",
      language: "TypeScript",
      lastCommit: "2h ago",
      health: "healthy",
      openPRs: 3,
      dependencies: 142,
      outdated: 6,
      coverage: 87,
    },
    {
      id: "2",
      name: "api-gateway",
      language: "Go",
      lastCommit: "1d ago",
      health: "warning",
      openPRs: 7,
      dependencies: 54,
      outdated: 12,
      coverage: 72,
    },
    {
      id: "3",
      name: "ml-pipeline",
      language: "Python",
      lastCommit: "5h ago",
      health: "critical",
      openPRs: 11,
      dependencies: 203,
      outdated: 34,
      coverage: 48,
    },
    {
      id: "4",
      name: "auth-service",
      language: "TypeScript",
      lastCommit: "30m ago",
      health: "healthy",
      openPRs: 1,
      dependencies: 78,
      outdated: 2,
      coverage: 94,
    },
    {
      id: "5",
      name: "billing-core",
      language: "Java",
      lastCommit: "3d ago",
      health: "warning",
      openPRs: 4,
      dependencies: 96,
      outdated: 9,
      coverage: 81,
    },
    {
      id: "6",
      name: "mobile-app",
      language: "TypeScript",
      lastCommit: "6h ago",
      health: "healthy",
      openPRs: 2,
      dependencies: 167,
      outdated: 4,
      coverage: 76,
    },
    {
      id: "7",
      name: "data-warehouse",
      language: "Python",
      lastCommit: "12h ago",
      health: "warning",
      openPRs: 5,
      dependencies: 88,
      outdated: 15,
      coverage: 65,
    },
  ],
  mp = { TypeScript: mi, JavaScript: fi, Python: ti, Go: li, Java: di },
  hp = {
    healthy: "bg-status-success",
    warning: "bg-amber-400",
    critical: "bg-status-failure",
  };
function gp() {
  const { state: e } = ut(),
    t = e === "collapsed",
    n = La({ select: (p) => p.location.pathname }),
    [r, o] = i.useState(""),
    [s, a] = i.useState("all"),
    [l, d] = i.useState("all"),
    u = i.useMemo(() => Array.from(new Set(Ot.map((p) => p.language))), []),
    f = i.useMemo(
      () =>
        Ot.filter(
          (p) =>
            !(
              (r && !p.name.toLowerCase().includes(r.toLowerCase())) ||
              (s !== "all" && p.language !== s) ||
              (l !== "all" && p.health !== l)
            ),
        ),
      [r, s, l],
    );
  return c.jsxs(Os, {
    collapsible: "icon",
    children: [
      c.jsx(_s, {
        className: "border-b border-sidebar-border",
        children: c.jsxs("div", {
          className: "flex items-center gap-2 px-2 py-1.5",
          children: [
            c.jsx("div", {
              className:
                "h-7 w-7 rounded-md bg-primary text-primary-foreground grid place-items-center shrink-0",
              children: c.jsx(Qa, { className: "h-4 w-4" }),
            }),
            !t &&
              c.jsxs("div", {
                className: "min-w-0",
                children: [
                  c.jsx("p", {
                    className: "text-sm font-semibold leading-tight",
                    children: "DevPortal",
                  }),
                  c.jsx("p", {
                    className:
                      "text-[11px] text-muted-foreground leading-tight",
                    children: "AI-native workflows",
                  }),
                ],
              }),
          ],
        }),
      }),
      c.jsxs(Ms, {
        children: [
          !t &&
            c.jsxs("div", {
              className: "px-2 pt-2 space-y-2",
              children: [
                c.jsxs("div", {
                  className: "relative",
                  children: [
                    c.jsx(Ti, {
                      className:
                        "absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground",
                    }),
                    c.jsx(Mn, {
                      placeholder: "Search repos...",
                      value: r,
                      onChange: (p) => o(p.target.value),
                      className: "h-8 pl-7 text-xs",
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "flex gap-1.5",
                  children: [
                    c.jsxs(zr, {
                      value: s,
                      onValueChange: a,
                      children: [
                        c.jsx(An, {
                          className: "h-7 text-xs flex-1",
                          children: c.jsx(Fr, {}),
                        }),
                        c.jsxs(Pn, {
                          children: [
                            c.jsx(Me, { value: "all", children: "All langs" }),
                            u.map((p) =>
                              c.jsx(Me, { value: p, children: p }, p),
                            ),
                          ],
                        }),
                      ],
                    }),
                    c.jsxs(zr, {
                      value: l,
                      onValueChange: d,
                      children: [
                        c.jsx(An, {
                          className: "h-7 text-xs flex-1",
                          children: c.jsx(Fr, {}),
                        }),
                        c.jsxs(Pn, {
                          children: [
                            c.jsx(Me, { value: "all", children: "All status" }),
                            c.jsx(Me, {
                              value: "healthy",
                              children: "Healthy",
                            }),
                            c.jsx(Me, {
                              value: "warning",
                              children: "Warning",
                            }),
                            c.jsx(Me, {
                              value: "critical",
                              children: "Critical",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          c.jsxs(Ds, {
            children: [
              c.jsx(Ls, { children: "Repositories" }),
              c.jsx($s, {
                children: c.jsxs(zs, {
                  children: [
                    f.map((p) => {
                      const g = `/repo/${p.id}`,
                        h = n === g,
                        b = mp[p.language] ?? bi;
                      return c.jsx(
                        Fs,
                        {
                          children: c.jsx(Ws, {
                            asChild: !0,
                            isActive: h,
                            tooltip: p.name,
                            className: "h-auto py-2",
                            children: c.jsxs(Da, {
                              to: "/repo/$repoId",
                              params: { repoId: p.id },
                              children: [
                                c.jsx(b, {
                                  className:
                                    "h-4 w-4 shrink-0 text-muted-foreground",
                                }),
                                !t &&
                                  c.jsxs("div", {
                                    className: "flex flex-col min-w-0 flex-1",
                                    children: [
                                      c.jsxs("div", {
                                        className:
                                          "flex items-center justify-between gap-2",
                                        children: [
                                          c.jsx("span", {
                                            className: "truncate text-sm",
                                            children: p.name,
                                          }),
                                          c.jsx("span", {
                                            className: `h-1.5 w-1.5 rounded-full shrink-0 ${hp[p.health]}`,
                                          }),
                                        ],
                                      }),
                                      c.jsxs("span", {
                                        className:
                                          "text-[10px] text-muted-foreground truncate",
                                        children: [
                                          p.language,
                                          " ",
                                          p.lastCommit,
                                        ],
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          }),
                        },
                        p.id,
                      );
                    }),
                    f.length === 0 &&
                      !t &&
                      c.jsx("p", {
                        className:
                          "px-3 py-4 text-xs text-muted-foreground text-center",
                        children: "No repositories",
                      }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const Na = i.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", {
    ref: n,
    className: j("rounded-xl border bg-card text-card-foreground shadow", e),
    ...t,
  }),
);
Na.displayName = "Card";
const vp = i.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", {
    ref: n,
    className: j("flex flex-col space-y-1.5 p-6", e),
    ...t,
  }),
);
vp.displayName = "CardHeader";
const bp = i.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", {
    ref: n,
    className: j("font-semibold leading-none tracking-tight", e),
    ...t,
  }),
);
bp.displayName = "CardTitle";
const xp = i.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", {
    ref: n,
    className: j("text-sm text-muted-foreground", e),
    ...t,
  }),
);
xp.displayName = "CardDescription";
const yp = i.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", { ref: n, className: j("p-6 pt-0", e), ...t }),
);
yp.displayName = "CardContent";
const wp = i.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", { ref: n, className: j("flex items-center p-6 pt-0", e), ...t }),
);
wp.displayName = "CardFooter";
const Sp = {
  healthy: "bg-status-success/15 text-status-success border-status-success/30",
  warning: "bg-amber-400/15 text-amber-400 border-amber-400/30",
  critical: "bg-status-failure/15 text-status-failure border-status-failure/30",
};
function rt({ label: e, value: t, icon: n, accent: r }) {
  return c.jsxs(Na, {
    className: "p-4 transition-colors hover:bg-muted/30",
    children: [
      c.jsxs("div", {
        className: "flex items-center justify-between",
        children: [
          c.jsx("p", {
            className: "text-xs uppercase tracking-wide text-muted-foreground",
            children: e,
          }),
          c.jsx(n, { className: `h-4 w-4 ${r ?? "text-muted-foreground"}` }),
        ],
      }),
      c.jsx("p", {
        className: "mt-2 text-2xl font-semibold tabular-nums",
        children: t,
      }),
    ],
  });
}
function Cp({ repo: e, onRunAgent: t }) {
  return c.jsxs("div", {
    className: "space-y-6",
    children: [
      c.jsxs("div", {
        className: "flex items-start justify-between gap-4 flex-wrap",
        children: [
          c.jsxs("div", {
            className: "space-y-2",
            children: [
              c.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  c.jsx("h1", {
                    className: "text-2xl font-bold tracking-tight",
                    children: e.name,
                  }),
                  c.jsx("span", {
                    className: `text-xs px-2 py-0.5 rounded-full border font-medium ${Sp[e.health]}`,
                    children: e.health,
                  }),
                ],
              }),
              c.jsxs("p", {
                className: "text-sm text-muted-foreground",
                children: [e.language, " last commit ", e.lastCommit],
              }),
            ],
          }),
          c.jsxs(Ee, {
            size: "lg",
            onClick: t,
            className: "gap-2",
            children: [
              c.jsx(ki, { className: "h-4 w-4 fill-current" }),
              "Run Agent Task",
            ],
          }),
        ],
      }),
      c.jsxs("div", {
        className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3",
        children: [
          c.jsx(rt, { label: "Open PRs", value: e.openPRs, icon: yi }),
          c.jsx(rt, { label: "Dependencies", value: e.dependencies, icon: Ci }),
          c.jsx(rt, {
            label: "Outdated",
            value: e.outdated,
            icon: Di,
            accent: e.outdated > 10 ? "text-status-failure" : "text-amber-400",
          }),
          c.jsx(rt, {
            label: "Coverage",
            value: `${e.coverage}%`,
            icon: Ii,
            accent: e.coverage >= 80 ? "text-status-success" : "text-amber-400",
          }),
          c.jsx(rt, { label: "Health", value: e.health, icon: Za }),
        ],
      }),
    ],
  });
}
const Rp = {
  "Create Pull Request": [
    "Agent started",
    "Analyzing branch diff",
    "Generating PR description",
    "Pushing branch to origin",
    "Opening pull request",
    "PR #482 created successfully",
  ],
  "Refactor Code": [
    "Agent started",
    "Loading project context",
    "Identifying refactor candidates",
    "Applying transformations",
    "Re-running type checks",
    "Refactor complete",
  ],
  "Upgrade Dependencies": [
    "Agent started",
    "Scanning dependencies",
    "Found outdated packages",
    "Resolving version conflicts",
    "Updating dependencies",
    "Running tests",
    "Tests passed",
  ],
  "Run Tests": [
    "Agent started",
    "Discovering test suites",
    "Running unit tests",
    "Running integration tests",
    "Collecting coverage",
    "All tests passed",
  ],
  "Security Scan": [
    "Agent started",
    "Fetching CVE database",
    "Scanning dependencies",
    "Checking secrets in source",
    "Generating security report",
    "Scan complete: 2 advisories",
  ],
  "Dependency Analysis": [
    "Agent started",
    "Building dependency graph",
    "Detecting circular imports",
    "Analyzing bundle impact",
    "Report ready",
  ],
};
function Wr() {
  const e = new Date();
  return `${String(e.getHours()).padStart(2, "0")}:${String(e.getMinutes()).padStart(2, "0")}:${String(e.getSeconds()).padStart(2, "0")}`;
}
function Np(e) {
  const t = Rp[e] ?? ["Agent started", "Working", "Done"],
    n = new Set();
  let r = !1,
    o = 0;
  const s = (l) => {
    n.forEach((d) => d(l));
  };
  setTimeout(() => {
    r || (s({ type: "status", status: "running" }), a());
  }, 600);
  const a = () => {
    if (!r)
      if (o < t.length)
        (s({ type: "log", log: `[${Wr()}] ${t[o]}` }), o++, setTimeout(a, 1e3));
      else {
        const l = Math.random() > 0.1,
          d = l ? "success" : "failure";
        s({
          type: "log",
          log: `[${Wr()}] ${l ? "✓ Task completed successfully" : "✗ Task failed unexpectedly"}`,
        });
        const u = {
          duration: `${t.length}.0s`,
          filesModified: Math.floor(Math.random() * 12) + 1,
          testsExecuted: Math.floor(Math.random() * 200) + 20,
          coverageChange: l
            ? `+${(Math.random() * 3).toFixed(1)}%`
            : `-${(Math.random() * 2).toFixed(1)}%`,
        };
        (s({ type: "status", status: d }),
          s({ type: "complete", status: d, result: u }));
      }
  };
  return {
    cancel: () => {
      ((r = !0), n.clear());
    },
    subscribe: (l) => (n.add(l), () => n.delete(l)),
  };
}
function Ep(e) {
  return e.includes("✓") || /passed|success|complete/i.test(e)
    ? "text-status-success"
    : e.includes("✗") || /fail|error/i.test(e)
      ? "text-status-failure"
      : /warn|outdated|advisor/i.test(e)
        ? "text-amber-400"
        : "text-zinc-300";
}
function kp({ logs: e, status: t }) {
  const n = i.useRef(null);
  return (
    i.useEffect(() => {
      n.current && (n.current.scrollTop = n.current.scrollHeight);
    }, [e]),
    c.jsxs("div", {
      className:
        "flex-1 min-h-0 flex flex-col bg-terminal text-terminal-foreground",
      children: [
        c.jsxs("div", {
          className:
            "flex items-center gap-1.5 px-3 py-1.5 border-b border-white/5 bg-black/30",
          children: [
            c.jsx("span", {
              className: "h-2.5 w-2.5 rounded-full bg-rose-500/80",
            }),
            c.jsx("span", {
              className: "h-2.5 w-2.5 rounded-full bg-amber-500/80",
            }),
            c.jsx("span", {
              className: "h-2.5 w-2.5 rounded-full bg-emerald-500/80",
            }),
            c.jsx("span", {
              className: "ml-2 text-[11px] font-mono text-zinc-500",
              children: "agent — bash",
            }),
          ],
        }),
        c.jsx("div", {
          ref: n,
          className:
            "flex-1 overflow-y-auto px-4 py-3 font-mono text-xs leading-relaxed",
          children:
            e.length === 0
              ? c.jsxs("div", {
                  className: "flex items-center gap-2 text-zinc-500",
                  children: [
                    c.jsx(mn, { className: "h-3 w-3 animate-spin" }),
                    c.jsx("span", { children: "Initializing agent…" }),
                  ],
                })
              : c.jsxs(c.Fragment, {
                  children: [
                    e.map((r, o) =>
                      c.jsxs(
                        "div",
                        {
                          className: `whitespace-pre-wrap animate-in fade-in slide-in-from-left-1 duration-200 ${Ep(r)}`,
                          children: [
                            c.jsx("span", {
                              className: "text-zinc-600 mr-1",
                              children: "$",
                            }),
                            r,
                          ],
                        },
                        o,
                      ),
                    ),
                    t === "running" &&
                      c.jsxs("div", {
                        className:
                          "flex items-center gap-2 mt-1 text-status-running",
                        children: [
                          c.jsx(mn, { className: "h-3 w-3 animate-spin" }),
                          c.jsx("span", {
                            className: "animate-pulse",
                            children: "streaming…",
                          }),
                        ],
                      }),
                  ],
                }),
        }),
      ],
    })
  );
}
const Ap = {
    pending: "bg-muted text-muted-foreground border-border",
    running:
      "bg-status-running/15 text-status-running border-status-running/30",
    success:
      "bg-status-success/15 text-status-success border-status-success/30",
    failure:
      "bg-status-failure/15 text-status-failure border-status-failure/30",
  },
  Pp = {
    pending: "bg-muted-foreground",
    running: "bg-status-running",
    success: "bg-status-success",
    failure: "bg-status-failure",
  };
function jp({ status: e, className: t = "" }) {
  return c.jsxs("span", {
    className: `inline-flex items-center gap-1.5 text-xs px-2 py-0.5 rounded-full border font-medium transition-colors ${Ap[e]} ${t}`,
    children: [
      e === "running"
        ? c.jsx(mn, { className: "h-3 w-3 animate-spin" })
        : c.jsx("span", {
            className: `h-1.5 w-1.5 rounded-full ${Pp[e]} ${e === "pending" ? "animate-pulse" : ""}`,
          }),
      e,
    ],
  });
}
function Tp({ repo: e, task: t, runId: n, onClose: r }) {
  const [o, s] = i.useState([]),
    [a, l] = i.useState("pending"),
    [d, u] = i.useState(null),
    [f, p] = i.useState(!1),
    [g, h] = i.useState(n),
    b = i.useRef(null);
  i.useEffect(() => {
    (s([]), u(null), l("pending"));
    const y = Np(t);
    b.current = y;
    const x = y.subscribe((w) => {
      w.type === "log" && w.log
        ? s((S) => [...S, w.log])
        : w.type === "status" && w.status
          ? l(w.status)
          : w.type === "complete" && w.result && u(w.result);
    });
    return () => {
      (x(), y.cancel());
    };
  }, [t, g, e.id]);
  const m = () => h((y) => y + 1),
    v = a === "running" || a === "pending";
  return c.jsxs("div", {
    className: "flex flex-col h-full bg-card",
    children: [
      c.jsxs("div", {
        className:
          "flex items-center justify-between gap-3 border-b border-border px-4 py-2.5",
        children: [
          c.jsxs("div", {
            className: "flex items-center gap-2 min-w-0",
            children: [
              c.jsx(qr, {
                className: "h-4 w-4 text-muted-foreground shrink-0",
              }),
              c.jsx("span", {
                className: "text-sm font-medium truncate",
                children: t,
              }),
              c.jsxs("span", {
                className: "text-xs text-muted-foreground truncate",
                children: ["on ", e.name],
              }),
              c.jsx(jp, { status: a }),
            ],
          }),
          c.jsxs("div", {
            className: "flex items-center gap-1",
            children: [
              !v &&
                c.jsxs(c.Fragment, {
                  children: [
                    c.jsxs(Ee, {
                      variant: "ghost",
                      size: "sm",
                      onClick: m,
                      children: [
                        c.jsx(Pi, { className: "h-3.5 w-3.5 mr-1" }),
                        "Retry",
                      ],
                    }),
                    c.jsxs(Ee, {
                      variant: "ghost",
                      size: "sm",
                      onClick: () => p(!0),
                      disabled: !d,
                      children: [
                        c.jsx(gi, { className: "h-3.5 w-3.5 mr-1" }),
                        "Details",
                      ],
                    }),
                  ],
                }),
              c.jsx(Ee, {
                variant: "ghost",
                size: "icon",
                className: "h-7 w-7",
                onClick: r,
                children: c.jsx(On, { className: "h-3.5 w-3.5" }),
              }),
            ],
          }),
        ],
      }),
      c.jsx(kp, { logs: o, status: a }),
      c.jsx(Uo, {
        open: f,
        onOpenChange: p,
        children: c.jsxs(Wn, {
          children: [
            c.jsxs(Bn, {
              children: [
                c.jsx(Vn, { children: "Run Details" }),
                c.jsxs(Hn, { children: [t, " on ", e.name] }),
              ],
            }),
            d &&
              c.jsxs("div", {
                className: "mt-6 space-y-3 text-sm px-1",
                children: [
                  c.jsx(ot, { label: "Duration", value: d.duration }),
                  c.jsx(ot, {
                    label: "Files modified",
                    value: d.filesModified,
                  }),
                  c.jsx(ot, {
                    label: "Tests executed",
                    value: d.testsExecuted,
                  }),
                  c.jsx(ot, {
                    label: "Coverage change",
                    value: d.coverageChange,
                  }),
                  c.jsx(ot, { label: "Final status", value: a }),
                ],
              }),
          ],
        }),
      }),
    ],
  });
}
function ot({ label: e, value: t }) {
  return c.jsxs("div", {
    className: "flex justify-between border-b border-border pb-2",
    children: [
      c.jsx("span", { className: "text-muted-foreground", children: e }),
      c.jsx("span", { className: "font-medium", children: t }),
    ],
  });
}
const Op = Bo,
  Ip = Vo,
  Ea = i.forwardRef(({ className: e, ...t }, n) =>
    c.jsx($t, {
      ref: n,
      className: j(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e,
      ),
      ...t,
    }),
  );
Ea.displayName = $t.displayName;
const ka = i.forwardRef(({ className: e, children: t, ...n }, r) =>
  c.jsxs(Ip, {
    children: [
      c.jsx(Ea, {}),
      c.jsxs(zt, {
        ref: r,
        className: j(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          e,
        ),
        ...n,
        children: [
          t,
          c.jsxs(Ho, {
            className:
              "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: [
              c.jsx(On, { className: "h-4 w-4" }),
              c.jsx("span", { className: "sr-only", children: "Close" }),
            ],
          }),
        ],
      }),
    ],
  }),
);
ka.displayName = zt.displayName;
const Aa = ({ className: e, ...t }) =>
  c.jsx("div", {
    className: j("flex flex-col space-y-1.5 text-center sm:text-left", e),
    ...t,
  });
Aa.displayName = "DialogHeader";
const Pa = ({ className: e, ...t }) =>
  c.jsx("div", {
    className: j(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e,
    ),
    ...t,
  });
Pa.displayName = "DialogFooter";
const ja = i.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Ft, {
    ref: n,
    className: j("text-lg font-semibold leading-none tracking-tight", e),
    ...t,
  }),
);
ja.displayName = Ft.displayName;
const Ta = i.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Wt, { ref: n, className: j("text-sm text-muted-foreground", e), ...t }),
);
Ta.displayName = Wt.displayName;
const Br = [
  "Create Pull Request",
  "Refactor Code",
  "Upgrade Dependencies",
  "Run Tests",
  "Security Scan",
  "Dependency Analysis",
];
function _p({ open: e, onOpenChange: t, onRun: n }) {
  const [r, o] = i.useState(Br[0]);
  return c.jsx(Op, {
    open: e,
    onOpenChange: t,
    children: c.jsxs(ka, {
      children: [
        c.jsxs(Aa, {
          children: [
            c.jsx(ja, { children: "Run Agent Task" }),
            c.jsx(Ta, {
              children:
                "Choose a task for the AI agent to perform on this repository.",
            }),
          ],
        }),
        c.jsx("div", {
          className: "grid grid-cols-2 gap-2 py-2",
          children: Br.map((s) =>
            c.jsx(
              "button",
              {
                onClick: () => o(s),
                className: `text-left rounded-lg border px-3 py-3 text-sm transition-colors ${r === s ? "border-primary bg-primary/10" : "border-border hover:bg-muted/50"}`,
                children: s,
              },
              s,
            ),
          ),
        }),
        c.jsxs(Pa, {
          children: [
            c.jsx(Ee, {
              variant: "outline",
              onClick: () => t(!1),
              children: "Cancel",
            }),
            c.jsx(Ee, { onClick: () => n(r), children: "Run Agent" }),
          ],
        }),
      ],
    }),
  });
}
function Lp({ repoId: e }) {
  const t = Ot.find((u) => u.id === e) ?? Ot[0],
    [n, r] = i.useState(!1),
    [o, s] = i.useState(null),
    [a, l] = i.useState(0),
    d = (u) => {
      (s(u), l((f) => f + 1), r(!1));
    };
  return c.jsx(Ts, {
    children: c.jsxs("div", {
      className: "min-h-screen flex w-full bg-background text-foreground",
      children: [
        c.jsx(gp, {}),
        c.jsxs("div", {
          className: "flex-1 flex flex-col min-w-0 h-screen",
          children: [
            c.jsxs("header", {
              className:
                "h-12 flex items-center gap-2 border-b border-border px-3 shrink-0",
              children: [
                c.jsx(Is, {}),
                c.jsx("div", { className: "h-4 w-px bg-border mx-1" }),
                c.jsx("span", {
                  className: "text-sm text-muted-foreground",
                  children: "Repositories",
                }),
                c.jsx("span", {
                  className: "text-sm text-muted-foreground",
                  children: "/",
                }),
                c.jsx("span", {
                  className: "text-sm font-medium",
                  children: t.name,
                }),
              ],
            }),
            c.jsxs("div", {
              className: "flex-1 flex flex-col min-h-0",
              children: [
                c.jsx("main", {
                  className: "flex-1 overflow-y-auto p-6",
                  children: c.jsx(Cp, { repo: t, onRunAgent: () => r(!0) }),
                }),
                c.jsx("section", {
                  className: `border-t border-border shrink-0 transition-all duration-300 ease-out ${o ? "h-80" : "h-10"}`,
                  children: o
                    ? c.jsx(Tp, {
                        repo: t,
                        task: o,
                        runId: a,
                        onClose: () => s(null),
                      })
                    : c.jsxs("div", {
                        className:
                          "h-full flex items-center px-4 text-xs text-muted-foreground gap-2",
                        children: [
                          c.jsx(qr, { className: "h-3.5 w-3.5" }),
                          "Agent execution panel — run a task to view streaming logs",
                        ],
                      }),
                }),
              ],
            }),
          ],
        }),
        c.jsx(_p, { open: n, onOpenChange: r, onRun: d }),
      ],
    }),
  });
}
export { Lp as H };
