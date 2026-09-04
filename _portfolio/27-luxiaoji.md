---
title: "Luxiaoji: A Private WeChat Mini Program"
title_zh: "噜小记微信小程序"
excerpt: "A private WeChat mini program built for two, evolving from an ordering and token tool into a full bidirectional couple-life app with shared spaces, rewards, and mini-games."
excerpt_zh: "&#21482;&#20379;&#20004;&#20154;&#20351;&#29992;&#30340;&#31169;&#20154;&#24494;&#20449;&#23567;&#31243;&#24207;&#65306;&#20174;&#28857;&#21333;&#19982;&#22068;&#24065;&#24037;&#20855;&#25193;&#23637;&#20026;&#21452;&#21521;&#24773;&#20387;&#29983;&#27963;&#24212;&#29992;&#65292;&#21547;&#20849;&#20139;&#31169;&#20154;&#31354;&#38388;&#12289;&#22870;&#21169;&#19982;&#28216;&#25103;&#12290;"
collection: portfolio
permalink: /portfolio/luxiaoji/
project_group: web
date: 2026-08-05
header:
  teaser: projects/luxiaoji.png
---

<figure class="project-cover" style="margin:0 0 1.5em;">
  <img src="/images/projects/luxiaoji.png" alt="Project preview" style="width:100%;border-radius:6px;box-shadow:0 2px 14px rgba(0,0,0,.14);">
</figure>

<div class="lang-en" markdown="1">

**Module:** Web Projects

Luxiaoji (噜小记) is a WeChat mini program built exclusively for two people. It started as a lightweight ordering and token ("Lu Coin") tool and grew into a bidirectional couple-life application: each side manages the products, tasks, orders, and rewards they offer to the other, while both share a love space with diary, album, messages, calendar, and heart-score records, plus a game space with two-player and challenge modes.

Backend and data are served by a self-hosted Fastify/PostgreSQL stack (no WeChat cloud as the primary store), with WeChat `wx.login` account binding and role-scoped permissions on shared content. The codebase keeps a full bidirectional contract test suite (158 front-end and 172 back-end checks) covering the shared data model, audit trails, and recycle behavior.

<p class="project-actions"><a class="btn" href="https://github.com/yys806/lulu">Repository</a></p></div>

<div class="lang-zh" markdown="1">

**模块：** 网页项目

噜小记是一款只供噜噜与噜妹两人使用的微信小程序。它从最初的点单与噜币工具，逐步扩展为双向情侣生活应用：双方各自管理提供给对方的商品、任务、订单与奖励，同时共享恋爱空间（日记、相册、留言、日历与爱心分）与游戏空间（双人对战与个人挑战）。

登录采用微信 wx.login 账号绑定；数据由自建 Fastify/PostgreSQL 服务持久化，不使用微信云开发作为主数据源；共享内容保留作者身份、权限与审计信息。项目维护完整的前后端契约测试（前端 158 项、后端 172 项），覆盖共享数据模型、审计与回收站逻辑。

<p class="project-actions"><a class="btn" href="https://github.com/yys806/lulu">代码仓库</a></p>

</div>