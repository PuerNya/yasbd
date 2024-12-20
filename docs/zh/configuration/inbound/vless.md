# VLESS

## 结构

```json
{
  "type": "vless",
  "tag": "vless-in",

  ... // 监听字段

  "users": [
    {
      "name": "sekai",
      "uuid": "bf000d23-0752-40b4-affe-68f7707a9661",
      "flow": ""
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

VLESS 用户。

> #### name
>
> VLESS 用户名。
>
> #### uuid
>
> > [!IMPORTANT] 必填
>
> VLESS 用户 ID。
>
> #### flow
>
> VLESS 子协议。
> 可用值：
>
> - `xtls-rprx-vision`

### tls

TLS 配置, 参阅 [TLS](../shared/tls#结构)。

### multiplex

参阅 [多路复用](../shared/multiplex#结构)。

### transport

V2Ray 传输配置，参阅 [V2Ray 传输层](../shared/v2ray-transport)。
