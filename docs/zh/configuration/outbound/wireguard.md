# WireGuard

> [!CAUTION] 已在 sing-box 1.11.0 废弃
> WireGuard 出站已被启用，且将在 sing-box 1.13.0 中被移除，参阅 [迁移指南](../../start/migration#迁移-wireguard-出站到端点)。

> [!NOTE] sing-box 1.11.0 中的更改
> :wastebasket:[gso](#gso)

> [!NOTE] sing-box 1.8.0 中的更改
> :white_check_mark:[gso](#gso)  

## 结构

```json
{
  "type": "wireguard",
  "tag": "wireguard-out",

  "server": "127.0.0.1",
  "server_port": 1080,
  "system_interface": false,
  "interface_name": "wg0",
  "local_address": [
    "10.0.0.1/32"
  ],
  "private_key": "YNXtAzepDqRv9H52osJVDQnznT5AM11eCK3ESpwSt04=",
  "peer_public_key": "Z1XXLsKYkYxuiYjJIkRvtIKFepCYHTgON+GwPq7SOV4=",
  "pre_shared_key": "31aIhAPwktDGpH4JDhA8GNvjFXEf/a6+UaQRyOAiyfM=",
  "reserved": [0, 0, 0],
  "workers": 4,
  "mtu": 1408,
  "network": "tcp",
  
  // 废弃的
  
  "gso": false,

  ... // 拨号字段
}
```

## 拨号字段

参阅 [拨号字段](../shared/dial)。

## 字段

### server

> [!IMPORTANT] 必填

服务器地址。

### server_port

> [!IMPORTANT] 必填

服务器端口。

### system_interface

使用系统设备。

需要特权且不能与已有系统接口冲突。

如果 gVisor 未包含在构建中，则强制执行。

### interface_name

为系统接口自定义设备名称。

### gso

> [!TIP] 🆕自 sing-box 1.8.0 起

> [!CAUTION] 已在 sing-box 1.11.0 废弃
> 自 sing-box 1.11.0 起，GSO 将可用时自动启用。

> [!WARNING] 仅支持 Linux。

尝试启用通用分段卸载。

### local_address

> [!IMPORTANT] 必填

接口的 IPv4/IPv6 地址或地址段的列表您。

要分配给接口的 IP（v4 或 v6）地址段列表。

### private_key

> [!IMPORTANT] 必填

WireGuard 需要 base64 编码的公钥和私钥。这些可以使用 wg(8) 实用程序生成：

```shell
wg genkey
echo "private key" || wg pubkey
```

### peer_public_key

> [!IMPORTANT] 必填

WireGuard 对等公钥。

### pre_shared_key

WireGuard 预共享密钥。

### reserved

WireGuard 保留字段字节。

### workers

WireGuard worker 数量。

默认使用 CPU 数量。

### mtu

WireGuard MTU。

默认使用 1408。

### network

启用的网络协议

`tcp` 或 `udp`。

默认所有。