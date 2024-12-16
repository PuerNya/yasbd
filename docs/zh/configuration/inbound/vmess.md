# VMess

## 结构

```json
{
  "type": "vmess",
  "tag": "vmess-in",

  ... // 监听字段

  "users": [
    {
      "name": "sekai",
      "uuid": "bf000d23-0752-40b4-affe-68f7707a9661",
      "alterId": 0
    }
  ],
  "tls": {},
  "multiplex": {},
  "transport": {}
}
```

## 监听字段

参阅 [监听字段](../shared/listen)。

## 字段

### users

> [!IMPORTANT] 必填

VMess 用户。

> #### name
>
> VMess 用户名。
>
> #### uuid
>
> > [!IMPORTANT] 必填
>
> VMess 用户 ID。
>
> #### alterId
>
> | Alter ID | 描述       |
> | -------- | ---------- |
> | 0        | 禁用旧协议 |
> | > 0      | 启用旧协议 |
>
> > [!WARNING] 提供旧协议支持（VMess MD5 身份验证）仅出于兼容性目的，不建议使用 alterId > 1。

### tls

TLS 配置, 参阅 [TLS](../shared/tls#结构)。

### multiplex

参阅 [多路复用](../shared/multiplex#结构)。

### transport

V2Ray 传输配置，参阅 [V2Ray 传输层](../shared/v2ray-transport)。
