---
id: jsx-as-macro
title: JSX as Macro
sidebar_label: JSX as Macro
---

## Nested Macro

As showed in [typedraft-in-5min](./typedraft-in-5min.md), if we declare a function and use it as standalone JSX element, the JSX element will be replaced by the body of this function:

```ts title="demo.tsx"
export function Main() {
  console.log("hello from main");
  <ContextA />;
}

function ContextA() {
  console.log("hello from context A");
}
```

Beyond that, it supports nesting:

```ts title="demo.tsx"
export function Main() {
  console.log("hello from main");
  <ContextA />;
}

function ContextA() {
  console.log("hello from context A");
  <ContextA2 />;
}

function ContextA2() {
  console.log("hello from context A, nested");
}
```

the result will be:

```ts title="demo.ts"
export function Main() {
  console.log("hello from main");
  console.log("hello from context A");
  console.log("hello from context A, nested");
}
```

Sometimes it's not necessary to extract statements as functions, this kind of "statement replacement" simplifies code and helps you to always keep focus on a short snippet of code.

The function declaration will be referred to as macro definition, and the function name will be used as the name of macro. For example, we have macro `ContextA` and `ContextA2`.

## Pseudo Arguments

In situations such as:

```ts title="demo.tsx"
function Main() {
  for (let i = 0; i < 10; ++i) {
    //@ts-ignore
    <Iteration />;
  }
}

function Iteration(i: number) {
  console.log(i);
}
```

Arguments will be ignored because only body of the macro definition matters:

```ts title="demo.ts"
function Main() {
  for (let i = 0; i < 10; ++i) {
    console.log(i);
  }
}
```

## Used with Class

As any arguments will be ignored, we can add "this" argument when macro is used with class:

```ts title="demo.tsx"
export class ClassTest {
  m_Data: Array<number>;
}

<ClassTest /> +
  function constructor(this: ClassTest) {
    this.m_Data = [1, 2, 3];
    <Log />;
  };

function Log(this: ClassTest) {
  console.log(`data: ${this.m_Data}`);
}
```

The result will be:

```ts title="demo.ts"
export class ClassTest {
  m_Data: Array<number>;

  constructor() {
    this.m_Data = [1, 2, 3];
    console.log(`data: ${this.m_Data}`);
  }
}
```
