# 杨莉莉 · Lili Yang

个人主页：[https://yangll98.github.io/](https://yangll98.github.io/)

纯静态 GitHub Pages 网站，包含中英文切换、深浅色模式、可展开的工作项目概述和邮件联系。无需构建、无需第三方脚本或外部字体。

## 本地预览

```sh
python3 -m http.server 8000
```

浏览器访问 `http://localhost:8000`。

## 更新内容

- `index.html`：页面内容；`data-zh` / `data-en` 为对应语言文案。
- `style.css`：响应式布局与主题。
- `script.js`：语言、主题与复制邮箱。
- `assets/`：图标与分享图。

推送到 `main` 后，由 GitHub Pages 从根目录发布。仓库 Settings → Pages 中使用 Deploy from a branch / main / (root)。

工作项目按职业经历概述，不包含雇主源代码、原始简历、内部演示材料或内部性能数据。
