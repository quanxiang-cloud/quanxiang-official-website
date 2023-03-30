---
title: "创建 API"
description: "API 创建流程介绍"
keywords: "API"
linkTitle: "创建 API"
weight: 7331
---

创建 API 即录入 API 的定义，需要设置 API 的基本信息、服务信息、请求信息、和返回信息等规则内容。本小节主要介绍如何快速创建 API 。

## 前提条件

- 已创建 API 分组。如果未创建 API 分组，参考[创建 API 分组](../../../proxy/create_apigroup/)进行创建。



## 新建 API

按照以下步骤，创建 API。

1. 选择需要新建 API 的 API 分组，点击 **API 列表** > **新建 API**。

   ![create1](/images/api/proxy/create_api/create1.png)

2. 进入新建 API 页面，填写如下信息。

   ![create2](/images/api/proxy/create_api/create2.png)

   **定义 API 基本信息**
   {{<table >}}

   | 参数     | 描述                                                         |
   | -------- | ------------------------------------------------------------ |
   | API 名称 | 所创建的 API 的名称，API 名称标识需在所属分组内具有唯一性。</br>**说明**：最多可填写 20 个字符，支持中文或英文字符。 |
   | API 路径 | 第三方 API 的原始路径，相对于根目录的相对路径，如：/api/v1/payment/xxx.php。</br>**说明**：分组配置中已完成主机域名配置（如：[http://qingcloud.com](http://qingcloud.com/) ），此处仅需补充 API 相对路径（如：/api/v1/payment/xxx.php）。</br>补充完成后，系统可获取此 API 全局唯一 URL（如：http://qingcloud.com/api/v1/getName）。非标准 |
   | 描述     | API 的相关描述。                                             |

   

   {{</table >}}

   **定义 API 请求信息**
   {{<table >}}

   | 参数     | 描述                                                         |
   | -------- | ------------------------------------------------------------ |
   | 请求方法 | 支持标准的 HTTP Method，可选择 GET、POST、PUT、DELETE、OPTION、PATCH。</br>**说明**：请求协议已在分组配置中配置，请求协议支持：HTTP、HTTPS。 |
   | 代理路径 | API 导入到全象云平台后，系统生成的虚拟访问路径。</br>此路径根据由平台分配给 APP 的唯一虚拟路径 + APP 内分组路径组成。可自动获得，无需手动配置。 |
   | API 标识 | API 在分组内唯一标识，需用英文标识。                         |
   | 请求参数 | API 的请求参数，即配置用户需要在什么位置传入什么参数。<br>可选位置有：Query、Header、Body、常量参数，常量参数定义规则参见下文：[常量参数说明](#常量参数说明)。<br>支持的参数类型有：string、number、boolean。其中 Body 还支持 object、array。 |

   {{</table >}}

   **定义 API 返回信息**
   {{<table >}}

   | 参数     | 描述                                                         |
   | -------- | ------------------------------------------------------------ |
   | 返回参数 | API 的返回参数。支持的参数类型包含：string、number、boolean、object、array。 |
   {{</table >}}

3. 点击 **确认新建** 即可。创建成功后 API 默认开启状态。



