# 从源代码构建

## :warning: 要求

### sing-box 1.10

- Go 1.20.0 - ~
- Go 1.20.0 - ~ 默认启用 `with_quic` 或 `with_utls`
- Go 1.21.0 - ~ 默认启用 `with_ech`

### sing-box 1.9

- Go 1.18.5 - 1.22.x
- Go 1.20.0 - 1.22.x 默认启用 `with_quic` 或 `with_utls`
- Go 1.21.0 - 1.22.x 默认启用 `with_ech`

您可以从 https://go.dev/doc/install 下载并安装 Go，推荐使用最新版本。

## :fast_forward: 快速开始

```bash
make
```

或者构建二进制文件并将其安装到 `$GOBIN`：

```bash
make install
```

## :gear: 自定义构建

```bash
TAGS="tag_a tag_b" make
```

or

```bash
go build -tags "tag_a tag_b" ./cmd/sing-box
```

## :pushpin: 构建标记

| 构建标记                           | 默认启用           | 说明                                                                                                                                                                                                                                                                                                                                 |
| ---------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `with_quic`                        | :white_check_mark: | Build with QUIC support, see [QUIC and HTTP3 DNS transports](../configuration/dns/server), [Naïve inbound](../configuration/inbound/naive), [Hysteria Inbound](../configuration/inbound/hysteria), [Hysteria Outbound](../configuration/outbound/hysteria) and [V2Ray Transport#QUIC](../configuration/shared/v2ray-transport#quic). |
| `with_grpc`                        | :x:️               | Build with standard gRPC support, see [V2Ray Transport#gRPC](../configuration/shared/v2ray-transport#grpc).                                                                                                                                                                                                                          |
| `with_dhcp`                        | :white_check_mark: | Build with DHCP support, see [DHCP DNS transport](../configuration/dns/server).                                                                                                                                                                                                                                                      |
| `with_wireguard`                   | :white_check_mark: | Build with WireGuard support, see [WireGuard outbound](../configuration/outbound/wireguard).                                                                                                                                                                                                                                         |
| `with_ech`                         | :white_check_mark: | Build with TLS ECH extension support for TLS outbound, see [TLS](../configuration/shared/tls#ech).                                                                                                                                                                                                                                   |
| `with_utls`                        | :white_check_mark: | Build with [uTLS](https://github.com/refraction-networking/utls) support for TLS outbound, see [TLS](../configuration/shared/tls#utls).                                                                                                                                                                                              |
| `with_reality_server`              | :white_check_mark: | Build with reality TLS server support, see [TLS](../configuration/shared/tls#reality-字段).                                                                                                                                                                                                                                          |
| `with_acme`                        | :white_check_mark: | Build with ACME TLS certificate issuer support, see [TLS](../configuration/shared/tls#acme-字段).                                                                                                                                                                                                                                    |
| `with_clash_api`                   | :white_check_mark: | Build with Clash API support, see [Clash API](../configuration/experimental/clash-api).                                                                                                                                                                                                                                              |
| `with_v2ray_api`                   | :x:️               | Build with V2Ray API support, see [V2Ray API](../configuration/experimental/v2ray-api).                                                                                                                                                                                                                                              |
| `with_gvisor`                      | :white_check_mark: | Build with gVisor support, see [Tun inbound](../configuration/inbound/tun#stack) and [WireGuard outbound](../configuration/outbound/wireguard#system_interface).                                                                                                                                                                     |
| `with_embedded_tor` (CGO required) | :x:️               | Build with embedded Tor support, see [Tor outbound](../configuration/outbound/tor).                                                                                                                                                                                                                                                  |

除非您确实知道您正在启用什么，否则不建议更改默认构建标签列表。
