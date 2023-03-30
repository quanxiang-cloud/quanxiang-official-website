---
title: "编排 API"
description: "API 编排流程介绍"
keywords: "API"
linkTitle: "编排 API"
weight: 7361
---

API 编排流程即将已经开发好的 API 接口按照一定的业务逻辑和流程进行可视化编排。API 创建成功后，跳转进入 API 设计页面。页面默认存在三个节点：开始节点、请求节点、结束节点。



## 操作步骤

按照以下步骤，编排 API。

### 1、配置开始节点

开始节点仅需配置 Body 或常量参数，点击参数列表右上角加号即可添加。请求方式和接口路径均由系统生成，无需配置。

{{< alert tip >}}

**说明**

配置需遵循 [Swagger 2.0](https://swagger.io/docs/specification/2-0/basic-structure/) 规范。

{{</ alert >}}

![arrange_api1](/images/api/arrange/arrange_api1.png)

#### Body 参数说明

{{<table >}}

| 参数     | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| 参数名称 | 仅支持填写英文标识。                                         |
| 参数类型 | 参数类型支持选择字符串、数字、布尔、对象、数组。</br>**说明**：参数类型为对象、数组时支持添加子参数。 |
| 是否必填 | 支持选择是或否。                                             |
| 描述     | 参数描述。                                                   |

{{</table >}}

#### 常量参数说明

{{<table >}}

| 参数     | 描述                                 |
| -------- | ------------------------------------ |
| 参数名称 | 仅支持填写英文标识。                 |
| 参数类型 | 参数类型支持选择字符串、数字、布尔。 |
| 参数值   | 填写参数值。                         |
| 描述     | 参数描述。                           |

{{</table >}}

#### 开始节点基础信息说明

{{<table >}}

| 参数     | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| 请求方法 | 目前仅支持 POST 方法，系统自动生成。                         |
| 接口路径 | 用户调用 API 的路径，系统自动生成，如：/system/app/bwp2w/poly/test01/weather.p。 |
| API 标识 | API 标识作为 API 唯一标识，创建 API 时填写，如：weather.p。  |

{{</table >}}

### 2、配置请求节点或判断节点

API 创建成功后页面默认添加一个请求节点，鼠标 hover 到开始节点右侧即可添加请求节点或判断节点，可添加串行节点或并行节点。

![arrange_api2](/images/api/arrange/arrange_api2.png)

#### 节点间关系

- 串行节点：后一个节点需引用前一个节点数据。

  ![arrange_api21](/images/api/arrange/arrange_api21.png)

- 并行节点：节点执行无先后顺序。

  ![arrange_api22](/images/api/arrange/arrange_api22.png)

#### 配置请求节点

为请求节点赋值，将开始节点中参数赋值到请求节点对应参数中。

![arrange_api23](/images/api/arrange/arrange_api23.png)

{{< alert tip >}}

**说明**

全部 API 包含：代理的第三方 API，平台 API。

![arrange_api231](/images/api/arrange/arrange_api231.png)

{{</ alert >}}

#### 配置判断节点

配置判断条件，可快捷点击节点参数及运算符进行配置。

![arrange_api24](/images/api/arrange/arrange_api24.png)



### 3、配置结束节点

API 设计完成后，即可配置聚合 API 的输出。设置输出参数，并点击右侧节点参数为它赋值。

![arrange_api3](/images/api/arrange/arrange_api3.png)

{{< alert tip >}}

**说明**

输出参数类型为数组时，数组需要返回几条数据，在此处对应配置几条。

如：需数组返回 3 条数据，此处点击配置 3 条。

![arrange_api31](/images/api/arrange/arrange_api31.png)

{{</ alert >}}

### 4、调试

API 编排完成后，即可点击页面右上角 **调试** 进行调试。

- 调试成功，即可点击 **上线** 使用。
- 调试失败，可在网页开发者工具中查看报错原因。

![arrange_api4](/images/api/arrange/arrange_api4.png)

{{< alert tip >}}

**说明**

如需修改聚合 API 内容，请先点击 **下线** 将 API 下线。更新完成后，需重新调试再上线。

{{</ alert >}}
