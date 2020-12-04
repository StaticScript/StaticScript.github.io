---
title: Type
order: 4
---

## Basic Types

Staticscript currently has three basic types

- `boolean`
- `int`: integer array
- `number`: floating-point array
- `string`

There are only two values of `boolean`, which are `true` and `false`.

`int` only supports 64 bit integers in the range of `[-9223372036854775808, 9223372036854775807]`.

`number` supports IEEE-754 standard double precision floating-point numbers, and the range is between `- 1.7976931348623157e + 308, 1.7976931348623157e + 308]`.

`string` is an immutable sequence of characters.

## Array Type

Staticscript supports arrays with element types of the above three basic types.

- `boolean[]`: boolean array
- `int[]`: integer array
- `number[]`: floating-point array
- `string[]`: string array

StaticScript also supports multi-dimensional array.

- `boolean[][]`: 2-dimensional boolean array
- `int[][]`: 2-dimensional integer array
- `number[][]`: 2-dimensional floating-point array
- `string[][]`: 2-dimensional string array

Note that the elements in the array must be of the same type.

## Interface Type

> Comming Soon

## Zero Value

When a variable is created, if the initial value is not specified explicitly, the compiler will automatically initialize its value to zero value of its type.

The zero values of each type are as follows:

- `boolean`: its zero value is `false`
- `int`: its zero value is `0`
- `number`: its zero value is `0.0`
- `string`: its zero value is `""`
