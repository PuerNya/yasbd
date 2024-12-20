# Trojan

## 结构

```json
{
  "type": "trojan",
  "tag": "trojan-out",

  "server": "127.0.0.1",
  "server_port": 1080,
  "password": "8JCsPssfgS8tiRwiMlhARg==",
  "network": "tcp",
  "tls": {},
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

### password

> [!IMPORTANT] 必填

Trojan 密码。

### network

启用的网络协议。

`tcp` 或 `udp`。

默认所有。

### tls

TLS 配置, 参阅 [TLS](../shared/tls/#结构)。

### multiplex

参阅 [多路复用](../shared/multiplex#结构)。

### transport

V2Ray 传输配置，参阅 [V2Ray 传输层](../shared/v2ray-transport)。
