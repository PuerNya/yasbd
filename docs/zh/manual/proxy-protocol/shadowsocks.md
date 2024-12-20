# Shadowsocks

Shadowsocks 是最著名的国产代理协议。它有多个版本，但只推荐在 TCP 上使用带有复用功能的 AEAD 2022 加密套件。

| 加密套件  | 规范                                                       |    加密技术完善    |     抗被动探测     | 抗主动探测 |
| --------- | ---------------------------------------------------------- | :----------------: | :----------------: | :--------: |
| 流密码    | [shadowsocks.org](https://shadowsocks.org/doc/stream.html) |     :warning:      |     :warning:      | :warning:  |
| AEAD      | [shadowsocks.org](https://shadowsocks.org/doc/aead.html)   | :white_check_mark: |     :warning:      | :warning:  |
| AEAD 2022 | [shadowsocks.org](https://shadowsocks.org/doc/sip022.html) | :white_check_mark: | :white_check_mark: | :question: |

我们强烈建议使用多路复用技术通过 TCP 发送 UDP 流量，否则很容易受到被动检测。

## :key: 密码生成器

| 针对 `2022-blake3-aes-128-gcm` 套件 | 针对其他套件             | 操作                                    |
| ----------------------------------- | ------------------------ | --------------------------------------- |
| <code>{{ pwd16 }}</code>            | <code>{{ pwd32 }}</code> | <button @click="generate">刷新</button> |

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

## 服务端示例

::: tabs

== 单用户

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

== 多用户

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

## 客户端示例

::: tabs

== 单用户

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

== 多用户

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
