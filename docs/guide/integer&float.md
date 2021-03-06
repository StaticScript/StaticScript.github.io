---
title: 整数与浮点数
order: 8
---

在 StaticScript 中, 整型和浮点型被认为是相同的类型, 都属于数字类型

为了兼容 TypeScript, 设`number`类型为浮点型, 另设`int` 为整型

## 类型提升

当通过二元操作符对整数和浮点数进行运算时, 左算子为浮点数或者右算子为浮点数都会导致运算结果为浮点数, 例如

```ts
let x: int = 10;

let y: number = 11.1;

let z = x + y;
```

变量 x 为整型, 变量 y 为浮点型, 存储运算结果的变量 z 的类型为浮点型

## 整型转浮点型

除了类型提升外, 以下三种情况会导致整型转为浮点型

- 把一个整型值赋给一个显式类型为浮点型的变量, 该整型值会先转为浮点型再存储到变量上(常量同理)
- 函数形参为浮点型, 实参为整型, 实参会先转为浮点型再传递到函数的形参上
- 数组显式类型为浮点型数组, 但数组元素值为整型, 元素会先转为浮点型再存储到数组内(包括多维数组)

## 浮点型转整型

以下三种情况会导致浮点型转为整型

- 把一个浮点常数赋给一个显式类型为整型的变量, 该浮点常数会先转为整型再存储到变量上(常量同理)
- 函数形参为整型, 实参为浮点型, 实参会先转为整型再传递到函数的形参上
- 数组显式类型为整型数组, 但数组元素值为浮点型, 元素会先转为整型再存储到数组内(包括多维数组)
