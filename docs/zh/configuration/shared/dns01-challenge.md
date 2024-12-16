# DNS01 验证字段

## 结构

```json
{
  "provider": "",

  ... // 提供商字段
}
```

## 提供商字段

::: tabs

== 阿里云 DNS

```json
{
  "provider": "alidns",
  "access_key_id": "",
  "access_key_secret": "",
  "region_id": ""
}
```

== Cloudflare

```json
{
  "provider": "cloudflare",
  "api_token": ""
}
```

:::