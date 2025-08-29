// ================================================================= //
// ===== ARQUIVO SCRIPT.JS MESTRE E DEFINITIVO - CHEFBRICO V5.3 ==== //
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
            let isDown = false; let startX; let scrollLeft;
            carousel.addEventListener('mousedown', (e) => { isDown = true; carousel.style.cursor = 'grabbing'; startX = e.pageX - carousel.offsetLeft; scrollLeft = carousel.scrollLeft; });
            carousel.addEventListener('mouseleave', () => { isDown = false; carousel.style.cursor = 'grab'; });
            carousel.addEventListener('mouseup', () => { isDown = false; carousel.style.cursor = 'grab'; });
            carousel.addEventListener('mousemove', (e) => { if (!isDown) return; e.preventDefault(); const x = e.pageX - carousel.offsetLeft; const walk = (x - startX) * 2; carousel.scrollLeft = scrollLeft - walk; });
        });
    }

    // --- MOTOR 3: FILTROS DO CARDÁPIO INTELIGENTE (V5.3 - CORRIGIDO) ---
    // A LINHA ABAIXO FOI CORRIGIDA PARA ENCONTRAR A GRADE DE PRODUTOS CORRETAMENTE
    const productGrid = document.querySelector('.product-grid'); 
    
    if (productGrid) {
        const allFilterButtons = document.querySelectorAll('.filter-btn');
        const productCards = document.querySelectorAll('.product-grid .product-card');
        const curatorshipBox = document.getElementById('curatorship-box');
        const curatorshipTitle = document.getElementById('curatorship-title');
        const curatorshipText = document.getElementById('curatorship-text');

        const curatorshipContent = {
            'jantar-rapido': { title: "Para um Jantar Rápido e Delicioso", text: "Selecionei aqui os pratos que resolvem sua noite em menos de 20 minutos, com muito sabor e zero complicação." },
            'marmita-inteligente': { title: "Para uma Marmita Saudável e Prática", text: "Estas são as minhas soluções favoritas para um almoço nutritivo no trabalho. Fáceis de preparar e deliciosas para reaquecer." },
            'momento-especial': { title: "Para um Momento Especial a Dois", text: "Crie uma noite inesquecível com estes pratos gourmet. A praticidade fica por minha conta, o romance por conta de vocês!" },
            'para-familia': { title: "Aprovados pela Família (e pelas Crianças!)", text: "Estes são os pratos que fazem sucesso com todos em casa, unindo o sabor que as crianças amam com a nutrição que os pais procuram." },
            'performance': { title: "Para sua Performance e Dieta", text: "Comida como combustível. Aqui estão as opções com foco em proteína, leveza e baixo carboidrato para te ajudar a alcançar seus objetivos." },
            'trilha-viagem': { title: "O Sabor que Te Acompanha em Qualquer Aventura", text: "Para o Trilheiro do Cerrado ou o Viajante Airbnb: comida de verdade que não pesa na mochila, não precisa de refrigeração e garante sua nutrição longe de casa." }
        };

        function applyFilter(filterValue) {
            allFilterButtons.forEach(btn => {
                if (btn.getAttribute('data-filter') === filterValue) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });

            if (curatorshipContent[filterValue]) {
                curatorshipTitle.textContent = curatorshipContent[filterValue].title;
                curatorshipText.textContent = curatorshipContent[filterValue].text;
                curatorshipBox.style.display = 'block';
            } else {
                curatorshipBox.style.display = 'none';
            }

            productCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category').includes(filterValue)) {
                    card.classList.remove('hide');
                } else {
                    card.classList.add('hide');
                }
            });
        }

        allFilterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                applyFilter(filter);
            });
        });
        
        const urlParams = new URLSearchParams(window.location.search);
        const filterFromURL = urlParams.get('filtro');

        if (filterFromURL && document.querySelector(`.filter-btn[data-filter="${filterFromURL}"]`)) {
            applyFilter(filterFromURL);
        } else {
            const allButton = document.querySelector('.filter-btn[data-filter="all"]');
            if (allButton) {
                allButton.classList.add('active'); // Garante que o botão 'Todos' comece ativo
                applyFilter('all');
            }
        }
    }

    // --- MOTOR 4: MENU HAMBÚRGUER MOBILE ---
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('header .main-nav');
    if (mobileNavToggle && mainNav) {
        mobileNavToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }
});
