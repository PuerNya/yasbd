# 特性

## UI 选项

- 始终开启
- 代理所有网络（代理局域网和移动数据）
- （Apple tvOS）从 iPhone/iPad 导入配置文件

## 服务

SFI/SFM/SFT 允许您通过带有应用程序扩展或系统扩展的 NetworkExtension 运行 sing-box。

## TUN

SFI/SFM/SFT 通过 NetworkExtension 提供无特权 TUN 实现。

| TUN 入站选项                  |      是否支持      | 备注        |
| ----------------------------- | :----------------: | ----------- |
| `interface_name`              |        :x:         | Darwin 管理 |
| `inet4_address`               | :white_check_mark: | /           |
| `inet6_address`               | :white_check_mark: | /           |
| `mtu`                         | :white_check_mark: | /           |
| `gso`                         |        :x:         | 未完成      |
| `auto_route`                  | :white_check_mark: | /           |
| `strict_route`                |        :x:         | 未完成      |
| `inet4_route_address`         | :white_check_mark: | /           |
| `inet6_route_address`         | :white_check_mark: | /           |
| `inet4_route_exclude_address` | :white_check_mark: | /           |
| `inet6_route_exclude_address` | :white_check_mark: | /           |
| `endpoint_independent_nat`    | :white_check_mark: | /           |
| `stack`                       | :white_check_mark: | /           |
| `include_interface`           |        :x:         | 未完成      |
| `exclude_interface`           |        :x:         | 未完成      |
| `include_uid`                 |        :x:         | 未完成      |
| `exclude_uid`                 |        :x:         | 未完成      |
| `include_android_user`        |        :x:         | 未完成      |
| `include_package`             |        :x:         | 未完成      |
| `exclude_package`             |        :x:         | 未完成      |
| `platform`                    | :white_check_mark: | /           |

| 路由/DNS 规则选项    | 是否支持  | 备注            |
| -------------------- | :-------: | --------------- |
| `process_name`       |    :x:    | 没有权限        |
| `process_path`       |    :x:    | 没有权限        |
| `process_path_regex` |    :x:    | 没有权限        |
| `package_name`       |    :x:    | /               |
| `user`               |    :x:    | 没有权限        |
| `user_id`            |    :x:    | 没有权限        |
| `wifi_ssid`          | :warning: | 仅支持 iOS 平台 |
| `wifi_bssid`         | :warning: | 仅支持 iOS 平台 |

## 杂项

- 崩溃日志位于 `设置` -> `查看服务日志`
