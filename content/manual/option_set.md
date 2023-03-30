---
title: "选项集"
description: "如何创建选项集及其使用场景"
linkTitle: "选项集"
weight: 4150
---

在设计表单时，通常会预设置单选或多选框为用户提供选择项。 有时不同的工作表，可能单选或多选的均是同样的数据内容，对于高复用的数据选项， 建议维护成选项集，可以节省很多重复配置的操作，帮您提高效率。

全象云低代码平台支持创建单层级、多层级选项集：

- **单层级选项集**：设计表单时，【单选框】、【复选框】、【下拉单选框】、 【下拉复选框】等字段中均可以调用此类选项集。
- **多层级选项集**：设计表单时，【级联选择】字段中可使用此类选项集。

## 创建入口

登录 [全象云管理端](https://portal.quanxiang.dev)，点击 **应用管理** > **选项集**。

![option_set1](/images/manual/option_set1.png)

## 添加单层级选项集

1. 点击 **单层级** > **添加选项集**，弹框中填写选项集信息。

   ![option_set2](/images/manual/option_set2.png)

2. 点击确定后，跳转至选项集详情页，根据需要添加选项数据。

   ![option_set3](/images/manual/option_set3.png)

   {{< alert tip >}}

   **说明**

   选项数据名称不可重复，每个选项名称建议不超过 20 个字符。

   {{</ alert >}}

### 调用选项集

设计表单时，【单选框】、【复选框】、【下拉单选框】、 【下拉复选框】等字段中均可以调用此类选项集，选项来源中添加即可。

![option_set4](/images/manual/option_set4.png)

## 添加多层级选项集

1. 点击 **多层级** > **添加选项集**，弹框中填写选项集信息。

   ![option_set2](/images/manual/option_set2.png)

2. 点击确定后，跳转至选项集详情页，根据需要添加选项数据。下级选项需要选中上级选项后填写。

   ![option_set5](/images/manual/option_set5.png)

   {{< alert tip >}}

   **说明**

   选项数据名称不可重复，每个选项名称建议不超过 20 个字符。

   {{</ alert >}}

### 调用选项集

设计表单时，【级联选择】字段中可使用此类选项集。

![option_set6](/images/manual/option_set6.png)

## 单层级选项集扩展为多层级选项集

单层级选项集支持扩展为多层级选项集，仅需右击复制即可快速复制。

1. 选择需要扩展的单层级选项集，点击 **复制** ，出现扩展弹窗。

   ![option_set7](/images/manual/option_set7.png)

2. 勾选扩展为多层选项集，点击 **确定复制**。

   ![option_set8](/images/manual/option_set8.png)

3. 复制成功后跳转至多层级选项集。

   ![option_set9](/images/manual/option_set9.png)

