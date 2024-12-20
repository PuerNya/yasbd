# Build from source

## :warning: Requirements

### sing-box 1.10

- Go 1.20.0 - ~
- Go 1.20.0 - ~ with tag `with_quic`, or `with_utls` enabled
- Go 1.21.0 - ~ with tag `with_ech` enabled

### sing-box 1.9

- Go 1.18.5 - 1.22.x
- Go 1.20.0 - 1.22.x with tag `with_quic`, or `with_utls` enabled
- Go 1.21.0 - 1.22.x with tag `with_ech` enabled

You can download and install Go from: https://go.dev/doc/install, latest version is recommended.

## :fast_forward: Simple Build

```bash
make
```

Or build and install binary to `$GOBIN`:

```bash
make install
```

## :gear: Custom Build

```bash
TAGS="tag_a tag_b" make
```

or

```bash
go build -tags "tag_a tag_b" ./cmd/sing-box
```

## :pushpin: Build Tags

| Build Tag                          | Enabled by default | Description                                                                                                                                                                                                                                                                                                                    |
| ---------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `with_quic`                        | :white_check_mark: | Build with QUIC support, see [QUIC and HTTP3 DNS transports](/configuration/dns/server/), [Naive inbound](/configuration/inbound/naive/), [Hysteria Inbound](/configuration/inbound/hysteria/), [Hysteria Outbound](/configuration/outbound/hysteria/) and [V2Ray Transport#QUIC](/configuration/shared/v2ray-transport#quic). |
| `with_grpc`                        | :x:️               | Build with standard gRPC support, see [V2Ray Transport#gRPC](/configuration/shared/v2ray-transport#grpc).                                                                                                                                                                                                                      |
| `with_dhcp`                        | :white_check_mark: | Build with DHCP support, see [DHCP DNS transport](/configuration/dns/server/).                                                                                                                                                                                                                                                 |
| `with_wireguard`                   | :white_check_mark: | Build with WireGuard support, see [WireGuard outbound](/configuration/outbound/wireguard/).                                                                                                                                                                                                                                    |
| `with_ech`                         | :white_check_mark: | Build with TLS ECH extension support for TLS outbound, see [TLS](/configuration/shared/tls#ech).                                                                                                                                                                                                                               |
| `with_utls`                        | :white_check_mark: | Build with [uTLS](https://github.com/refraction-networking/utls) support for TLS outbound, see [TLS](/configuration/shared/tls#utls).                                                                                                                                                                                          |
| `with_reality_server`              | :white_check_mark: | Build with reality TLS server support, see [TLS](/configuration/shared/tls/).                                                                                                                                                                                                                                                  |
| `with_acme`                        | :white_check_mark: | Build with ACME TLS certificate issuer support, see [TLS](/configuration/shared/tls/).                                                                                                                                                                                                                                         |
| `with_clash_api`                   | :white_check_mark: | Build with Clash API support, see [Experimental](/configuration/experimental#clash-api-fields).                                                                                                                                                                                                                                |
| `with_v2ray_api`                   | :x:️               | Build with V2Ray API support, see [Experimental](/configuration/experimental#v2ray-api-fields).                                                                                                                                                                                                                                |
| `with_gvisor`                      | :white_check_mark: | Build with gVisor support, see [Tun inbound](/configuration/inbound/tun#stack) and [WireGuard outbound](/configuration/outbound/wireguard#system_interface).                                                                                                                                                                   |
| `with_embedded_tor` (CGO required) | :x:️               | Build with embedded Tor support, see [Tor outbound](/configuration/outbound/tor/).                                                                                                                                                                                                                                             |

It is not recommended to change the default build tag list unless you really know what you are adding.
