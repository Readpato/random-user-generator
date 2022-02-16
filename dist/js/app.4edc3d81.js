(function (e) {
  function t(t) {
    for (
      var r, a, i = t[0], u = t[1], s = t[2], f = 0, d = [];
      f < i.length;
      f++
    )
      (a = i[f]),
        Object.prototype.hasOwnProperty.call(c, a) && c[a] && d.push(c[a][0]),
        (c[a] = 0);
    for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (e[r] = u[r]);
    l && l(t);
    while (d.length) d.shift()();
    return o.push.apply(o, s || []), n();
  }
  function n() {
    for (var e, t = 0; t < o.length; t++) {
      for (var n = o[t], r = !0, i = 1; i < n.length; i++) {
        var u = n[i];
        0 !== c[u] && (r = !1);
      }
      r && (o.splice(t--, 1), (e = a((a.s = n[0]))));
    }
    return e;
  }
  var r = {},
    c = { app: 0 },
    o = [];
  function a(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
  }
  (a.m = e),
    (a.c = r),
    (a.d = function (e, t, n) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (a.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.t = function (e, t) {
      if ((1 & t && (e = a(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (a.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          a.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (a.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return a.d(t, "a", t), t;
    }),
    (a.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (a.p = "/random-user-generator/");
  var i = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    u = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var s = 0; s < i.length; s++) t(i[s]);
  var l = u;
  o.push([0, "chunk-vendors"]), n();
})({
  0: function (e, t, n) {
    e.exports = n("56d7");
  },
  "05ed": function (e, t, n) {
    "use strict";
    n("fcae");
  },
  "0f68": function (e, t, n) {
    "use strict";
    n("3083");
  },
  2775: function (e, t, n) {},
  3083: function (e, t, n) {},
  "56d7": function (e, t, n) {
    "use strict";
    n.r(t);
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var r = n("7a23"),
      c = { class: "container" };
    function o(e, t, n, o, a, i) {
      var u = Object(r["j"])("MainContent");
      return Object(r["g"])(), Object(r["b"])("div", c, [Object(r["e"])(u)]);
    }
    function a(e, t, n, c, o, a) {
      var i = Object(r["j"])("AppTitle"),
        u = Object(r["j"])("UserDescription");
      return (
        Object(r["g"])(),
        Object(r["b"])("main", null, [
          Object(r["e"])(i, { title: "Random User Generator" }),
          Object(r["e"])(u),
        ])
      );
    }
    function i(e, t, n, c, o, a) {
      return (
        Object(r["g"])(), Object(r["b"])("h1", null, Object(r["k"])(n.title), 1)
      );
    }
    var u = { name: "AppTitle", props: { title: String } },
      s = (n("a3cd"), n("6b0d")),
      l = n.n(s);
    const f = l()(u, [
      ["render", i],
      ["__scopeId", "data-v-7b57c2d8"],
    ]);
    var d = f,
      p =
        (n("99af"),
        function (e) {
          return (
            Object(r["i"])("data-v-3f8b2eac"), (e = e()), Object(r["h"])(), e
          );
        }),
      b = { class: "user-description" },
      m = ["src", "alt"],
      j = p(function () {
        return Object(r["c"])("strong", null, "City: ", -1);
      });
    function O(e, t, n, c, o, a) {
      return (
        Object(r["g"])(),
        Object(r["b"])("div", b, [
          Object(r["c"])(
            "img",
            {
              class: Object(r["f"])(o.gender),
              src: o.imgSource,
              alt: "Image of ".concat(o.firstName, " ").concat(o.lastName),
            },
            null,
            10,
            m
          ),
          Object(r["c"])(
            "h2",
            null,
            Object(r["k"])(o.firstName) + " " + Object(r["k"])(o.lastName),
            1
          ),
          Object(r["c"])("p", null, [
            j,
            Object(r["d"])(" " + Object(r["k"])(o.location), 1),
          ]),
          Object(r["c"])("p", null, Object(r["k"])(o.email), 1),
          Object(r["c"])(
            "button",
            {
              onClick:
                t[0] ||
                (t[0] = function () {
                  return a.getRandomUser && a.getRandomUser.apply(a, arguments);
                }),
            },
            "Get Random User"
          ),
        ])
      );
    }
    var g = n("1da1"),
      v =
        (n("96cf"),
        n("d3b7"),
        n("b0c0"),
        {
          name: "UserDescription",
          data: function () {
            return {
              firstName: "Loading...",
              lastName: "",
              location: "Loading...",
              email: "Loading...",
              imgSource: "#",
              gender: "",
            };
          },
          mounted: function () {
            this.getRandomUser();
          },
          methods: {
            getRandomUser: function () {
              var e = this;
              return Object(g["a"])(
                regeneratorRuntime.mark(function t() {
                  var n, r, c;
                  return regeneratorRuntime.wrap(function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2), fetch("https://randomuser.me/api/")
                          );
                        case 2:
                          return (n = t.sent), (t.next = 5), n.json();
                        case 5:
                          (r = t.sent),
                            (c = r.results),
                            (e.firstName = c[0].name.first),
                            (e.lastName = c[0].name.last),
                            (e.location = c[0].location.city),
                            (e.email = c[0].email),
                            (e.imgSource = c[0].picture.large),
                            (e.gender = c[0].gender);
                        case 13:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )();
            },
          },
        });
    n("0f68");
    const h = l()(v, [
      ["render", O],
      ["__scopeId", "data-v-3f8b2eac"],
    ]);
    var y = h,
      w = {
        name: "MainContent",
        components: { AppTitle: d, UserDescription: y },
      };
    n("b1b3");
    const _ = l()(w, [
      ["render", a],
      ["__scopeId", "data-v-063f45d6"],
    ]);
    var k = _,
      x = { components: { MainContent: k } };
    n("05ed");
    const S = l()(x, [["render", o]]);
    var U = S;
    Object(r["a"])(U).mount("#app");
  },
  "90ed": function (e, t, n) {},
  a3cd: function (e, t, n) {
    "use strict";
    n("2775");
  },
  b1b3: function (e, t, n) {
    "use strict";
    n("90ed");
  },
  fcae: function (e, t, n) {},
});
//# sourceMappingURL=app.4edc3d81.js.map
