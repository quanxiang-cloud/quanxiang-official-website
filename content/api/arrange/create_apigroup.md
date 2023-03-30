---
title: "创建 API 分组"
description: "API 分组创建流程介绍"
keywords: "API 分组"
linkTitle: "创建 API 分组"
weight: 7355
---

API 分组是 API 的管理单元，API 提供者以 API 分组为单位，管理该 API 分组内的所有 API。

创建 API 之前，您需要先创建 API 分组。

## 创建分组

按照以下步骤，创建 API 分组。

1. 用户账号登录 [全象云平台](https://portal.quanxiang.dev/)。

2. 在控制台导航栏中，选择**应用管理** > **我的应用**，选择需要进行 API 编排的应用，进入应用详情页面。

3. 点击**数据管理** > **API 编排管理** > **新建分组**，出现创建 API 分组弹窗。

   ![create_apigroup1](/images/api/arrange/create_apigroup1.png)

4. 填写 API 分组基础信息：分组名称、分组标识、描述。

   {{< alert tip >}}

   **说明**

   分组标识需用英文标识，作为分组唯一标识，不可重复。

   {{</ alert >}}



## API 列表

### 新建 API

点击 **API 列表** > **新建 API**，进入新建 API 页面，根据页面指引正确填写 API 信息，即可创建该分组下的 API。详细步骤参考：[创建 API](../create_api/)。

![create_apigroup2](/images/api/arrange/create_apigroup2.png)

### 查看 API 列表

API 列表中可查看所有 API 信息。API 列表将展示：**API 名称**、**请求方法**、**访问路径**、**描述**、**状态**及支持的操作。

![create_apigroup3](/images/api/arrange/create_apigroup3.png)



## 管理分组

### 创建子分组

点击分组详请按钮，点击 **新建子分组**。 子分组创建流程同分组。

![create_apigroup4](/images/api/proxy/create_apigroup4.png)

### 修改分组信息

点击分组详请按钮 > **修改组信息**，出现修改组信息弹窗。仅支持修改分组名称及描述。

![create_apigroup5](/images/api/arrange/create_apigroup5.png)





## 删除分组

如需删除分组，点击分组详情按钮 > **删除**，出现提示弹窗，请确认后删除分组。

![create_apigroup6](/images/api/proxy/create_apigroup6.png)
