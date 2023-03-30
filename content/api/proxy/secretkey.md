---
title: "密钥管理"
description: "介绍如何配置 API 密钥"
keywords: "API 密钥, 密钥管理"
linkTitle: "密钥管理"
weight: 7325
---

API 密钥用于验证用户身份，保障 API 访问安全。密钥需用户手动创建。

## 前提条件

- 已在 **配置分组** 中配置签名鉴权方法。

## 新建密钥

按照以下操作，新建密钥。

1. 点击 **API 密钥** > **新建密钥**。

2. 页面出现密钥创建弹窗，需填写密钥名称、密钥、描述。

   ![secretkey1](/images/api/proxy/secretkey1.png)

3. 密钥创建成功后，状态默认为开启。

## 管理密钥

### 密钥状态

密钥状态支持**开启**、**关闭**。密钥创建成功后，状态默认为开启。如需关闭，点击切换状态。

![secretkey2](/images/api/proxy/secretkey2.png)

### 修改密钥

点击 **修改** 即可修改 API 密钥，仅支持修改描述。

![secretkey3](/images/api/proxy/secretkey3.png)

## 删除密钥

1. 点击关闭启用的 API 密钥，当 API 密钥处于关闭状态时才能进行删除。

   ![secretkey4](/images/api/proxy/secretkey4.png)

2. 点击 **删除** 出现删除弹框，确认后删除 API 密钥。

   ![secretkey5](/images/api/proxy/secretkey5.png)

   

