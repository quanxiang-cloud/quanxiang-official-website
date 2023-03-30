---
title: "创建 API 分组"
description: "API 分组创建流程介绍"
keywords: "API 分组"
linkTitle: "创建 API 分组"
weight: 7315
---

API 分组是 API 的管理单元，API 提供者以 API 分组为单位，管理该 API 分组内的所有 API。

创建 API 之前，您需要先创建 API 分组。

## 创建分组

按照以下步骤，创建 API 分组。

1. 用户账号登录 [全象云平台](https://portal.quanxiang.dev/)。

2. 在控制台导航栏中，选择**应用管理** > **我的应用**，选择需要设置第三方 API 代理的应用，进入应用详情页面。

3. 点击**数据管理** > **第三方 API 代理** > **新建分组**，出现创建 API 分组弹窗。

   ![create_apigroup1](/images/api/proxy/create_apigroup1.png)

4. 填写 API 分组基础信息：分组名称、分组标识、描述。

   {{< alert tip >}}

   **说明**

   分组标识需用英文标识，作为分组唯一标识，不可重复。

   {{</ alert >}}

## 配置分组

### 域名与分组、API 之间的关系

- 用户需要将自己拥有的域名绑定到 API 分组上，建立域名与分组之间的映射关系。
- API 在接收到客户端发出的 HTTP 请求时，根据 HTTP 请求中的域名来定位到这个请求所属的 API 分组，再通过 HTTPMethod 和  PATH 确定唯一的 API。



### 操作步骤

分组信息填写后，进入分组配置页面。

1. 选择请求协议，配置主机地址（域名）及端口号。

   - 请求协议支持 HTTP、HTTPS。
   - 主机地址及端口号即第三方 API 的访问地址。

2. 配置鉴权方式。

   - 鉴权方式支持不配置，或配置签名。配置方式参见：[鉴权方式](../../authentication/)。

   {{< alert tip >}}

   **说明**

   配置鉴权方式后，需配置 [API 密钥](/api/proxy/secretkey/)。若未配置密钥，调用时系统将提示上传密钥。

   {{</ alert >}}

![create_apigroup2](/images/api/proxy/create_apigroup2.png)

## API 列表

### 新建 API

点击 **API 列表** > **新建 API**，进入新建 API 页面，根据页面指引正确填写 API 信息，即可创建该分组下的 API。详细步骤参考：[创建 API](../create_api/create/)。

![create_apigroup7](/images/api/proxy/create_apigroup7.png)

### 查看 API 列表

API 列表中可查看所有 API 信息。API 列表将展示：**API 名称**、**请求方法**、**URL**、**代理路径**及其**状态**。

![create_apigroup3](/images/api/proxy/create_apigroup3.png)



## 管理分组

### 创建子分组

点击分组详请按钮，点击 **新建子分组**。 子分组创建流程同分组。

![create_apigroup4](/images/api/proxy/create_apigroup4.png)

### 修改分组信息

点击分组详请按钮 > **修改组信息**，出现修改组信息弹窗。仅支持修改分组名称及描述。

![create_apigroup5](/images/api/proxy/create_apigroup5.png)





## 删除分组

如需删除分组，点击分组详情按钮 > **删除**，出现提示弹窗，请确认后删除分组。

![create_apigroup6](/images/api/proxy/create_apigroup6.png)
