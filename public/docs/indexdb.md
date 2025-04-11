# 数据增删改查

## 代码写法
### 查找
```ts
import Model from '@/lib/db-model';

const listModel = new Model('list');

const res = await listModel.find({});
```

### 新增
```ts
await listModel.create({ name: 'Lily' });
```

### 更新
```ts
await listModel.updateById(id, { name: 'Lucy' });
```

### 删除
```ts
await listModel.deleteById(id);
```



## 示例代码
```html
<script setup lang="ts">
import { onMounted, ref, h } from 'vue';
import { Modal, Input } from 'ant-design-vue';
import Model from '@/lib/db-model';

defineProps<{ name: string }>()

const listModel = new Model('list');

const text = ref<string>('');
const list = ref<{ id: number, text: string }[]>([]);

onMounted(() => {
  find();
})

const find = async () => {
  const res = await listModel.find({});
  list.value = res;
}

const create = async () => {
  await listModel.create({ text: text.value });
  text.value = '';
  find();
}

const update = async (data: { id: number, text: string }) => {
  let newText: string | undefined = data.text;

  Modal.confirm({
    icon: null,
    title: '修改',
    content: h(Input, {
      placeholder: '请输入新内容',
      value: newText,
      onChange: (e) => newText = e.target.value,
    }),
    okText: '确定',
    cancelText: '取消',
    onOk() {
      data.text = newText as string;
      listModel.updateById(data.id, { name: newText });
    },
  });
}

const deleteById = async (id: number) => {
  await listModel.deleteById(id);
  find();
}
</script>

<template>
  <h1 class="text-3xl text-center mt-6 mb-3">{{ name }}</h1>

  <div class="w-[300px] mx-auto flex gap-2">
    <a-input v-model:value="text" @keyup.enter="create" />
    <a-button type="primary" @click="create">新增</a-button>
  </div>

  <div v-for="item in list" class="w-[300px] mx-auto flex gap-2 mt-3">
    {{ item.text }}
    <a-button size="small" class="ml-auto" @click="update(item)">编辑</a-button>
    <a-button size="small" @click="deleteById(item.id)">删除</a-button>
  </div>
</template>
```


## 效果
![image](/docs/images/indexdb_01.jpg)


## 下一步

恭喜！请在应用中尝试增删改查数据吧。接下来，你可以：

1. 尝试增删改查数据
2. 查看下一章节，使用Node原生方法