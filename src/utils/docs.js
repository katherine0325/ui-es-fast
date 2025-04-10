// This is a placeholder for the actual implementation
// In a real app, this would fetch markdown files from the file system or an API

export async function getDocContent(title) {
  return fetch(`/docs/${title}.md`)
    .then(response => response.text())
    .catch(error => console.error('Error fetching Markdown file:', error));
}

export function getAllDocs() {
  return [
    { key: 'getting-started', label: '5分钟开始一个应用' },
    { key: 'indexeddb-basics', label: 'IndexedDB 存储' },
    { key: 'node-methods-fs', label: 'Node 方法调用' },
    { key: 'image-storage-basics', label: '图片本地存储' },
    { key: 'packaging-mac', label: '打包程序' },
  ]
}
