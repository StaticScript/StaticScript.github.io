---
title: Literal
order: 6
---

## General

Fixed values like `1`, `2.2`, `true`, `"hi"` are called literals

## Basic Value Literal

### Boolean Literal

There are only two types of boolean literals in StaticScript, `true` and `false`.

### Integer Literal

StaticScript supports binary / octal / decimal / hexadecimal integer literals.

- Binary integer literals must start with `0b`, e.g. `0b1011`
- Octal integer literals must start with `0o`, e.g. `0o777`
- Hexadecimal integer literals must start with `0x`, e.g. `0x49`

The decimal integer literal representation of StaticScript is the same as TypeScript.

### Float-pointing Literal

The floating point literal representation of StaticScript is the same as TypeScript.

### String Literal

StaticScript only supports string literals wrapped in double quotes, such as `"hello"`, `"world"`

## Array Literal

StaticScript supports one-dimensional and multi-dimensional array literals, for example

- `[1, 2, 3, 4]`
- `[[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]]`

> Array literals in StaticScript currently only support use as initial values for variable/constant declarations.
