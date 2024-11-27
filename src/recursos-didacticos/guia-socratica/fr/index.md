---
title: "Guide pratique pour la résolution de conflits basée sur la méthode socratique"
basePath: "src/_includes/recursos-didacticos/guia-socratica/fr/"
href: "#enlaces-descargas"
page:
  lang: "fr"
toc:
  heading: "Table des matières"
---

{% for section in sections %}
{% assign file = basePath | append: section.id | append:".md" %}
<section id="{{ section.id }}">
  {% renderFile file, guide %}
</section>
{% endfor %}