(this["webpackJsonpauth-google"]=this["webpackJsonpauth-google"]||[]).push([[0],{24:function(e,t,a){},26:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(18),r=a.n(n),o=(a(24),a(5)),l=a.n(o),i=a(19),d=a(9),u=a(3),j=a.p+"static/media/logo.fbeef7d5.png",b=(a(26),a(6)),m=a.n(b),h=a(0),p=new URL(window.location);m.a.defaults.baseURL="localhost"===p.hostname?"http://192.168.0.7:3000/dev":"https://mkcr9bfn2i.execute-api.sa-east-1.amazonaws.com/dev";var O=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),r=Object(u.a)(n,2),o=r[0],b=r[1],p=Object(c.useState)(!1),O=Object(u.a)(p,2),g=O[0],x=O[1],v=Object(c.useState)(!1),f=Object(u.a)(v,2),N=f[0],w=f[1],k=Object(c.useState)(null),S=Object(u.a)(k,2),y=(S[0],S[1]),C=Object(c.useState)(null),_=Object(u.a)(C,2),E=(_[0],_[1]),q=Object(c.useState)({}),F=Object(u.a)(q,2),B=F[0],L=F[1],I=Object(c.useState)([]),P=Object(u.a)(I,2),R=P[0],A=P[1],G=Object(c.useState)(null),U=Object(u.a)(G,2),z=U[0],J=U[1],T=function(){var e=Object(d.a)(l.a.mark((function e(t){var c,s,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,""!==a){e.next=4;break}return alert("Email obritgat\xf3rio"),e.abrupt("return");case 4:if(""!==o){e.next=7;break}return alert("Senha obrigat\xf3ria"),e.abrupt("return");case 7:return x(!0),e.next=10,m.a.post("auth/login",{email:a,senha:o});case 10:return c=e.sent,s=c.data.data,e.next=14,m.a.get("home?owner=".concat(s.user._id));case 14:n=e.sent,console.log(n.data.data),A(Object(i.a)(n.data.data)),y(s.token),L(s.user),w(!0),x(!1),e.next=28;break;case 23:e.prev=23,e.t0=e.catch(0),x(!1),e.t0.response?alert(e.t0.response.data.message):alert(e.t0.message),console.log(e.t0.response);case 28:case"end":return e.stop()}}),e,null,[[0,23]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"bluedevx"===(t=new URLSearchParams(window.location.search)).get("client_id")){e.next=5;break}return alert("Integra\xe7\xe3o incorreta"),e.abrupt("return");case 5:if(z){e.next=8;break}return alert("Selecione uma casa!"),e.abrupt("return");case 8:return x(!0),B.homeId=z,e.next=12,m.a.post("auth/google-assistant",{homeAccount:B,grant_type:"generate_code"});case 12:a=e.sent,c=a.data,window.location.replace("".concat(t.get("redirect_uri"),"?code=").concat(c.code,"&state=").concat(t.get("state"))),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(0),x(!1),e.t0.response?(alert.apply(e.t0.response.message),console.log(e.t0.response)):(alert(e.t0.message),console.log(e.t0));case 21:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){}),[]),Object(h.jsxs)("div",{className:"form",children:[g&&Object(h.jsx)("div",{className:"loading",children:Object(h.jsx)("div",{className:"loading-rotulo text-white",children:Object(h.jsx)("div",{className:"load-wrapp",children:Object(h.jsxs)("div",{className:"load-2",children:[Object(h.jsx)("p",{children:"Processando"}),Object(h.jsx)("div",{className:"line"}),Object(h.jsx)("div",{className:"line"}),Object(h.jsx)("div",{className:"line"})]})})})}),N&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("header",{className:"form-header",children:[Object(h.jsx)("img",{src:j,width:"70",className:"form-logo",alt:"logo"}),Object(h.jsxs)("p",{className:"pt-3",children:["Conectando Bluedevx ",Object(h.jsx)("br",{}),"com Google"]})]}),Object(h.jsxs)("div",{className:"form-body",children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Escolha a casa que deve ser vinculada"}),Object(h.jsxs)("select",{className:"form-control",onChange:function(e){console.log(e.target.value),J(e.target.value)},children:[Object(h.jsx)("option",{value:"",children:"==Selecione na lista=="}),0!==R.length&&R.map((function(e){return Object(h.jsx)("option",{value:e._id,children:e.nome},e._id)}))]})]}),Object(h.jsx)("p",{children:"O Google solicita acesso \xe0 sua conta na Bluedevx e ao mapa de dispositivos que voc\xea possui. Assim voc\xea ter\xe1 a possibilidade de acess\xe1-los atrav\xe9s dos comandos de voz e outros recursos."}),Object(h.jsx)("div",{className:"my-4 text-small",children:Object(h.jsxs)("p",{children:["Revise as ",Object(h.jsx)("a",{target:"_blank",href:"http://policies.google.com/",children:"pol\xedticas de privacidade do Google"}),". ",Object(h.jsx)("br",{}),"Se voc\xea deseja desvincular sua conta, ",Object(h.jsx)("a",{target:"_blank",href:"https://myaccount.google.com/",children:"clique aqui"}),"."]})}),Object(h.jsxs)("div",{className:"form-group d-flex flex-row justify-content-between",children:[Object(h.jsx)("button",{className:"btn btn-light",onClick:function(){L(null),w(!1),E(null),y(null),s(""),b("")},children:"Cancelar"}),Object(h.jsx)("button",{className:"btn btn-success",onClick:D,children:"Aceitar e conectar"})]})]})]}),!N&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("header",{className:"form-header text-center",children:[Object(h.jsx)("img",{src:j,width:"70",className:"form-logo",alt:"logo"}),Object(h.jsxs)("p",{className:"p-10",children:["Entre com sua ",Object(h.jsx)("br",{}),"conta Bluedevx"]})]}),Object(h.jsxs)("div",{className:"form-body",children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{className:"label",children:"E-mail de Cadastro"}),Object(h.jsx)("input",{className:"form-control",value:a,onChange:function(e){s(e.target.value)},name:"email",type:"email",required:!0,placeholder:"E-mail"})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{className:"label",children:"Senha"}),Object(h.jsx)("input",{className:"form-control",value:o,onChange:function(e){b(e.target.value)},type:"password",name:"senha",required:!0,placeholder:"**********"})]}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("button",{className:"btn btn-theme",onClick:T,children:"Entrar"})})]})]})]})},g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,47)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),g()}},[[46,1,2]]]);
//# sourceMappingURL=main.1d0e6b5b.chunk.js.map