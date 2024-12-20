# Direct

> [!NOTE] sing-box 1.11.0 中的更改
> :warning:[override_address](#override-address)
>
> :warning:[override_port](#override-port)

`direct` 出站直接发送请求。

## 结构

```json
{
  "type": "direct",
  "tag": "direct-out",

  "override_address": "1.0.0.1",
  "override_port": 53,

  ... // 拨号字段
}
```

## 字段

### override_address

> [!CAUTION] 已在 sing-box 1.11.0 废弃
> 目标覆盖字段在 sing-box 1.11.0 中已废弃，并将在 sing-box 1.13.0 中被移除，参阅 [迁移指南](../../start/migration#迁移-direct-出站中的目标地址覆盖字段到路由字段)。

覆盖连接目标地址。

### override_port

> [!CAUTION] 已在 sing-box 1.11.0 废弃
> 目标覆盖字段在 sing-box 1.11.0 中已废弃，并将在 sing-box 1.13.0 中被移除，参阅 [迁移指南](../../start/migration#迁移-direct-出站中的目标地址覆盖字段到路由字段)。

覆盖连接目标端口。

## 拨号字段

参阅 [拨号字段](../shared/dial)。
