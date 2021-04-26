(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6343],{4181:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var l=n(2122),o=n(2949),r=n(7294),a=function(){var e=!1,t=function(){};try{var n=Object.defineProperty({},"passive",{get:function(){return e=!0,null}});window.addEventListener("test",t,n),window.removeEventListener("test",t,n)}catch(l){return!1}return e};function i(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=e.element,i=void 0===n?null:n,c=e.eventName,u=void 0===c?"":c,d=e.listener,s=void 0===d?function(){}:d,h=e.options,p=void 0===h?{useCapture:!1}:h,k=(0,r.useRef)();(0,r.useEffect)((function(){k.current=s}),[s]),(0,r.useEffect)((function(){var e=function(e){return k.current(e)},n=p.useCapture,r=(0,o.Z)(p,["useCapture"]),c=a()?(0,l.Z)({capture:n||!1},r):n||!1;return i&&t&&i.addEventListener(u,e,c),function(){i&&i.removeEventListener(u,e,c)}}),[i,u,t,p])}},4295:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return q},meta:function(){return A}});var l=n(6265),o=n(8140),r=n(8347),a=n(7294),i=n(3905),c=n(6156),u=n(4699),d=n(2949),s=n(2122),h=n(5697),p=n.n(h),k=n(4184),m=n.n(k),b=n(8448),f=n(4181),g=n(4957),v=n(1424),w=n(4425),C=n(8683),y="Switch",x=["medium","small"],S=(0,w.Z)((function(e){var t=e.colors,n=e.darkMode,l=e.direction,o=e.mixins.useDisableUserSelect,r=e.typography,a=r.pxToRem,i=r.useText;return{root:{direction:l,fontFamily:r.fontFamily[l],display:"inline-flex",alignItems:"center",flexDirection:"row-reverse",verticalAlign:"middle","&$checked$disabled":{"& $track":{pointerEvents:"none"},"& $indicator:after":{backgroundColor:t.divider,pointerEvents:"none"}}},label:(0,s.Z)({},i({fontSize:a(16),color:t.text.primary}),"rtl"===l?{marginLeft:a(4)}:{marginRight:a(4)}),cell:{marginRight:a(9),marginLeft:a(9),position:"relative",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",flexShrink:0,"&:hover $button:before":{transform:"scale(1)",opacity:"1"},"&:active $button:before":{backgroundColor:n?t.createWhiteColor({alpha:.08}):t.createBlackColor({alpha:.08})}},input:{width:"100%",height:"100%",zIndex:"1",cursor:"inherit",opacity:0,margin:0,appearance:"none !important",WebkitTapHighlightColor:"rgba(0, 0, 0, 0) !important"},button:(0,s.Z)({},"rtl"===l?{right:a(-9)}:{left:a(-9)},{borderRadius:"50%",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",zIndex:2,transition:"120ms cubic-bezier(0.4, 0, 0.2, 1)","&:before":{content:'""',width:"100%",height:"100%",borderRadius:"50%",position:"absolute",backgroundColor:n?t.createWhiteColor({alpha:.04}):t.createBlackColor({alpha:.04}),transform:"scale(0)",opacity:"0",zIndex:"-1",transformOrigin:"center",transition:"240ms ease"}}),track:{width:"100%",height:"100%",borderRadius:a(12),position:"absolute",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-end",padding:a(2),boxSizing:"border-box",transition:"240ms ease",backgroundColor:n?t.createWhiteColor({alpha:.24}):t.createBlackColor({alpha:.24}),pointerEvents:"none"},handle:{borderRadius:"50%",backgroundColor:t.white,boxShadow:"0px 2px 4px ".concat(t.createBlackColor({alpha:.24})),zIndex:"2",pointerEvents:"none"},indicator:{width:"100%",height:"100%",borderRadius:a(12),top:"0",right:"0",position:"absolute",overflow:"hidden",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center",backfaceVisibility:"hidden",transform:"translate3d(0, 0, 0)",zIndex:"1","&:after":(0,s.Z)({},"rtl"===l?{right:a(-12)}:{left:a(-12)},o(),{content:'""',width:a(48),height:a(48),borderRadius:"50%",backgroundColor:n?t.primary.light:t.primary.origin,position:"absolute",opacity:"0",transform:"scale(0)",transformOrigin:"center",transition:"transform 360ms cubic-bezier(0.4, 0, 0.2, 1), opacity 500ms ease",pointerEvents:"none",zIndex:"-1"})},focused:{"& $button:before":{transform:"scale(1)",opacity:"1",backgroundColor:n?t.createWhiteColor({alpha:.12}):t.createBlackColor({alpha:.12})},"&$checked $button:before":{backgroundColor:n?(0,C.zX)(t.primary.light,{alpha:.12}):t.createPrimaryColor({alpha:.12})}},disabled:{cursor:"not-allowed !important","& $label":{pointerEvents:"none",color:t.text.disabled},"& $cell, & $input, & $track":{pointerEvents:"none"},"& $track":{backgroundColor:n?t.createWhiteColor({alpha:.08}):t.createBlackColor({alpha:.08})},"& $handle":{boxShadow:"none",backgroundColor:n?t.black:t.white}},checked:{"& $indicator:after":{opacity:1,transform:"scale(1.25)"},"& $cell:active $button:before":{backgroundColor:n?(0,C.zX)(t.primary.light,{alpha:.08}):t.createPrimaryColor({alpha:.08})},"& $button:before":{backgroundColor:n?(0,C.zX)(t.primary.light,{alpha:.04}):t.createPrimaryColor({alpha:.04})}},medium:{minHeight:a(42),"& $cell":{width:a(42),height:a(24)},"& $handle":{width:a(20),height:a(20)},"& $button":{width:a(42),height:a(42)},"&$checked $button":(0,s.Z)({},"rtl"===l?{transform:"translateX(".concat(a(-18),")")}:{transform:"translateX(".concat(a(18),")")})},small:{minHeight:a(36),"& $cell":{width:a(32),height:a(18)},"& $handle":{width:a(16),height:a(16)},"& $button":{width:a(36),height:a(36)},"&$checked $button":(0,s.Z)({},"rtl"===l?{transform:"translateX(".concat(a(-14),")")}:{transform:"translateX(".concat(a(14),")")})}}}),{name:"Sonnat".concat(y)}),Z=a.memo(a.forwardRef((function(e,t){var n,l=e.className,o=e.onChange,r=e.onFocus,i=e.onBlur,h=e.label,p=e.defaultChecked,k=e.value,w=e.name,C=e.checked,Z=e.inputProps,E=void 0===Z?{}:Z,P=e.labelProps,T=void 0===P?{}:P,N=e.readOnly,O=void 0!==N&&N,j=e.hasError,$=void 0!==j&&j,B=e.disabled,z=void 0!==B&&B,I=e.required,D=void 0!==I&&I,R=e.size,F=void 0===R?"medium":R,L=(0,d.Z)(e,["className","onChange","onFocus","onBlur","label","defaultChecked","value","name","checked","inputProps","labelProps","readOnly","hasError","disabled","required","size"]),_=E.className,A=E.id,X=E.ref,q=E.name,W=E.value,H=E.onChange,M=E.onFocus,Y=E.onBlur,U=E.readOnly,V=void 0!==U&&U,G=E.checked,J=E.defaultChecked,K=(0,d.Z)(E,["className","id","ref","name","value","onChange","onFocus","onBlur","readOnly","checked","defaultChecked"]),Q=T.className,ee=(0,d.Z)(T,["className"]),te=(0,a.useRef)(null!=C?void 0:null!=p&&p).current,ne=(0,a.useRef)(),le=(0,g.Z)(ne,X),oe=S(),re=(0,b.Z)(),ae=(0,v.Z)(C,te,y),ie=(0,u.Z)(ae,2),ce=ie[0],ue=ie[1],de=(0,a.useState)(!1),se=(0,u.Z)(de,2),he=se[0],pe=se[1],ke=(0,a.useState)(!1),me=(0,u.Z)(ke,2),be=me[0],fe=me[1],ge=!!V||!!O;null!=G&&console.error("Sonnat: do not pass the `checked` prop as a `inputProps` property!"),null!=J&&console.error("Sonnat: do not pass the `defaultChecked` prop as a `inputProps` property!"),null!=q&&null!=w&&console.error(["Sonnat: You are passing the `name` prop twice.(one as `name` prop and the other one as a property of `inputProps`)",'We are assuming `name="'.concat(q,'"`!')].join("\n")),null!=W&&null!=k&&console.error(["Sonnat: You are passing the `value` prop twice.(one as `value` prop and the other one as a property of `inputProps`)",'We are assuming `value="'.concat(W,'"`!')].join("\n"));var ve=q||w,we=W||k;(0,a.useEffect)((function(){return pe(!0),function(){return pe(!1)}}),[]);var Ce=(0,a.useCallback)((function(e){e.defaultPrevented||" "!==e.key&&"Spacebar"!==e.key||(e.preventDefault?e.preventDefault():e.returnValue=null,ne.current.click())}),[]),ye={name:ve,size:re?re.size:F,disabled:re?re.disabled:z,hasError:re?re.hasError:$,required:re?re.required:D,onFocus:function(e){he&&(e.persist(),ye.disabled||ge||(r&&r(e),M&&M(e),re&&re.onFocus?re.onFocus(e):fe(!0)))},onBlur:function(e){he&&(e.persist(),ye.disabled||ge||(i&&i(e),Y&&Y(e),re&&re.onBlur?re.onBlur(e):fe(!1)))},onChange:function(e){he&&(e.persist(),ye.disabled||ge||(o&&o(e,!ce),H&&H(e,!ce),ue(!ce)))}},xe=A||(ye.name&&we?"switch-".concat(ye.name,"-").concat(we):void 0);return(0,f.Z)({element:"undefined"!==typeof document?document:void 0,eventName:"keyup",listener:Ce},be),a.createElement("div",(0,s.Z)({"aria-disabled":ye.disabled,ref:t,className:m()(oe.root,l,(n={},(0,c.Z)(n,oe[ye.size],x.includes(ye.size)),(0,c.Z)(n,oe.disabled,ye.disabled),(0,c.Z)(n,oe.focused,be),(0,c.Z)(n,oe.checked,ce),n))},L),a.createElement("div",{className:oe.cell},a.createElement("input",(0,s.Z)({id:xe,tabIndex:ye.disabled?-1:0,name:ye.name,value:we,disabled:ye.disabled,required:ye.required,className:m()(oe.input,_),onChange:ye.onChange,type:"checkbox",onFocus:ye.onFocus,onBlur:ye.onBlur,checked:ce,ref:le},K)),a.createElement("div",{className:oe.track},a.createElement("div",{className:oe.button},a.createElement("div",{className:oe.handle})),a.createElement("div",{className:oe.indicator}))),h&&a.createElement("label",(0,s.Z)({className:m()(oe.label,Q),htmlFor:xe},ee),h))})));Z.displayName=y,Z.propTypes={className:p().string,label:p().string,name:p().string,value:p().string,readOnly:p().bool,checked:p().bool,defaultChecked:p().bool,disabled:p().bool,required:p().bool,hasError:p().bool,onChange:p().func,onFocus:p().func,onBlur:p().func,inputProps:p().object,labelProps:p().object,size:p().oneOf(x)};var E=Z,P=n(7703),T=n(9387),N=n(3161),O=n(5893),j=n(2292),$=n(7913),B=n(3910),z=function(){var e=a.useState(!1),t=(0,j.Z)(e,2),n=t[0],l=t[1];return(0,O.jsx)(B.Z,{flexDirection:"column",code:'import Switch from "@sonnat/ui/Switch";\nimport Button from "@sonnat/ui/Button";\nimport * as React from "react";\n\nconst Demo: React.FC = () => {\n  const [checked, setChecked] = React.useState(false);\n\n  return (\n    <React.Fragment>\n      <Button\n        variant="outlined"\n        size="small"\n        label="Toggle the Switch"\n        onClick={() => void setChecked(c => !c)}\n      />\n      <Switch\n        label="Label"\n        checked={checked}\n        inputProps={{ id: "sw-box-2" }}\n        onChange={() => void setChecked(c => !c)}\n      />\n    </React.Fragment>\n  );\n};\n\nexport default Demo;\n',children:(0,O.jsxs)(a.Fragment,{children:[(0,O.jsx)($.Z,{variant:"outlined",size:"small",label:"Toggle the Switch",onClick:function(){l((function(e){return!e}))}}),(0,O.jsx)(E,{label:"Label",checked:n,inputProps:{id:"sw-box-2"},onChange:function(){l((function(e){return!e}))}})]})})};z.displayName="SwitchControlledDemo";var I=z,D=n(9008),R=n(3257),F=n(1919);function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A={title:"Switch",description:"Switches are used for switching between two states or an on-off state.",getLayout:function(){return function(e){return(0,i.kt)(N.Z,{mdxType:"WithSidebar"},e)}}},X={meta:A};function q(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",_(_(_({},X),n),{},{components:t,mdxType:"MDXLayout"}),(0,i.kt)(D.default,{mdxType:"Head"},(0,F.aT)("".concat(A.title," | Sonnat Developer Tools, React Components & Resources")),(0,F.u2)(A.description),(0,F.ai)("".concat(R.z,"/docs/components/").concat(A.title)),(0,F.hL)([].concat((0,o.Z)(R.t),["switch"]))),(0,i.kt)("h1",null,(0,i.kt)("span",null,A.title),(0,i.kt)(T.Z,{anchorId:"overview",mdxType:"AnchorButton"}),(0,i.kt)(P.Z,{href:"pages/docs/components/".concat(A.title,".mdx"),mdxType:"PageEditButton"})),(0,i.kt)("p",null,A.description),(0,i.kt)("h2",null,(0,i.kt)("span",null,"Example"),(0,i.kt)(T.Z,{anchorId:"example",mdxType:"AnchorButton"})),(0,i.kt)(B.Z,{code:'<Switch />\n<Switch disabled />\n<Switch defaultChecked disabled />\n<Switch inputProps={{ id: "sw-box-0" }} defaultChecked label="Label" />\n<Switch\n  inputProps={{ id: "sw-box-1" }}\n  defaultChecked\n  label="Label"\n  disabled\n/>',mdxType:"DemoBox"},(0,i.kt)("div",{className:"demoSubject"},(0,i.kt)(E,{mdxType:"Switch"}),(0,i.kt)(E,{disabled:!0,mdxType:"Switch"}),(0,i.kt)(E,{defaultChecked:!0,disabled:!0,mdxType:"Switch"})),(0,i.kt)("div",{className:"demoSubject"},(0,i.kt)(E,{inputProps:{id:"sw-box-0"},defaultChecked:!0,label:"Label",mdxType:"Switch"})),(0,i.kt)("div",{className:"demoSubject"},(0,i.kt)(E,{inputProps:{id:"sw-box-1"},defaultChecked:!0,label:"Label",disabled:!0,mdxType:"Switch"}))),(0,i.kt)("h2",null,(0,i.kt)("span",null,"Controlled Switches"),(0,i.kt)(T.Z,{anchorId:"controlled-switches",mdxType:"AnchorButton"})),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",null,"checked"),", and"," ",(0,i.kt)("inlineCode",null,"onChange")," properties to control the behaviour of the switch."),(0,i.kt)(I,{mdxType:"SwitchControlledDemo"}),(0,i.kt)("h2",null,(0,i.kt)("span",null,"API"),(0,i.kt)(T.Z,{anchorId:"api",mdxType:"AnchorButton"})),(0,i.kt)("p",null,"Learn more about the properties and the customization points."),(0,i.kt)("h3",null,(0,i.kt)("span",null,"Usage"),(0,i.kt)(T.Z,{anchorId:"usage",mdxType:"AnchorButton"})),(0,i.kt)("pre",null,(0,i.kt)("code",_({parentName:"pre"},{className:"language-typescript"}),'// recommended\nimport Switch from "@sonnat/ui/Switch";\n\n//or\nimport { Switch } from "@sonnat/ui";\n')),(0,i.kt)("h3",null,(0,i.kt)("span",null,"Properties"),(0,i.kt)(T.Z,{anchorId:"properties",mdxType:"AnchorButton"})),(0,i.kt)("p",null,"Note that the documentation avoids mentioning all the native props (there are a lot) in this section of the components."),(0,i.kt)("table",{cols:4},(0,i.kt)("caption",null,"Switch Properties"),(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Name"),(0,i.kt)("th",null,"Type"),(0,i.kt)("th",null,"Default"),(0,i.kt)("th",null,"Description"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"className"),(0,i.kt)("td",null,"string"),(0,i.kt)("td",null,"-"),(0,i.kt)("td",null,"Append to the class names applied to the component so you can override or extend the styles.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"label"),(0,i.kt)("td",null,"string"),(0,i.kt)("td",null,"-"),(0,i.kt)("td",null,"If ",(0,i.kt)("inlineCode",null,"label")," was provided, a"," ",(0,i.kt)("inlineCode",null,"<label>")," element will be rendered next to the switch.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"name"),(0,i.kt)("td",null,"string"),(0,i.kt)("td",null,"-"),(0,i.kt)("td",null,"The name of the switch.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"value"),(0,i.kt)("td",null,"string"),(0,i.kt)("td",null,"-"),(0,i.kt)("td",null,"The value of the switch. The DOM API casts this to a string.",(0,i.kt)("br",null),"The browser uses ",(0,i.kt)("inlineCode",null,'"on"')," as the default value.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"size"),(0,i.kt)("td",null,'"medium"',(0,i.kt)("br",null),'| "small"'),(0,i.kt)("td",null,'"medium"'),(0,i.kt)("td",null,"The size of the switch.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"readOnly"),(0,i.kt)("td",null,"boolean"),(0,i.kt)("td",null,"false"),(0,i.kt)("td",null,"If ",(0,i.kt)("inlineCode",null,"true"),", the switch will be read-only.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"checked"),(0,i.kt)("td",null,"boolean"),(0,i.kt)("td",null,"-"),(0,i.kt)("td",null,"If ",(0,i.kt)("inlineCode",null,"true"),", the switch will be checked.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"defaultChecked"),(0,i.kt)("td",null,"boolean"),(0,i.kt)("td",null,"-"),(0,i.kt)("td",null,"The default state of ",(0,i.kt)("inlineCode",null,"checked"),". Use when the component is not controlled.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"disabled"),(0,i.kt)("td",null,"boolean"),(0,i.kt)("td",null,"false"),(0,i.kt)("td",null,"If ",(0,i.kt)("inlineCode",null,"true"),", the switch will be disabled.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"required"),(0,i.kt)("td",null,"boolean"),(0,i.kt)("td",null,"false"),(0,i.kt)("td",null,"If ",(0,i.kt)("inlineCode",null,"true"),", the switch will be required.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"hasError"),(0,i.kt)("td",null,"boolean"),(0,i.kt)("td",null,"false"),(0,i.kt)("td",null,"If ",(0,i.kt)("inlineCode",null,"true"),", the switch will indicate invalid input.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"inputProps"),(0,i.kt)("td",null,"object"),(0,i.kt)("td",null,"-"),(0,i.kt)("td",null,"The properties applied to the ",(0,i.kt)("inlineCode",null,"input")," element.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"labelProps"),(0,i.kt)("td",null,"object"),(0,i.kt)("td",null,"-"),(0,i.kt)("td",null,"The properties applied to the ",(0,i.kt)("inlineCode",null,"label")," element.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"onChange"),(0,i.kt)("td",null,"function"),(0,i.kt)("td",null,"-"),(0,i.kt)("td",null,"The Callback fires when the state has changed.",(0,i.kt)("br",null),(0,i.kt)("em",null,(0,i.kt)("strong",null,"Signature:"))," ",(0,i.kt)("inlineCode",null,"function(event: React.ChangeEvent, checkedState: boolean) => void"),(0,i.kt)("br",null),(0,i.kt)("em",null,(0,i.kt)("strong",null,"Note:"))," ","You can also pull out the new checked state by accessing"," ",(0,i.kt)("inlineCode",null,"event.target.checked")," (boolean)."))),(0,i.kt)("tfoot",null,(0,i.kt)("tr",null,(0,i.kt)("td",{colSpan:"4"},(0,i.kt)("ul",null,(0,i.kt)("li",null,"The ",(0,i.kt)("inlineCode",null,"ref")," is forwarded to the root element."),(0,i.kt)("li",null,"Any other properties supplied will be provided to the root element.")))))))}q.isMDXComponent=!0},4189:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/components/Switch",function(){return n(4295)}])},9762:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var l=n(7707),o=n(9391),r=n(355),a=n(5678);function i(e){return(0,l.Z)(e)||(0,o.Z)(e)||(0,r.Z)(e)||(0,a.Z)()}}},function(e){e.O(0,[9774,3679,1161,6156,320,2652,1635,9481,9701],(function(){return t=4189,e(e.s=t);var t}));var t=e.O();_N_E=t}]);