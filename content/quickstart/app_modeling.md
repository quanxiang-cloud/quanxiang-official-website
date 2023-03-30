---
title: "新手入门"
description: "通过详细的图文帮助您快速搭建应用"
# linkTitle: "新手入门"
weight: 2100
---

使用全象云平台之前，您需要准备好全象云平台账号密码，详情参见 [账号注册](..//registration/)。 平台支持**账密登录**或**使用验证码登录**。若账号登录失败 5 次将被锁定，可联系管理员重置密码。

快速搭建应用操作步骤如下文。

<img src="/images/quick_start/quick_start1.png" alt="quick_start1" style="zoom:50%;" />

## 新建应用

1. 用户账号登录 [全象云平台](https://portal.quanxiang.dev)，点击 **应用管理** > **我的应用** > **新建应用** 即可搭建应用。

2. 根据页面提示和应用搭建需求完成基础应用配置，点击 **确定** 即可完成应用新建。

   <img src="/images/quick_start/app_modeling1.png" alt="app_modeling1" style="zoom:50%;" />

## 创建菜单

通常一个应用由不同的菜单页面组成，每个菜单页面可实现不同的功能。应用创建完成后，导航栏目默认创建式例页面。

1. 点击 **视图管理** > **新建菜单**，出现新建页面弹窗，填写页面信息。

   ![app_modeling2](/images/quick_start/app_modeling2.png)

2. 应用页面支持新建表单、新建自定义页面、上传静态页面，请根据需要选择，详细操作步骤参见下文。

   ![app_modeling3](/images/quick_start/app_modeling3.png)

{{< alert tip >}}

**说明**

菜单页面支持分组管理，用于页面分类，便于开发者建立应用层级，方便用户快速定位到将要使用的功能。

![app_modeling4](/images/quick_start/app_modeling4.png)

{{</ alert >}}

### 创建表单

应用页面创建后，点击 **新建表单** 即可创建业务所需表单，设计完成后点击 **保存**，表单预览请点击页面右上角 **预览表单**。开发者可在此页面多次优化设计的表单，直到预览满足业务需求。详细步骤参见：[表单设计](../../manual/form/)。

![newform](/images/quick_start/newform.gif)

{{< alert tip >}}

**说明**

表单预览页面支持表单模拟提交，提交结果将在本页展示。

{{</ alert >}}

### 创建自定义页面

如需开发复杂场景的前端页面，可点击 **创建自定义页面** 进行创建。平台支持通过 Schema 编辑器或页面引擎构建自定义页面。详细步骤参见：[创建自定义页面](../../manual/custom/page_design/new/)。

![app_modeling5](/images/quick_start/app_modeling5.png)

### 上传静态页面

应用页面创建后，点击 **上传静态页面** 即可上传。支持上传静态的页面代码，包含 html，javascript，css，图片等。压缩包上传成功后生成自定义页面，支持预览或修改。更多说明参见：[上传静态页面](../../manual/custom_page/)。

![app_modeling6](/images/quick_start/app_modeling6.png)

{{< alert tip >}}

**说明**

静态页面生成需要时间，请耐心等待。

{{</ alert >}}

## 创建工作流（可选）

工作流通过一个触发器和多个动作节点序列构成。工作流触发方式目前仅支持工作表触发。在动作节点中，可以实现数据查询，更新等操作；也可以执行审批、填写等人工控制流程。

#### 创建入口

- 点击[管理端应用管理](https://portal.quanxiang.dev/apps) > **具体应用**  > **工作流**，跳转至工作流管理页。

- 点击**表单页面** > **关联工作流**，跳转至工作流管理页。

![app_modeling7](/images/quick_start/app_modeling7.png)

#### 创建步骤

工作流配置主要包含触发方式的选择，工作流功能节点的设计等。详细步骤参见：[工作流管理](../../manual/workflow/)。



## 应用权限管理

企业应用通常需要多角色用户协作，在进行数据收集或分析时，为保障企业数据安全，需要为不同角色用户分配不同的权限。

全象云平台目前支持通过应用维度往下细分配置权限，实现权限的精细化管理。权限管理维度为：**应用** > **工作表** > **操作权限**、**字段权限**、**数据权限**。

#### 配置入口

- [管理端应用管理](https://portal.quanxiang.dev/apps) > **具体应用** > **访问控制**，跳转至应用权限管理页。

- 点击**表单页面/自定义页面** > **已授权角色**，跳转至应用权限管理页。

![app_modeling8](/images/quick_start/app_modeling8.png)

#### 配置步骤

应用权限管理分为访问端权限，管理端权限，详细配置步骤参见：[访问控制](../../manual/permission/)。



## 发布应用

应用表单配置完成后，开发者可以点击应用右上角 **发布应用**，应用发布成功后，可点击 **访问应用端** 查看已发布应用。此时具有访问权限的用户也可以访问此应用。

![app_modeling9](/images/quick_start/app_modeling9.png)

{{< alert tip >}}

**说明**

如需更新应用内容，请先点击 **下线应用** 后更新，更新完成后重新点击 **发布应用** 即可。

{{</ alert >}}

## 查看应用

开发者应用发布后，用户可登录 [全象云平台访问端](https://home.quanxiang.dev) 查看应用。

![app_modeling10](/images/quick_start/app_modeling10.png)

## 下线应用

若应用确认需要下线，开发者点击 **下线应用** 即可完成应用下线。

{{< alert tip >}}

**说明**

下线后此应用访问端不可使用，如需再次使用请发布应用！

{{</ alert >}}

![app_modeling11](/images/quick_start/app_modeling11.png)

