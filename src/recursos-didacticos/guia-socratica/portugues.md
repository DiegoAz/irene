---
title: "Guia prático para a resolução de conflitos baseado no método socrático"
layout: "layouts/long-page.liquid"
button:
  href: "/assets/Guia prático para a resolução de conflitos - Irene.pdf"
  text: "Baixe o guia em pdf"
basePath: "src/_includes/recursos-didacticos/guia-socratica/portugues/"
sections:
  - id: "apresentacao"
    title: "Apresentação"
  - id: "a-que-e-o-metodo-socratico"
    title: "A. O que é o método socrático?"
  - id: "b-quais-aprendizados-se-buscam-desenvolver"
    title: "B. Quais aprendizados se buscam desenvolver?"
  - id: "c-como-implementar-o-metodo-socratico"
    title: "C. Como implementar o método socrático?"
  - id: "d-variacao"
    title: "D. Variação"
  - id: "e-avaliacao"
    title: "E. Avaliação"
  - id: "f-guia-para-os-participantes"
    title: "F. Guia para os participantes"

---

{% for section in sections %}
{% assign file = basePath | append: section.id | append:".md" %}
<section id="{{ section.id }}">
  {% renderFile file %}
</section>
{% endfor %}
