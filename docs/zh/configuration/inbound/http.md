# HTTP

## 结构

```json
{
  "type": "http",
  "tag": "http-in",
  "users": [
    {
      "username": "admin",
      "password": "admin"
    }
  ],
  "tls": {},
  "set_system_proxy": false

  ... // 监听字段

}
```

## 字段

### tls

TLS 配置, 参阅 [TLS](../shared/tls#inbound)。

### users

HTTP 用户

如果为空则不需要验证。

### set_system_proxy

> [!WARNING] 仅支持 Linux、Android、Windows 和 macOS。

> [!WARNING] 要在无特权的 Android 和 iOS 上工作，请改用 tun.platform.http_proxy。

启动时自动设置系统代理，停止时自动清理。

### 监听字段

参阅 [监听字段](../shared/listen)。
