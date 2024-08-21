#### HubL Assets
[Search with groupId](https://community.hubspot.com/t5/CMS-Development/Site-Search-withing-a-specific-blog-only/m-p/603352)
[Search with pathPrefix](https://community.hubspot.com/t5/CMS-Development/Setting-up-a-content-search-bar-for-one-blog/m-p/438739)

```js
//... 
let blogId = 12345
//...
getSearchResults = function() {
      var request = new XMLHttpRequest();
      var requestUrl =
        '/_hcms/search?&term=' +
        encodeURIComponent(searchTerm) +
        '&groupId=' +
        blogId +
        '&limit=' +
        encodeURIComponent(TYPEAHEAD_LIMIT) +
        '&autocomplete=true&analytics=true&' +
        searchOptions();
//... 
```


```js
<div class="hs-search-field"> 
  <div class="hs-search-field__bar">
    <form action="/{{ site_settings.content_search_results_page_path }}"> 
      <input type="text" class="hs-search-field__input" name="term" autocomplete="off" aria-label="{{ "Search" }}" placeholder="{{ "Placeholder Text" }}">
      <input type="hidden" name="type" value="BLOG_POST">
      <input type="hidden" name="pathPrefix" value="blog-name">
    </form>
  </div>
  <ul class="hs-search-field__suggestions"></ul>
</div>
```


