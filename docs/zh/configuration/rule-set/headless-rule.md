# 无头规则

> [!IMPORTANT] 🆕 自 sing-box 1.8.0 起

> [!NOTE] sing-box 1.11.0 中的更改
> :new:[network_type](#network-type)
>
> :warning:[network_is_expensive](#network-is-expensive)
>
> :warning:[network_is_constrained](#network-is-constrained)

## 结构

```json
{
  "rules": [
    {
      "query_type": ["A", "HTTPS", 32768],
      "network": ["tcp"],
      "domain": ["test.com"],
      "domain_suffix": [".cn"],
      "domain_keyword": ["test"],
      "domain_regex": ["^stun\\..+"],
      "source_ip_cidr": ["10.0.0.0/24", "192.168.0.1"],
      "ip_cidr": ["10.0.0.0/24", "192.168.0.1"],
      "source_port": [12345],
      "source_port_range": ["1000:2000", ":3000", "4000:"],
      "port": [80, 443],
      "port_range": ["1000:2000", ":3000", "4000:"],
      "process_name": ["curl"],
      "process_path": ["/usr/bin/curl"],
      "process_path_regex": ["^/usr/bin/.+"],
      "package_name": ["com.termux"],
      "network_type": ["wifi"],
      "network_is_expensive": false,
      "network_is_constrained": false,
      "wifi_ssid": ["My WIFI"],
      "wifi_bssid": ["00:00:00:00:00:00"],
      "invert": false
    },
    {
      "type": "logical",
      "mode": "and",
      "rules": [],
      "invert": false
    }
  ]
}
```

> [!NOTE] 当内容只有一项时，可以忽略 JSON 数组 [] 标签。

## Default Fields

> [!NOTE] 默认规则使用以下匹配逻辑:
> (`domain` || `domain_suffix` || `domain_keyword` || `domain_regex` || `ip_cidr`) &&
>
> (`port` || `port_range`) &&
>
> (`source_port` || `source_port_range`) &&
>
> `other fields`

### query_type

DNS 查询类型。值可以为整数或者类型名称字符串。

### network

`tcp` 或 `udp`。

### domain

匹配完整域名。

### domain_suffix

匹配域名后缀。

### domain_keyword

匹配域名关键字。

### domain_regex

匹配域名正则表达式。

### source_ip_cidr

匹配源 IP CIDR。

### ip_cidr

匹配 IP CIDR。

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

### invert

反选匹配结果。

## 逻辑字段

### type

`logical`

### mode

> [!IMPORTANT] 必填

`and` 或 `or`

### rules

> [!IMPORTANT] 必填

包括的规则。
