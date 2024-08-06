#### HubL Assets
[Hubl Tricks](https://developers.hubspot.com/blog/lesser-known-hubl-tips-and-tricks)

```js
{# Without whitespace #}
{%- set letters = ['a', 'b', 'c'] -%}
<ul>       
  {%- for letter in letters -%}
    <li>{{ letter }}</li>
  {%- endfor -%}
</ul>
```


```js
// Instead of using the request object, which prevents server caching, use content.slug. 
// This property even works in the editor.

<p>{{ content.slug }}</p>
```


```js

[
	{
		'name':'bill',
		'id':3,
		'label':'medium'
	},
	{
		'name':'jack',
		'id':5,
		'label':'medium'
	},
	{
		'name':'Suzie',
		'id':6,
		'label':'medium',
     'author':'false'
	},
]

{%- macro updateEmptyRows(seq,key,val) -%}
	{%- for row in seq|selectattr(key,'none') -%}
        {# This updates the existing dictionary #}
        {%- do row.put(key,val) -%}
    {%- endfor -%}
{%- endmacro -%}

{# Convert from hubdb object to dictionary with to/from json #}
{% set catalogue_sheets = row.catalogue_sheet|tojson|fromjson %}

{# Set the nice name to catalogue sheet if empty #}
{% do updateEmptyRows(catalogue_sheets,'nice_name','Catalogue Sheet') %}

{# sort the sheets and then loop through #}
{% for file in catalogue_sheets|sort(false,false,'nice_name') if catalogue_sheets %}

```