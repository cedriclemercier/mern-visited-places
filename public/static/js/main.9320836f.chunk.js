(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[1],[,,,,,,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),l=Object(a.createContext)({isLoggedIn:!1,userId:null,token:null,login:function(){},logout:function(){}})},,,,function(e,t,n){"use strict";var a=n(0),l=n.n(a);n(38);t.a=function(e){return l.a.createElement("div",{className:"".concat(e.asOverlay&&"loading-spinner__overlay")},l.a.createElement("div",{className:"lds-dual-ring"}))}},,,function(e,t,n){"use strict";var a=n(0),l=n.n(a),c=n(7),r=n.n(c);n(36);t.a=function(e){return r.a.createPortal(l.a.createElement("div",{className:"backdrop",onClick:e.onClick}),document.getElementById("backdrop-hook"))}},,,,function(e,t,n){e.exports=n(39)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a,l=n(0),c=n.n(l),r=n(7),o=n.n(r),i=(n(27),n(8)),u=n(6),m=n(10),s=(n(28),function(e){return c.a.createElement("header",{className:"main-header"},e.children)}),E=n(11),d=(n(29),function(e){var t=Object(l.useContext)(E.a);return c.a.createElement("ul",{className:"nav-links"},c.a.createElement("li",null,c.a.createElement(u.c,{to:"/",exact:!0},"ALL USERS")),t.isLoggedIn&&c.a.createElement("li",null,c.a.createElement(u.c,{to:"/".concat(t.userId,"/places")},"MY PLACES")),t.isLoggedIn&&c.a.createElement("li",null,c.a.createElement(u.c,{to:"/places/new"},"ADD PLACE")),!t.isLoggedIn&&c.a.createElement("li",null,c.a.createElement(u.c,{to:"/login"},"LOG IN")),t.isLoggedIn&&c.a.createElement("li",null,c.a.createElement("button",{onClick:t.logout},"LOG OUT")))}),f=n(41),g=(n(35),function(e){var t=c.a.createElement(f.a,{in:e.show,timeout:300,classNames:"slide-in-left",mountOnEnter:!0,unmountOnExit:!0},c.a.createElement("aside",{className:"side-drawer",onClick:e.onClick},e.children));return o.a.createPortal(t,document.getElementById("drawer-hook"))}),b=n(18),p=(n(37),function(e){var t=Object(l.useState)(!1),n=Object(m.a)(t,2),a=n[0],r=n[1],o=function(){r(!1)};return c.a.createElement(c.a.Fragment,null,a&&c.a.createElement(b.a,{onClick:o}),c.a.createElement(g,{show:a,onClick:o},c.a.createElement("nav",{className:"main-navigation__drawer-nav"},c.a.createElement(d,null))),c.a.createElement(s,null,c.a.createElement("button",{className:"main-navigation__menu-btn",onClick:function(){r(!0)}},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null)),c.a.createElement("h2",{className:"main-navigation__title"},c.a.createElement(u.b,{to:"/"},c.a.createElement("span",{className:"main-navigation__title__icon"},"\ud83c\udfd5")," Visited Places")),c.a.createElement("nav",{className:"main-navigation__header-nav"},c.a.createElement(d,null))))}),v=n(15),h=c.a.lazy((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,72))})),k=c.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,68))})),I=c.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,71))})),O=c.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,69))})),N=c.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,70))})),w=function(){var e,t=function(){var e=Object(l.useState)(!1),t=Object(m.a)(e,2),n=t[0],c=t[1],r=Object(l.useState)(),o=Object(m.a)(r,2),i=o[0],u=o[1],s=Object(l.useState)(!1),E=Object(m.a)(s,2),d=E[0],f=E[1],g=Object(l.useCallback)((function(e,t,n){c(t),f(e);var a=n||new Date((new Date).getTime()+36e5);u(a),localStorage.setItem("userData",JSON.stringify({userId:e,token:t,expiration:a.toISOString()}))}),[]),b=Object(l.useCallback)((function(){c(null),u(null),f(null),localStorage.removeItem("userData")}),[]);return Object(l.useEffect)((function(){if(n&&i){var e=i.getTime()-(new Date).getTime();a=setTimeout(b,e)}else clearTimeout(a)}),[n,b,i]),Object(l.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&new Date(e.expiration)>new Date&&g(e.userId,e.token,new Date(e.expiration))}),[g]),{token:n,login:g,logout:b,userId:d}}(),n=t.token,r=t.login,o=t.logout,s=t.userId;return e=n?c.a.createElement(i.d,null,c.a.createElement(i.b,{path:"/",exact:!0},c.a.createElement(h,null)),c.a.createElement(i.b,{path:"/:userId/places",exact:!0},c.a.createElement(I,null)),c.a.createElement(i.b,{path:"/places/new",exact:!0},c.a.createElement(k,null)),c.a.createElement(i.b,{path:"/places/:placeId"},c.a.createElement(O,null)),c.a.createElement(i.a,{to:"/"})):c.a.createElement(i.d,null,c.a.createElement(i.b,{path:"/",exact:!0},c.a.createElement(h,null)),c.a.createElement(i.b,{path:"/:userId/places",exact:!0},c.a.createElement(I,null)),c.a.createElement(i.b,{path:"/login"},c.a.createElement(N,null)),c.a.createElement(i.a,{to:"/login"})),c.a.createElement(E.a.Provider,{value:{isLoggedIn:!!n,token:n,login:r,logout:o,userId:s}},c.a.createElement(u.a,null,c.a.createElement(p,null),c.a.createElement("main",null,c.a.createElement(l.Suspense,{fallback:c.a.createElement("div",{className:"center"},c.a.createElement(v.a,null))},e))))};o.a.render(c.a.createElement(w,null),document.getElementById("root"))}],[[22,2,3]]]);
//# sourceMappingURL=main.9320836f.chunk.js.map