---
title: "Guía práctica para la resolución de conflictos basada en el método socrático"
basePath: "src/_includes/recursos-didacticos/guia-socratica/es/"
href: "#enlaces-descargas"
page:
  lang: "es"
toc:
  heading: "Contenido"
---

{% for section in sections %}
{% assign file = basePath | append: section.id | append:".md" %}
<section id="{{ section.id }}">
  {% renderFile file, guide %}
</section>
{% endfor %}