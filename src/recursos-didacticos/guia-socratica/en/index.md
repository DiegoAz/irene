---
title: "Practical guide for conflict resolution based on the socratic method"
basePath: "src/_includes/recursos-didacticos/guia-socratica/en/"
href: "#download-links"
page:
  lang: "en"
toc:
  heading: "Contents"
---

{% for section in sections %}
{% assign file = basePath | append: section.id | append:".md" %}
<section id="{{ section.id }}">
  {% renderFile file, guide %}
</section>
{% endfor %}