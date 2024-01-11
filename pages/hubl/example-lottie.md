#### Example Lottie
[Lottie in HS](https://developers.hubspot.com/blog/how-to-benefit-from-lottie-animation-in-the-hubspot-environment)


```js
{# Variables #}
{% set lottie = module.file.lottie_file %}
{% set controls = module.settings.controls %}
{% set autoplay = module.settings.autoplay %}
{% set hover = module.settings.hover %}
{% set lottie_loop = module.settings.loop %}
{% set speed = module.settings.speed %}
{% set bg_color = module.styles.bg.css %}
{% set width = module.styles.width.value + module.styles.width.unit %}
{% set height = module.styles.height.value + module.styles.height.unit %}

{# Markup #}
{% if lottie %}  
  <div>
    <lottie-player 
      src="{{lottie}}" 
      background="{% if bg_color %}{{bg_color}}{% else %}transparent{% endif %}"
      speed="{{speed}}"
      style="width:{{width}};height:{{height}}"
      {% if autoplay %}{{autoplay}} {% endif %}
      {% if controls %}{{controls}} {% endif %}
      {% if controls %}{{hover}} {% endif %}
      {% if controls %}{{lottie_loop}}{% endif %}
      >
    </lottie-player>
  </div>
{% endif %}

{# JavaScript #}
{% require_js %}
  <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
{% end_require_js %}
	

```    
