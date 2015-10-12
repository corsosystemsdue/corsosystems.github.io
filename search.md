---
layout: page
title: Search Results
header: Search Results
group: navigation

---
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="/js/search.min.js" type="text/javascript" charset="utf-8"></script>
<script src="/js/jquery.lunr.search.js" type="text/javascript" charset="utf-8"></script>


<section id="search-results" style="display: none;text-align:left;">
  <h4>Search results</h4>
  <hr>
  <div class="entries">
  </div>
</section>

{% raw %}
<script id="search-results-template" type="text/mustache">
  {{#entries}}
    <article style="text-align:left;">
      <h4>
        {{#date}}<small><time datetime="{{pubdate}}" pubdate>{{displaydate}}</time></small>{{/date}}
        <a href="{{url}}">{{title}}</a>
      </h4>
    </article>
  {{/entries}}
  <hr>
</script>
{% endraw %}


<script type="text/javascript">
  $(function() {
    $('#search-query').lunrSearch({
      indexUrl: '/search.txt',             // URL of the `search.json` index data for your site
      results:  '#search-results',          // jQuery selector for the search results container
      entries:  '.entries',                 // jQuery selector for the element to contain the results list, must be a child of the results element above.
      template: '#search-results-template'  // jQuery selector for the Mustache.js template
    });
  });
</script>