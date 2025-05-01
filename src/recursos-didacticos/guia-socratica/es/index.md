---
meta:
  description: "La presente guía se enfoca en una adaptación del método socrático para aplicarse en diversos contextos. Desarrollada por el Proyecto Irene."
  keywords: "método socrático, resolución de conflictos, educación, diálogo, guía práctica, proyecto irene, literatura clásica"
title: "Guía práctica para la resolución de conflictos basada en el método socrático"
basePath: "src/_includes/recursos-didacticos/guia-socratica/es/"
href: "#enlaces-de-descarga"
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