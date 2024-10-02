(function () {
  var e = {
    2559: function (e, t, n) {
      "use strict";
      var i = n(6369),
        o = function () {
          var e = this,
            t = e._self._c;
          return t(
            "div",
            { staticClass: "index", attrs: { id: "app" } },
            [
              t(
                "keep-alive",
                { attrs: { max: 1 } },
                [
                  t("router-view", {
                    key: e.$route.fullPath,
                    attrs: {
                      clickedTiles: e.clickedTiles,
                      route: e.route,
                      tilesPerPage: e.tilesPerPage,
                      differentBGOnNested: e.differentBGOnNested,
                      inactiveState: e.inactiveState,
                      feedbackPageEnabled: e.feedbackPageEnabled,
                    },
                  }),
                ],
                1
              ),
            ],
            1
          );
        },
        r = [],
        a = n(3822),
        s = n(6299),
        c = {
          name: "IndexI",
          components: {},
          watch: {
            $route: {
              handler(e, t) {
                (this.isBackendPage =
                  window.location.href.includes("backend")),
                  (this.route = e),
                  e.fullPath.includes("nestedpage") &&
                  (this.$store.commit("setCarouselPos", 0),
                    this.$store.commit("setCarouselTransform", 0)),
                  window.location.href.includes("#index.html") &&
                  "/" !== t.fullPath &&
                  this.$analytics.track(
                    {
                      event: "backButtonTime",
                      property: t.fullPath,
                      result: performance.now() - this.timeEnteredOnAnyPage,
                    },
                    (e) => {
                      s.Z.analytics(e.payload.properties);
                    }
                  ),
                  (this.timeEnteredOnAnyPage = performance.now()),
                  this.$nextTick(() => {
                    (document.getElementById("modelviewer") ||
                      document.getElementById("screenshotpage")) &&
                      this.$analytics.track(
                        {
                          event: "screenshot_or_3dcontent_page_loaded",
                          description:
                            "Number of times a Hologram Content / 3D content / Screenshot etc. page loads",
                          loaded:
                            this.$analytics
                              .screenshot_or_3dcontent_page_loaded,
                        },
                        (e) => {
                          this.$store.commit(
                            "analyticsIncrement",
                            "screenshot_or_3dcontent_page_loaded"
                          );
                        }
                      );
                  });
              },
            },
            carouselPos: {
              handler() {
                this.loadedSlides[this.carouselPos]++,
                  this.$analytics.track(
                    {
                      event: "carouselPos",
                      property: `Slide ${this.carouselPos}`,
                      result: "Loaded",
                    },
                    (e) => {
                      this.$store.commit(
                        "setAnalytics",
                        e.payload.properties
                      );
                    }
                  );
              },
            },
          },
          computed: {
            ...(0, a.rn)([
              "carouselTransform",
              "carouselPos",
              "activeDirectory",
              "homeDirectory",
              "activePage",
              "cacheCleared",
            ]),
          },
          methods: {},
          data() {
            return {
              clickedTiles: [],
              loadedSlides: [],
              route: null,
              timeEnteredOnPage: 0,
              timeEnteredOnAnyPage: 0,
              screenshot_or_3dcontent_page_loaded: 0,
              isBackendPage: !1,
              introPagePlayedVar: !1,
              tilesPerPage: this.$settings.tilesPerPage,
              differentBGOnNested: this.$settings.differentBGOnNested,
              inactiveState: this.$settings.inactiveState,
              feedbackPageEnabled: this.$settings.feedbackPageEnabled,
            };
          },
          mounted() {
            "ScreensaverPage" === this.activePage &&
              this.$router.push("screensavervideo"),
              this.cacheCleared ||
              (this.$store.commit("setActiveDirectory", null),
                this.$store.commit(
                  "setActiveDirectory",
                  [...this.$videos].filter((e) => void 0 === e.fields.Parent)
                ),
                this.$store.commit("setCacheCleared", !0)),
              this.$store.commit(
                "setHomeDirectory",
                [...this.$videos].filter((e) => void 0 === e.fields.Parent)
              ),
              (this.clickedTiles = this.$videos.map(() => 0)),
              this.$store.commit("setClickedTiles", this.clickedTiles);
            var e = Math.ceil(this.clickedTiles.length / this.tilesPerPage);
            (this.loadedSlides.length = e),
              (this.loadedSlides = [...this.loadedSlides].map(() => 0)),
              this.$nextTick(() => {
                this.introPagePlayedVar = this.activePage;
              });
          },
        },
        d = c,
        l = n(1001),
        u = (0, l.Z)(d, o, r, !1, null, null, null),
        p = u.exports,
        f = n(2631);
      i.ZP.use(f.Z);
      const h = new f.Z({
        base: "/",
        mode: "hash",
        routes: [
          {
            path: "",
            component: () => n.e(200).then(n.bind(n, 2200)),
            name: "app",
          },
          {
            path: "/screenshot_screen",
            component: () => n.e(358).then(n.bind(n, 5358)),
          },
          {
            path: "/screensavervideo",
            component: () => n.e(532).then(n.bind(n, 8532)),
          },
          {
            path: "/iframe",
            component: () => n.e(391).then(n.bind(n, 8391)),
          },
          {
            path: "/feedback",
            component: () => n.e(858).then(n.bind(n, 8858)),
          },
          { path: "/:slug", component: () => n.e(643).then(n.bind(n, 9643)) },
          {
            path: "/*",
            component: () => n.e(200).then(n.bind(n, 2200)),
            children: [
              { path: "/*", component: () => n.e(200).then(n.bind(n, 2200)) },
            ],
          },
        ],
      });
      var m = h,
        g = n(9117),
        v = n(7218),
        y = new (class {
          constructor() {
            i.ZP.prototype.$html = ""
              .split("|,")
              .map((e) => ({
                title: e.replace(/\n\s\s+/g, "").split("***")[0],
                html: e.replace(/\n\s\s+/g, "").split("***")[1],
              }));
          }
          async runexe() {
            v.get("http://localhost:8081/runexe").then((e) => {
              console.log(e);
            });
          }
          async download(e, t, n) {
            v({
              method: "post",
              url: "http://localhost:8081/download",
              data: { url: e, filename: t, directory: n },
            }).then((e) => {
              console.log("Successfully updated!", e);
            });
          }
          async addVideos(e) {
            await v.post("http://localhost:8081/api/video", e).then(() => {
              this.initVideos();
            });
          }
          async updateVideo(e) {
            await v
              .put(`http://localhost:8081/api/video/${e["_id"]}`, e)
              .then(() => {
                this.initVideos();
              });
          }
          async deleteVideo(e) {
            await v
              .delete(`http://localhost:8081/api/video/${e["_id"]}`, e)
              .then(() => {
                this.initVideos();
              });
          }
          async editSettings(e) {
            try {
              await v
                .put(`http://localhost:8081/api/settings/${e["_id"]}`, e)
                .then(() => {
                  this.getSettings();
                });
            } catch (t) {
              await v
                .post("http://localhost:8081/api/settings", e)
                .then((e) => {
                  console.log(e);
                });
            }
          }
          async serverInitVideos() {
            return new Promise((e) => {
              v.get("http://localhost:8081/api/video").then((t) => {
                (i.ZP.prototype.$videos = t.data), e(i.ZP.prototype.$videos);
              });
            });
          }
          async serverInitSettings() {
            return new Promise((e) => {
              v.get("http://localhost:8081/api/settings").then((t) => {
                (i.ZP.prototype.$settings = t.data[0]), e(t.data[0]);
              });
            });
          }
          initSettings() {
            let e =
              "Title,Thumbnail,Content,3D_Content,is_screenshot_page,HTML,Order,Parent,Nested Children,ID,Loop_Video,Activation Vids Muted,Background Vids Muted,Feedback Videos,tilesPerPage,inactiveState.enabled,inactiveState.play_random_tile,inactiveState.screensaver,Screensaver Duration in Minutes,Screensaver Vids Muted,inactiveState.go_to_home_page,inactiveState.milliseconds,differentBGOnNested,feedbackPageEnabled,use_CSV,Border Color,Text Color\r\nAsk soul dockstore,KBC-Dance.png,KBC-Dance.mp4,,,,,,,KBC1,FALSE,TRUE,TRUE,,8,TRUE,FALSE,TRUE,5,TRUE,FALSE,60000,TRUE,FALSE,TRUE,#00AEEF,#FFFFFF\r\nCall a dockstore agent,test.png,Dragon.mp4,,,,,,,KBC2,FALSE,,,,,,,,,,,,,FALSE,,,\r\nGet your hardware,KBC-Willem.png,KBC-Animation.mp4,,,,,,,KBC4,FALSE,,,,,,,,,,,,,FALSE,,,"
                .split("\r\n")[0]
                .split(","),
              t =
                "Title,Thumbnail,Content,3D_Content,is_screenshot_page,HTML,Order,Parent,Nested Children,ID,Loop_Video,Activation Vids Muted,Background Vids Muted,Feedback Videos,tilesPerPage,inactiveState.enabled,inactiveState.play_random_tile,inactiveState.screensaver,Screensaver Duration in Minutes,Screensaver Vids Muted,inactiveState.go_to_home_page,inactiveState.milliseconds,differentBGOnNested,feedbackPageEnabled,use_CSV,Border Color,Text Color\r\nAsk soul dockstore,KBC-Dance.png,KBC-Dance.mp4,,,,,,,KBC1,FALSE,TRUE,TRUE,,8,TRUE,FALSE,TRUE,5,TRUE,FALSE,60000,TRUE,FALSE,TRUE,#00AEEF,#FFFFFF\r\nCall a dockstore agent,test.png,Dragon.mp4,,,,,,,KBC2,FALSE,,,,,,,,,,,,,FALSE,,,\r\nGet your hardware,KBC-Willem.png,KBC-Animation.mp4,,,,,,,KBC4,FALSE,,,,,,,,,,,,,FALSE,,,"
                  .split("\r\n")[1]
                  .split(",");
            return new Promise((n) => {
              (i.ZP.prototype.$settings = {
                tilesPerPage: parseInt(t[e.indexOf("tilesPerPage")]) || 6,
                inactiveState: {
                  enabled:
                    "TRUE" === t[e.indexOf("inactiveState.enabled")] || !1,
                  play_random_tile:
                    "TRUE" ===
                    t[e.indexOf("inactiveState.play_random_tile")] || !1,
                  screensaver:
                    "TRUE" === t[e.indexOf("inactiveState.screensaver")] ||
                    !1,
                  go_to_home_page:
                    "TRUE" ===
                    t[e.indexOf("inactiveState.go_to_home_page")] || !1,
                  milliseconds:
                    parseInt(t[e.indexOf("inactiveState.milliseconds")]) ||
                    2e4,
                },
                differentBGOnNested:
                  "TRUE" === t[e.indexOf("differentBGOnNested")] || !1,
                feedbackPageEnabled:
                  "TRUE" === t[e.indexOf("feedbackPageEnabled")] || !1,
                use_CSV: "TRUE" === t[e.indexOf("use_CSV")] || !1,
                Background_Vids_Muted:
                  "TRUE" === t[e.indexOf("Background Vids Muted")] || !1,
                Screensaver_Vids_Muted:
                  "TRUE" === t[e.indexOf("Screensaver Vids Muted")] || !1,
                Activation_Vids_Muted:
                  "TRUE" === t[e.indexOf("Activation Vids Muted")] || !1,
                Border_Color: t[e.indexOf("Border Color")] || void 0,
                Text_Color: t[e.indexOf("Text Color")] || void 0,
                Screensaver_Duration_in_Minutes:
                  6e4 *
                  parseInt(
                    t[e.indexOf("Screensaver Duration in Minutes")]
                  ) || 6e4,
              }),
                n();
            });
          }
          init() {
            return new Promise((e) => {
              let t =
                "Title,Thumbnail,Content,3D_Content,is_screenshot_page,HTML,Order,Parent,Nested Children,ID,Loop_Video,Activation Vids Muted,Background Vids Muted,Feedback Videos,tilesPerPage,inactiveState.enabled,inactiveState.play_random_tile,inactiveState.screensaver,Screensaver Duration in Minutes,Screensaver Vids Muted,inactiveState.go_to_home_page,inactiveState.milliseconds,differentBGOnNested,feedbackPageEnabled,use_CSV,Border Color,Text Color\r\nAsk soul dockstore,KBC-Dance.png,KBC-Dance.mp4,,,,,,,KBC1,FALSE,TRUE,TRUE,,8,TRUE,FALSE,TRUE,5,TRUE,FALSE,60000,TRUE,FALSE,TRUE,#00AEEF,#FFFFFF\r\n ,Dragon.png,Dragon.mp4,,,,,,,KBC2,FALSE,,,,,,,,,,,,,FALSE,,,\r\nGet your hardware,KBC-Willem.png,KBC-Animation.mp4,,,,,,,KBC4,FALSE,,,,,,,,,,,,,FALSE,,,"
                  .split("\r\n")[0]
                  .split(","),
                o =
                  "Title,Thumbnail,Content,3D_Content,is_screenshot_page,HTML,Order,Parent,Nested Children,ID,Loop_Video,Activation Vids Muted,Background Vids Muted,Feedback Videos,tilesPerPage,inactiveState.enabled,inactiveState.play_random_tile,inactiveState.screensaver,Screensaver Duration in Minutes,Screensaver Vids Muted,inactiveState.go_to_home_page,inactiveState.milliseconds,differentBGOnNested,feedbackPageEnabled,use_CSV,Border Color,Text Color\r\nAsk soul dockstore,KBC-Dance.png,KBC-Dance.mp4,,,,,,,KBC1,FALSE,TRUE,TRUE,,8,TRUE,FALSE,TRUE,5,TRUE,FALSE,60000,TRUE,FALSE,TRUE,#00AEEF,#FFFFFF\r\nCall a dockstore agent,test.png,Dragon.mp4,,,,,,,KBC2,FALSE,,,,,,,,,,,,,FALSE,,,\r\nGet your hardware,KBC-Willem.png,KBC-Animation.mp4,,,,,,,KBC4,FALSE,,,,,,,,,,,,,FALSE,,,".split(
                    "\r\n"
                  );
              (i.ZP.prototype.$videos = o
                .splice(
                  1,
                  "Title,Thumbnail,Content,3D_Content,is_screenshot_page,HTML,Order,Parent,Nested Children,ID,Loop_Video,Activation Vids Muted,Background Vids Muted,Feedback Videos,tilesPerPage,inactiveState.enabled,inactiveState.play_random_tile,inactiveState.screensaver,Screensaver Duration in Minutes,Screensaver Vids Muted,inactiveState.go_to_home_page,inactiveState.milliseconds,differentBGOnNested,feedbackPageEnabled,use_CSV,Border Color,Text Color\r\nAsk soul dockstore,KBC-Dance.png,KBC-Dance.mp4,,,,,,,KBC1,FALSE,TRUE,TRUE,,8,TRUE,FALSE,TRUE,5,TRUE,FALSE,60000,TRUE,FALSE,TRUE,#00AEEF,#FFFFFF\r\nCall a dockstore agent,test.png,Dragon.mp4,,,,,,,KBC2,FALSE,,,,,,,,,,,,,FALSE,,,\r\nGet your hardware,KBC-Willem.png,KBC-Animation.mp4,,,,,,,KBC4,FALSE,,,,,,,,,,,,,FALSE,,,"
                    .length
                )
                .map((e) => {
                  let i = e.split(",");
                  return {
                    fields: {
                      Title: i[t.indexOf("Title")],
                      Thumbnail: [
                        {
                          url: i[t.indexOf("Thumbnail")]
                            ? n(2012)(`./${i[t.indexOf("Thumbnail")]}`)
                            : void 0,
                        },
                      ],
                      Content: [
                        {
                          url: i[t.indexOf("Content")]
                            ? n(5152)(`./${i[t.indexOf("Content")]}`)
                            : void 0,
                        },
                      ],
                      is_screenshot_page:
                        "TRUE" === i[t.indexOf("is_screenshot_page")] || !1,
                      "3D_Content": i[t.indexOf("3D_Content")] || void 0,
                      HTML: i[t.indexOf("HTML")] || void 0,
                      Order: i[t.indexOf("Order")] || void 0,
                      Parent: i[t.indexOf("Parent")] || void 0,
                      Nested_Children:
                        i[t.indexOf("Nested Children")].length > 0
                          ? i[t.indexOf("Nested Children")].split("/")
                          : void 0,
                      ID: i[t.indexOf("ID")] || void 0,
                      Feedback_Video: i[t.indexOf("Feedback Videos")]
                        ? i[t.indexOf("Feedback Videos")].split("/")
                        : null,
                      Loop_Video: "TRUE" === i[t.indexOf("Loop_Video")] || !1,
                    },
                  };
                })
                .sort((e, t) => e.order - t.order)),
                e(i.ZP.prototype.$videos);
            });
          }
        })(),
        C = n(315),
        P = n.n(C),
        _ = n(3494),
        E = n(8539),
        S = n(7749),
        T = n(1912),
        b = n(9425);
      function A() {
        return new Promise((e) => {
          Promise.all([y.init(), y.initSettings()]).then(() => {
            i.ZP.prototype.$settings.use_CSV ||
              Promise.all([
                y.serverInitVideos(),
                y.serverInitSettings(),
              ]).then(() => {
                e();
              }),
              e();
          });
        });
      }
      i.ZP.use(P()),
        i.ZP.component("font-awesome-icon", S.GN),
        _.vI.add(
          E.WA2,
          E.L2e,
          E.O24,
          E.oo5,
          E.AQZ,
          E.nre,
          E.OEn,
          E.zc,
          E.XQY
        ),
        (i.ZP.prototype.$analytics = (0, T.ZP)({
          app: "App",
          version: 100,
          plugins: [(0, b.Z)({ measurementIds: "G-QDJWC8JH3Q" })],
        })),
        (i.ZP.prototype.destroy = i.ZP.prototype.$destroy),
        (i.ZP.config.productionTip = !1),
        A().then(() => {
          new i.ZP({
            vue3dLoader: P(),
            store: g.Z,
            router: m,
            render: (e) => e(p),
          }).$mount("#app");
        });
    },
    6299: function (e, t, n) {
      "use strict";
      var i = n(6369),
        o = n(9117),
        r = n(7218);
      t["Z"] = new (class {
        constructor() { }
        analytics(e) {
          return new Promise((t) => {
            this.fetchAnalytics().then((n) => {
              if (!Array.isArray(n)) {
                let e = n;
                n = Object.keys(n).map((t) => ({ [t]: e[t] }));
              }
              if ([...n].map((e) => e._id).indexOf(e.event) > -1) {
                console.log("exists");
                var i = n.filter((t) => t._id === e.event)[0];
                switch (e.event) {
                  case "howLongOnAPage":
                    n.filter((t) => t[e.event])[0][e.event][e.property]
                      ? i[e.event][e.property].push(e.result[0])
                      : (i[e.event][e.property] = e.result);
                    break;
                  default:
                    n.filter((t) => t[e.event])[0][e.event][e.property]
                      ? i[e.event][e.property]++
                      : (i[e.event][e.property] = 1);
                }
                this.updateAnalytics(i);
              } else
                this.addAnalytics({
                  [e.event]: { [e.property]: e.result },
                  _id: e.event,
                });
              t();
            });
          });
        }
        fetchAnalytics() {
          return new Promise((e) => {
            i.ZP.prototype.$settings.use_CSV
              ? e(o.Z.state.analytics)
              : r.get("http://localhost:8081/api/analytics").then((t) => {
                e(t.data);
              });
          });
        }
        addAnalytics(e) {
          return new Promise((t) => {
            if (i.ZP.prototype.$settings.use_CSV)
              return o.Z.commit("setAnalytics", e), void t();
            r.post("http://localhost:8081/api/analytics", e).then((e) => {
              t(e);
            });
          });
        }
        updateAnalytics(e) {
          return new Promise((t) => {
            if (i.ZP.prototype.$settings.use_CSV)
              return console.log("update ", e), void t();
            r.put(`http://localhost:8081/api/analytics/${e["_id"]}`, e).then(
              (e) => {
                t(e);
              }
            );
          });
        }
        wipeAnalytics() {
          r.post("http://localhost:8081/wipteanalyticsdb").then((e) => {
            resolve(e);
          });
        }
      })();
    },
    9117: function (e, t, n) {
      "use strict";
      var i = n(6369),
        o = n(3822),
        r = n(2415);
      i.ZP.use(o.ZP);
      const a = () => ({
        carouselInfo: 0,
        carouselTransform: 0,
        carouselPos: 0,
        clickedTilesArray: [],
        activeDirectory: [],
        homeDirectory: "",
        nestedRank: 0,
        analytics: {
          howLongOnAPage: [],
          backButtonTime: [],
          screenshot_or_3dcontent_page_loaded: 0,
          timesIdle: 0,
          tileClick: [],
          carouselPos: [],
        },
        activePage: "App",
        cacheCleared: !1,
        feedback: [],
      });
      t["Z"] = new o.ZP.Store({
        state: a,
        mutations: {
          setCarouselTransform(e, t) {
            i.ZP.set(e, "carouselTransform", t);
          },
          setCarouselPos(e, t) {
            i.ZP.set(e, "carouselPos", t);
          },
          setClickedTiles(e, t) {
            e.clickedTilesArray = t;
          },
          setActiveDirectory(e, t) {
            t ? e.activeDirectory.push(t) : (e.activeDirectory = []),
              i.ZP.set(e, "activeDirectory", e.activeDirectory);
          },
          setHomeDirectory(e, t) {
            i.ZP.set(e, "homeDirectory", t);
          },
          setNestedRank(e, t) {
            i.ZP.set(e, "nestedRank", t);
          },
          goBack(e) {
            e.activeDirectory.pop();
          },
          reset(e) {
            const t = a();
            Object.keys(t).forEach((n) => {
              e[n] = t[n];
            });
          },
          setAnalytics(e, t) {
            try {
              e.analytics[t._id].push(t);
            } catch { }
          },
          setAnalyticsIncrementally(e, t) {
            e.analytics[t.event] = t.property;
          },
          resetAnalytics(e) {
            (e.analytics = {}),
              (e.howLongOnAPage = []),
              (e.backButtonTime = []),
              (e.introPagePlayed = !1),
              (e.cacheCleared = !1),
              (e.carouselPos = 0),
              (e.carouselTransform = 0),
              (e.feedback = []);
          },
          setActivePage(e, t) {
            e.activePage = t;
          },
          analyticsIncrement(e, t) {
            console.log(e.analytics), e.analytics[t]++;
          },
          setCacheCleared(e, t) {
            e.cacheCleared = t;
          },
          setFeedback(e, t) {
            e.feedback = t;
          },
        },
        actions: {
          setCarouselTransform(e, t) {
            e.commit("setCarouselTransform", t);
          },
          setCarouselPos(e, t) {
            e.commit("setCarouselPos", t);
          },
          setClickedTiles(e, t) {
            e.commit("setClickedTiles", t);
          },
          setActiveDirectory(e, t) {
            e.commit("setActiveDirectory", t);
          },
          setHomeDirectory(e, t) {
            e.commit("setHomeDirectory", t);
          },
          setNestedRank(e, t) {
            e.commit("setNestedRank", t);
          },
          goBack(e) {
            e.commit("goBack");
          },
          resetAnalytics(e) {
            e.commit("resetAnalytics");
          },
        },
        plugins: [(0, r.Z)()],
      });
    },
    5152: function (e, t, n) {
      var i = {
        "./Dragon.mp4": 4543,
        "./KBC-Animation.mp4": 5099,
        "./KBC-Dance.mp4": 3342,
        "./KBC-Willem.mp4": 4721,
      };
      function o(e) {
        var t = r(e);
        return n(t);
      }
      function r(e) {
        if (!n.o(i, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return i[e];
      }
      (o.keys = function () {
        return Object.keys(i);
      }),
        (o.resolve = r),
        (e.exports = o),
        (o.id = 5152);
    },
    2012: function (e, t, n) {
      var i = {
        "./Dragon.png": 593,
        "./test.png": 1279,
        "./KBC-Dance.png": 5367,
        "./KBC-Willem.png": 6627,
      };
      function o(e) {
        var t = r(e);
        return n(t);
      }
      function r(e) {
        if (!n.o(i, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return i[e];
      }
      (o.keys = function () {
        return Object.keys(i);
      }),
        (o.resolve = r),
        (e.exports = o),
        (o.id = 2012);
    },
    4543: function (e, t, n) {
      "use strict";
      e.exports = n.p + "media/Dragon.0e4697b4.mp4";
    },
    5099: function (e, t, n) {
      "use strict";
      e.exports = n.p + "media/KBC-Dance.6bd71aec.mp4";
    },
    3342: function (e, t, n) {
      "use strict";
      e.exports = n.p + "media/KBC-Animation.a3d92d55.mp4";
    },
    4721: function (e, t, n) {
      "use strict";
      e.exports = n.p + "media/KBC-Willem.bd4fb855.mp4";
    },
    593: function (e, t, n) {
      "use strict";
      e.exports = n.p + "img/ecosphere_thanks_tile_2.png";
    },
    1279: function (e, t, n) {
      "use strict";
      e.exports = n.p + "img/playgrey.png";
    },
    5367: function (e, t, n) {
      "use strict";
      e.exports = n.p + "img/test.png";
    },
    6627: function (e, t, n) {
      "use strict";
      e.exports = n.p + "img/KBC-Dance.718e0c19.png";
    },
  },
    t = {};
  function n(i) {
    var o = t[i];
    if (void 0 !== o) return o.exports;
    var r = (t[i] = { exports: {} });
    return e[i].call(r.exports, r, r.exports, n), r.exports;
  }
  (n.m = e),
    (function () {
      var e = [];
      n.O = function (t, i, o, r) {
        if (!i) {
          var a = 1 / 0;
          for (l = 0; l < e.length; l++) {
            (i = e[l][0]), (o = e[l][1]), (r = e[l][2]);
            for (var s = !0, c = 0; c < i.length; c++)
              (!1 & r || a >= r) &&
                Object.keys(n.O).every(function (e) {
                  return n.O[e](i[c]);
                })
                ? i.splice(c--, 1)
                : ((s = !1), r < a && (a = r));
            if (s) {
              e.splice(l--, 1);
              var d = o();
              void 0 !== d && (t = d);
            }
          }
          return t;
        }
        r = r || 0;
        for (var l = e.length; l > 0 && e[l - 1][2] > r; l--) e[l] = e[l - 1];
        e[l] = [i, o, r];
      };
    })(),
    (function () {
      n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
              return e["default"];
            }
            : function () {
              return e;
            };
        return n.d(t, { a: t }), t;
      };
    })(),
    (function () {
      n.d = function (e, t) {
        for (var i in t)
          n.o(t, i) &&
            !n.o(e, i) &&
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
      };
    })(),
    (function () {
      (n.f = {}),
        (n.e = function (e) {
          return Promise.all(
            Object.keys(n.f).reduce(function (t, i) {
              return n.f[i](e, t), t;
            }, [])
          );
        });
    })(),
    (function () {
      n.u = function (e) {
        return (
          "js/" +
          e +
          "." +
          {
            200: "934983f0",
            358: "8ad85c9e",
            391: "53677f73",
            532: "d2eaa11b",
            643: "a8458eaf",
            858: "f2e6d8d8",
          }[e] +
          ".js"
        );
      };
    })(),
    (function () {
      n.miniCssF = function (e) {
        return (
          "css/" +
          e +
          "." +
          {
            200: "3980e33b",
            358: "ef80ffdf",
            391: "01e1e855",
            532: "d1c0ddc0",
            643: "9cc767cc",
            858: "4f2f9b3b",
          }[e] +
          ".css"
        );
      };
    })(),
    (function () {
      n.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
    })(),
    (function () {
      var e = {},
        t = "capsule_ui:";
      n.l = function (i, o, r, a) {
        if (e[i]) e[i].push(o);
        else {
          var s, c;
          if (void 0 !== r)
            for (
              var d = document.getElementsByTagName("script"), l = 0;
              l < d.length;
              l++
            ) {
              var u = d[l];
              if (
                u.getAttribute("src") == i ||
                u.getAttribute("data-webpack") == t + r
              ) {
                s = u;
                break;
              }
            }
          s ||
            ((c = !0),
              (s = document.createElement("script")),
              (s.charset = "utf-8"),
              (s.timeout = 120),
              n.nc && s.setAttribute("nonce", n.nc),
              s.setAttribute("data-webpack", t + r),
              (s.src = i)),
            (e[i] = [o]);
          var p = function (t, n) {
            (s.onerror = s.onload = null), clearTimeout(f);
            var o = e[i];
            if (
              (delete e[i],
                s.parentNode && s.parentNode.removeChild(s),
                o &&
                o.forEach(function (e) {
                  return e(n);
                }),
                t)
            )
              return t(n);
          },
            f = setTimeout(
              p.bind(null, void 0, { type: "timeout", target: s }),
              12e4
            );
          (s.onerror = p.bind(null, s.onerror)),
            (s.onload = p.bind(null, s.onload)),
            c && document.head.appendChild(s);
        }
      };
    })(),
    (function () {
      n.r = function (e) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      n.p = "";
    })(),
    (function () {
      var e = function (e, t, n, i) {
        var o = document.createElement("link");
        (o.rel = "stylesheet"), (o.type = "text/css");
        var r = function (r) {
          if (((o.onerror = o.onload = null), "load" === r.type)) n();
          else {
            var a = r && ("load" === r.type ? "missing" : r.type),
              s = (r && r.target && r.target.href) || t,
              c = new Error(
                "Loading CSS chunk " + e + " failed.\n(" + s + ")"
              );
            (c.code = "CSS_CHUNK_LOAD_FAILED"),
              (c.type = a),
              (c.request = s),
              o.parentNode.removeChild(o),
              i(c);
          }
        };
        return (
          (o.onerror = o.onload = r),
          (o.href = t),
          document.head.appendChild(o),
          o
        );
      },
        t = function (e, t) {
          for (
            var n = document.getElementsByTagName("link"), i = 0;
            i < n.length;
            i++
          ) {
            var o = n[i],
              r = o.getAttribute("data-href") || o.getAttribute("href");
            if ("stylesheet" === o.rel && (r === e || r === t)) return o;
          }
          var a = document.getElementsByTagName("style");
          for (i = 0; i < a.length; i++) {
            (o = a[i]), (r = o.getAttribute("data-href"));
            if (r === e || r === t) return o;
          }
        },
        i = function (i) {
          return new Promise(function (o, r) {
            var a = n.miniCssF(i),
              s = n.p + a;
            if (t(a, s)) return o();
            e(i, s, o, r);
          });
        },
        o = { 143: 0 };
      n.f.miniCss = function (e, t) {
        var n = { 200: 1, 358: 1, 391: 1, 532: 1, 643: 1, 858: 1 };
        o[e]
          ? t.push(o[e])
          : 0 !== o[e] &&
          n[e] &&
          t.push(
            (o[e] = i(e).then(
              function () {
                o[e] = 0;
              },
              function (t) {
                throw (delete o[e], t);
              }
            ))
          );
      };
    })(),
    (function () {
      var e = { 143: 0 };
      (n.f.j = function (t, i) {
        var o = n.o(e, t) ? e[t] : void 0;
        if (0 !== o)
          if (o) i.push(o[2]);
          else {
            var r = new Promise(function (n, i) {
              o = e[t] = [n, i];
            });
            i.push((o[2] = r));
            var a = n.p + n.u(t),
              s = new Error(),
              c = function (i) {
                if (n.o(e, t) && ((o = e[t]), 0 !== o && (e[t] = void 0), o)) {
                  var r = i && ("load" === i.type ? "missing" : i.type),
                    a = i && i.target && i.target.src;
                  (s.message =
                    "Loading chunk " + t + " failed.\n(" + r + ": " + a + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = r),
                    (s.request = a),
                    o[1](s);
                }
              };
            n.l(a, c, "chunk-" + t, t);
          }
      }),
        (n.O.j = function (t) {
          return 0 === e[t];
        });
      var t = function (t, i) {
        var o,
          r,
          a = i[0],
          s = i[1],
          c = i[2],
          d = 0;
        if (
          a.some(function (t) {
            return 0 !== e[t];
          })
        ) {
          for (o in s) n.o(s, o) && (n.m[o] = s[o]);
          if (c) var l = c(n);
        }
        for (t && t(i); d < a.length; d++)
          (r = a[d]), n.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
        return n.O(l);
      },
        i = (self["webpackChunkcapsule_ui"] =
          self["webpackChunkcapsule_ui"] || []);
      i.forEach(t.bind(null, 0)), (i.push = t.bind(null, i.push.bind(i)));
    })();
  var i = n.O(void 0, [998], function () {
    return n(2559);
  });
  i = n.O(i);
})();
//# sourceMappingURL=app.010d5c20.js.map
