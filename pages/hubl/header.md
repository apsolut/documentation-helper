#### All for header


```js
{% if module.image_field.src %}
  {% set raw_src = module.image_field.src %}
  {% set fixed_url = raw_src 
    | replace("2761836.fs1.hubspotusercontent-na1.net", "www.cognigy.com/hs-fs") 
    | replace("/hubfs/2761836", "/hubfs") 
  %}
  {% set file_parts = raw_src|split('/') %}
  {% set filename = file_parts|last %}

  {# Dynamically get width and height, fallback to 660 if missing #}
  {% set img_width = module.image_field.width or 660 %}
  {% set img_height = module.image_field.height or 660 %}

  {% set final_url = fixed_url ~ "?width=" ~ img_width ~ "&height=" ~ img_height ~ "&name=" ~ filename %}
  <link rel="preload" as="image" href="{{ final_url|escape }}">
{% endif %}


```


```js

{% if request.query_dict.hs_preview %}
  <p>You're viewing this in preview mode.</p>
{% endif %}

```