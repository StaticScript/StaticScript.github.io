---
title: Variable & Constant
order: 5
---

## General

The variables and constants need to be declared before use.

## Variables

When declared, variables must be explicitly typed or initialized (for type derivation).

## Constants

When declared, constants must be initialized, and explicit type annotations are optional.

## The difference between variables and constants

- The declaration modifier of a variables is `let`, while that of constants is `const`.
- Constants can only be assigned when they are declared, and secondary assignments are not allowed.

## Examples of variable declaration

Declare Boolean variables

```ts
// Explicit type
let a: boolean;
// Type derivation
let b = true;
```

Declare integer variables

```ts
// Explicit type
let c: int;
// Type derivation
let d = 1;
```

Declare float-point variables

```ts
// Explicit type
let e: number;
// Type derivation
let f = 1.2;
```

Declare string variable

```ts
// Explicit type
let g: string;
// Type derivation
let h = 'content';
```

Declare array variable

```ts
// Explicit type
let i: number[] = [];
// Type derivation
let j = [1, 2];
```

## Examples of constant declaration

Declare boolean constants

```ts
// Explicit type
const a: boolean;
// Type derivation
const b = true;
```

Declare integer constant

```ts
// Explicit type
const c: int;
// Type derivation
const d = 1;
```

Declare float-point constant

```ts
// Explicit type
const e: number;
// Type derivation
const f = 1.2;
```

Declare string constants

```ts
// Explicit type
const g: string;
// Type derivation
const h = 'content';
```

Declare array constants

```ts
// Explicit type
const i: number = [];
// Type derivation
const j = [1, 2];
```

## Possible semantic errors

Variables are declared with no explicit type or initial value.

```ts
// error
let a;
```

When a variable or constant is declared, the explicit type conflicts with the automatically derived type.

```ts
// error
let a: number = true;
// error
const a: string = 20;
```

Constants are declared without initial values.

```ts
// error
const A;
// error
const B: number;
```

Constants are assigned twice after declaration.

```ts
// error
const A = 10;
A = 20;
```

An empty array of type is not explicitly declared.

```ts
// error
let arr1 = [];

// error
const arr2 = [];
```

> StaticScript cannot infer a type from an empty array.
