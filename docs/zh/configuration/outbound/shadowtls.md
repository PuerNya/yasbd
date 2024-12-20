# ShadowTLS

## 结构

```json
{
  "type": "shadowtls",
  "tag": "st-out",

  "server": "127.0.0.1",
  "server_port": 1080,
  "version": 3,
  "password": "fuck me till the daylight",
  "tls": {},

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

### version

ShadowTLS 协议版本。

| 值  | 协议版本                                                                                |
| --- | --------------------------------------------------------------------------------------- |
| `1` | [ShadowTLS v1](https://github.com/ihciah/shadow-tls/blob/master/docs/protocol-en.md#v1) |
| `2` | [ShadowTLS v2](https://github.com/ihciah/shadow-tls/blob/master/docs/protocol-en.md#v2) |
| `3` | [ShadowTLS v3](https://github.com/ihciah/shadow-tls/blob/master/docs/protocol-v3-en.md) |

默认使用协议版本 `1`。

### password

设置密码。

仅在 ShadowTLS v2/v3 协议中可用。

### tls

> [!IMPORTANT] 必填

TLS 配置, 参阅 [TLS](../shared/tls/#outbound)。
