# UDP over TCP

> [!WARNING] 这是 SagerNet 创造的专有协议，不是 Shadowsocks 协议的一部分。

UDP over TCP 协议用于在 TCP 中传输 UDP 数据包。

## 结构

```json
{
  "enabled": true,
  "version": 2
}
```

> [!NOTE] 当内容只有一项时，可以忽略 JSON 数组 [] 标签

## 字段

### enabled

启用 UDP over TCP 协议。

### version

协议版本，`1` 或者 `2`。

默认使用协议版本 `2`。

## 支持的程序

| 项目         | UoT v1               | UoT v2                                                                                             |
| ------------ | -------------------- | -------------------------------------------------------------------------------------------------- |
| sing-box     | v0 (2022/08/11)      | v1.2-beta9                                                                                         |
| Xray-core    | v1.5.7 (2022/06/05)  | [f57ec13](https://github.com/XTLS/Xray-core/commit/f57ec1388084df041a2289bacab14e446bf1b357)       |
| Clash.Meta   | v1.12.0 (2022/07/02) | [8cb67b6](https://github.com/MetaCubeX/Clash.Meta/commit/8cb67b6480649edfa45dcc9ac89ce0789651e8b3) |
| Shadowrocket | v2.2.12 (2022/08/13) | /                                                                                                  |

## 协议细节

### 版本 1

客户端向上层代理协议请求魔法地址 `sp.udp-over-tcp.arpa` 来表示请求。

#### 流格式

| ATYP | address  | port  | length | data     |
| ---- | -------- | ----- | ------ | -------- |
| u8   | variable | u16be | u16be  | variable |

**ATYP / address / port**: 请求目标地址，使用 SOCKS 地址格式。

### 版本 2

协议版本 2 使用一个新的魔法地址：`sp.v2.udp-over-tcp.arpa`。

#### 请求格式

| isConnect | ATYP | address  | port  |
| --------- | ---- | -------- | ----- |
| u8        | u8   | variable | u16be |

**isConnect**: 设置为 1 表示数据使用连接流格式，设置为 0 表示使用无连接格式。

**ATYP / address / port**: 请求目标地址，使用 SOCKS 地址格式。

#### 连接流格式

| length | data     |
| ------ | -------- |
| u16be  | variable |

#### 无连接流格式

与协议版本 1 中的数据流格式相同。
