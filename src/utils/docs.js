// This is a placeholder for the actual implementation
// In a real app, this would fetch markdown files from the file system or an API

export async function getDocContent(title) {
  return fetch(`/docs/${title}.md`)
    .then(response => response.text())
    .catch(error => console.error('Error fetching Markdown file:', error));
}

export function getAllDocs() {
  return [
    { key: 'start', label: '5分钟开始一个应用' },
    { key: 'antd', label: '在应用中使用Antd组件' },
    { key: 'tailwind', label: '在应用中使用TailwindCss' },
    { key: 'route', label: '路由分页' },
    { key: 'indexdb', label: '数据增删改查' },
    { key: 'node', label: 'Node原生方法的调用' },
    { key: 'image', label: '图片存储最佳实践' },
    { key: 'icon', label: '设置图标' },
    { key: 'build', label: '打包发布' },
  ]
}
