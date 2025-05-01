---
meta:
  description: "Ce guide se concentre sur une adaptation de la méthode socratique qui peut être appliquée dans divers contextes. Développé par le Projet Irene."
  keywords: "méthode socratique, résolution de conflits, éducation, dialogue, guide pratique, projet irene, littérature classique"
title: "Guide pratique pour la résolution de conflits basée sur la méthode socratique"
basePath: "src/_includes/recursos-didacticos/guia-socratica/fr/"
href: "#liens-de-telechargement"
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