# ESLearning

一个基于 VitePress 的静态学习站点，内容覆盖 ECMAScript / JavaScript 从 ES2015 到 ES2025 的核心特性，适合快速查阅、按年份学习和在 GitHub Pages 上部署。

## 本地开发

要求：

- Node.js 20 或更高版本
- npm 10 或更高版本（建议随 Node 一起使用）

安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run dev
```

默认会启动 VitePress 本地站点，通常可在 `http://localhost:5173/ESLearning/` 访问。

## 构建与预览

生产构建：

```bash
npm run build
```

本地预览静态产物：

```bash
npm run preview
```

构建输出目录为 `docs/.vitepress/dist/`。

## GitHub Pages 部署

仓库已包含 GitHub Actions 工作流：`.github/workflows/deploy.yml`。

使用方式：

1. 进入 GitHub 仓库的 `Settings -> Pages`
2. 将 `Build and deployment -> Source` 设为 `GitHub Actions`
3. 确认默认分支仍为 `master`
4. 推送到 `master` 后，Actions 会自动执行构建并部署

当前 VitePress `base` 已配置为：

```txt
/ESLearning/
```

这与 GitHub Pages 仓库页路径 `https://<user>.github.io/ESLearning/` 对应。

## 内容结构

- `docs/index.md`：首页、时间线、快速入口
- `docs/years/*.md`：按 ES 年份拆分的专题页
- `docs/guide/cheatsheet.md`：高频语法速查与选型建议
- `docs/.vitepress/`：站点配置与主题样式

## 兼容性说明

- 文档中的代码示例优先面向现代浏览器与现代 Node.js。
- ES2024 与 ES2025 中部分特性在不同引擎中的落地速度不同，页面内已经使用保守措辞标注。
- 如果你的目标环境较旧，需要结合 Babel、polyfill 或运行时升级策略。
