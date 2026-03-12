# 识箭 — 官网

识箭 App 的官方落地页，基于 Next.js 构建。

## 技术栈

- **框架**：Next.js 15 (App Router)
- **样式**：Tailwind CSS
- **动画**：Framer Motion
- **字体**：Noto Sans SC

## 项目结构

```
app/              # Next.js App Router 页面与布局
components/       # 页面各区块组件
  Navbar.tsx      # 顶部导航
  Hero.tsx        # 首屏 Banner
  FeatureSection.tsx  # 功能介绍
  StatsSection.tsx    # 数据亮点
  DownloadSection.tsx # 下载区块（iOS / Android）
  Footer.tsx      # 页脚
public/
  assets/         # 图片、图标、APK 安装包
  screenshots/    # App 截图
```

## 本地开发

```bash
pnpm install
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000) 预览。

## 构建部署

```bash
pnpm build
pnpm start
```

## 下载链接

- iOS：[App Store](https://apps.apple.com/us/app/%E8%AF%86%E7%AE%AD/id6749833556)
- Android：`/public/assets/识箭.apk`
