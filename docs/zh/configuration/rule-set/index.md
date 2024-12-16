---
outline: <2
---

# 规则集

> [!IMPORTANT] 🆕自 sing-box 1.8.0 起

> [!NOTE] sing-box 1.10.0 中的更改
> :new:`type: inline`

## 结构

::: tabs

== 内联

> [!IMPORTANT] 🆕自 sing-box 1.10.0 起

```json
{
  "type": "inline", // 可选
  "tag": "",
  "rules": []
}
```

== 本地文件

```json
{
  "type": "local",
  "tag": "",
  "format": "source", // or binary
  "path": ""
}
```

== 远程文件

> [!NOTE]
> 远程规则集将被缓存如果 `experimental.cache_file.enabled` 已启用。

```json
{
  "type": "remote",
  "tag": "",
  "format": "source", // or binary
  "url": "",
  "download_detour": "", // 可选
  "update_interval": "" // 可选
}
```
:::

## 字段

### type

> [!IMPORTANT] 必填

规则集类型，`local` 或 `remote`。

### tag

> [!IMPORTANT] 必填

规则集的标签。

## 内联字段

> [!IMPORTANT] 🆕自 sing-box 1.10.0 起

### rules

> [!IMPORTANT] 必填

一组 [无头规则](../headless-rule/).

## 本地或远程字段

### format

> [!IMPORTANT] 必填

规则集格式，`source` 或 `binary`。

## 本地字段

### path

> [!IMPORTANT] 必填

> [!NOTE] 自 sing-box 1.10.0 起，文件更改时将自动重新加载。

规则集的文件路径。

## 远程字段

### url

> [!IMPORTANT] 必填

规则集的下载 URL。

### download_detour

用于下载规则集的出站的标签。

如果为空，将使用默认出站。

### update_interval

规则集的更新间隔。

默认使用 `1d`。