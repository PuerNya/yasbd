# Tor

## 结构

```json
{
  "type": "tor",
  "tag": "tor-out",

  "executable_path": "/usr/bin/tor",
  "extra_args": [],
  "data_directory": "$HOME/.cache/tor",
  "torrc": {
    "ClientOnly": 1
  },

  ... // 拨号字段
}
```

> [!INFO]
> 默认安装不包含嵌入式 Tor, 参阅 [安装](../../installation/build-from-source#构建标记)。

## 拨号字段

参阅 [拨号字段](../shared/dial)。

## 字段

### executable_path

Tor 可执行文件路径

如果设置，将覆盖嵌入式 Tor。

### extra_args

启动 Tor 时传递的附加参数列表。

### data_directory

> [!IMPORTANT] 推荐

Tor 的数据目录。

如未设置，每次启动都需要长时间。

### torrc

torrc 参数表。

参阅 [tor(1)](https://linux.die.net/man/1/tor)。
