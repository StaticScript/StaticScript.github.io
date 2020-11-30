---
title: 变量和常量
order: 5
---

## 概述

StaticScript 的变量和常量均需要先声明后使用

## 变量

在声明时, 变量必须显式地标注类型或者赋初值(用于类型推导)

## 常量

在声明时, 常量必须赋初值, 而显式的类型标注则是可选的

## 常量与变量的区别

- 变量的声明修饰符是`let`, 而常量的声明修饰符是`const`
- 常量只能在声明时赋值, 不允许二次赋值

## 变量声明示例

声明布尔变量

```ts
// 显式类型
let a: boolean;
// 类型推导
let b = true;
```

声明数字变量

```ts
// 显式类型
let c: number;
// 类型推导
let d = 1;
```

声明字符串变量

```ts
// 显式类型
let e: string;
// 类型推导
let f = 'content';
```

声明数组

```ts
// 显式类型
let e: number[] = [];
// 类型推导
let f = [1, 2];
```

## 常量声明示例

声明布尔常量

```ts
// 显式类型
const a: boolean;
// 类型推导
const b = true;
```

声明数字常量

```ts
// 显式类型
const c: number;
// 类型推导
const d = 1;
```

声明字符串常量

```ts
// 显式类型
const e: string;
// 类型推导
const f = 'content';
```

声明数组常量

```ts
// 显式类型
const e: number = [];
// 类型推导
const f = [1, 2];
```

## 可能的语义报错

变量在声明时既没有显式类型, 也没有初值

```ts
// error
let a;
```

变量或者常量在声明时, 显式类型和自动推导出来的类型冲突

```ts
// error
let a: number = true;
// error
const a: string = 20;
```

常量在声明的时候没有赋初值

```ts
// error
const A;
// error
const B: number;
```

常量在声明后被二次赋值

```ts
// error
const A = 10;
A = 20;
```

没有显式声明类型的空数组

```ts
// error
let arr1 = [];

// error
const arr2 = [];
```

> 之所以报错是因为 StaticScript 无法从空数组推导出类型
