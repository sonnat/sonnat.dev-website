(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5178],{4475:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return j},meta:function(){return N}});var o=e(6265),r=e(8140),i=e(8347),l=e(7294),a=e(3905),u=e(2122),p=e(2949),s=e(5697),c=e.n(s),d=e(4184),m=e.n(d),k="MoonSpinner",h=(0,e(4425).Z)((function(t){var n=t.colors,e=t.darkMode,o=t.direction,r=t.typography,i=r.pxToRem,l=r.fontFamily;return{root:function(t){var n=t.size;return{direction:o,fontFamily:l[o],width:i(n)||i(20),height:i(n)||i(20),minWidth:i(n)||i(20),minHeight:i(n)||i(20),display:"flex",alignItems:"center",justifyContent:"center",position:"relative"}},base:{display:"flex",alignItems:"center",justifyContent:"center",position:"relative",width:"100%",height:"100%",borderRadius:"50%",border:function(t){var e=t.backgroundColor;return"".concat(i(4)," solid ").concat(e||n.divider)},animationName:"$rotateAnimation",animationDuration:"600ms",animationTimingFunction:"linear",animationIterationCount:"infinite","&:after":{content:'""',position:"absolute",top:"0",width:i(4),height:i(4),transform:"translateY(-100%)",backgroundColor:function(t){return t.foregroundColor||!e?n.createBlackColor({alpha:.48}):n.createWhiteColor({alpha:.48})},borderRadius:"50%"}},"@keyframes rotateAnimation":{"0%":{transform:"rotate(0)"},"100%":{transform:"rotate(360deg)"}}}}),{name:"Sonnat".concat(k)}),f=l.memo((function(t){var n=t.className,e=t.size,o=t.backgroundColor,r=t.foregroundColor,i=(0,p.Z)(t,["className","size","backgroundColor","foregroundColor"]),a=h({size:e,backgroundColor:o,foregroundColor:r});return l.createElement("div",(0,u.Z)({className:m()(a.root,n)},i),l.createElement("div",{className:a.base}))}));f.displayName=k,f.propTypes={className:c().string,size:c().number,backgroundColor:c().string,foregroundColor:c().string};var g=f,y=e(8224),b=e(7703),C=e(9387),v=e(3161),S=e(3910),T=e(9008),x=e(3257),Z=e(1919);function w(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function O(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?w(Object(e),!0).forEach((function(n){(0,o.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):w(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var N={title:"Spinners",description:"Indicates an action with indeterminate wait time running in the background.",getLayout:function(){return function(t){return(0,a.kt)(v.Z,{mdxType:"WithSidebar"},t)}}},P={meta:N};function j(t){var n=t.components,e=(0,i.Z)(t,["components"]);return(0,a.kt)("wrapper",O(O(O({},P),e),{},{components:n,mdxType:"MDXLayout"}),(0,a.kt)(T.default,{mdxType:"Head"},(0,Z.aT)("".concat(N.title," | Sonnat Developer Tools, React Components & Resources")),(0,Z.u2)(N.description),(0,Z.ai)("".concat(x.z,"/docs/components/").concat(N.title)),(0,Z.hL)([].concat((0,r.Z)(x.t),["spinners"]))),(0,a.kt)("h1",null,(0,a.kt)("span",null,N.title),(0,a.kt)(C.Z,{anchorId:"overview",mdxType:"AnchorButton"}),(0,a.kt)(b.Z,{href:"pages/docs/components/".concat(N.title,".mdx"),mdxType:"PageEditButton"})),(0,a.kt)("p",null,N.description),(0,a.kt)("h2",null,(0,a.kt)("span",null,"Moon Spinner"),(0,a.kt)(C.Z,{anchorId:"moon-spinner",mdxType:"AnchorButton"})),(0,a.kt)(S.Z,{code:"<MoonSpinner />",mdxType:"DemoBox"},(0,a.kt)(g,{mdxType:"MoonSpinner"})),(0,a.kt)("h2",null,(0,a.kt)("span",null,"Clip Spinner"),(0,a.kt)(C.Z,{anchorId:"clip-spinner",mdxType:"AnchorButton"})),(0,a.kt)(S.Z,{code:"<ClipSpinner />",mdxType:"DemoBox"},(0,a.kt)(y.Z,{mdxType:"ClipSpinner"})),(0,a.kt)("h2",null,(0,a.kt)("span",null,"API"),(0,a.kt)(C.Z,{anchorId:"api",mdxType:"AnchorButton"})),(0,a.kt)("p",null,"Learn more about the properties and the customization points."),(0,a.kt)("h3",null,(0,a.kt)("span",null,"Usage"),(0,a.kt)(C.Z,{anchorId:"usage",mdxType:"AnchorButton"})),(0,a.kt)("pre",null,(0,a.kt)("code",O({parentName:"pre"},{className:"language-typescript"}),'// recommended\nimport MoonSpinner from "@sonnat/ui/Spinner/Moon";\nimport ClipSpinner from "@sonnat/ui/Spinner/Clip";\n\n//or (1)\nimport { MoonSpinner, ClipSpinner } from "@sonnat/ui/Spinner";\n\n//or (2)\nimport { MoonSpinner, ClipSpinner } from "@sonnat/ui";\n')),(0,a.kt)("h3",null,(0,a.kt)("span",null,"Properties"),(0,a.kt)(C.Z,{anchorId:"properties",mdxType:"AnchorButton"})),(0,a.kt)("p",null,"Note that the documentation avoids mentioning all the native props (there are a lot) in this section of the components."),(0,a.kt)("table",{cols:4},(0,a.kt)("caption",null,"Spinners Properties"),(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Default"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"className"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"Append to the class names applied to the component so you can override or extend the styles.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"size"),(0,a.kt)("td",null,"number"),(0,a.kt)("td",null,"20"),(0,a.kt)("td",null,"The size of the spinner in pixels.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"backgroundColor"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"Sets the backgroundColor of the spinner.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"foregroundColor"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"Sets the foregroundColor (strokes) of the spinner."))),(0,a.kt)("tfoot",null,(0,a.kt)("tr",null,(0,a.kt)("td",{colSpan:"4"},(0,a.kt)("ul",null,(0,a.kt)("li",null,"The ",(0,a.kt)("inlineCode",null,"ref")," is forwarded to the root element."),(0,a.kt)("li",null,"Any other properties supplied will be provided to the root element.")))))))}j.isMDXComponent=!0},6896:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/components/Spinners",function(){return e(4475)}])},9762:function(t,n,e){"use strict";e.d(n,{Z:function(){return a}});var o=e(7707),r=e(9391),i=e(355),l=e(5678);function a(t){return(0,o.Z)(t)||(0,r.Z)(t)||(0,i.Z)(t)||(0,l.Z)()}}},function(t){t.O(0,[9774,3679,1161,6156,320,2652,1635,9481,9701],(function(){return n=6896,t(t.s=n);var n}));var n=t.O();_N_E=n}]);