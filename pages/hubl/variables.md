#### Variables - Unique ID
- [Filters](https://developers.hubspot.com/docs/cms/hubl/filters)


```js
// define
{# Setup the uniqueID that will work in all cases - even with drag-and-drop elements  #}
{% set uniqueID = name|replace("-", "_") %}
// usage
{{uniqueID}}

```


```js
<section id={{name}} class="generic-module-class">
   {# module does cool stuff here #}
</section>

{# css #}
{% require_css %}
   #{{name}} {
      display: block;
      ...
   }
{% end_require_css %}

{# js #}
{% require_js 'footer' %}
<script>
document.addEventListener("DOMContentLoaded", function() {
   var module = document.querySelector('#{{name}}');
   // Do things with this instance of module
});
</script>
{% end_require_js %}
```
