---
layout: "layouts/base"
---
<section class="home-section hero">
    <div class="hero-content">
        <h1 class="hero-heading">Presentación</h1>
        <div class="hero-copy">
            <p>Bienvenido al sitio web del proyecto “<em>Irene</em>: un libro de trabajo basado en la literatura clásica para la resolución de conflictos (HUM-13-2024)”.</p>
            <p>El proyecto emplea la literatura clásica como herramienta educativa para desarrollar habilidades de resolución de conflictos en estudiantes de secundaria. Además, busca promover el diálogo, la empatía y el pensamiento crítico, mediante una adaptación del método socrático.</p>
            <p>Su enfoque principal es la promoción de una cultura de paz que integra valores de reconciliación y convivencia pacífica.</p>
            <a href="/acerca-de/introduccion" class="section-link">
                Conoce más sobre el proyecto
                <span>&#8599;</span>
            </a>
        </div>
        {%- render "components/swiper" -%}
    </div>
</section>
<section class="home-section two-grid">
    <div>
        <h2>Currículo</h2>
        <p>El núcleo del proyecto es un currículo innovador que emplea el método socrático para alentar discusiones abiertas y la búsqueda de consensos, en lugar de debates centrados en determinar quién tiene la razón.</p>
        <a href="/curriculo" class="section-link">
        Consulta el currículo
        <span>&#8599;</span>
        </a>
    </div>
    <div>
        <h2>Recursos didácticos</h2>
        <p>El proyecto Irene busca expandir su impacto mediante recursos impresos y digitales gratuitos que garanticen el acceso en áreas rurales y de bajos recursos.</p>
        <a href="/recursos-didacticos" class="section-link">
        Accede a los recursos
        <span>&#8599;</span>
        </a>
    </div>
</section>

<section class="home-section testimonials">
    <h2>Impacto</h2>
    <!-- <p>Laboris veniam veniam ut aute ea laborum enim voluptate.</p> -->
    <ul class="testimonials-list">
        <li class="testimonial">
            <p><a class="testimonial-link" href="/impacto/tunja-2024/">Prueba del libro Irene en el Colegio Gustavo Rojas Pinilla</a></p>
            <span class="meta-text-color city">Tunja</span>
            <span class="meta-text-color year">2024</span>
        </li>
        <li class="testimonial">
            <p><a class="testimonial-link" href="/impacto/fortaleza-2024/">Sócrates en la Escola Municipal Creusa do Carmo Rocha</a></p>
            <span class="meta-text-color city">Fortaleza</span>
            <span class="meta-text-color year">2024</span>
        </li>
        <li class="testimonial">
            <p><a class="testimonial-link" href="/impacto/viota-2024/">Sócrates en un paisaje de paz</a></p>
            <span class="meta-text-color city">Viotá</span>
            <span class="meta-text-color year">2024</span>
        </li>
        <li class="testimonial">
            <p><a class="testimonial-link" href="/impacto/tunja-bogota-2023/">Sócrates en los colegios Gustavo Rojas Pinilla y Delia Zapata Olivella</a></p>
            <span class="meta-text-color city">Tunja y Bogotá</span>
            <span class="meta-text-color year">2023</span>
        </li>
    </ul>
</section>
<section class="home-section institutions">
    <h2>Instituciones asociadas</h2>
    <!-- <p>Laboris veniam veniam ut aute ea laborum enim voluptate.</p> -->
    <div class="logos">
    <!-- Logo UDLS -->
        <div class="logo-wrapper">
            <img class="logo-light" src="/img/inicio/logos/udls-g.svg" alt="Logo UDLS">
            <img class="logo-dark" src="/img/inicio/logos/udls-g-i.svg" alt="Logo UDLS">
        </div>
        <!-- Logo KCL -->
        <div class="logo-wrapper">
            <img class="logo-light" src="/img/inicio/logos/kcl-g.svg" alt="Logo KCL">
            <img class="logo-dark" src="/img/inicio/logos/kcl-g-i.svg" alt="Logo KCL">
        </div>
        <!-- Logo UDEDA -->
        <div class="logo-wrapper">
            <img class="logo-light" src="/img/inicio/logos/udeda-g.svg" alt="Logo UDEDA">
            <img class="logo-dark" src="/img/inicio/logos/udeda-g-i.svg" alt="Logo UDEDA">
        </div>
        <!-- Logo AAHRC -->
        <div class="logo-wrapper">
            <img class="logo-light" src="/img/inicio/logos/aahrc-g.svg" alt="Logo AAHRC">
            <img class="logo-dark" src="/img/inicio/logos/aahrc-g-i.svg" alt="Logo AAHRC">
        </div>
    </div>
</section>
