(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[939],{4465:function(e,t,n){"use strict";n.d(t,{J:function(){return d}});var r="https://js.stripe.com/v3",c=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,i="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",s=null,o=function(e){return null!==s?s:s=new Promise((function(t,n){if("undefined"!==typeof window)if(window.Stripe&&e&&console.warn(i),window.Stripe)t(window.Stripe);else try{var s=function(){for(var e=document.querySelectorAll('script[src^="'.concat(r,'"]')),t=0;t<e.length;t++){var n=e[t];if(c.test(n.src))return n}return null}();s&&e?console.warn(i):s||(s=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(r).concat(t);var c=document.head||document.body;if(!c)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return c.appendChild(n),n}(e)),s.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),s.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(o){return void n(o)}else t(null)}))},a=function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.23.0",startTime:t})}(r,n),r},l=Promise.resolve().then((function(){return o(null)})),u=!1;l.catch((function(e){u||console.warn(e)}));var d=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];u=!0;var r=Date.now();return l.then((function(e){return a(e,t,r)}))}},9650:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pricing",function(){return n(9230)}])},8189:function(e,t,n){"use strict";var r=n(5893),c=n(7294);function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=o(e);if(t){var c=o(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return a(this,n)}}var f=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(a,e);var t,n,c,o=d(a);function a(){return i(this,a),o.apply(this,arguments)}return t=a,(n=[{key:"render",value:function(){return(0,r.jsx)("div",{className:"newsletter-area ptb-100",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row align-items-center justify-content-center",children:(0,r.jsx)("div",{className:"col-lg-5",children:(0,r.jsxs)("div",{className:"newsletter-wrap",children:[(0,r.jsx)("h2",{children:"Subscribe To Our Newsletter"}),(0,r.jsx)("div",{id:"mc_embed_signup",children:(0,r.jsx)("form",{action:"https://m2mtechconnect.us4.list-manage.com/subscribe?u=e5c23504a89d478fb8efcda11&id=6b54fe4b80",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",className:"newsletter-form",target:"_blank",noValidate:!0,children:(0,r.jsxs)("div",{id:"mc_embed_signup_scroll",children:[(0,r.jsx)("input",{type:"email",name:"EMAIL",className:"form-control",id:"mce-EMAIL",placeholder:"email address",required:!0}),(0,r.jsx)("div",{className:"bot-check","aria-hidden":"true",children:(0,r.jsx)("input",{type:"text",name:"b_1072e9e1e556107b226610563_3cc09e4f80",tabIndex:"-1"})}),(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"clear foot",children:(0,r.jsx)("input",{type:"submit",value:"Subscribe",name:"subscribe",id:"mc-embedded-subscribe",className:"default-btn border-0"})})})]})})})]})})})})})}}])&&s(t.prototype,n),c&&s(t,c),a}(c.Component);t.Z=f},3538:function(e,t,n){"use strict";var r=n(5893),c=n(7294),i=n(1664);function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return!t||"object"!==d(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=a(e);if(t){var c=a(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return l(this,n)}}var p=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(l,e);var t,n,c,a=f(l);function l(){return s(this,l),a.apply(this,arguments)}return t=l,(n=[{key:"render",value:function(){var e=this.props,t=e.pageTitle,n=e.homePageUrl,c=e.homePageText,s=e.activePageText;return(0,r.jsx)("div",{className:"page-title-area item-bg1",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"page-title-content",children:[(0,r.jsx)("h2",{children:t}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(i.default,{href:n,children:(0,r.jsx)("a",{children:c})})}),(0,r.jsx)("li",{children:s})]})]})})})}}])&&o(t.prototype,n),c&&o(t,c),l}(c.Component);t.Z=p},9230:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var r=n(5893),c=n(7294),i=n(8614),s=n(3538),o=n(8520),a=n.n(o),l=n(1664),u=n(4465),d=n(9669),f=n.n(d),p=n(1163);var h=function(){var e,t=(0,p.useRouter)().query.status,n=(0,c.useState)({name:"Basic",description:"Build Your Social Presence",quantity:1,price:99}),i=(n[0],n[1],(0,c.useState)({name:"Professional",description:"Sales Through Ecommerce Portal",quantity:1,price:199})),s=(i[0],i[1],(0,c.useState)({name:"Business",description:"Create & Build Your Audience",quantity:1,price:299})),o=(s[0],s[1],(0,c.useState)(!1)),d=(o[0],o[1]),h=(0,u.J)("pk_test_51KW7kGDp3tolhcXIOINNkHqcoxzVtebELxtFZjjDfWbhsIPe1ee8ZlAMSxCgrOEVIbxUuUKNQi8VHOCFLTXy4bUL00mNbeVYkt");e=a().mark((function e(t){var n,r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,h;case 3:return n=e.sent,e.next=6,f().post("/api/create-stripe-session",{item:t,page:"pricing"});case 6:return r=e.sent,e.next=9,n.redirectToCheckout({sessionId:r.data.id});case 9:(c=e.sent).error&&alert(c.error.message),d(!1);case 12:case"end":return e.stop()}}),e)}));return(0,r.jsx)("section",{className:"pricing-area pt-100 pb-70",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"section-title",children:[(0,r.jsx)("span",{children:"Pricing Table"}),(0,r.jsx)("h2",{children:"Choose Your Plan"})]}),(0,r.jsx)("div",{className:"tab_content",children:(0,r.jsxs)("div",{id:"tab1",className:"tabs_item",children:[t&&"success"===t&&(0,r.jsx)("div",{className:"p-2 payment-successful mb-4",children:"Payment Successful"}),t&&"cancel"===t&&(0,r.jsx)("div",{className:"p-2 payment-unsuccessful mb-4",children:"Payment Unsuccessful"}),(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,r.jsxs)("div",{className:"single-pricing",children:[(0,r.jsxs)("div",{className:"pricing-top-heading",children:[(0,r.jsx)("h3",{children:"Basic"}),(0,r.jsx)("p",{children:"Build Your Social Presence"})]}),(0,r.jsxs)("span",{children:["$99",(0,r.jsx)("sub",{children:"/m"})]}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("i",{className:"bx bx-check"}),"Social Media"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("i",{className:"bx bx-check"}),"Content Creation"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("i",{className:"bx bx-check"}),"Content Publishing"]})]}),(0,r.jsx)(l.default,{href:"/contact",children:(0,r.jsx)("a",{children:"Select Plan"})})]})}),(0,r.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,r.jsxs)("div",{className:"single-pricing",children:[(0,r.jsxs)("div",{className:"pricing-top-heading",children:[(0,r.jsx)("h3",{children:"Professional"}),(0,r.jsx)("p",{children:"Sales Through Ecommerce Portal"})]}),(0,r.jsxs)("span",{children:["$199",(0,r.jsx)("sub",{children:"/m"})]}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("i",{className:"bx bx-check"}),"Website Maintanence"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("i",{className:"bx bx-check"}),"eCommerce site updates"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("i",{className:"bx bx-check"}),"Social Media"]})]}),(0,r.jsx)(l.default,{href:"/contact",children:(0,r.jsx)("a",{children:"Select Plan"})})]})}),(0,r.jsx)("div",{className:"col-lg-4 col-md-6 offset-md-3 offset-lg-0",children:(0,r.jsxs)("div",{className:"single-pricing",children:[(0,r.jsxs)("div",{className:"pricing-top-heading",children:[(0,r.jsx)("h3",{children:"Business"}),(0,r.jsx)("p",{children:"Create & Build Your Audience"})]}),(0,r.jsxs)("span",{children:["$299 ",(0,r.jsx)("sub",{children:"/m"})]}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("i",{className:"bx bx-check"}),"Create Website"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("i",{className:"bx bx-check"}),"Create Apps"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("i",{className:"bx bx-check"}),"Social Media"]})]}),(0,r.jsx)(l.default,{href:"/contact",children:(0,r.jsx)("a",{children:"Select Plan"})})]})})]})]})})]})})},m=n(8348),b=n(8189);function x(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return!t||"object"!==w(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function _(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var c=v(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return y(this,n)}}var N=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(a,e);var t,n,c,o=_(a);function a(){return x(this,a),o.apply(this,arguments)}return t=a,(n=[{key:"render",value:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{}),(0,r.jsx)(s.Z,{pageTitle:"Pricing",homePageUrl:"/",homePageText:"Home",activePageText:"Pricing"}),(0,r.jsx)(h,{}),(0,r.jsx)(b.Z,{}),(0,r.jsx)(m.Z,{})]})}}])&&j(t.prototype,n),c&&j(t,c),a}(c.Component)}},function(e){e.O(0,[630,760,774,888,179],(function(){return t=9650,e(e.s=t);var t}));var t=e.O();_N_E=t}]);