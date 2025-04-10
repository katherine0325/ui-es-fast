import { TaobaoOutlined } from "@ant-design/icons"
import { Link } from 'react-router-dom'
import {
  Menu,
  CheckCircle,
  ShoppingCart,
  BookOpen,
  Settings,
  Database,
  Monitor,
  Shield,
  Clock,
  RefreshCw,
  Apple,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="text-cyan-400 text-2xl font-bold">ESFast</div>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#buy" className="text-gray-300 hover:text-cyan-400 transition-colors">
            购买
          </a>
          <a className="text-gray-300 hover:text-cyan-400 transition-colors">
            <Link to="/docs">
              文档
            </Link>
          </a>
        </nav>
        <button className="md:hidden text-white">
          <Menu className="h-6 w-6" />
        </button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Electron Software Fast</h1>
            <h2 className="text-xl md:text-2xl text-cyan-400 font-medium">
              自带vue3，antd，tailwind css，typescript，indexdb存储数据，fs方法调用，图片存储最佳实践
            </h2>

            <div className="flex flex-wrap gap-3">
              <div className="bg-slate-800/70 backdrop-blur-sm px-3 py-1 rounded-full text-sm border border-cyan-500/30 flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-cyan-400" />
                <span>预配置Vue3/Antd/Tailwindcss全家桶</span>
              </div>
              <div className="bg-slate-800/70 backdrop-blur-sm px-3 py-1 rounded-full text-sm border border-cyan-500/30 flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-cyan-400" />
                <span>Indexdb存储 即new即用</span>
              </div>
              <div className="bg-slate-800/70 backdrop-blur-sm px-3 py-1 rounded-full text-sm border border-cyan-500/30 flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-cyan-400" />
                <span>Node方法便捷调用</span>
              </div>
              <div className="bg-slate-800/70 backdrop-blur-sm px-3 py-1 rounded-full text-sm border border-cyan-500/30 flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-cyan-400" />
                <span>图片本地存储最佳实践</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                购买框架 (v1.0.0)
              </button>
              <button className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium px-6 py-3 rounded-lg transition-all flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                查看完整文档
              </button>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="bg-blue-900/50 text-blue-300 text-xs px-2 py-1 rounded">Electron</span>
              <span className="bg-green-900/50 text-green-300 text-xs px-2 py-1 rounded">Vue3</span>
              <span className="bg-blue-900/50 text-blue-300 text-xs px-2 py-1 rounded">Antd</span>
              <span className="bg-yellow-900/50 text-yellow-300 text-xs px-2 py-1 rounded">TailwindCss</span>
              <span className="bg-green-900/50 text-green-300 text-xs px-2 py-1 rounded">Typescript</span>
            </div>
          </div>

          <div className="relative">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 shadow-xl shadow-cyan-500/5">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <div className="ml-2 text-xs text-slate-400">App.vue</div>
              </div>
              <img src="home_01.jpg" className="opacity-90" />
              {/* <pre className="text-sm text-cyan-300 overflow-x-auto">
                <code>
                  {`// 预配置的Vue3组件示例
import { ref, onMounted } from 'vue'
import { useIndexedDB } from '@/utils/db'

const db = useIndexedDB()
const users = ref([])

onMounted(async () => {
  // 简化的数据访问API
  await db.insert('users', { 
    name: 'Jack', 
    role: 'Admin' 
  })
  
  users.value = await db.getAll('users')
  
  // 原生Node.js能力
  const { readFile } = window.electron.fs
  const config = await readFile('./config.json')
})`}
                </code>
              </pre> */}
            </div>

            {/* <div className="absolute -bottom-6 -right-6 bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-4 w-32 h-32 flex items-center justify-center">
              <div className="relative">
                <Cpu className="h-12 w-12 text-cyan-400" />
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-cyan-400 rounded-full animate-ping"></div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">功能展示</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all group">
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-12 h-12 mx-auto rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all">
              <Settings className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">预集成技术栈</h3>
            <p className="text-slate-300">
              Vue3+Antd+Tailwind开箱即用
              <br />
              节省80%配置时间
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all group">
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-12 h-12 mx-auto rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all">
              <Database className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">封装IndexedDB引擎</h3>
            <p className="text-slate-300">
              简化的API接口
              <br />
              无需深入了解复杂的IndexedDB原生操作
            </p>
            <div className="mt-3 bg-slate-900/70 rounded p-2 text-sm text-left text-cyan-300 font-mono">
              {`
              const listModel = new Model('list');
              await listModel.create({name: 'L'});
              `}
            </div>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all group">
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-12 h-12 mx-auto rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all">
              <Monitor className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Node原生能力调用</h3>
            <p className="text-slate-300">
              已案例fs/path/os等常用模块的调用过程
              <br />
              访问本地系统资源
            </p>
            {/* <div className="mt-3 text-xs text-cyan-400 flex items-center gap-1">
              <Info className="h-4 w-4" />
              <span>已预配置安全策略，避免常见安全隐患</span>
            </div> */}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">技术对比</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-800">
                <th className="border border-slate-700 p-4 text-left">功能项</th>
                <th className="border border-slate-700 p-4 text-left">常规方案</th>
                <th className="border border-slate-700 p-4 text-left">本方案</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-slate-800/50">
                <td className="border border-slate-700 p-4">环境搭建</td>
                <td className="border border-slate-700 p-4 text-red-400">2天</td>
                <td className="border border-slate-700 p-4 text-green-400">5分钟</td>
              </tr>
              <tr className="hover:bg-slate-800/50">
                <td className="border border-slate-700 p-4">文件系统调用</td>
                <td className="border border-slate-700 p-4 text-red-400">需自行封装</td>
                <td className="border border-slate-700 p-4 text-green-400">即插即用</td>
              </tr>
              <tr className="hover:bg-slate-800/50">
                <td className="border border-slate-700 p-4">数据持久化</td>
                <td className="border border-slate-700 p-4 text-red-400">需选型</td>
                <td className="border border-slate-700 p-4 text-green-400">内置方案</td>
              </tr>
              <tr className="hover:bg-slate-800/50">
                <td className="border border-slate-700 p-4">跨平台兼容性</td>
                <td className="border border-slate-700 p-4 text-red-400">需额外适配</td>
                <td className="border border-slate-700 p-4 text-green-400">原生支持</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Trust Section */}
      <section className="container mx-auto px-4 py-16 bg-slate-900/50 rounded-xl my-8">
        <h2 className="text-3xl font-bold text-center mb-12">信任保障</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-slate-800 p-4 rounded-full mb-4">
              <Shield className="h-10 w-10 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">永久使用</h3>
            <p className="text-slate-300">一次购买，终身使用，包含所有小版本更新</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-slate-800 p-4 rounded-full mb-4">
              <RefreshCw className="h-10 w-10 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">永久升级</h3>
            <p className="text-slate-300">后续升级版本可免费下载</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-slate-800 p-4 rounded-full mb-4">
              <Clock className="h-10 w-10 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">永久支持</h3>
            <p className="text-slate-300">24-48小时内响应技术咨询</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="buy" className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">准备好加速您的桌面应用开发了吗？</h2>
          <p className="text-xl text-slate-300 mb-8">支持Windows10+/macOS 10.15+，立即体验开箱即用的开发体验</p>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-12 hover:border-cyan-500/50 transition-all group mb-10 w-[400px] mx-auto text-5xl">
            <div className="w-[200px] mx-auto group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all">
              ¥ 128 元
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium px-8 py-4 rounded-lg transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              购买框架 (v1.0.0)
            </button>
            <button className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium px-8 py-4 rounded-lg transition-all flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              查看完整文档
            </button>
          </div>

          <div className="mt-8 flex justify-center gap-8">
            <div className="flex items-center gap-2">
              <Apple className="h-5 w-5 text-slate-400" />
              <span className="text-slate-300">macOS 10.15+</span>
            </div>
            <div className="flex items-center gap-2">
              <Monitor className="h-5 w-5 text-slate-400" />
              <span className="text-slate-300">Windows 10+</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Electron Software Fast</h3>
              <p className="text-slate-400">桌面应用开发框架，助力开发者快速构建高质量应用</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">产品</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    功能介绍
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    技术对比
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    信任保障
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    购买地址
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">资源</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    文档中心
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    API参考
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400">© {new Date().getFullYear()} Electron Software Fast. 基础框架</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <TaobaoOutlined className="h-5 w-5" />
              </a>
              {/* <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
