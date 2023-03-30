---
title: "最佳实践"
description: "自定义页面案例"
linkTitle: "最佳实践"
weight: 4267
---

本小节主要介绍自定义页面具体案例，便于您快速上手页面引擎。

## 公共变量

**数据源** > **变量参数**中可定义公共变量，下文以文本组件为例介绍如何引用参数变量。

1. 定义公共变量。

   ![case10](/images/manual/custom/page_design/case10.png)

2. 将公共变量绑定到文本组件上，在变量列表中选择 text，输入框中输入 state，可直接调用数据。

   - 如果 text 变量为数组，则在输入框中填写调用数组内的元素，如：state[0]；
   - 如果 text 变量为对象，则在输入框中填写调用对象内的路径元素，如：state.xxx 或 state.xxx[0].xx。

   ![case11](/images/manual/custom/page_design/case11.png)

3. 预览效果如下。

   ![case12](/images/manual/custom/page_design/case12.png)

## 组件取值与组件赋值

目前页面引擎中组件值的传递，通常利用变量进行传递。以取得输入框的值为例，将其的值赋值到另一个文本框。

{{< alert tip >}}

**说明**

只有输入框支持 ID 命名，后续会增加其他组件的 ID 命名。

{{</ alert >}}

1. 首先先拖出所需的三个组件文本、输入框、按钮，设定一个公共变量为 text，值为”初始数据”，预览效果如下：

   ![case20](/images/manual/custom/page_design/case20.png)

2. 点击按钮组件的事件 tab，添加一个 onclick(点击) 事件，点击编辑。参考代码如下：

   ```javascript
    const input_elem = document.getElementById('input')
    const input_val = input_elem.value//设置变量取到输入框的值，input为输入框的ID
    this.states['text'] = input_val//点击按钮会将输入框的值赋予给变量text
   ```

   ![case21](/images/manual/custom/page_design/case21.png)

3. 绑定动作，点击保存，预览效果如下。

   ![case22](/images/manual/custom/page_design/case22.png)

   

通过变量和数据，即可完成两个组件之间的船惨、取值和赋值。还能通过其他事件例如：onchange 进行绑定，不同组件支持不同的事件。









