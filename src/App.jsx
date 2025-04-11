import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import Home from './pages/Home';
import Docs from './pages/Docs';

function App() {
  // 检查是否是搜索引擎爬虫
  const isSearchEngine = /bot|crawl|spider|crawling/i.test(navigator.userAgent);

  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              isSearchEngine ? (
                <Navigate to="/index.html" replace />
              ) : (
                <>
                  <SEO
                    title="ESFast - 快速构建桌面应用开发框架"
                    description="ESFast 是一个基于 Electron 的桌面应用开发框架，集成了 Vue3、Ant Design、Tailwind CSS 和 TypeScript，提供开箱即用的开发体验。"
                    keywords="Electron, Vue3, Ant Design, Tailwind CSS, TypeScript, 桌面应用, 开发框架"
                  />
                  <Home />
                </>
              )
            }
          />
          <Route
            path="/docs"
            element={
              isSearchEngine ? (
                <Navigate to="/docs.html" replace />
              ) : (
                <>
                  <SEO
                    title="文档 - ESFast"
                    description="ESFast 框架的完整文档，包含安装指南、使用教程、API参考和最佳实践。"
                    keywords="ESFast 文档, 安装指南, 使用教程, API参考, 最佳实践"
                  />
                  <Docs />
                </>
              )
            }
          />
          <Route
            path="/docs/:section"
            element={
              isSearchEngine ? (
                <Navigate to="/docs.html" replace />
              ) : (
                <>
                  <SEO
                    title="文档 - ESFast"
                    description="ESFast 框架的完整文档，包含安装指南、使用教程、API 参考和最佳实践。"
                    keywords="ESFast 文档, 安装指南, 使用教程, API 参考, 最佳实践"
                  />
                  <Docs />
                </>
              )
            }
          />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
