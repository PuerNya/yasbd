# 特性

## UI 选项

- 在通知栏中显示实时网络速度

## 服务

SFA 允许您通过 ForegroundService 或 VpnService（需要 TUN 时）运行 sing-box。

## TUN

SFA 通过 Android VpnService 提供非特权 TUN 实现。

| TUN 入站选项                  |      是否支持      | 备注            |
| ----------------------------- | :----------------: | --------------- |
| `interface_name`              |        :x:         | 由 Android 管理 |
| `inet4_address`               | :white_check_mark: | /               |
| `inet6_address`               | :white_check_mark: | /               |
| `mtu`                         | :white_check_mark: | /               |
| `gso`                         |        :x:         | 无权限          |
| `auto_route`                  | :white_check_mark: | /               |
| `strict_route`                |        :x:         | 未实现          |
| `inet4_route_address`         | :white_check_mark: | /               |
| `inet6_route_address`         | :white_check_mark: | /               |
| `inet4_route_exclude_address` | :white_check_mark: | /               |
| `inet6_route_exclude_address` | :white_check_mark: | /               |
| `endpoint_independent_nat`    | :white_check_mark: | /               |
| `stack`                       | :white_check_mark: | /               |
| `include_interface`           |        :x:         | 无权限          |
| `exclude_interface`           |        :x:         | 无权限          |
| `include_uid`                 |        :x:         | 无权限          |
| `exclude_uid`                 |        :x:         | 无权限          |
| `include_android_user`        |        :x:         | 无权限          |
| `include_package`             | :white_check_mark: | /               |
| `exclude_package`             | :white_check_mark: | /               |
| `platform`                    | :white_check_mark: | /               |

| 路由/DNS 规则选项    |      是否支持      | 备注                     |
| -------------------- | :----------------: | ------------------------ |
| `process_name`       |        :x:         | 无权限                   |
| `process_path`       |        :x:         | 无权限                   |
| `process_path_regex` |        :x:         | 无权限                   |
| `package_name`       | :white_check_mark: | /                        |
| `user`               |        :x:         | 使用 `package_name` 代替 |
| `user_id`            |        :x:         | 使用 `package_name` 代替 |
| `wifi_ssid`          | :white_check_mark: | 需要精确位置定位权限     |
| `wifi_bssid`         | :white_check_mark: | 需要精确位置定位权限     |

### 覆写

用特定于平台的值覆写配置文件配置项。

## 代理应用预处理

SFA 允许您在图形界面上选择需要代理或绕过的 Android 应用程序列表，以覆写 `include_package` 和 `exclude_package` 配置项。
特别值得一提的是，该选择器还提供了“中国应用”扫描功能，为中国用户绕过不需要代理的应用提供了良好的体验。
具体来说，通过 dex 类路径等方式扫描中国应用或 SDK 特征，几乎不会出现漏报。

## 杂项

- 工作目录位于 `/sdcard/Android/data/io.nekohasekai.sfa/files` （外部文件目录）
- 崩溃日志位于 `$working_directory/stderr.log`
