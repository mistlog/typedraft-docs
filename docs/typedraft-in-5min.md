---
id: typedraft-in-5min
title: TypeDraft in 5 minutes
sidebar_label: TypeDraft in 5 minutes
---

Welcome to the TypeDraft docs!

TypeDraft is a superset of typescript with built-in support for DSL extension and literate programming. TypeDraft transcribes to readable TypeScript, and you can try it out at the [playground](https://mistlog.github.io/typedraft-playground/).

## Installing TypeDraft

You can install it globally:
```shell
npm i -g typedraft
```

## Build your first TypeDraft file
In your editor, type the following typescript code in demo.tsx:

```typescript
export function Main() {
  console.log("hello from main");
  <ContextA/>;
}

function ContextA() {
  console.log("hello from context A");
}
```

As typedraft is a superset of typescript, you still write typescript here, but in a slightly different way.

The function declaration ```ContextA``` here is not used to declare a function, instead, it's used to denote a ```local context```.

Local context is used as standalone JSX element. All statements in a local context will be processed and put in the place of JSX element. This step of transform is called transcription.

## Transcribe

At the command line, run the CLI tool(td: typedraft):

```shell
> td ./demo.tsx
```

The result will be a file ```demo.ts``` which contains valid and readable typescript code:

```typescript
export function Main() {
  console.log("hello from main");
  console.log("hello from context A");
}
```

In the example of [polynomial addtion algorithm](https://github.com/mistlog/algorithm/blob/master/source-view/linear-list/polynomial-addition.md), we use local context to sketch the skeleton of algorithm and keep the logic clear and concise.

```typescript
<Polynomial /> +
    function Add(this: Polynomial, another: Polynomial) {
        const P = this.m_Items;
        const Q = [...another.m_Items];
        let p = 0;
        let q = 0;
        for (;;) {
            if (P[p].m_Exponential < Q[q].m_Exponential) {
                <MoveToNextItemOfQ />;
            } else if (P[p].m_Exponential === Q[q].m_Exponential) {
                <CheckIfFinishedAndReturn />;
                <AddCoefficients />;
            } else if (P[p].m_Exponential > Q[q].m_Exponential) {
                <InsertNewItem />;
            }
        }
    };
```

The syntax ```JSX + function declaration``` is used to denote ```method addition```.

## Method Addition

To support literate programming, we need to figure out a way to reorder code. Method addition is a convention to reorder method of class.

In your editor, type the following typescript code:

```typescript
export class ClassTest { }

/*
put important method first
*/
<ClassTest /> +
    function ImportMethodA()
    {
        console.log("in important method");
    };

/*
trivial
*/
<ClassTest /> +
    function constructor()
    {
        <TrivialInitialization />;
    };

function TrivialInitialization()
{
    console.log("in trivial init");
}
```

transcribe it and get:

```typescript
export class ClassTest {
  ImportMethodA() {
    console.log("in important method");
  }

  constructor() {
    console.log("in trivial init");
  }

}
```

That's the basic of typedraft, for more details, see [concepts](../concepts/concepts.md).