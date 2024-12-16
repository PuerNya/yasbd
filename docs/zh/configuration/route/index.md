# 路由

> [!NOTE] sing-box 1.11.0 中的更改
> :new:[network_strategy](#network-strategy)
>
> :new:[default_network_type](#default-network_type)
>
> :new:[default_fallback_network_type](#default-fallback-network-type)
>
> :new:[default_fallback_delay](#default-fallback-delay)

> [!NOTE] sing-box 1.8.0 中的更改
> :new:[rule_set](#rule-set)
>
> :hourglass:[geoip](#geoip)
>
> :hourglass:[geosite](#geosite)

### 结构

```json
{
  "geoip": {},
  "geosite": {},
  "rules": [],
  "rule_set": [],
  "final": "",
  "auto_detect_interface": false,
  "override_android_vpn": false,
  "default_interface": "",
  "default_mark": 0,
  "default_network_strategy": "",
  "default_fallback_delay": ""
}
```

> [!NOTE] 当内容只有一项时，可以忽略 JSON 数组 [] 标签

## 字段

| 键        | 格式                 |
| --------- | -------------------- |
| `geoip`   | [GeoIP](./geoip)     |
| `geosite` | [Geosite](./geosite) |

### rule

一组 [路由规则](./rule)。

### rule_set

> [!IMPORTANT] 🆕 自 sing-box 1.8.0 起

一组 [规则集](../configuration/rule-set/)。

### final

默认出站标签。如果为空，将使用第一个可用于对应协议的出站。

### auto_detect_interface

> [!WARNING] 仅支持 Linux、Windows 和 macOS。

默认将出站连接绑定到默认网卡，以防止在 tun 下出现路由环路。

如果设置了 `outbound.bind_interface` 设置，则不生效。

### override_android_vpn

> [!WARNING] 仅支持 Android。

启用 `auto_detect_interface` 时接受 Android VPN 作为上游网卡。

### default_interface

> [!WARNING] 仅支持 Linux、Windows 和 macOS。

默认将出站连接绑定到指定网卡，以防止在 tun 下出现路由环路。

如果设置了 `auto_detect_interface` 设置，则不生效。

### default_mark

> [!WARNING] 仅支持 Linux。

默认为出站连接设置路由标记。

如果设置了 `outbound.routing_mark` 设置，则不生效。

### network_strategy

> [!IMPORTANT] 🆕 自 sing-box 1.11.0 起

详情参阅 [拨号字段](../shared/dial#network-strategy)。

当 `outbound.bind_interface`, `outbound.inet4_bind_address` 或 `outbound.inet6_bind_address` 已设置时不生效。

可以被 `outbound.network_strategy` 覆盖。

与 `default_interface` 冲突。

### default_network_type

> [!IMPORTANT] 🆕 自 sing-box 1.11.0 起

详情参阅 [拨号字段](../shared/dial#default_network_type)。

### default_fallback_network_type

> [!IMPORTANT] 🆕 自 sing-box 1.11.0 起

详情参阅 [拨号字段](../shared/dial#default_fallback_network_type)。

### default_fallback_delay

> [!IMPORTANT] 🆕 自 sing-box 1.11.0 起

详情参阅 [拨号字段](../shared/dial#fallback_delay)。
