import { Button, Layout, Typography, Card, Row, Col, Space, Divider } from 'antd';
import { RocketOutlined, DatabaseOutlined, FileOutlined, PictureOutlined, CloudUploadOutlined, CheckCircleOutlined, GithubOutlined, BookOutlined } from '@ant-design/icons';
import './App.css';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

function App() {
  return (
    <Layout className="min-h-screen">
      <Header className="header">
        <div className="container mx-auto px-4 flex items-center justify-between h-full">
          <div className="flex items-center space-x-2">
            <RocketOutlined className="text-2xl text-blue-500" />
            <Title level={3} className="!mb-0 !text-blue-600">UI-ES-Fast</Title>
          </div>
          <Space size="large">
            <Button type="primary" size="large" icon={<BookOutlined />}>文档</Button>
            <Button type="primary" size="large" icon={<GithubOutlined />}>GitHub</Button>
            <Button type="primary" size="large" className="gradient-btn">立即开始</Button>
          </Space>
        </div>
      </Header>

      <Content>
        {/* Hero Section */}
        <div className="hero-section">
          <div className="container mx-auto px-4 text-center">
            <div className="hero-content">
              <Title level={1} className="hero-title">
                桌面应用开发框架
              </Title>
              <Paragraph className="hero-subtitle">
                基于 Electron + Vue3 + TypeScript 的现代化桌面应用开发框架
              </Paragraph>
              <Space size="large" className="mt-8">
                <Button type="primary" size="large" className="gradient-btn" icon={<RocketOutlined />}>
                  开始使用
                </Button>
                <Button size="large" className="outline-btn">
                  查看文档
                </Button>
              </Space>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <div className="container mx-auto px-4">
            <div className="section-header">
              <Title level={2}>核心特性</Title>
              <Paragraph className="section-description">
                为开发者提供完整的桌面应用开发解决方案
              </Paragraph>
            </div>
            <Row gutter={[32, 32]}>
              <Col xs={24} sm={12} lg={8}>
                <Card className="feature-card">
                  <Space direction="vertical" size="large" className="w-full">
                    <div className="feature-icon">
                      <RocketOutlined />
                    </div>
                    <Title level={4}>开箱即用</Title>
                    <Paragraph>
                      已配置好 Vue3、Ant Design、Tailwind CSS，无需繁琐配置，立即开始开发
                    </Paragraph>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} sm={12} lg={8}>
                <Card className="feature-card">
                  <Space direction="vertical" size="large" className="w-full">
                    <div className="feature-icon">
                      <DatabaseOutlined />
                    </div>
                    <Title level={4}>数据存储</Title>
                    <Paragraph>
                      内置 IndexDB 存储方案，提供完整的增删改查方法，数据操作更便捷
                    </Paragraph>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} sm={12} lg={8}>
                <Card className="feature-card">
                  <Space direction="vertical" size="large" className="w-full">
                    <div className="feature-icon">
                      <FileOutlined />
                    </div>
                    <Title level={4}>文件操作</Title>
                    <Paragraph>
                      便捷调用 Node.js 文件系统方法，轻松处理本地文件
                    </Paragraph>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} sm={12} lg={8}>
                <Card className="feature-card">
                  <Space direction="vertical" size="large" className="w-full">
                    <div className="feature-icon">
                      <PictureOutlined />
                    </div>
                    <Title level={4}>图片管理</Title>
                    <Paragraph>
                      优化的图片存储方案，支持简短地址映射展示
                    </Paragraph>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} sm={12} lg={8}>
                <Card className="feature-card">
                  <Space direction="vertical" size="large" className="w-full">
                    <div className="feature-icon">
                      <CloudUploadOutlined />
                    </div>
                    <Title level={4}>一键打包</Title>
                    <Paragraph>
                      内置打包配置，支持 Mac 和 Windows 平台，一键生成安装包
                    </Paragraph>
                  </Space>
                </Card>
              </Col>
            </Row>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="benefits-section">
          <div className="container mx-auto px-4">
            <div className="section-header">
              <Title level={2}>购买权益</Title>
              <Paragraph className="section-description">
                一次购买，终身受益
              </Paragraph>
            </div>
            <Row gutter={[32, 32]} justify="center">
              <Col xs={24} md={8}>
                <Card className="benefit-card">
                  <div className="benefit-icon">
                    <CheckCircleOutlined />
                  </div>
                  <Title level={4}>永久使用</Title>
                  <Paragraph>一次购买，终身使用，无其他额外收费</Paragraph>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card className="benefit-card">
                  <div className="benefit-icon">
                    <CheckCircleOutlined />
                  </div>
                  <Title level={4}>永久升级</Title>
                  <Paragraph>后续版本更新可免费下载使用</Paragraph>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card className="benefit-card">
                  <div className="benefit-icon">
                    <CheckCircleOutlined />
                  </div>
                  <Title level={4}>永久支持</Title>
                  <Paragraph>专业工程师支持，1-2个工作日内响应</Paragraph>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </Content>

      <Footer className="footer">
        <div className="container mx-auto px-4">
          <div className="footer-content">
            <div className="footer-logo">
              <RocketOutlined className="text-xl text-blue-500" />
              <span className="ml-2 text-lg font-semibold">UI-ES-Fast</span>
            </div>
            <div className="footer-links">
              <Space size="large">
                <a href="#" className="footer-link">文档</a>
                <a href="#" className="footer-link">GitHub</a>
                <a href="#" className="footer-link">联系我们</a>
              </Space>
            </div>
            <div className="footer-copyright">
              UI-ES-Fast ©{new Date().getFullYear()} Created with ❤️
            </div>
          </div>
        </div>
      </Footer>
    </Layout>
  );
}

export default App;
