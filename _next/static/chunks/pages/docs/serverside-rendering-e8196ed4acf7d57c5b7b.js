(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7444],{9387:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(5893),i=n(2292),o=n(8347),a=n(6265),s=n(2676),l=n(7913),c=n(4425),d=n(3046),h=n(4184),p=n.n(h),u=n(7294),m=n(6260);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v="AnchorButton",b=(0,c.Z)((function(e){return{root:{position:"relative",marginLeft:e.typography.pxToRem(8),marginRight:e.typography.pxToRem(8)},button:{},anchor:(0,a.Z)({position:"absolute",top:e.typography.pxToRem(-64)},e.breakpoints.down("sm"),{top:e.typography.pxToRem(-105)})}}),{name:v}),y=u.memo((function(e){var t=e.className,n=e.anchorId,a=(0,o.Z)(e,["className","anchorId"]),c="".concat(window.location.origin).concat(window.location.pathname,"#").concat(n),h=b(),u=(0,m.Z)(c,{successDuration:1e3}),g=(0,i.Z)(u,2),v=g[0],y=g[1];return(0,r.jsxs)("div",f(f({},a),{},{className:p()(h.root,t),children:[(0,r.jsx)("span",{id:n,className:h.anchor}),(0,r.jsx)(d.Z,{text:"Copied to clipboard!",open:v,placement:"right",children:(0,r.jsx)(l.Z,{className:p()(h.button,"anchor-button"),rootNode:"a",href:"#".concat(n),onClick:function(){y()},variant:"inlined",title:"Anchor link","aria-label":"Anchor link",leadingIcon:(0,r.jsx)(s.Z,{})})})]}))}));y.displayName=v;var j=y},7703:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(6265),i=n(5893),o=n(8347),a=n(3790),s=n(7913),l=n(4425),c=n(4184),d=n.n(c),h=n(7294);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m="PageEditButton",g=(0,l.Z)({root:{marginLeft:"auto"}},{name:m}),f=h.memo((function(e){var t=e.className,n=e.href,r=(0,o.Z)(e,["className","href"]),l=g();return(0,i.jsx)(s.Z,u(u({},r),{},{className:d()(l.root,t),rootNode:"a",href:"https://github.com/sonnat/sonnat.github.io/blob/main/".concat(n),variant:"inlined",target:"_blank",rel:"noopener noreferrer",title:"Edit page on github","aria-label":"Edit page on github",leadingIcon:(0,i.jsx)(a.Z,{})}))}));f.displayName=m;var v=f},3805:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(5893),i=n(6265),o=n(7846),a=n(5992),s=n(6221),l=n(4425),c=n(4451),d=n(4184),h=n.n(d),p=n(1664),u=n(7294),m="Footer",g=(0,l.Z)((function(e){var t=e.colors,n=e.breakpoints,r=e.typography.pxToRem;return(0,i.Z)({root:{display:"flex",alignItems:"center",height:r(72),marginTop:r(128),justifyContent:"space-between",borderTop:"1px solid ".concat(t.divider)},navigation:{display:"flex",alignItems:"center"},logo:{marginRight:r(16),cursor:"pointer",color:t.text.secondary,transition:["opacity 360ms ease","visibility 360ms ease","color 360ms ease"].join(", "),"&:hover":{color:t.text.primary}},navigationList:{padding:"0",margin:"0",listStyle:"none",display:"flex",alignItems:"center"},navigationItem:{padding:r(8),cursor:"pointer","&:hover > $navigationItemLink":{color:t.text.primary}},navigationItemLink:{color:t.text.secondary,transition:"color 360ms ease"},navigationDivider:{width:r(1),height:r(16),backgroundColor:t.divider},socials:{display:"flex",alignItems:"center"},social:{marginLeft:r(8),cursor:"pointer",transition:"color 360ms ease",color:t.text.secondary,"&:hover":{color:t.text.primary}}},n.down("sm"),{root:{paddingTop:r(16),paddingBottom:r(16),height:"auto",flexDirection:"column"},navigation:{flexDirection:"column"},navigationList:{marginTop:r(16),marginBottom:r(16)},social:{marginLeft:r(8),marginRight:r(8)},logo:{marginRight:0}})}),{name:m}),f=u.memo((function(e){var t=e.className,n=g();return(0,r.jsxs)("footer",{className:h()(n.root,t),children:[(0,r.jsxs)("nav",{className:n.navigation,children:[(0,r.jsx)(p.default,{href:"/",children:(0,r.jsx)("a",{title:"Home",className:n.logo,children:(0,r.jsx)(o.Z,{size:32,title:"Sonnat Design System's Logo"})})}),(0,r.jsxs)("ul",{className:n.navigationList,children:[(0,r.jsx)("li",{className:n.navigationItem,children:(0,r.jsx)(p.default,{href:"/docs/installation",passHref:!0,children:(0,r.jsx)(c.Z,{title:"Documentation",rootNode:"a",variant:"caption",className:n.navigationItemLink,children:"Docs"})})}),(0,r.jsx)("li",{className:n.navigationDivider}),(0,r.jsx)("li",{className:n.navigationItem,children:(0,r.jsx)(p.default,{href:"https://sonnat.design",passHref:!0,children:(0,r.jsx)(c.Z,{title:"Design",rootNode:"a",target:"_blank",rel:"noopener noreferrer",variant:"caption",className:n.navigationItemLink,children:"Design"})})}),(0,r.jsx)("li",{className:n.navigationDivider}),(0,r.jsx)("li",{className:n.navigationItem,children:(0,r.jsx)(p.default,{href:"https://github.com/sonnat/sonnat-ui/discussions/categories/feedback",passHref:!0,children:(0,r.jsx)(c.Z,{title:"Feedback",rootNode:"a",target:"_blank",rel:"noopener noreferrer",variant:"caption",className:n.navigationItemLink,children:"Feedback"})})}),(0,r.jsx)("li",{className:n.navigationDivider}),(0,r.jsx)("li",{className:n.navigationItem,children:(0,r.jsx)(p.default,{href:"https://careers.divar.ir/positions#department=Design%20and%20UX",passHref:!0,children:(0,r.jsx)(c.Z,{title:"Careers",rootNode:"a",target:"_blank",rel:"noopener noreferrer",variant:"caption",className:n.navigationItemLink,children:"Careers"})})})]})]}),(0,r.jsxs)("div",{className:n.socials,children:[(0,r.jsx)(p.default,{href:"https://twitter.com/sonnatdesign",passHref:!0,children:(0,r.jsx)("a",{title:"Twitter",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(a.Z,{size:24,className:n.social})})}),(0,r.jsx)(p.default,{href:"https://github.com/sonnat/sonnat-ui",passHref:!0,children:(0,r.jsx)("a",{title:"GitHub",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(s.Z,{size:24,className:n.social})})})]})]})}));f.displayName=m;var v=f},3161:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r=n(5893),i=n(6265),o=n(1446),a=n(4425),s=n(3805),l=n(4323),c=n(2943),d=n(4451),h=n(2981),p=n(1369),u=n(4184),m=n.n(u),g=n(7763),f=n(7294),v="Sidebar",b=(0,a.Z)((function(e){var t=e.colors,n=e.typography.pxToRem;return{root:function(e){var r=e.scrollBarWidth;return{position:"sticky",top:n(128),paddingBottom:n(32),zIndex:1,"&:after":{marginRight:n(r),content:'""',position:"absolute",left:0,right:0,bottom:n(32),height:n(16),background:"linear-gradient(180deg, rgba(255, 255, 255, 0), ".concat(t.background.origin,")")}}},heading:function(e){var r=e.scrollBarWidth;return{position:"relative",zIndex:2,paddingBottom:n(16),paddingRight:n(16),"&:after":{marginRight:n(r),content:'""',position:"absolute",bottom:n(-16),left:0,right:0,height:n(16),background:"linear-gradient(180deg, ".concat(t.background.origin,", rgba(255, 255, 255, 0))")}}},hintText:{marginTop:n(4)}}}),{name:v}),y=f.memo((function(e){var t=e.children,n=e.className,i=(0,g.h)(),o=f.useMemo((function(){return(0,p.Z)()}),[]),a=b({scrollBarWidth:o});return(0,r.jsxs)("aside",{className:m()(n,a.root),children:[(0,r.jsxs)("div",{className:a.heading,children:[(0,r.jsx)(h.Z,{fluid:!0,disabled:!0,name:"search",leadingAdornment:(0,r.jsx)(c.Z,{variant:"icon",children:(0,r.jsx)(l.Z,{})}),placeholder:"Search",size:"small",inputProps:{autoComplete:"off","aria-label":"Search"}}),(0,r.jsx)(d.Z,{className:a.hintText,variant:"captionSmall",color:"textHint",display:"block",align:"center",children:"Searchbox is under construction!"})]}),i,t]})}));y.displayName=v;var j=y,k="WithSidebar",x=(0,a.Z)((function(e){var t=e.breakpoints,n=e.typography.pxToRem;return{root:{paddingTop:n(64)},container:{display:"flex",paddingTop:n(64)},sidebar:(0,i.Z)({height:"calc(100vh - ".concat(n(192),")"),width:n(256),flexShrink:0},t.down("lg"),{display:"none"}),content:(0,i.Z)({flex:"1 1",minWidth:0},t.up("lg"),{paddingLeft:n(32)}),article:(0,i.Z)({minHeight:"calc(100vh - ".concat(n(328),")")},t.down("sm"),{minHeight:"auto"})}}),{name:k}),S=function(e){var t=e.children,n=x();return(0,r.jsx)("main",{id:"main",className:n.root,children:(0,r.jsxs)(o.Z,{className:n.container,children:[(0,r.jsx)(j,{className:n.sidebar}),(0,r.jsxs)("section",{className:n.content,children:[(0,r.jsx)("article",{className:n.article,children:t}),(0,r.jsx)(s.Z,{})]})]})})};S.displayName=k;var w=S},3257:function(e,t,n){"use strict";n.d(t,{t:function(){return r},z:function(){return i}});var r=["dev","develop","developer","development","react","js","reactjs","javascript","design system","sonnat","sonnat-ui","ui","user interface","\u062a\u0648\u0633\u0639\u0647\u200c\u062f\u0647\u0646\u062f\u06af\u0627\u0646","\u06a9\u0627\u0645\u067e\u0648\u0646\u0646\u062a \u0644\u0627\u06cc\u0628\u0631\u0631\u06cc","\u0633\u0646\u062a","\u0633\u0646\u0651\u062a"],i="https://www.sonnat.dev"},4424:function(e,t,n){"use strict";n.r(t),n.d(t,{meta:function(){return g},default:function(){return v}});var r=n(6265),i=n(8140),o=n(8347),a=(n(7294),n(3905)),s=n(7703),l=n(9387),c=n(3161),d=n(9008),h=n(3257),p=n(1919);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g={title:"Server-side Rendering",description:"The most common use case for server-side rendering is to handle the initial render when a user (or search engine crawler) first requests your app.",getLayout:function(){return function(e){return(0,a.kt)(c.Z,{mdxType:"WithSidebar"},e)}}},f={meta:g};function v(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",m(m(m({},f),n),{},{components:t,mdxType:"MDXLayout"}),(0,a.kt)(d.default,{mdxType:"Head"},(0,p.aT)("".concat(g.title," | Sonnat Developer Tools, React Components & Resources")),(0,p.u2)(g.description),(0,p.ai)("".concat(h.z,"/docs/serverside-rendering")),(0,p.hL)([].concat((0,i.Z)(h.t),["server-side rendering","server side rendering","ssr"]))),(0,a.kt)("h1",null,(0,a.kt)("span",null,g.title),(0,a.kt)(l.Z,{anchorId:"overview",mdxType:"AnchorButton"}),(0,a.kt)(s.Z,{href:"pages/docs/serverside-rendering.mdx",mdxType:"PageEditButton"})),(0,a.kt)("p",null,g.description),(0,a.kt)("p",null,"When the server receives the request, it renders the required component(s) into an HTML string, and then sends it as a response to the client. From that point on, the client takes over rendering duties."),(0,a.kt)("p",null,"We are using"," ",(0,a.kt)("a",{href:"https://cssinjs.org/react-jss",rel:"noopener noreferrer",target:"_blank"},"ReactJSS (css-in-js styling solution)")," ","to styling our components. And since Material-UI v4 was using the same styling solution with such a User-friendly API that led to great DX (Developer Experience), we have decided to use an API which is similar to Material-UI's."),(0,a.kt)("h2",null,(0,a.kt)("span",null,"Sonnat-UI on the Server"),(0,a.kt)(l.Z,{anchorId:"sonnat-ui-on-the-server",mdxType:"AnchorButton"})),(0,a.kt)("p",null,"All Components of ",(0,a.kt)("inlineCode",null,"@sonnat/ui")," are compatible with Server-side Rendering. In fact, the document you see now is rendered by the server.",(0,a.kt)("br",null),"It's important to provide the page with the required CSS, otherwise the page will render with just the HTML then wait for the CSS to be injected by the client, causing it to flicker (FOUC). To inject the style down to the client, we need to:"),(0,a.kt)("ol",null,(0,a.kt)("li",null,"Create a fresh, new ",(0,a.kt)("inlineCode",null,"ServerStyleSheets")," instance on every request."),(0,a.kt)("li",null,"Render the React tree with the server-side collector."),(0,a.kt)("li",null,"Pull the CSS out."),(0,a.kt)("li",null,"Pass the CSS along to the client.")),(0,a.kt)("p",null,"On the client side, the CSS will be injected a second time before removing the server-side injected CSS."),(0,a.kt)("h2",null,(0,a.kt)("span",null,"Setting Up"),(0,a.kt)(l.Z,{anchorId:"setting-up",mdxType:"AnchorButton"})),(0,a.kt)("h3",null,(0,a.kt)("span",null,"Theme Object"),(0,a.kt)(l.Z,{anchorId:"theme-object",mdxType:"AnchorButton"})),(0,a.kt)("p",null,"Create a theme object that will be shared between the client and the server.",(0,a.kt)("br",null),"If you don't provide a theme object the theming will be defaults to"," ",(0,a.kt)("a",{href:"/docs/theming#default-theme"},"Default Theme"),".",(0,a.kt)("br",null),"(For more detailed information about theming, take a look at"," ",(0,a.kt)("a",{href:"/docs/theming"},"this doc"),".)"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),'// file: theme.js\n\nimport createTheme from "@sonnat/ui/styles/createTheme";\n\n// Create a theme instance.\nconst theme = createTheme({\n  // Your theme options\n});\n\nexport default theme;\n')),(0,a.kt)("h3",null,(0,a.kt)("span",null,"Server-side"),(0,a.kt)(l.Z,{anchorId:"serverside",mdxType:"AnchorButton"})),(0,a.kt)("p",null,"The first thing that we need to do on every request is create a new"," ",(0,a.kt)("inlineCode",null,"ServerStyleSheets"),".",(0,a.kt)("br",null),"When rendering, we will wrap App, the root component, inside a"," ",(0,a.kt)("inlineCode",null,"<SonnatInitializer>")," to make the style configuration and the theme available to all components in the component tree."),(0,a.kt)("p",null,"The key step in server-side rendering is to render the initial HTML of the component before we send it to the client side. To do this, we use"," ",(0,a.kt)("inlineCode",null,"ReactDOMServer.renderToString()"),". We then get the CSS from the sheets using ",(0,a.kt)("inlineCode",null,"sheets.toString()"),".",(0,a.kt)("br",null),"The final step on the server-side is to inject the initial component HTML and CSS into a template to be rendered on the client side."),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),'// file: server.js\n\nimport express from "express";\nimport React from "react";\nimport ReactDOMServer from "react-dom/server";\nimport ServerStyleSheets from "@sonnat/ui/styles/ServerStyleSheets";\nimport SonnatInitializer from "@sonnat/ui/styles/SonnatInitializer";\nimport CssBaseline from "@sonnat/ui/CssBaseline";\nimport App from "./App";\nimport theme from "./theme";\n\nfunction renderFullPage(html, css) {\n  return `\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>My page</title>\n        <style id="sonnat-jss-ssr">${css}</style>\n      </head>\n      <body>\n        <div id="root">${html}</div>\n      </body>\n    </html>\n  `;\n}\n\nfunction handleRender(req, res) {\n  const sheets = new ServerStyleSheets();\n\n  // Render the component to a string.\n  const html = ReactDOMServer.renderToString(\n    sheets.collect(\n      <SonnatInitializer theme={theme}>\n        <CssBaseline />\n        <App />\n      </SonnatInitializer>\n    )\n  );\n\n  // Grab the CSS from the sheets.\n  const css = sheets.toString();\n\n  // Send the rendered page back to the client.\n  res.send(renderFullPage(html, css));\n}\n\nconst app = express();\n\napp.use("/build", express.static("build"));\n\n// This is fired every time the server-side receives a request.\napp.use(handleRender);\n\nconst port = 3000;\napp.listen(port);\n')),(0,a.kt)("div",{"data-notebox":!0,style:{marginBottom:"1rem"}},"Check out the documentations of"," ",(0,a.kt)("a",{href:"/docs/styling#sonnat-initializer",title:"SonnatInitializer documentation"},(0,a.kt)("strong",null,"<SonnatInitializer>"))," ","and"," ",(0,a.kt)("a",{href:"/docs/components/CssBaseline",title:"CssBaseline documentation"},(0,a.kt)("strong",null,"<CssBaseline>")),", to learn more about them."),(0,a.kt)("h3",null,(0,a.kt)("span",null,"Client-side"),(0,a.kt)(l.Z,{anchorId:"clientside",mdxType:"AnchorButton"})),(0,a.kt)("p",null,"The client side is straightforward. All we need to do is remove the server-side generated CSS."),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),'// file: client.js\n\nimport React from "react";\nimport ReactDOM from "react-dom";\nimport SonnatInitializer from "@sonnat/ui/styles/SonnatInitializer";\nimport CssBaseline from "@sonnat/ui/CssBaseline";\nimport App from "./App";\nimport theme from "./theme";\n\nfunction Main() {\n  React.useEffect(() => {\n    const jssStyles = document.querySelector("#sonnat-jss-ssr");\n    if (jssStyles) {\n      jssStyles.parentElement.removeChild(jssStyles);\n    }\n  }, []);\n\n  return (\n    <SonnatInitializer theme={theme}>\n      <CssBaseline />\n      <App />\n    </SonnatInitializer>\n  );\n}\n\nReactDOM.hydrate(<Main />, document.querySelector("#root"));\n')),(0,a.kt)("h2",null,(0,a.kt)("span",null,"Next.js"),(0,a.kt)(l.Z,{anchorId:"nextjs",mdxType:"AnchorButton"})),(0,a.kt)("p",null,"We host nextjs implementation which you can find in the"," ",(0,a.kt)("a",{href:"https://github.com/sonnat/sonnat-ui",rel:"noopener noreferrer",target:"_blank"},"GitHub repository")," ","under the"," ",(0,a.kt)("a",{href:"https://github.com/sonnat/sonnat-ui/tree/master/examples/with-nextjs",rel:"noopener noreferrer",target:"_blank"},"/examples")," ","folder."))}v.isMDXComponent=!0},1390:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/serverside-rendering",function(){return n(4424)}])}},function(e){e.O(0,[9774,3679,5070,5400,7428,7280,1254,1635,7763],(function(){return t=1390,e(e.s=t);var t}));var t=e.O();_N_E=t}]);