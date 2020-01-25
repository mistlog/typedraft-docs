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
