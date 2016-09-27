# b4u

> A example front-end theme for B4M

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Host with nginx
```
server
{
    server_name www.example.com;

    root  /path/to/b4u/dist;

    location /favicon.ico
    {
      try_files /static/$uri =404;
    }

    location /static/
    {
      try_files $uri =404;
    }

    location /
    {
      try_files $uri /index.html;
    }
}

```

## Note
b4u is NOT seo friendly and I have no plan to do that. However, a modern search engine bot like Google Bot should renders a web page like your browser.
