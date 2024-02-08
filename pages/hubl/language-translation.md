#### Language
- [content.language](https://developers.hubspot.com/docs/cms/hubl/variables) 







```java

{% if content.language.languageTag == "en" %}
    {% if item.link_field.url.href  %} Read More  {% else %} Coming soon{% endif %}
{%  endif %}
{% if content.language.languageTag == "de" %}
    {% if item.link_field.url.href  %} Mehr erfahren  {% else %} Coming soon {% endif %}
{%  endif %}
```