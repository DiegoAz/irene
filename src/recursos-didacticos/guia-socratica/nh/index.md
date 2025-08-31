---
meta:
  description: " Tal guia se concentra em uma adaptação do método socrático para ser aplicada em diversos contextos. Desenvolvido pelo Projeto Irene."
  keywords: "método socrático, resolução de conflitos, educação, diálogo, guia prático, projeto irene, literatura clássica"
title: "MAYEARAMA YŨBAWA MARAMUYÃSA IRUPÍ KUA SÍCRATI MÃDUARISÁ"
basePath: "src/_includes/recursos-didacticos/guia-socratica/nh/"
href: "#links-de-download"
page:
  lang: "nh"
toc:
  heading: "MAÃ AIKUEWAÁ"
---

{% for section in sections %}
{% assign file = basePath | append: section.id | append:".md" %}
<section id="{{ section.id }}">
  {% renderFile file, guide %}
</section>
{% endfor %}
