## Liens de téléchargement
{% include "components/go-back.liquid", text:hyperlinks.goToTop[page.lang] %}

<p>{{ download[page.lang][0].intro }}</p>

<section class="section">
    <div class="buttons">
        <a href="{{ download[page.lang][0].all.href }}" class="btn btn-download" download>
            <span class="text">{{ download[page.lang][0].all.text }}</span>
            <span class="text-size-small meta-text-color ext">pdf</span>
        </a>
        <a href="{{ download[page.lang][0].participants.href }}" class="btn btn-download" download>
            <span class="text">{{ download[page.lang][0].participants.text }}</span>
            <span class="text-size-small meta-text-color ext">pdf</span>
        </a>
    </div>
</section>