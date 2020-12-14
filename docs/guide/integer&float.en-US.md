---
title: Integer and Floating-Point
order: 8
---

In StaticScript, integers and floats are considered to be the same type, both of which are numeric.

To be compatible with typescript, set type `number` as float-point and `int` as integer.

## 类型提升

When binary operators are used to operate integers and floating-point numbers, the left operator is floating-point number or the right operator is floating-point number, which will result in floating-point operation, for example

```ts
let x: int = 10;

let y: number = 11.1;

let z = x + y;
```

The variable x is integer, the variable y is floating-point, and the type of variable z storing the operation result is floating-point.

## 整型转浮点型

In addition to type promotion, there are three situations that cause an integer to become a floating-point.

- Assign an integer value to a variable whose explicit type is floating-point. The integer value will be converted to floating-point type and then stored on the variable (the same is true for constants).
- If the function parameter is a floating-point type and the actual argument is an integer type, the argument will be converted to a floating-point type first and then passed to the function parameter.
- The explicit type of array is floating-point array, but the value of array element is integer. The element will be converted to floating-point type first and then stored in the array (including multidimensional array).

## 浮点型转整型

There are three conditions that cause floating-point to be converted to integer.

- Assign a floating-point constant to a variable whose explicit type is integer. The floating-point constant will be converted to integer and then stored on the variable (the same for constant).
- If the function parameter is integer and the argument is floating point, the argument will be converted to integer and then passed to the function parameter.
- The explicit type of the array is an integer array, but the array element value is a floating-point type. The element will be converted to an integer first and then stored in the array (including multidimensional array).
