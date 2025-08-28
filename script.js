// CHEFBRICO JAVASCRIPT v4.0 - ARQUITETURA UNIFICADA
document.addEventListener('DOMContentLoaded', function() {

    // =============================================
    // ===== MOTOR 1: ACORDEÃO DO FAQ (JÁ EXISTENTE) =====
    // =============================================
   

    document.addEventListener('DOMContentLoaded', function() {
    
    // --- Lógica para os acordeões do FAQ ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(function(header) {
        header.addEventListener('click', function() {
            // Fecha todos os outros acordeões antes de abrir o novo
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== this) {
                    otherHeader.classList.remove('active');
                    otherHeader.nextElementSibling.style.maxHeight = null;
                }
            });

            // Abre ou fecha o acordeão que foi clicado
            this.classList.toggle('active');
            const accordionContent = this.nextElementSibling;
            if (accordionContent.style.maxHeight) {
                accordionContent.style.maxHeight = null;
            } else {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            }
        });
    });

   
    // =======================================================
    // ===== MOTOR 2: CARROSSEL COM ROLAGEM SUAVE (JÁ EXISTENTE) =====
    // =======================================================
    const postCarousels = document.querySelectorAll('.post-carousel');
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
        carousel.addEventListener('mouseleave', () => {
            isDown = false;
            carousel.style.cursor = 'grab';
        });
        carousel.addEventListener('mouseup', () => {
            isDown = false;
            carousel.style.cursor = 'grab';
        });
        carousel.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2; // Multiplicador para acelerar a rolagem
            carousel.scrollLeft = scrollLeft - walk;
        });
    });

    // =======================================================
    // ===== MOTOR 3: FILTROS DO CARDÁPIO INTELIGENTE (NOVO) =====
    // =======================================================
    const allFilterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-grid .product-card');

    if (allFilterButtons.length > 0 && productCards.length > 0) {
        allFilterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Remove a classe 'active' de todos os botões
                allFilterButtons.forEach(btn => btn.classList.remove('active'));
                // Adiciona a classe 'active' apenas ao botão clicado
                this.classList.add('active');

                // Lógica para mostrar/esconder os cards
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

    // =======================================================
    // ===== MOTOR 4: MENU HAMBÚRGUER MOBILE (NOVO)      =====
    // =======================================================

 document.addEventListener('DOMContentLoaded', function() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('header nav');

    if (mobileNavToggle && mainNav) {
        mobileNavToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }

    // ... seu outro código JS para acordeão e filtros continua aqui
});                         
