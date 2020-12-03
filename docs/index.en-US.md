---
title: StaticScript
order: 10
hero:
  title: StaticScript
  desc: StaticScript is a programming language, syntactically like TypeScript.
  actions:
    - text: Getting Started
      link: /en-US/guide/getting-started
features:
  - icon: /assets/images/out-of-the-box.png
    title: Out of the Box
  - icon: /assets/images/high-performance.png
    title: High Performance
  - icon: /assets/images/modular.png
    title: Modular
footer: Open-source MIT Licensed | Copyright © 2020<br />Powered by [dumi](https://d.umijs.org)
---

## Code Example

```ts
let flag: boolean = true;
let count: int = 20;
let average: number = 1.23;
let content: string = 'Hello World';

const name = 'StaticScript';
const age = 1;
const developing = true;

let a = 1;
let b = 2;

// add, subtract, multiply and divide
let sum = a + b;
let diff = a - b;
let product = a * b;
let quotient = a / b;

a = a << 1; // equivalent to `a <<= 1`
b = b >> 1; // equivalent to `b >>= 1`

let year = '2020',
  month = '08',
  day = '06';
let birthday = year + '/' + month + '/' + day;

if (a < b) {
  ss_println_string('b is bigger');
} else {
  ss_println_string('b is not bigger');
}

let max = a;
if (a < b) {
  max = b;
}

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

function add(x: number, y: number): number {
  return x + y;
}

let sumsum = add(sum1, sum2);
```
