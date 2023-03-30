---
title: "鉴权方式"
keywords: '全象云, API'
description: 'API 鉴权方式说明'
linkTitle: "鉴权方式"
weight: 7320
---

全象云平台目前仅支持 signature 签名方式。详细配置说明如下文。

## signature 签名方式

签名加密流程参考下文示例，全象云低代码平台支持加密命令如下文表格所示。

{{< alert tip >}}

**说明**

签名加密过程根据需要进行字符处理(编码、排序)、加密、摘要签名、带密钥签名，加密过程必须使用 Base64 编码或 Hex 编码方式进行字符串转换。

{{</ alert >}}



### 字符处理

字符处理包含编码、排序，支持如下命令：
{{<table >}}
| 命令     | 描述           | 子命令 1 及其描述                                            | 子命令 2 及其描述                                            | 子命令 3 及其描述                             |
| -------- | -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | --------------------------------------------- |
| `base64` | Base64 编码    | <li>std：STD 格式</li><li>url：URL 格式</li>                 | <li>encode：编码</li><li>decode：解码</li>                   | -                                             |
| `hex`    | Hex 编码       | <li>encode：编码</li><li>decode：解码</li>                   | -                                                            | -                                             |
| `append` | 用于追加字符串 | <li>begin：在头部追加</li><li>end：在尾部追加</li>           | <APPEND_STR>：追加的字符串                                   | -                                             |
| `url`    | URL 编码       | <li>path：Path 编码</li><li>query：Query 编码</li>           | -                                                            | -                                             |
| `sort`   | 用于参数排序   | <li>json：默认输出 JSON 格式</li><li>xml：输出 XML 格式</li><li>query：输出Query 格式</li> | <li>same：字段名保持不变（默认）</li><li>snake：下划线分割，foo_bar</li><li>gonic：驼峰命名法，fooBar</li> | <li>desc：降序排序</li><li>asc：升序排序</li> |
{{</table >}}


### 加密
{{<table >}}
| 命令  | 描述         | 子命令 1 及其描述                          | 子命令 2 及其描述                                            | 子命令 3 及其描述                          | 子命令 4 及描述    |
| ----- | ------------ | ------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------ | ------------------ |
| `aes` | AES加密/解密 | CBC：CBC 模式                              | <li>pkcs5：PKCS5 填充方法</li><li>pkcs7：PKCS7 填充方法</li> | <li>encode：编码</li><li>decode：解码</li> | <SECRET_KEY>：密钥 |
| `rsa` | RSA加密/解密 | <li>encode：编码</li><li>decode：解码</li> | <SECRET_KEYS>：密钥组，可以有多段，最后拼成完整密钥          | -                                          | -                  |
{{</table >}}


### 摘要签名
{{<table >}}

| 命令    | 描述                 | 子命令及其描述                                               |
| ------- | -------------------- | ------------------------------------------------------------ |
| `md5`   | 用于计算 MD5 HASH 值 | [<PREFIX>]：可选，HASH 结果前置字符串                        |
| `crc32` | 用于计算 CRC32       | <li>[IEEE]：可选，支持 IEEE 多项式</li><li>[CASTAGNOLI]：可选，支持 Castagnoli 多项式</li> |
| `crc64` | 用于计算 CRC64       | <li>[ISO]：可选，支持 ISO 多项式</li><li>[ECMA]：可选，支持 ECMA 多项式</li> |
{{</table >}}

### 带密钥签名
{{<table >}}
| 命令     | 描述                         | 子命令及其描述               |
| -------- | ---------------------------- | ---------------------------- |
| `sha1`   | 用于计算 HMAC sha1 HASH 值   | <SECRET_KEY>：用于签名的密钥 |
| `sha256` | 用于计算 HMAC sha256 HASH 值 | <SECRET_KEY>：用于签名的密钥 |
{{</table >}}


### 示例

```
sort query gonic asc|append begin GET\n/iaas/\n|sha256 <SECRET_KEY>|base64 std encode
```

如上所示签名方法处理步骤：

1. 用驼峰命名法将参数按升序排序，输出成 query 格式，如：

   ```
   action.1=foo&action.2=bar&age=18&name=bob
   ```

2. 在头部追加字符串 GET\n/iaas/\n，如：

   ```
   GET\n/iaas/\naction.1=foo&action.2=bar&age=18&name=bob
   ```

3. 用<SECRET_KEY>将以上所得字符串进行 HMAC sha256 计算。

4. 将以上所得 hash 值进行 base64 std 编码，生成最终用于服务器校验的 Signature 字符串。























