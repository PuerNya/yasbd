# Adguard DNS Filter

> [!IMPORTANT] 🆕 自 sing-box 1.10.0 起

sing-box 支持其他项目的一些规则集格式，这些格式无法完全转换为 sing-box，
目前只有 AdGuard DNS Filter。

这些格式不直接作为源格式支持，
而是需要将它们转换为二进制规则集。

## 转换

使用 `sing-box rule-set convert --type adguard [--output <file-name>.srs] <file-name>.txt` 以转换为二进制规则集。

## 性能

AdGuard 将所有规则保存在内存中并按顺序匹配，
而 sing-box 选择高性能和较小的内存使用量。
作为权衡，您无法知道匹配了哪个规则项。

## 兼容性

[AdGuardSDNSFilter](https://github.com/AdguardTeam/AdGuardSDNSFilter)
中的几乎所有规则以及 [adguard-filter-list](https://github.com/ppfeufer/adguard-filter-list)
中列出的规则集中的规则均受支持。

## 支持的格式

### AdGuard Filter

#### 基本规则语法

| 语法   | 支持               |
| ------ | ------------------ |
| `@@`   | :white_check_mark: |
| `\|\|` | :white_check_mark: |
| `\|`   | :white_check_mark: |
| `^`    | :white_check_mark: |
| `*`    | :white_check_mark: |

#### 主机语法

| 语法        | 示例                     | 支持               |
| ----------- | ------------------------ | ------------------ |
| Scheme      | `https://`               | :warning: Ignored  |
| Domain Host | `example.org`            | :white_check_mark: |
| IP Host     | `1.1.1.1`, `10.0.0.`     | :x:                |
| Regexp      | `/regexp/`               | :white_check_mark: |
| Port        | `example.org:80`         | :x:                |
| Path        | `example.org/path/ad.js` | :x:                |

#### 描述符语法

| 描述符                | 支持               |
| --------------------- | ------------------ |
| `$important`          | :white_check_mark: |
| `$dnsrewrite=0.0.0.0` | :warning: Ignored  |
| 任何其他描述符        | :x:                |

### Hosts

只有 IP 地址为 `0.0.0.0` 的条目将被接受。

### 简易

当所有行都是有效域时，它们被视为简单的逐行域规则，与 hosts 一样，只匹配完全相同的域。
