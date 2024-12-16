# V2Ray API

> [!NOTE]
> 默认安装不包含 V2Ray API，参阅 [安装](../../installation/build-from-source#构建标记)。

## 结构

```json
{
  "listen": "127.0.0.1:8080",
  "stats": {
    "enabled": true,
    "inbounds": ["socks-in"],
    "outbounds": ["proxy", "direct"],
    "users": ["sekai"]
  }
}
```

## 字段

### listen

gRPC API 监听地址。如果为空，则禁用 V2Ray API。

### stats

流量统计服务设置。

> #### enabled
>
> 启用统计服务。
>
> #### inbounds
>
> 统计流量的入站列表。
>
> #### outbounds
>
> 统计流量的出站列表。
>
> #### users
>
> 统计流量的用户列表。
