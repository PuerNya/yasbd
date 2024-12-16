# Naïve

## 结构

```json
{
  "type": "naive",
  "tag": "naive-in",
  "network": "udp",

  ... // 监听字段

  "users": [
    {
      "username": "sekai",
      "password": "password"
    }
  ],
  "tls": {}
}
```

## 监听字段

参阅 [监听字段](../shared/listen)。

## 字段

### network

监听的网络协议，`tcp` `udp` 之一。

默认所有。

### users

> [!IMPORTANT] 必填

Naïve 用户。

> #### username
>
> Naïve 用户名
>
> #### password
>
> Naïve 用户密码

### tls

TLS 配置, 参阅 [TLS](../shared/tls#inbound)。
