(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,t,a){e.exports=a(264)},121:function(e,t,a){},122:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){},262:function(e,t,a){},264:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(72),o=a.n(c),l=(a(121),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function i(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var s=a(30),m=a(26),d=(a(122),a(39)),u=a.n(d),E=a(110),v=a.n(E);function f(){return r.a.createElement(u.a,{className:"NavbarClass",collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},r.a.createElement(u.a.Brand,{href:"#home"},"BURGER QUEEN"),r.a.createElement(u.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(u.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(v.a,{className:"mr-auto margin-left-nav nav-center"},r.a.createElement(s.b,{to:"/"},"ORDENAR PEDIDO"),r.a.createElement(s.b,{to:"/AtenderPedido"},"ATENDER PEDIDO"),r.a.createElement(s.b,{to:"/PedidoListo"},"PEDIDO LISTO"))))}function p(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),e.children)}var b=a(56),N=a(74),g=a.n(N),h=a(113),w=a(32),O=a(114),y=a.n(O),k=a(76);a(181);var C=function(e){var t=e.addUser,a=e.orden,n=e.user,c=e.handleInputChange,o=e.updateItem,l=e.deleteOrden;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:t,className:"margintop"},r.a.createElement("div",{className:"center weigth row margin-orden ordenmayor"},"ORDEN"),r.a.createElement("div",{className:"container center margin-option"},r.a.createElement("div",{className:"row weigth font-mayor"},r.a.createElement("div",{className:"col-3"},"PRODUCTO"),r.a.createElement("div",{className:"col-3"},"CANTIDAD"),r.a.createElement("div",{className:"col-3"},"PRECIO"),r.a.createElement("div",{className:"col-3"},"ELIMINAR")),a.length>0?a.map(function(e,t){return r.a.createElement("div",{className:"row margin-option font-menor section","data-testid":"item",key:e.id},r.a.createElement("div",{className:"col-3"},e.name),r.a.createElement("div",{className:"col-3 center"},r.a.createElement("button",{type:"button",className:"button-count margin-button-count-sum",onClick:function(){var a=Object(k.a)({},e);a.count+=1,o(t,a)},"data-testid":"".concat(t,"-update-button-sum")},r.a.createElement("i",{className:"fas fa-plus"})),r.a.createElement("span",{"data-testid":"".concat(t,"-amount")},e.count),r.a.createElement("button",{type:"button",className:"button-count margin-button-count-substr",onClick:function(){var a=Object(k.a)({},e);a.count-=1,a.count<1&&(a.count=1),o(t,a)},"data-testid":"".concat(t,"-update-button-subs")},r.a.createElement("i",{className:"fas fa-minus"}))),r.a.createElement("div",{className:"col-3 center"},"$/",e.count*e.value,".00"),r.a.createElement("div",{className:"col-3 center"},r.a.createElement("button",{type:"button",className:"button muted-button button-delete margin-button-count-substr",onClick:function(){return l(e.name)},"data-testid":"".concat(t,"-deleteOrden-button")},r.a.createElement("i",{className:"fas fa-trash-alt"}))))}):r.a.createElement("div",{className:"row center margin-option section"},r.a.createElement("div",{className:"col-12 center"},"No hay pedidos")),r.a.createElement("div",{className:"row weigth margin-total font-mayor margin-option"},r.a.createElement("div",{className:"col-3"},"TOTAL:"),r.a.createElement("div",{className:"col-9 center"},"$/",a.reduce(function(e,t){return e+t.count*t.value},0),".00")),r.a.createElement("div",{className:"section form-inline margin-cliente"},r.a.createElement("div",{className:"row marginleft"},r.a.createElement("div",{className:"col-6"},r.a.createElement("label",{htmlFor:"name"},"Cliente:",r.a.createElement("input",{type:"text",id:"name",name:"name",value:n.customer,onChange:c,"data-testid":"cliente-input"}))),r.a.createElement("div",{className:"col-6"},r.a.createElement("button",{type:"submit","data-testid":"ordenToFirebase-button",className:"button-send"},"ENVIAR A COCINAR")))))))},I=(a(182),a(115)),A=a.n(I),D=a(75),j=a.n(D);function R(e){var t=e.addOrden,a=e.state,c=Object(n.useState)("Desayuno"),o=Object(w.a)(c,2),l=o[0],i=o[1];return r.a.createElement("div",{className:"width"},r.a.createElement("div",{className:"d-flex flex-column border-black"},r.a.createElement(A.a,{size:"mt-3"},r.a.createElement(j.a,{className:"button-filter weigth marginsup btn marginrigth",variant:"outline-dark",type:"button",onClick:function(){return i("Desayuno")},"data-testid":"filter-button-desayuno"},"DESAYUNO"),r.a.createElement(j.a,{className:"button-filter weigth marginsup btn",variant:"outline-dark",type:"button",onClick:function(){return i("Resto del d\xeda")},"data-testid":"filter-button-restodeldia"},"MEN\xda"))),r.a.createElement("div",{className:"div-center"},a.filter(function(e){return e.type===l}).map(function(e){return r.a.createElement("div",{key:e.id,className:"row button-center border-black margin-div div-centerhijo padding-option"},r.a.createElement("div",{className:"col-3"},r.a.createElement("img",{src:e.img,alt:"imagen de opciones"})),r.a.createElement("div",{className:"col-3 width section centrar font-menor"},r.a.createElement("p",null,e.name)),r.a.createElement("div",{className:"col-3 width section centrar font-menor"},r.a.createElement("p",null,"$/",e.value,".00")),r.a.createElement("div",{className:"col-3 width section centrar margin-addOrden"},r.a.createElement("span",{key:e.id,className:"addOrden",role:"presentation",onClick:function(){return t(e)},"data-testid":"addOrden-button"},r.a.createElement("i",{className:"fas fa-shopping-cart"}))))})))}var T=a(21),L=a.n(T);L.a.initializeApp({apiKey:"AIzaSyDcljSmfPj-K2KFAIkSJovXh5vomh91q60",authDomain:"burger-queen-a4832.firebaseapp.com",databaseURL:"https://burger-queen-a4832.firebaseio.com",projectId:"burger-queen-a4832",storageBucket:"burger-queen-a4832.appspot.com",messagingSenderId:"358515366780"});var S=L.a,P=(a(262),function(){var e=Object(n.useState)([]),t=Object(w.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)(function(){function e(){return(e=Object(h.a)(g.a.mark(function e(){var t;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y()("https://raw.githubusercontent.com/mahaliroblesarbieto/LIM008-fe-burger-queen/prototype/src/data/menu.json");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]);var o=Object(n.useState)([]),l=Object(w.a)(o,2),i=l[0],s=l[1],m=Object(n.useState)({customer:""}),d=Object(w.a)(m,2),u=d[0],E=d[1];return r.a.createElement("div",{className:"width-total"},r.a.createElement("div",{className:"row width-total"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement(R,{addOrden:function(e){if(i.includes(e)){var t=i.indexOf(e);i[t].count+=1,s(Object(b.a)(i))}else a.filter(function(t){return t.name===e.name?s([].concat(Object(b.a)(i),[t])):t})},state:a})),r.a.createElement("div",{className:"col-md-6 margin-black"},r.a.createElement(C,{orden:i,deleteOrden:function(e){s(i.filter(function(t){return t.name!==e}))},updateItem:function(e,t){var a=Object(b.a)(i);a[e]=t,s(a)},addUser:function(e){e.preventDefault(),S.firestore().collection("users").add({name:u.customer,orden:i,date:S.firestore.FieldValue.serverTimestamp()}),E({customer:""}),s([])},user:u,handleInputChange:function(e){E({customer:e.target.value})}}))))}),x=a(55);function U(){var e=Object(x.a)(L.a.firestore().collection("users").orderBy("date","asc")),t=e.error,a=e.loading,n=e.value;return r.a.createElement("div",{className:"container center margin-option"},r.a.createElement("div",{className:"row weigth font-mayor"},r.a.createElement("div",{className:"col-3"},"CLIENTE"),r.a.createElement("div",{className:"col-3"},"PRODUCTO"),r.a.createElement("div",{className:"col-3"},"CANTIDAD"),r.a.createElement("div",{className:"col-3"},"ENVIAR")),t&&r.a.createElement("strong",null,"Error: ",t),a&&r.a.createElement("span",null,"Collection: Loading..."),n&&r.a.createElement("span",null,n.docs.map(function(e){return r.a.createElement("div",{className:"row margin-option font-menor section","data-testid":"item",key:e.id},r.a.createElement("div",{className:"col-3"},e.data().name),r.a.createElement("div",{className:"col-3 center"},e.data().orden.map(function(e){return r.a.createElement("div",null,e.name)})),r.a.createElement("div",{className:"col-3 center"},e.data().orden.map(function(e){return r.a.createElement("div",null,e.count)})),r.a.createElement("div",{className:"col-3 center"},r.a.createElement("button",{type:"button",className:"button muted-button button-delete margin-button-count-substr",onClick:function(){return function(e,t){var a=L.a.firestore();a.collection("ordenFinished").add(e),a.collection("users").doc(t).delete()}(e.data(),e.id)}},r.a.createElement("i",{className:"fas fa-share"}))))})))}function q(){var e=Object(x.a)(L.a.firestore().collection("ordenFinished").orderBy("date","asc")),t=e.error,a=e.loading,n=e.value;return r.a.createElement("div",{className:"container center margin-option"},r.a.createElement("div",{className:"row weigth font-mayor"},r.a.createElement("div",{className:"col-3"},"CLIENTE"),r.a.createElement("div",{className:"col-3"},"PRODUCTO"),r.a.createElement("div",{className:"col-3"},"CANTIDAD"),r.a.createElement("div",{className:"col-3"},"ENTREGAR")),t&&r.a.createElement("strong",null,"Error: ",t),a&&r.a.createElement("span",null,"Collection: Loading..."),n&&r.a.createElement("span",null,n.docs.map(function(e){return r.a.createElement("div",{className:"row margin-option font-menor section","data-testid":"item",key:e.id},r.a.createElement("div",{className:"col-3"},e.data().name),r.a.createElement("div",{className:"col-3 center"},e.data().orden.map(function(e){return r.a.createElement("div",null,e.name)})),r.a.createElement("div",{className:"col-3 center"},e.data().orden.map(function(e){return r.a.createElement("div",null,e.count)})),r.a.createElement("div",{className:"col-3 center"},r.a.createElement("button",{type:"button",className:"button muted-button button-delete margin-button-count-substr",onClick:function(){return function(e,t){var a=L.a.firestore();a.collection("orderDelivered").add(e),a.collection("ordenFinished").doc(t).delete()}(e.data(),e.id)}},r.a.createElement("i",{className:"fas fa-share"}))))})))}a(263);var F=document.getElementById("root");o.a.render(r.a.createElement(function(){return r.a.createElement(s.a,null,r.a.createElement(p,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:P}),r.a.createElement(m.a,{exact:!0,path:"/AtenderPedido",component:U}),r.a.createElement(m.a,{exact:!0,path:"/PedidoListo",component:q}))))},{className:"width-total"}),F),function(e){if("serviceWorker"in navigator){if(new URL("/LIM008-fe-burger-queen",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/LIM008-fe-burger-queen","/service-worker.js");l?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):i(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):i(t,e)})}}()}},[[116,1,2]]]);
//# sourceMappingURL=main.c81eedbc.chunk.js.map