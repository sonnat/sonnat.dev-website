_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{"2qu3":function(e,t,n){"use strict";var r=n("oI91"),o=n("/GRZ"),a=n("i2R6");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw a}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.__esModule=!0,t.default=void 0;var s,d=(s=n("q1tI"))&&s.__esModule?s:{default:s},b=n("8L3h"),m=n("jwwS");var h=[],p=[],f=!1;function y(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function O(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach((function(r){var o=y(e[r]);o.loading?t.loading=!0:(t.loaded[r]=o.loaded,t.error=o.error),n.push(o.promise),o.promise.then((function(e){t.loaded[r]=e})).catch((function(e){t.error=e}))}))}catch(r){t.error=r}return t.promise=Promise.all(n).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function j(e,t){return d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function g(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:j,webpack:null,modules:null},t),r=null;function o(){if(!r){var t=new v(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!f&&"function"===typeof n.webpack){var a=n.webpack();p.push((function(e){var t,n=l(a);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(-1!==e.indexOf(r))return o()}}catch(i){n.e(i)}finally{n.f()}}))}var i=function(e,t){o();var a=d.default.useContext(m.LoadableContext),i=(0,b.useSubscription)(r);return d.default.useImperativeHandle(t,(function(){return{retry:r.retry}}),[]),a&&Array.isArray(n.modules)&&n.modules.forEach((function(e){a(e)})),d.default.useMemo((function(){return i.loading||i.error?d.default.createElement(n.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:r.retry}):i.loaded?n.render(i.loaded,e):null}),[e,i])};return i.preload=function(){return o()},i.displayName="LoadableComponent",d.default.forwardRef(i)}var v=function(){function e(t,n){o(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=c(c({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function w(e){return g(y,e)}function T(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return T(e,t)}))}w.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return g(O,e)},w.preloadAll=function(){return new Promise((function(e,t){T(h).then(e,t)}))},w.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return f=!0,t()};T(p,e).then(n,n)}))},window.__NEXT_PRELOADREADY=w.preloadReady;var P=w;t.default=P},Tv0W:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return _})),n.d(t,"default",(function(){return x}));var r=n("cpVT"),o=n("z7pX"),a=n("dhJC"),i=n("q1tI"),c=n("7ljp"),l=n("PW80"),u=n("G0Pc"),s=n("XLwr"),d=n("nKUr"),b=n("I2tA"),m=n("Vvt1"),h=n.n(m);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=i.memo((function(e){var t=e.className,r=Object(a.a)(e,["className"]),o=Object(b.a)(),i=h()((function(){return n.e(31).then(n.t.bind(null,"ovOe",7))}),{ssr:!1,loadableGenerated:{webpack:function(){return["ovOe"]},modules:["react-json-view"]}});return Object(d.jsx)("div",f(f({},r),{},{className:t,children:Object(d.jsx)(i,{style:{backgroundColor:o.colors.transparent},src:o,theme:o.darkMode?"google":"rjv-default",name:"defaultTheme",indentWidth:2,collapsed:!0,enableClipboard:!1,displayObjectSize:!1})}))}));y.displayName="JsonViewBox";var O=y,j=n("g4pe"),g=n.n(j),v=n("C6zX"),w=n("cBaE");function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _={title:"Theming",description:"Customize Sonnat with your own theme. You can change the breakpoints, coloring, typography and etc.",getLayout:function(){return function(e){return Object(c.b)(s.a,{mdxType:"WithSidebar"},e)}}},S={meta:_};function x(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",P(P(P({},S),n),{},{components:t,mdxType:"MDXLayout"}),Object(c.b)(g.a,{mdxType:"Head"},Object(w.e)("".concat(_.title," | Sonnat Developer Tools, React Components & Resources")),Object(w.c)(_.description),Object(w.b)("".concat(v.b,"/docs/theming")),Object(w.d)([].concat(Object(o.a)(v.a),["theming","theming","customize theme","sonnat theme","\u062a\u0645","\u067e\u0648\u0633\u062a\u0647"]))),Object(c.b)("h1",null,Object(c.b)("span",null,_.title),Object(c.b)(u.a,{anchorId:"overview",mdxType:"AnchorButton"}),Object(c.b)(l.a,{href:"pages/docs/theming.mdx",mdxType:"PageEditButton"})),Object(c.b)("p",null,_.description),Object(c.b)("p",null,"Themes let you apply a consistent feeling and tone to your application. It allows you to customize all the design aspects of your application in order to meet the specific needs of your business or brand."),Object(c.b)("h2",null,Object(c.b)("span",null,"Creating the Theme"),Object(c.b)(u.a,{anchorId:"creating-the-theme",mdxType:"AnchorButton"})),Object(c.b)("p",null,"Create a theme object that will be shared between the client and the server.",Object(c.b)("br",null),"If you don't provide a theme object the theming will be defaults to"," ",Object(c.b)("a",{href:"#default-theme"},"Default Theme"),"."),Object(c.b)("pre",null,Object(c.b)("code",P({parentName:"pre"},{className:"language-jsx"}),'// file: theme.js\n\nimport createTheme from "@sonnat/ui/styles/createTheme";\n\n// Create a theme instance.\nconst theme = createTheme({\n  // Your theme options\n});\n\nexport default theme;\n')),Object(c.b)("div",{"data-notebox":!0,style:{marginBottom:"1rem"}},"To learn more about the createTheme 's API, check out the"," ",Object(c.b)("a",{href:"/docs/styling#create-theme",title:"createTheme's documentation"},Object(c.b)("strong",null,"createTheme's documentation")),"."),Object(c.b)("h2",null,Object(c.b)("span",null,"Default Theme"),Object(c.b)(u.a,{anchorId:"default-theme",mdxType:"AnchorButton"})),Object(c.b)("p",null,"Here's what the theme object looks like with the default values. Explore the default theme object:"),Object(c.b)(O,{mdxType:"JsonViewBox"}),Object(c.b)("div",{"data-notebox":!0},Object(c.b)("strong",null,"Tip:")," you can play with the documentation theme object in your browser console, as the theme variable is exposed on all the documentation pages. Please note that the documentation site is using the default theme."),Object(c.b)("h2",null,Object(c.b)("span",null,"Passing Down the Theme Object"),Object(c.b)(u.a,{anchorId:"pass-theme",mdxType:"AnchorButton"})),Object(c.b)("p",null,"If you wish to declare the parent theme of your application, you need to use the ",Object(c.b)("inlineCode",null,"<SonnatInitializer>")," component in order to inject the main theme into your application. However, if you want to change the theming behaviour of an inner part of application's react-tree, you can always use nested ",Object(c.b)("inlineCode",null,"<ThemeProvider>")," component to merge/augment the parent theme object."),Object(c.b)("div",{"data-notebox":!0,style:{marginTop:"0",marginBottom:"1rem"}},"Check out the documentations of"," ",Object(c.b)("a",{href:"/docs/styling#sonnat-initializer",title:"SonnatInitializer's documentation"},Object(c.b)("strong",null,"<SonnatInitializer>"))," ","and"," ",Object(c.b)("a",{href:"/docs/styling#theme-provider",title:"ThemeProvider's documentation"},Object(c.b)("strong",null,"<ThemeProvider>")),", to learn more about them."),Object(c.b)("pre",null,Object(c.b)("code",P({parentName:"pre"},{className:"language-jsx"}),'import ThemeProvider from "@sonnat/ui/styles/ThemeProvider";\nimport SonnatInitializer from "@sonnat/ui/styles/SonnatInitializer";\n\n<SonnatInitializer theme={mainTheme}>\n  <CustomComponent />\n  <ThemeProvider theme={theme2}>\n    <CustomComponent />\n  </ThemeProvider>;\n</SonnatInitializer>;\n')),Object(c.b)("div",{"data-notebox":!0},"Please note that you cannot nest ",Object(c.b)("strong",null,"<SonnatInitializer>"),"!",Object(c.b)("br",null),"You can only use ",Object(c.b)("strong",null,"<SonnatInitializer>")," once and at the top of your application's React-Tree."),Object(c.b)("p",null,Object(c.b)("inlineCode",null,"<ThemeProvider>")," has a"," ",Object(c.b)("inlineCode",null,"theme")," prop which should be an"," ",Object(c.b)("inlineCode",null,"object")," or ",Object(c.b)("inlineCode",null,"function"),":"),Object(c.b)("ul",null,Object(c.b)("li",null,"If it is"," ",Object(c.b)("strong",null,Object(c.b)("em",null,"Object")),", then it gets merged with the theme from a parent ",Object(c.b)("em",null,"ThemeProvider")," and passed down the react tree.",Object(c.b)("code",{className:"language-jsx",children:"const theme = { themed: true };\nconst patch = { merged: true };\n\n<ThemeProvider theme={theme}>\n  {/* { ...initializerTheme, themed: true } */}\n  <ThemeProvider theme={patch}>\n    <DemoBox /> {/* { ...initializerTheme, themed: true, merged: true } */}\n  </ThemeProvider>\n</ThemeProvider>;"})),Object(c.b)("li",null,"If it is"," ",Object(c.b)("strong",null,Object(c.b)("em",null,"Function")),", then it's being applied to the theme from a parent ",Object(c.b)("em",null,"ThemeProvider"),". If the result is an Object it will be passed down the react tree, throws otherwise.",Object(c.b)("code",{className:"language-jsx",children:"const theme = { themed: true };\nconst augment = outerTheme => ({...outerTheme, { augmented: true }});\n\n<ThemeProvider theme={theme}>\n  {/* { ...initializerTheme, themed: true } */}\n  <ThemeProvider theme={augment}>\n    <DemoBox /> {/* { ...initializerTheme, themed: true, augmented: true } */}\n  </ThemeProvider>\n</ThemeProvider>;"}))),Object(c.b)("h2",{style:{marginTop:"-2rem"}},Object(c.b)("span",null,"Accessing the Theme Object"),Object(c.b)(u.a,{anchorId:"access-theme",mdxType:"AnchorButton"})),Object(c.b)("p",null,"You can access the theme object in Function Components via"," ",Object(c.b)("a",{href:"/docs/styling#use-theme",title:"useTheme's documentation"},"useTheme")," ","hook."),Object(c.b)("pre",null,Object(c.b)("code",P({parentName:"pre"},{className:"language-jsx"}),'import React from "react";\nimport useTheme from "@sonnat/ui/styles/useTheme";\n\nexport default function MyComponent() {\n  const theme = useTheme();\n\n  return <div style={{ color: theme.colors.primary.origin }}></div>;\n}\n')),Object(c.b)("p",null,"You can also access the theme object when styling components using"," ",Object(c.b)("a",{href:"/docs/styling#make-styles",title:"makeStyles' documentation"},"makeStyles")," ","function.",Object(c.b)("br",null),"This function uses"," ",Object(c.b)("a",{href:"/docs/styling#overview",title:"Sonnat's styling solution documentation"},"our styling solution")," ","at its core."),Object(c.b)("pre",null,Object(c.b)("code",P({parentName:"pre"},{className:"language-jsx"}),'import makeStyles from "@sonnat/ui/styles/makeStyles";\n\nconst useThemedStyles = makeStyles(\n  theme => ({\n    root: {\n      color: theme.colors.text.primary\n    }\n  }),\n  { name: "MyThemedStyles" }\n);\n\nfunction ComponentA(props) {\n  const classes = useThemedStyles();\n  return <div className={classes.root} />;\n}\n')))}x.isMDXComponent=!0},Vvt1:function(e,t,n){e.exports=n("a6RD")},Zq3M:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/theming",function(){return n("Tv0W")}])},a6RD:function(e,t,n){"use strict";var r=n("oI91");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.__esModule=!0,t.noSSR=l,t.default=function(e,t){var n=i.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=a(a({},r),e));if(r=a(a({},r),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(r.render=function(t,n){return e.render(n,t)}),e.modules)){n=i.default.Map;var o={},c=e.modules();Object.keys(c).forEach((function(e){var t=c[e];"function"!==typeof t.then?o[e]=t:o[e]=function(){return t.then((function(e){return e.default||e}))}})),r.loader=o}r.loadableGenerated&&delete(r=a(a({},r),r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,l(n,r);delete r.ssr}return n(r)};c(n("q1tI"));var i=c(n("2qu3"));function c(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}},jwwS:function(e,t,n){"use strict";var r;t.__esModule=!0,t.LoadableContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=o}},[["Zq3M",0,1,2,3,4,5]]]);