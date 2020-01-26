# Concepts

## Local Context

Local context is function that used as standalone JSX Element. You can change the order of them because they are just plain function declarations, thus you can put important context first and let the code follows your design.

The params in local context function declaration are not "real" params, they are identifiers used in this context, we write them just for compiler and avoid "undefined ... found". In this way, you still get the full power of typescript.

```typescript
<VirtualMachine /> +
    function Load(this: VirtualMachine & IVirtualMachine, image: Image) {
        const reduced = image.reduce((commands: Array<ICommand>, current: ICommand) => {
            <HandleLabelRelated />;
            commands.push(current);
            return commands;
        }, []);
        this.m_CommandList.push(...reduced);
    };
```

For example, in the implementation of [jack vm](https://github.com/mistlog/jack-vm/blob/master/source-view/core/vm.md#load), we extract the logic of ```HandleLabelRelated``` to a local context, thus the logic in the ```Load``` method of ```VirtualMachine``` is straightforward.

```typescript
function HandleLabelRelated(this: VirtualMachine & IVirtualMachine, current: ICommand, commands: Array<ICommand>) {
    const index = commands.length;
    if (current instanceof Label) {
        current.Register(this, index);
        return commands;
    } else if (current instanceof DeclareFunction) {
        current.RegisterLabel(this, index);
    }
}
```

To leverage type check of typescript, we add missing variables to the argument list and they will be removed after transcription.

## Transcribe

Transcription is the process that transforms code with local context to plain typescript. The word "transcribe" is coined to differentiate it from words such as "compile" or "transpile".

Language we use today all are used to write code that runs. Instead of designed to be executed, code in typedraft is designed to be manipulated. 

The order of code is not the order of execution, for example, it doesn't make sense to "add" a function to a JSX element or to declare a function that used as standalone JSX element. The order of code follows our thought, write important one first and keep trivial one as appendix.

That's why this language is called "draft" as opposed to "script". It encourages us to write code for human to read and reason about, in the same way we write articles. For more details of this style of programming, please refer to [literate programming](https://en.wikipedia.org/wiki/Literate_programming).

## DSL

To be more expressive, the mode [babel](https://babeljs.io/) takes is baked into typedraft. We can extend this language with customized DSL. 

Take [draft-dsl-match](https://github.com/mistlog/draft-dsl-match) as an example, and you can see it in action in [typedraft playground](https://mistlog.github.io/typedraft-playground/):

```typescript
enum Type {
    Type1,
    Type2
}

export function Main(value: any) {
    <Match />;
}

function Match(value: any) {
    "use match";

    (value: "a") => {
        console.log("value is a");
    };

    (value: 1) => {
        <HandleValueIsNumber />;
    };

    (value: Type.Type1) => {
        console.log("value is type1");
    };

    () => {
        console.log("default here");
    };
}

function HandleValueIsNumber() {
    console.log("value is 1");
}

```

The result will be:

```typescript
enum Type {
  Type1,
  Type2,
}
export function Main(value: any) {
  if (value === "a") {
    console.log("value is a");
  } else if (value === 1) {
    console.log("value is 1");
  } else if (value === Type.Type1) {
    console.log("value is type1");
  } else {
    console.log("default here");
  }
}
```

It's clear from this example that we use arrow function to denote case we want to match, this is possible because the context is clear, since we declare the DSL we want to use at the beginning of a local context: "use match".

In this way, the rest of statements is customizable, and you can reinterpret the semantics of them by implementing a DSL. 

TypeDraft uses babel under the hood to transform code, and the way we implement a DSL is almost the same way we implement a plugin in babel. For babel plugin, see [babel plugin handbook](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md#toc-get-the-path-of-a-sub-node). 

For implementing DSL, see repo [draft-dsl-match](https://github.com/mistlog/draft-dsl-match), and examples in [unit test](https://github.com/mistlog/typedraft/blob/0.1.9/test/plug-in/plugin.test.ts#L178).