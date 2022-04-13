(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{111:function(t,e,o){},112:function(t,e,o){},113:function(t,e,o){},114:function(t,e,o){},115:function(t,e,o){},116:function(t,e,o){},119:function(t,e,o){},120:function(t,e,o){"use strict";o.r(e);var n,c=o(0),s=o(16),a=o.n(s),r=o(36),i=o(21),d=o(66),l=o(6),j=o(67),u=o(47),h=o(53),b=(o(84),o(1)),p=function(){return Object(b.jsx)(h.a,{bg:"primary",variant:"dark",children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)(h.a.Brand,{as:i.b,to:"/",children:"Home"}),Object(b.jsxs)(u.a,{className:"me-auto",children:[Object(b.jsx)(u.a.Link,{as:i.b,to:"/photos",children:"Photos"}),Object(b.jsx)(u.a.Link,{as:i.b,to:"/todos",children:"Todos"})]})]})})},O=(o(91),function(){return Object(b.jsx)("div",{className:"root",children:Object(b.jsx)("h1",{children:"Home Page of Photos and Todos"})})}),x=o(8),m=o(28),f=o(35),g=o(32),v=o(44),y=o(73),P=function(){return Object(r.b)()},N=r.c,w=o(52),_=o.n(w),k=o(70),L=o(26),S=o(71),T=o.n(S),C=Object(L.b)("photos/fetch",function(){var t=Object(k.a)(_.a.mark((function t(e,o){var n,c;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="https://jsonplaceholder.typicode.com/photos?albumId=".concat(e),t.next=4,T.a.get(n);case 4:return c=t.sent,t.abrupt("return",c.data);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",o.rejectWithValue("Some problem with fetching photos with ".concat(t.t0)));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,o){return t.apply(this,arguments)}}()),F=(o(111),function(){return Object(b.jsx)("div",{className:"Loader",children:Object(b.jsx)("div",{className:"Loader__content"})})}),I=(o(112),function(){var t,e=Object(c.useState)(0),o=Object(x.a)(e,2),n=o[0],s=o[1],a=N((function(t){return t.photos})),r=a.photos,i=a.arePhotosLoading,d=a.errorLoadingPhotos,l=P(),j=0;return r.length>0&&(j=r[0].albumId),i&&(t=Object(b.jsx)(F,{})),d&&(t=Object(b.jsx)("h2",{children:d})),Object(b.jsxs)("div",{className:"photo",children:[Object(b.jsxs)("div",{className:"photo__top",children:[Object(b.jsx)("h2",{children:"Page with Photos"}),Object(b.jsxs)(m.a.Label,{htmlFor:"number",children:[Object(b.jsx)("span",{children:"Choose id of album here from 1 to 100"}),Object(b.jsxs)(y.a,{style:{width:"300px"},children:[Object(b.jsx)(v.a,{"aria-label":"Recipient's username",value:null===n||void 0===n?void 0:n.toString(),type:"number",step:"1",min:"1",max:"100",onChange:function(t){return s(Number(t.target.value))}}),Object(b.jsx)(f.a,{variant:"secondary",onClick:function(){return l(C(Number(n)))},disabled:n===j,children:"Get photos"})]})]})]}),Object(b.jsx)("div",{className:"photo__container",children:t||Object(b.jsx)(b.Fragment,{children:r.map((function(t){return Object(b.jsxs)(g.a,{style:{width:"200px",gap:"10px"},children:[Object(b.jsx)(g.a.Img,{variant:"top",alt:t.title,src:t.thumbnailUrl}),Object(b.jsxs)(g.a.Body,{children:[Object(b.jsx)(g.a.Title,{children:t.title.split(" ").slice(0,2).join(" ")}),Object(b.jsx)(g.a.Text,{children:t.title})]})]},t.id)}))})})]})}),A=o(37),B=o(4),D=o.n(B);!function(t){t.all="all",t.done="true",t.todo="false"}(n||(n={}));var R,E={todos:[{id:1,description:"Lorem Ipsum",status:!1}],filteredStatus:n.all},G=Object(L.c)({name:"todos",initialState:E,reducers:{toggleStatusTodo:function(t,e){var o=t.todos.find((function(t){return t.id===e.payload}));o&&(o.status=!o.status),t.todos=t.todos.filter((function(t){return t.id!==e.payload})),o&&t.todos.push(o)},addTodo:function(t,e){t.todos.push(e.payload)},removeTodo:function(t,e){t.todos=t.todos.filter((function(t){return t.id!==e.payload}))},setStatusFilter:function(t,e){t.filteredStatus=e.payload}}}),H=G.reducer,J=(o(113),function(){var t=Object(c.useState)(""),e=Object(x.a)(t,2),o=e[0],s=e[1],a=N((function(t){return t.todos})),r=a.todos,d=a.filteredStatus,l=P(),j=G.actions,u=j.toggleStatusTodo,h=j.addTodo,p=j.removeTodo,O=j.setStatusFilter,g=Object(A.a)(r).sort((function(t,e){return Number(t.status)-Number(e.status)}));return"all"!==d&&(g=r.filter((function(t){return String(t.status)===d}))),Object(b.jsxs)("div",{className:"todoPage",children:[Object(b.jsxs)("div",{className:"todoPage__top",children:[Object(b.jsx)("h2",{children:"Page with Todos"}),Object(b.jsxs)(m.a.Label,{htmlFor:"select-completed",style:{width:"350px",marginBottom:"16px"},children:["Toggle completion status below",Object(b.jsxs)(m.a.Select,{style:{marginTop:"8px"},id:"select-completed",value:d,onChange:function(t){return l(O(t.target.value))},children:[Object(b.jsx)("option",{value:n.all,children:"All"}),Object(b.jsx)("option",{value:n.done,children:"Done"}),Object(b.jsx)("option",{value:n.todo,children:"Todo"})]})]}),Object(b.jsxs)(m.a,{style:{width:"350px"},onSubmit:function(t){t.preventDefault();var e=Math.max.apply(Math,Object(A.a)(r.map((function(t){return t.id}))))+1;o&&l(h({id:e,description:o,status:!1})),s("")},method:"post",children:[Object(b.jsxs)(m.a.Group,{className:"mb-3",children:[Object(b.jsx)(m.a.Label,{htmlFor:"new-todo-input",children:"Add new todo below"}),Object(b.jsx)(m.a.Control,{id:"new-todo-input",placeholder:"Enter here",value:o,onChange:function(t){return s(t.target.value)}})]}),Object(b.jsx)(f.a,{variant:"secondary",type:"submit",children:"Add todo"})]})]}),Object(b.jsx)("div",{className:"todoPage__content",children:Object(b.jsx)("ul",{className:"todoPage__list",children:g.map((function(t){return Object(b.jsxs)("li",{className:"todoPage__list-item",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{checked:t.status,type:"checkbox",onChange:function(){return l(u(t.id))}}),Object(b.jsx)(i.b,{className:D()("todoPage__link",{"todoPage__link--checked":t.status}),to:"/todos/".concat(t.id),children:t.description})]}),Object(b.jsx)(f.a,{variant:"danger",onClick:function(){return l(p(t.id))},type:"button",children:"Remove"})]},t.id)}))})})]})}),M=(o(114),function(){var t=Object(l.g)(),e=N((function(t){return t.todos})).todos.find((function(e){return e.id===Number(t.todoid)}));return Object(b.jsxs)("div",{className:"single-todo",children:[Object(b.jsx)("h2",{children:"Single Todo Page"}),"with id #".concat(t.todoid),Object(b.jsx)("br",{}),Object(b.jsx)("strong",{children:"Description of todo: "}),null===e||void 0===e?void 0:e.description]})}),z=(o(115),function(){return Object(b.jsx)("div",{children:"Page Not Found"})}),U=(o(116),function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(p,{}),Object(b.jsx)("section",{className:"main",children:Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:"/",element:Object(b.jsx)(O,{})}),Object(b.jsx)(l.a,{path:"photos",element:Object(b.jsx)(I,{})}),Object(b.jsx)(l.a,{path:"todos",element:Object(b.jsx)(J,{})}),Object(b.jsx)(l.a,{path:"todos/:todoid",element:Object(b.jsx)(M,{})}),Object(b.jsx)(l.a,{path:"*",element:Object(b.jsx)(z,{})})]})})]})}),V=o(15),W=o(23),q=o(72),K=o.n(q),Q=o(7),X=Object(L.c)({name:"photos",initialState:{photos:[],arePhotosLoading:!1,errorLoadingPhotos:""},reducers:{},extraReducers:(R={},Object(Q.a)(R,C.rejected.type,(function(t,e){t.arePhotosLoading=!1,t.errorLoadingPhotos=e.payload})),Object(Q.a)(R,C.pending.type,(function(t){t.arePhotosLoading=!0})),Object(Q.a)(R,C.fulfilled.type,(function(t,e){t.arePhotosLoading=!1,t.errorLoadingPhotos="",t.photos=e.payload})),R)}).reducer,Y=Object(V.b)({todos:H,photos:X}),Z={key:"root",storage:K.a,whitelist:["todos"]},$=Object(W.g)(Z,Y),tt=Object(L.a)({reducer:$,middleware:function(t){return t({serializableCheck:{ignoredActions:[W.a,W.f,W.b,W.c,W.d,W.e]}})}}),et=Object(W.h)(tt);o(119);a.a.render(Object(b.jsx)(r.a,{store:tt,children:Object(b.jsx)(d.a,{loading:Object(b.jsx)(F,{}),persistor:et,children:Object(b.jsx)(i.a,{children:Object(b.jsx)(U,{})})})}),document.getElementById("root"))},84:function(t,e,o){},91:function(t,e,o){}},[[120,1,2]]]);
//# sourceMappingURL=main.f843ca36.chunk.js.map