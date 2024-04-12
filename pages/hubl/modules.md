#### HubL Modules
- [Modules overview](https://developers.hubspot.com/docs/cms/building-blocks/modules)
- [Configuring a module](https://developers.hubspot.com/docs/cms/building-blocks/modules/configuration)



```js
// rewrite parameters
{% module_block module "my_module" path="@hubspot/rich_text", label='My rich text editor' %}

{% module_attribute "html" %}
    <p>This is amazing and cool</p>
{% end_module_attribute %}

{% end_module_block %}
```



#### Modules
- you can also hide HubSpot default modules in favor of your own versions. 
[Hide modules and sections from the editor](https://developers.hubspot.com/docs/cms/building-blocks/themes/hide-modules-and-sections)



