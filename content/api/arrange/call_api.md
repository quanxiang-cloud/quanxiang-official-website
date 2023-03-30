---
title: "调用 API"
description: "介绍如何调用 API"
keywords: "API"
linkTitle: "调用 API"
weight: 7362
---

API 上线后， 用户即可调用编排后的”聚合 API“。API 调用目前支持通过 web 端调用。sdk 调用方式将在近期开放，敬请期待。

## web 端调用

### 前提条件

- 已获取“聚合 API“ 访问 url；
- 已获取平台访问 token。

### 获取聚合 API 访问 url

1. 点击 **数据管理** > **API 文档** >  **第三方代理 API**，选择任一第三方 API。点击复制 url，保留路径至 /system 以前。

   ![debug1](/images/api/proxy/create_api/debug1.png)

2. 点击 **API 编排**，选择需要访问的 API，复制访问路径与步骤 1 中路径组合。此组合路径即“聚合 API”的访问路径。

### 获取平台访问 token

- 方式一：登录 [全象云平台](https://portal.quanxiang.dev/)，点击浏览器开发者工具，获取平台登录 token。
- 方式二：调用登录接口，获取平台登录 token。

