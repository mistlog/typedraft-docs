(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),c=n(9),r=(n(0),n(166)),o={id:"dsl",title:"DSL",sidebar_label:"DSL"},i={id:"dsl",isDocsHomePage:!1,title:"DSL",description:"TypeDraft Config",source:"@site/docs/dsl.md",permalink:"/typedraft-docs/docs/dsl",editUrl:"https://github.com/mistlog/typedraft-docs/edit/master/docs/dsl.md",sidebar_label:"DSL",sidebar:"docs",previous:{title:"JSX as Macro",permalink:"/typedraft-docs/docs/jsx-as-macro"},next:{title:"Literate Programming",permalink:"/typedraft-docs/docs/literate-programming"}},s=[{value:"TypeDraft Config",id:"typedraft-config",children:[]},{value:"Inplace DSL",id:"inplace-dsl",children:[]},{value:"Inline DSL",id:"inline-dsl",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"typedraft-config"},"TypeDraft Config"),Object(r.b)("p",null,"Before using a DSL, we have to register it in ",Object(r.b)("inlineCode",{parentName:"p"},"typedraft.config.ts"),". Create this file at the root of your project and export the config object."),Object(r.b)("p",null,"For example, in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mistlog/dsl-match-demo/blob/master/typedraft.config.ts"}),"dsl-match-demo"),", we have:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="typedraft.config.ts"',title:'"typedraft.config.ts"'}),'import { PatternMatch } from "draft-dsl-match";\n\n\n/**\n * the default export will be the config object\n */\nexport default {\n  DSLs: [{ name: "match", dsl: () => new PatternMatch() }],\n};\n')),Object(r.b)("p",null,"The interface of this config object:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"export interface ITypeDraftConfig {\n  DSLs: Array<{ name: string; dsl: () => IDSL }>;\n}\n")),Object(r.b)("h2",{id:"inplace-dsl"},"Inplace DSL"),Object(r.b)("p",null,"In pattern match example: "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="vector.tsx"',title:'"vector.tsx"'}),'import { MatchDSL } from "draft-dsl-match";\n\ntype Vector1 = { x: number };\ntype Vector2 = { x: number; y: number };\ntype Vector3 = {\n    x: number;\n    y: number;\n    z: number;\n};\ntype Vector = Vector1 | Vector2 | Vector3;\n\nconst vector: Vector = { x: 1 };\nconst result = \u039b<string>("match")` ${vector as Vector} \n    ${{ x: 1, y: 1, z: 1 }} -> ${"vector3"}\n    ${{ x: 2, y: 1 }} -> ${"vector2"}\n    ${{ x: 1 }} -> ${"vector1"}\n`;\n\nconsole.log(result); // "vector1"\n')),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"\u039b")," is unicode ",Object(r.b)("inlineCode",{parentName:"p"},"U+039B"),", it resembles caret and is used to introduce a new context where you can apply a DSL, and ",Object(r.b)("inlineCode",{parentName:"p"},"<string>"),' is used to assert the output type. "match" is the name of the DSL. You can customize it in typedraft.config.ts.'),Object(r.b)("p",null,"It's hard to type ",Object(r.b)("inlineCode",{parentName:"p"},"\u039b"),", thus we recommend that you can create ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://code.visualstudio.com/docs/editor/userdefinedsnippets"}),"code snippet")," in vscode so that you can type it in this way:"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"../img/snippet.gif",alt:"snippet"}))),Object(r.b)("p",null,"The snippet you may want to reuse:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "dsl": {\n        "scope": "javascript,typescript,typescriptreact",\n        "prefix": "dsl",\n        "body": ["\u039b(\'$1\')` $2`"],\n        "description": "use dsl in typedraft"\n    }\n}\n')),Object(r.b)("h2",{id:"inline-dsl"},"Inline DSL"),Object(r.b)("p",null,"The syntax of inline DSL is:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'...\n{\n    "use <dsl name>";\n    ...\n}\n...\n')),Object(r.b)("p",null,'The name of DSL is registered in the config file, suppose that we have DSL named as "watch", which is used in ',Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mistlog/svelte-draft-tutorial/blob/master/src/examples/2-reactivity/reactive-declarations/App.tsx"}),"svelte-draft"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="demo.tsx"',title:'"demo.tsx"'}),'export default function App() {\n  let count = 0;\n\n  function handleClick() {\n    count += 1;\n  }\n\n  let doubled: number;\n\n  {\n    "use watch";\n    doubled = count * 2;\n  }\n\n  <button onClick={handleClick}>\n    Clicked {count} {count === 1 ? "time" : "times"}\n  </button>;\n  <p>\n    {count} doubled is {doubled}\n  </p>;\n}\n')),Object(r.b)("p",null,"this gives:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="demo.ts"',title:'"demo.ts"'}),"...\n$: {\n  doubled = count * 2;\n}\n...\n")))}p.isMDXComponent=!0}}]);