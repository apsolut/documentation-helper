### WebVitals


```shell
{{ require_js("https://cdnjs.cloudflare.com/ajax/libs/plyr/3.7.8/plyr.min.js", { position: "footer", defer: true }) }}
{{ require_css("//cdnjs.cloudflare.com/ajax/libs/plyr/3.7.8/plyr.min.css", { async: true }) }}
```


```shell
  "css_render_options": {
    "async": true
  },
  "js_render_options": {
    "position": "footer",
    "defer": true,
    "async": false
  }
```