#### HubL Assets
[Module theme fields](https://developers.hubspot.com/docs/cms/building-blocks/module-theme-fields-overview#style-fields)
[Module files](https://developers.hubspot.com/docs/cms/building-blocks/modules/files)
[Scoped](https://developers.hubspot.com/docs/cms/building-blocks/modules/files#hs_cos_wrapper_widget_1592841379814)


```js
{% require_css %}
<style>
  {% scope_css %}
    img {
    border-width:{{ module.border_width }}px;
    border-color:rgba({{ module.border_color.color|convert_rgb}},{{ module.border_color.opacity/100 }});
    border-style: solid;
    }
  {% end_scope_css %} 
</style>
{% end_require_css %}
```
