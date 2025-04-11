# Node原生方法的调用，以fs为例

## 代码
electron/main.ts
```ts
import { ipcMain } from 'electron'
import path from 'node:path'
import fs from 'node:fs'

ipcMain.handle('save-image', async (_, dataUrl: string, filename: string) => {
  const userDataPath = app.getPath('userData')
  const imagesDir = path.join(userDataPath, 'images')

  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true })
  }

  const imagePath = path.join(imagesDir, filename);

  const base64Data = dataUrl.replace('data:image/png;base64,', '');
  const buffer = Buffer.from(base64Data, 'base64');

  await fs.promises.writeFile(imagePath, buffer)

  return 'app://images/' + filename;
})
```

electron/preload.ts
```ts
import { contextBridge } from 'electron'

// any other code
// ...

contextBridge.exposeInMainWorld('electronAPI', {
  saveImage: (dataUrl: string, filename: string) => ipcRenderer.invoke('save-image', dataUrl, filename),
})

```

在页面中调用写好的方法：
src/App.vue
```ts
await (window as any).electronAPI.saveImage(fileData, 'test.png');
```


## 示例代码
```html
<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ name: string }>()

const image = ref();

const fileToBase64String = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

const beforeUpload = async (file: File) => {
  const dataUrl = await fileToBase64String(file) as string;
  const imageParts = dataUrl.split(',');
  const fileType = imageParts[0].split(';')[0].split(':')[1].split('/')[1];
  const fileData = imageParts[1];
  const imageUrl = await (window as any).electronAPI.saveImage(fileData, `${Date.now()}.${fileType}`);
  image.value = imageUrl;
  return false;
}
</script>

<template>
  <div class="w-[500px] mx-auto">
    <h1 class="text-3xl text-center mt-6 mb-4">{{ name }}</h1>
  
    <div class="text-center mb-4">
      <a-upload :showUploadList="false" :beforeUpload="beforeUpload">
        <a-button>上传图片</a-button>
      </a-upload>
    </div>
  
    <p>
      图片地址：{{ image }}
    </p>
  
    <a-image v-if="image" :src="image" />

    图片存储在app的images文件夹中：
    <div class="text-sm text-gray-500 space-y-1">
      <p>MacOS: ~/Library/Application Support/项目名称/images</p>
      <p>Windows: C:\Users\用户名\AppData\Roaming\项目名称\images</p>
    </div>
  </div>
</template>
```


## 效果
![image](/docs/images/node_01.jpg)


## 下一步

恭喜！请在应用中尝试使用Node原生方法吧。接下来，你可以：

1. 尝试使用Node原生方法
2. 查看下一章节，图片存储最佳实践
