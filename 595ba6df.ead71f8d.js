(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{146:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return l}));var i=a(2),r=a(9),n=(a(0),a(165)),o={id:"literate-programming",title:"Literate Programming",sidebar_label:"Literate Programming"},c={id:"literate-programming",isDocsHomePage:!1,title:"Literate Programming",description:"If TypeScript is JavaScript that scales, then TypeDraft is TypeScript that scales.",source:"@site/docs/literate-programming.md",permalink:"/typedraft-docs/docs/literate-programming",editUrl:"https://github.com/mistlog/typedraft-docs/edit/master/docs/literate-programming.md",sidebar_label:"Literate Programming",sidebar:"docs",previous:{title:"Block as DSL",permalink:"/typedraft-docs/docs/block-as-dsl"}},s=[{value:"Design/Document First",id:"designdocument-first",children:[]},{value:"Separation of Coding and Reading",id:"separation-of-coding-and-reading",children:[]},{value:"Understandable Code",id:"understandable-code",children:[]},{value:"Reuse Best Practice",id:"reuse-best-practice",children:[]}],d={rightToc:s};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(i.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"If TypeScript is JavaScript that scales, then TypeDraft is TypeScript that scales."),Object(n.b)("p",null,"TypeDraft focuses on maintenance of code at the first place, it encourages developer to write comprehensible code. The paradigm it takes is ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Literate_programming"}),"Literate Programming"),"."),Object(n.b)("h2",{id:"designdocument-first"},"Design/Document First"),Object(n.b)("p",null,"In typedraft, we still write code, however, code comes after design. "),Object(n.b)("p",null,"With the help of ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"https://mistlog.github.io/typedraft-docs/docs#method-addition"}),"Method Addition"),", we don't need to put all methods in class body and get spaghetti code. Together with macro, we can always compose our design in snippets(less than 50 lines of code), and you can rearrange your code in any order, for example, put trivial import and setup code at the end of file: see ",Object(n.b)("inlineCode",{parentName:"p"},"ray trivial setup")," in ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"https://mistlog.github.io/ray-tracing/src/sections/ray/section.html#result"}),"Ray Tracing"),"."),Object(n.b)("h2",{id:"separation-of-coding-and-reading"},"Separation of Coding and Reading"),Object(n.b)("p",null,"Use ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/johtela/litscript"}),"litscript")," with typedraft, you can write code in editor but view it in article form. In ",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/mistlog/ray-tracing"}),"Ray Tracing"),", we write code in article style with inline comments, after conversion, each file is converted to an article. "),Object(n.b)("p",null,"For example:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"code: ",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/mistlog/ray-tracing/blob/master/src/sections/output-an-image/section.tsx"}),"src/sections/output-an-image/section.tsx")),Object(n.b)("li",{parentName:"ul"},"article: ",Object(n.b)("a",Object(i.a)({parentName:"li"},{href:"https://mistlog.github.io/ray-tracing/src/sections/output-an-image/section.html"}),"src/sections/output-an-image/section.html"))),Object(n.b)("h2",{id:"understandable-code"},"Understandable Code"),Object(n.b)("p",null,'To demonstrate the concept of "lerp" in ',Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"https://mistlog.github.io/ray-tracing/src/sections/ray/section.html#generate-color"}),"Rays, a Simple Camera, and Background"),", interactive demo is added to just that line of code. Suppose that any part of your code is less than 50 lines, and all come with good illustration or interactive demo, each part then can be well investigated."),Object(n.b)("h2",{id:"reuse-best-practice"},"Reuse Best Practice"),Object(n.b)("p",null,"Beyond that, with macro, typedraft can be used in large scale code generation, just like article generation as long as you can extract those boilerplate code to DSL."))}l.isMDXComponent=!0}}]);