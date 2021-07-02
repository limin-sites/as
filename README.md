# base Dosifyjs blog and Notes site   [![Join the chat at https://gitter.im/DocsifyBlog/DocsifyBlogChatRoom](https://badges.gitter.im/DocsifyBlog/DocsifyBlogChatRoom.svg)](https://gitter.im/DocsifyBlog/DocsifyBlogChatRoom?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
> [!NOTE]
> **Purpose：** use markdown file write blog and notes, include private content, and share to sns, manual or auto sync to Personal site or other Platform.

> **目的：** 使用markdown写博客和笔记，甚至是私有的内容，然后分享到社交媒体，同步至个人博客站点和自媒体平台.

## Introduction
this demo inclued what(这个demo包含了哪些内容)? [see here TODO](introduction)

## GitOPS workflow 
how to Implement GitOPS workflow or Article as Code with docsify、github、md，see here  [GitOPS workflow TODO](GitOPSworkflow)

## Repo struct
[see here TODO](introduction)

## How to use？
if your want create a blog or or site base this repo, how can I do? [see here TODO](introduction)

- clone repo
- run: `docsify serve docs -p <port>`,example: `docsify serve -p 8095`

## Markdown example
markdown demo, include docsify extension's syntax, see [Markdown example](markdown)

## Rencet life && tech Article and Notes
[21年-7月笔记-w](c/w/notes/21-7.md)

[21年-6月笔记-w](c/w/notes/21-6.md)

[21年-5月笔记-w](c/w/notes/21-5.md)

## Rencet game resource Article and Notes

[21年-7月笔记-g](c/g/notes/21-6.md)

[21年-6月笔记-g](c/g/notes/21-6.md)

## todo
- [X] 模板仓库,[此从此仓库fork而来](https://github.com/liminany/docsify-blog-template)，通用功能在主仓库的dev分支实现(通常只修改main.js和index.html),子仓库创建新功能集成PR: 从主仓库dev分支库至子仓库main分支的PR。
- [x] docify 主要插件集成，已集成：
  - [x] docsify-themeable 主题
  - [ ] docsify-edit-on-github，有兼容性问题（docsify-themeable主题中已集成）
  - [x] docsify-tabs （docsify-themeable主题中已集成）
  - [x] docsify-copy-code（docsify-themeable主题中已集成）
  - [x] docsify-pagination（docsify-themeable主题中已集成）
  - [x] external-script（docsify-themeable主题中已集成）
  - [x] ga（docsify-themeable主题中已集成）
  - [x] search（docsify-themeable主题中已集成）
  - [x] zoom-image（docsify-themeable主题中已集成）
  - [x] prism-bash（docsify-themeable主题中已集成）
  - [x] docsify-remote-markdown（docsify-themeable主题中已集成），有一个BUG,urL不能加参数，url如果没有以md结尾会自动添加.md扩展
  - [x] docsify-plugin-flexible-alerts（docsify-themeable主题中已集成）
  - [x] docsify-kroki（docsify-themeable主题中已集成）,更复杂 的md语法支持
- [x] [Valine](https://valine.js.org/) 评论功能集成，[管理端](https://console.leancloud.app/)
- [x] [gitter](https://gitter.im/DocsifyBlog/DocsifyBlogChatRoom)在线聊天室集成
- [x] 个人repo站点菜单及导航配置，github pages 创建
- [x] 集成分享按钮（docsify-themeable主题中已集成）
  - [x] 添加国外SNS，已经实现 （docsify-themeable主题中已集成）
  - [ ] 添加国内SNS，没有找到分享组件，暂定用浏览器扩展来实现
- [ ] 集成同步助手
- [ ] 私有仓库的集成,[pppppppppppppppp](https://github.com/limin-sites/p)，[gpgpgpgpgpgp](https://github.com/limin-sites/gp)
- [ ] 整体样式调整美化，包括首页coverpage结构 设计. 难度太大，暂缓
  - [ ] 首页内容加box框起来
  - [ ] top navbar 样式有兼容问题，手机端效果比较差 ，应该是themeable的兼容性问题
  - [x] 已经修复评论框宽度问题

- [ ] ghost 博客配置
- [ ] post2ghost插件及GitOps实现，实现自动发布md草稿到ghost
- [ ] docify 次要插件集成
- [ ] 评论集成管理端Valine-admin