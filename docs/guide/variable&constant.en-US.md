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

Declare Boolean variables.

```ts
// Explicit type
let a: boolean;
// Type derivation
let b = true;
```

Declare numeric variables.

```ts
// Explicit type
let c: number;
// Type derivation
let d = 1;
```

Declare string variable.

```ts
// Explicit type
let e: string;
// Type derivation
let f = 'content';
```

## Examples of constant declaration

Declare Boolean constants.

```ts
// Explicit type
const a: boolean;
// Type derivation
const b = true;
```

Declare a numeric constant.

```ts
// Explicit type
const c: number;
// Type derivation
const d = 1;
```

Declare string constants.

```ts
// Explicit type
const e: string;
// Type derivation
const f = 'content';
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
