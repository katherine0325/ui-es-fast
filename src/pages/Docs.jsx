"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { Layout, Spin, Input, Menu } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import MarkdownRenderer from "../components/MarkdownRenderer"
import { getAllDocs, getDocContent } from "../utils/docs"

const { Header, Sider, Content } = Layout

function DocsPage() {
  const [menu, setMenu] = useState([]);
  const { section = "getting-started" } = useParams()
  const [activeSection, setActiveSection] = useState(section)
  const [content, setContent] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const res = getAllDocs();
    setMenu(res);
  }, [])

  // Fetch content when section changes
  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true)
      try {
        const data = await getDocContent(activeSection)
        setContent(data)
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
    <Layout className="min-h-screen bg-slate-800">
      {/* Desktop Sidebar */}
      <Sider
        width={280}
        className="hidden md:block bg-slate-900 border-r border-slate-700 overflow-auto h-screen fixed left-0"
        theme="dark"
      >
        <div className="p-4 border-b border-slate-700">
          <Link to="/">
            <h1 className="text-xl font-bold text-cyan-400">
              ESFast
            </h1>
          </Link>
        </div>
        {/* <div className="p-4">
          <Input prefix={<SearchOutlined />} placeholder="搜索文档..." className="bg-slate-800 border-slate-700" />
        </div> */}
        {/* <DocsSidebar activeSection={activeSection} setActiveSection={handleSectionChange} /> */}
        <Menu
          defaultSelectedKeys={['getting-started']}
          mode="inline"
          theme="dark"
          items={menu}
          onClick={({ key }) => setActiveSection(key)}
        />
      </Sider>

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
