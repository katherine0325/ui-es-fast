// This is a placeholder for the actual implementation
// In a real app, this would fetch markdown files from the file system or an API

export async function getDocContent(section) {
  // In a real implementation, this would fetch from an API or local files
  // For now, we'll return placeholder content based on the section

  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  switch (section) {
    case "getting-started":
      return `
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

\`\`\`bash
# 安装 CLI 工具
npm install -g electron-vue3-cli

# 创建新项目
electron-vue3-cli create my-app

# 进入项目目录
cd my-app

# 安装依赖
npm install
\`\`\`

## 启动开发服务器

\`\`\`bash
npm run dev
\`\`\`

这将启动开发服务器，并打开一个 Electron 窗口，显示你的应用。当你修改代码时，应用会自动重新加载。

## 项目结构

\`\`\`
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
\`\`\`

## 下一步

恭喜！你已经成功创建了一个 Electron Vue3 应用。接下来，你可以：

1. 探索项目结构，了解各个文件的作用
2. 修改 \`src/App.vue\` 文件，开始构建你的应用界面
3. 查看下一章节，学习如何使用 IndexedDB 存储数据
`

    case "indexeddb-basics":
      return `
# IndexedDB 基础用法

## 介绍

Electron Vue3 Starter Pro 提供了一个简单易用的 IndexedDB 封装，让你能够轻松地在应用中存储和检索数据。

## 初始化数据库

在使用 IndexedDB 之前，你需要初始化数据库。我们的框架提供了一个简单的 API 来完成这个任务：

\`\`\`javascript
import { useIndexedDB } from '@/utils/db'

// 初始化数据库
const db = useIndexedDB()

// 创建存储对象
await db.createStore('users', { keyPath: 'id' })
await db.createStore('settings')
\`\`\`

## 基本操作

### 添加数据

\`\`\`javascript
// 添加单条数据
await db.insert('users', {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com'
})

// 添加多条数据
await db.insertMany('users', [
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com'
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com'
  }
])
\`\`\`

### 获取数据

\`\`\`javascript
// 获取单条数据
const user = await db.get('users', 1)
console.log(user) // { id: 1, name: 'John Doe', email: 'john@example.com' }

// 获取所有数据
const allUsers = await db.getAll('users')
console.log(allUsers) // [{ id: 1, ... }, { id: 2, ... }, { id: 3, ... }]
\`\`\`

### 更新数据

\`\`\`javascript
// 更新单条数据
await db.update('users', {
  id: 1,
  name: 'John Doe',
  email: 'john.doe@example.com' // 更新的邮箱
})
\`\`\`

### 删除数据

\`\`\`javascript
// 删除单条数据
await db.delete('users', 1)

// 清空存储对象
await db.clear('users')
\`\`\`

## 在 Vue 组件中使用

\`\`\`vue
<script setup>
import { ref, onMounted } from 'vue'
import { useIndexedDB } from '@/utils/db'

const db = useIndexedDB()
const users = ref([])

onMounted(async () => {
  // 获取所有用户
  users.value = await db.getAll('users')
})

const addUser = async (userData) => {
  // 添加用户
  await db.insert('users', userData)
  // 刷新用户列表
  users.value = await db.getAll('users')
}
</script>
\`\`\`

## 下一步

在下一章节，我们将学习如何执行更复杂的 CRUD 操作和高级查询。
`

    case "node-methods-fs":
      return `
# 文件系统操作

## 介绍

Electron 应用可以访问 Node.js 的文件系统 API，这使得你可以读取和写入本地文件。Electron Vue3 Starter Pro 提供了一个安全的封装，让你能够在渲染进程中轻松地使用这些功能。

## 基本用法

我们的框架通过 \`window.electron.fs\` 对象提供了文件系统操作的 API：

\`\`\`javascript
// 在渲染进程中使用
const { readFile, writeFile, readdir } = window.electron.fs

// 读取文件
const content = await readFile('/path/to/file.txt', 'utf-8')
console.log(content)

// 写入文件
await writeFile('/path/to/output.txt', 'Hello, World!', 'utf-8')

// 读取目录内容
const files = await readdir('/path/to/directory')
console.log(files)
\`\`\`

## 在 Vue 组件中使用

\`\`\`vue
<template>
  <div>
    <button @click="openFile">打开文件</button>
    <button @click="saveFile">保存文件</button>
    <textarea v-model="fileContent" rows="10" cols="50"></textarea>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const fileContent = ref('')
const currentFilePath = ref('')

const openFile = async () => {
  try {
    // 打开文件选择对话框
    const { filePaths } = await window.electron.dialog.showOpenDialog({
      properties: ['openFile'],
      filters: [
        { name: 'Text Files', extensions: ['txt', 'md'] }
      ]
    })
    
    if (filePaths.length > 0) {
      currentFilePath.value = filePaths[0]
      // 读取文件内容
      fileContent.value = await window.electron.fs.readFile(currentFilePath.value, 'utf-8')
    }
  } catch (error) {
    console.error('Error opening file:', error)
  }
}

const saveFile = async () => {
  try {
    if (!currentFilePath.value) {
      // 如果没有当前文件路径，打开保存对话框
      const { filePath } = await window.electron.dialog.showSaveDialog({
        filters: [
          { name: 'Text Files', extensions: ['txt'] }
        ]
      })
      
      if (filePath) {
        currentFilePath.value = filePath
      } else {
        return // 用户取消了保存
      }
    }
    
    // 保存文件内容
    await window.electron.fs.writeFile(currentFilePath.value, fileContent.value, 'utf-8')
    alert('文件已保存')
  } catch (error) {
    console.error('Error saving file:', error)
  }
}
</script>
\`\`\`

## 安全注意事项

在使用文件系统 API 时，请注意以下安全事项：

1. 始终验证文件路径，避免访问系统敏感目录
2. 限制文件操作的范围，例如只允许在应用数据目录中读写文件
3. 处理用户输入时要格外小心，避免路径遍历攻击

## 示例：创建一个简单的文件浏览器

\`\`\`vue
<template>
  <div>
    <div class="path-bar">
      <button @click="navigateUp">上一级</button>
      <span>{{ currentPath }}</span>
    </div>
    <ul class="file-list">
      <li v-for="item in items" :key="item.path" @click="handleItemClick(item)">
        <span class="icon">{{ item.isDirectory ? '📁' : '📄' }}</span>
        <span class="name">{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import path from 'path'

const currentPath = ref('')
const items = ref([])

onMounted(async () => {
  // 初始化为用户的文档目录
  currentPath.value = await window.electron.path.documents()
  await loadDirectory(currentPath.value)
})

const loadDirectory = async (dirPath) => {
  try {
    const files = await window.electron.fs.readdir(dirPath, { withFileTypes: true })
    items.value = files.map(file => ({
      name: file.name,
      path: path.join(dirPath, file.name),
      isDirectory: file.isDirectory()
    }))
  } catch (error) {
    console.error('Error loading directory:', error)
  }
}

const handleItemClick = async (item) => {
  if (item.isDirectory) {
    currentPath.value = item.path
    await loadDirectory(item.path)
  } else {
    // 处理文件点击，例如打开文件
    const content = await window.electron.fs.readFile(item.path, 'utf-8')
    console.log('File content:', content)
  }
}

const navigateUp = async () => {
  const parentPath = path.dirname(currentPath.value)
  if (parentPath !== currentPath.value) {
    currentPath.value = parentPath
    await loadDirectory(parentPath)
  }
}
</script>

<style scoped>
.path-bar {
  margin-bottom: 10px;
  padding: 5px;
  background-color: #f0f0f0;
}

.file-list {
  list-style: none;
  padding: 0;
}

.file-list li {
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.file-list li:hover {
  background-color: #f0f0f0;
}

.icon {
  margin-right: 5px;
}
</style>
\`\`\`

## 下一步

在下一章节，我们将学习如何使用 Node.js 的其他 API，如获取系统信息和执行子进程。
`

    case "image-storage-basics":
      return `
# 图片本地存储基础

## 介绍

在桌面应用中，高效地管理和存储图片是一个常见需求。Electron Vue3 Starter Pro 提供了一套完整的解决方案，让你能够轻松地在本地存储图片并通过简短的地址引用它们。

## 基本概念

我们的图片存储系统基于以下几个核心概念：

1. **本地存储**：图片文件存储在应用数据目录中，确保它们在应用重启后仍然可用
2. **地址映射**：每个图片都有一个唯一的短 ID，可以用来引用它
3. **缓存管理**：自动管理图片缓存，避免重复存储相同的图片
4. **内存优化**：优化内存使用，避免在处理大量图片时出现内存问题

## 基本用法

### 导入图片存储模块

\`\`\`javascript
import { useImageStore } from '@/utils/image-store'

// 初始化图片存储
const imageStore = useImageStore()
\`\`\`

### 存储图片

你可以从多种来源存储图片：

#### 从文件路径存储

\`\`\`javascript
// 从本地文件存储图片
const imageId = await imageStore.storeFromFile('/path/to/image.jpg')
console.log('Image stored with ID:', imageId) // 例如：'img_a1b2c3d4'
\`\`\`

#### 从 URL 存储

\`\`\`javascript
// 从 URL 下载并存储图片
const imageId = await imageStore.storeFromUrl('https://example.com/image.jpg')
console.log('Image stored with ID:', imageId)
\`\`\`

#### 从剪贴板存储

\`\`\`javascript
// 从剪贴板存储图片
const imageId = await imageStore.storeFromClipboard()
console.log('Image stored with ID:', imageId)
\`\`\`

### 获取图片

存储图片后，你可以使用图片 ID 来获取它：

\`\`\`javascript
// 获取图片的本地文件路径
const imagePath = imageStore.getPath(imageId)
console.log('Image path:', imagePath)

// 获取图片的 data URL（用于在浏览器中显示）
const dataUrl = await imageStore.getDataUrl(imageId)
console.log('Data URL:', dataUrl)
\`\`\`

### 在 Vue 组件中使用

\`\`\`vue
<template>
  <div>
    <div class="image-gallery">
      <div v-for="image in images" :key="image.id" class="image-item">
        <img :src="image.url" :alt="image.name" />
        <div class="image-info">
          <span>{{ image.name }}</span>
          <button @click="deleteImage(image.id)">删除</button>
        </div>
      </div>
    </div>
    <div class="image-actions">
      <button @click="importFromFile">从文件导入</button>
      <button @click="importFromClipboard">从剪贴板导入</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useImageStore } from '@/utils/image-store'

const imageStore = useImageStore()
const images = ref([])

onMounted(async () => {
  // 加载所有已存储的图片
  await loadImages()
})

const loadImages = async () => {
  const storedImages = await imageStore.getAllImages()
  images.value = await Promise.all(storedImages.map(async (img) => ({
    id: img.id,
    name: img.name,
    url: await imageStore.getDataUrl(img.id)
  })))
}

const importFromFile = async () => {
  try {
    // 打开文件选择对话框
    const { filePaths } = await window.electron.dialog.showOpenDialog({
      properties: ['openFile'],
      filters: [
        { name: 'Images', extensions: ['jpg', 'jpeg', 'png', 'gif'] }
      ]
    })
    
    if (filePaths.length > 0) {
      const filePath = filePaths[0]
      const fileName = filePath.split('/').pop()
      
      // 存储图片
      const imageId = await imageStore.storeFromFile(filePath)
      
      // 刷新图片列表
      await loadImages()
    }
  } catch (error) {
    console.error('Error importing image:', error)
  }
}

const importFromClipboard = async () => {
  try {
    // 从剪贴板存储图片
    const imageId = await imageStore.storeFromClipboard()
    
    if (imageId) {
      // 刷新图片列表
      await loadImages()
    } else {
      alert('剪贴板中没有图片')
    }
  } catch (error) {
    console.error('Error importing image from clipboard:', error)
  }
}

const deleteImage = async (imageId) => {
  try {
    // 删除图片
    await imageStore.deleteImage(imageId)
    
    // 刷新图片列表
    await loadImages()
  } catch (error) {
    console.error('Error deleting image:', error)
  }
}
</script>

<style scoped>
.image-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 20px;
}

.image-item {
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
}

.image-item img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.image-info {
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.image-actions {
  display: flex;
  gap: 8px;
}
</style>
\`\`\`

## 下一步

在下一章节，我们将学习如何实现图片地址映射，以便在应用中更方便地引用图片。
`

    case "packaging-mac":
      return `
# macOS 打包指南

## 介绍

将 Electron 应用打包为 macOS 应用程序是发布过程中的重要一步。Electron Vue3 Starter Pro 提供了一套完整的工具和配置，让你能够轻松地为 macOS 平台构建和打包应用。

## 先决条件

在为 macOS 打包应用之前，请确保你的系统满足以下要求：

1. **macOS 系统**：理想情况下，你应该在 macOS 系统上构建 macOS 应用
2. **Xcode**：安装最新版本的 Xcode（用于代码签名）
3. **Apple 开发者账号**：如果你计划在 Mac App Store 上发布应用，则需要一个 Apple 开发者账号

## 基本打包

我们的框架使用 electron-builder 来处理打包过程。以下是基本的打包步骤：

### 1. 配置 package.json

确保你的 package.json 文件包含正确的 macOS 打包配置：

\`\`\`json
{
  "name": "my-app",
  "version": "1.0.0",
  "build": {
    "appId": "com.example.myapp",
    "productName": "My App",
    "mac": {
      "category": "public.app-category.productivity",
      "target": [
        "dmg",
        "zip"
      ],
      "icon": "build/icons/icon.icns"
    }
  }
}
\`\`\`

### 2. 创建图标

为 macOS 应用创建一个 .icns 格式的图标文件，并将其放在 build/icons 目录中。

### 3. 运行打包命令

\`\`\`bash
# 打包 macOS 应用
npm run build:mac
\`\`\`

这将在 dist 目录中生成 .dmg 和 .zip 文件。

## 代码签名

为了让用户能够安装和运行你的应用，你需要对其进行代码签名。

### 1. 获取证书

你可以通过以下两种方式获取证书：

- **Apple 开发者账号**：登录 Apple 开发者网站，创建一个证书
- **自签名证书**：使用 Keychain Access 创建一个自签名证书（仅用于开发和测试）

### 2. 配置代码签名

在 package.json 中添加代码签名配置：

\`\`\`json
{
  "build": {
    "mac": {
      "identity": "Developer ID Application: Your Name (TEAM_ID)",
      "hardenedRuntime": true,
      "gatekeeperAssess": false,
      "entitlements": "build/entitlements.mac.plist",
      "entitlementsInherit": "build/entitlements.mac.plist"
    }
  }
}
\`\`\`

### 3. 创建授权文件

创建 build/entitlements.mac.plist 文件：

\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>com.apple.security.cs.allow-jit</key>
    <true/>
    <key>com.apple.security.cs.allow-unsigned-executable-memory</key>
    <true/>
    <key>com.apple.security.cs.disable-library-validation</key>
    <true/>
    <key>com.apple.security.cs.allow-dyld-environment-variables</key>
    <true/>
  </dict>
</plist>
\`\`\`

### 4. 运行带有代码签名的打包命令

\`\`\`bash
# 打包并签名 macOS 应用
npm run build:mac
\`\`\`

## 公证

从 macOS Catalina (10.15) 开始，Apple 要求所有分发的应用程序都必须经过公证，否则用户将无法运行它们。

### 1. 配置公证

在 package.json 中添加公证配置：

\`\`\`json
{
  "build": {
    "mac": {
      "notarize": true
    },
    "afterSign": "scripts/notarize.js"
  }
}
\`\`\`

### 2. 创建公证脚本

创建 scripts/notarize.js 文件：

\`\`\`javascript
const { notarize } = require('electron-notarize')

exports.default = async function notarizing(context) {
  const { electronPlatformName, appOutDir } = context
  if (electronPlatformName !== 'darwin') {
    return
  }

  const appName = context.packager.appInfo.productFilename

  return await notarize({
    appBundleId: 'com.example.myapp',
    appPath: \`\${appOutDir}/\${appName}.app\`,
    appleId: process.env.APPLE_ID,
    appleIdPassword: process.env.APPLE_ID_PASSWORD,
    ascProvider: process.env.APPLE_TEAM_ID
  })
}
\`\`\`

### 3. 设置环境变量

在运行打包命令之前，设置以下环境变量：

\`\`\`bash
export APPLE_ID=your.apple.id@example.com
export APPLE_ID_PASSWORD=your-app-specific-password
export APPLE_TEAM_ID=your-team-id
\`\`\`

### 4. 运行带有公证的打包命令

\`\`\`bash
# 打包、签名和公证 macOS 应用
npm run build:mac
\`\`\`

## 自动化打包

你可以使用 CI/CD 系统（如 GitHub Actions）来自动化打包过程。

### GitHub Actions 示例

创建 .github/workflows/build-mac.yml 文件：

\`\`\`yaml
name: Build macOS App

on:
  push:
    tags:
      - 'v*'

jobs:
  build:
    runs-on: macos-latest
    steps:
      - name: Check out Git repository
        uses: actions/checkout@v2

      - name: Install Node.js
        uses: actions/setup-node@v2
        with:
          node-version: 14

      - name: Install dependencies
        run: npm ci

      - name: Build and notarize macOS app
        env:
          APPLE_ID: \${{ secrets.APPLE_ID }}
          APPLE_ID_PASSWORD: \${{ secrets.APPLE_ID_PASSWORD }}
          APPLE_TEAM_ID: \${{ secrets.APPLE_TEAM_ID }}
          CSC_LINK: \${{ secrets.MAC_CERTIFICATE }}
          CSC_KEY_PASSWORD: \${{ secrets.MAC_CERTIFICATE_PASSWORD }}
        run: npm run build:mac

      - name: Upload artifacts
        uses: actions/upload-artifact@v2
        with:
          name: mac-build
          path: |
            dist/*.dmg
            dist/*.zip
\`\`\`

## 常见问题

### 1. 代码签名失败

如果代码签名失败，请检查以下几点：

- 确保你的证书有效且未过期
- 确保你有正确的证书访问权限
- 检查 identity 是否正确设置

### 2. 公证失败

如果公证失败，请检查以下几点：

- 确保你的 Apple ID 和密码正确
- 确保你使用的是应用特定密码，而不是 Apple ID 密码
- 检查网络连接是否正常

### 3. 应用无法启动

如果打包后的应用无法启动，请检查以下几点：

- 确保所有必要的依赖都已包含在应用中
- 检查应用日志以查找错误信息
- 确保代码签名和公证正确完成

## 下一步

在下一章节，我们将学习如何为 Windows 平台打包应用。
`

    default:
      return `# 文档不存在\n\n请选择左侧菜单中的一个文档。`
  }
}

export async function getAllDocs() {
  // This would return a list of all available documentation files
  return [
    { id: "getting-started", title: "5分钟开始一个桌面应用" },
    { id: "indexeddb", title: "使用IndexedDB存储数据" },
    { id: "node-methods", title: "调用Node方法" },
    { id: "image-storage", title: "图片本地存储" },
    { id: "packaging", title: "打包程序" },
  ]
}
