---
title: "Guía práctica para la resolución de conflictos basada en el método socrático"
basePath: "src/_includes/recursos-didacticos/guia-socratica/es/"
href: "#enlaces-descargas"
page:
  lang: "es"
description: "Guía práctica que utiliza el método socrático para la resolución de conflictos en entornos educativos. Desarrollada por el Proyecto Irene."
keywords: "método socrático, resolución de conflictos, educación, diálogo, guía práctica, proyecto irene, literatura clásica"
toc:
  heading: "Contenido"
---

{% for section in sections %}
{% assign file = basePath | append: section.id | append:".md" %}
<section id="{{ section.id }}">
  {% renderFile file, guide %}
</section>
{% endfor %}