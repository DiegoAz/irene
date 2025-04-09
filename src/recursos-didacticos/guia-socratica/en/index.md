---
title: "Practical guide for conflict resolution based on the socratic method"
basePath: "src/_includes/recursos-didacticos/guia-socratica/en/"
href: "#download-links"
page:
  lang: "en"
description: "Practical guide that uses the Socratic method for conflict resolution in educational environments. Developed by the Irene Project."
keywords: "socratic method, conflict resolution, education, dialogue, practical guide, irene project, classical literature"
toc:
  heading: "Contents"
---

{% for section in sections %}
{% assign file = basePath | append: section.id | append:".md" %}
<section id="{{ section.id }}">
  {% renderFile file, guide %}
</section>
{% endfor %}