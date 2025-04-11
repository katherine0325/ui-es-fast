# 图片存储最佳实践

## 概述
图片保存在应用本地文件夹，然后映射成一个简短地址（app://images/xxx.png），方便引用


## 展示上传的图片
```html
<img src="app://images/xxx.png" />
```


## 示例代码
结合先前的图片保存方法，我们可以：
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
![image](/docs/images/image_01.jpg)


## 图片存储地址
MacOS: ~/Library/Application Support/项目名称/images

Windows: C:\Users\用户名\AppData\Roaming\项目名称\images


## 下一步

恭喜！请在应用中尝试上传图片吧。接下来，你可以：

1. 尝试上传图片
2. 查看下一章节，设置图标
