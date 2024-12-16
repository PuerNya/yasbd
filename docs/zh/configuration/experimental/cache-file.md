# 缓存文件

> [!IMPORTANT] 🆕 自 sing-box 1.8.0 起

> [!NOTE] sing-box 1.9.0 中的更改
> :new:[store_rdrc](#store-rdrc)
>
> :new:[rdrc_timeout](#rdrc-timeout)

## 结构

```json
{
  "enabled": true,
  "path": "",
  "cache_id": "",
  "store_fakeip": false,
  "store_rdrc": false,
  "rdrc_timeout": ""
}
```

## 字段

### enabled

启用缓存文件。

### path

缓存文件路径，默认使用`cache.db`。

### cache_id

缓存文件中的标识符。

如果不为空，配置特定的数据将使用由其键控的单独存储。

### store_fakeip

将 fakeip 存储在缓存文件中。

### store_rdrc

> [!IMPORTANT] 🆕 自 sing-box 1.9.0 起

将拒绝的 DNS 响应缓存存储在缓存文件中。

[地址筛选 DNS 规则项](../dns/rule#地址筛选字段) 的检查结果将被缓存至过期。

### rdrc_timeout

> [!IMPORTANT] 🆕 自 sing-box 1.9.0 起

拒绝的 DNS 响应缓存超时。

默认使用 `7d`。
