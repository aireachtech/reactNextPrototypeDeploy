(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[898],{6064:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/terms-conditions",function(){return n(9218)}])},3538:function(e,t,n){"use strict";var r=n(5893),o=n(7294),i=n(1664);function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}var d=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(l,e);var t,n,o,s=p(l);function l(){return a(this,l),s.apply(this,arguments)}return t=l,(n=[{key:"render",value:function(){var e=this.props,t=e.pageTitle,n=e.homePageUrl,o=e.homePageText,a=e.activePageText;return(0,r.jsx)("div",{className:"page-title-area item-bg1",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"page-title-content",children:[(0,r.jsx)("h2",{children:t}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(i.default,{href:n,children:(0,r.jsx)("a",{children:o})})}),(0,r.jsx)("li",{children:a})]})]})})})}}])&&c(t.prototype,n),o&&c(t,o),l}(o.Component);t.Z=d},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){o=!0,i=s}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var o,i=(o=n(7294))&&o.__esModule?o:{default:o},a=n(6273),c=n(387),s=n(7190);var l={};function u(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=c.useRouter(),f=i.default.useMemo((function(){var t=r(a.resolveHref(o,e.href,!0),2),n=t[0],i=t[1];return{href:n,as:e.as?a.resolveHref(o,e.as):i||n}}),[o,e.href,e.as]),p=f.href,d=f.as,h=e.children,y=e.replace,v=e.shallow,b=e.scroll,m=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var g=(t=i.default.Children.only(h))&&"object"===typeof t&&t.ref,w=r(s.useIntersection({rootMargin:"200px"}),2),j=w[0],x=w[1],O=i.default.useCallback((function(e){j(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,j]);i.default.useEffect((function(){var e=x&&n&&a.isLocalURL(p),t="undefined"!==typeof m?m:o&&o.locale,r=l[p+"%"+d+(t?"%"+t:"")];e&&!r&&u(o,p,d,{locale:t})}),[d,p,x,m,n,o]);var E={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),t[o?"replace":"push"](n,r,{shallow:i,locale:s,scroll:c}))}(e,o,p,d,y,v,b,m)},onMouseEnter:function(e){a.isLocalURL(p)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(o,p,d,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var I="undefined"!==typeof m?m:o&&o.locale,_=o&&o.isLocaleDomain&&a.getDomainLocale(d,I,o&&o.locales,o&&o.domainLocales);E.href=_||a.addBasePath(a.addLocale(d,I,o&&o.defaultLocale))}return i.default.cloneElement(t,E)};t.default=f},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(s){o=!0,i=s}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,s=o.useRef(),l=r(o.useState(!1),2),u=l[0],f=l[1],p=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||u||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,u]);return o.useEffect((function(){if(!a&&!u){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[u]),[p,u]};var o=n(7294),i=n(9311),a="undefined"!==typeof IntersectionObserver;var c=new Map},9218:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=n(7294),i=n(8614),a=n(3538),c=n(8348);function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return!t||"object"!==d(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}var y=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(f,e);var t,n,o,u=h(f);function f(){return s(this,f),u.apply(this,arguments)}return t=f,(n=[{key:"render",value:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{}),(0,r.jsx)(a.Z,{pageTitle:"Terms & Conditions",homePageUrl:"/",homePageText:"Home",activePageText:"Terms & Conditions"}),(0,r.jsx)("div",{className:"text-container ptb-100",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("h3",{children:"PLEASE READ CAREFULLY. THIS IS A RELEASE OF LIABILITY."}),(0,r.jsx)("br",{}),(0,r.jsx)("h3",{children:"BY PARTICIPATING IN OUR WORKSHOPS, YOU UNDERSTAND AND AGREE TO THE FOLLOWING TERMS AND CONDITIONS:"}),(0,r.jsx)("p",{children:"I expressly assume all risks associated with my child(ren) participating in Tech Bytes Workshop including, without limitation, the risks associated with negligence by the participants leading to physical risk, injury or other serious consequences."}),(0,r.jsx)("p",{children:"I acknowledge that the organizers expect my child(ren) participating in Tech Bytes Workshop to conduct professionally. Participants need to be kind to others and not insult or put down fellow participants. Harassment, bullying, disrespectful attitude and other exclusionary behaviour are not acceptable by any students. Any such behaviour would be reported immediately to parents and those students may have to leave the workshop."}),(0,r.jsx)("p",{children:"I represent that I am the parent and/or legal guardian of such child(ren), and that the child(ren) is/are in good health and there are no special physical problems associated with the care of the child(ren), unless a caretaker will be present to administer to the child(ren)\u2019s needs, as noted."}),(0,r.jsx)("p",{children:"I recognize that I am fully responsible for my child(ren) participating in Tech Bytes Workshop for: (i) the online browsing and conduct of such child(ren) and Tech Bytes team has no control and will not be responsible for the contents (including inappropriate contents) which participants search online. (ii) the consequences of any misuse by the minor including but not limited to causing intentional damages to the hardware devices like computer."}),(0,r.jsx)("p",{children:"This Release of Liability supersedes any other agreements or representations by or between the parties and is governed by the Laws of British Columbia and Canada and is intended to be interpreted as broadly as possible. If any part of this agreement is found to be unenforceable, all other parts shall be given full force and effect."}),(0,r.jsx)("p",{children:"I have carefully read this release of liability and fully understand its contents. I represent that I am at least 18 years of age. I am aware that this is a release of a liability and I accept its terms and conditions of my own free will."})]})}),(0,r.jsx)(c.Z,{})]})}}])&&l(t.prototype,n),o&&l(t,o),f}(o.Component);t.default=y},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)}},function(e){e.O(0,[760,774,888,179],(function(){return t=6064,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
