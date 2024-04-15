#### HubL Macros
- [Macros](https://developers.hubspot.com/docs/cms/hubl/variables-macros-syntax)
- [Atomic Theme](https://github.com/hubspotdev/DHUG/tree/main/atomic-theme-folder-structure/macros)
- [Freshjuice Theme](https://github.com/freshjuice-dev/freshjuice-hubspot-theme)

```js
{% macro rem(values) %}
{% set baselineFontSize = 16 %}
{% set cssValues = [] %}

{% for v in values %}
    {% set thisVal = v/baselineFontSize~'rem' %}
    {{ do cssValues|appent(thisVal) }}
{% endfor %}

{{ cssValues|join(', ')}}

{% endmacro %}
```


```html
<!-- Macro -->
{% macro footer(tag, footer_text) %}
     <footer> <{{ tag }}>{{ footer_text }} </{{tag}}> </footer>
{% endmacro %}

<!-- Usage in other module-->
{% from "custom/page/location/my_macros.html" import footer %}
{{ footer("h2", "My footer info") }}
```    
