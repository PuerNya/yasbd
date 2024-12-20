# Direct

`direct` 入站是一个隧道服务器。

## 结构

```json
{
  "type": "direct",
  "tag": "direct-in",
  "network": "udp",
  "override_address": "1.0.0.1",
  "override_port": 53

  ... // 监听字段

}
```

## 字段

### network

监听的网络协议，`tcp` `udp` 之一。

默认所有。

### override_address

覆盖连接目标地址。

### override_port

覆盖连接目标端口。

### 监听字段

参阅 [监听字段](../shared/listen)。
