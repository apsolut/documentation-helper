#### Blog
[Related blog posts](https://developers.hubspot.com/docs/reference/cms/hubl/tags/related-blog-posts)




```js
<h2>Related Posts</h2>
<div class="cr-related-posts-container-inner">
  {% related_blog_posts blog_ids="xxx", tags="{{ post_tags }}", limit=3, callback="blog_post_formatter" %}
  
  <script>
    var blog_post_formatter = function(blogposts) {
      var formatted = "<div>";
      
      // If fewer than 2 related posts are found, fetch latest posts instead
      if (blogposts.length < 2) {
        fetchLatestPosts(3);
        return ""; // Stop processing related posts
      }

      formatted += formatPosts(blogposts);
      return formatted;
    }

    function fetchLatestPosts(limit) {
      var latestPostsUrl = '/_hcms/api/blogs/v3/posts?limit=' + limit + '&orderBy=-publish_date';

      fetch(latestPostsUrl)
        .then(response => response.json())
        .then(data => {
          if (data.objects) {
            document.querySelector('.cr-related-posts-container-inner').innerHTML = formatPosts(data.objects);
          }
        });
    }

    function formatPosts(posts) {
      var formatted = "<div>";
      for (var i = 0; i < posts.length; i++) {
        var post = posts[i];
        formatted += '<div class="related-blog-item">';
        if (post.featuredImage) {
          formatted += `<a class="related-blog-image-url" href="${post.url}"><img loading="lazy" src="${post.featuredImage}" alt="${post.featuredImageAltText}"></a>`;
        }
        formatted += `<a class="related-blog-title" href="${post.url}"><h3>${post.name}</h3></a>`;
        formatted += `<span class="related-blog-date blog-index_post_timestamp">${new Date(post.publishDate).toLocaleDateString("fr-CA")}</span>`;
        var strippedString = post.postSummary.replace(/(<([^>]+)>)/gi, "");
        formatted += `<div class="related-blog-post-summary">${strippedString.substring(0, 200)}...<p class="cr-related-readmore read_more_holder"><a href="${post.url}">Read more</a></p></div>`;
        formatted += '</div>';
      }
      formatted += '</div>';
      return formatted;
    }
  </script>
</div>

```



