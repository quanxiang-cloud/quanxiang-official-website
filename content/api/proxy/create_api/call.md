---
title: "调用 API"
description: "介绍如何调用 API"
keywords: "API"
linkTitle: "调用 API"
weight: 7334
---

第三方 API 创建成功后，API 默认开启状态。用户即可调用代理的 API。

API 调用目前支持通过 web 端调用。sdk 调用方式将在近期开放，敬请期待。

## web 端调用

### 前提条件

- 已获取第三方代理 API 访问 url；
- 已获取平台访问 token。

### 获取第三方代理 API 访问 url

点击 **数据管理** > **API 文档** >  **第三方代理 API**，选择需要调用的第三方 API。点击复制 url。

![debug1](/images/api/proxy/create_api/debug1.png)



### 获取平台访问 token

- 方式一：登录 [全象云平台](https://portal.quanxiang.dev/)，点击浏览器开发者工具，获取平台登录 token。
- 方式二：调用登录接口，获取平台登录 token。

