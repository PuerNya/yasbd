# Selector

## 结构

```json
{
  "type": "selector",
  "tag": "select",

  "outbounds": ["proxy-a", "proxy-b", "proxy-c"],
  "default": "proxy-c",
  "interrupt_exist_connections": false
}
```

> [!NOTE]
> 选择器目前只能通过 [Clash API](../experimental/clash-api) 或 [图形界面客户端](../../clients) 的 Dashboard 来控制。

## 字段

### outbounds

> [!IMPORTANT] 必填

用于选择的出站标签列表。

### default

默认的出站标签。默认使用第一个出站。

### interrupt_exist_connections

当选定的出站发生更改时，中断现有连接。

仅入站连接受此设置影响，内部连接将始终被中断。
