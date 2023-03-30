---
title: "审批节点"
description: "全象云平台工作流：审批节点介绍。"
linkTitle: "审批节点"
weight: 44210
---

工作流涉及审批功能时，需要使用审批节点，在审批通过或否决后进行数据状态变更。多人审批时支持或签、会签。

## 名词解释

**或签**：同一个审批节点设置多人审批，当其中**任意一人**通过后即可通过审批节点。

**会签**：同一个审批节点设置多人审批，需要**所有负责人**通过后才可以通过审批节点。

## 配置步骤

### 1、添加审批节点

工作流中点击 **+** ，在弹出的组件集中拖动 **审批组件** 到工作流中。

{{< alert tip >}}

**说明**

审批节点支持重命名，点击节点名称 **审批** 即可重命名。

![approval1](/images/manual/workflow/node/approval/approval1.png)

{{</ alert >}}

### 2、添加基础配置

#### 添加审批人

审批人支持选择：指定人员、表单字段、上级领导、部门负责人、流程发起人。

- 指定人员：点击 **添加审批人** 即可设置审批人员，支持指定单人或多人审批。
- 表单字段：用户可自定义审批人，目前表单字段仅支持人员选择器字段。
- 上级领导：指定上级领导为审批人。
- 部门负责人：指定部门负责人为审批人。
- 流程发起人：指定流程发起人为审批人。

![approval2](/images/manual/workflow/node/approval/approval2.png)



#### 设置审批规则

根据业务需求完成如下审批规则设置：

- 多人审批时：支持选择或签、会签。

- 无审批人时：支持选择自动跳过该节点、转交给管理员。

- 自动审批通过规则：支持预设如下几个场景，当满足预设时系统自动完成审批。
  - 审批人为发起人时。
  - 审批人与上一节点审批人相同时。
  - 审批人与前置节点审批人相同时。
  
- 审批用时限制：开启后可设置审批超时规则。

  - 时间限制：选择在流程进入该节点后，首次进入该节点后或工作流开始后开启审批记时。

  - 催办：可设置提前催办，重复催办。

  - 超时后处理规则：支持不处理，自动处理（自动通过或驳回），跳转至其他节点。

    ![approval3](/images/manual/workflow/node/approval/approval3.png)

{{< alert tip >}}

**说明**

跳转至其他节点：支持重新触发流程，结束流程，或跳转至工作流任一动作节点。

{{</ alert >}}

### 3、设置字段权限

全象云平台支持前后端分离的权限设置，只需在字段权限页签设置表单字段权限：

- 支持配置字段的前端显示样式：只读、编辑、隐藏。
- 后端读写功能默认打开，如需修改请点击 **数据权限修改**。当后端读或写关闭时，该节点用户将无法读取数据库数据或写入数据，屏蔽了调用接口更改数据的漏洞。

{{< alert tip >}}

**说明**

<li>自定义字段支持为字段赋值、设置数据修改权限；系统字段仅支持设置只读权限。<li>若流程表单中包含子表，且子表是隐藏的，那么子表内的字段仅支持设置隐藏。

{{</ alert >}}

![approval4](/images/manual/workflow/node/approval/approval4.png)

### 4、设置操作权限

在操作权限页签设置该节点负责人在处理工作流时可进行的操作。除默认的通过、拒绝操作外，全象云系统还支持定义：回退、打回重填、加签、转交、抄送、邀请阅示操作，可适配更多复杂的业务场景。详细说明参见下文：**操作权限参数说明**。

![approval5](/images/manual/workflow/node/approval/approval5.png)

## 操作权限参数说明

### 回退

将工作流任务回退至已经流转过的节点，除开始节点，不中断任务。支持选择回退节点，回退流程时可填写回退原因。

![approval6](/images/manual/workflow/node/approval/approval6.png)

### 打回重填

将工作流任务打回至初始节点，发起人重新填写后继续流程，不中断任务，需填写打回重填原因。

![approval7](/images/manual/workflow/node/approval/approval7.png)

### 加签

支持在此节点前加签，在此节点后加签。多人审批时，支持选择或签、会签。

![approval8](/images/manual/workflow/node/approval/approval8.png)

### 转交

将工作流任务转交给其他人，仅支持转交给一人，需输入转交原因。

![approval9](/images/manual/workflow/node/approval/approval9.png)

### 抄送

将工作流任务抄送给其他人，支持抄送给多人，可输入抄送原因。

![approval10](/images/manual/workflow/node/approval/approval10.png)

抄送任务将在 **抄送给我** 中展示，可点击进入流程查看详情。

![approval11](/images/manual/workflow/node/approval/approval11.png)

### 邀请阅示

为工作流任务添加阅示人，支持多人阅示，可输入阅示原因。

![approval12](/images/manual/workflow/node/approval/approval12.png)

阅示任务将在 **待我处理** 中展示，点击进入流程详情可阅示。

![approval13](/images/manual/workflow/node/approval/approval13.png)
