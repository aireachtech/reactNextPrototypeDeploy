(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38],{4320:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/team",function(){return n(7737)}])},3538:function(e,t,n){"use strict";var a=n(5893),r=n(7294),l=n(1664);function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return o(this,n)}}var h=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(o,e);var t,n,r,c=f(o);function o(){return s(this,o),c.apply(this,arguments)}return t=o,(n=[{key:"render",value:function(){var e=this.props,t=e.pageTitle,n=e.homePageUrl,r=e.homePageText,s=e.activePageText;return(0,a.jsx)("div",{className:"page-title-area item-bg1",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"page-title-content",children:[(0,a.jsx)("h2",{children:t}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(l.default,{href:n,children:(0,a.jsx)("a",{children:r})})}),(0,a.jsx)("li",{children:s})]})]})})})}}])&&i(t.prototype,n),r&&i(t,r),o}(r.Component);t.Z=h},8418:function(e,t,n){"use strict";function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,l=void 0;try{for(var s,i=e[Symbol.iterator]();!(a=(s=i.next()).done)&&(n.push(s.value),!t||n.length!==t);a=!0);}catch(c){r=!0,l=c}finally{try{a||null==i.return||i.return()}finally{if(r)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var r,l=(r=n(7294))&&r.__esModule?r:{default:r},s=n(6273),i=n(387),c=n(7190);var o={};function d(e,t,n,a){if(e&&s.isLocalURL(t)){e.prefetch(t,n,a).catch((function(e){0}));var r=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;o[t+"%"+n+(r?"%"+r:"")]=!0}}var u=function(e){var t,n=!1!==e.prefetch,r=i.useRouter(),u=l.default.useMemo((function(){var t=a(s.resolveHref(r,e.href,!0),2),n=t[0],l=t[1];return{href:n,as:e.as?s.resolveHref(r,e.as):l||n}}),[r,e.href,e.as]),f=u.href,h=u.as,x=e.children,m=e.replace,j=e.shallow,p=e.scroll,g=e.locale;"string"===typeof x&&(x=l.default.createElement("a",null,x));var b=(t=l.default.Children.only(x))&&"object"===typeof t&&t.ref,v=a(c.useIntersection({rootMargin:"200px"}),2),y=v[0],N=v[1],k=l.default.useCallback((function(e){y(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,y]);l.default.useEffect((function(){var e=N&&n&&s.isLocalURL(f),t="undefined"!==typeof g?g:r&&r.locale,a=o[f+"%"+h+(t?"%"+t:"")];e&&!a&&d(r,f,h,{locale:t})}),[h,f,N,g,n,r]);var _={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,a,r,l,i,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(n))&&(e.preventDefault(),null==i&&a.indexOf("#")>=0&&(i=!1),t[r?"replace":"push"](n,a,{shallow:l,locale:c,scroll:i}))}(e,r,f,h,m,j,p,g)},onMouseEnter:function(e){s.isLocalURL(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),d(r,f,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var w="undefined"!==typeof g?g:r&&r.locale,O=r&&r.isLocaleDomain&&s.getDomainLocale(h,w,r&&r.locales,r&&r.domainLocales);_.href=O||s.addBasePath(s.addLocale(h,w,r&&r.defaultLocale))}return l.default.cloneElement(t,_)};t.default=u},7190:function(e,t,n){"use strict";function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,l=void 0;try{for(var s,i=e[Symbol.iterator]();!(a=(s=i.next()).done)&&(n.push(s.value),!t||n.length!==t);a=!0);}catch(c){r=!0,l=c}finally{try{a||null==i.return||i.return()}finally{if(r)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,c=r.useRef(),o=a(r.useState(!1),2),d=o[0],u=o[1],f=r.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||d||e&&e.tagName&&(c.current=function(e,t,n){var a=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var a=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:r,elements:a}),n}(n),r=a.id,l=a.observer,s=a.elements;return s.set(e,t),l.observe(e),function(){s.delete(e),l.unobserve(e),0===s.size&&(l.disconnect(),i.delete(r))}}(e,(function(e){return e&&u(e)}),{rootMargin:t}))}),[n,t,d]);return r.useEffect((function(){if(!s&&!d){var e=l.requestIdleCallback((function(){return u(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[d]),[f,d]};var r=n(7294),l=n(9311),s="undefined"!==typeof IntersectionObserver;var i=new Map},7737:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var a=n(5893),r=n(7294),l=n(8614),s=n(3538),i=n(1664);function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return!t||"object"!==h(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=d(e);if(t){var r=d(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return u(this,n)}}var m=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(s,e);var t,n,r,l=x(s);function s(){return c(this,s),l.apply(this,arguments)}return t=s,(n=[{key:"render",value:function(){return(0,a.jsx)("section",{className:"team-area ptb-100",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,a.jsxs)("div",{className:"single-team active",children:[(0,a.jsxs)("div",{className:"team-single-img",children:[(0,a.jsx)("img",{src:"/reactNextPrototypeDeploy/images/team/team1.png",alt:"Image"}),(0,a.jsx)("div",{className:"team-img",children:(0,a.jsx)("img",{src:"/reactNextPrototypeDeploy/images/team/team-shape.png",alt:"Image"})})]}),(0,a.jsxs)("div",{className:"team-content",children:[(0,a.jsx)("h3",{children:"Karen Peter"}),(0,a.jsx)("span",{children:"CEO"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/team/#",children:(0,a.jsx)("a",{target:"_blank",children:(0,a.jsx)("i",{className:"bx bxl-facebook"})})})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/team/#",children:(0,a.jsx)("a",{target:"_blank",children:(0,a.jsx)("i",{className:"bx bxl-twitter"})})})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/team/#",children:(0,a.jsx)("a",{target:"_blank",children:(0,a.jsx)("i",{className:"bx bxl-linkedin"})})})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/team/#",children:(0,a.jsx)("a",{target:"_blank",children:(0,a.jsx)("i",{className:"bx bxl-pinterest-alt"})})})})]})]})]})}),(0,a.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,a.jsxs)("div",{className:"single-team active",children:[(0,a.jsxs)("div",{className:"team-single-img",children:[(0,a.jsx)("img",{src:"/reactNextPrototypeDeploy/images/team/team2.png",alt:"Image"}),(0,a.jsx)("div",{className:"team-img",children:(0,a.jsx)("img",{src:"/reactNextPrototypeDeploy/images/team/team-shape.png",alt:"Image"})})]}),(0,a.jsxs)("div",{className:"team-content",children:[(0,a.jsx)("h3",{children:"Kene Alex Piter"}),(0,a.jsx)("span",{children:"Executive"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/team/#",children:(0,a.jsx)("a",{target:"_blank",children:(0,a.jsx)("i",{className:"bx bxl-facebook"})})})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/team/#",children:(0,a.jsx)("a",{target:"_blank",children:(0,a.jsx)("i",{className:"bx bxl-twitter"})})})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/team/#",children:(0,a.jsx)("a",{target:"_blank",children:(0,a.jsx)("i",{className:"bx bxl-linkedin"})})})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/team/#",children:(0,a.jsx)("a",{target:"_blank",children:(0,a.jsx)("i",{className:"bx bxl-pinterest-alt"})})})})]})]})]})}),(0,a.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,a.jsxs)("div",{className:"single-team active",children:[(0,a.jsxs)("div",{className:"team-single-img",children:[(0,a.jsx)("img",{src:"/reactNextPrototypeDeploy/images/team/team3.png",alt:"Image"}),(0,a.jsx)("div",{className:"team-img",children:(0,a.jsx)("img",{src:"/reactNextPrototypeDeploy/images/team/team-shape.png",alt:"Image"})})]}),(0,a.jsxs)("div",{className:"team-content",children:[(0,a.jsx)("h3",{children:"Alisa Maria"}),(0,a.jsx)("span",{children:"Developer"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/team/#",children:(0,a.jsx)("a",{target:"_blank",children:(0,a.jsx)("i",{className:"bx bxl-facebook"})})})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/team/#",children:(0,a.jsx)("a",{target:"_blank",children:(0,a.jsx)("i",{className:"bx bxl-twitter"})})})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/team/#",children:(0,a.jsx)("a",{target:"_blank",children:(0,a.jsx)("i",{className:"bx bxl-linkedin"})})})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/team/#",children:(0,a.jsx)("a",{target:"_blank",children:(0,a.jsx)("i",{className:"bx bxl-pinterest-alt"})})})})]})]})]})}),(0,a.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,a.jsxs)("div",{className:"single-team active",children:[(0,a.jsxs)("div",{className:"team-single-img",children:[(0,a.jsx)("img",{src:"/reactNextPrototypeDeploy/images/team/team4.png",alt:"Image"}),(0,a.jsx)("div",{className:"team-img",children:(0,a.jsx)("img",{src:"/reactNextPrototypeDeploy/images/team/team-shape.png",alt:"Image"})})]}),(0,a.jsxs)("div",{className:"team-content",children:[(0,a.jsx)("h3",{children:"Peter Jack"}),(0,a.jsx)("span",{children:"UI/UX Designer"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/team/#",children:(0,a.jsx)("a",{target:"_blank",children:(0,a.jsx)("i",{className:"bx bxl-facebook"})})})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/team/#",children:(0,a.jsx)("a",{target:"_blank",children:(0,a.jsx)("i",{className:"bx bxl-twitter"})})})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/team/#",children:(0,a.jsx)("a",{target:"_blank",children:(0,a.jsx)("i",{className:"bx bxl-linkedin"})})})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/team/#",children:(0,a.jsx)("a",{target:"_blank",children:(0,a.jsx)("i",{className:"bx bxl-pinterest-alt"})})})})]})]})]})}),(0,a.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,a.jsxs)("div",{className:"single-team active",children:[(0,a.jsxs)("div",{className:"team-single-img",children:[(0,a.jsx)("img",{src:"/reactNextPrototypeDeploy/images/team/team5.png",alt:"Image"}),(0,a.jsx)("div",{className:"team-img",children:(0,a.jsx)("img",{src:"/reactNextPrototypeDeploy/images/team/team-shape.png",alt:"Image"})})]}),(0,a.jsxs)("div",{className:"team-content",children:[(0,a.jsx)("h3",{children:"Anna Dew"}),(0,a.jsx)("span",{children:"React Developer"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/team/#",children:(0,a.jsx)("a",{target:"_blank",children:(0,a.jsx)("i",{className:"bx bxl-facebook"})})})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/team/#",children:(0,a.jsx)("a",{target:"_blank",children:(0,a.jsx)("i",{className:"bx bxl-twitter"})})})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/team/#",children:(0,a.jsx)("a",{target:"_blank",children:(0,a.jsx)("i",{className:"bx bxl-linkedin"})})})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/team/#",children:(0,a.jsx)("a",{target:"_blank",children:(0,a.jsx)("i",{className:"bx bxl-pinterest-alt"})})})})]})]})]})}),(0,a.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,a.jsxs)("div",{className:"single-team active",children:[(0,a.jsxs)("div",{className:"team-single-img",children:[(0,a.jsx)("img",{src:"/reactNextPrototypeDeploy/images/team/team6.png",alt:"Image"}),(0,a.jsx)("div",{className:"team-img",children:(0,a.jsx)("img",{src:"/reactNextPrototypeDeploy/images/team/team-shape.png",alt:"Image"})})]}),(0,a.jsxs)("div",{className:"team-content",children:[(0,a.jsx)("h3",{children:"Zeck Keath"}),(0,a.jsx)("span",{children:"Angular Developer"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/team/#",children:(0,a.jsx)("a",{target:"_blank",children:(0,a.jsx)("i",{className:"bx bxl-facebook"})})})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/team/#",children:(0,a.jsx)("a",{target:"_blank",children:(0,a.jsx)("i",{className:"bx bxl-twitter"})})})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/team/#",children:(0,a.jsx)("a",{target:"_blank",children:(0,a.jsx)("i",{className:"bx bxl-linkedin"})})})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/team/#",children:(0,a.jsx)("a",{target:"_blank",children:(0,a.jsx)("i",{className:"bx bxl-pinterest-alt"})})})})]})]})]})}),(0,a.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,a.jsxs)("div",{className:"single-team active",children:[(0,a.jsxs)("div",{className:"team-single-img",children:[(0,a.jsx)("img",{src:"/reactNextPrototypeDeploy/images/team/team7.png",alt:"Image"}),(0,a.jsx)("div",{className:"team-img",children:(0,a.jsx)("img",{src:"/reactNextPrototypeDeploy/images/team/team-shape.png",alt:"Image"})})]}),(0,a.jsxs)("div",{className:"team-content",children:[(0,a.jsx)("h3",{children:"Zeet Pew"}),(0,a.jsx)("span",{children:"Wed Developer"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/team/#",children:(0,a.jsx)("a",{target:"_blank",children:(0,a.jsx)("i",{className:"bx bxl-facebook"})})})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/team/#",children:(0,a.jsx)("a",{target:"_blank",children:(0,a.jsx)("i",{className:"bx bxl-twitter"})})})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/team/#",children:(0,a.jsx)("a",{target:"_blank",children:(0,a.jsx)("i",{className:"bx bxl-linkedin"})})})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/team/#",children:(0,a.jsx)("a",{target:"_blank",children:(0,a.jsx)("i",{className:"bx bxl-pinterest-alt"})})})})]})]})]})}),(0,a.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,a.jsxs)("div",{className:"single-team active",children:[(0,a.jsxs)("div",{className:"team-single-img",children:[(0,a.jsx)("img",{src:"/reactNextPrototypeDeploy/images/team/team8.png",alt:"Image"}),(0,a.jsx)("div",{className:"team-img",children:(0,a.jsx)("img",{src:"/reactNextPrototypeDeploy/images/team/team-shape.png",alt:"Image"})})]}),(0,a.jsxs)("div",{className:"team-content",children:[(0,a.jsx)("h3",{children:"Peter Jack"}),(0,a.jsx)("span",{children:"Web Developer"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/team/#",children:(0,a.jsx)("a",{target:"_blank",children:(0,a.jsx)("i",{className:"bx bxl-facebook"})})})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/team/#",children:(0,a.jsx)("a",{target:"_blank",children:(0,a.jsx)("i",{className:"bx bxl-twitter"})})})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/team/#",children:(0,a.jsx)("a",{target:"_blank",children:(0,a.jsx)("i",{className:"bx bxl-linkedin"})})})}),(0,a.jsx)("li",{children:(0,a.jsx)(i.default,{href:"/team/#",children:(0,a.jsx)("a",{target:"_blank",children:(0,a.jsx)("i",{className:"bx bxl-pinterest-alt"})})})})]})]})]})}),(0,a.jsx)("div",{className:"col-lg-12",children:(0,a.jsx)("div",{className:"page-navigation-area",children:(0,a.jsx)("nav",{"aria-label":"Page navigation example text-center",children:(0,a.jsxs)("ul",{className:"pagination",children:[(0,a.jsx)("li",{className:"page-item",children:(0,a.jsx)(i.default,{href:"/team/#",children:(0,a.jsx)("a",{className:"page-link page-links",children:(0,a.jsx)("i",{className:"bx bx-chevrons-left"})})})}),(0,a.jsx)("li",{className:"page-item active",children:(0,a.jsx)(i.default,{href:"/team/#",children:(0,a.jsx)("a",{className:"page-link",children:"1"})})}),(0,a.jsx)("li",{className:"page-item",children:(0,a.jsx)(i.default,{href:"/team/#",children:(0,a.jsx)("a",{className:"page-link",children:"2"})})}),(0,a.jsx)("li",{className:"page-item",children:(0,a.jsx)(i.default,{href:"/team/#",children:(0,a.jsx)("a",{className:"page-link",children:"3"})})}),(0,a.jsx)("li",{className:"page-item",children:(0,a.jsx)(i.default,{href:"/team/#",children:(0,a.jsx)("a",{className:"page-link",children:(0,a.jsx)("i",{className:"bx bx-chevrons-right"})})})})]})})})})]})})})}}])&&o(t.prototype,n),r&&o(t,r),s}(r.Component),j=n(8348);function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return!t||"object"!==N(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var N=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=b(e);if(t){var r=b(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return v(this,n)}}var _=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(c,e);var t,n,r,i=k(c);function c(){return p(this,c),i.apply(this,arguments)}return t=c,(n=[{key:"render",value:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Z,{}),(0,a.jsx)(s.Z,{pageTitle:"Team",homePageUrl:"/",homePageText:"Home",activePageText:"Team"}),(0,a.jsx)(m,{}),(0,a.jsx)(j.Z,{})]})}}])&&g(t.prototype,n),r&&g(t,r),c}(r.Component)},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)}},function(e){e.O(0,[760,774,888,179],(function(){return t=4320,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
