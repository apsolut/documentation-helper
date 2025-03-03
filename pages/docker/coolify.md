#### Coolify

- Cloudflare SSL > minimum set at "full" 
#### Hetzner
- Firewall (do not add 8000 port so only domain works)
-- this require we add Coolify > Settings > Domain



[Coolify](https://coolify.io/docs/troubleshoot/dashboard/dashboard-inaccessible)
```sh
# Coolify 
docker ps --format "table {{.Names}}\t{{.Status}}"

```