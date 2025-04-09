---
title: "Guia prático para a resolução de conflitos baseado no método socrático"
basePath: "src/_includes/recursos-didacticos/guia-socratica/pt/"
href: "#links-de-download"
page:
  lang: "pt"
description: "Guia prático que utiliza o método socrático para a resolução de conflitos em ambientes educacionais. Desenvolvido pelo Projeto Irene."
keywords: "método socrático, resolução de conflitos, educação, diálogo, guia prático, projeto irene, literatura clássica"
toc:
  heading: "Conteúdo"
---

{% for section in sections %}
{% assign file = basePath | append: section.id | append:".md" %}
<section id="{{ section.id }}">
  {% renderFile file, guide %}
</section>
{% endfor %}
