(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"++Bh":function(e,t,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,"a",(function(){return r}))},"20a2":function(e,t,n){e.exports=n("nOHt")},"6FTQ":function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return y}));var r=n("q1tI"),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=r,y=f["".concat(a,".").concat(d)]||f[d]||p[d]||i;return n?o.a.createElement(y,c(c({ref:t},s),{},{components:n})):o.a.createElement(y,c({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"===typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},"8rE2":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("6FTQ");function o(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},GOET:function(e,t,n){"use strict";var r=n("wx14"),o=n("Ff2n"),i=n("q1tI"),a=n.n(i),c=n("17x9"),l=n.n(c),s=n("ODXe"),u=n("i8i4"),f=n.n(u),p=n("ZCDs"),d=n("uIN+"),y=n("mXvl");var b=a.a.memo(a.a.forwardRef((function(e,t){var n=e.children,r=e.activate,o=void 0===r||r,c=e.container,l=Object(i.useState)(null),u=Object(s.a)(l,2),b=u[0],h=u[1],v=Object(p.a)(a.a.isValidElement(n)?n.ref:null,t);return Object(d.a)((function(){o&&h(function(e){var t="function"===typeof e?e():e;return f.a.findDOMNode(t)}(c)||document.body)}),[c,o]),Object(d.a)((function(){if(b&&o)return Object(y.a)(t,b),function(){Object(y.a)(t,null)}}),[t,b,o]),o?b?f.a.createPortal(n,b):b:a.a.isValidElement(n)?a.a.cloneElement(n,{ref:v}):n})));b.displayName="Portal",b.propTypes={children:l.a.node,container:l.a.oneOfType([function(e,t,n,r,o){return null},l.a.instanceOf(a.a.Component),l.a.func]),activate:l.a.bool};var h=b,v=n("eZlZ"),m="PortalDestination",O=Object(v.a)({root:{position:"absolute",top:0,left:0,width:"100%"}},{name:"Sonnat".concat(m)}),g=a.a.memo(a.a.forwardRef((function(e,t){var n=e.children,i=Object(o.a)(e,["children"]),c=O();return a.a.createElement(h,null,a.a.createElement("div",Object(r.a)({ref:t,className:c.root,role:"presentation"},i),n))})));g.displayName=m,g.propTypes={children:l.a.node};t.a=g},ODXe:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("BsWD");function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){o=!0,i=l}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},Pgy6:function(e,t,n){"use strict";var r=n("rfF1").Collapse,o=n("Tc0e").UnmountClosed;e.exports=o,o.Collapse=r,o.UnmountClosed=o},QvOC:function(e,t,n){"use strict";n.d(t,"a",(function(){return A}));var r=n("nKUr"),o=n("eZlZ"),i=n("TSYQ"),a=n.n(i),c=n("q1tI"),l=n("Mdm+"),s=n("cpVT"),u=n("dhJC"),f=n("YFqc"),p=n.n(f),d=n("20a2");function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=function(e){var t,n=e.children,o=e.href,i=e.onActive,l=e.activeClassName,f=void 0===l?"active":l,y=Object(u.a)(e,["children","href","onActive","activeClassName"]),h=c.Children.only(n),v=Object(d.useRouter)(),m=c.useMemo((function(){return v.pathname===o}),[o,v.pathname]);return c.useEffect((function(){m&&i&&i()}),[m,i]),Object(r.jsx)(p.a,b(b({href:o},y),{},{children:c.cloneElement(h,{className:a()(null===(t=h.props)||void 0===t?void 0:t.className,Object(s.a)({},f,m))})}))};function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=c.memo((function(e){var t=e.className,n=e.children,o=Object(u.a)(e,["className","children"]);return Object(r.jsx)("div",m(m({className:t},o),{},{children:n}))}));O.displayName="CollapsableContent";var g=O,j=c.createContext({isExpanded:!1,setExpanded:null});function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=function(e){var t=e.children,n=Object(u.a)(e,["children"]),o=c.useContext(j).setExpanded,i=c.useCallback((function(){null===o||void 0===o||o(!0)}),[]);return Object(r.jsx)(h,x(x({onActive:i},n),{},{children:t}))},P=n("xvhg"),S=n("Pgy6"),R="CollapsableNavItem",E=Object(o.a)({root:{width:"100%"},collapseWrapper:{transition:"height 360ms ease"},collapseContainer:{}},{name:R}),T=c.memo((function(e){var t=e.trigger,n=e.content,o=e.isExpanded,i=void 0!==o&&o,a=E(),l=c.useState(!i),s=Object(P.a)(l,2),u=s[0],f=s[1],p=c.useContext(j).setExpanded,d={onClick:c.useCallback((function(){f((function(e){return!e}))}),[]),active:!u},y=c.cloneElement(t,d),b=c.useMemo((function(){return{isExpanded:!u,setExpanded:function(e){f(!e),p&&p(e)}}}),[u,p]);return Object(r.jsx)("div",{className:a.root,children:Object(r.jsxs)(j.Provider,{value:b,children:[y,Object(r.jsx)(S.Collapse,{theme:{collapse:a.collapseWrapper,content:a.collapseContainer},isOpened:!u,children:n})]})})}));T.displayName=R;var k=T,D="CollapsableTrigger",N=Object(o.a)((function(e){return{root:{},title:{color:e.colors.text.secondary,transition:"color 360ms ease","&:hover":{color:e.colors.text.primary}},divider:{width:1,height:"calc(100% - ".concat(e.typography.pxToRem(24),")"),marginRight:e.typography.pxToRem(10),marginLeft:e.typography.pxToRem(8),backgroundColor:e.colors.divider},active:{"& $title":{color:e.colors.text.primary,fontWeight:e.typography.fontWeight.medium}}}}),{name:D}),I=c.memo((function(e){var t=e.className,n=e.title,o=e.onClick,i=e.active,c=void 0!==i&&i,u=N();return Object(r.jsx)("div",{role:"button",className:a()(u.root,t,Object(s.a)({},u.active,c)),onClick:o,children:Object(r.jsx)(l.a,{title:n,variant:"bodyText",size:"small",className:u.title,children:n})})}));I.displayName=D;var _=I,F={byChild:{Installation:{label:"Installation",href:"/docs/installation"},Components:{label:"Components",byChild:{Actions:{label:"Actions",byChild:{Button:{label:"Button",href:"/docs/components/Button"}},children:["Button"]},Display:{label:"Display",byChild:{Badge:{label:"Badge",href:"/docs/components/Badge"},Chip:{label:"Chip",href:"/docs/components/Chip"},Divider:{label:"Divider",href:"/docs/components/Divider"},Tooltip:{label:"Tooltip",href:"/docs/components/Tooltip"},Tag:{label:"Tag",href:"/docs/components/Tag"}},children:["Badge","Chip","Divider","Tooltip","Tag"]},Other:{label:"Other",byChild:{CssBaseline:{label:"CssBaseline",href:"/docs/components/CssBaseline"}},children:["CssBaseline"]}},children:["Actions","Controls","Display","Layout","Surface","Feedback","Navigation","Other"]},Theming:{label:"Theming",href:"/docs/theming"},Styling:{label:"Styling",href:"/docs/styling"},"Server-side Rendering":{label:"Server-side Rendering",href:"/docs/serverside-rendering"}},children:["Installation","Server-side Rendering","Components","Theming","Styling"]},H=Object(o.a)((function(e){var t=e.colors,n=e.darkMode,r=e.typography,o=r.pxToRem,i=r.fontWeight;return{root:{height:"calc(100% - ".concat(o(48),")"),paddingRight:o(16),paddingTop:o(16),paddingBottom:o(16),overflowX:"hidden",overflowY:"auto"},navigationList:{position:"relative",margin:0,padding:0,listStyle:"none","& $navigationList":{paddingLeft:o(32),"& $navigationList":{paddingLeft:o(16),"&:before":{left:o(16),position:"absolute",top:o(8),bottom:o(8),content:'""',backgroundColor:t.divider,width:o(1)}}}},navigationItem:{display:"flex",flexDirection:"column",alignItems:"flex-start","& $navigationItem":{position:"relative","& $navigationItem":{flexDirection:"row",alignItems:"center","& > $navigationItemLink":{height:o(32),"&:before":{content:'""',position:"absolute",left:0,backgroundColor:t.transparent,width:o(1),height:o(24),transition:"background-color 360ms ease"}},"& > $navigationItemLink$active:before":{backgroundColor:n?t.primary.light:t.primary.origin}}}},navigationItemLink:{paddingLeft:o(8),position:"relative",height:o(40),display:"inline-flex",alignItems:"center",cursor:"pointer",color:t.text.secondary,transition:"color 360ms ease, font-weight 360ms ease","&$active":{color:n?t.primary.light:t.primary.origin,fontWeight:i.medium},"&:not($active):hover":{color:t.text.primary}},active:{}}}),{name:"Nav"}),A=function(e){var t=H(),n=function e(t,n){var o,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return t.children&&t.children.length>0&&(o=t.children.map((function(o,a){var c=t.byChild[o],s="".concat(o,"/").concat(a);if(c)return!c.children||0===c.children.length?0===i?Object(r.jsx)("li",{className:n.navigationItem,children:Object(r.jsx)(h,{href:c.href,activeClassName:n.active,passHref:!0,children:Object(r.jsx)(l.a,{title:c.label,rootNode:"a",variant:"bodyText",size:"small",className:n.navigationItemLink,children:c.label})})},s):Object(r.jsx)("li",{className:n.navigationItem,children:Object(r.jsx)(C,{href:c.href,activeClassName:n.active,passHref:!0,children:Object(r.jsx)(l.a,{title:c.label,rootNode:"a",variant:1===i?"bodyText":"captionText",size:1===i?"small":"large",className:n.navigationItemLink,children:c.label})})},s):Object(r.jsx)("li",{className:n.navigationItem,children:Object(r.jsx)(k,{trigger:Object(r.jsx)(_,{title:c.label,className:n.navigationItemLink}),content:Object(r.jsx)(g,{children:Object(r.jsx)("ul",{className:n.navigationList,children:e(c,n,i+1)})})})},s)}))),o},o=c.useMemo((function(){return n(Object.freeze(F),t)}),[t]);return Object(r.jsx)("nav",{className:a()(t.root,e),children:Object(r.jsx)("ul",{className:t.navigationList,children:o})})}},"T/aA":function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return r}))},Tc0e:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UnmountClosed=void 0;var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("rfF1");function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(l,e);var t,n,r,a=d(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),v(b(t=a.call(this,e)),"onWork",(function(e){var n=e.isOpened,r=u(e,["isOpened"]);t.setState({isResting:!1,isOpened:n});var o=t.props.onWork;o&&o(s({isOpened:n},r))})),v(b(t),"onRest",(function(e){var n=e.isOpened,r=u(e,["isOpened"]);t.setState({isResting:!0,isOpened:n,isInitialRender:!1});var o=t.props.onRest;o&&o(s({isOpened:n},r))})),v(b(t),"getInitialStyle",(function(){var e=t.state,n=e.isOpened;return e.isInitialRender&&n?{height:"auto",overflow:"initial"}:{height:"0px",overflow:"hidden"}})),t.state={isResting:!0,isOpened:e.isOpened,isInitialRender:!0},t}return t=l,(n=[{key:"componentDidUpdate",value:function(e){var t=this.props.isOpened;e.isOpened!==t&&this.setState({isResting:!1,isOpened:t,isInitialRender:!1})}},{key:"render",value:function(){var e=this.state,t=e.isResting,n=e.isOpened;return t&&!n?null:o.default.createElement(i.Collapse,c({},this.props,{initialStyle:this.getInitialStyle(),onWork:this.onWork,onRest:this.onRest}))}}])&&f(t.prototype,n),r&&f(t,r),l}(o.default.PureComponent);t.UnmountClosed=m,v(m,"defaultProps",{onWork:void 0,onRest:void 0})},U8pU:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return r}))},ZCDs:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("q1tI"),o=n("mXvl");function i(e,t){return Object(r.useMemo)((function(){return null===e&&null===t?null:function(n){e&&Object(o.a)(e,n),t&&Object(o.a)(t,n)}}),[e,t])}},mXvl:function(e,t,n){"use strict";function r(e,t){"function"===typeof e?e(t):e&&(e.current=t)}n.d(t,"a",(function(){return r}))},rfF1:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.Collapse=void 0;var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r};function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?u(e):t}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(t){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(f,t);var n,r,i,s=l(f);function f(t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),p(u(n=s.call(this,t)),"timeout",void 0),p(u(n),"container",void 0),p(u(n),"content",void 0),p(u(n),"onResize",(function(){if(e.clearTimeout(n.timeout),n.container&&n.content){var t=n.props,r=t.isOpened,o=t.checkTimeout,i=n.container.clientHeight,a=n.content.clientHeight,c=r&&a===i,l=!r&&0===i;c||l?n.onRest({isFullyOpened:c,isFullyClosed:l,isOpened:r,containerHeight:i,contentHeight:a}):(n.onWork({isFullyOpened:c,isFullyClosed:l,isOpened:r,containerHeight:i,contentHeight:a}),n.timeout=setTimeout((function(){return n.onResize()}),o))}})),p(u(n),"onRest",(function(e){var t=e.isFullyOpened,r=e.isFullyClosed,o=e.isOpened,i=e.containerHeight,a=e.contentHeight;if(n.container&&n.content){var c=o&&n.container.style.height==="".concat(a,"px"),l=!o&&"0px"===n.container.style.height;if(c||l){n.container.style.overflow=o?"initial":"hidden",n.container.style.height=o?"auto":"0px";var s=n.props.onRest;s&&s({isFullyOpened:t,isFullyClosed:r,isOpened:o,containerHeight:i,contentHeight:a})}}})),p(u(n),"onWork",(function(e){var t=e.isFullyOpened,r=e.isFullyClosed,o=e.isOpened,i=e.containerHeight,a=e.contentHeight;if(n.container&&n.content){var c=o&&n.container.style.height==="".concat(a,"px"),l=!o&&"0px"===n.container.style.height;if(!c&&!l){n.container.style.overflow="hidden",n.container.style.height=o?"".concat(a,"px"):"0px";var s=n.props.onWork;s&&s({isFullyOpened:t,isFullyClosed:r,isOpened:o,containerHeight:i,contentHeight:a})}}})),p(u(n),"onRefContainer",(function(e){n.container=e})),p(u(n),"onRefContent",(function(e){n.content=e})),t.initialStyle?n.initialStyle=t.initialStyle:n.initialStyle=t.isOpened?{height:"auto",overflow:"initial"}:{height:"0px",overflow:"hidden"},n}return n=f,(r=[{key:"componentDidMount",value:function(){this.onResize()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props,n=t.theme,r=t.isOpened;return t.children!==e.children||r!==e.isOpened||Object.keys(n).some((function(t){return n[t]!==e.theme[t]}))}},{key:"getSnapshotBeforeUpdate",value:function(){if(!this.container||!this.content)return null;if("auto"===this.container.style.height){var e=this.content.clientHeight;this.container.style.height="".concat(e,"px")}return null}},{key:"componentDidUpdate",value:function(){this.onResize()}},{key:"componentWillUnmount",value:function(){e.clearTimeout(this.timeout)}},{key:"render",value:function(){var e=this.props,t=e.theme,n=e.children,r=e.isOpened;return o.default.createElement("div",{ref:this.onRefContainer,className:t.collapse,style:this.initialStyle,"aria-hidden":!r},o.default.createElement("div",{ref:this.onRefContent,className:t.content},n))}}])&&a(n.prototype,r),i&&a(n,i),f}(o.default.Component);t.Collapse=d,p(d,"defaultProps",{theme:{collapse:"ReactCollapse--collapse",content:"ReactCollapse--content"},initialStyle:void 0,onRest:void 0,onWork:void 0,checkTimeout:50})}).call(this,n("ntbh"))},"uIN+":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("q1tI"),o=function(){};function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;return("undefined"!==typeof window?r.useLayoutEffect:r.useEffect)(e,t)}},xVMs:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI");function o(e){var t=Object(r.useRef)();return Object(r.useEffect)((function(){t.current=e}),[e]),t.current}},xvhg:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("T/aA");var o=n("8rE2"),i=n("++Bh");function a(e,t){return Object(r.a)(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){o=!0,i=l}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(e,t)||Object(o.a)(e,t)||Object(i.a)()}}}]);