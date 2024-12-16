# Hysteria 2

Hysteria 2 is a simple, Chinese-made protocol based on QUIC.
The selling point is Brutal, a congestion control algorithm that
tries to achieve a user-defined bandwidth despite packet loss.

> [!WARNING] Even though GFW rarely blocks UDP-based proxies, such protocols actually have far more obvious characteristics than TCP based proxies.

| Specification                                                             | Resists passive detection | Resists active probes |
| ------------------------------------------------------------------------- | :-----------------------: | :-------------------: |
| [hysteria.network](https://v2.hysteria.network/docs/developers/Protocol/) | :warning:                 | :white_check_mark:    |

## :key: Password Generator

| Generate Password  | Action                                        |
| ------------------ | --------------------------------------------- |
| <code>{{ pwd }}</code> | <button @click="generate">Refresh</button> |

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

## Difference from official Hysteria

The official program supports an authentication method called **userpass**,
which essentially uses a combination of `<username>:<password>` as the actual password,
while sing-box does not provide this alias.
To use sing-box with the official program, you need to fill in that combination as the actual password.

## Server Example

> [!INFO]
> Replace `up_mbps` and `down_mbps` values with the actual bandwidth of your server.

::: tabs

== With local certificate

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

== With ACME

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

== With ACME and Cloudflare API

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

## Client Example

> [!INFO]
> Replace `up_mbps` and `down_mbps` values with the actual bandwidth of your client.

::: tabs

== With valid certificate

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

== With self-sign certificate

> [!TIP]
> Use `sing-box merge` command to merge configuration and certificate into one file.

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

== Ignore certificate verification

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
