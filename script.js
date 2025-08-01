document.addEventListener('DOMContentLoaded', function() {
    var accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(function(header) {
        header.addEventListener('click', function() {
            var accordionContent = this.nextElementSibling; // O próximo elemento após o header é o content

            // Togle a classe 'active' no header
            this.classList.toggle('active');

            // Expandir ou colapsar o conteúdo
            if (accordionContent.style.maxHeight) {
                accordionContent.style.maxHeight = null; // Colapsa
                accordionContent.style.paddingBottom = '0px'; // Remove padding ao colapsar
            } else {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'; // Expande para a altura total
                accordionContent.style.paddingBottom = '15px'; // Adiciona padding ao expandir
            }
        });
    });
});
