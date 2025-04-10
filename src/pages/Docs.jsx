"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Layout, Spin, Input, Menu } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import DocsMobileNav from "../components/docs/DocsMobileNav"
import MarkdownRenderer from "../components/docs/MarkdownRenderer"
import { getDocContent } from "../utils/docs"

const { Header, Sider, Content } = Layout

function DocsPage() {
  const { section = "getting-started" } = useParams()
  const navigate = useNavigate()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(section)
  const [content, setContent] = useState("")
  const [loading, setLoading] = useState(true)
  const [headings, setHeadings] = useState([])

  // Handle section change
  const handleSectionChange = (newSection) => {
    setActiveSection(newSection)
    navigate(`/docs/${newSection}`)
    setIsSidebarOpen(false)
  }

  // Extract headings from markdown content
  const extractHeadings = (content) => {
    const headingRegex = /^(#{1,3})\s+(.+)$/gm
    const matches = [...content.matchAll(headingRegex)]

    return matches.map((match, index) => {
      const level = match[1].length
      const text = match[2]
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")

      return { id, text, level }
    })
  }

  // Fetch content when section changes
  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true)
      try {
        const data = await getDocContent(activeSection)
        setContent(data)
        setHeadings(extractHeadings(data))
      } catch (error) {
        console.error("Failed to fetch documentation:", error)
        setContent("# Error loading documentation\n\nPlease try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchContent()
  }, [activeSection])

  return (
    <Layout className="min-h-screen">
      {/* Desktop Sidebar */}
      <Sider
        width={280}
        className="hidden md:block bg-slate-900 border-r border-slate-700 overflow-auto h-screen fixed left-0"
        theme="dark"
      >
        <div className="p-4 border-b border-slate-700">
          <h1 className="text-xl font-bold text-cyan-400">ESFast</h1>
        </div>
        <div className="p-4">
          <Input prefix={<SearchOutlined />} placeholder="搜索文档..." className="bg-slate-800 border-slate-700" />
        </div>
        {/* <DocsSidebar activeSection={activeSection} setActiveSection={handleSectionChange} /> */}
        <Menu
          defaultSelectedKeys={['1']}
          mode="inline"
          theme="dark"
          items={[
            { key: '1', label: '5分钟开始一个应用' },
            { key: '2', label: 'IndexedDB 存储' },
            { key: '3', label: 'Node 方法调用' },
            { key: '4', label: '图片本地存储' },
            { key: '5', label: '打包程序' },
          ]}
        />
      </Sider>

      {/* Mobile Navigation */}
      <DocsMobileNav
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        activeSection={activeSection}
        setActiveSection={handleSectionChange}
      />

      <Layout className="md:ml-[280px]">
        {/* <Header className="bg-slate-900 border-b border-slate-700 p-4 flex items-center">
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setIsSidebarOpen(true)}
            className="md:hidden text-white mr-4"
          />
          <Breadcrumb
            items={[
              { title: "首页", href: "/" },
              { title: "文档", href: "/docs" },
              {
                title: activeSection.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
                href: `/docs/${activeSection}`,
              },
            ]}
            className="text-white"
          />
        </Header> */}

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="lg:col-span-4">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 md:p-8">
                {loading ? (
                  <div className="flex justify-center items-center h-64">
                    <Spin size="large" />
                  </div>
                ) : (
                  <MarkdownRenderer content={content} />
                )}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Layout>
  )
}

export default DocsPage
