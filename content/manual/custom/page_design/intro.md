---
title: "什么是页面引擎"
description: "全象云低代码平台页面引擎介绍"
linkTitle: "什么是页面引擎"
weight: 4261
---

全象云低代码平台页面引擎中提供了常用组件，组件包含了预置的样式，并封装了基础事件代码，实现了开箱即用，避免用户重复书写样式和事件代码，能够专注于业务场景开发。

## 页面引擎样式

平台页面引擎的结构类似于设计软件的布局，分为左中右三栏+顶部栏布局：

- 左侧工具栏包含组件库、页面层级、数据源。
- 中间部分是画布（canvas） 。
- 右侧是属性配置面板。
- 顶部是基础操作栏目。

![intro1](/images/manual/custom/page_design/intro1.png)

## 顶部操作栏

全象云低代码平台提供：撤销、前进、？、预览、保存、保存退出等快捷按钮，为页面开发提供便利。

![intro2](/images/manual/custom/page_design/intro2.png)

## 左侧工具栏

### 组件库

组件库中组件可直接拖拽到画布中，并支持组建调整顺序、复制等操作。全象云目前支持如下组件。

![intro3](/images/manual/custom/page_design/intro3.png)

### 页面层级

页面层级用于查看页面布局，页面层级支持查看大纲视图和源码视图。

- 在大纲视图中点击组件，即可定位到画布中对应组件。

  ![intro4](/images/manual/custom/page_design/intro4.png)

- 源码视图便于查看页面详细数据。

  ![intro5](/images/manual/custom/page_design/intro5.png)

### 数据源

数据源可以声明变量和 API，用于展示动态数据。在控件的属性配置上可以进行对变量参数的数据绑定。

![intro6](/images/manual/custom/page_design/intro6.png)

## 中间画布

画布用来将组件进行排版、配置，从而完成页面的搭建。在画布中可以拖拽组件布局，也可以对组件进行复制、删除操作。

![intro7](/images/manual/custom/page_design/intro7.png)

## 右侧配置栏

### 属性

属性设置用于配制组件的基础属性，配置完成后画布中能够实时查看配置效果。

{{< alert tip >}}

**说明**

变量参数绑定效果需在预览环境中查看。

{{</ alert >}}

![intro8](/images/manual/custom/page_design/intro8.png)

### 样式

样式设置支持可视化配置，同时支持通过源码编辑。

![intro9](/images/manual/custom/page_design/intro9.png)

### 事件

事件面板用于绑定动作发起 API，每个组件都支持 didMount(加载完成)，willUnmount(卸载) 这两个事件，其它动作则由该组件自身暴露的。如：按钮组件支持暴露 onClick 事件。

![intro10](/images/manual/custom/page_design/intro10.png)

![intro11](/images/manual/custom/page_design/intro11.jpeg)

### 动态渲染

动态渲染用于展示循环渲染场景。

![intro12](/images/manual/custom/page_design/intro12.png)
