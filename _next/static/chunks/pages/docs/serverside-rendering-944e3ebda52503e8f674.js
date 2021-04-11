_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"377g":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/serverside-rendering",function(){return n("vd1t")}])},vd1t:function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return j})),n.d(t,"default",(function(){return f}));var r=n("cpVT"),o=n("z7pX"),s=n("dhJC"),i=(n("q1tI"),n("7ljp")),a=n("PW80"),l=n("G0Pc"),c=n("XLwr"),b=n("g4pe"),h=n.n(b),d=n("C6zX"),p=n("cBaE");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j={title:"Server-side Rendering",description:"The most common use case for server-side rendering is to handle the initial render when a user (or search engine crawler) first requests your app.",layout:c.a},O={meta:j};function f(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",m(m(m({},O),n),{},{components:t,mdxType:"MDXLayout"}),Object(i.b)(h.a,{mdxType:"Head"},Object(p.e)("".concat(j.title," | Sonnat Developer Tools, React Components & Resources")),Object(p.c)(j.description),Object(p.b)("".concat(d.b,"/docs/serverside-rendering")),Object(p.d)([].concat(Object(o.a)(d.a),["server-side rendering","server side rendering","ssr"]))),Object(i.b)("h1",null,Object(i.b)("span",null,j.title),Object(i.b)(l.a,{anchorId:"overview",mdxType:"AnchorButton"}),Object(i.b)(a.a,{href:"pages/docs/serverside-rendering.mdx",mdxType:"PageEditButton"})),Object(i.b)("p",null,j.description),Object(i.b)("p",null,"When the server receives the request, it renders the required component(s) into an HTML string, and then sends it as a response to the client. From that point on, the client takes over rendering duties."),Object(i.b)("p",null,"We are using"," ",Object(i.b)("a",{href:"https://cssinjs.org/react-jss",rel:"noopener noreferrer",target:"_blank"},"ReactJSS (css-in-js styling solution)")," ","to styling our components. And since Material-UI v4 was using the same styling solution with such a User-friendly API that led to great DX (Developer Experience), we have decided to use an API which is similar to Material-UI's."),Object(i.b)("h2",null,Object(i.b)("span",null,"Sonnat-UI on the Server"),Object(i.b)(l.a,{anchorId:"sonnat-ui-on-the-server",mdxType:"AnchorButton"})),Object(i.b)("p",null,"All Components of ",Object(i.b)("inlineCode",null,"@sonnat/ui")," are compatible with Server-side Rendering. In fact, the document you see now is rendered by the server.",Object(i.b)("br",null),"It's important to provide the page with the required CSS, otherwise the page will render with just the HTML then wait for the CSS to be injected by the client, causing it to flicker (FOUC). To inject the style down to the client, we need to:"),Object(i.b)("ol",null,Object(i.b)("li",null,"Create a fresh, new ",Object(i.b)("inlineCode",null,"ServerStyleSheets")," instance on every request."),Object(i.b)("li",null,"Render the React tree with the server-side collector."),Object(i.b)("li",null,"Pull the CSS out."),Object(i.b)("li",null,"Pass the CSS along to the client.")),Object(i.b)("p",null,"On the client side, the CSS will be injected a second time before removing the server-side injected CSS."),Object(i.b)("h2",null,Object(i.b)("span",null,"Setting Up"),Object(i.b)(l.a,{anchorId:"setting-up",mdxType:"AnchorButton"})),Object(i.b)("h3",null,Object(i.b)("span",null,"Theme Object"),Object(i.b)(l.a,{anchorId:"theme-object",mdxType:"AnchorButton"})),Object(i.b)("p",null,"Create a theme object that will be shared between the client and the server.",Object(i.b)("br",null),"If you don't provide a theme object the theming will be defaults to"," ",Object(i.b)("a",{href:"/docs/theming#default-theme"},"Default Theme"),".",Object(i.b)("br",null),"(For more detailed information about theming, take a look at"," ",Object(i.b)("a",{href:"/docs/theming"},"this doc"),".)"),Object(i.b)("pre",null,Object(i.b)("code",m({parentName:"pre"},{className:"language-jsx"}),'// file: theme.js\n\nimport createTheme from "@sonnat/ui/styles/createTheme";\n\n// Create a theme instance.\nconst theme = createTheme({\n  // Your theme options\n});\n\nexport default theme;\n')),Object(i.b)("h3",null,Object(i.b)("span",null,"Server-side"),Object(i.b)(l.a,{anchorId:"serverside",mdxType:"AnchorButton"})),Object(i.b)("p",null,"The first thing that we need to do on every request is create a new"," ",Object(i.b)("inlineCode",null,"ServerStyleSheets"),".",Object(i.b)("br",null),"When rendering, we will wrap App, the root component, inside a"," ",Object(i.b)("inlineCode",null,"<SonnatInitializer>")," to make the style configuration and the theme available to all components in the component tree."),Object(i.b)("p",null,"The key step in server-side rendering is to render the initial HTML of the component before we send it to the client side. To do this, we use"," ",Object(i.b)("inlineCode",null,"ReactDOMServer.renderToString()"),". We then get the CSS from the sheets using ",Object(i.b)("inlineCode",null,"sheets.toString()"),".",Object(i.b)("br",null),"The final step on the server-side is to inject the initial component HTML and CSS into a template to be rendered on the client side."),Object(i.b)("pre",null,Object(i.b)("code",m({parentName:"pre"},{className:"language-jsx"}),'// file: server.js\n\nimport express from "express";\nimport React from "react";\nimport ReactDOMServer from "react-dom/server";\nimport ServerStyleSheets from "@sonnat/ui/styles/ServerStyleSheets";\nimport SonnatInitializer from "@sonnat/ui/styles/SonnatInitializer";\nimport CssBaseline from "@sonnat/ui/CssBaseline";\nimport App from "./App";\nimport theme from "./theme";\n\nfunction renderFullPage(html, css) {\n  return `\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>My page</title>\n        <style id="sonnat-jss-ssr">${css}</style>\n      </head>\n      <body>\n        <div id="root">${html}</div>\n      </body>\n    </html>\n  `;\n}\n\nfunction handleRender(req, res) {\n  const sheets = new ServerStyleSheets();\n\n  // Render the component to a string.\n  const html = ReactDOMServer.renderToString(\n    sheets.collect(\n      <SonnatInitializer theme={theme}>\n        <CssBaseline />\n        <App />\n      </SonnatInitializer>\n    )\n  );\n\n  // Grab the CSS from the sheets.\n  const css = sheets.toString();\n\n  // Send the rendered page back to the client.\n  res.send(renderFullPage(html, css));\n}\n\nconst app = express();\n\napp.use("/build", express.static("build"));\n\n// This is fired every time the server-side receives a request.\napp.use(handleRender);\n\nconst port = 3000;\napp.listen(port);\n')),Object(i.b)("div",{"data-notebox":!0,style:{marginBottom:"1rem"}},"Check out the documentations of"," ",Object(i.b)("a",{href:"/docs/styling#sonnat-initializer",title:"SonnatInitializer documentation"},Object(i.b)("strong",null,"<SonnatInitializer>"))," ","and"," ",Object(i.b)("a",{href:"/docs/components/CssBaseline",title:"CssBaseline documentation"},Object(i.b)("strong",null,"<CssBaseline>")),", to learn more about them."),Object(i.b)("h3",null,Object(i.b)("span",null,"Client-side"),Object(i.b)(l.a,{anchorId:"clientside",mdxType:"AnchorButton"})),Object(i.b)("p",null,"The client side is straightforward. All we need to do is remove the server-side generated CSS."),Object(i.b)("pre",null,Object(i.b)("code",m({parentName:"pre"},{className:"language-jsx"}),'// file: client.js\n\nimport React from "react";\nimport ReactDOM from "react-dom";\nimport SonnatInitializer from "@sonnat/ui/styles/SonnatInitializer";\nimport CssBaseline from "@sonnat/ui/CssBaseline";\nimport App from "./App";\nimport theme from "./theme";\n\nfunction Main() {\n  React.useEffect(() => {\n    const jssStyles = document.querySelector("#sonnat-jss-ssr");\n    if (jssStyles) {\n      jssStyles.parentElement.removeChild(jssStyles);\n    }\n  }, []);\n\n  return (\n    <SonnatInitializer theme={theme}>\n      <CssBaseline />\n      <App />\n    </SonnatInitializer>\n  );\n}\n\nReactDOM.hydrate(<Main />, document.querySelector("#root"));\n')),Object(i.b)("h2",null,Object(i.b)("span",null,"Next.js"),Object(i.b)(l.a,{anchorId:"nextjs",mdxType:"AnchorButton"})),Object(i.b)("p",null,"We host nextjs implementation which you can find in the"," ",Object(i.b)("a",{href:"https://github.com/sonnat/sonnat-ui",rel:"noopener noreferrer",target:"_blank"},"GitHub repository")," ","under the"," ",Object(i.b)("a",{href:"https://github.com/sonnat/sonnat-ui/tree/main/examples/nextjs",rel:"noopener noreferrer",target:"_blank"},"/examples")," ","folder."))}f.isMDXComponent=!0}},[["377g",0,1,2,3,4,5]]]);