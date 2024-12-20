# Features

#### UI options

* Display realtime network speed in the notification

#### Service

SFA allows you to run sing-box through ForegroundService or VpnService (when TUN is required).

#### TUN

SFA provides an unprivileged TUN implementation through Android VpnService.

| TUN inbound option            | Available          | Note               |
|-------------------------------|:------------------:|--------------------|
| `interface_name`              | :x:                | Managed by Android |
| `inet4_address`               | :white_check_mark: | /                  |
| `inet6_address`               | :white_check_mark: | /                  |
| `mtu`                         | :white_check_mark: | /                  |
| `gso`                         | :x:                | No permission      |
| `auto_route`                  | :white_check_mark: | /                  |
| `strict_route`                | :x:                | Not implemented    |
| `inet4_route_address`         | :white_check_mark: | /                  |
| `inet6_route_address`         | :white_check_mark: | /                  |
| `inet4_route_exclude_address` | :white_check_mark: | /                  |
| `inet6_route_exclude_address` | :white_check_mark: | /                  |
| `endpoint_independent_nat`    | :white_check_mark: | /                  |
| `stack`                       | :white_check_mark: | /                  |
| `include_interface`           | :x:                | No permission      |
| `exclude_interface`           | :x:                | No permission      |
| `include_uid`                 | :x:                | No permission      |
| `exclude_uid`                 | :x:                | No permission      |
| `include_android_user`        | :x:                | No permission      |
| `include_package`             | :white_check_mark: | /                  |
| `exclude_package`             | :white_check_mark: | /                  |
| `platform`                    | :white_check_mark: | /                  |

| Route/DNS rule option | Available          | Note                              |
|-----------------------|:------------------:|-----------------------------------|
| `process_name`        | :x:                | No permission                     |
| `process_path`        | :x:                | No permission                     |
| `process_path_regex`  | :x:                | No permission                     |
| `package_name`        | :white_check_mark: | /                                 |
| `user`                | :x:                | Use `package_name` instead        |
| `user_id`             | :x:                | Use `package_name` instead        |
| `wifi_ssid`           | :white_check_mark: | Fine location permission required |
| `wifi_bssid`          | :white_check_mark: | Fine location permission required |

### Override

Overrides profile configuration items with platform-specific values.

#### Per-app proxy

SFA allows you to select a list of Android apps that require proxying or bypassing in the graphical interface to
override the `include_package` and `exclude_package` configuration items.

In particular, the selector also provides the “China apps” scanning feature, providing Chinese users with an excellent
experience to bypass apps that do not require a proxy. Specifically, by scanning China application or SDK
characteristics through dex class path and other means, there will be almost no missed reports.

### Chore

* The working directory is located at `/sdcard/Android/data/io.nekohasekai.sfa/files` (External files directory)
* Crash logs is located in `$working_directory/stderr.log`