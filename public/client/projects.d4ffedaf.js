import {
  S as e,
  i as s,
  s as t,
  e as r,
  c as n,
  h as a,
  F as o,
  j as c,
  d as i,
  w as l,
  a as p,
  b as g,
  x as m,
  f,
  m as h,
  y as d,
  k as u,
  z as $,
  A as v,
  B as w,
  v as j,
  r as x,
  n as S,
  C as b,
  D as k,
  E as y,
} from './client.623784a1.js';
import { S as D } from './Summary-Bar.1186cdb4.js';
import { M as B, a as _ } from './Milestone-Synopsis.8aab5b2d.js';
const E = 50,
  T = 60;
function I(e, s, t) {
  const r = e.slice();
  return (r[5] = s[t]), r;
}
function C(e) {
  let s, t, l, p;
  return {
    c() {
      (s = r('img')), this.h();
    },
    l(e) {
      (s = n(e, 'IMG', { src: !0, alt: !0, class: !0 })), this.h();
    },
    h() {
      s.src !== (t = e[5].src) && a(s, 'src', t),
        a(s, 'alt', (l = e[1] + ' app')),
        a(s, 'class', (p = o(e[5].class) + ' svelte-1n7ko2a'));
    },
    m(e, t) {
      c(e, s, t);
    },
    p(e, r) {
      4 & r && s.src !== (t = e[5].src) && a(s, 'src', t),
        2 & r && l !== (l = e[1] + ' app') && a(s, 'alt', l),
        4 & r &&
          p !== (p = o(e[5].class) + ' svelte-1n7ko2a') &&
          a(s, 'class', p);
    },
    d(e) {
      e && i(s);
    },
  };
}
function M(e) {
  let s, t, o, x, S, b;
  const k = new B({ props: { description: e[0] } });
  let y = e[2],
    D = [];
  for (let s = 0; s < y.length; s += 1) D[s] = C(I(e, y, s));
  const E = new _({ props: { text: e[1] } });
  return {
    c() {
      (s = r('div')),
        l(k.$$.fragment),
        (t = p()),
        (o = r('div')),
        (x = r('div'));
      for (let e = 0; e < D.length; e += 1) D[e].c();
      (S = p()), l(E.$$.fragment), this.h();
    },
    l(e) {
      s = n(e, 'DIV', { class: !0, style: !0 });
      var r = g(s);
      m(k.$$.fragment, r), (t = f(r)), (o = n(r, 'DIV', { class: !0 }));
      var a = g(o);
      x = n(a, 'DIV', { class: !0 });
      var c = g(x);
      for (let e = 0; e < D.length; e += 1) D[e].l(c);
      c.forEach(i),
        (S = f(a)),
        m(E.$$.fragment, a),
        a.forEach(i),
        r.forEach(i),
        this.h();
    },
    h() {
      a(x, 'class', 'illustrations svelte-1n7ko2a'),
        a(o, 'class', 'content svelte-1n7ko2a'),
        a(s, 'class', 'project svelte-1n7ko2a'),
        h(s, 'height', e[3]);
    },
    m(e, r) {
      c(e, s, r), d(k, s, null), u(s, t), u(s, o), u(o, x);
      for (let e = 0; e < D.length; e += 1) D[e].m(x, null);
      u(o, S), d(E, o, null), (b = !0);
    },
    p(e, [t]) {
      const r = {};
      if ((1 & t && (r.description = e[0]), k.$set(r), 6 & t)) {
        let s;
        for (y = e[2], s = 0; s < y.length; s += 1) {
          const r = I(e, y, s);
          D[s] ? D[s].p(r, t) : ((D[s] = C(r)), D[s].c(), D[s].m(x, null));
        }
        for (; s < D.length; s += 1) D[s].d(1);
        D.length = y.length;
      }
      const n = {};
      2 & t && (n.text = e[1]),
        E.$set(n),
        (!b || 8 & t) && h(s, 'height', e[3]);
    },
    i(e) {
      b || ($(k.$$.fragment, e), $(E.$$.fragment, e), (b = !0));
    },
    o(e) {
      v(k.$$.fragment, e), v(E.$$.fragment, e), (b = !1);
    },
    d(e) {
      e && i(s), w(k), j(D, e), w(E);
    },
  };
}
function H(e, s, t) {
  let { description: r } = s,
    { text: n } = s,
    { images: a } = s,
    o = 'auto';
  return (
    x(async () =>
      (function () {
        const e = window.innerHeight - E - T;
        t(3, (o = e + 'px'));
      })()
    ),
    (e.$set = (e) => {
      'description' in e && t(0, (r = e.description)),
        'text' in e && t(1, (n = e.text)),
        'images' in e && t(2, (a = e.images));
    }),
    [r, n, a, o]
  );
}
class V extends e {
  constructor(e) {
    super(), s(this, e, H, M, t, { description: 0, text: 1, images: 2 });
  }
}
function A(e, s, t) {
  const r = e.slice();
  return (r[2] = s[t]), r;
}
function P(e) {
  let s;
  const t = new V({
    props: {
      description: e[2].description,
      text: e[2].name,
      images: e[2].images,
    },
  });
  return {
    c() {
      l(t.$$.fragment);
    },
    l(e) {
      m(t.$$.fragment, e);
    },
    m(e, r) {
      d(t, e, r), (s = !0);
    },
    p: S,
    i(e) {
      s || ($(t.$$.fragment, e), (s = !0));
    },
    o(e) {
      v(t.$$.fragment, e), (s = !1);
    },
    d(e) {
      w(t, e);
    },
  };
}
function J(e) {
  let s,
    t,
    o,
    h,
    x = e[0],
    S = [];
  for (let s = 0; s < x.length; s += 1) S[s] = P(A(e, x, s));
  const B = (e) =>
      v(S[e], 1, 1, () => {
        S[e] = null;
      }),
    _ = new D({ props: { content: e[1] } });
  return {
    c() {
      (s = p()), (t = r('div'));
      for (let e = 0; e < S.length; e += 1) S[e].c();
      (o = p()), l(_.$$.fragment), this.h();
    },
    l(e) {
      b('[data-svelte="svelte-nhhy6p"]', document.head).forEach(i),
        (s = f(e)),
        (t = n(e, 'DIV', { class: !0 }));
      var r = g(t);
      for (let e = 0; e < S.length; e += 1) S[e].l(r);
      (o = f(r)), m(_.$$.fragment, r), r.forEach(i), this.h();
    },
    h() {
      (document.title = 'Portfolio'), a(t, 'class', 'container page-container');
    },
    m(e, r) {
      c(e, s, r), c(e, t, r);
      for (let e = 0; e < S.length; e += 1) S[e].m(t, null);
      u(t, o), d(_, t, null), (h = !0);
    },
    p(e, [s]) {
      if (1 & s) {
        let r;
        for (x = e[0], r = 0; r < x.length; r += 1) {
          const n = A(e, x, r);
          S[r]
            ? (S[r].p(n, s), $(S[r], 1))
            : ((S[r] = P(n)), S[r].c(), $(S[r], 1), S[r].m(t, o));
        }
        for (y(), r = x.length; r < S.length; r += 1) B(r);
        k();
      }
    },
    i(e) {
      if (!h) {
        for (let e = 0; e < x.length; e += 1) $(S[e]);
        $(_.$$.fragment, e), (h = !0);
      }
    },
    o(e) {
      S = S.filter(Boolean);
      for (let e = 0; e < S.length; e += 1) v(S[e]);
      v(_.$$.fragment, e), (h = !1);
    },
    d(e) {
      e && i(s), e && i(t), j(S, e), w(_);
    },
  };
}
function N(e, s, t) {
  return [
    [
      {
        name: 'StravaScript',
        images: [
          { src: 'images/projects/StravaScript_1.png', class: 'three-screens' },
          { src: 'images/projects/StravaScript_2.png', class: 'two-screens' },
        ],
        description:
          'Track your time spend coding. Built with React. Express powered Backend with MongoDB.',
      },
      {
        name: 'ToDo App',
        images: [
          { src: 'images/projects/ToDo_1.png', class: 'three-screens' },
          { src: 'images/projects/ToDo_2.png', class: 'three-screens' },
        ],
        description:
          'ToDo Tracker build with vanilla js, free of external frameworks or libraries',
      },
      {
        name: 'Cards App',
        images: [
          { src: 'images/projects/Card_1.png', class: 'three-screens' },
          { src: 'images/projects/Card_2.png', class: 'three-screens' },
        ],
        description: 'Your personal reminder powered by React.',
      },
      {
        name: 'No-JS Website',
        images: [
          { src: 'images/projects/Bootstrap_1.png', class: 'three-screens' },
          { src: 'images/projects/Bootstrap_2.png', class: 'three-screens' },
        ],
        description:
          'No JS, no Problem. HTML and CSS-only responsive personal website.',
      },
    ],
    {
      title: 'Portfolio',
      subtitle: 'Some of my work',
      text: 'Or How I do the the How',
      img: { src: 'images/portfolio.svg', alt: 'portfolio illustration' },
    },
  ];
}
export default class extends e {
  constructor(e) {
    super(), s(this, e, N, J, t, { projects: 0 });
  }
  get projects() {
    return this.$$.ctx[0];
  }
}
