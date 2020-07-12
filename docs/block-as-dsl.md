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

## Use DSL in Macro