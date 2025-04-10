import { Button, Layout, Typography, Card, Row, Col, Space, Divider } from 'antd';
import { RocketOutlined, DatabaseOutlined, FileOutlined, PictureOutlined, CloudUploadOutlined, CheckCircleOutlined, GithubOutlined, BookOutlined, ArrowRightOutlined } from '@ant-design/icons';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Docs from './pages/Docs';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
    </Router>
  );
}

export default App;
