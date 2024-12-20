# DNS 规则动作

> [!IMPORTANT] 🆕 自 sing-box 1.11.0 起

### route

```json
{
  "action": "route", // 默认
  "server": "",

  // 兼容性
  // route-options 字段
  "disable_cache": false,
  "rewrite_ttl": 0,
  "client_subnet": null
}
```

`route` 继承了将 DNS 请求 路由到指定服务器的经典规则动作。

### server

> [!IMPORTANT] 必填

目标 DNS 服务器的标签。

#### route-options 字段

参阅下方的 `route-options` 字段。

---

### route-options

```json
{
  "action": "route-options",
  "disable_cache": false,
  "rewrite_ttl": null,
  "client_subnet": null
}
```

`route-options` 为路由设置选项。

### disable_cache

在此查询中禁用缓存。

### rewrite_ttl

重写 DNS 回应中的 TTL。

### client_subnet

默认情况下，将带有指定 IP 前缀的 `edns0-subnet` OPT 附加记录附加到每个查询。

如果值是 IP 地址而不是前缀，则会自动附加 `/32` 或 `/128`。

将覆盖 `dns.client_subnet` 与 `servers.[].client_subnet`。

---

### reject

```json
{
  "action": "reject",
  "method": "default", // default
  "no_drop": false
}
```

`reject` 拒绝 DNS 请求。

### method

- `default`: 返回 NXDOMAIN。
- `drop`: 丢弃请求。

### no_drop

如果未启用，则 30 秒内触发 50 次后，`method` 将被暂时覆盖为 `drop`。

当 `method` 设为 `drop` 时不可用。
