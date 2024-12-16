# Trojan

Torjan is the most commonly used TLS proxy made in China. It can be used in various combinations,
but only the combination of uTLS and multiplexing is recommended.

| Protocol and implementation combination | Specification                                                        | Resists passive detection | Resists active probes |
| --------------------------------------- | -------------------------------------------------------------------- | :-----------------------: | :-------------------: |
| Origin / trojan-gfw                     | [trojan-gfw.github.io](https://trojan-gfw.github.io/trojan/protocol) | :white_check_mark:        | :white_check_mark:    |
| Basic Go implementation                 | /                                                                    | :warning:                 | :white_check_mark:    |
| with privates transport by V2Ray        | No formal definition                                                 | :warning:                 | :warning:             |
| with uTLS enabled                       | No formal definition                                                 | :question:                | :white_check_mark:    |

## Password Generator

| Generate Password      | Action                                     |
| ---------------------- | ------------------------------------------ |
| <code>{{ pwd }}</code> | <button @click="generate">Refresh</button> |

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

## Server Example

::: tabs

== With local certificate

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

== With ACME

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

== With ACME and Cloudflare API

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

## Client Example

::: tabs

== With valid certificate

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

== With self-sign certificate

> [!TIP]
> Use `sing-box merge` command to merge configuration and certificate into one file.

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

== Ignore certificate verification

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