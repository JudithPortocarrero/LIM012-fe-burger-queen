(this["webpackJsonpapp-bq"]=this["webpackJsonpapp-bq"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logoBG.2cf2820a.png"},,,,,,,,,,,,function(e,t,a){},,,function(e,t,a){},,,,function(e,t,a){e.exports=a(54)},,,,,function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(26),r=a.n(c),l=a(4),i=a(1),d=(a(34),function(e){var t=e.tituloBonton,a=e.referencia;return o.a.createElement(l.b,{className:"elegirUsuario",to:a},t)}),s=a(10),m=a.n(s),u=(a(39),function(){return o.a.createElement("div",{className:"contenedor"},o.a.createElement("div",{className:"contenedorImagen"},o.a.createElement("img",{className:"logoPage1",src:m.a,alt:"Logo Burger"})),o.a.createElement("div",{className:"contenedorBotones"},o.a.createElement(d,{tituloBonton:"MESERO",referencia:"/mesero/RealizarPedido"}),o.a.createElement(d,{tituloBonton:"COCINERO",referencia:"/cocinero/EstadoCocinero"})))}),E=a(28),f=a(3),b=(a(22),function(){return o.a.createElement("header",null,o.a.createElement("div",{className:"contenedorBtn"},o.a.createElement("div",{className:"btnHeader"},o.a.createElement(l.b,{to:"/mesero/RealizarPedido",className:"links"},"REALIZAR PEDIDO")),o.a.createElement("div",{className:"btnHeader"},o.a.createElement(l.b,{to:"/mesero/EstadoDePedido",className:"links"},"ESTADO DEL PEDIDO")),o.a.createElement("div",{className:"btnHeader"},o.a.createElement(l.b,{to:"/mesero/HistorialDePedido",className:"links"},"HISTORIAL DE PEDIDO"))),o.a.createElement("div",{className:"contenedorSaludo"},o.a.createElement("p",{className:"saludo"},"Hola, mesero"),o.a.createElement(l.b,{to:"/",className:"linkHome"},o.a.createElement("img",{className:"logo",src:m.a,alt:"Logo Burger"}))))}),N=(a(40),function(e){var t=e.ImageProducto,a=e.nombreProducto,n=e.precioProducto,c=e.idProducto,r=e.click;return o.a.createElement("div",{className:"contenedorProductoUno"},o.a.createElement("div",{className:"contenedorComida"},o.a.createElement("img",{className:"imagenProducto",src:t,alt:a})),o.a.createElement("div",{className:"contenedorNombre"},o.a.createElement("p",{className:"nombre"},a)),o.a.createElement("button",{className:"contenedorPrecio",id:c,onClick:r},"S/ ",n))}),p=(a(41),function(e){var t=e.tipoDeProducto,a=e.menu,n=e.onClick;return o.a.createElement("div",{className:"contenedorProducto"},a&&void 0!==a?a.map((function(e,a){if(e.data.tipo===t)return o.a.createElement(N,{key:a,click:n,idProducto:e.id,ImageProducto:e.data.imgProducto,nombreProducto:e.data.nombreProducto,precioProducto:e.data.precioProducto})})):null)}),v=a(13),g=a(7),h=a.n(g);a(44);h.a.initializeApp({apiKey:"AIzaSyCyUxh3iRWoypvbXc-waQw7Dd7pqG6y5pI",authDomain:"burgerqueen-9fc96.firebaseapp.com",databaseURL:"https://burgerqueen-9fc96.firebaseio.com",projectId:"burgerqueen-9fc96",storageBucket:"burgerqueen-9fc96.appspot.com",messagingSenderId:"80737932251",appId:"1:80737932251:web:073968cf16de68bae64dfe",measurementId:"G-8H7Q6BL642"});h.a.firestore();var O=function(e,t){return h.a.firestore().collection("OrdenPedido").doc(e).update(t)},P=function(e){return h.a.firestore().collection("OrdenPedido").doc(e).get()},C=(a(46),a(47),function(e){var t=e.idcontenedor,a=e.Increment,n=e.Decrement,c=e.counter,r=e.nombre,l=e.precio;return o.a.createElement("tr",null,o.a.createElement("td",{className:"controladorContador"},o.a.createElement("button",{id:t,className:"btnContador",type:"button",onClick:a},"+"),o.a.createElement("strong",null,"\xa0\xa0",c,"\xa0\xa0"),o.a.createElement("button",{id:t,className:"btnContador",type:"button",onClick:n},"-")),o.a.createElement("td",null,r),o.a.createElement("td",{className:"contPrecio"},l))}),D=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){var e;e=function(e){c(e)},h.a.firestore().collection("menu").get().then((function(t){var a;a=t.docs.map((function(e){return{id:e.id,data:e.data()}})),e(a)}))}),[]);var r=Object(n.useState)("desayuno"),l=Object(f.a)(r,2),i=l[0],d=l[1],s=Object(n.useState)(""),m=Object(f.a)(s,2),u=m[0],N=m[1],v=Object(n.useState)(""),g=Object(f.a)(v,2),O=g[0],P=g[1],D=Object(n.useState)([]),k=Object(f.a)(D,2),S=k[0],y=k[1],H=Object(n.useState)(0),I=Object(f.a)(H,2),j=I[0],A=I[1],M=function(e){for(var t=e.target.id,a=S.map((function(e){return e.id===t&&(e.contador=e.contador+1),e})),n=a.map((function(e){return e.contador*e.precio})),o=0,c=0;c<n.length;c++)o+=n[c];y(a),A(o)},R=function(e){for(var t=e.target.id,a=S.map((function(e){return e.id===t&&(e.contador=e.contador-1),e})),n=a.map((function(e){if(0!==e.contador)return e.contador*e.precio;return 0})),o=a.filter((function(e){return 0!==e.contador})),c=0,r=0;r<n.length;r++)c+=n[r];y(o),A(c)},B=function(e){d(e)};return o.a.createElement("div",{className:""},o.a.createElement(b,null),o.a.createElement("div",{className:"contenedorCuerpo"},o.a.createElement("div",{className:"contenedorPedido"},o.a.createElement("section",{className:"descripcionPedido"},o.a.createElement("div",null,o.a.createElement("div",{className:"titulo"},"ORDEN  DE  PEDIDO"),o.a.createElement("form",{className:"formulario"},"N\xb0 de mesa:",o.a.createElement("input",{type:"text",className:"nroMesa ingresoDatos",onChange:function(e){P(e.target.value)}}),o.a.createElement("br",null),"Cliente:",o.a.createElement("input",{type:"text",className:"nombreCliente ingresoDatos",onChange:function(e){N(e.target.value)}})),o.a.createElement("div",{className:"contenedorTabla"},o.a.createElement("table",{className:"tabla"},o.a.createElement("tbody",null,S.map((function(e,t){return o.a.createElement(C,{key:t,idcontenedor:e.id,Increment:M,Decrement:R,counter:e.contador,nombre:e.producto,precio:e.precio})})))))),o.a.createElement("div",{className:"total"},"Total: ",j)),o.a.createElement("button",{className:"btnEnviar",onClick:function(){var e=1;h.a.firestore().collection("OrdenPedido").orderBy("numero","desc").limit(1).get().then((function(t){var a;t.forEach((function(t){e=t.data().numero+1,console.log(e)})),(a={fechaini:new Date,fechafin:"",cliente:u,mesa:O,detalle:S,preciototal:j,flagentregadomesero:!1,flagterminadococina:!1,numero:e},h.a.firestore().collection("OrdenPedido").add(a)).then((function(){document.querySelector(".nroMesa").value="",document.querySelector(".nombreCliente").value="",y([]),A(0),console.log("Subido exitosamente")})).catch((function(){console.log("error")}))}))}},"ENVIAR"),o.a.createElement("button",{className:"btnCancelar",onClick:function(){document.querySelector(".nroMesa").value="",document.querySelector(".nombreCliente").value="",y([]),A(0)}},"CANCELAR")),o.a.createElement("div",{className:"productos"},o.a.createElement("section",{className:"selectorMenu"},o.a.createElement("button",{className:"btnMenu",onClick:function(){B("desayuno")}},"DESAYUNO"),o.a.createElement("button",{className:"btnMenu",onClick:function(){B("almuerzo")}},"ALMUERZO Y CENA"),o.a.createElement("button",{className:"btnMenu",onClick:function(){B("bebida")}},"BEBIDAS")),o.a.createElement("section",{className:"mostradorPedidos"},o.a.createElement(p,{menu:a,tipoDeProducto:i,onClick:function(e){var t=e.target.id,n=a.filter((function(e){return e.id===t})),o={id:n[0].id,contador:1,producto:n[0].data.nombreProducto,precio:n[0].data.precioProducto,flagcocina:!1,flagservido:!1};A(j+n[0].data.precioProducto),y([].concat(Object(E.a)(S),[o]))}})))))},k=(a(48),function(e){var t=e.detalle,a=e.idPedido,n=e.esHistorico;return o.a.createElement("div",{className:"detallesEstadoCocina"},o.a.createElement("table",{className:"tbMesero"},o.a.createElement("tbody",null,o.a.createElement("tr",{className:"contenedorTitulos"},o.a.createElement("th",null),o.a.createElement("th",null),o.a.createElement("th",{className:"titulosTabla"},"PREPARADO"),o.a.createElement("th",{className:"titulosTabla"},"SERVIDO")),t.map((function(e){return o.a.createElement("tr",{key:e.id.toString(),className:"descripcionTabla"},o.a.createElement("td",null,e.contador),o.a.createElement("td",null,e.producto),o.a.createElement("td",{className:"checks"},o.a.createElement("input",{type:"Checkbox",checked:e.flagcocina,className:"checkCocinero controlChecks",id:e.id})),o.a.createElement("td",{className:"checks"},o.a.createElement("input",{type:"Checkbox",checked:e.flagservido,className:"controlChecks",id:e.id,disabled:"true"==n,onClick:function(){!0===e.flagcocina&&function(e,t){P(e).then((function(a){var n=a.data();n.detalle.map((function(e){e.id===t&&(e.flagservido=!e.flagservido)})),O(e,n)}))}(a,e.id)}})))})))))}),S=(a(49),function(e){var t=e.pedidos,a=e.esHistorico;return console.log(a),o.a.createElement("div",{className:"contenedorCards"},t.map((function(e,t){return o.a.createElement("section",{className:"cardEstadoPedido",key:t},o.a.createElement("section",{className:"contenedorCardEstadoPedido"},o.a.createElement("center",{className:"tituloNroOrden"},o.a.createElement("strong",null,"Orden N\xb0 ",e.numero)),o.a.createElement("p",{className:"tituloNroMesa"},"N\xb0 de Mesa: ",e.mesa),o.a.createElement(k,{detalle:e.detalle,idPedido:e.id,esHistorico:a})),o.a.createElement("button",{className:"btnEntregado",onClick:function(){var t;t=e.id,P(t).then((function(e){var a=e.data();a.flagentregadomesero=!0,O(t,a)}))}},"ENTREGADO"))})))}),y=(a(50),function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e;e=function(e){console.log(e),c(e)},h.a.firestore().collection("OrdenPedido").orderBy("fechaini","asc").onSnapshot((function(t){var a=[];t.forEach((function(e){!1===e.data().flagentregadomesero&&a.push(Object(v.a)({id:e.id},e.data()))})),e(a)}))}),[]),o.a.createElement("div",{className:"contenedorEstadoPedidos"},o.a.createElement(b,null),o.a.createElement("div",{className:"contenedorListaPedidos"},o.a.createElement(S,{pedidos:a,esHistorico:"false"}),"  "))}),H=function(e){var t=e.detalle;return console.log("detalle",t),o.a.createElement("div",{className:"detallePedidoHistorico"},o.a.createElement("table",null,o.a.createElement("tbody",null,t.map((function(e){return o.a.createElement("tr",{key:e.id},o.a.createElement("td",{className:"td1"},e.contador+" "),o.a.createElement("td",{className:"td2"},e.producto+" "),o.a.createElement("td",{className:"td3"},"S/ "+e.precio))})))))},I=function(e){var t=e.pedidos;return o.a.createElement(n.Fragment,null,t.map((function(e,t){return o.a.createElement("div",{key:t,className:"historicoListaCard"},o.a.createElement("div",{className:"cardEstadoHistorico"},o.a.createElement("div",{className:"contenedorDetallesHistorial"},o.a.createElement("section",null,"N\xb0 de Pedido: ",e.numero),o.a.createElement("section",null,"N\xb0 de Mesa: ",e.mesa),o.a.createElement("section",null,"Nombre: ",e.nombre)),o.a.createElement(H,{detalle:e.detalle}),o.a.createElement("div",{className:"precioTotal"},"TOTAL:          S/",e.preciototal)))})))},j=(a(25),function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e;e=function(e){console.log(e),c(e)},h.a.firestore().collection("OrdenPedido").orderBy("fechaini","asc").onSnapshot((function(t){var a=[];t.forEach((function(e){!0===e.data().flagentregadomesero&&a.push(Object(v.a)({id:e.id},e.data()))})),e(a)}))}),[]),o.a.createElement("div",{className:"contenedorHistorialMesero"},o.a.createElement(b,null),o.a.createElement("div",{className:"contenedorPedidosMesero"},o.a.createElement(I,{pedidos:a})))}),A=function(){return o.a.createElement("header",null,o.a.createElement("div",{className:"contenedorBtn"},o.a.createElement("div",{className:"btnHeader btnHeaderCocinero"},o.a.createElement(l.b,{to:"/cocinero/EstadoCocinero",className:"links"},"LISTA DE PEDIDOS")),o.a.createElement("div",{className:"btnHeader btnHeaderCocinero"},o.a.createElement(l.b,{to:"/cocinero/HistorialDeCocinero",className:"links"},"HISTORIAL DE PEDIDOS"))),o.a.createElement("div",{className:"contenedorSaludo"},o.a.createElement("p",{className:"saludo"},"Hola,cocinero"),o.a.createElement(l.b,{to:"/",className:"linkHome"},o.a.createElement("img",{className:"logo",src:m.a,alt:"Logo Burger"}))))},M=(a(51),function(e){var t=e.detalle,a=e.idPedido,n=e.esHistorico;return console.log(t),o.a.createElement("div",{className:"detallesEstadoPreparado"},o.a.createElement("table",{className:"tbMesero"},o.a.createElement("tbody",null,t.map((function(e){return o.a.createElement("tr",{key:e.id.toString()},o.a.createElement("td",null,e.contador),o.a.createElement("td",null,e.producto),"false"==n&&o.a.createElement("td",{className:"checks"},o.a.createElement("input",{type:"Checkbox",checked:e.flagcocina,className:"controlChecks",id:e.id,disabled:"true"==n,onClick:function(){return function(e,t){return P(e).then((function(a){var n=a.data();n.detalle.map((function(e){e.id===t&&(e.flagcocina=!e.flagcocina)})),O(e,n)}))}(a,e.id)}})))})))))}),R=(a(52),function(e){var t=e.pedidos,a=e.esHistorico;return o.a.createElement("div",{className:"contenedorCardCocinero"},t.map((function(e){return o.a.createElement("section",{className:"cardCocinero",key:e.numero.toString()},o.a.createElement("section",null,o.a.createElement("center",{className:"tituloNroOrden"},o.a.createElement("strong",null,"Orden N\xb0 ",e.numero)),o.a.createElement(M,{detalle:e.detalle,idPedido:e.id,esHistorico:a})),o.a.createElement("button",{className:"btnPedidoTerminado",onClick:function(){var t;t=e.id,P(t).then((function(e){var a=e.data();a.flagterminadococina=!0,a.fechafin=new Date,O(t,a)}))}},"PEDIDO TERMINADO"))})))}),B=(a(53),function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e;e=function(e){console.log(e),c(e)},h.a.firestore().collection("OrdenPedido").orderBy("fechaini","asc").onSnapshot((function(t){var a=[];t.forEach((function(e){!1===e.data().flagterminadococina&&a.push(Object(v.a)({id:e.id},e.data()))})),e(a)}))}),[]),o.a.createElement("div",{className:"contenedorEstadoCocinero"},o.a.createElement(A,null),o.a.createElement("div",{className:"contenedorListaCocinero"},o.a.createElement(R,{pedidos:a,esHistorico:"false"})))}),L=function(e){var t=e.detalle;return console.log(t),o.a.createElement("div",{className:"detallePedidoHistorico"},o.a.createElement("table",null,o.a.createElement("tbody",null,t.map((function(e){return o.a.createElement("tr",{key:e.id},o.a.createElement("td",{className:"td1"},e.contador+" "),o.a.createElement("td",{className:"td2"},e.producto+" "))})))))},T=function(e){return new Date(e).toLocaleString()},x=function(e){var t=e.pedidos;return console.log("pedidos",t),o.a.createElement(n.Fragment,null,t.map((function(e){return o.a.createElement("div",{key:e.numero.toString(),className:"historicoListaCard"},o.a.createElement("div",{className:"cardEstadoHistorico"},o.a.createElement("div",{className:"contenedorDetallesHistorial"},o.a.createElement("label",null,"N\xb0 de Pedido: ",e.numero),o.a.createElement("label",null,"HORA INICIO: ",T(e.fechaini.toDate())),o.a.createElement("label",null,"HORA FIN: ",T(e.fechafin.toDate())),o.a.createElement("label",null,"Duraci\xf3n:"," ",function(e,t){var a=e.getTime(),n=t.getTime()-a;n/=1e3;var o=Math.floor(n%60);n/=60;var c=Math.floor(n%60);return n/=60,Math.floor(n%24)+" h "+c+" m "+o+" s"}(e.fechaini.toDate(),e.fechafin.toDate())," ")),o.a.createElement(L,{detalle:e.detalle})))})))},q=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e;e=function(e){console.log(e),c(e)},h.a.firestore().collection("OrdenPedido").orderBy("fechaini","asc").onSnapshot((function(t){var a=[];t.forEach((function(e){!0===e.data().flagterminadococina&&a.push(Object(v.a)({id:e.id},e.data()))})),e(a)}))}),[]),o.a.createElement("div",{className:"contenedorHistorialMesero"},o.a.createElement(A,null),o.a.createElement("div",{className:"contenedorPedidosMesero"},o.a.createElement(x,{pedidos:a})))},w=function(){return o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/",component:u}),o.a.createElement(i.a,{exact:!0,path:"/mesero/RealizarPedido",component:D}),o.a.createElement(i.a,{exact:!0,path:"/mesero/EstadoDePedido",component:y}),o.a.createElement(i.a,{exact:!0,path:"/mesero/HistorialDePedido",component:j}),o.a.createElement(i.a,{exact:!0,path:"/cocinero/EstadoCocinero",component:B}),o.a.createElement(i.a,{exact:!0,path:"/cocinero/HistorialDeCocinero",component:q}),o.a.createElement(i.a,{component:u}))};r.a.render(o.a.createElement(l.a,null,o.a.createElement(w,null)),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.78eeab68.chunk.js.map