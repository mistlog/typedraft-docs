(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var l=n(2),a=n(9),o=(n(0),n(165)),s={id:"block-as-dsl",title:"Block as DSL",sidebar_label:"Block as DSL"},c={id:"block-as-dsl",isDocsHomePage:!1,title:"Block as DSL",description:"TypeDraft Config",source:"@site/docs/block-as-dsl.md",permalink:"/typedraft-docs/docs/block-as-dsl",editUrl:"https://github.com/mistlog/typedraft-docs/edit/master/docs/block-as-dsl.md",sidebar_label:"Block as DSL",sidebar:"docs",previous:{title:"JSX as Macro",permalink:"/typedraft-docs/docs/jsx-as-macro"},next:{title:"Literate Programming",permalink:"/typedraft-docs/docs/literate-programming"}},i=[{value:"TypeDraft Config",id:"typedraft-config",children:[]},{value:"Inline DSL",id:"inline-dsl",children:[{value:"Merge",id:"merge",children:[]}]},{value:"Use DSL in Macro",id:"use-dsl-in-macro",children:[{value:"Nested DSL",id:"nested-dsl",children:[]}]}],r={rightToc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(l.a)({},r,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"typedraft-config"},"TypeDraft Config"),Object(o.b)("p",null,"Before using a DSL, we have to register it in ",Object(o.b)("inlineCode",{parentName:"p"},"typedraft.config.ts"),". Create this file at the root of your project and export the config object. "),Object(o.b)("p",null,"For example, in ",Object(o.b)("a",Object(l.a)({parentName:"p"},{href:"https://github.com/mistlog/dsl-match-demo/blob/master/typedraft.config.ts"}),"dsl-match-demo"),", we have:"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typedraft.config.ts"',title:'"typedraft.config.ts"'}),'\nimport { PatternMatch } from "draft-dsl-match";\n\n\n/**\n * the default export will be the config object\n */  \nexport default {\n    DSLs: [{ name: "match", dsl: () => new PatternMatch(true) }],\n}\n')),Object(o.b)("p",null,"The interface of this config object:"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-ts"}),"export interface ITypeDraftConfig {\n    DSLs: Array<{ name: string; dsl: () => IDSL; }>;\n}\n")),Object(o.b)("h2",{id:"inline-dsl"},"Inline DSL"),Object(o.b)("p",null,"The syntax of inline DSL is:"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-ts"}),'...\n{\n    "use <dsl name>";\n    ...\n}\n...\n')),Object(o.b)("p",null,'The name of DSL is registered in the config file, suppose that we have DSL named as "match",'),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-ts",metastring:'title="demo.tsx"',title:'"demo.tsx"'}),'let value;\n\n{\n    "use match";\n\n    (value: 1) => console.log("value is 1");\n    (value: "a" | "b" | "c") => console.log("value is ...");\n    () => console.log("default here");\n}\n')),Object(o.b)("p",null,"this gives:"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-ts",metastring:'title="demo.ts"',title:'"demo.ts"'}),'let value;\n\nif (value === 1) {\n  console.log("value is 1");\n} else if (value === "a" || value === "b" || value === "c") {\n  console.log("value is ...");\n} else {\n  console.log("default here");\n}\n')),Object(o.b)("h3",{id:"merge"},"Merge"),Object(o.b)("p",null,'If you want to keep the code block, you can specify the "merge" param in DSL consturctor as ',Object(o.b)("inlineCode",{parentName:"p"},"false"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typedraft.config.ts" {9}',title:'"typedraft.config.ts"',"{9}":!0}),'\nimport { PatternMatch } from "draft-dsl-match";\n\n\n/**\n * the default export will be the config object\n */  \nexport default {\n    DSLs: [{ name: "match", dsl: () => new PatternMatch(false) }],\n}\n')),Object(o.b)("p",null,"then, the result will be:"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-ts",metastring:'title="demo.ts" {3,11}',title:'"demo.ts"',"{3,11}":!0}),'let value;\n\n{\n  if (value === 1) {\n    console.log("value is 1");\n  } else if (value === "a" || value === "b" || value === "c") {\n    console.log("value is ...");\n  } else {\n    console.log("default here");\n  }\n}\n')),Object(o.b)("h2",{id:"use-dsl-in-macro"},"Use DSL in Macro"),Object(o.b)("p",null,"When DSL is used in macro, the function body must start with ",Object(o.b)("inlineCode",{parentName:"p"},'"use <dsl name>"'),", for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-ts",metastring:'title="demo.tsx" {8}',title:'"demo.tsx"',"{8}":!0}),'export function Main() {\n    console.log("hello from main");\n    let value;\n    <ContextA />;\n}\n\nfunction ContextA(value) {\n    "use match";\n\n    (value: 1) => console.log("value is 1");\n    (value: "a" | "b" | "c") => console.log("value is ...");\n    () => console.log("default here");\n}\n')),Object(o.b)("p",null,"the result is:"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-ts",metastring:'title="demo.ts"',title:'"demo.ts"'}),'export function Main() {\n  console.log("hello from main");\n  let value;\n\n  if (value === 1) {\n    console.log("value is 1");\n  } else if (value === "a" || value === "b" || value === "c") {\n    console.log("value is ...");\n  } else {\n    console.log("default here");\n  }\n}\n')),Object(o.b)("h3",{id:"nested-dsl"},"Nested DSL"),Object(o.b)("p",null,'You can use inline DSL in "DSL in macro":'),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-ts",metastring:'title="demo.tsx" {13-21}',title:'"demo.tsx"',"{13-21}":!0}),'export function Main() {\n    console.log("hello from main");\n    let value;\n    <ContextA />;\n}\n\nfunction ContextA(value) {\n    "use match";\n\n    (value: 1) => console.log("value is 1");\n    (value: "a" | "b" | "c") => console.log("value is ...");\n    () => {\n        {\n            "use match";\n\n            (value: 2) => console.log("value is 2");\n            (value: "d" | "e" | "f") => console.log("value is ...");\n            () => {\n                console.log("default ...")\n            };\n        }\n    };\n}\n')),Object(o.b)("p",null,"the result is:"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-ts",metastring:'title="demo.ts" {10-16}',title:'"demo.ts"',"{10-16}":!0}),'export function Main() {\n  console.log("hello from main");\n  let value;\n\n  if (value === 1) {\n    console.log("value is 1");\n  } else if (value === "a" || value === "b" || value === "c") {\n    console.log("value is ...");\n  } else {\n    if (value === 2) {\n      console.log("value is 2");\n    } else if (value === "d" || value === "e" || value === "f") {\n      console.log("value is ...");\n    } else {\n      console.log("default ...");\n    }\n  }\n}\n')))}u.isMDXComponent=!0}}]);