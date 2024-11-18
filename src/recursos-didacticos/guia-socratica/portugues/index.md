---
title: "Guia prático para a resolução de conflitos baseado no método socrático"
basePath: "src/_includes/recursos-didacticos/guia-socratica/portugues/"
href: "#links-de-download"
---

{% for section in sections %}
{% assign file = basePath | append: section.id | append:".md" %}
<section id="{{ section.id }}">
  {% renderFile file %}
</section>
{% endfor %}
