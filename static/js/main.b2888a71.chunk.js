(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{24:function(e,t,n){e.exports=n(35)},33:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(11),c=n.n(a),u=n(5),s=n(22),l=n(2),i=n(10),d=n(7),T=n(21),m=function(e){return e.isLoaded},f={loading:!1,isLoaded:!1,buttonText:"Click to load",sortField:"title",withUserTodos:[]},E=function(e){var t=e.sortField,n=e.withUserTodos;switch(t){case"UserName":return Object(i.a)(n).sort((function(e,t){return e.user.name.localeCompare(t.user.name)}));case"Title":return Object(i.a)(n).sort((function(e,t){return e.title.localeCompare(t.title)}));case"Completed":return Object(i.a)(n).sort((function(e,t){return+e.completed-+t.completed}));default:return Object(i.a)(n)}},b=Object(d.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_LOADING":return Object(l.a)(Object(l.a)({},e),{},{loading:!0});case"SET_SORT_FIELD":return Object(l.a)(Object(l.a)({},e),{},{sortField:t.sortField});case"SET_BUTTON_TEXT":return Object(l.a)(Object(l.a)({},e),{},{buttonText:t.buttonText});case"SET_WITH_USER_TODOS":return Object(l.a)(Object(l.a)({},e),{},{withUserTodos:t.withUserTodos});case"SET_IS_LOADED":return Object(l.a)(Object(l.a)({},e),{},{isLoaded:t.isLoaded});case"FINISH_LOADING":return Object(l.a)(Object(l.a)({},e),{},{loading:!1,buttonText:t.buttonText});default:return e}}),Object(T.composeWithDevTools)()),O=(n(33),Object(u.b)((function(e){return{withUserTodos:e.withUserTodos}}),(function(e){return{setWithUserTodos:function(t){return e({type:"SET_WITH_USER_TODOS",withUserTodos:t})}}}))((function(e){var t=e.todo,n=e.setWithUserTodos,o=e.withUserTodos;return r.a.createElement("div",{className:"Todo"},r.a.createElement("p",null,r.a.createElement("strong",null,"Todo:"),t.title),r.a.createElement("p",null,r.a.createElement("strong",null,"Is completed:"),t.completed?"Uncompleted":"Completed"),r.a.createElement("p",null,r.a.createElement("strong",null,"User name: "),t.user.name),r.a.createElement("button",{onClick:function(){n(o.filter((function(e){return e.id!==t.id})))},className:"Todo__button"},"Delete"))}))),p=Object(u.b)((function(e){return{sortedTodos:E(e),sortField:e.sortField}}),(function(e){return{setSortField:function(t){return e({type:"SET_SORT_FIELD",sortField:t})}}}))((function(e){var t=e.sortField,n=e.setSortField,o=e.sortedTodos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"Sort type:  "),r.a.createElement("select",{value:t,onChange:function(e){n(e.target.value)}},r.a.createElement("option",{value:"Title"},"Title"),r.a.createElement("option",{value:"UserName"},"UserName"),r.a.createElement("option",{value:"Completed"},"Completed")),r.a.createElement("ul",null,o.map((function(e){return r.a.createElement("li",null,r.a.createElement(O,{todo:e}))}))))})),h=n(23),j="https://mate-academy.github.io/react_dynamic-list-of-todos/api/",_=Object(u.b)((function(e){return{isLoaded:e.isLoaded,buttonText:e.buttonText}}),(function(e){return{setWithUserTodos:function(t){return e({type:"SET_WITH_USER_TODOS",withUserTodos:t})},setIsLoaded:function(t){return e({type:"SET_IS_LOADED",isLoaded:t})},setButtonText:function(t){return e({type:"SET_BUTTON_TEXT",buttonText:t})}}}))((function(e){var t=e.buttonText,n=e.setWithUserTodos,o=e.setButtonText,a=e.setIsLoaded;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Redux list of todos"),Object(u.c)(m)?r.a.createElement(p,null):r.a.createElement("button",{onClick:function(){o("Data is loaded now..."),Promise.all([fetch(j+"users.json").then((function(e){return e.json()})),fetch(j+"todos.json").then((function(e){return e.json()}))]).then((function(e){var t=Object(h.a)(e,2),n=t[0];return t[1].map((function(e){return Object(l.a)(Object(l.a)({},e),{},{user:n.filter((function(t){return t.id===e.userId}))[0]})}))})).then((function(e){n(e),a(!0)}))}},t))})),S=function(){return r.a.createElement(u.a,{store:b},r.a.createElement(s.a,null,r.a.createElement(_,null)))};c.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.b2888a71.chunk.js.map