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
> npm i -g typedraft@0.2.5
```

## Build your first TypeDraft file

In your editor, type the following typescript code in `demo.tsx`:

```typescript title="demo.tsx"
export function Main() {
  console.log("hello from main");
  <ContextA />;
}

function ContextA() {
  console.log("hello from context A");
}
```

As typedraft is a superset of typescript, you still write typescript here, but in a slightly different way. The function declaration `ContextA` here is not used to declare a function, instead, it will be used as JSX element and get expanded after code transformation.

### Transcribe

At the command line, run the CLI tool(td: typedraft):

```shell
> td ./demo.tsx
```

The result will be a file `demo.ts` which contains valid and readable typescript code:

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
export class ClassTest {}


/**
 * put important method first
 */
<ClassTest /> +
  function ImportMethodA() {
    console.log("in important method");
  };


/**
 * trivial
 */
<ClassTest /> +
  function constructor() {
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

Take [draft-dsl-match](https://github.com/mistlog/draft-dsl-match/tree/develop) as an example, we can get full support of pattern match from it.

```shell
> git clone https://github.com/mistlog/dsl-match-demo.git
> cd dsl-match-demo
> npm install
> npm run build
```

> This project can also be used as template project for typedraft.

In this demo project, we have code in `src/vector.tsx`:

```ts title="src/vector.tsx"
import { MatchDSL } from "draft-dsl-match";

type Vector1 = { x: number };
type Vector2 = { x: number; y: number };
type Vector3 = {
  x: number;
  y: number;
  z: number;
};
type Vector = Vector1 | Vector2 | Vector3;

const vector: Vector = { x: 1 };
const result = Λ<string>("match")` ${vector as Vector} 
  ${{ x: 1, y: 1, z: 1 }} -> ${"vector3"}
  ${{ x: 2, y: 1 }} -> ${"vector2"}
  ${{ x: 1 }} -> ${"vector1"}`;

console.log(result);
```

transcribe it and get:

```ts title="src/vector.ts"
import { MatchDSL } from "draft-dsl-match";
type Vector1 = {
  x: number;
};
type Vector2 = {
  x: number;
  y: number;
};
type Vector3 = {
  x: number;
  y: number;
  z: number;
};
type Vector = Vector1 | Vector2 | Vector3;
const vector: Vector = {
  x: 1,
};
const result = MatchDSL<Vector, string>(vector)
  .with(
    {
      x: 1,
      y: 1,
      z: 1,
    },
    () => "vector3"
  )
  .with(
    {
      x: 2,
      y: 1,
    },
    () => "vector2"
  )
  .with(
    {
      x: 1,
    },
    () => "vector1"
  )
  .run();
console.log(result);
```

That's the basics of typedraft, for more examples of what’s possible in TypeDraft, see the Handbook in this site.
