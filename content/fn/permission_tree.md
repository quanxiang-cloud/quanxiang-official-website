---
title: "角色权限树"
description: "通过图表帮助您更好地了解全象云平台不同角色的功能划分"
linkTitle: "角色权限树"
weight: 3100
---

全象云平台根据用户角色来划分平台使用权限，为提升用户体验，将系统分为 [管理端](https://portal.quanxiang.dev) 和 [访问端](https://home.quanxiang.dev)。管理端主要提供给运维管理员或系统管理员使用。访问端主要提供给使用应用的用户。

- **超级管理员**和**管理员**通过访问管理端进行系统管理，应用管理。
- **查看者**通过登录访问端使用应用，接收通知消息，查看待办事项等。

{{< alert tip >}}

**说明**

超级管理员：平台默认角色，默认具备企业所有功能权限和全部数据可见范围，支持管理其他普通管理员。

{{</ alert >}}

角色对应权限树如下表。


{{<table >}}
<table>
    <tr>
    <th rowspan="2">平台权限</th>
    <th colspan="4">应用管理</th>
    <th colspan="4">访问控制</th>
    <th colspan="2">平台设置</th>
    <th colspan="2">系统设置</th>
    <th colspan="1">操作日志</th>
    <th colspan="4">数据集</th>
    <th colspan="2">异常流程</th>
    </tr>
    <tr>
        <td>查看应用</td>
        <td>新建应用</td>
        <td>修改应用</td>
        <td>删除应用</td>
        <td>查看企业通讯录</td>
        <td>管理企业通讯录</td>
        <td>查看角色</td>
        <td>管理角色</td>
        <td>查看平台设置</td>
        <td>管理平台设置</td>
        <td>消息查看</td>
        <td>消息管理</td>
        <td>消息查看</td>
        <td>查看</td>
        <td>新建</td>
        <td>修改</td>
        <td>删除</td>
        <td>查看</td>
        <td>处理</td>
    </tr>
    <tr>
        <td>超级管理员</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
    </tr>
    <tr>
        <td>管理员</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
    </tr>
    <tr>
        <td>查看者</td>
        <td>✅</td>
        <td></td>
        <td></td>
        <td></td>
        <td>✅</td>
        <td></td>
        <td>✅</td>
        <td></td>
        <td>✅</td>
        <td></td>
        <td>✅</td>
        <td></td>
        <td>✅</td>
        <td>✅</td>
        <td></td>
        <td></td>
        <td></td>
        <td>✅</td>
        <td></td>
    </tr>
</table>
{{</table>}}



