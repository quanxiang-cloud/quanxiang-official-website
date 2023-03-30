---
title: "动态渲染"
description: "在全象云低代码平台使用页面引擎创建自定义页面"
linkTitle: "动态渲染"
weight: 4266
---

本小节主要介绍如何配置动态渲染。

## 概述

全象云低代码平台支持动态循环。利用动态渲染，可以循环渲染出多条数据，例如设定一个 text 变量为一个数组。

["Hello","Thank you","Good morning","How are you?","Nice to meet you","You are welcome","Good bye","Good night"]

![draw1](/images/manual/custom/page_design/draw1.png)

## 操作步骤

本文以 text 变量为例描述动态循环配置步骤。

1. 拖一个文本组件，设定其动态渲染参数，选择勾选刚定义的 Text 函数，在动态渲染右侧下方的输入框内输入 return {content: state}，点击预览即可循环渲染成功。

   ![draw2](/images/manual/custom/page_design/draw2.png)

2. 渲染效果如下：

   ![draw3](/images/manual/custom/page_design/draw3.png)

