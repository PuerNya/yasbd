# Shadowsocks

Shadowsocks is the most well-known Chinese-made proxy protocol.
It exists in multiple versions, but only AEAD 2022 ciphers
over TCP with multiplexing is recommended.

| Ciphers        | Specification                                              | Cryptographically sound | Resists passive detection | Resists active probes |
| -------------- | ---------------------------------------------------------- | :---------------------: | :-----------------------: | :-------------------: |
| Stream Ciphers | [shadowsocks.org](https://shadowsocks.org/doc/stream.html) | :warning:               | :warning:                 | :warning:             |
| AEAD           | [shadowsocks.org](https://shadowsocks.org/doc/aead.html)   | :white_check_mark:      | :warning:                 | :warning:             |
| AEAD 2022      | [shadowsocks.org](https://shadowsocks.org/doc/sip022.html) | :white_check_mark:      | :white_check_mark:        | :question:            |

(We strongly recommend using multiplexing to send UDP traffic over TCP, because
doing otherwise is vulnerable to passive detection.)

## Password Generator

| For `2022-blake3-aes-128-gcm` cipher | For other ciphers        | Action                                     |
| ------------------------------------ | ------------------------ | ------------------------------------------ |
| <code>{{ pwd16 }}</code>             | <code>{{ pwd32 }}</code> | <button @click="generate">Refresh</button> |

<script setup>
import { ref, onMounted } from 'vue'

const pwd16 = ref( '' )
const pwd32 = ref( '' )

const generatePassword = length => {
  const array = new Uint8Array(length);
  window.crypto.getRandomValues(array);
  return btoa(String.fromCharCode.apply(null, array));
}

const generate = () => {
  pwd16.value = generatePassword(16)
  pwd32.value = generatePassword(32)
}

onMounted( generate )
</script>

## Server Example

::: tabs

== Single-user

```json
{
  "inbounds": [
    {
      "type": "shadowsocks",
      "listen": "::",
      "listen_port": 8080,
      "network": "tcp",
      "method": "2022-blake3-aes-128-gcm",
      "password": "<password>",
      "multiplex": {
        "enabled": true
      }
    }
  ]
}
```

== Multi-user

```json
{
  "inbounds": [
    {
      "type": "shadowsocks",
      "listen": "::",
      "listen_port": 8080,
      "network": "tcp",
      "method": "2022-blake3-aes-128-gcm",
      "password": "<server_password>",
      "users": [
        {
          "name": "sekai",
          "password": "<user_password>"
        }
      ],
      "multiplex": {
        "enabled": true
      }
    }
  ]
}
```

:::

## :material-cellphone-link: Client Example

::: tabs

== Single-user

```json
{
  "outbounds": [
    {
      "type": "shadowsocks",
      "server": "127.0.0.1",
      "server_port": 8080,
      "method": "2022-blake3-aes-128-gcm",
      "password": "<pasword>",
      "multiplex": {
        "enabled": true
      }
    }
  ]
}
```

== Multi-user

```json
{
  "outbounds": [
    {
      "type": "shadowsocks",
      "server": "127.0.0.1",
      "server_port": 8080,
      "method": "2022-blake3-aes-128-gcm",
      "password": "<server_pasword>:<user_password>",
      "multiplex": {
        "enabled": true
      }
    }
  ]
}
```

:::
