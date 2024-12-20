# Trojan

Torjan 是最常用的国产 TLS 代理。它可以多种组合使用，但只推荐使用 uTLS 和多路复用的组合。

| 协议实现              | 规范                                                                 |     抗被动探测     |     抗主动探测     |
| --------------------- | -------------------------------------------------------------------- | :----------------: | :----------------: |
| 原始设计/trojan-gfw   | [trojan-gfw.github.io](https://trojan-gfw.github.io/trojan/protocol) | :white_check_mark: | :white_check_mark: |
| 基础 Go 实现          | /                                                                    |     :warning:      | :white_check_mark: |
| 搭配 V2Ray 私有传输层 | 没有正式定义                                                         |     :warning:      |     :warning:      |
| 启用 uTLS             | 没有正式定义                                                         |     :question:     | :white_check_mark: |

## :key: 密码生成器

| 生成密码               | 操作                                    |
| ---------------------- | --------------------------------------- |
| <code>{{ pwd }}</code> | <button @click="generate">刷新</button> |

<script setup>
import { ref, onMounted } from 'vue'

const pwd = ref( '' )

const generate = () => {
  const array = new Uint8Array(16);
  window.crypto.getRandomValues(array);
  pwd.value = btoa(String.fromCharCode.apply(null, array));
}

onMounted( generate )
</script>

## 服务端示例

::: tabs

== 本地证书

```json
{
  "inbounds": [
    {
      "type": "trojan",
      "listen": "::",
      "listen_port": 8080,
      "users": [
        {
          "name": "example",
          "password": "password"
        }
      ],
      "tls": {
        "enabled": true,
        "server_name": "example.org",
        "key_path": "/path/to/key.pem",
        "certificate_path": "/path/to/certificate.pem"
      },
      "multiplex": {
        "enabled": true
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
      "type": "trojan",
      "listen": "::",
      "listen_port": 8080,
      "users": [
        {
          "name": "example",
          "password": "password"
        }
      ],
      "tls": {
        "enabled": true,
        "server_name": "example.org",
        "acme": {
          "domain": "example.org",
          "email": "admin@example.org"
        }
      },
      "multiplex": {
        "enabled": true
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
      "type": "trojan",
      "listen": "::",
      "listen_port": 8080,
      "users": [
        {
          "name": "example",
          "password": "password"
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
      },
      "multiplex": {
        "enabled": true
      }
    }
  ]
}
```

:::

## 客户端实现

::: tabs

== 合法的证书

```json
{
  "outbounds": [
    {
      "type": "trojan",
      "server": "127.0.0.1",
      "server_port": 8080,
      "password": "password",
      "tls": {
        "enabled": true,
        "server_name": "example.org",
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
        }
      },
      "multiplex": {
        "enabled": true
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
      "type": "trojan",
      "server": "127.0.0.1",
      "server_port": 8080,
      "password": "password",
      "tls": {
        "enabled": true,
        "server_name": "example.org",
        "certificate_path": "/path/to/certificate.pem",
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
        }
      },
      "multiplex": {
        "enabled": true
      }
    }
  ]
}
```

== 跳过证书校验

```json
{
  "outbounds": [
    {
      "type": "trojan",
      "server": "127.0.0.1",
      "server_port": 8080,
      "password": "password",
      "tls": {
        "enabled": true,
        "server_name": "example.org",
        "insecure": true,
        "utls": {
          "enabled": true,
          "fingerprint": "firefox"
        }
      },
      "multiplex": {
        "enabled": true
      }
    }
  ]
}
```

:::
