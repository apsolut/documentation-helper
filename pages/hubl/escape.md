#### Example Lottie
[Operations](https://developers.hubspot.com/docs/cms/hubl/operators-and-expression-tests)
[Filters](https://developers.hubspot.com/docs/cms/hubl/filters)

```js
{% set escape_string = "<div>This markup is printed as text</div>" %} 
{{ escape_string|escape_html }}

```


```js
{% for content in contents %}
  {{ content.blog_post_author|tojson }}
{% endfor %}

```

```js
{% set escape_string = "\tThey said 'This string can safely be inserted into JavaScript.'" %}
{{ escape_string|escape_js }}

```

```js

{% set escape_string = "<script>alert('oh no!')</script>" %}
{% require_js position="head" %}
<script data-search_input-config="config_{{ name }}" type="application/json">
{
  "autosuggest_results_message": "{{ escape_string|escapejson }}"
}
</script>
{% end_require_js %}
```