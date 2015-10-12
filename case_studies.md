---
layout: tag
title: Case Studies
header: Case Studies
group: navigation
exclude_from_search: true

---

<script src="{{ ASSET_PATH }}/resources/jquery/jquery.min.js"></script>
<script src="{{ ASSET_PATH }}/resources/bootstrap/js/bootstrap.min.js"></script>
<div class="row">
  <div class="col-md-3" style="text-align:left;">
<ul class="nav nav-pills nav-stacked">
  {% assign tags_list = site.tags %}  
  {% include tags_list %}
</ul>
</div>


<div class="col-md-9">
  {% assign sorted_tags = site.tags | sort %}
  {% for tag in sorted_tags %}

  {% assign zz = tag[1] | where: "category", "CaseStudy" | sort %}
    
    {% if zz != empty %}
    <h2 id="{{ tag[0] }}-ref">{{ tag[0] | replace:'1234',''}}</h2>
    <hr>
      <div class="row">
        {% assign pages_list = tag[1] %}  
        {% include pages_list %}
      </div>
    {% endif %}

  {% endfor %}
</div>
</div>

<hr>


<script type="text/javascript">


var scroll = 0;
var marginTop = -65;
$(document).ready(function(){  

  $('.pill').click(function(){
  var self = this;
  $('.pill').removeClass("active");
  $(this).addClass("active");
});

    $(window).scroll(function () {
        if($(document).scrollTop()<65){
          marginTop = 0;
        }
        else{
           marginTop = ($(document).scrollTop() - scroll) + marginTop;
        }

        scroll = $(document).scrollTop();

        $(".nav-pills").animate({"marginTop": marginTop+"px"}, {duration:100,queue:false} );
    });  
});

</script>
