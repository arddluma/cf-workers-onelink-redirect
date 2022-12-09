
# cf-workers-onelink-redirect

https://onelink.to alternative built on CloudFlare Workers

This script redirects to urls based on User Agents 
If it is Android redirects to playstore link, if iOS goes to appstore otherwise redirects to fallback url.

## Getting Started

This on CloudFlare workers you need to have installed Wrangler CLI

```
npm install -g wrangler
```
[Read more](https://developers.cloudflare.com/workers/wrangler/install-and-update/)

## Setup

Update `playstoreURL`, `appstoreUR`L and `fallbackURL` as per your needs

After installation authenticate with wrangler CLI using this command

`wrangler login` [docs](https://developers.cloudflare.com/workers/wrangler/commands/#login)

In wrangler.toml update `account_id` and `zone_id` 

To find out CloudFlare account id and zone id checkout [docs](https://developers.cloudflare.com/fundamentals/get-started/basic-tasks/find-account-and-zone-ids/)

In order for this to work you should have an active DNS record proxied through CloudFlare

Update route to desired subdomain. e.g `get.ardd.cloud`

## Deploy

To deploy/publish this worker run command

``` 
wrangler publish
```

## Demo

https://get.ardd.cloud