# 高频语法速查

这页不是完整教程，而是给已经写过现代 JavaScript 的开发者做“快速回忆”。示例都尽量短，方便你直接复制到控制台或 REPL。

## 最常用语法一览

| 能力 | 年份 | 常见写法 | 什么时候优先用 | Caveat |
| --- | --- | --- | --- | --- |
| 块级作用域 | ES2015 | `let count = 0` | 值会变化时 | 避免把 `let` 当 `var` 的无脑替代，注意 TDZ |
| 常量绑定 | ES2015 | `const config = {}` | 引用不应被重新赋值 | `const` 不是深冻结 |
| 箭头函数 | ES2015 | `items.map(x => x * 2)` | 短回调、保留外层 `this` | 不适合当构造函数 |
| 模板字符串 | ES2015 | `` `Hi, ${name}` `` | 拼接文本、保留换行 | 模板标签函数属于进阶用法 |
| 解构赋值 | ES2015 | `const { id, name } = user` | 读对象字段、交换变量 | 过深解构会损害可读性 |
| rest 参数 | ES2015 | `function sum(...nums) {}` | 接受不定参数 | rest 必须放在最后 |
| spread 展开 | ES2015 | `const next = { ...prev, done: true }` | 拷贝数组 / 对象 | 仅做浅拷贝 |
| Promise | ES2015 | `await fetchData()` | 组合异步流程 | 仍要关心 reject 与并发策略 |
| async/await | ES2017 | `const data = await api()` | 线性异步流程 | 循环内串行 await 可能拖慢性能 |
| 对象展开 | ES2018 | `const safe = { ...input }` | 合并配置、去变异 | getter / setter 行为要留意 |
| optional chaining | ES2020 | `user?.profile?.name` | 读不确定存在的链路 | 只会短路 `null` / `undefined` |
| nullish coalescing | ES2020 | `value ?? fallback` | 只把“空值”替换为默认值 | 不会把 `0` 和 `''` 当空 |
| dynamic import | ES2020 | `const mod = await import('./x.js')` | 懒加载模块 | 需要 ESM 或打包器支持 |
| 逻辑赋值 | ES2021 | `opts.timeout ??= 3000` | 就地填默认值 | 可读性比显式 `if` 更重要 |
| class fields | ES2022 | `class A { count = 0 }` | 明确实例状态 | 旧编译链可能需要转译 |
| `.at()` | ES2022 | `arr.at(-1)` | 取最后一项 | 比 `arr[arr.length - 1]` 更直观 |
| `toSorted()` | ES2023 | `const next = arr.toSorted()` | 保留原数组不变 | 老环境通常没有 |
| `Object.groupBy()` | ES2024 | `Object.groupBy(list, fn)` | 分类聚合 | 很新，部署前先验证支持 |
| iterator helpers | ES2025 | `iter.map(fn).take(3).toArray()` | 惰性处理数据流 | 只适合非常新的运行时 |

## 高频对比

### `||` vs `??`

```js
const portA = 0 || 3000;
const portB = 0 ?? 3000;

console.log(portA); // 3000
console.log(portB); // 0
```

`||` 会把所有 falsy 值都当成需要兜底，`??` 只在 `null` 或 `undefined` 时兜底。

### `for...of` vs `for await...of`

```js
async function* stream() {
  yield Promise.resolve(1);
  yield Promise.resolve(2);
}

for await (const value of stream()) {
  console.log(value);
}
```

- `for...of` 消费同步 iterable。
- `for await...of` 消费 async iterable，也能消费元素本身是 Promise 的异步序列。

### `sort()` vs `toSorted()`

```js
const scores = [30, 10, 20];
const sorted = scores.toSorted((a, b) => a - b);

console.log(scores); // [30, 10, 20]
console.log(sorted); // [10, 20, 30]
```

- `sort()` 会原地修改数组。
- `toSorted()` 返回新数组，更适合函数式或 React/Vue 状态更新场景。

## 推荐记忆顺序

1. ES2015：变量、函数、对象、类、模块、Promise
2. ES2017-ES2018：`async/await`、对象 spread、`for await...of`
3. ES2020：`?.`、`??`、`import()`、`BigInt`
4. ES2022：class fields、top-level await、`.at()`
5. ES2023-ES2025：不可变数组方法、`groupBy()`、iterator helpers

## 兼容性策略

::: warning 真实项目里的保守做法
如果你的目标包含旧版浏览器、旧版 Electron、旧版 Node.js 或内嵌 JS 引擎，不要只看语法是否“标准化”，还要确认：

- 运行时是否原生支持
- 打包器是否能解析
- Babel / TypeScript 是否能正确转译
- 是否需要 polyfill
:::
