(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4442],{9387:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(5893),a=n(2292),o=n(8347),i=n(6265),s=n(2676),c=n(7913),l=n(4425),d=n(3046),p=n(4184),u=n.n(p),m=n(7294),g=n(6260);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b="AnchorButton",v=(0,l.Z)((function(e){return{root:{position:"relative",marginLeft:e.typography.pxToRem(8),marginRight:e.typography.pxToRem(8)},button:{},anchor:(0,i.Z)({position:"absolute",top:e.typography.pxToRem(-64)},e.breakpoints.down("sm"),{top:e.typography.pxToRem(-105)})}}),{name:b}),y=m.memo((function(e){var t=e.className,n=e.anchorId,i=(0,o.Z)(e,["className","anchorId"]),l="".concat(window.location.origin).concat(window.location.pathname,"#").concat(n),p=v(),m=(0,g.Z)(l,{successDuration:1e3}),h=(0,a.Z)(m,2),b=h[0],y=h[1];return(0,r.jsxs)("div",f(f({},i),{},{className:u()(p.root,t),children:[(0,r.jsx)("span",{id:n,className:p.anchor}),(0,r.jsx)(d.Z,{text:"Copied to clipboard!",open:b,placement:"right",children:(0,r.jsx)(c.Z,{className:u()(p.button,"anchor-button"),rootNode:"a",href:"#".concat(n),onClick:function(){y()},variant:"inlined",title:"Anchor link","aria-label":"Anchor link",leadingIcon:(0,r.jsx)(s.Z,{})})})]}))}));y.displayName=b;var j=y},7703:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(6265),a=n(5893),o=n(8347),i=n(3790),s=n(7913),c=n(4425),l=n(4184),d=n.n(l),p=n(7294);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g="PageEditButton",h=(0,c.Z)({root:{marginLeft:"auto"}},{name:g}),f=p.memo((function(e){var t=e.className,n=e.href,r=(0,o.Z)(e,["className","href"]),c=h();return(0,a.jsx)(s.Z,m(m({},r),{},{className:d()(c.root,t),rootNode:"a",href:"https://github.com/sonnat/sonnat-dev-docs/tree/main/".concat(n),variant:"inlined",target:"_blank",rel:"noopener noreferrer",title:"Edit page on github","aria-label":"Edit page on github",leadingIcon:(0,a.jsx)(i.Z,{})}))}));f.displayName=g;var b=f},3805:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(5893),a=n(6265),o=n(7846),i=n(5992),s=n(4788),c=n(4425),l=n(4451),d=n(4184),p=n.n(d),u=n(1664),m=n(7294),g="Footer",h=(0,c.Z)((function(e){var t=e.colors,n=e.breakpoints,r=e.typography.pxToRem;return(0,a.Z)({root:{display:"flex",alignItems:"center",height:r(72),marginTop:r(128),justifyContent:"space-between",borderTop:"1px solid ".concat(t.divider)},navigation:{display:"flex",alignItems:"center"},logo:{marginRight:r(16),cursor:"pointer",color:t.text.secondary,transition:["opacity 360ms ease","visibility 360ms ease","color 360ms ease"].join(", "),"&:hover":{color:t.text.primary}},navigationList:{padding:"0",margin:"0",listStyle:"none",display:"flex",alignItems:"center"},navigationItem:{padding:r(8),cursor:"pointer","&:hover > $navigationItemLink":{color:t.text.primary}},navigationItemLink:{color:t.text.secondary,transition:"color 360ms ease"},navigationDivider:{width:r(1),height:r(16),backgroundColor:t.divider},socials:{display:"flex",alignItems:"center"},social:{marginLeft:r(8),cursor:"pointer",transition:"color 360ms ease",color:t.text.secondary,"&:hover":{color:t.text.primary}}},n.down("sm"),{root:{paddingTop:r(16),paddingBottom:r(16),height:"auto",flexDirection:"column"},navigation:{flexDirection:"column"},navigationList:{marginTop:r(16),marginBottom:r(16)},social:{marginLeft:r(8),marginRight:r(8)},logo:{marginRight:0}})}),{name:g}),f=m.memo((function(e){var t=e.className,n=h();return(0,r.jsxs)("footer",{className:p()(n.root,t),children:[(0,r.jsxs)("nav",{className:n.navigation,children:[(0,r.jsx)(u.default,{href:"/",children:(0,r.jsx)("a",{title:"Home",className:n.logo,children:(0,r.jsx)(o.Z,{size:32,title:"Sonnat Design System's Logo"})})}),(0,r.jsxs)("ul",{className:n.navigationList,children:[(0,r.jsx)("li",{className:n.navigationItem,children:(0,r.jsx)(u.default,{href:"/docs/installation",passHref:!0,children:(0,r.jsx)(l.Z,{title:"Documentation",rootNode:"a",variant:"caption",className:n.navigationItemLink,children:"Docs"})})}),(0,r.jsx)("li",{className:n.navigationDivider}),(0,r.jsx)("li",{className:n.navigationItem,children:(0,r.jsx)(u.default,{href:"https://sonnat.design",passHref:!0,children:(0,r.jsx)(l.Z,{title:"Design",rootNode:"a",target:"_blank",rel:"noopener noreferrer",variant:"caption",className:n.navigationItemLink,children:"Design"})})}),(0,r.jsx)("li",{className:n.navigationDivider}),(0,r.jsx)("li",{className:n.navigationItem,children:(0,r.jsx)(u.default,{href:"https://github.com/sonnat/sonnat-ui/discussions/categories/feedback",passHref:!0,children:(0,r.jsx)(l.Z,{title:"Feedback",rootNode:"a",target:"_blank",rel:"noopener noreferrer",variant:"caption",className:n.navigationItemLink,children:"Feedback"})})}),(0,r.jsx)("li",{className:n.navigationDivider}),(0,r.jsx)("li",{className:n.navigationItem,children:(0,r.jsx)(u.default,{href:"https://careers.divar.ir/positions#department=Design%20and%20UX",passHref:!0,children:(0,r.jsx)(l.Z,{title:"Careers",rootNode:"a",target:"_blank",rel:"noopener noreferrer",variant:"caption",className:n.navigationItemLink,children:"Careers"})})})]})]}),(0,r.jsxs)("div",{className:n.socials,children:[(0,r.jsx)(u.default,{href:"https://twitter.com/sonnatdesign",passHref:!0,children:(0,r.jsx)("a",{title:"Twitter",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(i.Z,{size:24,className:n.social})})}),(0,r.jsx)(u.default,{href:"https://github.com/sonnat/sonnat-ui",passHref:!0,children:(0,r.jsx)("a",{title:"GitHub",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(s.Z,{size:24,className:n.social})})})]})]})}));f.displayName=g;var b=f},3161:function(e,t,n){"use strict";n.d(t,{Z:function(){return N}});var r=n(5893),a=n(6265),o=n(1446),i=n(4425),s=n(3805),c=n(4323),l=n(2943),d=n(4451),p=n(2981),u=n(1369),m=n(4184),g=n.n(m),h=n(7763),f=n(7294),b="Sidebar",v=(0,i.Z)((function(e){var t=e.colors,n=e.typography.pxToRem;return{root:function(e){var r=e.scrollBarWidth;return{position:"sticky",top:n(128),paddingBottom:n(32),zIndex:1,"&:after":{marginRight:n(r),content:'""',position:"absolute",left:0,right:0,bottom:n(32),height:n(16),background:"linear-gradient(180deg, rgba(255, 255, 255, 0), ".concat(t.background.origin,")")}}},heading:function(e){var r=e.scrollBarWidth;return{position:"relative",zIndex:2,paddingBottom:n(16),paddingRight:n(16),"&:after":{marginRight:n(r),content:'""',position:"absolute",bottom:n(-16),left:0,right:0,height:n(16),background:"linear-gradient(180deg, ".concat(t.background.origin,", rgba(255, 255, 255, 0))")}}},hintText:{marginTop:n(4)}}}),{name:b}),y=f.memo((function(e){var t=e.children,n=e.className,a=(0,h.h)(),o=f.useMemo((function(){return(0,u.Z)()}),[]),i=v({scrollBarWidth:o});return(0,r.jsxs)("aside",{className:g()(n,i.root),children:[(0,r.jsxs)("div",{className:i.heading,children:[(0,r.jsx)(p.Z,{fluid:!0,disabled:!0,name:"search",leadingAdornment:(0,r.jsx)(l.Z,{variant:"icon",children:(0,r.jsx)(c.Z,{})}),placeholder:"Search",size:"small",inputProps:{autoComplete:"off","aria-label":"Search"}}),(0,r.jsx)(d.Z,{className:i.hintText,variant:"captionSmall",color:"textHint",display:"block",align:"center",children:"Searchbox is under construction!"})]}),a,t]})}));y.displayName=b;var j=y,x="WithSidebar",k=(0,i.Z)((function(e){var t=e.breakpoints,n=e.typography.pxToRem;return{root:{paddingTop:n(64)},container:{display:"flex",paddingTop:n(64)},sidebar:(0,a.Z)({height:"calc(100vh - ".concat(n(192),")"),width:n(256),flexShrink:0},t.down("lg"),{display:"none"}),content:(0,a.Z)({flex:"1 1",minWidth:0},t.up("lg"),{paddingLeft:n(32)})}}),{name:x}),w=function(e){var t=e.children,n=k();return(0,r.jsx)("main",{id:"main",className:n.root,children:(0,r.jsxs)(o.Z,{className:n.container,children:[(0,r.jsx)(j,{className:n.sidebar}),(0,r.jsxs)("section",{className:n.content,children:[(0,r.jsx)("article",{children:t}),(0,r.jsx)(s.Z,{})]})]})})};w.displayName=x;var N=w},3257:function(e,t,n){"use strict";n.d(t,{t:function(){return r},z:function(){return a}});var r=["dev","develop","developer","development","react","js","reactjs","javascript","design system","sonnat","sonnat-ui","ui","user interface","\u062a\u0648\u0633\u0639\u0647\u200c\u062f\u0647\u0646\u062f\u06af\u0627\u0646","\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0644\u0627\u06cc\u0628\u0631\u0631\u06cc","\u0633\u0646\u062a","\u0633\u0646\u0651\u062a"],a="https://www.sonnat.dev"},3872:function(e,t,n){"use strict";n.r(t),n.d(t,{meta:function(){return h},default:function(){return b}});var r=n(6265),a=n(8140),o=n(8347),i=(n(7294),n(3905)),s=n(7703),c=n(9387),l=n(3161),d=n(9008),p=n(3257),u=n(1919);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h={title:"Installation",description:"Install Sonnat-UI, the React component library using Sonnat Design System to build faster, elegant, and accessible web applications.",getLayout:function(){return function(e){return(0,i.kt)(l.Z,{mdxType:"WithSidebar"},e)}}},f={meta:h};function b(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",g(g(g({},f),n),{},{components:t,mdxType:"MDXLayout"}),(0,i.kt)(d.default,{mdxType:"Head"},(0,u.aT)("".concat(h.title," | Sonnat Developer Tools, React Components & Resources")),(0,u.u2)(h.description),(0,u.ai)("".concat(p.z,"/docs/installation")),(0,u.hL)([].concat((0,a.Z)(p.t),["install","installation","getting started","get started","\u0634\u0631\u0648\u0639","\u0646\u0635\u0628","\u062f\u0627\u0646\u0644\u0648\u062f"]))),(0,i.kt)("h1",null,(0,i.kt)("span",null,h.title),(0,i.kt)(c.Z,{anchorId:"overview",mdxType:"AnchorButton"}),(0,i.kt)(s.Z,{href:"pages/docs/installation.mdx",mdxType:"PageEditButton"})),(0,i.kt)("p",null,h.description),(0,i.kt)("h2",null,(0,i.kt)("span",null,"Setup"),(0,i.kt)(c.Z,{anchorId:"setup",mdxType:"AnchorButton"})),(0,i.kt)("p",null,"Ensure your have the latest version of NodeJS, and a package manager:"," ",(0,i.kt)("a",{href:"https://www.npmjs.com/get-npm",target:"_blank",rel:"noopener noreferrer",title:"Get NPM"},"NPM")," ","or"," ",(0,i.kt)("a",{href:"https://yarnpkg.com/getting-started/install",target:"_blank",rel:"noopener noreferrer",title:"Get Yarn"},"Yarn"),"."),(0,i.kt)("div",{"data-notebox":!0,style:{marginTop:"-1rem",marginBottom:"1rem"}},"Please note that"," ",(0,i.kt)("a",{href:"https://www.npmjs.com/package/react",target:"_blank",rel:"noopener noreferrer",title:"ReactJs"},"react")," ",">= 16.8.0 || 17.0.0 and"," ",(0,i.kt)("a",{href:"https://www.npmjs.com/package/react-dom",target:"_blank",rel:"noopener noreferrer",title:"ReactJs"},"react-dom")," ",">= 16.8.0 || 17.0.0 are peer dependencies."),(0,i.kt)("ol",null,(0,i.kt)("li",null,"Run the following script to install and save in your"," ",(0,i.kt)("inlineCode",null,"package.json")," dependencies:",(0,i.kt)("code",{className:"language-bash",children:"# with npm\nnpm install @sonnat/ui\n\n# or with yarn\nyarn add @sonnat/ui"})),(0,i.kt)("li",null,"Initialize ",(0,i.kt)("inlineCode",null,"@sonnat/ui")," in your project:",(0,i.kt)("code",{className:"language-jsx",children:'import CssBaseline from "@sonnat/ui/CssBaseline";\nimport SonnatInitializer from "@sonnat/ui/styles/SonnatInitializer";\n\nconst App = () => (\n  <SonnatInitializer>\n    <CssBaseline />\n    <MyComponent />\n  </SonnatInitializer>\n);'}),(0,i.kt)("div",{"data-notebox":!0,style:{marginBottom:"1rem",marginTop:"-1rem"}},"Check out the documentations of"," ",(0,i.kt)("a",{href:"/docs/styling#sonnat-initializer",title:"SonnatInitializer documentation"},(0,i.kt)("strong",null,"<SonnatInitializer>"))," ","and"," ",(0,i.kt)("a",{href:"/docs/components/CssBaseline",title:"CssBaseline documentation"},(0,i.kt)("strong",null,"<CssBaseline>")),", to learn more about them.")),(0,i.kt)("li",null,"Use ",(0,i.kt)("inlineCode",null,"@sonnat/ui")," components and utilities anywhere in your React-Tree:",(0,i.kt)("code",{className:"language-jsx",children:'import Button from "@sonnat/ui/Button";\n\nconst MyComponent = () => <Button label="Text" />;'})),(0,i.kt)("li",null,"If your project needs to be rendered on the server as well, follow"," ",(0,i.kt)("a",{href:"/docs/serverside-rendering"},"this guide"),".")))}b.isMDXComponent=!0},1622:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/installation",function(){return n(3872)}])}},function(e){e.O(0,[9774,3679,5070,5400,320,650,1635,7763],(function(){return t=1622,e(e.s=t);var t}));var t=e.O();_N_E=t}]);