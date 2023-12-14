#### HubL Repeatable Fields
- [Filters](https://developers.hubspot.com/docs/cms/hubl/filters)
- [Module and theme fields](https://developers.hubspot.com/docs/cms/building-blocks/module-theme-fields)


```js
module.logo|length

{% set services = ["Web design", "SEO", "Inbound Marketing", "PPC"] %} 
{{ services|length }} // output 4

```

```js
{% set my_number = -53 %}
{{ my_number|abs }}

// debugging - pretty print filter
{{ site_settings|pprint }}

// boolean
{% if "true"|bool == true %}hello world{% endif %}

```


```js
{% set rows = ["apples", "oranges", "pears", "grapes", "blueberries"] %}

<table>
    {% for row in rows|batch(3, "&nbsp;") %}
    <tr>
        {% for column in row %}
        <td>{{ column }}</td>
        {% endfor %}
    </tr>
    {% endfor %}
</table>
```    
