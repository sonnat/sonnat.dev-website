_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"2yLH":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/components/Breadcrumb",function(){return n("iCs2")}])},UhvI:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var r=n("nKUr"),o=n("xvhg"),c=n("dhJC"),a=n("T/aA"),l=n("8tO+"),i=n("8rE2"),b=n("++Bh");var s=n("cpVT"),d=n("eZlZ"),u=n("fZnD"),m=n("sfHl"),p=n("s676"),j=n("TSYQ"),h=n.n(j),f=n("Pgy6"),O=n("7yFL"),y=n("3Mpw"),g=n("w21c"),x=n("q1tI");function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C="DemoBox",B=Object(d.a)((function(e){var t=e.colors,n=e.darkMode,r=e.typography.pxToRem;return{root:{border:"1px solid ".concat(n?"rgba(255, 255, 255, 0.08)":"rgba(0, 0,0 ,0.08)"),borderRadius:4,overflow:"hidden","@global .demoSubject":{margin:r(8)},"& + p":{marginTop:r(16)}},demoContainer:Object(s.a)({display:"flex",flexWrap:"wrap",alignItems:"center",minHeight:r(100),padding:r(32),backgroundColor:t.background.origin},e.breakpoints.down("sm"),{flexDirection:"column"}),codeWrapper:{borderTop:"1px solid ".concat(t.divider),backgroundColor:t.background.origin},codeHeader:{display:"flex",flexWrap:"wrap",alignItems:"center",height:r(56),paddingLeft:r(8),paddingRight:r(8)},viewCode:{},copyCode:{marginLeft:"auto",marginRight:r(8)},expandCode:{},codeContainer:Object(s.a)({},e.breakpoints.down("lg"),{maxWidth:"calc(100vw - ".concat(r(32),")")}),codeBlock:{border:"none",borderRadius:0,backgroundColor:e.colors.pallete.grey[900],maxHeight:r(500)},expanded:{"& $codeWrapper":{}},collapser:{transition:"height 360ms ease"},flexDirectionRow:{"& $demoContainer":{flexDirection:"row"}},flexDirectionColumn:{"& $demoContainer":{flexDirection:"column"}},hAlignCenter:{"&$flexDirectionRow":{"& $demoContainer":{justifyContent:"center"}},"&$flexDirectionColumn":{"& $demoContainer":{alignItems:"center"}}},hAlignStart:{"&$flexDirectionRow":{"& $demoContainer":{justifyContent:"flex-start"}},"&$flexDirectionColumn":{"& $demoContainer":{alignItems:"flex-start"}}},hAlignEnd:{"&$flexDirectionRow":{"& $demoContainer":{justifyContent:"flex-end"}},"&$flexDirectionColumn":{"& $demoContainer":{alignItems:"flex-end"}}},vAlignCenter:{"&$flexDirectionRow":{"& $demoContainer":{alignItems:"center"}},"&$flexDirectionColumn":{"& $demoContainer":{justifyContent:"center"}}},vAlignStart:{"&$flexDirectionRow":{"& $demoContainer":{alignItems:"flex-start"}},"&$flexDirectionColumn":{"& $demoContainer":{justifyContent:"flex-start"}}},vAlignEnd:{"&$flexDirectionRow":{"& $demoContainer":{alignItems:"flex-end"}},"&$flexDirectionColumn":{"& $demoContainer":{justifyContent:"flex-end"}}}}}),{name:C}),$=function(e){var t,n=(t=e,Object(a.a)(t)||Object(l.a)(t)||Object(i.a)(t)||Object(b.a)()),r=n[0],o=n.slice(1);return"".concat(r.toUpperCase()).concat(o.join(""))},I=x.memo((function(e){var t=e.className,n=e.children,a=e.code,l=e.horizontalAlignment,i=void 0===l?"center":l,b=e.verticalAlignment,d=void 0===b?"center":b,j=e.flexDirection,v=void 0===j?"row":j,C=Object(c.a)(e,["className","children","code","horizontalAlignment","verticalAlignment","flexDirection"]),I=B(),S=x.useState(!1),D=Object(o.a)(S,2),P=D[0],N=D[1],T=Object(O.a)(a||"",{successDuration:1e3}),k=Object(o.a)(T,2),A=k[0],E=k[1],R="hAlign".concat($(i)),_="vAlign".concat($(d)),L="flexDirection".concat($(v));return Object(r.jsxs)("div",w(w({},C),{},{className:h()("demo-box",I.root,t,I[R],I[_],I[L],Object(s.a)({},I.expanded,P)),children:[Object(r.jsx)("div",{className:I.demoContainer,children:n}),Object(r.jsxs)("div",{className:I.codeWrapper,children:[Object(r.jsxs)("div",{className:I.codeHeader,children:[!P&&Object(r.jsx)(u.a,{label:"View Code",variant:"inlined",size:"small",className:I.viewCode,onClick:function(){return N((function(e){return!e}))}}),Object(r.jsx)(p.a,{text:"Copied to clipboard!",open:A,children:Object(r.jsx)(u.a,{leadingIcon:"content-copy","aria-label":"Copy the code",variant:"inlined",className:I.copyCode,onClick:function(){return E()}})}),Object(r.jsx)(u.a,{leadingIcon:P?"chevron-up":"chevron-down","aria-label":"Expand the codebox",variant:"inlined",className:I.expandCode,onClick:function(){return N((function(e){return!e}))}})]}),Object(r.jsx)(f.Collapse,{theme:{collapse:I.collapser},isOpened:P,children:Object(r.jsx)("div",{className:I.codeContainer,children:Object(r.jsx)(y.a,w(w({},y.b),{},{code:a||"",language:"tsx",theme:g.a,children:function(e){var t=e.className,n=e.style,o=e.tokens,c=e.getLineProps,a=e.getTokenProps;return Object(r.jsx)(m.a,{codeBlock:!0,style:n,className:h()(t,I.codeBlock),children:o.map((function(e,t){var n=t===o.length-1;return Object(r.jsx)("div",w(w({},c({line:e,key:t})),{},{children:e.map((function(e,t){return n&&e.empty?null:Object(r.jsx)("span",w({},a({token:e,key:t})),"".concat(e,"/").concat(t))}))}),"".concat(e,"/").concat(t))}))})}}))})})]})]}))}));I.displayName=C;var S=I},hodY:function(e,t,n){"use strict";e.exports=n("mlgy")},iCs2:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return W})),n.d(t,"default",(function(){return H}));var r=n("cpVT"),o=n("z7pX"),c=n("dhJC"),a=n("q1tI"),l=n.n(a),i=n("7ljp"),b=n("PW80"),s=n("G0Pc"),d=n("XLwr"),u=n("nKUr"),m=n("rePB"),p=n("Ff2n"),j=n("wx14"),h=n("hodY"),f=n("17x9"),O=n.n(f),y=n("TSYQ"),g=n.n(y),x=n("eZlZ"),v="BreadcrumbItem",w=Object(x.a)((function(e){var t=e.icons,n=e.colors,r=e.direction,o=e.typography,c=o.pxToRem,a=o.useText,l=e.mixins.useFontIcon;return{root:Object(j.a)({},a({fontSize:c(12),color:n.text.secondary}),{display:"inline-flex",alignItems:"center",flexShrink:"0",cursor:"pointer",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",transition:"color 360ms ease"},"rtl"===r?{marginLeft:c(4)}:{marginRight:c(4)},{"& > a":{textDecoration:"none",color:"inherit"},"&:hover":{color:n.text.primary,"&:after":{color:n.text.primary,transform:"rotate(180deg)"},"& ~ $root:after":{transform:"rotate(180deg)"}},"&:after":Object(j.a)({},l(),{width:c(16),height:c(16),fontSize:c(16),display:"block",color:n.text.secondary,flexShrink:"0",transition:"color 360ms ease, transform 360ms ease"},"rtl"===r?{content:t.variable.chevronLeft}:{content:t.variable.chevronRight})})}}),{name:"Sonnat".concat(v)}),C=l.a.memo(l.a.forwardRef((function(e,t){var n=e.className,r=e.children,o=Object(p.a)(e,["className","children"]),c=w();return l.a.createElement("li",Object(j.a)({ref:t,className:g()(c.root,n)},o),r)})));C.displayName=v,C.propTypes={children:O.a.node,className:O.a.string};var B=C,$="Breadcrumb",I=Object(x.a)((function(e){var t=e.colors,n=e.direction,r=e.typography,o=r.pxToRem,c=r.fontFamily;return{root:{height:o(24),overflow:"hidden"},list:{direction:n,fontFamily:c[n],padding:"0",margin:"0",listStyle:"none",display:"flex",flexWrap:"nowrap",overflowX:"auto",overflowY:"hidden",width:"100%",position:"relative",scrollBehavior:"smooth",WebkitOverflowScrolling:"touch","& > $item":{maxWidth:o(120)},"& > $item:last-child":{margin:0,color:t.text.hint,pointerEvents:"none","&:after":{display:"none"}}},onlyPreviousStep:{"& > $item:not(:nth-last-child(2))":{display:"none"},"& > $item:nth-last-child(2)":{margin:0,"&:hover:after":{color:t.text.primary,transform:"rotate(180deg)"},"&:hover:after ~ $item:after":{transform:"rotate(0)"},"&:after":Object(j.a)({order:"-1",transform:"rotate(180deg)"},"rtl"===n?{marginLeft:o(4)}:{marginRight:o(4)})}},item:{}}}),{name:"Sonnat".concat($)}),S=l.a.memo(l.a.forwardRef((function(e,t){var n=e.className,r=e["aria-label"],o=void 0===r?"breadcrumb":r,c=e.children,a=e.showOnlyPreviousStep,i=void 0!==a&&a,b=Object(p.a)(e,["className","aria-label","children","showOnlyPreviousStep"]),s=I(),d=l.a.Children.map(c,(function(e){return l.a.isValidElement(e)?(Object(h.isFragment)(e)&&console.error("Sonnat: The Breadcrumb component doesn't accept a Fragment as a child."),e.type.displayName!==v&&console.error("Sonnat: The Breadcrumb component only accepts `Breadcrumb/Item` as a child."),l.a.cloneElement(e,{className:g()(e.props.className,s.item)})):null}));return l.a.createElement("nav",Object(j.a)({"aria-label":o,className:g()(s.root,n),ref:t},b),l.a.createElement("ol",{className:g()(s.list,Object(m.a)({},s.onlyPreviousStep,i))},d))})));S.displayName=$,S.propTypes={children:O.a.node,className:O.a.string,showOnlyPreviousStep:O.a.bool};var D=S,P=n("UhvI"),N=function(){return Object(u.jsx)(P.a,{code:'<Breadcrumb>\n  <BreadcrumbItem><a href="#">Sonnat</a></BreadcrumbItem>\n  <BreadcrumbItem><a href="#">Docs</a></BreadcrumbItem>\n  <BreadcrumbItem><a href="#">Navigation</a></BreadcrumbItem>\n  <BreadcrumbItem><a href="#">Breadcrumb</a></BreadcrumbItem>\n</Breadcrumb>',children:Object(u.jsx)(a.Fragment,{children:Object(u.jsxs)(D,{children:[Object(u.jsx)(B,{children:Object(u.jsx)("a",{href:"#",children:"Sonnat"})}),Object(u.jsx)(B,{children:Object(u.jsx)("a",{href:"#",children:"Docs"})}),Object(u.jsx)(B,{children:Object(u.jsx)("a",{href:"#",children:"Navigation"})}),Object(u.jsx)(B,{children:Object(u.jsx)("a",{href:"#",children:"Breadcrumb"})})]})})})};N.displayName="BreadcrumbSimpleDemo";var T=N,k=function(){return Object(u.jsx)(P.a,{code:'<Breadcrumb showOnlyPreviousStep>\n  <BreadcrumbItem><a href="#">Sonnat</a></BreadcrumbItem>\n  <BreadcrumbItem><a href="#">Docs</a></BreadcrumbItem>\n  <BreadcrumbItem><a href="#">Navigation</a></BreadcrumbItem>\n  <BreadcrumbItem><a href="#">Breadcrumb</a></BreadcrumbItem>\n</Breadcrumb>',children:Object(u.jsx)(a.Fragment,{children:Object(u.jsxs)(D,{showOnlyPreviousStep:!0,children:[Object(u.jsx)(B,{children:Object(u.jsx)("a",{href:"#",children:"Sonnat"})}),Object(u.jsx)(B,{children:Object(u.jsx)("a",{href:"#",children:"Docs"})}),Object(u.jsx)(B,{children:Object(u.jsx)("a",{href:"#",children:"Navigation"})}),Object(u.jsx)(B,{children:Object(u.jsx)("a",{href:"#",children:"Breadcrumb"})})]})})})};k.displayName="BreadcrumbBehaviourChangeDemo";var A=k,E=n("g4pe"),R=n.n(E),_=n("C6zX"),L=n("cBaE");function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var W={title:"Breadcrumb",description:"Shows where users are in the application.",getLayout:function(){return function(e){return Object(i.b)(d.a,{mdxType:"WithSidebar"},e)}}},M={meta:W};function H(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(i.b)("wrapper",z(z(z({},M),n),{},{components:t,mdxType:"MDXLayout"}),Object(i.b)(R.a,{mdxType:"Head"},Object(L.e)("".concat(W.title," | Sonnat Developer Tools, React Components & Resources")),Object(L.c)(W.description),Object(L.b)("".concat(_.b,"/docs/components/").concat(W.title)),Object(L.d)([].concat(Object(o.a)(_.a),["breadcrumb","\u0628\u0631\u062f\u06a9\u0631\u0627\u0645"]))),Object(i.b)("h1",null,Object(i.b)("span",null,W.title),Object(i.b)(s.a,{anchorId:"overview",mdxType:"AnchorButton"}),Object(i.b)(b.a,{href:"pages/docs/components/".concat(W.title,".mdx"),mdxType:"PageEditButton"})),Object(i.b)("p",null,W.description),Object(i.b)("h2",null,Object(i.b)("span",null,"Simple Breadcrumb"),Object(i.b)(s.a,{anchorId:"simple-breadcrumb",mdxType:"AnchorButton"})),Object(i.b)(T,{mdxType:"BreadcrumbSimpleDemo"}),Object(i.b)("h2",null,Object(i.b)("span",null,"Change Behaviour"),Object(i.b)(s.a,{anchorId:"change-behaviour",mdxType:"AnchorButton"})),Object(i.b)("p",null,"By setting the ",Object(i.b)("inlineCode",null,"showOnlyPreviousStep")," property to"," ",Object(i.b)("inlineCode",null,"true")," you can change the breadcrumb's behaviour to show only the previous step to work similar to the"," ",Object(i.b)("strong",null,Object(i.b)("em",null,"back button"))," ","in small devices."),Object(i.b)(A,{mdxType:"BreadcrumbBehaviourChangeDemo"}),Object(i.b)("h2",null,Object(i.b)("span",null,"API"),Object(i.b)(s.a,{anchorId:"api",mdxType:"AnchorButton"})),Object(i.b)("p",null,"Learn more about the properties and the customization points."),Object(i.b)("h3",null,Object(i.b)("span",null,"Usage"),Object(i.b)(s.a,{anchorId:"usage",mdxType:"AnchorButton"})),Object(i.b)("pre",null,Object(i.b)("code",z({parentName:"pre"},{className:"language-typescript"}),'// recommended\nimport Breadcrumb, { BreadcrumbItem } from "@sonnat/ui/Breadcrumb";\n\n//or\nimport { Breadcrumb, BreadcrumbItem } from "@sonnat/ui";\n')),Object(i.b)("h3",null,Object(i.b)("span",null,"Properties"),Object(i.b)(s.a,{anchorId:"properties",mdxType:"AnchorButton"})),Object(i.b)("p",null,"Note that the documentation avoids mentioning all the native props (there are a lot) in this section of the components."),Object(i.b)("h4",null,Object(i.b)("span",null,Object(i.b)("mark",null,"Breadcrumb")," Properties"),Object(i.b)(s.a,{anchorId:"parent-properties",mdxType:"AnchorButton"})),Object(i.b)("table",{cols:4},Object(i.b)("caption",null,"Breadcrumb Properties"),Object(i.b)("thead",null,Object(i.b)("tr",null,Object(i.b)("th",null,"Name"),Object(i.b)("th",null,"Type"),Object(i.b)("th",null,"Default"),Object(i.b)("th",null,"Description"))),Object(i.b)("tbody",null,Object(i.b)("tr",null,Object(i.b)("td",null,"children"),Object(i.b)("td",null,"node"),Object(i.b)("td",null,"-"),Object(i.b)("td",null,"The content of the breadcrumb.",Object(i.b)("br",null),"The breadcrumb component only accepts"," ",Object(i.b)("inlineCode",null,"Breadcrumb/Item")," component as a child.")),Object(i.b)("tr",null,Object(i.b)("td",null,"className"),Object(i.b)("td",null,"string"),Object(i.b)("td",null,"-"),Object(i.b)("td",null,"Append to the class names applied to the component so you can override or extend the styles.")),Object(i.b)("tr",null,Object(i.b)("td",null,"showOnlyPreviousStep"),Object(i.b)("td",null,"boolean"),Object(i.b)("td",null,"false"),Object(i.b)("td",null,"If ",Object(i.b)("inlineCode",null,"true"),", the breadcrumb will only show the previous step. (It's useful when rendering on mobile devices)"))),Object(i.b)("tfoot",null,Object(i.b)("tr",null,Object(i.b)("td",{colSpan:"4"},Object(i.b)("ul",null,Object(i.b)("li",null,"The ",Object(i.b)("inlineCode",null,"ref")," is forwarded to the root element."),Object(i.b)("li",null,"Any other properties supplied will be provided to the root element.")))))),Object(i.b)("h4",null,Object(i.b)("span",null,Object(i.b)("mark",null,"Breadcrumb/Item")," Properties"),Object(i.b)(s.a,{anchorId:"child-properties",mdxType:"AnchorButton"})),Object(i.b)("table",{cols:4},Object(i.b)("caption",null,"Breadcrumb/Item Properties"),Object(i.b)("thead",null,Object(i.b)("tr",null,Object(i.b)("th",null,"Name"),Object(i.b)("th",null,"Type"),Object(i.b)("th",null,"Default"),Object(i.b)("th",null,"Description"))),Object(i.b)("tbody",null,Object(i.b)("tr",null,Object(i.b)("td",null,"children"),Object(i.b)("td",null,"node"),Object(i.b)("td",null,"-"),Object(i.b)("td",null,"The content of the breadcrumb item.")),Object(i.b)("tr",null,Object(i.b)("td",null,"className"),Object(i.b)("td",null,"string"),Object(i.b)("td",null,"-"),Object(i.b)("td",null,"Append to the class names applied to the component so you can override or extend the styles."))),Object(i.b)("tfoot",null,Object(i.b)("tr",null,Object(i.b)("td",{colSpan:"4"},Object(i.b)("ul",null,Object(i.b)("li",null,"The ",Object(i.b)("inlineCode",null,"ref")," is forwarded to the root element."),Object(i.b)("li",null,"Any other properties supplied will be provided to the root element.")))))))}H.isMDXComponent=!0},mlgy:function(e,t,n){"use strict";var r=60103,o=60106,c=60107,a=60108,l=60114,i=60109,b=60110,s=60112,d=60113,u=60120,m=60115,p=60116,j=60121,h=60122,f=60117,O=60129,y=60131;if("function"===typeof Symbol&&Symbol.for){var g=Symbol.for;r=g("react.element"),o=g("react.portal"),c=g("react.fragment"),a=g("react.strict_mode"),l=g("react.profiler"),i=g("react.provider"),b=g("react.context"),s=g("react.forward_ref"),d=g("react.suspense"),u=g("react.suspense_list"),m=g("react.memo"),p=g("react.lazy"),j=g("react.block"),h=g("react.server.block"),f=g("react.fundamental"),O=g("react.debug_trace_mode"),y=g("react.legacy_hidden")}function x(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case c:case l:case a:case d:case u:return e;default:switch(e=e&&e.$$typeof){case b:case s:case p:case m:case i:return e;default:return t}}case o:return t}}}var v=i,w=r,C=s,B=c,$=p,I=m,S=o,D=l,P=a,N=d;t.ContextConsumer=b,t.ContextProvider=v,t.Element=w,t.ForwardRef=C,t.Fragment=B,t.Lazy=$,t.Memo=I,t.Portal=S,t.Profiler=D,t.StrictMode=P,t.Suspense=N,t.isAsyncMode=function(){return!1},t.isConcurrentMode=function(){return!1},t.isContextConsumer=function(e){return x(e)===b},t.isContextProvider=function(e){return x(e)===i},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return x(e)===s},t.isFragment=function(e){return x(e)===c},t.isLazy=function(e){return x(e)===p},t.isMemo=function(e){return x(e)===m},t.isPortal=function(e){return x(e)===o},t.isProfiler=function(e){return x(e)===l},t.isStrictMode=function(e){return x(e)===a},t.isSuspense=function(e){return x(e)===d},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===c||e===l||e===O||e===a||e===d||e===u||e===y||"object"===typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===m||e.$$typeof===i||e.$$typeof===b||e.$$typeof===s||e.$$typeof===f||e.$$typeof===j||e[0]===h)},t.typeOf=x}},[["2yLH",0,1,2,3,4,5]]]);