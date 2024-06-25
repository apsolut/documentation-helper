#### HubL Functions
- [Functions](https://developers.hubspot.com/docs/cms/hubl/functions)
- [Filters](https://developers.hubspot.com/docs/cms/hubl/filters)
- [Module and theme fields](https://developers.hubspot.com/docs/cms/building-blocks/module-theme-fields)


```js
/// blog_page_link
<a href="{{ blog_page_link(current_page_num) }}">Current page</a>
<a href="{{ blog_page_link(next_page_num) }}">Next</a>
```


```js

{% set my_blog = blog_by_id(47104297) %}
<ul>
    <li>
        <a href="{{ my_blog.absolute_url }}">{{my_blog.html_title}}</a>
	</li>
</ul>

```

```js
/// link
/// please escape everything that we can 
{{ content.absolute_url }}

{% set escape_string = "https://www.google.com<" %}
 <a href="{{ escape_string|escape_url }}">

```


```js
 /// blog content
 /// sanitize HTML when possible
   {{ content.post_body_value|truncatehtml(200) }}
   {{ content.post_list_content|truncatehtml(100) }}
   /// safe - wont be escaped
   {{ content.post_list_content|safe }} 
   /// sanitize
   {% set escape_string = "This <br> <div>markup is <img src='test.com/image'> <span>printed</span> as text.</div>" %}
{{ escape_string|sanitize_html("IMAGES") }}
```




```js
// List blog posts from news
{{ blog_recent_posts("default", 5) }}
{% set rec_posts = blog_recent_posts("default", 5) %}
{% for rec_post in rec_posts %}
    <div class="post-title">{{ rec_post.name }}</div>
{% endfor %}

```
