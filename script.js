// CHEFBRICO JAVASCRIPT v3.0 - RECONSTRUÇÃO E OTIMIZAÇÃO DE FUNCIONALIDADE
document.addEventListener('DOMContentLoaded', function() {
    // Lógica para os acordeões do FAQ
    var accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(function(header) {
        header.addEventListener('click', function() {
            var accordionContent = this.nextElementSibling;
            var isActive = this.classList.contains('active');

            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== this) {
                    otherHeader.classList.remove('active');
                    otherHeader.nextElementSibling.style.maxHeight = null;
                    otherHeader.nextElementSibling.style.paddingBottom = '0px';
                }
            });

            if (!isActive) {
                this.classList.add('active');
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                accordionContent.style.paddingBottom = '15px';
            } else {
                this.classList.remove('active');
                accordionContent.style.maxHeight = null;
                accordionContent.style.paddingBottom = '0px';
            }
        });
    });

    // Lógica para o Carrossel (Rolagem Suave)
    const postCarousels = document.querySelectorAll('.post-carousel');
    postCarousels.forEach(carousel => {
        let isDown = false;
        let startX;
        let scrollLeft;

        carousel.addEventListener('mousedown', (e) => {
            isDown = true;
            carousel.classList.add('active-drag');
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        });
        carousel.addEventListener('mouseleave', () => {
            isDown = false;
            carousel.classList.remove('active-drag');
        });
        carousel.addEventListener('mouseup', () => {
            isDown = false;
            carousel.classList.remove('active-drag');
        });
        carousel.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2;
            carousel.scrollLeft = scrollLeft - walk;
        });
    });
});
