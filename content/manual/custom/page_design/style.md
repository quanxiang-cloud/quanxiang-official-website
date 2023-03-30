---
title: "样式说明"
description: "在全象云低代码平台使用页面引擎创建自定义页面"
linkTitle: "样式说明"
weight: 4264
---

本小节主要介绍如何配置组件样式及样式中参数详细说明。

## 概述

样式设置支持可视化配置与源码编辑。

![intro9](/images/manual/custom/page_design/intro9.png)

## 详细说明

### 源码编辑

当部分 CSS 样式在设置器中配置无法满法需求时，可以通过源码编辑器编写 CSS 样式代码来自定义样式。

源码编辑与设置器是完全同步更改的，编辑完即刻生效，左侧画布可实时预览样式。

![style1](/images/manual/custom/page_design/style1.png)

### 画布

画布可配置文本框大小，文本框位置，画布样式如下图。

![style2](/images/manual/custom/page_design/style2.png)

- padding ：内边距，用于在一个声明中设置元素的所有内边距属性。设置器中可直接填写上下左右边距，也可通过源码编辑设计，如下所示，更多说明参见：[CSS padding 属性](https://www.w3school.com.cn/cssref/pr_padding.asp)。

  ```css
  padding:10px 5px 15px 20px;
  ```

  - 上内边距是 10px；
  - 右内边距是 5px；
  - 下内边距是 15px；
  - 左内边距是 20px。

- margin：外边距，用于在一个声明中设置元素的所有外边距属性。设置器中可直接填写上下左右边距，也可通过源码编辑设计，如下所示，更多说明参见：[CSS margin 属性](https://www.w3school.com.cn/cssref/pr_margin.asp)。

  ```css
  margin:10px 5px 15px 20px;
  ```

  - 上外边距是 10px；
  - 右外边距是 5px；
  - 下外边距是 15px；
  - 左外边距是 20px。

### 显示布局

填充类型分为：块级、行内、行内块、弹性布局。

#### 块级

块级元素，总是独占一行，表现为另起一行开始，而且其后的元素也必须另起一行显示。

#### 行内

行内元素，和相邻的行内元素在同一行。

#### 行内块

行内块元素，和相邻的行内元素在同一行，表现为同行显示。

#### 弹性布局

弹性布局可以简便、完整、响应式地实现各种页面布局。

![style3](/images/manual/custom/page_design/style3.png)

### 定位

定位用于锁定组件在画布中的位置，支持配置默认、相对、绝对、固定。

### 字体

平台支持配置字体大小、行高、字重（粗细）、对齐方式、颜色。

- 大小：字体大小；
- 行高：文字所在行高度；
- 字重：文字的粗细；
- 颜色：文字的颜色；
- 对齐方式：文字对齐方式，支持左对齐、居中、右对齐、两端对齐。

![style4](/images/manual/custom/page_design/style4.png)

### 背景

背景支持无填充、颜色填充、图片填充。

![style5](/images/manual/custom/page_design/style5.png)

### 边框

支持无边框、实线、虚线。其中实线、虚线支持设置宽度和边角度数。

![style6](/images/manual/custom/page_design/style6.png)

### 阴影

支持配置阴影颜色、位置。

- X 轴：阴影在水平方向的偏移。
- Y 轴：阴影在垂直方向上的偏移。
- 模糊：阴影模糊距离，值越大阴影的边缘就越模糊；
- 扩展：阴影扩展半径，如果值为正则阴影都延展扩大，值为负则阴影缩小。
- 颜色：阴影的颜色。

![style7](/images/manual/custom/page_design/style7.png)

