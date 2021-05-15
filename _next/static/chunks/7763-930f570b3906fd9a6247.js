(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7763],{7763:function(e,n,t){"use strict";t.d(n,{h:function(){return $}});var o=t(5893),r=t(4425),a=t(2379),i=t(4184),l=t.n(i),c=t(7294),s=t(4451),d=t(6265),p=t(8347),h=t(1664),m=t(1163);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,d.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var f=function(e){var n,t=e.children,r=e.href,a=e.onActive,i=e.activeClassName,s=void 0===i?"active":i,u=(0,p.Z)(e,["children","href","onActive","activeClassName"]),f=c.Children.only(t),g=(0,m.useRouter)(),v=c.useMemo((function(){return g.pathname===r}),[r,g.pathname]);return c.useEffect((function(){v&&a&&a()}),[v,a]),(0,o.jsx)(h.default,b(b({href:r},u),{},{children:c.cloneElement(f,{className:l()(null===(n=f.props)||void 0===n?void 0:n.className,(0,d.Z)({},s,v))})}))},g=t(7681);function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){(0,d.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var C=c.memo((function(e){var n=e.className,t=e.children,r=(0,p.Z)(e,["className","children"]);return(0,o.jsx)("div",y(y({className:n},r),{},{children:t}))}));C.displayName="CollapsableContent";var x=C,O=c.createContext({isExpanded:!1,setExpanded:null});function j(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?j(Object(t),!0).forEach((function(n){(0,d.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var S=function(e){var n=e.children,t=(0,p.Z)(e,["children"]),r=c.useContext(O).setExpanded,a=c.useCallback((function(){null===r||void 0===r||r(!0)}),[]);return(0,o.jsx)(f,k(k({onActive:a},t),{},{children:n}))},I=t(2292),w=t(6180),N="CollapsableNavItem",T=(0,r.Z)({root:{width:"100%"},collapseWrapper:{transition:"height 360ms ease"},collapseContainer:{}},{name:N}),P=c.memo((function(e){var n=e.trigger,t=e.content,r=e.isExpanded,a=void 0!==r&&r,i=T(),l=c.useState(!a),s=(0,I.Z)(l,2),d=s[0],p=s[1],h=c.useContext(O).setExpanded,m={onClick:c.useCallback((function(){p((function(e){return!e}))}),[]),active:!d},u=c.cloneElement(n,m),b=c.useMemo((function(){return{isExpanded:!d,setExpanded:function(e){p(!e),h&&h(e)}}}),[d,h]);return(0,o.jsx)("div",{className:i.root,children:(0,o.jsxs)(O.Provider,{value:b,children:[u,(0,o.jsx)(w.Collapse,{theme:{collapse:i.collapseWrapper,content:i.collapseContainer},isOpened:!d,children:t})]})})}));P.displayName=N;var R=P,B="CollapsableTrigger",D=(0,r.Z)((function(e){return{root:{},title:{color:e.colors.text.secondary,transition:"color 360ms ease","&:hover":{color:e.colors.text.primary}},divider:{width:1,height:"calc(100% - ".concat(e.typography.pxToRem(24),")"),marginRight:e.typography.pxToRem(10),marginLeft:e.typography.pxToRem(8),backgroundColor:e.colors.divider},active:{"& $title":{color:e.colors.text.primary,fontWeight:e.typography.fontWeight.medium}}}}),{name:B}),E=c.memo((function(e){var n=e.className,t=e.title,r=e.onClick,a=e.active,i=void 0!==a&&a,c=D();return(0,o.jsx)("div",{role:"button",className:l()(c.root,n,(0,d.Z)({},c.active,i)),onClick:r,children:(0,o.jsx)(s.Z,{title:t,variant:"bodySmall",className:c.title,children:t})})}));E.displayName=B;var L=E,Z={byChild:{Installation:{label:"Installation",href:"/docs/installation"},Components:{label:"Components",byChild:{Actions:{label:"Actions",byChild:{Button:{label:"Button",href:"/docs/components/Button"}},children:["Button"]},Controls:{label:"Controls",byChild:{Checkbox:{label:"Checkbox",href:"/docs/components/Checkbox"},CheckGroup:{label:"CheckGroup",href:"/docs/components/CheckGroup"},Radio:{label:"Radio",href:"/docs/components/Radio"},RadioGroup:{label:"RadioGroup",href:"/docs/components/RadioGroup"},Switch:{label:"Switch",href:"/docs/components/Switch"},FormControl:{label:"FormControl",href:"/docs/components/FormControl"},InputSlider:{label:"InputSlider",href:"/docs/components/InputSlider"},Select:{label:"Select",href:"/docs/components/Select"},TextField:{label:"TextField",href:"/docs/components/TextField"},TextArea:{label:"TextArea",href:"/docs/components/TextArea"},InputStepper:{label:"InputStepper",href:"/docs/components/InputStepper"}},children:["Checkbox","CheckGroup","Radio","RadioGroup","Switch","FormControl","InputSlider","InputStepper","Select","TextField","TextArea"]},Display:{label:"Display",byChild:{Badge:{label:"Badge",href:"/docs/components/Badge"},Chips:{label:"Chips",href:"/docs/components/Chips"},Code:{label:"Code",href:"/docs/components/Code"},Divider:{label:"Divider",href:"/docs/components/Divider"},Tooltip:{label:"Tooltip",href:"/docs/components/Tooltip"},Tag:{label:"Tag",href:"/docs/components/Tag"},Text:{label:"Text",href:"/docs/components/Text"},Icon:{label:"Icon",href:"/docs/components/Icon"}},children:["Badge","Chips","Code","Divider","Icon","Tooltip","Tag","Text"]},Feedback:{label:"Feedback",byChild:{Spinners:{label:"Spinners",href:"/docs/components/Spinners"},Snackbar:{label:"Snackbar",href:"/docs/components/Snackbar"}},children:["Spinners","Snackbar"]},Layout:{label:"Layout",byChild:{Container:{label:"Container",href:"/docs/components/Container"},Row:{label:"Row",href:"/docs/components/Row"},Column:{label:"Column",href:"/docs/components/Column"}},children:["Container","Row","Column"]},Navigation:{label:"Navigation",byChild:{Breadcrumb:{label:"Breadcrumb",href:"/docs/components/Breadcrumb"},Menu:{label:"Menu",href:"/docs/components/Menu"},TabBar:{label:"TabBar",href:"/docs/components/TabBar"}},children:["Breadcrumb","Menu","TabBar"]},Other:{label:"Other",byChild:{CssBaseline:{label:"CssBaseline",href:"/docs/components/CssBaseline"},InputAdornment:{label:"InputAdornment",href:"/docs/components/InputAdornment"}},children:["CssBaseline","InputAdornment"]}},children:["Actions","Controls","Display","Feedback","Layout","Surface","Navigation","Other"]},Theming:{label:"Theming",href:"/docs/theming"},Styling:{label:"Styling",href:"/docs/styling"},"Server-side Rendering":{label:"Server-side Rendering",href:"/docs/serverside-rendering"},Packages:{label:"Packages",byChild:{Icons:{label:"Icons",href:"/docs/packages/Icons"}},children:["Icons"]}},children:["Installation","Server-side Rendering","Components","Theming","Styling","Packages"]},A=(0,r.Z)((function(e){var n=e.colors,t=e.darkMode,o=e.typography,r=o.pxToRem,a=o.fontWeight;return{root:{height:"calc(100% - ".concat(r(72),")"),paddingRight:r(16),paddingBottom:r(16),overflowX:"hidden",overflowY:"auto"},navigationList:{position:"relative",margin:0,padding:0,listStyle:"none","& $navigationList":{paddingLeft:r(32),"& $navigationList":{paddingLeft:r(16),"&:before":{left:r(16),position:"absolute",top:r(8),bottom:r(8),content:'""',backgroundColor:n.divider,width:r(1)}}}},navigationItem:{display:"flex",flexDirection:"column",alignItems:"flex-start","& $navigationItem":{position:"relative","& $navigationItem":{flexDirection:"row",alignItems:"center","& > $navigationItemLink":{height:r(32),"&:before":{content:'""',position:"absolute",left:0,backgroundColor:n.transparent,width:r(1),height:r(24),transition:"background-color 360ms ease"}},"& > $navigationItemLink$active:before":{backgroundColor:t?n.primary.light:n.primary.origin}}}},navigationItemLink:{paddingLeft:r(8),position:"relative",height:r(40),display:"inline-flex",alignItems:"center",cursor:"pointer",color:n.text.secondary,transition:"color 360ms ease, font-weight 360ms ease","&$active":{color:t?n.primary.light:n.primary.origin,fontWeight:a.medium},"&:not($active):hover":{color:n.text.primary}},active:{}}}),{name:"Nav"}),F=function e(n,t){var r,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return n.children&&n.children.length>0&&(r=n.children.map((function(r,i){var l=n.byChild[r],c="".concat(r,"/").concat(i);if(l)return!l.children||0===l.children.length?0===a?(0,o.jsx)("li",{className:t.navigationItem,children:(0,o.jsx)(f,{href:l.href,activeClassName:t.active,passHref:!0,children:(0,o.jsx)(s.Z,{title:l.label,rootNode:"a",variant:"bodySmall",className:t.navigationItemLink,children:l.label})})},c):(0,o.jsx)("li",{className:t.navigationItem,children:(0,o.jsx)(S,{href:l.href,activeClassName:t.active,passHref:!0,children:(0,o.jsx)(s.Z,{title:l.label,rootNode:"a",variant:1===a?"bodySmall":"caption",className:t.navigationItemLink,children:l.label})})},c):(0,o.jsx)("li",{className:t.navigationItem,children:(0,o.jsx)(R,{trigger:(0,o.jsx)(L,{title:l.label,className:t.navigationItemLink}),content:(0,o.jsx)(x,{children:(0,o.jsx)("ul",{className:t.navigationList,children:e(l,t,a+1)})})})},c)}))),r},$=function(e){var n=A(),t=c.useRef(null),r=c.useRef(""),i=(0,a.Z)(n),s=null!=(0,g.diff)(n,i),d=n.root!==r.current;return s&&d&&(r.current=n.root,t.current=F(Object.freeze(Z),n)),(0,o.jsx)("nav",{className:l()(n.root,e),children:(0,o.jsx)("ul",{className:n.navigationList,children:t.current})})}}}]);