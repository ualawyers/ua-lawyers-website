# 项目：UA Lawyers 官网

site-update: enabled

## 这个网站的基本信息

| 项目 | 值 |
|---|---|
| 网站名字 | UA Lawyers 律师事务所官网 |
| 代码位置 | `/Users/nas/Documents/ua-lawyers-website` |
| GitHub 仓库 | `Ua-Lawyers/ua-lawyers-website` |
| 部署分支 | `main` |
| 线上网址 | https://ua-lawyers.vercel.app |
| 部署方式 | Vercel 自动部署 —— **只要推送到 `main`，1–2 分钟后自动上线**，不需要任何人去操作 Vercel |
| 技术栈 | Next.js（App Router）+ Tailwind CSS |

## 网站内容都在哪（改文案先看这里）

| 想改的东西 | 对应文件 |
|---|---|
| 首页 | `src/app/page.tsx` |
| 联系我们页 | `src/app/contact-us/page.tsx` |
| 我们的团队页 | `src/app/our-people/page.tsx` |
| 我们的服务页 | `src/app/our-services/page.tsx` |
| 博客列表页 | `src/app/blog/page.tsx` |
| 律师团队成员信息（姓名、职位、简介） | `src/data/people.ts` |
| 服务项目内容 | `src/data/services.ts` |
| 博客文章内容 | `src/data/posts.ts` |
| 全站信息（公司名、电话、地址、邮箱等） | `src/data/site.ts` |
| 页头/导航 | `src/components/Header.tsx` |
| 页脚 | `src/components/Footer.tsx` |
| 图片 | `public/images/`（人物照 `people/`、品牌图 `brand/`、文章配图 `posts/`） |

> 大多数「改文字」的需求，答案都在 `src/data/` 里，而不是页面文件里。先去那儿找。

## 这个项目的注意事项
- 换图片时：把新图放进 `public/images/` 对应子目录，**沿用原来的文件名**最省事；
  如果换了文件名，记得同步改引用它的那个 `src/data/*.ts` 文件。
- 不要动 `next.config.ts`、`package.json`、`tsconfig.json`、`eslint.config.mjs` —— 这些是构建配置，不属于内容更新。
- `.content-cache/` 是从旧网站抓下来的原始数据，只作参考，不要提交、不要修改。
