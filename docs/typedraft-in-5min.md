---
id: typedraft-in-5min
title: TypeDraft in 5 minutes
sidebar_label: TypeDraft in 5 minutes
---

Welcome to the TypeDraft docs!

TypeDraft is a superset of typescript with built-in support for DSL extension and literate programming.

TypeDraft transcribes to readable TypeScript, and you can try it out at the [playground](https://mistlog.github.io/typedraft-playground/).

## Installing TypeDraft

You can install it globally:
```shell
> npm i -g typedraft
```

## Build your first TypeDraft file
In your editor, type the following typescript code in `demo.tsx`:

```typescript title="demo.tsx"
export function Main() {
  console.log("hello from main");
  <ContextA/>;
}

function ContextA() {
  console.log("hello from context A");
}
```

As typedraft is a superset of typescript, you still write typescript here, but in a slightly different way. The function declaration ```ContextA``` here is not used to declare a function, instead, it will be used as JSX element and get expanded after code transformation.

### Transcribe

At the command line, run the CLI tool(td: typedraft):

```shell
> td ./demo.tsx
```

The result will be a file ```demo.ts``` which contains valid and readable typescript code:

```ts title="demo.ts"
export function Main() {
  console.log("hello from main");
  console.log("hello from context A");
}
```

You can treat this feature as some kind of macro, the difference is that we don't manipulate string, instead, we transform AST.

### Method Addition

To support literate programming, we need to figure out a way to reorder code. Method addition is the way to reorder method of class.

In your editor, type the following typescript code:

```ts title="demo.tsx"
export class ClassTest { }


/**
 * put important method first
 */  
<ClassTest /> +
    function ImportMethodA()
    {
        console.log("in important method");
    };


/**
 * trivial
 */  
<ClassTest /> +
    function constructor()
    {
        <TrivialInitialization />;
    };

function TrivialInitialization() {
    console.log("in trivial init");
}
```

transcribe it and get:

```ts title="demo.ts"
export class ClassTest {
  ImportMethodA() {
    console.log("in important method");
  }

  constructor() {
    console.log("in trivial init");
  }

}
```

### DSL

Take [draft-dsl-match](https://github.com/mistlog/draft-dsl-match/tree/develop) as an example, we can get limited pattern match support from it.

```shell
> git clone https://github.com/mistlog/dsl-match-demo.git
> cd dsl-match-demo
> npm install
```

In this demo project, we have code in `demo.tsx`:

```ts title="demo.tsx"
export function Main(value: any) {
    {
        "use match";

        (value: 1) => <HandleValueIsNumber />;
        (value: "a" | "b" | "c") => console.log("value is ...");
        () => console.log("default here");
    }
}

function HandleValueIsNumber() {
    console.log("value is 1");
}
```

transcribe it and get:

```ts title="demo.ts"
export function Main(value: any) {
  if (value === 1) {
    console.log("value is 1");
  } else if (value === "a" || value === "b" || value === "c") {
    console.log("value is ...");
  } else {
    console.log("default here");
  }
}
```

That's the basics of typedraft, for more examples of what’s possible in TypeDraft, see the Handbook section of the website.