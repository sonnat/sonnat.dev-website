_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{IzvI:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/components/Snackbar",function(){return n("VTtS")}])},VTtS:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return q})),n.d(t,"default",(function(){return Q}));var l=n("cpVT"),a=n("z7pX"),o=n("dhJC"),c=n("q1tI"),r=n.n(c),b=n("7ljp"),i=n("PW80"),s=n("G0Pc"),u=n("XLwr"),d=n("nKUr"),p=n("xvhg"),j=n("rePB"),O=n("ODXe"),m=n("Ff2n"),h=n("wx14"),f=n("17x9"),g=n.n(f),x=n("TSYQ"),y=n.n(x),v=n("fZnD"),S=n("YxWk"),k=n("/El1"),T=n("eZlZ"),w=n("I2tA"),C=n("0dks"),B=n("BWA8"),N="Snackbar",I=Object(T.a)((function(e){var t=e.colors,n=e.darkMode,l=e.direction,a=e.zIndexes.popover,o=e.mixins.useFontIconSize,c=e.typography,r=c.pxToRem,b=c.useText;return{root:{direction:l,fontFamily:c.fontFamily[l],minHeight:r(48),maxWidth:r(560),display:"inline-flex",alignItems:"center",padding:"0 ".concat(r(16)),borderRadius:r(4),boxShadow:"0 1px 32px 0 rgba(0, 0, 0, 0.08),\n        0 12px 16px 0 rgba(0, 0, 0, 0.12),\n        0 8px 12px -6px rgba(0, 0, 0, 0.16)",backgroundColor:n?t.pallete.grey[50]:t.pallete.grey[900],zIndex:a,position:"fixed",bottom:r(24),"& > :last-child$divider":{display:"none"},"& > :last-child$undoButton":Object(h.a)({},"rtl"===l?{marginLeft:r(-8)}:{marginRight:r(-8)}),visibility:"hidden",opacity:0,transform:"scale(0.8)",transition:"transform 360ms cubic-bezier(0, 0, 0.2, 1), visibility 200ms ease, opacity 200ms ease"},icon:Object(h.a)({},o(16),{color:n?"rgba(0, 0, 0, 0.87)":t.white,flexShrink:0,position:"relative",top:r(16),alignSelft:"flex-start","& + $text":Object(h.a)({},"rtl"===l?{marginRight:r(8)}:{marginLeft:r(8)})}),text:Object(h.a)({},b({fontSize:r(14),color:n?"rgba(0, 0, 0, 0.87)":t.white}),{padding:"".concat(r(10)," 0"),"& + $divider":{display:"none"},"& + *":Object(h.a)({},"rtl"===l?{marginRight:r(16)}:{marginLeft:r(16)})}),undoButton:{alignSelf:"flex-start",flexShrink:"0",position:"relative",top:r(8)},closeButton:Object(h.a)({},"rtl"===l?{marginLeft:r(-8)}:{marginRight:r(-8)},{alignSelf:"flex-start",flexShrink:"0",position:"relative",top:r(8)}),closeButtonIcon:{},divider:{width:r(1),backgroundColor:n?t.createBlackColor({alpha:.12}):t.createWhiteColor({alpha:.12}),margin:"0 ".concat(r(8)),alignSelf:"flex-start",height:r(24),position:"relative",top:r(12),flexShrink:"0"},left:{right:"auto",left:r(24)},right:{right:r(24),left:"auto"},center:{right:"auto",left:"50%",transform:"translateX(-50%) scale(0.8)"},open:{transform:"scale(1)",visibility:"visible",opacity:1,"&$left":{},"&$right":{},"&$center":{transform:"translateX(-50%) scale(1)"}}}}),{name:"Sonnat".concat(N)}),P=r.a.memo(r.a.forwardRef((function(e,t){var n=e.text,l=e.className,a=e.icon,o=e.onUndo,b=e.onClose,i=e.onTransitionEnd,s=e.open,u=void 0!==s&&s,d=e.undoable,p=void 0!==d&&d,f=e.closable,g=void 0!==f&&f,x=e.undoButtonLabel,T=void 0===x?"Undo":x,N=e.placement,P=void 0===N?"center":N,E=Object(m.a)(e,["text","className","icon","onUndo","onClose","onTransitionEnd","open","undoable","closable","undoButtonLabel","placement"]),z=I(),D=Object(w.a)(),R=D.darkMode,A=Object(C.a)(!R,D),L=Object(c.useState)(u),_=Object(O.a)(L,2),F=_[0],X=_[1],U=Object(c.useState)(!1),$=Object(O.a)(U,2),W=$[0],M=$[1];Object(c.useEffect)((function(){u?(X(!1),Object(k.a)((function(){return M(!0)}))):M(!1)}),[u]);return F?null:r.a.createElement(B.a,{theme:A},r.a.createElement("div",Object(h.a)({ref:t,role:"alert",onTransitionEnd:function(e){i&&i(e),W||X(!0)},className:y()(z.root,z[P],l,Object(j.a)({},z.open,W))},E),a&&r.a.createElement(S.a,{identifier:a,className:z.icon}),r.a.createElement("span",{className:z.text},n),p&&r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{size:"small",variant:"inlined",color:"secondary",label:T,className:z.undoButton,onClick:o}),g&&r.a.createElement("div",{className:z.divider})),g&&r.a.createElement(v.a,{"aria-label":"Close Button",size:"small",variant:"inlined",className:z.closeButton,leadingIcon:r.a.createElement(S.a,{identifier:"close-large",className:z.closeButtonIcon}),onClick:b})))})));P.displayName=N,P.propTypes={text:g.a.string.isRequired,className:g.a.string,icon:g.a.string,undoButtonLabel:g.a.string,placement:g.a.oneOf(["left","center","right"]),open:g.a.bool,closable:g.a.bool,undoable:g.a.bool,onClose:g.a.func,onUndo:g.a.func,onTransitionEnd:g.a.func};var E=P,z=n("UhvI"),D=function(){var e=c.useState(!1),t=Object(p.a)(e,2),n=t[0],l=t[1];return Object(d.jsx)(z.a,{code:'import Snackbar from "@sonnat/ui/Snackbar";\nimport Button from "@sonnat/ui/Button";\nimport * as React from "react";\n\nconst Demo: React.FC = () => {\n  return (\n    <React.Fragment>\n    </React.Fragment>\n  );\n};\n\nexport default Demo;',children:Object(d.jsxs)(c.Fragment,{children:[Object(d.jsx)(v.a,{label:"Toggle Snackbar",variant:"outlined",size:"small",onClick:function(){l((function(e){return!e}))}}),Object(d.jsx)(E,{text:"This is a snackbar!",open:n,closable:!0,onClose:function(){l(!1)}})]})})};D.displayName="SnackbarSimpleDemo";var R=D,A=n("Xswu"),L=n("QzrO"),_=n("hrFB"),F=n("Bs6S"),X=Object(T.a)((function(e){return{demoRow:{display:"flex","& + &":{marginTop:e.typography.pxToRem(16)}},placementControl:{alignItems:"center"}}}),{name:"SnackbarPlacementDemo"}),U=function(){var e=X(),t=c.useState("center"),n=Object(p.a)(t,2),l=n[0],a=n[1],o=c.useState(!1),r=Object(p.a)(o,2),b=r[0],i=r[1],s='<Snackbar\n  placement="'.concat(l,'"\n/>');return Object(d.jsxs)(z.a,{code:s,flexDirection:"column",horizontalAlignment:"center",children:[Object(d.jsx)("div",{className:e.demoRow,children:Object(d.jsxs)(A.a,{className:y()("demoSubject",e.placementControl),children:[Object(d.jsx)(L.a,{htmlFor:"radiogroup-horizontal-align",children:"Placement"}),Object(d.jsxs)(_.a,{id:"radiogroup-horizontal-align",defaultValue:"center",layoutDirection:"row",onChange:function(e){a(e.target.value)},children:[Object(d.jsx)(F.a,{inputProps:{id:"radiogroup-horizontal-align-left"},label:"left",value:"left"}),Object(d.jsx)(F.a,{inputProps:{id:"radiogroup-horizontal-align-center"},label:"center",value:"center"}),Object(d.jsx)(F.a,{inputProps:{id:"radiogroup-horizontal-align-right"},label:"right",value:"right"})]})]})}),Object(d.jsx)("div",{className:e.demoRow,children:Object(d.jsxs)("div",{className:"demoSubject",children:[Object(d.jsx)(v.a,{label:"Toggle Snackbar",variant:"outlined",size:"small",onClick:function(){i((function(e){return!e}))}}),Object(d.jsx)(E,{text:"The informative text!",open:b,placement:l})]})})]})};U.displayName="SnackbarPlacementDemo";var $=U,W=n("g4pe"),M=n.n(W),V=n("C6zX"),J=n("cBaE");function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var q={title:"Snackbar",description:"Displays an important message globally. The component is also known as a toast.",getLayout:function(){return function(e){return Object(b.b)(u.a,{mdxType:"WithSidebar"},e)}}},H={meta:q};function Q(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(b.b)("wrapper",Z(Z(Z({},H),n),{},{components:t,mdxType:"MDXLayout"}),Object(b.b)(M.a,{mdxType:"Head"},Object(J.e)("".concat(q.title," | Sonnat Developer Tools, React Components & Resources")),Object(J.c)(q.description),Object(J.b)("".concat(V.b,"/docs/components/").concat(q.title)),Object(J.d)([].concat(Object(a.a)(V.a),["snackbar","toast"]))),Object(b.b)("h1",null,Object(b.b)("span",null,q.title),Object(b.b)(s.a,{anchorId:"overview",mdxType:"AnchorButton"}),Object(b.b)(i.a,{href:"pages/docs/components/".concat(q.title,".mdx"),mdxType:"PageEditButton"})),Object(b.b)("p",null,q.description),Object(b.b)("p",null,"Snackbars inform users of a process that an app has performed or will perform. They appear temporarily, towards the bottom of the screen.",Object(b.b)("br",null),"They shouldn\u2019t interrupt the user experience."),Object(b.b)("p",null,"Only one snackbar may be displayed at a time."),Object(b.b)("h2",null,Object(b.b)("span",null,"Simple Snackbars"),Object(b.b)(s.a,{anchorId:"simple-snackbars",mdxType:"AnchorButton"})),Object(b.b)(R,{mdxType:"SnackbarSimpleDemo"}),Object(b.b)("h2",null,Object(b.b)("span",null,"Placement"),Object(b.b)(s.a,{anchorId:"placement",mdxType:"AnchorButton"})),Object(b.b)("p",null,"You can use ",Object(b.b)("inlineCode",null,"placement")," property to change the snackbar's horizontal placement."),Object(b.b)($,{mdxType:"SnackbarPlacementDemo"}),Object(b.b)("h2",null,Object(b.b)("span",null,"API"),Object(b.b)(s.a,{anchorId:"api",mdxType:"AnchorButton"})),Object(b.b)("p",null,"Learn more about the properties and the customization points."),Object(b.b)("h3",null,Object(b.b)("span",null,"Usage"),Object(b.b)(s.a,{anchorId:"usage",mdxType:"AnchorButton"})),Object(b.b)("pre",null,Object(b.b)("code",Z({parentName:"pre"},{className:"language-typescript"}),'// recommended\nimport Snackbar from "@sonnat/ui/Snackbar";\n\n//or\nimport { Snackbar } from "@sonnat/ui";\n')),Object(b.b)("h3",null,Object(b.b)("span",null,"Properties"),Object(b.b)(s.a,{anchorId:"properties",mdxType:"AnchorButton"})),Object(b.b)("p",null,"Note that the documentation avoids mentioning all the native props (there are a lot) in this section of the components."),Object(b.b)("table",{cols:4},Object(b.b)("caption",null,"Snackbar Properties"),Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"Name"),Object(b.b)("th",null,"Type"),Object(b.b)("th",null,"Default"),Object(b.b)("th",null,"Description"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,"text"),Object(b.b)("td",null,"string"),Object(b.b)("td",null,"-"),Object(b.b)("td",null,"The text to display.")),Object(b.b)("tr",null,Object(b.b)("td",null,"className"),Object(b.b)("td",null,"string"),Object(b.b)("td",null,"-"),Object(b.b)("td",null,"Append to the class names applied to the component so you can override or extend the styles.")),Object(b.b)("tr",null,Object(b.b)("td",null,"undoButtonLabel"),Object(b.b)("td",null,"string"),Object(b.b)("td",null,"-"),Object(b.b)("td",null,"The text to display on the undo button.")),Object(b.b)("tr",null,Object(b.b)("td",null,"icon"),Object(b.b)("td",null,"string"),Object(b.b)("td",null,"-"),Object(b.b)("td",null,"The icon placed before the text.",Object(b.b)("br",null),"The component will use it as a ",Object(b.b)("inlineCode",null,"sonnat-icon")," ","identifier.")),Object(b.b)("tr",null,Object(b.b)("td",null,"placement"),Object(b.b)("td",null,'"left"',Object(b.b)("br",null),'| "center"',Object(b.b)("br",null),'| "right"'),Object(b.b)("td",null,'"center"'),Object(b.b)("td",null,"The horizontal placement of the snackbar.")),Object(b.b)("tr",null,Object(b.b)("td",null,"open"),Object(b.b)("td",null,"boolean"),Object(b.b)("td",null,"false"),Object(b.b)("td",null,"If ",Object(b.b)("inlineCode",null,"true"),", the snackbar will be open.")),Object(b.b)("tr",null,Object(b.b)("td",null,"closable"),Object(b.b)("td",null,"boolean"),Object(b.b)("td",null,"false"),Object(b.b)("td",null,"If ",Object(b.b)("inlineCode",null,"true"),", the snackbar will have close button.")),Object(b.b)("tr",null,Object(b.b)("td",null,"undoable"),Object(b.b)("td",null,"boolean"),Object(b.b)("td",null,"false"),Object(b.b)("td",null,"If ",Object(b.b)("inlineCode",null,"true"),", the snackbar will have undo button.")),Object(b.b)("tr",null,Object(b.b)("td",null,"onClose"),Object(b.b)("td",null,"function"),Object(b.b)("td",null,"-"),Object(b.b)("td",null,"The Callback fires when the component has closed.",Object(b.b)("br",null),Object(b.b)("em",null,Object(b.b)("strong",null,"Signature:"))," ",Object(b.b)("inlineCode",null,"function() => void"))),Object(b.b)("tr",null,Object(b.b)("td",null,"onUndo"),Object(b.b)("td",null,"function"),Object(b.b)("td",null,"-"),Object(b.b)("td",null,"The Callback fires when the item has received focus.",Object(b.b)("br",null),Object(b.b)("em",null,Object(b.b)("strong",null,"Signature:"))," ",Object(b.b)("inlineCode",null,"function() => void")))),Object(b.b)("tfoot",null,Object(b.b)("tr",null,Object(b.b)("td",{colSpan:"4"},Object(b.b)("ul",null,Object(b.b)("li",null,"The ",Object(b.b)("inlineCode",null,"ref")," is forwarded to the root element."),Object(b.b)("li",null,"Any other properties supplied will be provided to the root element.")))))))}Q.isMDXComponent=!0}},[["IzvI",0,1,2,3,4,5,6,8]]]);