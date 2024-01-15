#### HubL Assets
[Module theme fields](https://developers.hubspot.com/docs/cms/building-blocks/module-theme-fields-overview#style-fields)
[Module files](https://developers.hubspot.com/docs/cms/building-blocks/modules/files)
[Scoped](https://developers.hubspot.com/docs/cms/building-blocks/modules/files#hs_cos_wrapper_widget_1592841379814)


```css
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


```css

 {% if module.style.block_gradient %}
                background: {{ module.style.block_gradient.css }};
  {% endif %}
  {{ module.style.block_background_image.css }}
  {{ module.style.spacing.css }}
  {{ module.style.border.css }}
  {% if module.style.block_alignment.horizontal_align == "CENTER" %}
      text-align: center;
  {% endif %}

  {% if module.style.block_alignment.vertical_align == "MIDDLE" %}
      justify-content: center;
  {% endif %}

```

```css

  {% if module.style.block_alignment.horizontal_align == "RIGHT" %}
      .module-boxes .section-title {
          text-align: right;
      }
  {% endif %}
```