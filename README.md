# Functions Getting Started

A quick start app using the functions-ts builder for building simple, scalable back end functions.

First, install the VTEX Toolbelt and login:

```bash
$ npm i -g vtex
$ vtex login
```

Download this repo and open a terminal in its folder.

Then, use `link` to start developing your app:

```bash
$ vtex link
```

Finally, access your endpoint at:

```
POST http://api.vtex.com/{{accountName}}/functions/{{name}}/run

HEADERS
x-vtex-api-appKey: {{X-VTEX-API-AppKey}}
x-vtex-api-appToken: {{X-VTEX-API-AppToken}}
Content-Type: application/json

BODY
{
	"foo": "bar"
}
```
