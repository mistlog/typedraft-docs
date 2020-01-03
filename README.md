# Quick Start
Welcome to the typedraft docs!

TypeDraft is a superset of typescript with built-in support for DSL extension and literate programming.

You can have a try directly in https://repl.it/@mistlog/typedraft-quick-start

Then Let’s get started!

* [TypeDraft in 5 minutes](https://github.com/mistlog/typedraft/wiki#typedraft-in-5-minutes)
* [Concept](https://github.com/mistlog/typedraft/wiki#concept)
  * [Local Context](https://github.com/mistlog/typedraft/wiki#local-context)
  * [DSL](https://github.com/mistlog/typedraft/wiki#dsl)
  * [Literate Programming](https://github.com/mistlog/typedraft/wiki#literate-programming)

Or dive into examples:
## [TypeDraft](https://github.com/mistlog/typedraft/tree/master/source-view)

Typedraft is written in itself, instead of reading code, you may want to read document generated from code(use tool [source-view](https://github.com/mistlog/source-view)), because it's [in the order demanded by the logic and flow of our thoughts](https://en.wikipedia.org/wiki/Literate_programming). You can find them in [source-view](https://github.com/mistlog/typedraft/tree/master/source-view). Some examples are:

* [module](https://github.com/mistlog/typedraft/blob/master/source-view/code-object/module.md)
* [local context](https://github.com/mistlog/typedraft/blob/master/source-view/code-object/local-context.md)
* [method](https://github.com/mistlog/typedraft/blob/master/source-view/code-object/method.md)
* [class](https://github.com/mistlog/typedraft/blob/master/source-view/code-object/export-class.md)
* [transcriber](https://github.com/mistlog/typedraft/blob/master/source-view/core/transcriber.md)
* [plugin-local-context](https://github.com/mistlog/typedraft/blob/master/source-view/plug-in/draft-plugin-local-context.md)

## [Algorithm](https://github.com/mistlog/algorithm/tree/master/source-view)

Algorithm is implemented in typedraft and some examples are:

* [polynomial addition](https://github.com/mistlog/algorithm/blob/master/source-view/linear-list/polynomial-addition.md)
* [topological sort](https://github.com/mistlog/algorithm/blob/master/source-view/linear-list/topological-sort.md)

Latex and diagram are not displayed in github, so you may want to download them and use the [plugin](https://github.com/shd101wyy/markdown-preview-enhanced) to view them.

## [Jack VM](https://github.com/mistlog/jack-vm)

It's a stack based vm, moderate sized so that it's suitable for demonstrating the use of literate programming in a complex project.

* [command](https://github.com/mistlog/jack-vm/blob/master/source-view/core/command.md)
* [memory](https://github.com/mistlog/jack-vm/blob/master/source-view/core/memory.md)
* [stack](https://github.com/mistlog/jack-vm/blob/master/source-view/core/stack.md)
* [vm](https://github.com/mistlog/jack-vm/blob/master/source-view/core/vm.md)
* [parser](https://github.com/mistlog/jack-vm/blob/master/source-view/parser/parser.md)

# TypeDraft in 5 minutes

You can install it globally to use it as a CLI tool:
```shell
npm i -g typedraft
```

In your editor, type the following Typescript code in foo.tsx:

```typescript
export class Foo {
    static foo: number;
}

<Foo/> + function Test(this: Foo, a: number, b: string){
    //@ts-ignore
    <Bar/>;
    return a.toString()+b;
};

function Bar(this: Foo, a: number, b: string){
    a += Foo.foo;
    //@ts-ignore
    <Nested/>
    console.log("bar");
}

function Nested(){
    console.log("nested");
}
```

then, run:

```shell
td ./foo.tsx
```

and you will get ```foo.ts``` as:

```typescript
export class Foo {
  static foo: number;

  Test(a: number, b: string) {
    a += Foo.foo;
    console.log("nested");
    console.log("bar");
    return a.toString() + b;
  }

}
```

That's the basics of typedraft!

# Concept

## Local Context

The function declaration ```Nested``` and ```Bar```are called local context. You can change the order of them because it's just plain function declaration, thus you can put important context first and let the code follows your design.

The params in local context function declaration are not "real" params, they are identifiers used in this context, we write them just for compiler and avoid "undefined ... found". In this way, you still get the full power of typescript.

## DSL
You can also use DSL in local context, for example, update ```Nested```:

```diff typescript
function Nested()
{
    console.log("nested");

+   let value: string | number;
+   //@ts-ignore
+   <TestDSL/>;
}
```

and add ```TestDSL```:

```typescript
function TestDSL(value: number | string) {
    "use match";
    (value: "a") => {
        console.log("do something")
    }

    (value: 1) => {
        console.log("value is 1...")
    }

    () => {
        console.log("this is default")
    }
}
```

rerun, and you will get:

```diff
export class Foo {
  static foo: number;

  Test(a: number, b: string) {
    a += Foo.foo;
    console.log("nested");
+    let value: string | number;

+    if (value === "a") {
+      console.log("do something");
+    } else if (value === 1) {
+      console.log("value is 1...");
+    } else {
+      console.log("this is default");
+    }

    console.log("bar");
    return a.toString() + b;
  }

}
```

The "match" DSL is provided with typedraft, and you can create your own DSLs: https://repl.it/@mistlog/typedraft-simple-dsl. Or you can inspect the implementation of [match](https://github.com/mistlog/typedraft/blob/master/source-view/dsl/draft-dsl-match.md). [unit test cases](https://github.com/mistlog/typedraft/blob/master/test/dsl/dsl.test.ts) are also good document.

The interface of DSL is:

```typescript
export interface IDSL {
    Transcribe(block: Array<Statement>): Array<Statement>;
}
```

Thus a DSL is just a "statements to statements" translator. TypeDraft uses babel to transform your code, thus "write a DSL" === "write a babel plugin", but it can be applied in any part of your code. You can treat this feature as "local babel".

## Literate Programming
If we want to write code following our design, we should change the order of code. As we have local context, we can rearrange the code in function. However, we also write class code, thus we need a counterpart in the world of class, and the following syntax is proposed:

```typescript
<Foo/> + function Test(this: Foo, a: number, b: string){
    //@ts-ignore
    <Bar/>;
    return a.toString()+b;
};
```

In essence, we use ```JSX tag + fuction``` to express the intention that we want to "add" a method to class.
