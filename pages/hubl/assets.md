#### HubL Assets
[4 Ways to add JS](https://community.hubspot.com/t5/CMS-Development/What-is-the-difference-of-these-4-ways-to-add-javascript-files/m-p/590210)


```js
CSS
{{ require_css(get_assets_url("../css/main.css"))}}
{{ require_css("//fonts.googleapis.com/css?family=Sans:400,700display=swap") }}
// JS
{{ require_js(get_asset_url("../../js/main.js")) }}
{{ require_js("//cdnjs.cloudflare.com/ajax/libs/plyr/3.7.8/plyr.min.js") }} 
```


```js
{% set featuredImage =  content.post_list_summary_featured_image  %}
{% set featuredImageURL =  resize_image_url(featuredImage, 0, 0, 360) %}
<img src="{{ featuredImageURL }}" alt="{{ content.title }}" class="img-responsive" />


```


```js
// in modules, can enable JQ from Hubspot Dashboard
{% require_js %}
<script>
    $(document).ready(function() {
        // do something
    });
</script>
{% end_require_js %}

```    
