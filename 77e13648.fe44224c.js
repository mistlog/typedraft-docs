(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return d}));var o=n(2),a=n(9),s=(n(0),n(166)),l={id:"jsx-as-macro",title:"JSX as Macro",sidebar_label:"JSX as Macro"},c={id:"jsx-as-macro",isDocsHomePage:!1,title:"JSX as Macro",description:"Nested Macro",source:"@site/docs/jsx-as-macro.md",permalink:"/typedraft-docs/docs/jsx-as-macro",editUrl:"https://github.com/mistlog/typedraft-docs/edit/master/docs/jsx-as-macro.md",sidebar_label:"JSX as Macro",sidebar:"docs",previous:{title:"TypeDraft in 5 minutes",permalink:"/typedraft-docs/docs/"},next:{title:"DSL",permalink:"/typedraft-docs/docs/dsl"}},i=[{value:"Nested Macro",id:"nested-macro",children:[]},{value:"Pseudo Arguments",id:"pseudo-arguments",children:[]},{value:"Used with Class",id:"used-with-class",children:[]}],r={rightToc:i};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(o.a)({},r,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"nested-macro"},"Nested Macro"),Object(s.b)("p",null,"As showed in ",Object(s.b)("a",Object(o.a)({parentName:"p"},{href:"/typedraft-docs/docs/"}),"typedraft-in-5min"),", if we declare a function and use it as standalone JSX element, the JSX element will be replaced by the body of this function:"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="demo.tsx"',title:'"demo.tsx"'}),'export function Main() {\n  console.log("hello from main");\n  <ContextA />;\n}\n\nfunction ContextA() {\n  console.log("hello from context A");\n}\n')),Object(s.b)("p",null,"Beyond that, it supports nesting:"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="demo.tsx"',title:'"demo.tsx"'}),'export function Main() {\n  console.log("hello from main");\n  <ContextA />;\n}\n\nfunction ContextA() {\n  console.log("hello from context A");\n  <ContextA2 />;\n}\n\nfunction ContextA2() {\n  console.log("hello from context A, nested");\n}\n')),Object(s.b)("p",null,"the result will be:"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="demo.ts"',title:'"demo.ts"'}),'export function Main() {\n  console.log("hello from main");\n  console.log("hello from context A");\n  console.log("hello from context A, nested");\n}\n')),Object(s.b)("p",null,'Sometimes it\'s not necessary to extract statements as functions, this kind of "statement replacement" simplifies code and helps you to always keep focus on a short snippet of code.'),Object(s.b)("p",null,"The function declaration will be referred to as macro definition, and the function name will be used as the name of macro. For example, we have macro ",Object(s.b)("inlineCode",{parentName:"p"},"ContextA")," and ",Object(s.b)("inlineCode",{parentName:"p"},"ContextA2"),"."),Object(s.b)("h2",{id:"pseudo-arguments"},"Pseudo Arguments"),Object(s.b)("p",null,"In situations such as:"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="demo.tsx"',title:'"demo.tsx"'}),"function Main() {\n  for (let i = 0; i < 10; ++i) {\n    //@ts-ignore\n    <Iteration />;\n  }\n}\n\nfunction Iteration(i: number) {\n  console.log(i);\n}\n")),Object(s.b)("p",null,"Arguments will be ignored because only body of the macro definition matters:"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="demo.ts"',title:'"demo.ts"'}),"function Main() {\n  for (let i = 0; i < 10; ++i) {\n    console.log(i);\n  }\n}\n")),Object(s.b)("h2",{id:"used-with-class"},"Used with Class"),Object(s.b)("p",null,'As any arguments will be ignored, we can add "this" argument when macro is used with class:'),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="demo.tsx"',title:'"demo.tsx"'}),"export class ClassTest {\n  m_Data: Array<number>;\n}\n\n<ClassTest /> +\n  function constructor(this: ClassTest) {\n    this.m_Data = [1, 2, 3];\n    <Log />;\n  };\n\nfunction Log(this: ClassTest) {\n  console.log(`data: ${this.m_Data}`);\n}\n")),Object(s.b)("p",null,"The result will be:"),Object(s.b)("pre",null,Object(s.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="demo.ts"',title:'"demo.ts"'}),"export class ClassTest {\n  m_Data: Array<number>;\n\n  constructor() {\n    this.m_Data = [1, 2, 3];\n    console.log(`data: ${this.m_Data}`);\n  }\n}\n")))}d.isMDXComponent=!0}}]);