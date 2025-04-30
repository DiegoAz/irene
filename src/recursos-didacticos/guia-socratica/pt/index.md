---
meta:
  description: " Tal guia se concentra em uma adaptação do método socrático para ser aplicada em diversos contextos. Desenvolvido pelo Projeto Irene."
  keywords: "método socrático, resolução de conflitos, educação, diálogo, guia prático, projeto irene, literatura clássica"
title: "Guia prático para a resolução de conflitos baseado no método socrático"
basePath: "src/_includes/recursos-didacticos/guia-socratica/pt/"
href: "#links-de-download"
page:
  lang: "pt"
toc:
  heading: "Conteúdo"
---

{% for section in sections %}
{% assign file = basePath | append: section.id | append:".md" %}
<section id="{{ section.id }}">
  {% renderFile file, guide %}
</section>
{% endfor %}
