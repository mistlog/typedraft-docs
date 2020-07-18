---
id: implement-a-dsl
title: Implement a DSL
sidebar_label: Implement a DSL
---

## What Are We Building?

In this tutorial, we’ll show how to build a DSL with typedraft.

You can see what we’ll be building here: [dsl-debug-demo](https://github.com/mistlog/dsl-debug-demo). We recommend that you check out the repo before continuing with the tutorial.

This DSL allows you to write code such as: 

```ts title="src/demo.tsx"
let value = 1;

{
    "use debug";
    console.log(`[Debug]: value is ${value}`);
} 
```

and when you build the project using `npm run build`, `NODE_ENV` is set to `production` so that this block of code will be removed:

```ts title="src/demo.ts"
let value = 1;
```

if you use `npm run dev`, `NODE_ENV` will be `dev`, and you will get:

```ts title="src/demo.ts"
let value = 1;
console.log(`[Debug]: value is ${value}`);
```

After this tutorial, you can implement your own dsl, for example, you can implement "dev" and "production":

```ts title="src/demo.tsx"
let url: string = "";
{
    "use dev";
    url = ... // address in test environment 
}

{
    "use production";
    url = ... // address in production environment
}
```

## Show Me The Code

The interface of a DSL is: 

```ts
export interface IDSL {
    Transcribe(block: Array<Statement>): Array<Statement>;
}
```

A DSL takes an array of `Statement`, and return another array of `Statement`. In this demo:

```ts title="typedraft.config.ts" {10-20}
class Debug implements IDSL {
    m_Merge?: boolean;
    m_Env: string;

    constructor(option: { merge: boolean, env: string }) {
        this.m_Merge = option?.merge;
        this.m_Env = option?.env;
    }

    Transcribe(block: Array<Statement>): Array<Statement> {
        if (this.m_Env === "dev") {
            const [use_dsl, ...rest] = block;
            return rest;
        }
        else if (this.m_Env === "production") {
            return [];
        }

        throw new Error(`invalid env: ${this.m_Env}, please use dev or production`);
    }
}
```

`NODE_ENV` is passed in constructor, thus we can use it in `Transcribe` to decide statements to return.

```ts  title="typedraft.config.ts" {5}
export default {
    DSLs: [
        {
            name: "debug",
            dsl: () => new Debug({ merge: true, env: process.env.NODE_ENV || "dev" })
        }
    ]
}
```

If we are in `dev` mode, we will remove just the statement `use debug` by only returning "the rest of" original statements. When in `production`, we will remove all statements by returning an empty array.

## Learn About AST

We use `babel` to transform code, and the `Statement` type comes from `@babel/types`. So the prerequisite of implementing a DSL is that you have basic knowledge of babel AST. 

Reference material can be found in [Babel Plugin Handbook](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md).