---
title: Quick Start
order: 3
---

## Variable and Constant Declaration

Here are some variable declarations.

```typescript
let flag: boolean = true;
let count: int = 20;
let average: number = 1.234;
let content: string = "Hello World";
```

Thanks to the type inference feature of StaticScript, we can write the above variable declaration as follows. They are exactly equivalent.

```typescript
let flag = true;
let count = 20;
let average = 1.234;
let content = "Hello World";
```

The compiler of StaticScript cleverly deduced the type of the variable from the initial value.

In addition to using `let` to declare variables, you can also use `const` to declare constants.

```typescript
const name = "StaticScript";
const age = 1;
const bound = 10.1;
const developing = true;
```

The difference between `let` and `const` is that constants declared with `const` cannot be modified.

## Variable Evaluation

You can use a wealth of operators to perform operations on variables, including arithmetic operations, bitwise operations, logical operations, relational operations, assignments, and string concatenation.

```typescript
let a = 1;
let b = 2;

// add, subtract, multiply and divide
let sum = a + b;
let diff = a - b;
let product = a * b;
let quotient = a / b;

a = a << 1; // equivalent to `a <<= 1`
b = b >> 1; // equivalent to `b >>= 1`

let year = "2020",
  month = "08",
  day = "06";
let birthday = year + "/" + month + "/" + day;
```

## Control Flow

```typescript
let a = 1;
let b = 100;
if (a < b) {
  ss_println_string("b is bigger");
} else {
  ss_println_string("b is not bigger");
}

let max = a;
if (a < b) {
  max = b;
}
```

## Loops

StaticScript supports using `while` statement and `for` statement to do some repetitive things.

```typescript
// Calculate the sum of all even numbers between [1, 100]
let sum1 = 0;
let i = 1;
while (i <= 100) {
  if (i % 2 == 0) {
    sum1 += i;
  }
}

// Calculate the sum of all integers between [1, 100]
let sum2 = 0;
for (let i = 1; i <= 100; i++) {
  sum2 += i;
}
```

## Function

StaticScript supports defining functions in the top level scope and using function in any scope.

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

The above function can omit the return type because StaticScript can deduce the return type through the expression of the return statement.

It is important to note that the parameter types of functions must be explicitly declared.
