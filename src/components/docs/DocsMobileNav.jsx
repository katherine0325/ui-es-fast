"use client"

import { useEffect } from "react"
import { Drawer, Input, Button } from "antd"
import { SearchOutlined, CloseOutlined } from "@ant-design/icons"
import DocsSidebar from "./DocsSidebar"

function DocsMobileNav({ isSidebarOpen, setIsSidebarOpen, activeSection, setActiveSection }) {
  // Prevent scrolling when drawer is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isSidebarOpen])

  return (
    <Drawer
      title={
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-cyan-400">Electron Vue3 Starter Pro</span>
          <Button type="text" icon={<CloseOutlined />} onClick={() => setIsSidebarOpen(false)} className="text-white" />
        </div>
      }
      placement="left"
      onClose={() => setIsSidebarOpen(false)}
      open={isSidebarOpen}
      width={280}
      bodyStyle={{ padding: 0, background: "#0f172a" }}
      headerStyle={{ background: "#0f172a", borderBottom: "1px solid #1e293b" }}
      className="md:hidden"
    >
      <div className="p-4">
        <Input prefix={<SearchOutlined />} placeholder="搜索文档..." className="bg-slate-800 border-slate-700" />
      </div>
      <DocsSidebar
        activeSection={activeSection}
        setActiveSection={(section) => {
          setActiveSection(section)
          setIsSidebarOpen(false)
        }}
      />
    </Drawer>
  )
}

export default DocsMobileNav
