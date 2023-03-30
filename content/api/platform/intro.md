---
title: "概览"
description: "全象云平台第三方 API 代理功能介绍"
keywords: "API 代理"
linkTitle: "概览"
weight: 7210
---

全象云平台 API 目前包含：页面表单 API，数据模型 API。

## 页面表单 API

平台创建表单后会自动生成页面表单 API， 点击 **API 文档** > **页面表单 API** 即可查看。

{{< alert tip >}}

**说明**

目前仅支持查看 API 文档。后续将支持表单 API 调用。

{{</ alert >}}

### 全部字段

表单 API 参数说明在全部字段中展示，包含：字段名称、字段标识、数据格式、是否允许为空、是否作为外键。

![intro1](/images/api/platform/intro1.png)

### 调用示例

调用式例包含新增、删除、更新、查询单条、查询多条。以新增为例，演示表单 API 调用。

{{< alert tip >}}

**说明**

目前支持的语言包含 CURL，JavaScript，Python。

{{</ alert >}}

#### 请求示例

![intro2](/images/api/platform/intro2.png)

#### 返回示例

![intro3](/images/api/platform/intro3.png)



## 数据模型 API

数据模型创建后，平台会自动生成对应 API。点击 **API 文档** > **数据模型 API** 即可查看。

{{< alert tip >}}

**说明**

数据模型创建流程参见：[创建数据模型](../../../manual/data_models/new/form/)。

{{</ alert >}}

### 全部字段

数据模型 API 参数说明在全部字段中展示，包含：字段名称、字段标识、数据格式、是否允许为空、是否作为外键。

![intro4](/images/api/platform/intro4.png)

### 调用示例

调用式例包含新增、删除、更新、查询单条、查询多条。以删除为例，说明数据模型 API 调用方法。

{{< alert tip >}}

**说明**

目前支持的语言包含 CURL，JavaScript，Python。

{{</ alert >}}

#### 请求示例

![intro5](/images/api/platform/intro5.png)

#### 返回示例

![intro6](/images/api/platform/intro6.png)

