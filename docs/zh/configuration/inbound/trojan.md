# Trojan

## 结构

```json
{
  "type": "trojan",
  "tag": "trojan-in",

  ... // 监听字段

  "users": [
    {
      "name": "sekai",
      "password": "8JCsPssfgS8tiRwiMlhARg=="
    }
  ],
  "tls": {},
  "fallback": {
    "server": "127.0.0.1",
    "server_port": 8080
  },
  "fallback_for_alpn": {
    "http/1.1": {
      "server": "127.0.0.1",
      "server_port": 8081
    }
  },
  "multiplex": {},
  "transport": {}
}
```

## 监听字段

参阅 [监听字段](../shared/listen)。

## 字段

### users

> [!IMPORTANT] 必填

Trojan 用户。

> #### name
>
> Trojan 用户名。
>
> #### password
>
> Trojan 用户密码。

### tls

TLS 配置, 参阅 [TLS](../shared/tls#inbound)。

### fallback

> [!WARNING] 没有证据表明 GFW 基于 HTTP 响应检测并阻止 Trojan 服务器，并且在服务器上打开标准 http/s 端口是一个更大的特征。

回退服务器配置。如果 `fallback` 和 `fallback_for_alpn` 为空，则禁用回退。

### fallback_for_alpn

为 ALPN 指定回退服务器配置。

如果不为空，ALPN 不在此列表中的 TLS 回退请求将被拒绝。

### multiplex

参阅 [多路复用](../shared/multiplex#inbound)。

### transport

V2Ray 传输配置，参阅 [V2Ray 传输层](../shared/v2ray-transport)。
