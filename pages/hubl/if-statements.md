#### HubL Repeatable Fields
- [If Statements](https://developers.hubspot.com/docs/cms/hubl/if-statements)


```js
{% if condition %}
	If the condition is true print this to template.
{% endif %}

// boolean
{% if "true"|bool == true %}hello world{% endif %}

```


```js

 {% unless item.show_video and item.hide_background_gradient %}
 
 {% endunless %}

```


```js
// else if
{% set number = 5 %}

{% if number <= 2 %}
	Variable named number is less than or equal to 2.
{% elif number <= 4 %}
	Variable named number is less than or equal to 4.
{% elif number <= 6 %}
	Variable named number is less than or equal to 6.
{% else %}
	Variable named number is greater than 6.
{% endif %}
```    


```js
// set variable
{% module "my_module" path="@hubspot/rich_text", label="My rich text module", html="Default module text" export_to_template_context=true %}

{% if widget_data.my_module %}
	A module named "my_module" is defined in this template.
{% endif %}


{% set my_variable = "A string value for my variable" %}    
{% if my_variable %}
	The variable named my_variable is defined in this template.
{% endif %}

```


```js

// Ternary operators
// If the variable is_blue is true, output "blue", otherwise output"red"
{{ is_blue is truthy ? "blue" : "red" }}

// Set the variable is_red to false if is_blue is true, otherwise set to true
{% set is_red = is_blue is truthy ? false : true %}

```