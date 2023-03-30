---
title: "批量导入 API"
description: "API 批量导入流程介绍"
keywords: "API"
linkTitle: "批量导入 API"
weight: 7332
---

[Swagger 规范](https://swagger.io/docs/specification/about/?spm=a2c63.p38356.0.0.1f4726d3tHJcUC)是一种描述 API 的规范，遵循 REST API 的 API 描述格式，广泛应用于定义和描述后端应用服务的 API。全象云低代码平台支持导入 Swagger2.0 的文件来创建 API。

## 前提条件

- 导入的 Swagger 文件为标准 Swagger 文件。
- 如果导入的 Swagger 文件为非标准，请参考下文创建非标准 RESTful API 后导入。

{{< alert tip >}}

**说明**

标准 RESTful 的 API 由 apiPath+method 组成，有确定的输入输出。

{{</ alert >}}



## 导入 API

按照以下步骤，批量导入创建 API。

1. 选择需要新建 API 的 API 分组，点击 **API 列表** > **批量导入**。

2. 进入批量导入页面，点击或拖拽上传，支持 Swagger2.0 数据导入。

   ![create3](/images/api/proxy/create_api/create3.png)

3. 点击 **确认导入** 即可，导入成功后 API 默认开启状态。

## 创建非标准 RESTful API 

非标准的 API apiPath 则需要通过 action 参数决定输入和输出。因此，在平台中注册非标准 API 采用 `apiPath?action` 的格式定义 apiPath，系统可以识别前半部分为apiPath，后半部分为 action 参数。



### 定义常量参数

对于输入值已固定的参数如： `version=1` ，用户不需要每次调用时指定，可在 swagger 中注入常量参数指定。

swagger 全局定义的 `x-consts` 为本文件内所有 api 共享的常量配置，`paths` 内定义的 `x-consts` 为本 API 独有。

- 平台在解析每个 API 时，将合并每个 API 的两部分 `consts` 配置。
- 代理调用原生 API 或编排原生 API，平台会自动 append 这些常量参数，无需手动输入。

```
{
 "swagger": "2.0",
 "x-consts": [
    {
      "name": "version",
      "type": "number",
      "in": "body",
      "description": "",
      "data": "1"
    }
 ],
 "paths": {
    "/api/v1/getData": {
    	"get":{
		  "x-consts": [
		    {
		      "name": "type",
		      "type": "string",
		      "in": "body",
		      "description": "",
		      "data": "foo"
		    }
		  ]
		}
   }
 }
}
```

#### 依赖的 swagger 参数

paths.operationId 用于生成 API 标识，要求分组内唯一，在 API 代理路径中显示。

### action 数据类型说明

该类型实际为 `string` 类型，无需填值，只需要指定 type、name、in，polyapi 会自动取 path 上 ? 之后的 action 参数作为常量填入。

### timestamp 数据类型说明

自动填入时间戳（UTC），value 配置为 format，支持空 value 作为默认 format 处理。
目前支持的时间戳格式：

- YYYY-MM-DDThh:mm:ssZ(default)
- YYYY-MM-DDThh:mm:ss+0000(ISO8601)

