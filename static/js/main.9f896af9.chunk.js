(this.webpackJsonpcatscats=this.webpackJsonpcatscats||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/0.47bf35aa.png"},19:function(e,t,a){e.exports=a.p+"static/media/1.987f06cb.jpg"},24:function(e,t,a){e.exports=a.p+"static/media/Metroid.dc154521.mp3"},36:function(e,t,a){},38:function(e,t,a){e.exports=a.p+"static/media/cat-154642.41bc6580.svg"},39:function(e,t,a){e.exports=a.p+"static/media/Menuico.ecea2d0a.svg"},40:function(e,t,a){e.exports=a.p+"static/media/Croix.0b0f56a5.svg"},45:function(e,t,a){e.exports=a.p+"static/media/2.26dd9259.jpg"},46:function(e,t,a){e.exports=a.p+"static/media/3.6b262e5c.jpg"},47:function(e,t,a){e.exports=a.p+"static/media/boxdig.51377e11.mp3"},48:function(e,t,a){e.exports=a.p+"static/media/chien.6ae85569.mp3"},51:function(e,t,a){e.exports=a(87)},56:function(e,t,a){},73:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){e.exports=a.p+"static/media/4.9aa2d905.jpg"},85:function(e,t,a){e.exports=a.p+"static/media/5.613fc6f3.jpg"},86:function(e,t,a){e.exports=a.p+"static/media/Payout.f7814f7b.wav"},87:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(37),o=a.n(r),l=(a(56),a(8)),s=a.n(l),i=(a(36),a(1)),u=a(38),m=a.n(u),f=a(39),d=a.n(f),v=a(40),p=a.n(v),g=a(11);a(73);function b(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(c.useState)(!1),l=Object(i.a)(o,2),s=l[0],u=l[1],f=Object(c.useState)(""),v=Object(i.a)(f,2);v[0],v[1];Object(c.useEffect)((function(){var e=window.matchMedia("(max-width: 900px)");return e.addListener(b),b(e),function(){e.removeListener(b)}}));var b=function(e){e.matches?u(!0):u(!1)},E=function(){!0===a&&r(!a)};return n.a.createElement("div",null,n.a.createElement("nav",{className:"headerTop"},(a||!s)&&n.a.createElement("ul",{className:"listeMenu"},n.a.createElement("li",{onClick:E,className:"lienNav"},n.a.createElement(g.b,{activeStyle:{color:"#ffffff"},className:"lien",exact:!0,to:"/"},n.a.createElement("img",{src:m.a,alt:"logo twitch",className:"logo"}))),n.a.createElement("li",{onClick:E,className:"lienNav"},n.a.createElement(g.b,{activeStyle:{color:"#ffffff"},className:"lien",exact:!0,to:"/casinoCats"},"Casino Cats")),n.a.createElement("li",{onClick:E,className:"lienNav"},n.a.createElement(g.b,{activeStyle:{color:"#ffffff"},className:"lien",exact:!0,to:"/infinityScroll"},"Infinity Scroll Cats")),n.a.createElement("li",{onClick:E,className:"lienNav"},n.a.createElement(g.b,{activeStyle:{color:"#ffffff"},className:"lien",exact:!0,to:"/searchCat"},"Search My Cat")))),n.a.createElement("div",{className:"menuResBtn"},n.a.createElement("img",{onClick:function(){r(!a)},src:a?p.a:d.a,alt:"icone menu responsive",className:"menuIco"})))}var E=a(25),h=a(9),j=a.n(h),y=a(13),O=a(42);a(81);function N(e){var t=e.post,a=e.i,r=Object(c.useState)(),o=Object(i.a)(r,2),l=o[0],s=o[1];return n.a.createElement("div",{key:a,className:"post"},n.a.createElement("div",{className:"number"},a),t?n.a.createElement("div",{className:"post-info"},n.a.createElement("img",{className:"catsPicture",src:t.picture}),n.a.createElement("p",{className:"post-body"},t.fact),n.a.createElement("input",{type:"text",value:t.picture||"",readOnly:!0,onClick:function(e){s("Url copi\xe9e avec succ\xe8s !"),navigator.clipboard.writeText(e.target.value),console.log(e.target.value),setTimeout((function(){s()}),4e3)}}),l&&n.a.createElement("div",{className:""},l)):n.a.createElement(O.RotateSpinner,null))}var x=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=(t[0],t[1],Object(c.useState)([])),r=Object(i.a)(a,2),o=r[0],l=r[1],u=Object(c.useState)(!1),m=Object(i.a)(u,2),f=m[0],d=m[1],v=document.querySelector(".loader");function p(){window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight&&(d(!0),console.log("Fetch more list items!"))}Object(c.useEffect)((function(){(function(){var e=Object(y.a)(j.a.mark((function e(){var t,a,c,n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("https://catfact.ninja/facts?limit=5&max_length=140");case 2:return t=e.sent,e.next=5,s.a.get("https://api.thecatapi.com/v1/images/search?mime_types=gif&limit=5");case 5:a=e.sent,c=t.data.data,n=a.data,r=c.map((function(e,t){return e.picture=n[t].url,e.id=t,e.title=n[t].id,e.body=n[t].id,e})),l(r);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.useEffect)((function(){return window.addEventListener("scroll",p),function(){return window.removeEventListener("scroll",p)}}),[]),Object(c.useEffect)((function(){f&&g()}),[f]);var g=function(){var e=Object(y.a)(j.a.mark((function e(){var t,a,c,n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("https://catfact.ninja/facts?limit=5&max_length=140");case 2:return t=e.sent,e.next=5,s.a.get("https://api.thecatapi.com/v1/images/search?mime_types=gif&limit=5");case 5:a=e.sent,c=t.data.data,n=a.data,r=c.map((function(e,t){return e.picture=n[t].url,e.id=t,e.title=n[t].id,e.body=n[t].id,e})),v.classList.add("show"),setTimeout((function(){l((function(e){return[].concat(Object(E.a)(e),Object(E.a)(r))})),d(!1),v.classList.remove("show")}),2e3);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(o),n.a.createElement("div",{className:"contain"},o.map((function(e,t){return n.a.createElement(N,{key:t,post:e,i:t+1})})),n.a.createElement("div",{className:"loader"},n.a.createElement("div",{className:"circle"}),n.a.createElement("div",{className:"circle"}),n.a.createElement("div",{className:"circle"})))};function S(){return n.a.createElement("div",{className:"contain"},n.a.createElement("h1",null,"HOME"),n.a.createElement("p",null,"Welcome to the project Cats "))}function w(){return n.a.createElement("div",{className:"contain"},n.a.createElement("div",{className:"containerDecaleResultats"},n.a.createElement("h4",null,"R\xe9sultats de recherche : Pas de resultat, ",n.a.createElement("br",null),"verifiez l'orthographe de votre saisie ")))}var k=a(2),C=(a(82),[{value:"choose",label:"",color:""},{value:"category",label:"category",color:"colorEnvPreProd"},{value:"says",label:"says",color:"colorEnvProd"},{value:"tag",label:"Tag",color:"colorEnvPreProd"}]),P=[{value:"ugly",label:"ugly",color:""},{value:"short",label:"short",color:"colorEnvProd"},{value:"big",label:"big",color:"colorEnvPreProd"},{value:"long",label:"long",color:"colorEnvDev"},{value:"angry",label:"angry",color:"colorEnvDev"},{value:"hard",label:"hard",color:"colorEnvDev"},{value:"happy",label:"happy",color:"colorEnvDev"},{value:"guilty",label:"guilty",color:"colorEnvDev"},{value:"huge",label:"huge",color:"colorEnvDev"},{value:"old",label:"old",color:"colorEnvDev"},{value:"cut",label:"cut",color:"colorEnvDev"},{value:"serious",label:"serious",color:"colorEnvDev"}];function I(){var e=Object(c.useState)(),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(c.useState)(),l=Object(i.a)(o,2),u=l[0],m=l[1],f=Object(c.useState)(!1),d=Object(i.a)(f,2),v=d[0],p=d[1],g=Object(c.useState)(),b=Object(i.a)(g,2),E=b[0],h=b[1],O=Object(c.useState)(),N=Object(i.a)(O,2),x=N[0],S=N[1],w=Object(c.useState)(),k=Object(i.a)(w,2),I=k[0],M=k[1],T=Object(c.useState)(),R=Object(i.a)(T,2),F=R[0],z=R[1],D=Object(c.useState)(),A=Object(i.a)(D,2),B=A[0],L=A[1],W=Object(c.useState)(),Y=Object(i.a)(W,2),_=Y[0],V=Y[1];Object(c.useEffect)((function(){(function(){var e=Object(y.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u&&"says"===E&&(r("https://cataas.com/cat/says/".concat(u)),V("https://cataas.com/cat/says/".concat(u)),m()),"tag"===E&&(r("https://cataas.com/cat/".concat(x)),m()),"category"!==E||!F){e.next=10;break}return s.a.defaults.headers.common["x-api-key"]="00465795-a5c9-4d1b-b408-96edf9b0286d",e.next=6,s.a.get("https://api.thecatapi.com/v1/images/search?category_ids=".concat(F,"&limit=10"));case 6:t=e.sent,console.log("res",t),r(t.data),m();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[v]),Object(c.useEffect)((function(){(function(){var e=Object(y.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("category"!==E){e.next=7;break}return console.log("hhjhghj"),e.next=4,s.a.get("https://api.thecatapi.com/v1/categories");case 4:t=e.sent,M(t.data),console.log(t.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[E]),console.log(E),console.log(_);return n.a.createElement("div",{className:"contain"},n.a.createElement("form",{className:"form",id:"form"},n.a.createElement("div",{className:"form-controlS "},n.a.createElement("label",{htmlFor:"account"},"Search type "),n.a.createElement("select",{className:"form-control type ",id:"inputFilteredByEnv",onChange:function(e){return function(e){r(),V(),h(e.target.value)}(e)}},C.map((function(e){return n.a.createElement("option",{className:"type",key:e.label,value:e.value}," ",e.label)}))))),n.a.createElement("div",{className:"containSearch"},"says"===E&&n.a.createElement("div",{className:"form-control"},n.a.createElement("label",{htmlFor:"searchBar"},"Search Cat Says"),n.a.createElement("input",{type:"text",id:"searchBar",name:"search",placeholder:"search for a cat saying ...",value:u||"",onChange:function(e){m(e.target.value)}}),n.a.createElement("div",{className:"btn-normal",onClick:function(){p(!v)}},"Search"),n.a.createElement("div",null,n.a.createElement("img",{className:"catsPicture",src:a,alt:""})),a&&n.a.createElement("input",{type:"text",value:_||"",readOnly:!0})),"tag"===E&&n.a.createElement(n.a.Fragment,null,n.a.createElement("ul",{className:"listCats"},P.map((function(e,t){return n.a.createElement("li",{key:t,className:"cat",name:e.value,onClick:function(t){return function(e){S(e.value),p(!v)}(e)}}," ",e.value)}))),n.a.createElement("div",null,n.a.createElement("img",{className:"catsPicture",src:a,alt:""}))),"category"===E&&I&&n.a.createElement(n.a.Fragment,null,n.a.createElement("ul",{className:"listCats"},I.map((function(e,t){return n.a.createElement("li",{key:t,className:"cat",onClick:function(t){return function(e){z(e.id),L(e.name),p(!v)}(e)}}," ",e.name)}))),n.a.createElement("h2",null,"Category :  ",B),n.a.createElement("div",{className:"catsCategory"},a&&n.a.createElement("div",{className:"btn-normal",onClick:function(){return p(!v)}}," Refresh"),a&&a.map((function(e,t){return n.a.createElement("img",{key:t,className:"catsPicture",src:e.url,alt:""})}))))))}a(83);var M=a(19),T=a.n(M),R=a(45),F=a.n(R),z=a(46),D=a.n(z),A=(a(84),a(85),a(16)),B=a.n(A),L=[{id:"1",url:T.a},{id:"2",url:F.a},{id:"3",url:D.a}],W=function(e){var t=e.msg,a=e.color,c={position:"fixed",right:"0",zIndex:"2000",width:"100%",margin:"auto",textAlign:"center",fontSize:"28px",fontFamily:"xants, sans-serif",color:"".concat(a)};return n.a.createElement("div",{className:"alertMsg",role:"alert",style:c},t)},Y=a(47),_=a.n(Y),V=a(48),H=a.n(V),q=(a(86),a(24)),J=a.n(q);function U(e){var t=Object(c.useState)(!1),a=Object(i.a)(t,2),r=a[0],o=a[1],l=Object(c.useState)(0),s=Object(i.a)(l,2),u=s[0],m=s[1],f=Object(c.useState)(1),d=Object(i.a)(f,2),v=d[0],p=d[1],g=Object(c.useState)(0),b=Object(i.a)(g,2),E=b[0],h=b[1],j=Object(c.useState)("yes"),y=Object(i.a)(j,2),O=y[0],N=y[1],x=Object(c.useState)(!1),S=Object(i.a)(x,2),w=S[0],k=S[1],C=Object(c.useState)(!1),P=Object(i.a)(C,2),I=P[0],M=P[1],T=Object(c.useState)(15),R=Object(i.a)(T,2),F=R[0],z=R[1],D=Object(c.useState)(0),A=Object(i.a)(D,2),Y=A[0],V=A[1],q=Object(c.useState)(!1),U=Object(i.a)(q,2),$=U[0],G=U[1],K=3-Y;Object(c.useEffect)((function(){u===v&&v===E&&E===u?(V(0),k(!0)):k(!1),console.log("lunch")}),[I]),Object(c.useEffect)((function(){if("yes"!==O){m(Math.floor(Math.random()*Math.floor(3))),p(Math.floor(Math.random()*Math.floor(3))),h(Math.floor(Math.random()*Math.floor(3))),V(Y+1)}}),[r]);var Q=function(){new Audio(J.a).play(),V(0),k(!1),o(!r),N("no"),M(!0),setTimeout((function(){M(!1)}),1e3)};return Object(c.useEffect)((function(){setTimeout((function(){M&&3===Y&&!w?(z(F-1),setTimeout((function(){new Audio(H.a).play()}),150)):w&&0===Y&&(z(F+1),setTimeout((function(){new Audio(_.a).play()}),10))}),1e3)}),[Y]),setTimeout((function(){G(!$)}),1e3),n.a.createElement("div",{className:"containCasino"},n.a.createElement("div",{className:"containTitleCasino"},n.a.createElement("span",{className:$?"casinoTitleRed":"casinoTitleYellow"},"Casino Cats")),n.a.createElement("h1",{style:{color:"white"}}),n.a.createElement("div",{className:"containerCatsImages"},"yes"===O&&n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:$?"catImageRed":"catImageYellow",style:{backgroundImage:"url(".concat(B.a,")"),backgroundPosition:"center",backgroundSize:"cover"}}),n.a.createElement("div",{className:$?"catImageRed":"catImageYellow",style:{backgroundImage:"url(".concat(B.a,")"),backgroundPosition:"center",backgroundSize:"cover"}}),n.a.createElement("div",{className:$?"catImageRed":"catImageYellow",style:{backgroundImage:"url(".concat(B.a,")"),backgroundPosition:"center",backgroundSize:"cover"}})),"no"===O&&n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:I?"imgcatload":"catImagePurple"},n.a.createElement("img",{className:I?"imgcatActive":"imgcat",src:"".concat(L[u].url)})),n.a.createElement("div",{className:I?"imgcatload":"catImagePurple"},n.a.createElement("img",{className:I?"imgcatActive":"imgcat",src:"".concat(L[v].url)})),n.a.createElement("div",{className:I?"imgcatload":"catImagePurple"},n.a.createElement("img",{className:I?"imgcatActive":"imgcat",src:"".concat(L[E].url)})))),!w&&!I&&Y<3&&!w&&n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"chances"}," Il vous reste ","".concat(K,K>0?" chances":" chance")," "),n.a.createElement("div",{className:"btn-casino",onClick:function(){return N("no"),M(!0),o(!r),new Audio(J.a).play(),void setTimeout((function(){M(!1)}),1e3)}},"TRY")),!I&&3===Y&&0!==F&&n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"btn-casino",onClick:function(){return Q()}},"Rejouer")),!I&&w&&n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"btn-casino",onClick:function(){return Q()}},"Rejouer")),!I&&!0===w&&n.a.createElement(W,{msg:"Super ! Vous avez gagn\xe9 votre nombre de jetons augmente de 1, il est donc de : ".concat(F),color:"green"}),!I&&3===Y&&!1===w&&0!==F&&n.a.createElement(W,{msg:" Dommage ! Vous avez perdu votre nombre de jetons est de : ".concat(F),color:"red"}),"yes"===O&&n.a.createElement(W,{msg:"Vous commencez avec un solde de ".concat(F," jetons  \n        chaque partie coute 1 jetons et dure 3 essais"),color:"red"}),0===F&&n.a.createElement(W,{msg:"Vous n'avez plus de credit, allez en page d'accueil voir des chats !",color:"red"}))}var $=Object(c.createContext)(),G=function(e){var t=Object(c.useState)(!1),a=Object(i.a)(t,2),r=a[0],o=a[1];return n.a.createElement($.Provider,{value:{setIsWin:o,isWin:r,changeWin:function(e){o(e)}}},e.children)};var K=function(){return n.a.createElement(g.a,{forceRefresh:!0},n.a.createElement(b,null),n.a.createElement(G,null,n.a.createElement("div",{className:"App"},n.a.createElement(k.c,null,n.a.createElement(k.a,{exact:!0,path:"/",component:S}),n.a.createElement(k.a,{exact:!0,path:"/infinityScroll",component:x}),n.a.createElement(k.a,{exact:!0,path:"/searchCat",component:I}),n.a.createElement(k.a,{exact:!0,path:"/casinoCats",component:U}),n.a.createElement(k.a,{exact:!0,path:"",component:w})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.9f896af9.chunk.js.map