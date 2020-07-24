---
id: block-as-dsl
title: Block as DSL
sidebar_label: Block as DSL
---

## TypeDraft Config

Before using a DSL, we have to register it in `typedraft.config.ts`. Create this file at the root of your project and export the config object. 

For example, in [dsl-match-demo](https://github.com/mistlog/dsl-match-demo/blob/master/typedraft.config.ts), we have:

```ts title="typedraft.config.ts"

import { PatternMatch } from "draft-dsl-match";


/**
 * the default export will be the config object
 */  
export default {
    DSLs: [{ name: "match", dsl: () => new PatternMatch(true) }],
}
```

The interface of this config object:

``` ts
export interface ITypeDraftConfig {
    DSLs: Array<{ name: string; dsl: () => IDSL; }>;
}
```

## Inline DSL

The syntax of inline DSL is:

```ts
...
{
    "use <dsl name>";
    ...
}
...
```

The name of DSL is registered in the config file, suppose that we have DSL named as "match",

```ts title="demo.tsx"
let value;

{
    "use match";

    (value: 1) => console.log("value is 1");
    (value: "a" | "b" | "c") => console.log("value is ...");
    () => console.log("default here");
}
```

this gives:

```ts title="demo.ts"
let value;

if (value === 1) {
  console.log("value is 1");
} else if (value === "a" || value === "b" || value === "c") {
  console.log("value is ...");
} else {
  console.log("default here");
}
```

### Merge

If you want to keep the code block, you can specify the "merge" param in DSL consturctor as `false`:

```ts title="typedraft.config.ts" {9}

import { PatternMatch } from "draft-dsl-match";


/**
 * the default export will be the config object
 */  
export default {
    DSLs: [{ name: "match", dsl: () => new PatternMatch(false) }],
}
```

then, the result will be:

```ts title="demo.ts" {3,11}
let value;

{
  if (value === 1) {
    console.log("value is 1");
  } else if (value === "a" || value === "b" || value === "c") {
    console.log("value is ...");
  } else {
    console.log("default here");
  }
}
```

## Use DSL in Macro

When DSL is used in macro, the function body must start with `"use <dsl name>"`, for example:

```ts title="demo.tsx" {8}
export function Main() {
    console.log("hello from main");
    let value;
    <ContextA />;
}

function ContextA(value) {
    "use match";

    (value: 1) => console.log("value is 1");
    (value: "a" | "b" | "c") => console.log("value is ...");
    () => console.log("default here");
}
```

the result is:

```ts title="demo.ts"
export function Main() {
  console.log("hello from main");
  let value;

  if (value === 1) {
    console.log("value is 1");
  } else if (value === "a" || value === "b" || value === "c") {
    console.log("value is ...");
  } else {
    console.log("default here");
  }
}
```

### Nested DSL

You can use inline DSL in "DSL in macro":

```ts title="demo.tsx" {13-21}
export function Main() {
    console.log("hello from main");
    let value;
    <ContextA />;
}

function ContextA(value) {
    "use match";

    (value: 1) => console.log("value is 1");
    (value: "a" | "b" | "c") => console.log("value is ...");
    () => {
        {
            "use match";

            (value: 2) => console.log("value is 2");
            (value: "d" | "e" | "f") => console.log("value is ...");
            () => {
                console.log("default ...")
            };
        }
    };
}
```

the result is:

```ts title="demo.ts" {10-16}
export function Main() {
  console.log("hello from main");
  let value;

  if (value === 1) {
    console.log("value is 1");
  } else if (value === "a" || value === "b" || value === "c") {
    console.log("value is ...");
  } else {
    if (value === 2) {
      console.log("value is 2");
    } else if (value === "d" || value === "e" || value === "f") {
      console.log("value is ...");
    } else {
      console.log("default ...");
    }
  }
}
```