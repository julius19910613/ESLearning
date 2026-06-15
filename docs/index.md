---
layout: home

hero:
  name: "ES6Learning"
  text: "从 ES2015 到 ES2025 的 JavaScript 年代线"
  tagline: "按年份梳理 ECMAScript 特性，用可复制示例快速回忆语法、语义与兼容性边界。"
  image:
    src: /logo.svg
    alt: ES6Learning
  actions:
    - theme: brand
      text: 从 ES2015 开始
      link: /years/es2015
    - theme: alt
      text: 打开高频速查
      link: /guide/cheatsheet

features:
  - title: 按年份拆分
    details: 每个版本一页，适合按标准演进路径学习，也适合在项目中反查“这个语法是哪一年进来的”。
  - title: 可复制示例
    details: 示例尽量独立、短小、可直接复制到浏览器控制台、Node REPL 或模块环境中运行。
  - title: 保守兼容性说明
    details: 对实现速度较慢的特性给出 caveat，避免把提案、标准和引擎支持混为一谈。
---

## 快速入口

<span class="quick-badge">变量与作用域：ES2015</span>
<span class="quick-badge">异步主线：Promise -> async/await -> async iteration</span>
<span class="quick-badge">对象与数组：destructuring / spread / optional chaining / groupBy</span>
<span class="quick-badge">类能力：class -> fields -> private -> static block</span>
<span class="quick-badge">最新迭代：iterator helpers / Set methods / JSON modules</span>

- [高频语法速查](./guide/cheatsheet.md)
- [ES2015 基础转折点](./years/es2015.md)
- [ES2020 现代代码常用语法](./years/es2020.md)
- [ES2025 新特性与保守使用建议](./years/es2025.md)

## 年代线

<div class="timeline-grid">
  <a class="timeline-card" href="./years/es2015">
    <strong>ES2015</strong>
    <p>let/const、arrow functions、class、modules、promises、generators、Map/Set、Proxy。</p>
  </a>
  <a class="timeline-card" href="./years/es2016">
    <strong>ES2016</strong>
    <p>两项小而高频的增强：Array.prototype.includes 与 exponentiation operator。</p>
  </a>
  <a class="timeline-card" href="./years/es2017">
    <strong>ES2017</strong>
    <p>async/await 成为主流异步写法，并补齐 Object.values/entries、String padding。</p>
  </a>
  <a class="timeline-card" href="./years/es2018">
    <strong>ES2018</strong>
    <p>for await...of、对象 rest/spread、Promise.finally 与一批强力 RegExp 能力。</p>
  </a>
  <a class="timeline-card" href="./years/es2019">
    <strong>ES2019</strong>
    <p>flat、flatMap、fromEntries、optional catch binding、稳定排序。</p>
  </a>
  <a class="timeline-card" href="./years/es2020">
    <strong>ES2020</strong>
    <p>optional chaining、nullish coalescing、BigInt、allSettled、dynamic import。</p>
  </a>
  <a class="timeline-card" href="./years/es2021">
    <strong>ES2021</strong>
    <p>逻辑赋值、数字分隔符、Promise.any、replaceAll 与 WeakRefs 概览。</p>
  </a>
  <a class="timeline-card" href="./years/es2022">
    <strong>ES2022</strong>
    <p>class fields / private、top-level await、Error cause、Object.hasOwn、.at。</p>
  </a>
  <a class="timeline-card" href="./years/es2023">
    <strong>ES2023</strong>
    <p>数组不可变新方法、findLast 系列、hashbang grammar，以及与 WeakMap key 范围相关的演进。</p>
  </a>
  <a class="timeline-card" href="./years/es2024">
    <strong>ES2024</strong>
    <p>groupBy、Promise.withResolvers，以及多项更偏底层与正则方向的现代能力。</p>
  </a>
  <a class="timeline-card" href="./years/es2025">
    <strong>ES2025</strong>
    <p>iterator helpers、Set methods、Promise.try、RegExp.escape、JSON modules、Float16Array 概览。</p>
  </a>
</div>

## 如何使用这套文档

1. 如果你是补基础，按年份从 ES2015 往后看。
2. 如果你是回忆语法，直接看 [高频速查](./guide/cheatsheet.md)。
3. 如果你在做运行时升级，重点看 ES2020 之后页面里的兼容性 caveat。

::: tip 阅读策略
业务代码里最常出现的转折点通常在 ES2015、ES2017、ES2018、ES2020、ES2022。ES2024 与 ES2025 更适合在目标运行时已经较新的前提下渐进采用。
:::
