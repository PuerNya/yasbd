# TunnelVision

TunnelVision 是一种使用 DHCP option 121 设置优先级较高的路由，使流量无法通过 VPN 的攻击方案。

详见：[CVE-2024-3661](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2024-3661)

## 状态

### Android

Android 不处理 DHCP option 121，因此不受影响。

### 苹果平台

升级 [sing-box 图形界面客户端](../../clients) 到 `1.9.0-rc.16` 或更高，并启用 `设置` - `数据包隧道` 中的 `代理所有网络` 以免受影响。

> [!NOTE]
> 启用 `代理所有网络` 后，默认 TUN 堆栈会被切换成 `gvisor`，`system` 及 `mixed` 堆栈将不可用。

### Linux

升级 sing-box 到 `1.9.0-rc.16` 或更高，通过 `auto_route` 生成的规则将不受影响。

### Windows

暂无解决方案。

## 变通方案

- 不要接入不受信任的网络。
- 通过另一台设备中继不受信任的网络。
- 忽略这个问题。
