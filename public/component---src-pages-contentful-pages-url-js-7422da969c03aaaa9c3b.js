"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[276],{4129:function(e,t,n){var r,l=n(7294),a=(r=l)&&"object"==typeof r&&"default"in r?r.default:r,E=function(){return E=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},E.apply(this,arguments)},o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};function c(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function i(e,t){return e(t={exports:{}},t.exports),t.exports}var u=i((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.EMBEDDED_RESOURCE="embedded-resource-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell",e.TABLE_HEADER_CELL="table-header-cell"}(t.BLOCKS||(t.BLOCKS={}))}));c(u);u.BLOCKS;var d=i((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.RESOURCE_HYPERLINK="resource-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline",e.EMBEDDED_RESOURCE="embedded-resource-inline"}(t.INLINES||(t.INLINES={}))}));c(d);d.INLINES;var s=i((function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code",e.SUPERSCRIPT="superscript",e.SUBSCRIPT="subscript"}(n||(n={})),t.default=n}));c(s);var L=i((function(e,t){var n,r=o&&o.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,l=0,a=t.length;l<a;l++)!r&&l in t||(r||(r=Array.prototype.slice.call(t,0,l)),r[l]=t[l]);return e.concat(r||Array.prototype.slice.call(t))},l=o&&o.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_MARKS=t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var a=l(s);t.TOP_LEVEL_BLOCKS=[u.BLOCKS.PARAGRAPH,u.BLOCKS.HEADING_1,u.BLOCKS.HEADING_2,u.BLOCKS.HEADING_3,u.BLOCKS.HEADING_4,u.BLOCKS.HEADING_5,u.BLOCKS.HEADING_6,u.BLOCKS.OL_LIST,u.BLOCKS.UL_LIST,u.BLOCKS.HR,u.BLOCKS.QUOTE,u.BLOCKS.EMBEDDED_ENTRY,u.BLOCKS.EMBEDDED_ASSET,u.BLOCKS.EMBEDDED_RESOURCE,u.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[u.BLOCKS.PARAGRAPH,u.BLOCKS.HEADING_1,u.BLOCKS.HEADING_2,u.BLOCKS.HEADING_3,u.BLOCKS.HEADING_4,u.BLOCKS.HEADING_5,u.BLOCKS.HEADING_6,u.BLOCKS.OL_LIST,u.BLOCKS.UL_LIST,u.BLOCKS.HR,u.BLOCKS.QUOTE,u.BLOCKS.EMBEDDED_ENTRY,u.BLOCKS.EMBEDDED_ASSET,u.BLOCKS.EMBEDDED_RESOURCE],t.TABLE_BLOCKS=[u.BLOCKS.TABLE,u.BLOCKS.TABLE_ROW,u.BLOCKS.TABLE_CELL,u.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[u.BLOCKS.HR,u.BLOCKS.EMBEDDED_ENTRY,u.BLOCKS.EMBEDDED_ASSET,u.BLOCKS.EMBEDDED_RESOURCE],t.CONTAINERS=((n={})[u.BLOCKS.OL_LIST]=[u.BLOCKS.LIST_ITEM],n[u.BLOCKS.UL_LIST]=[u.BLOCKS.LIST_ITEM],n[u.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,n[u.BLOCKS.QUOTE]=[u.BLOCKS.PARAGRAPH],n[u.BLOCKS.TABLE]=[u.BLOCKS.TABLE_ROW],n[u.BLOCKS.TABLE_ROW]=[u.BLOCKS.TABLE_CELL,u.BLOCKS.TABLE_HEADER_CELL],n[u.BLOCKS.TABLE_CELL]=[u.BLOCKS.PARAGRAPH],n[u.BLOCKS.TABLE_HEADER_CELL]=[u.BLOCKS.PARAGRAPH],n),t.HEADINGS=[u.BLOCKS.HEADING_1,u.BLOCKS.HEADING_2,u.BLOCKS.HEADING_3,u.BLOCKS.HEADING_4,u.BLOCKS.HEADING_5,u.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=r([u.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[u.BLOCKS.DOCUMENT,u.BLOCKS.PARAGRAPH,u.BLOCKS.HEADING_1,u.BLOCKS.HEADING_2,u.BLOCKS.HEADING_3,u.BLOCKS.HEADING_4,u.BLOCKS.HEADING_5,u.BLOCKS.HEADING_6,u.BLOCKS.OL_LIST,u.BLOCKS.UL_LIST,u.BLOCKS.LIST_ITEM,u.BLOCKS.HR,u.BLOCKS.QUOTE,u.BLOCKS.EMBEDDED_ENTRY,u.BLOCKS.EMBEDDED_ASSET,d.INLINES.HYPERLINK,d.INLINES.ENTRY_HYPERLINK,d.INLINES.ASSET_HYPERLINK,d.INLINES.EMBEDDED_ENTRY,"text"],t.V1_MARKS=[a.default.BOLD,a.default.CODE,a.default.ITALIC,a.default.UNDERLINE]}));c(L);L.V1_MARKS,L.V1_NODE_TYPES,L.TEXT_CONTAINERS,L.HEADINGS,L.CONTAINERS,L.VOID_BLOCKS,L.TABLE_BLOCKS,L.LIST_ITEM_BLOCKS,L.TOP_LEVEL_BLOCKS;var m=i((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));c(m);var f=i((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));c(f);var S=i((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n={nodeType:u.BLOCKS.DOCUMENT,data:{},content:[{nodeType:u.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=n}));c(S);var O=i((function(e,t){function n(e,t){for(var n=0,r=Object.keys(e);n<r.length;n++){if(t===e[r[n]])return!0}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0,t.isInline=function(e){return n(d.INLINES,e.nodeType)},t.isBlock=function(e){return n(u.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}}));c(O);O.isText,O.isBlock,O.isInline;var _=i((function(e,t){var n=o&&o.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var l=Object.getOwnPropertyDescriptor(t,n);l&&!("get"in l?!t.__esModule:l.writable||l.configurable)||(l={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,l)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),r=o&&o.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=o&&o.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},a=o&&o.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var l in e)"default"!==l&&Object.prototype.hasOwnProperty.call(e,l)&&n(t,e,l);return r(t,e),t},E=o&&o.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0,Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return u.BLOCKS}}),Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return d.INLINES}}),Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return E(s).default}}),l(L,t),l(m,t),l(f,t),Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return E(S).default}});var c=a(O);t.helpers=c}));c(_);var p,B,N=_.helpers,C=(_.EMPTY_DOCUMENT,_.MARKS),I=_.INLINES,T=_.BLOCKS;function D(e,t){return e.map((function(e,n){return r=A(e,t),a=n,l.isValidElement(r)&&null===r.key?l.cloneElement(r,{key:a}):r;var r,a}))}function A(e,t){var n=t.renderNode,r=t.renderMark,l=t.renderText,E=t.preserveWhitespace;if(N.isText(e)){var o=l?l(e.value):e.value;if(E){var c=(o=o.replace(/ {2,}/g,(function(e){return"&nbsp;".repeat(e.length)}))).split("\n"),i=[];c.forEach((function(e,t){i.push(e),t!==c.length-1&&i.push(a.createElement("br",null))})),o=i}return e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),o)}var u=D(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,u):a.createElement(a.Fragment,null,u)}var K=((p={})[T.DOCUMENT]=function(e,t){return t},p[T.PARAGRAPH]=function(e,t){return a.createElement("p",null,t)},p[T.HEADING_1]=function(e,t){return a.createElement("h1",null,t)},p[T.HEADING_2]=function(e,t){return a.createElement("h2",null,t)},p[T.HEADING_3]=function(e,t){return a.createElement("h3",null,t)},p[T.HEADING_4]=function(e,t){return a.createElement("h4",null,t)},p[T.HEADING_5]=function(e,t){return a.createElement("h5",null,t)},p[T.HEADING_6]=function(e,t){return a.createElement("h6",null,t)},p[T.EMBEDDED_ENTRY]=function(e,t){return a.createElement("div",null,t)},p[T.EMBEDDED_RESOURCE]=function(e,t){return a.createElement("div",null,t)},p[T.UL_LIST]=function(e,t){return a.createElement("ul",null,t)},p[T.OL_LIST]=function(e,t){return a.createElement("ol",null,t)},p[T.LIST_ITEM]=function(e,t){return a.createElement("li",null,t)},p[T.QUOTE]=function(e,t){return a.createElement("blockquote",null,t)},p[T.HR]=function(){return a.createElement("hr",null)},p[T.TABLE]=function(e,t){return a.createElement("table",null,a.createElement("tbody",null,t))},p[T.TABLE_ROW]=function(e,t){return a.createElement("tr",null,t)},p[T.TABLE_HEADER_CELL]=function(e,t){return a.createElement("th",null,t)},p[T.TABLE_CELL]=function(e,t){return a.createElement("td",null,t)},p[I.ASSET_HYPERLINK]=function(e){return R(I.ASSET_HYPERLINK,e)},p[I.ENTRY_HYPERLINK]=function(e){return R(I.ENTRY_HYPERLINK,e)},p[I.RESOURCE_HYPERLINK]=function(e){return g(I.RESOURCE_HYPERLINK,e)},p[I.EMBEDDED_ENTRY]=function(e){return R(I.EMBEDDED_ENTRY,e)},p[I.EMBEDDED_RESOURCE]=function(e,t){return g(I.EMBEDDED_RESOURCE,e)},p[I.HYPERLINK]=function(e,t){return a.createElement("a",{href:e.data.uri},t)},p),v=((B={})[C.BOLD]=function(e){return a.createElement("b",null,e)},B[C.ITALIC]=function(e){return a.createElement("i",null,e)},B[C.UNDERLINE]=function(e){return a.createElement("u",null,e)},B[C.CODE]=function(e){return a.createElement("code",null,e)},B[C.SUPERSCRIPT]=function(e){return a.createElement("sup",null,e)},B[C.SUBSCRIPT]=function(e){return a.createElement("sub",null,e)},B);function R(e,t){return a.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}function g(e,t){return a.createElement("span",{key:t.data.target.sys.urn},"type: ",t.nodeType," urn: ",t.data.target.sys.urn)}t.h=function(e,t){return void 0===t&&(t={}),e?A(e,{renderNode:E(E({},K),t.renderNode),renderMark:E(E({},v),t.renderMark),renderText:t.renderText,preserveWhitespace:t.preserveWhitespace}):null}},4572:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(7294),l=n(739),a=n(5086),E=n(4129),o=n(8032);var c=e=>{let{title:t,content:n,image:a}=e;return r.createElement(l.Z,null,r.createElement(i,{className:"content mx-3 aboutTemplate"},r.createElement("h2",null,t),r.createElement("div",{className:"about-content"},(0,E.h)(JSON.parse(n.raw))),r.createElement(o.G,{className:"my-3",id:"AboutImage",alt:t,image:a.gatsbyImage})))};const i=a.ZP.div`
  color: black;

  #AboutImage {
    width: 10vw;
    height: 10vw;
  }
`;var u=n(4854);var d=()=>{const e=(0,u.useStaticQuery)("562056141");return r.createElement(r.Fragment,null,r.createElement(s,null,r.createElement(L,null,r.createElement("div",{className:"mx-5"},e.allContentfulAbout.edges.map((e=>r.createElement("div",{key:e.node.id},r.createElement("div",{className:"circle1 "},r.createElement(m,null,r.createElement(f,null,e.node.jobTitle),r.createElement(S,null,e.node.firstName))),r.createElement("div",{className:"circle2 align-self-center about-container"},r.createElement("p",{className:"about-text"},e.node.description.description)),r.createElement(o.G,{className:"my-3",id:"AboutImage",alt:e.node.title,image:e.node.image.gatsbyImage}))))))))};const s=a.ZP.div`
  width: 100vw;
  height: 85vh;
  background-color: var(--main-bg-color);
  padding: 35vh 0 0 0;
  @media (max-width: 992px) {
    padding-top: 5vh;
  }
`,L=a.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto 0 5vw;
  width: 50vw;
  padding: 1em;
  @media (max-width: 992px) {
    width: 90vw;
  }
  .about-container {
    display: flex;
  }
  .about-text {
    text-align: start;
    /* margin-left: 1em; */
    /* width: 40vw; */
    font-family: "Courier New", Courier, monospace;
    color: var(--green);
  }
  .about-title {
    text-align: center;
    margin: 1em 1em 1em 1em;
  }
  .MeImage {
    /* align-items: center; */
    padding-top: auto;
    /* padding-bottom: auto; */
  }
  #AboutImage {
    width: 150px;
    height: 150px;
  }
`,m=a.ZP.p`
  font-family: "Poiret One", sans-serif;
  display: flex;
  flex-direction: column;
  text-align: start;
  width: 18em;
  line-height: 130%;
  padding: 10vh 0 5vh 0;
  /* border: 1px solid red; */
`,f=a.ZP.span`
  font-size: 1.5em;
  padding-left: 2em;
  color: var(--green);
  /* justify-content: end; */
`,S=a.ZP.span`
  font-family: "Poiret One", sans-serif;
  font-size: 4.5em;
  color: var(--green);
`;var O=e=>{let{title:t,content:n,data:a,text1:o,text2:c}=e;return r.createElement(l.Z,null,r.createElement(d,null),r.createElement("h2",null,"home-template"),r.createElement(_,null,r.createElement(p,null,o),r.createElement(B,null,c)),r.createElement("div",{className:"about-content homeTemplate"},(0,E.h)(JSON.parse(n.raw))))};const _=a.ZP.p`
  font-family: "Poiret One", sans-serif;
  display: flex;
  flex-direction: column;
  text-align: start;
  width: 18em;
  line-height: 130%;
  padding: 10vh 0 5vh 0;
  /* border: 1px solid red; */
`,p=a.ZP.span`
  font-size: 1.5em;
  padding-left: 2em;
  color: var(--green);
  /* justify-content: end; */
`,B=a.ZP.span`
  font-family: "Poiret One", sans-serif;
  font-size: 4.5em;
  color: var(--green);
`;var N=e=>{let{data:t}=e;return r.createElement("div",null,r.createElement("p",null,"Symbol:"))};var C=e=>{let{title:t,content:n,data:a,text1:o}=e;return r.createElement(l.Z,null,r.createElement(I,{className:"content mx-3 text-center contactTemplate"},r.createElement("h2",null,t),r.createElement("div",{className:"contact-content"},(0,E.h)(JSON.parse(n.raw))),r.createElement(N,null)))};const I=a.ZP.div`
  /* color: black; */
`;var T=e=>{let{title:t,content:n}=e;const a=(0,u.useStaticQuery)("654404448");return r.createElement(l.Z,null,r.createElement(D,{className:"content mx-3 portfolioTemplate"},r.createElement("h2",null,t," ",r.createElement("span",null,r.createElement("i",{class:"bi bi-0-circle-fill"}))),r.createElement("div",{className:"contact-content"},(0,E.h)(JSON.parse(n.raw))),r.createElement("div",{className:"posts row align-items-start justify-content-center mx-4 mx-sm-1"},a.allContentfulPortfolio.edges.map((e=>{const t=e.node.slug;return r.createElement("div",{className:"post col-sm-3 border m-2 py-3 d-flex flex-column text-center",key:e.node.id},r.createElement("h4",{className:"pb-3",id:"postTitle"},e.node.title),r.createElement(o.G,{className:"my-3",id:"postImage",alt:e.node.title,image:e.node.image.gatsbyImage}),r.createElement("p",null,e.node.text.text),r.createElement(u.Link,{to:`/portfolio/${t}`,className:"",id:"postSlug"}," ","Read more"," "))}))),r.createElement(u.Link,{to:"/"},"Go back to the homepage")))};const D=a.ZP.div`
  /* color: black; */
`;var A=e=>{let{title:t,content:n,text1:a,text2:o}=e;return r.createElement(l.Z,null,r.createElement(K,{className:"content mx-3 defaultTemplate"},r.createElement("h2",null,t," default-template"),r.createElement(v,null,r.createElement(R,null,o),r.createElement(g,null,a)),r.createElement("div",null,(0,E.h)(JSON.parse(n.raw)))))};const K=a.ZP.div`
  /* color: black; */
`,v=a.ZP.p`
  font-family: "Poiret One", sans-serif;
  display: flex;
  flex-direction: column;
  text-align: start;
  width: 18em;
  line-height: 130%;
  padding: 10vh 0 5vh 0;
  /* border: 1px solid red; */
`,R=a.ZP.span`
  font-size: 1.5em;
  padding-left: 2em;
  color: var(--green);
  /* justify-content: end; */
`,g=a.ZP.span`
  font-family: "Poiret One", sans-serif;
  font-size: 4.5em;
  color: var(--green);
`;var y=e=>{const{data:t}=e,{contentfulPages:n}=t;return r.createElement(l.Z,null,(e=>{switch(e.template){case"/":return r.createElement(O,e);case"about":return r.createElement(c,e);case"contact":return r.createElement(C,e);case"portfolio":return r.createElement(T,e);default:return r.createElement(A,e)}})(n)," ")}}}]);
//# sourceMappingURL=component---src-pages-contentful-pages-url-js-7422da969c03aaaa9c3b.js.map