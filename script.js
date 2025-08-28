// ================================================================= //
// ===== ARQUIVO SCRIPT.JS MESTRE E UNIFICADO - CHEFBRICO V2.0 ===== //
// ================================================================= //

document.addEventListener('DOMContentLoaded', function() {

    // --- MOTOR 1: ACORDEÃO (PARA FAQ E ONDE ENCONTRAR) ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    if (accordionHeaders.length > 0) {
        accordionHeaders.forEach(header => {
            header.addEventListener('click', function() {
                this.classList.toggle('active');
                const content = this.nextElementSibling;
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            });
        });
    }

    // --- MOTOR 2: CARROSSEL DE CARDS HORIZONTAIS ---
    const postCarousels = document.querySelectorAll('.post-carousel, .card-carousel');
    if (postCarousels.length > 0) {
        postCarousels.forEach(carousel => {
            let isDown = false;
            let startX;
            let scrollLeft;

            carousel.addEventListener('mousedown', (e) => {
                isDown = true;
                carousel.style.cursor = 'grabbing';
                startX = e.pageX - carousel.offsetLeft;
                scrollLeft = carousel.scrollLeft;
            });
            carousel.addEventListener('mouseleave', () => { isDown = false; carousel.style.cursor = 'grab'; });
            carousel.addEventListener('mouseup', () => { isDown = false; carousel.style.cursor = 'grab'; });
            carousel.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - carousel.offsetLeft;
                const walk = (x - startX) * 2;
                carousel.scrollLeft = scrollLeft - walk;
            });
        });
    }

    // --- MOTOR 3: FILTROS DO CARDÁPIO INTELIGENTE ---
    const allFilterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-grid .product-card');
    if (allFilterButtons.length > 0 && productCards.length > 0) {
        allFilterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                allFilterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                productCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category').includes(filter)) {
                        card.classList.remove('hide');
                    } else {
                        card.classList.add('hide');
                    }
                });
            });
        });
    }

    // --- MOTOR 4: MENU HAMBÚRGUER MOBILE ---
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('header nav');
    if (mobileNavToggle && mainNav) {
        mobileNavToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }

});
