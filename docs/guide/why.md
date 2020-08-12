---
title: 为什么是 StaticScript
order: 2
---

## JavaScript 有点恶心

作为一名安分守己的 Web 前端程序员, 我最熟悉的编程语言非 JavaScript 莫属了.

但是有一说一, 相比其他现代编程语言, JavaScript 有很多糟粕, 尤其是历史的糟粕.

先拿 `typeof null` 来说, 这行代码的执行结果竟然是 `"object"` , 只能解释为历史包袱, 这对于从其他语言转来的开发者来说非常不友好.

还有 `==` 与 `===` 的区别,  各种不符合直觉的隐式转换非常让人头疼, 但偏偏各类前端面试还特别喜欢考察这样丝毫没有意义的题目.

至于 `var` 与 `let` 和 `const` 的区别, 那个在循环体里使用 `setTimeout` 延迟打印变量的例子大家都知道, 把 `var` 换成 `let` 就没问题了, 背后就是变量提升这一机制在作怪.

当然, JavaScript 的缺陷远不止这, 更多缺陷请参见如下链接:

- [<u>Javascript 的 10 个设计缺陷</u>](http://www.ruanyifeng.com/blog/2011/06/10_design_defects_in_javascript.html)
- [<u>JavaScript 的语言设计有哪些缺陷?</u>](https://www.zhihu.com/question/24076626)

## TypeScript 没有彻底解决问题

TypeScript 很香, 但本质还是编译到 JavaScript 再执行, 只能在编译期进行约束, 没有从根本上解决 JavaScript 的问题.

除此以外, TypeScript 并没有进行强制性约束, 导致很多开发者直接将 TypeScript 当做 AnyScript 来时使用.
