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

