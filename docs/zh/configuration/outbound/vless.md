# VLESS

## 结构

```json
{
  "type": "vless",
  "tag": "vless-out",

  "server": "127.0.0.1",
  "server_port": 1080,
  "uuid": "bf000d23-0752-40b4-affe-68f7707a9661",
  "flow": "xtls-rprx-vision",
  "network": "tcp",
  "tls": {},
  "packet_encoding": "",
  "multiplex": {},
  "transport": {},

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

### uuid

> [!IMPORTANT] 必填

VLESS 用户 ID。

### flow

VLESS 子协议。

可用值：

- `xtls-rprx-vision`

### network

启用的网络协议。

`tcp` 或 `udp`。

默认所有。

### tls

TLS 配置, 参阅 [TLS](../shared/tls#结构)。

### packet_encoding

UDP 包编码，默认使用 xudp。

| 编码       | 描述             |
| ---------- | ---------------- |
| (空)       | 禁用             |
| packetaddr | 由 v2ray 5+ 支持 |
| xudp       | 由 xray 支持     |

### multiplex

参阅 [多路复用](../shared/multiplex#结构)。

### transport

V2Ray 传输配置，参阅 [V2Ray 传输层](../shared/v2ray-transport)。
