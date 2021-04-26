(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[368],{484:function(n,e,o){"use strict";function t(n){return(t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}o.d(e,{Z:function(){return t}})},5278:function(n,e,o){"use strict";o.r(e),o.d(e,{default:function(){return sn},meta:function(){return rn}});var t=o(6265),l=o(8140),r=o(8347),i=o(7294),a=o(3905),s=o(7703),u=o(9387),c=o(3161),m=o(5893),d=o(1446),p=o(2122),f=o(2949),h=o(5697),g=o.n(h),C=o(4184),k=o.n(C),y=o(4425),x=(0,y.Z)((function(n){var e=n.direction,o=n.spacings.gutter,t=n.typography,l=t.pxToRem;return{root:{direction:e,fontFamily:t.fontFamily[e],display:"flex",flexWrap:"wrap",marginRight:l(-o/2),marginLeft:l(-o/2)}}}),{name:"Sonnat".concat("Row")}),b=i.memo(i.forwardRef((function(n,e){var o=n.children,t=n.className,l=(0,f.Z)(n,["children","className"]),r=x();return i.createElement("div",(0,p.Z)({ref:e,className:k()(r.root,t)},l),o)})));b.displayName="Row",b.propTypes={className:g().string,children:g().node};var w=b,v=o(484),j=o(7329),O=o(6156),T=o(878),R=o(6486),Z="Column",N=(0,y.Z)((function(n){var e=n.breakpoints,o=n.direction,t=n.spacings.gutter,l=n.typography,r=l.pxToRem,i=l.fontFamily,a=e.keys.reduce((function(n,t){return function(n,e,o){var t=e.breakpoints,l=e.direction,r={};return T.C.forEach((function(n){if("string"!==typeof n){var e="".concat(Math.round(n/12*1e8)/1e6,"%"),i={column:{flexBasis:e,maxWidth:e,flexGrow:0,flexShrink:0},offset:(0,p.Z)({},"rtl"===l?{marginRight:e}:{marginLeft:e}),order:{order:"".concat(n)}};r["column".concat(n)]=i.column,r["offset".concat(n)]=i.offset,r["order".concat(n)]=i.order,r["".concat(o,"Column").concat(n)]=(0,O.Z)({},t.up(o),i.column),r["".concat(o,"Offset").concat(n)]=(0,O.Z)({},t.up(o),i.offset),r["".concat(o,"Order").concat(n)]=(0,O.Z)({},t.up(o),i.order)}})),(0,p.Z)({},n,r)}(n,{direction:o,breakpoints:e},t)}),{});return(0,p.Z)({root:{position:"relative",direction:o,fontFamily:i[o],width:"100%",paddingRight:r(t/2),paddingLeft:r(t/2),maxWidth:"100%",flexBasis:"0",flexGrow:"1"}},a)}),{name:"Sonnat".concat(Z)}),D=i.memo(i.forwardRef((function(n,e){var o=n.children,t=n.className,l=n.all,r=(0,f.Z)(n,["children","className","all"]),a=N(),s=(0,R.Z)(),u=[];if(null!=l)if("string"===typeof l||"number"===typeof l){var c=l;u=[].concat((0,j.Z)(u),[a["column".concat(c)]])}else if("object"===(0,v.Z)(l)){var m=l.size,d=l.order,h=l.offset;null!=m&&(u=[].concat((0,j.Z)(u),[a["column".concat(m)]])),null!=d&&(u=[].concat((0,j.Z)(u),[a["order".concat(d)]])),null!=h&&(u=[].concat((0,j.Z)(u),[a["offset".concat(h)]]))}s.breakpoints.keys.forEach((function(n){var e=r[n];if(null!=e)if("string"===typeof e||"number"===typeof e){var o=e;o&&(u=[].concat((0,j.Z)(u),[a["".concat(n,"Column").concat(o)]]))}else if("object"===(0,v.Z)(e)){var t=e.size,l=e.order,i=e.offset;null!=t&&(u=[].concat((0,j.Z)(u),[a["".concat(n,"Column").concat(t)]])),null!=l&&(u=[].concat((0,j.Z)(u),[a["".concat(n,"Order").concat(l)]])),null!=i&&(u=[].concat((0,j.Z)(u),[a["".concat(n,"Offset").concat(i)]]))}}));r.xxs,r.xs,r.sm,r.md,r.lg,r.xlg;var g=(0,f.Z)(r,["xxs","xs","sm","md","lg","xlg"]);return i.createElement("div",(0,p.Z)({ref:e,className:k().apply(void 0,[a.root,t].concat((0,j.Z)(u)))},g),o)})));D.displayName=Z,D.propTypes={children:g().node,className:g().string,all:g().oneOfType([g().shape({size:g().oneOf(T.C),order:g().oneOf(T.C),offset:g().oneOf(T.C)}),g().oneOf(T.C)]),xxs:g().oneOfType([g().shape({size:g().oneOf(T.C),order:g().oneOf(T.C),offset:g().oneOf(T.C)}),g().oneOf(T.C)]),xs:g().oneOfType([g().shape({size:g().oneOf(T.C),order:g().oneOf(T.C),offset:g().oneOf(T.C)}),g().oneOf(T.C)]),sm:g().oneOfType([g().shape({size:g().oneOf(T.C),order:g().oneOf(T.C),offset:g().oneOf(T.C)}),g().oneOf(T.C)]),md:g().oneOfType([g().shape({size:g().oneOf(T.C),order:g().oneOf(T.C),offset:g().oneOf(T.C)}),g().oneOf(T.C)]),lg:g().oneOfType([g().shape({size:g().oneOf(T.C),order:g().oneOf(T.C),offset:g().oneOf(T.C)}),g().oneOf(T.C)]),xlg:g().oneOfType([g().shape({size:g().oneOf(T.C),order:g().oneOf(T.C),offset:g().oneOf(T.C)}),g().oneOf(T.C)])};var I=D,z=o(8286),S=o(3910),B="ColumnEqualWidthDemo",P=(0,y.Z)((function(n){return{col:{display:"flex",paddingTop:n.typography.pxToRem(n.spacings.gutter),paddingBottom:n.typography.pxToRem(n.spacings.gutter),lineHeight:1.45,fontSize:n.typography.pxToRem(14),color:n.colors.text.primary,alignItems:"center",justifyContent:"center",border:"1px solid ".concat(n.colors.divider),backgroundColor:n.darkMode?n.colors.pallete.grey[900]:n.colors.pallete.grey[100]}}}),{name:B}),F=function(){var n=P();return(0,m.jsx)(S.Z,{code:'import Container from "@sonnat/ui/Container";\nimport Row from "@sonnat/ui/Row";\nimport Column from "@sonnat/ui/Column";\nimport Divider from "@sonnat/ui/Divider";\nimport * as React from "react";\n\nconst Demo: React.FC = () => {\n  return (\n    <Container>\n      <Row>\n        <Column>1 of 2</Column>\n        <Column>2 of 2</Column>\n      </Row>\n      <Divider spaced />\n      <Row>\n        <Column>1 of 2</Column>\n        <Column>2 of 2</Column>\n        <Column>3 of 2</Column>\n      </Row>\n    </Container>\n  );\n};\n\nexport default Demo;\n',children:(0,m.jsx)(i.Fragment,{children:(0,m.jsxs)(d.Z,{children:[(0,m.jsxs)(w,{children:[(0,m.jsx)(I,{className:n.col,children:"1 of 2"}),(0,m.jsx)(I,{className:n.col,children:"2 of 2"})]}),(0,m.jsx)(z.Z,{spaced:!0}),(0,m.jsxs)(w,{children:[(0,m.jsx)(I,{className:n.col,children:"1 of 3"}),(0,m.jsx)(I,{className:n.col,children:"2 of 3"}),(0,m.jsx)(I,{className:n.col,children:"3 of 3"})]})]})})})};F.displayName=B;var W=F,A="ColumnWrappingDemo",E=(0,y.Z)((function(n){return{col:{display:"flex",paddingTop:n.typography.pxToRem(n.spacings.gutter),paddingBottom:n.typography.pxToRem(n.spacings.gutter),lineHeight:1.45,fontSize:n.typography.pxToRem(14),color:n.colors.text.primary,alignItems:"center",justifyContent:"center",border:"1px solid ".concat(n.colors.divider),backgroundColor:n.darkMode?n.colors.pallete.grey[900]:n.colors.pallete.grey[100]}}}),{name:A}),_=function(){var n=E();return(0,m.jsx)(S.Z,{code:'import Container from "@sonnat/ui/Container";\nimport Row from "@sonnat/ui/Row";\nimport Column from "@sonnat/ui/Column";\nimport * as React from "react";\n\nconst Demo: React.FC = () => {\n  return (\n    <Container>\n      <Row>\n        <Column all={8}>Column(8)</Column>\n        <Column all={4}>Column(4)</Column>\n        <Column all={12}>Column(12)</Column>\n        <Column>Column(auto)</Column>\n        <Column>Column(auto)</Column>\n      </Row>\n    </Container>\n  );\n};\n\nexport default Demo;\n',children:(0,m.jsx)(i.Fragment,{children:(0,m.jsx)(d.Z,{children:(0,m.jsxs)(w,{children:[(0,m.jsx)(I,{all:8,className:n.col,children:"Column(8)"}),(0,m.jsx)(I,{all:4,className:n.col,children:"Column(4)"}),(0,m.jsx)(I,{all:12,className:n.col,children:"Column(12)"}),(0,m.jsx)(I,{className:n.col,children:"Column(auto)"}),(0,m.jsx)(I,{className:n.col,children:"Column(auto)"})]})})})})};_.displayName=A;var G=_,M="ColumnWrappingDemo",L=(0,y.Z)((function(n){return{col:{display:"flex",paddingTop:n.typography.pxToRem(n.spacings.gutter),paddingBottom:n.typography.pxToRem(n.spacings.gutter),lineHeight:1.45,fontSize:n.typography.pxToRem(14),color:n.colors.text.primary,alignItems:"center",justifyContent:"center",border:"1px solid ".concat(n.colors.divider),backgroundColor:n.darkMode?n.colors.pallete.grey[900]:n.colors.pallete.grey[100]}}}),{name:M}),H=function(){var n=L();return(0,m.jsx)(S.Z,{code:'import Container from "@sonnat/ui/Container";\nimport Row from "@sonnat/ui/Row";\nimport Column from "@sonnat/ui/Column";\nimport * as React from "react";\n\nconst Demo: React.FC = () => {\n  return (\n    <Container>\n      <Row>\n        <Column all={9}>Column(9)</Column>\n        <Column all={4}>Column(4)</Column>\n        <Column all={6}>Column(6)</Column>\n      </Row>\n  </Container>\n  );\n};\n\nexport default Demo;\n',children:(0,m.jsx)(i.Fragment,{children:(0,m.jsx)(d.Z,{children:(0,m.jsxs)(w,{children:[(0,m.jsx)(I,{all:9,className:n.col,children:"Column(9)"}),(0,m.jsx)(I,{all:4,className:n.col,children:"Column(4)"}),(0,m.jsx)(I,{all:6,className:n.col,children:"Column(6)"})]})})})})};H.displayName=M;var X=H,q="ColumnOrderingDemo",U=(0,y.Z)((function(n){return{col:{display:"flex",paddingTop:n.typography.pxToRem(n.spacings.gutter),paddingBottom:n.typography.pxToRem(n.spacings.gutter),lineHeight:1.45,fontSize:n.typography.pxToRem(14),color:n.colors.text.primary,alignItems:"center",justifyContent:"center",border:"1px solid ".concat(n.colors.divider),backgroundColor:n.darkMode?n.colors.pallete.grey[900]:n.colors.pallete.grey[100]}}}),{name:q}),J=function(){var n=U();return(0,m.jsx)(S.Z,{code:'import Container from "@sonnat/ui/Container";\nimport Row from "@sonnat/ui/Row";\nimport Column from "@sonnat/ui/Column";\nimport * as React from "react";\n\nconst Demo: React.FC = () => {\n  return (\n    <Container>\n      <Row>\n        <Column>\n          First element with no order applied\n        </Column>\n        <Column all={{ order: 5 }}>\n          Second element with a larger order\n        </Column>\n        <Column all={{ order: 1 }}>\n          Third element with a smaller order\n        </Column>\n      </Row>\n    </Container>\n  );\n};\n\nexport default Demo;\n',children:(0,m.jsx)(i.Fragment,{children:(0,m.jsx)(d.Z,{children:(0,m.jsxs)(w,{children:[(0,m.jsx)(I,{className:n.col,children:"First element with no order applied"}),(0,m.jsx)(I,{all:{order:5},className:n.col,children:"Second element with a larger order"}),(0,m.jsx)(I,{all:{order:1},className:n.col,children:"Third element with a smaller order"})]})})})})};J.displayName=q;var K=J,Q="ColumnOffsettingDemo",V=(0,y.Z)((function(n){return{col:{display:"flex",paddingTop:n.typography.pxToRem(n.spacings.gutter),paddingBottom:n.typography.pxToRem(n.spacings.gutter),lineHeight:1.45,fontSize:n.typography.pxToRem(14),color:n.colors.text.primary,alignItems:"center",justifyContent:"center",border:"1px solid ".concat(n.colors.divider),backgroundColor:n.darkMode?n.colors.pallete.grey[900]:n.colors.pallete.grey[100]}}}),{name:Q}),Y=function(){var n=V();return(0,m.jsx)(S.Z,{code:'import Container from "@sonnat/ui/Container";\nimport Row from "@sonnat/ui/Row";\nimport Column from "@sonnat/ui/Column";\nimport * as React from "react";\n\nconst Demo: React.FC = () => {\n  return (\n    <Container>\n      <Row>\n        <Column all={{ size: 4 }}>\n          Column(4)\n        </Column>\n        <Column all={{ size: 4, offset: 4 }}>\n          Column(4) / Offset(4)\n        </Column>\n        <Column all={{ size: 6, offset: 3 }}>\n          Column(6) / Offset(3)\n        </Column>\n      </Row>\n    </Container>\n  );\n};\n\nexport default Demo;\n',children:(0,m.jsx)(i.Fragment,{children:(0,m.jsx)(d.Z,{children:(0,m.jsxs)(w,{children:[(0,m.jsx)(I,{all:{size:4},className:n.col,children:"Column(4)"}),(0,m.jsx)(I,{all:{size:4,offset:4},className:n.col,children:"Column(4) / Offset(4)"}),(0,m.jsx)(I,{all:{size:6,offset:3},className:n.col,children:"Column(6) / Offset(3)"})]})})})})};Y.displayName=Q;var $=Y,nn=o(9008),en=o(3257),on=o(1919);function tn(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.push.apply(o,t)}return o}function ln(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?tn(Object(o),!0).forEach((function(e){(0,t.Z)(n,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):tn(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}var rn={title:"Column",description:"A column is one or more vertical blocks of content positioned on a page, separated by gutters.",getLayout:function(){return function(n){return(0,a.kt)(c.Z,{mdxType:"WithSidebar"},n)}}},an={meta:rn};function sn(n){var e=n.components,o=(0,r.Z)(n,["components"]);return(0,a.kt)("wrapper",ln(ln(ln({},an),o),{},{components:e,mdxType:"MDXLayout"}),(0,a.kt)(nn.default,{mdxType:"Head"},(0,on.aT)("".concat(rn.title," | Sonnat Developer Tools, React Components & Resources")),(0,on.u2)(rn.description),(0,on.ai)("".concat(en.z,"/docs/components/").concat(rn.title)),(0,on.hL)([].concat((0,l.Z)(en.t),["column","\u0633\u062a\u0648\u0646"]))),(0,a.kt)("h1",null,(0,a.kt)("span",null,rn.title),(0,a.kt)(u.Z,{anchorId:"overview",mdxType:"AnchorButton"}),(0,a.kt)(s.Z,{href:"pages/docs/components/".concat(rn.title,".mdx"),mdxType:"PageEditButton"})),(0,a.kt)("p",null,rn.description),(0,a.kt)("p",null,"Columns are incredibly flexible. There are 12 template columns available per row, allowing you to create different combinations of elements that span any number of columns. Column widths are set in percentages so you always have the same relative sizing."),(0,a.kt)("p",null,"When building grid layouts, all content goes in columns. The hierarchy of grid goes from container to row to column to your content."),(0,a.kt)("div",{"data-notebox":!0,style:{marginTop:0}},"Please note that columns should be used in flex containers (preferably"," ",(0,a.kt)("a",{href:"/docs/components/Row",title:"Row component"},"rows"),") in order to work!"),(0,a.kt)("p",null,"To set your column settings you can use one of the following methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("strong",null,"Pass value as ",(0,a.kt)("inlineCode",null,"GridNumbers"),":")," ","This value will be used as the columns width. The"," ",(0,a.kt)("inlineCode",null,"GridNumbers")," are:",(0,a.kt)("code",{className:"language-typescript"},'type GridNumbers =\n  | 1 | 2 | 3 | 4 | 5 | 6\n  | 7 | 8 | 9 | 10 | 11 | 12\n  | "1" | "2" | "3" | "4" | "5" | "6"\n  | "7" | "8" | "9" | "10" | "11" | "12";')),(0,a.kt)("li",null,(0,a.kt)("strong",null,"Pass value as an ",(0,a.kt)("inlineCode",null,"object")," with the following interface: ",(0,a.kt)("code",{className:"language-typescript"},"interface IColumnObject {\n  size?: GridNumbers;\n  order?: GridNumbers;\n  offset?: GridNumbers;\n}")))),(0,a.kt)("h2",null,(0,a.kt)("span",null,"Auto-width Columns"),(0,a.kt)(u.Z,{anchorId:"auto-width-columns",mdxType:"AnchorButton"})),(0,a.kt)("p",null,"If you don't provide any width property, we will set the widths automatically using the ",(0,a.kt)("inlineCode",null,"flex-grow")," (they will end up having an equal width)."),(0,a.kt)(W,{mdxType:"ColumnEqualWidthDemo"}),(0,a.kt)("h2",null,(0,a.kt)("span",null,"Columns With Different Widths"),(0,a.kt)(u.Z,{anchorId:"with-different-widths",mdxType:"AnchorButton"})),(0,a.kt)(G,{mdxType:"ColumnWithDifferentWidthDemo"}),(0,a.kt)("h2",null,(0,a.kt)("span",null,"Column Wrapping"),(0,a.kt)(u.Z,{anchorId:"column-wrapping",mdxType:"AnchorButton"})),(0,a.kt)("p",null,"If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line."),(0,a.kt)(X,{mdxType:"ColumnWrappingDemo"}),(0,a.kt)("h2",null,(0,a.kt)("span",null,"Column Reordering"),(0,a.kt)(u.Z,{anchorId:"column-reordering",mdxType:"AnchorButton"})),(0,a.kt)(K,{mdxType:"ColumnOrderingDemo"}),(0,a.kt)("h2",null,(0,a.kt)("span",null,"Column Offsetting"),(0,a.kt)(u.Z,{anchorId:"column-offsetting",mdxType:"AnchorButton"})),(0,a.kt)($,{mdxType:"ColumnOffsettingDemo"}),(0,a.kt)("h2",null,(0,a.kt)("span",null,"API"),(0,a.kt)(u.Z,{anchorId:"api",mdxType:"AnchorButton"})),(0,a.kt)("p",null,"Learn more about the properties and the customization points."),(0,a.kt)("h3",null,(0,a.kt)("span",null,"Usage"),(0,a.kt)(u.Z,{anchorId:"usage",mdxType:"AnchorButton"})),(0,a.kt)("pre",null,(0,a.kt)("code",ln({parentName:"pre"},{className:"language-typescript"}),'// recommended\nimport Column from "@sonnat/ui/Column";\n\n//or\nimport { Column } from "@sonnat/ui";\n')),(0,a.kt)("h3",null,(0,a.kt)("span",null,"Properties"),(0,a.kt)(u.Z,{anchorId:"properties",mdxType:"AnchorButton"})),(0,a.kt)("p",null,"Note that the documentation avoids mentioning all the native props (there are a lot) in this section of the components."),(0,a.kt)("table",{cols:4},(0,a.kt)("caption",null,"Column Properties"),(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Default"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"children"),(0,a.kt)("td",null,"node"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"The content of the column.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"className"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"Append to the class names applied to the component so you can override or extend the styles.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"all"),(0,a.kt)("td",null,"number",(0,a.kt)("br",null),"| string",(0,a.kt)("br",null),"| object"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"Defines the number of grids the component is going to use. It's applied for the all breakpoints if not overridden.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"xxs"),(0,a.kt)("td",null,"number",(0,a.kt)("br",null),"| string",(0,a.kt)("br",null),"| object"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"Defines the number of grids the component is going to use. It's applied for the ",(0,a.kt)("inlineCode",null,"xxs")," breakpoints if not overridden.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"xs"),(0,a.kt)("td",null,"number",(0,a.kt)("br",null),"| string",(0,a.kt)("br",null),"| object"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"Defines the number of grids the component is going to use. It's applied for the ",(0,a.kt)("inlineCode",null,"xs")," breakpoints if not overridden.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"sm"),(0,a.kt)("td",null,"number",(0,a.kt)("br",null),"| string",(0,a.kt)("br",null),"| object"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"Defines the number of grids the component is going to use. It's applied for the ",(0,a.kt)("inlineCode",null,"sm")," breakpoints if not overridden.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"md"),(0,a.kt)("td",null,"number",(0,a.kt)("br",null),"| string",(0,a.kt)("br",null),"| object"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"Defines the number of grids the component is going to use. It's applied for the ",(0,a.kt)("inlineCode",null,"md")," breakpoints if not overridden.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"lg"),(0,a.kt)("td",null,"number",(0,a.kt)("br",null),"| string",(0,a.kt)("br",null),"| object"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"Defines the number of grids the component is going to use. It's applied for the ",(0,a.kt)("inlineCode",null,"lg")," breakpoints if not overridden.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"xlg"),(0,a.kt)("td",null,"number",(0,a.kt)("br",null),"| string",(0,a.kt)("br",null),"| object"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"Defines the number of grids the component is going to use. It's applied for the ",(0,a.kt)("inlineCode",null,"xlg")," breakpoints if not overridden."))),(0,a.kt)("tfoot",null,(0,a.kt)("tr",null,(0,a.kt)("td",{colSpan:"4"},(0,a.kt)("ul",null,(0,a.kt)("li",null,"The ",(0,a.kt)("inlineCode",null,"ref")," is forwarded to the root element."),(0,a.kt)("li",null,"Any other properties supplied will be provided to the root element.")))))))}sn.isMDXComponent=!0},4905:function(n,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/components/Column",function(){return o(5278)}])},9762:function(n,e,o){"use strict";o.d(e,{Z:function(){return a}});var t=o(7707),l=o(9391),r=o(355),i=o(5678);function a(n){return(0,t.Z)(n)||(0,l.Z)(n)||(0,r.Z)(n)||(0,i.Z)()}}},function(n){n.O(0,[9774,3679,1161,6156,320,2652,1635,9481,9701],(function(){return e=4905,n(n.s=e);var e}));var e=n.O();_N_E=e}]);