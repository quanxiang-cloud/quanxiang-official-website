---
title: "查询多条参数说明"
description: "全象云低代码平台 API 参数说明"
keywords: "查询多条"
linkTitle: "查询多条参数说明"
weight: 7215
---

## 查询示例

本小节以 CURL 为例，说明查询参数。平台 API 支持多种语言调用，如：CURL，JavaScript，Python。

![dsl1](/images/api/platform/dsl1.png)

## 查询条件

全象云低代码平台 API 遵循 [elasticsearch ](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html?baymax=rec&rogue=rec-1&elektra=guide) 的查询语法。

### 单字段查询

如果需要查询单个字段，可以使用 `match`，`term` 等关键字进行查询，具体语义如下：

#### match

匹配条件是 `desc` 字段中包含"软件"这个词。

```json
{
  "query" : { "match" : { "desc" : "软件" }}
}
```



#### term

匹配条件是 `desc` 字段等于"软件"这个词。

```json
{
  "query" : { "term" : { "desc" : "软件" }}
}
```



#### terms

匹配条件是 `age` 字段里面等于数组中任一值。

```json
{
  "query" : { "terms" : { "age" : [1,4,5,6,7,12] }}
}
```



#### range

`range` 用于范围查找，详细参数说明如下。

- gte：大于等于；
- gt：大于； 
- lt：小于等于；
- lte：小于。

```json
{
  "query" : { "range": {
      "age": {
         "gte": 12,
         "gt": 11,
         "lt": 11,
         "lte": 12
      }
    }}
}
```





### 多字段查询

如果需要搜索多个关键字，例如查询 `name` 等于小明，`age` 等于 1 或者 2 。首先用单字段查询 `term` 和 `terms` 来表示，然后将它们用 `bool` 查询进行组合。

```json
{
  "query": {
    "bool": {
      "must": [
        { "term": { "name":  "小明" }},
        { "terms": { "age":  [1,2]}} 
      ]
    }
  }
}
```

{{< alert tip >}}

**说明**

查询字段间关系支持使用 must，should，must_not 进行连接。

- must ：代表所有的条件都必须匹配；
- should ：只需要满足一个条件；
- must_not :   所有条件都必须不匹配。

{{</ alert >}}

## 排序

排序使用 `sort` 字段，使用一个数组接收。排序规则为：先按照 created_at 排序，如果 created_at 无法排序，则按照 age 排序。

{{< alert tip >}}

**说明**

负号表示降序，增序无需使用加号表示。如：

- -created_at：表示按照 created_at 降序排序；
- age：表示按照 age 增序排序。

{{</ alert >}}

```json
{
    "sort":["-created_at" ,"age"]
}
```



## 分页

支持使用 page 和 size 分页。

page：从 1 开始， 第一页用 1表示 ，以此类推。

size：每页大小。

```json
  {
    "page": 19,
    "size": 8
  }
```

