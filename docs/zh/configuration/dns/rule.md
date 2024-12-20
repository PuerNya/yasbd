# DNS 规则

> [!NOTE] sing-box 1.11.0 中的更改
> :new:[action](#action)
>
> :warning:[server](#server)
>
> :warning:[disable_cache](#disable-cache)
>
> :warning:[rewrite_ttl](#rewrite-ttl)
>
> :warning:[client_subnet](#client-subnet)
>
> :new:[network_type](#network-type)
>
> :new:[network_is_expensive](#network-is-expensive)
>
> :new:[network_is_constrained](#network-is-constrained)

> [!NOTE] sing-box 1.10.0 中的更改
> :hourglass:[rule_set_ipcidr_match_source](#rule-set-ipcidr-match-source)
>
> :new:[rule_set_ip_cidr_match_source](#rule-set-ip-cidr-match-source)
>
> :new:[rule_set_ip_cidr_accept_empty](#rule-set-ip-cidr-accept-empty)
>
> :new:[process_path_regex](#process-path-regex)

> [!NOTE] sing-box 1.9.0 中的更改"
> :new:[geoip](#geoip)
>
> :new:[ip_cidr](#ip-cidr)
>
> :new:[ip_is_private](#ip-is-private)
>
> :new:[client_subnet](#client-subnet)
>
> :new:[rule_set_ipcidr_match_source](#rule-set-ipcidr-match-source)

> [!NOTE] sing-box 1.8.0 中的更改"
> :new:[rule_set](#rule-set)
>
> :new:[source_ip_is_private](#source-ip-is-private)
>
> :hourglass:[geoip](#geoip)
>
> :hourglass:[geosite](#geosite)

## 结构

```json
{
  "rules": [
    {
      "inbound": ["mixed-in"],
      "ip_version": 6,
      "query_type": ["A", "HTTPS", 32768],
      "network": "tcp",
      "auth_user": ["usera", "userb"],
      "protocol": ["tls", "http", "quic"],
      "domain": ["test.com"],
      "domain_suffix": [".cn"],
      "domain_keyword": ["test"],
      "domain_regex": ["^stun\\..+"],
      "geosite": ["cn"],
      "source_geoip": ["private"],
      "geoip": ["cn"],
      "source_ip_cidr": ["10.0.0.0/24", "192.168.0.1"],
      "source_ip_is_private": false,
      "ip_cidr": ["10.0.0.0/24", "192.168.0.1"],
      "ip_is_private": false,
      "source_port": [12345],
      "source_port_range": ["1000:2000", ":3000", "4000:"],
      "port": [80, 443],
      "port_range": ["1000:2000", ":3000", "4000:"],
      "process_name": ["curl"],
      "process_path": ["/usr/bin/curl"],
      "process_path_regex": ["^/usr/bin/.+"],
      "package_name": ["com.termux"],
      "user": ["sekai"],
      "user_id": [1000],
      "clash_mode": "direct",
      "network_type": ["wifi"],
      "network_is_expensive": false,
      "network_is_constrained": false,
      "wifi_ssid": ["My WIFI"],
      "wifi_bssid": ["00:00:00:00:00:00"],
      "rule_set": ["geoip-cn", "geosite-cn"],
      // 已弃用
      "rule_set_ipcidr_match_source": false,
      "rule_set_ip_cidr_match_source": false,
      "rule_set_ip_cidr_accept_empty": false,
      "invert": false,
      "outbound": ["direct"],
      "action": "route",
      "server": "local"
    },
    {
      "type": "logical",
      "mode": "and",
      "rules": [],
      "action": "route",
      "server": "local"
    }
  ]
}
```

> [!NOTE] 当内容只有一项时，可以忽略 JSON 数组 [] 标签

## 默认字段

> [!NOTE] 默认规则使用以下匹配逻辑:
>
> (`domain` || `domain_suffix` || `domain_keyword` || `domain_regex` || `geosite`) &&
>
> (`port` || `port_range`) &&
>
> (`source_geoip` || `source_ip_cidr` || `source_ip_is_private`) &&
>
> (`source_port` || `source_port_range`) &&
>
> `other fields`
>
> 另外，引用的规则集可视为被合并，而不是作为一个单独的规则子项。

### inbound

[入站](../inbound/) 标签.

### ip_version

4 (A DNS 查询) 或 6 (AAAA DNS 查询)。

默认不限制。

### query_type

DNS 查询类型。值可以为整数或者类型名称字符串。

### network

`tcp` 或 `udp`。

### auth_user

认证用户名，参阅入站设置。

### protocol

探测到的协议, 参阅 [协议探测](../route/sniff/)。

### domain

匹配完整域名。

### domain_suffix

匹配域名后缀。

### domain_keyword

匹配域名关键字。

### domain_regex

匹配域名正则表达式。

### geosite

> [!CAUTION] 已在 sing-box 1.8.0 废弃
> Geosite 已废弃且可能在不久的将来移除，参阅 [迁移指南](../../start/migration#geosite)。

匹配 Geosite。

### source_geoip

> [!CAUTION] 已在 sing-box 1.8.0 废弃
> GeoIP 已废弃且可能在不久的将来移除，参阅 [迁移指南](../../start/migration#geoip)。

匹配源 GeoIP。

### source_ip_cidr

匹配源 IP CIDR。

### source_ip_is_private

> [!IMPORTANT] 🆕 自 sing-box 1.8.0 起

匹配非公开源 IP。

### source_port

匹配源端口。

### source_port_range

匹配源端口范围。

### port

匹配端口。

### port_range

匹配端口范围。

### process_name

> [!WARNING] 仅支持 Linux、Windows 和 macOS。

匹配进程名称。

### process_path

> [!WARNING] 仅支持 Linux、Windows 和 macOS。

匹配进程路径。

### process_path_regex

> [!IMPORTANT] 🆕 自 sing-box 1.10.0 起

> [!WARNING] 仅支持 Linux、Windows 和 macOS。

使用正则表达式匹配进程路径。

### package_name

匹配 Android 应用包名。

### user

> [!WARNING] 仅支持 Linux。

匹配用户名。

### user_id

> [!WARNING] 仅支持 Linux。

匹配用户 ID。

### clash_mode

匹配 Clash 模式。

### network_type

> [!IMPORTANT] 🆕 自 sing-box 1.11.0 起

> [!WARNING] 仅在 Android 与 Apple 平台图形客户端中支持。

匹配网络类型。

Available values: `wifi`, `cellular`, `ethernet` and `other`.

### network_is_expensive

> [!IMPORTANT] 🆕 自 sing-box 1.11.0 起

> [!WARNING] 仅在 Android 与 Apple 平台图形客户端中支持。

匹配如果网络被视为计费 (在 Android) 或被视为昂贵，
像蜂窝网络或个人热点 (在 Apple 平台)。

### network_is_constrained

> [!IMPORTANT] 🆕 自 sing-box 1.11.0 起

> [!WARNING] 仅在 Apple 平台图形客户端中支持。

匹配如果网络在低数据模式下。

### wifi_ssid

> [!WARNING] 仅在 Android 与 Apple 平台图形客户端中支持。

匹配 WiFi SSID。

### wifi_bssid

> [!WARNING] 仅在 Android 与 Apple 平台图形客户端中支持。

匹配 WiFi BSSID。

### rule_set

> [!IMPORTANT] 🆕 自 sing-box 1.8.0 起

匹配[规则集](../route/rule_set/)。

### rule_set_ipcidr_match_source

> [!IMPORTANT] 🆕 自 sing-box 1.9.0 起

> [!CAUTION] 已在 sing-box 1.10.0 废弃
> `rule_set_ipcidr_match_source` 已重命名为 `rule_set_ip_cidr_match_source` 且将在 sing-box 1.11.0 中被移除。

使规则集中的 `ip_cidr` 规则匹配源 IP。

### rule_set_ip_cidr_match_source

> [!IMPORTANT] 🆕 自 sing-box 1.10.0 起

使规则集中的 `ip_cidr` 规则匹配源 IP。

### invert

反选匹配结果。

### outbound

匹配出站。

`any` 可作为值用于匹配任意出站。

### action

> [!IMPORTANT] 必填

参阅 [规则动作](../rule_action)。

### server

> [!CAUTION] 已在 sing-box 1.11.0 废弃
> 已移动到 [DNS 规则动作](../rule_action#route).

### disable_cache

> [!CAUTION] 已在 sing-box 1.11.0 废弃
> 已移动到 [DNS 规则动作](../rule_action#route).

### rewrite_ttl

> [!CAUTION] 已在 sing-box 1.11.0 废弃
> 已移动到 [DNS 规则动作](../rule_action#route).

### client_subnet

> [!CAUTION] 已在 sing-box 1.11.0 废弃
> 已移动到 [DNS 规则动作](../rule_action#route).

## 地址筛选字段

仅对地址请求 (A/AAAA/HTTPS) 生效。当查询结果与地址筛选规则项不匹配时，将跳过当前规则。

> [!NOTE] 引用的规则集中的 `ip_cidr` 项也作为地址筛选字段生效。

> [!NOTE] 启用 `experimental.cache_file.store_rdrc` 以缓存结果。

### geoip

> [!IMPORTANT] 🆕 自 sing-box 1.9.0 起

与查询响应匹配 GeoIP。

### ip_cidr

> [!IMPORTANT] 🆕 自 sing-box 1.9.0 起

与查询响应匹配 IP CIDR。

### ip_is_private

> [!IMPORTANT] 🆕 自 sing-box 1.9.0 起

与查询响应匹配非公开 IP。

### rule_set_ip_cidr_accept_empty

> [!IMPORTANT] 🆕 自 sing-box 1.10.0 起

使规则集中的 `ip_cidr` 规则接受空查询响应。

## 逻辑字段

### type

`logical`

### mode

> [!IMPORTANT] 必填

`and` 或 `or`

### rules

> [!IMPORTANT] 必填

包括的规则。
