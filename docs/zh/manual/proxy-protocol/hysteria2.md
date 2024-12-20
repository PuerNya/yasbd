# Hysteria 2

Hysteria 2 是一种基于 QUIC 的简单国产协议。该协议的卖点是 Brutal，它是一种拥塞控制算法，在数据包丢失的情况下仍能达到用户定义的带宽。

> [!WARNING] 尽管 GFW 很少阻断基于 UDP 的代理，但这类协议实际上比基于 TCP 的代理具有更明显的特征。

| 规范                                                                      | 抗被动探测 |     抗主动探测     |
| ------------------------------------------------------------------------- | :--------: | :----------------: |
| [hysteria.network](https://v2.hysteria.network/docs/developers/Protocol/) | :warning:  | :white_check_mark: |

## :key: 密码生成器

| 生成密码               | 操作                                    |
| ---------------------- | --------------------------------------- |
| <code>{{ pwd }}</code> | <button @click="generate">刷新</button> |

<script setup>
import { ref, onMounted } from 'vue'

const pwd = ref('')

const generate = () => {
  const array = new Uint8Array(16);
  window.crypto.getRandomValues(array);
  pwd.value = btoa(String.fromCharCode.apply(null, array))
}

onMounted( generate )
</script>

## 与官方 Hysteria 的区别

官方程序支持一种名为 **userpass** 的验证方式，
本质上是将用户名与密码的组合 `<username>:<password>` 作为实际上的密码，而 sing-box 不提供此别名。
要将 sing-box 与官方程序一起使用，您需要填写该组合作为实际密码。

## 服务端示例

> [!INFO]
> 用服务器的实际带宽替换 `up_mbps` 和 `down_mbps` 值。

::: tabs

== 本地证书

```json
{
  "inbounds": [
    {
      "type": "hysteria2",
      "listen": "::",
      "listen_port": 8080,
      "up_mbps": 100,
      "down_mbps": 100,
      "users": [
        {
          "name": "sekai",
          "password": "<password>"
        }
      ],
      "tls": {
        "enabled": true,
        "server_name": "example.org",
        "key_path": "/path/to/key.pem",
        "certificate_path": "/path/to/certificate.pem"
      }
    }
  ]
}
```

== 使用 ACME

```json
{
  "inbounds": [
    {
      "type": "hysteria2",
      "listen": "::",
      "listen_port": 8080,
      "up_mbps": 100,
      "down_mbps": 100,
      "users": [
        {
          "name": "sekai",
          "password": "<password>"
        }
      ],
      "tls": {
        "enabled": true,
        "server_name": "example.org",
        "acme": {
          "domain": "example.org",
          "email": "admin@example.org"
        }
      }
    }
  ]
}
```

== 使用基于 Cloudflare API 的 ACME

```json
{
  "inbounds": [
    {
      "type": "hysteria2",
      "listen": "::",
      "listen_port": 8080,
      "up_mbps": 100,
      "down_mbps": 100,
      "users": [
        {
          "name": "sekai",
          "password": "<password>"
        }
      ],
      "tls": {
        "enabled": true,
        "server_name": "example.org",
        "acme": {
          "domain": "example.org",
          "email": "admin@example.org",
          "dns01_challenge": {
            "provider": "cloudflare",
            "api_token": "my_token"
          }
        }
      }
    }
  ]
}
```

:::

## 客户端示例

> [!INFO]
> 用客户端的实际带宽替换 `up_mbps` 和 `down_mbps` 值。

::: tabs

== 合法证书

```json
{
  "outbounds": [
    {
      "type": "hysteria2",
      "server": "127.0.0.1",
      "server_port": 8080,
      "up_mbps": 100,
      "down_mbps": 100,
      "password": "<password>",
      "tls": {
        "enabled": true,
        "server_name": "example.org"
      }
    }
  ]
}
```

== 自签证书

> [!TIP]
> 使用 `sing-box merge` 命令将配置和证书合并为一个文件。

```json
{
  "outbounds": [
    {
      "type": "hysteria2",
      "server": "127.0.0.1",
      "server_port": 8080,
      "up_mbps": 100,
      "down_mbps": 100,
      "password": "<password>",
      "tls": {
        "enabled": true,
        "server_name": "example.org",
        "certificate_path": "/path/to/certificate.pem"
      }
    }
  ]
}
```

== 忽略证书校验

```json
{
  "outbounds": [
    {
      "type": "hysteria2",
      "server": "127.0.0.1",
      "server_port": 8080,
      "up_mbps": 100,
      "down_mbps": 100,
      "password": "<password>",
      "tls": {
        "enabled": true,
        "server_name": "example.org",
        "insecure": true
      }
    }
  ]
}
```

:::
