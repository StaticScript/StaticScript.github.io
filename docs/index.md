---
title: StaticScript
order: 10
hero:
  title: StaticScript
  desc: StaticScript是一门类似于TypeScript的编程语言
  actions:
    - text: 快速上手
      link: /guide/getting-started
features:
  - icon: /assets/images/out-of-the-box.png
    title: 开箱即用
  - icon: /assets/images/high-performance.png
    title: 高性能
  - icon: /assets/images/modular.png
    title: 模块化
footer: Open-source MIT Licensed | Copyright © 2020<br />Powered by [dumi](https://d.umijs.org)
---

## 代码示例

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

// 加减乘除
let sum = a + b;
let diff = a - b;
let product = a * b;
let quotient = a / b;

a = a << 1; // 等效于 `a <<= 1`
b = b >> 1; // 等效于 `b >>= 1`

let year = '2020',
  month = '08',
  day = '06';
let birthday = year + '/' + month + '/' + day;

if (a < b) {
  ss_println_string('b更大');
} else {
  ss_println_string('b不比a大');
}

let max = a;
if (a < b) {
  max = b;
}

// 计算[1, 100]间所有偶数的和
let sum1 = 0;
let i = 1;
while (i <= 100) {
  if (i % 2 == 0) {
    sum1 += i;
  }
}

// 计算[1, 100]间所有整数的和
let sum2 = 0;
for (let i = 1; i <= 100; i++) {
  sum2 += i;
}

function add(x: number, y: number): number {
  return x + y;
}

let sumsum = add(sum1, sum2);
```
