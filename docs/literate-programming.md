---
id: literate-programming
title: Literate Programming
sidebar_label: Literate Programming
---

If TypeScript is JavaScript that scales, then TypeDraft is TypeScript that scales.

TypeDraft focuses on maintenance of code at the first place, it encourages developer to write comprehensible code. The paradigm it takes is [Literate Programming](https://en.wikipedia.org/wiki/Literate_programming).

## Design/Document First

In typedraft, we still write code, however, code comes after design. 

With the help of [Method Addition](https://mistlog.github.io/typedraft-docs/docs#method-addition), we don't need to put all methods in class body and get spaghetti code. Together with macro, we can always compose our design in snippets(less than 50 lines of code), and you can rearrange your code in any order, for example, put trivial import and setup code at the end of file: see `ray trivial setup` in [Ray Tracing](https://mistlog.github.io/ray-tracing/src/sections/ray/section.html#result).

## Separation of Coding and Reading

Use [litscript](https://github.com/johtela/litscript) with typedraft, you can write code in editor but view it in article form. In [Ray Tracing](https://github.com/mistlog/ray-tracing), we write code in article style with inline comments, after conversion, each file is converted to an article. 

For example:

* code: [src/sections/output-an-image/section.tsx](https://github.com/mistlog/ray-tracing/blob/master/src/sections/output-an-image/section.tsx)
* article: [src/sections/output-an-image/section.html](https://mistlog.github.io/ray-tracing/src/sections/output-an-image/section.html)

## Understandable Code

To demonstrate the concept of "lerp" in [Rays, a Simple Camera, and Background](https://mistlog.github.io/ray-tracing/src/sections/ray/section.html#generate-color), interactive demo is added to just that line of code. Suppose that any part of your code is less than 50 lines, and all come with good illustration or interactive demo, each part then can be well investigated.

## Reuse Best Practice

Beyond that, with macro, typedraft can be used in large scale code generation, just like article generation as long as you can extract those boilerplate code to DSL.