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
/// Translations
 {% if content.language.languageTag == "de" %}
    <a class="cta_button" href="{{ post.absolute_url }}">Mehr erfahren</a>
{% else %}
    <a class="cta_button" href="{{ post.absolute_url }}">Read More</a>
{% endif %}
```







```js
// Reading Time
{% set number = p.post_body|wordcount|divide(200) %}
{% if number < 1 %}
        <span></span>
    {% else %}
        <div class="aa-tag-separator">| </div>
        {% set post_content = content.post_body|striptags %}
        {% set cleaned_content = post_content|replace('<!--more-->', '') %}
        {% set word_count = cleaned_content|wordcount %}
        {% set calculated_time = word_count|divide(200)|round %}
        {# Workaround for max function #}
        {% if calculated_time < 1 %}
            {% set reading_time = 1 %}
        {% else %}
            {% set reading_time = calculated_time %}
        {% endif %}
            <div id="reading-time-debug" style="display: none;">
            <p>Debug Info:</p>
            <ul>
                <li>Word Count: {{ word_count }}</li>
                <li>Calculated Time: {{ calculated_time }}</li>
                <li>Final Reading Time: {{ reading_time }}</li>
            </ul>
        </div>
        {# <!-- Debug: {{ word_count }} words --> #}
        {#  <span class="min-read">{{ p.post_body|wordcount|divide(200) }} {{ label_read }}</span> #}
        <span class="min-read">{{ reading_time  }} {{ label_read }}</span>
{% endif %}


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
