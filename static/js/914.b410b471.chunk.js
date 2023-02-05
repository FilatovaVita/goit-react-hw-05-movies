"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[914],{2874:function(n,r,e){e.d(r,{e:function(){return w}});var t,a,i,o,c,s,u=e(7689),p=e(2905),d=e(168),f=e(6444),l=e(1087),x=f.ZP.ul(t||(t=(0,d.Z)(["\n   display: grid;\n    max-width: calc(100vw - 48px);\n    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n    gap: 16px;\n    margin: 0 auto;\n    padding: 0;\n    list-style: none;"]))),v=(0,f.ZP)(l.rU)(a||(a=(0,d.Z)(["\n  text-decoration: none;\n  color: black;\n"]))),h=f.ZP.li(i||(i=(0,d.Z)(["\n  cursor: pointer;\n  background-color: whitesmoke;\n  overflow: hidden;\n  border-radius: 15px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n"]))),m=f.ZP.img(o||(o=(0,d.Z)(["\n  width: 100%;\n  height: auto;\n  border-radius: 15px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.03);\n\n  }\n"]))),g=f.ZP.div(c||(c=(0,d.Z)(["\n  margin: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n\n\n"]))),b=f.ZP.p(s||(s=(0,d.Z)(["\n  font-size: 18px;\n  padding: 4px 8px;\n  border-radius: 5px;\n  border: 1px solid black;\n  display: inline-block;\n  text-align: center;\n  background-color: ",";\n\ncolor: ",";\n"])),(function(n){var r=n.rating;return r>7?"forestgreen":r>=4&&r<=7?"goldenrod":r>0&&r<4?"red":void 0}),(function(n){var r=n.rating;return r>=4&&r<=7})),Z=e(184),w=function(n){var r=n.movies,e=(0,u.TH)();return(0,Z.jsx)(x,{children:r.map((function(n){var r=n.id,t=n.title,a=n.poster_path,i=n.vote_average;return(0,Z.jsx)(h,{children:(0,Z.jsxs)(v,{to:"/movies/".concat(r),state:{from:e},children:[a?(0,Z.jsx)(m,{src:"https://image.tmdb.org/t/p/w300".concat(a),alt:t}):(0,Z.jsx)(m,{src:p,alt:t}),(0,Z.jsxs)(g,{children:[(0,Z.jsx)("b",{children:t}),i?(0,Z.jsxs)(b,{rating:i.toFixed(),children:["USER SCORE: ",(10*i).toFixed(2),"%"]}):(0,Z.jsx)(b,{rating:i.toFixed(),children:(0,Z.jsx)("p",{children:"NO USER SCORE"})})]})]})},r)}))})}},5914:function(n,r,e){e.r(r),e.d(r,{default:function(){return v}});var t,a=e(5861),i=e(9439),o=e(7757),c=e.n(o),s=e(2791),u=e(9086),p=e(2874),d=e(168),f=e(6444).ZP.h2(t||(t=(0,d.Z)(["\ntext-align: center;"]))),l=e(9014),x=e(184);function v(){var n=(0,s.useState)([]),r=(0,i.Z)(n,2),e=r[0],t=r[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,a.Z)(c().mark((function n(){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,u.Df)();case 2:r=n.sent,t(r);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,x.jsxs)("div",{children:[(0,x.jsx)(f,{children:"Today Trending Movies "}),e.length?(0,x.jsx)(p.e,{movies:e}):l.ZP.error("Something went wrong..reload the page!")]})}},9086:function(n,r,e){e.d(r,{Df:function(){return s},M1:function(){return d},TP:function(){return p},V0:function(){return u},tx:function(){return f}});var t=e(5861),a=e(7757),i=e.n(a),o=e(3263),c="c38fbf9ef4d95318ebd4d81243883dff";o.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var n=(0,t.Z)(i().mark((function n(){var r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/trending/movie/day",{params:{api_key:c}});case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(i().mark((function n(r){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("/search/movie",{params:{api_key:c,include_adult:!1,query:r}});case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(i().mark((function n(r){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("/movie/".concat(r),{params:{api_key:c}});case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(i().mark((function n(r){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("/movie/".concat(r,"/credits"),{params:{api_key:c}});case 2:return e=n.sent,t=e.data,n.abrupt("return",t.cast);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(i().mark((function n(r){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.Z)("/movie/".concat(r,"/reviews"),{params:{api_key:c}});case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()},2905:function(n,r,e){n.exports=e.p+"static/media/noPoster.7555b15218a0f4733bf7.jpg"}}]);
//# sourceMappingURL=914.b410b471.chunk.js.map