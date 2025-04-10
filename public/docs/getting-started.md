# 5分钟开始一个桌面应用

## 介绍

Electron Vue3 Starter Pro 是一个企业级桌面应用开发框架，它集成了 Electron、Vue 3、TypeScript 和其他流行的库，让你能够快速开始构建高质量的桌面应用。

## 先决条件

在开始之前，请确保你的系统已安装以下软件：

- Node.js (v14.0.0 或更高版本)
- npm (v6.0.0 或更高版本)
- Git

## 安装

使用我们的 CLI 工具快速创建一个新项目：

```bash
# 安装 CLI 工具
npm install -g electron-vue3-cli

# 创建新项目
electron-vue3-cli create my-app

# 进入项目目录
cd my-app

# 安装依赖
npm install
```

## 启动开发服务器

```bash
npm run dev
```

这将启动开发服务器，并打开一个 Electron 窗口，显示你的应用。当你修改代码时，应用会自动重新加载。

## 项目结构

```
my-app/
├── electron/          # Electron 主进程代码
├── src/               # Vue 应用代码（渲染进程）
│   ├── assets/        # 静态资源
│   ├── components/    # Vue 组件
│   ├── router/        # Vue Router 配置
│   ├── store/         # Vuex 状态管理
│   ├── utils/         # 工具函数
│   ├── views/         # 页面组件
│   ├── App.vue        # 根组件
│   └── main.ts        # 入口文件
└── package.json       # 项目配置
```

## 下一步

恭喜！你已经成功创建了一个 Electron Vue3 应用。接下来，你可以：

1. 探索项目结构，了解各个文件的作用
2. 修改 `src/App.vue` 文件，开始构建你的应用界面
3. 查看下一章节，学习如何使用 IndexedDB 存储数据
