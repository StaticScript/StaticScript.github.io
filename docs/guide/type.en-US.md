---
title: Type
order: 4
---

## Basic Types

Staticscript currently has three basic types

- `boolean`
- `number`
- `string`

There are only two values of `boolean`, which are `true` and `false`

`number` only supports 64 bit integers in the range of `[-9223372036854775808, 9223372036854775807]`

`string` is an immutable sequence of characters

## Array Type

> Comming Soon

## Interface Type

> Comming Soon

## Zero Value

When a variable is created, if the initial value is not specified explicitly, the compiler will automatically initialize its value to zero value of its type.

The zero values of each type are as follows::

- `boolean`: its zero value is `false`
- `number`: its zero value is `0`
- `string`: its zero value is `""`
