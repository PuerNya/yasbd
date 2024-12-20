# Shadowsocks

## 结构

::: tabs

== 单用户

```json
{
  "type": "shadowsocks",
  "tag": "ss-in",

  ... // 监听字段

  "method": "2022-blake3-aes-128-gcm",
  "password": "8JCsPssfgS8tiRwiMlhARg==",
  "multiplex": {}
}
```

== 多用户

```json
{
  "method": "2022-blake3-aes-128-gcm",
  "password": "8JCsPssfgS8tiRwiMlhARg==",
  "users": [
    {
      "name": "sekai",
      "password": "PCD2Z4o12bKUoFa3cC97Hw=="
    }
  ],
  "multiplex": {}
}
```

== 中转

```json
{
  "type": "shadowsocks",
  "method": "2022-blake3-aes-128-gcm",
  "password": "8JCsPssfgS8tiRwiMlhARg==",
  "destinations": [
    {
      "name": "test",
      "server": "example.com",
      "server_port": 8080,
      "password": "PCD2Z4o12bKUoFa3cC97Hw=="
    }
  ],
  "multiplex": {}
}
```

:::

## 监听字段

参阅 [监听字段](../shared/listen)。

## 字段

### network

监听的网络协议，`tcp` `udp` 之一。

默认所有。

### method

> [!IMPORTANT] 必填

| 方法                          | 密钥长度 |
| ----------------------------- | -------- |
| 2022-blake3-aes-128-gcm       | 16       |
| 2022-blake3-aes-256-gcm       | 32       |
| 2022-blake3-chacha20-poly1305 | 32       |
| none                          | /        |
| aes-128-gcm                   | /        |
| aes-192-gcm                   | /        |
| aes-256-gcm                   | /        |
| chacha20-ietf-poly1305        | /        |
| xchacha20-ietf-poly1305       | /        |

### password

> [!IMPORTANT] 必填

| 方法          | 密码格式                                     |
| ------------- | -------------------------------------------- |
| none          | /                                            |
| 2022 methods  | `sing-box generate rand --base64 <密钥长度>` |
| other methods | 任意字符串                                   |

### multiplex

参阅 [多路复用](../shared/multiplex#inbound)。
