---
title: "创建 FaaS"
description: "全象云平台第三方 API 代理功能介绍"
keywords: "FaaS"
linkTitle: "创建 FaaS"
weight: 7420
---

本小节主要介绍如何快速创建 FaaS。

{{< alert tip >}}
**说明**

本小节文档主要适用于开发人员，需了解基础的  `go` 语言开发。
{{</ alert >}}

## 前提条件

应用中已开通 FaaS 函数计算功能。

1. 若未开通 FaaS 函数计算功能，在应用中点击 **数据管理** > **FaaS 函数管理** > **开通 FaaS 函数计算**。

   ![create_faas1](/images/faas/create_faas1.png)

2. 选择 SSH key 来源，支持上传 public key，或通过平台下载  private  key。

   - 上传 public key ：选择**用户自有的 public key**，用户本地执行命令生成 SSH key，在密钥处点击上传。

     ![create_faas11](/images/faas/create_faas11.png)

   - 下载  private  key：选择**生成 SSH keys**，平台一键生成 SSH key，点击保存即可生成 SSH key。

     ![create_faas12](/images/faas/create_faas12.png)

     

{{< alert tip >}}

**说明**

开通 FaaS 函数模块需执行一些初始化程序，大约需要 10 秒。  

{{</ alert >}}

## 操作步骤

按照以下步骤，创建 FaaS 函数。

### 1、新建 FaaS 函数

点击 **数据管理** > **FaaS 函数管理** > **新建函数**，在弹框中填写函数名称、函数标识，编程语言目前仅支持 GO 语言。填写后，点击 **确定添加**。

![create_faas2](/images/faas/create_faas2.png)

{{< alert tip >}}

**说明**

函数添加后，状态为 **进行中**，请耐心等待至 **成功**。状态切换为成功后，才能定义 FaaS 函数。

{{</ alert >}}

### 2、定义 FaaS 函数

1. FaaS 函数新建一段时间后，状态切换为成功，可点击 **复制 clone 地址**。

   ![create_faas3](/images/faas/create_faas3.png)

2. 在本地终端中执行如下命令下载项目。

   ```
   git clone ssh://git@192.168.201.3:30679/huhuhu/huhuhu.git
   ```

3. 下载完成后，默认示例函数如下。

   ![create_faas4](/images/faas/create_faas4.png)
   
   {{< alert tip >}}
   
   **说明**
   
   FaaS 函数编写遵循 Go 语言编写规范。
   
   {{</ alert >}}
   
   

### 3、构建 FaaS 函数

1. 当您在本地 code 页面编写好 FaaS 函数并上传到仓库后，回到全象云平台，点击 **构建**。在弹框中填写函数 **版本号** 及 **描述**。该函数开始进行构建镜像打包上传。

   ![create_faas5](/images/faas/create_faas5.png)

2. 点击该函数可查看该函数的版本记录的状态，如图中 v001 版本显示正在进行构建，构建完成后会显示离线状态。您可以选择上线或者删除，点击上线后该函数的该版本会显示为在线状态。

   ![create_faas6](/images/faas/create_faas6.png)

### 4、调用 FaaS 函数

当您在上线所需函数的使用版本后，点击即可生成配套的 API 文档，然后通过 API 文档调用此 FaaS 函数。

{{< alert tip >}}

**说明**

FaaS 函数参数说明及调用示例暂不支持在 API 文档中展示。

{{</ alert >}}

