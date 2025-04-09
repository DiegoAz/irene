---
title: "Guide pratique pour la résolution de conflits basée sur la méthode socratique"
basePath: "src/_includes/recursos-didacticos/guia-socratica/fr/"
href: "#enlaces-descargas"
page:
  lang: "fr"
description: "Guide pratique utilisant la méthode socratique pour la résolution de conflits dans les environnements éducatifs. Développé par le Projet Irene."
keywords: "méthode socratique, résolution de conflits, éducation, dialogue, guide pratique, projet irene, littérature classique"
toc:
  heading: "Table des matières"
---

{% for section in sections %}
{% assign file = basePath | append: section.id | append:".md" %}
<section id="{{ section.id }}">
  {% renderFile file, guide %}
</section>
{% endfor %}