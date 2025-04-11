import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, ogImage }) => {
  const defaultTitle = 'ESFast - 快速构建桌面应用开发框架';
  const defaultDescription = 'ESFast 是一个基于 Electron 的桌面应用开发框架，集成了 Vue3、Ant Design、Tailwind CSS 和 TypeScript，提供开箱即用的开发体验。';
  const defaultKeywords = 'Electron, Vue3, Ant Design, Tailwind CSS, TypeScript, 桌面应用, 开发框架';
  const defaultOgImage = '/og-image.jpg';

  return (
    <Helmet>
      {/* 基础 meta 标签 */}
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage || defaultOgImage} />
      
      {/* 其他 SEO 相关标签 */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#1890ff" />
      
      {/* 网站图标 */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Helmet>
  );
};

export default SEO;
