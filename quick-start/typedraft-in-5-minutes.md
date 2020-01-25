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
    return a.toString() + b;
};

function Bar(this: Foo, a: number, b: string) {
    a += Foo.foo;
    //@ts-ignore
    <Nested/>
    console.log("bar");
}

function Nested() {
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
