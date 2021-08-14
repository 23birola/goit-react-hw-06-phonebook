(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){e.exports={container:"App_container__2pzkz"}},27:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(6),o=n.n(r),i=n(5),s=(n(27),n(33)),l=n(14),u=n(8),m=n.n(u),d=n(1),b=function(e){var t=e.onSubmit;return Object(d.jsxs)("form",{onSubmit:t,className:m.a.contactForm,children:[Object(d.jsx)("label",{htmlFor:"name",children:"Name"}),Object(d.jsx)("input",{type:"text",name:"name",id:"name",className:m.a.formInput,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(d.jsx)("label",{htmlFor:"number",children:"Number"}),Object(d.jsx)("input",{type:"tel",name:"number",id:"number",className:m.a.formInput,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(d.jsx)("button",{type:"submit",children:"Add contact"})]})},j=n(15),f=n.n(j),O=n(9),p=n.n(O),h=function(e){var t=e.contact,n=e.deleteContact;return Object(d.jsxs)("li",{className:p.a.contactItem,children:[Object(d.jsx)("span",{className:p.a.name,children:t.name}),Object(d.jsx)("span",{className:p.a.number,children:t.number}),Object(d.jsx)("button",{type:"button",onClick:function(){return n(t.id)},children:"Delete"})]})},x=function(e){var t=e.contacts,n=e.deleteContact;return Object(d.jsx)("ul",{className:f.a.contactList,children:t.map((function(e){return Object(d.jsx)(h,{contact:e,deleteContact:n},e.id)}))})},C=n(7),g=n(4),v=Object(g.b)({name:"contacts",initialState:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],reducers:{addItem:function(e,t){return[].concat(Object(C.a)(e),[t.payload])},deleteItem:function(e,t){return e.filter((function(e){return e.id!==t.payload}))}}}),_=v.actions,y=_.addItem,N=_.deleteItem,F=v.reducer,I=Object(g.b)({name:"filter",initialState:"",reducers:{filterContacts:function(e,t){return t.payload}}}),k=I.actions.filterContacts,w=I.reducer,A=n(13),L=n.n(A),S=function(e){var t=e.filterByName;return Object(d.jsxs)("div",{className:L.a.filter,children:[Object(d.jsx)("label",{htmlFor:"filter",children:"Find contacts by name"}),Object(d.jsx)("input",{type:"text",name:"filter",id:"filter",className:L.a.filterInput,onChange:t})]})},z=n(16),B=n.n(z);function D(){var e=Object(i.c)((function(e){return e.contacts}));console.log(e);var t=Object(i.c)((function(e){return e.filter})),n=Object(i.b)(),c=function(e){n(N(e))},a=t?e.filter((function(e){return e.name.toLowerCase().includes(t)})):void 0;return Object(d.jsxs)("div",{className:B.a.container,children:[Object(d.jsx)("h1",{children:"Phonebook"}),Object(d.jsx)(b,{onSubmit:function(t){t.preventDefault();var c=t.target.elements.name.value,a=t.target.elements.number.value,r=Object(s.a)();if(e.find((function(e){return e.name.toLowerCase()===c.toLowerCase()})))return l.b.error("".concat(c," is already in contacts!!!"));n(y({id:r,name:c,number:a})),t.target.elements.name.value="",t.target.elements.number.value=""}}),Object(d.jsx)("h2",{children:"Contacts"}),Object(d.jsx)(S,{filterByName:function(e){var t=e.target.value.toLowerCase();console.log(t),n(k(t))}}),!t&&Object(d.jsx)(x,{contacts:e,deleteContact:c}),t&&Object(d.jsx)(x,{contacts:a,deleteContact:c}),Object(d.jsx)(l.a,{})]})}var E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))},J=n(2),P=n(3),T=n(17),Z=n.n(T),q=Object(C.a)(Object(g.c)({serializableCheck:{ignoredActions:[P.a,P.f,P.b,P.c,P.d,P.e]}})),M={key:"contacts",storage:Z.a,blacklist:["filter"]},Y=Object(J.b)({contacts:F,filter:w}),H=Object(g.a)({reducer:Object(P.g)(M,Y),middleware:q,devTools:!1}),K={store:H,persistor:Object(P.h)(H)},R=n(18);o.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(i.a,{store:K.store,children:Object(d.jsx)(R.a,{loading:null,persistor:K.persistor,children:Object(d.jsx)(D,{})})})}),document.getElementById("root")),E()},8:function(e,t,n){e.exports={contactForm:"ContactForm_contactForm__2mErY"}},9:function(e,t,n){e.exports={name:"ContactListItem_name____gim",number:"ContactListItem_number__27W_Y"}}},[[31,1,2]]]);
//# sourceMappingURL=main.6b1611da.chunk.js.map