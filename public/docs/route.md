# 新增一个页面

## 代码
src/views/About.vue
```html
<template>
  <div>
    <h1>About</h1>
  </div>
</template>
```

src/router/index.ts
```ts
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
// 添加 About 页面
import About from '@/views/About.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // 添加 about 页面
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
```

src/App.vue
```html
<template>
  <!-- 其他的代码 -->

  <div class="p-3 mt-6 text-center">
    <nav class="space-x-4">
      <RouterLink to="/">Home</RouterLink>
      <!-- 添加about页面路由 -->
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <router-view />
  </div>
</template>
```


## 效果
![image](/docs/images/route_01.jpg)


## 下一步

恭喜！请在应用中尝试添加更多页面吧。接下来，你可以：

1. 尝试添加更多页面
2. 查看下一章节，数据增删改查
