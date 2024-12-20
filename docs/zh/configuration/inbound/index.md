# 入站

## 结构

```json
{
  "inbounds": [
    {
      "type": "",
      "tag": ""
    }
  ]
}
```

## 字段

### type

入站类型，具体如下图。

| 类型          | 格式                         | 注入支持 |
| ------------- | ---------------------------- | -------- |
| `direct`      | [Direct](./direct)           | :x:      |
| `mixed`       | [Mixed](./mixed)             | TCP      |
| `socks`       | [SOCKS](./socks)             | TCP      |
| `http`        | [HTTP](./http)               | TCP      |
| `shadowsocks` | [Shadowsocks](./shadowsocks) | TCP      |
| `vmess`       | [VMess](./vmess)             | TCP      |
| `trojan`      | [Trojan](./trojan)           | TCP      |
| `naive`       | [Naive](./naive)             | :x:      |
| `hysteria`    | [Hysteria](./hysteria)       | :x:      |
| `shadowtls`   | [ShadowTLS](./shadowtls)     | TCP      |
| `tuic`        | [TUIC](./tuic)               | :x:      |
| `hysteria2`   | [Hysteria2](./hysteria2)     | :x:      |
| `vless`       | [VLESS](./vless)             | TCP      |
| `tun`         | [Tun](./tun)                 | :x:      |
| `redirect`    | [Redirect](./redirect)       | :x:      |
| `tproxy`      | [TProxy](./tproxy)           | :x:      |

### tag

入站的标签。
