# :material-decagram: Features

#### UI options

* Always On
* Include All Networks (Proxy traffic for LAN and cellular services)
* (Apple tvOS) Import profile from iPhone/iPad

#### Service

SFI/SFM/SFT allows you to run sing-box through NetworkExtension with Application Extension or System Extension.

#### TUN

SFI/SFM/SFT provides an unprivileged TUN implementation through NetworkExtension.

| TUN inbound option            | Available          | Note              |
|-------------------------------|:------------------:|-------------------|
| `interface_name`              | :x:                | Managed by Darwin |
| `inet4_address`               | :white_check_mark: | /                 |
| `inet6_address`               | :white_check_mark: | /                 |
| `mtu`                         | :white_check_mark: | /                 |
| `gso`                         | :x:                | Not implemented   |
| `auto_route`                  | :white_check_mark: | /                 |
| `strict_route`                | :x:                | Not implemented   |
| `inet4_route_address`         | :white_check_mark: | /                 |
| `inet6_route_address`         | :white_check_mark: | /                 |
| `inet4_route_exclude_address` | :white_check_mark: | /                 |
| `inet6_route_exclude_address` | :white_check_mark: | /                 |
| `endpoint_independent_nat`    | :white_check_mark: | /                 |
| `stack`                       | :white_check_mark: | /                 |
| `include_interface`           | :x:                | Not implemented   |
| `exclude_interface`           | :x:                | Not implemented   |
| `include_uid`                 | :x:                | Not implemented   |
| `exclude_uid`                 | :x:                | Not implemented   |
| `include_android_user`        | :x:                | Not implemented   |
| `include_package`             | :x:                | Not implemented   |
| `exclude_package`             | :x:                | Not implemented   |
| `platform`                    | :white_check_mark: | /                 |

| Route/DNS rule option | Available | Note                  |
|-----------------------|:---------:|-----------------------|
| `process_name`        | :x:       | No permission         |
| `process_path`        | :x:       | No permission         |
| `process_path_regex`  | :x:       | No permission         |
| `package_name`        | :x:       | /                     |
| `user`                | :x:       | No permission         |
| `user_id`             | :x:       | No permission         |
| `wifi_ssid`           | :warning: | Only supported on iOS |
| `wifi_bssid`          | :warning: | Only supported on iOS |

### Chore

* Crash logs is located in `Settings` -> `View Service Log`