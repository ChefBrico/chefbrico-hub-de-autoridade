// ================================================================= //
// ===== ARQUIVO SCRIPT.JS MESTRE E DEFINITIVO - CHEFBRICO V3.0 ==== //
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
        // (Código para rolagem suave do carrossel)
    }

    // --- MOTOR 3: FILTROS DO CARDÁPIO INTELIGENTE COM CURADORIA (V2.0) ---
    const allFilterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-grid .product-card');
    const curatorshipBox = document.getElementById('curatorship-box');
    const curatorshipTitle = document.getElementById('curatorship-title');
    const curatorshipText = document.getElementById('curatorship-text');

    // Banco de dados com os textos da curadoria
    const curatorshipContent = {
        'jantar-rapido': {
            title: "Para um Jantar Rápido e Delicioso",
            text: "Selecionei aqui os pratos que resolvem sua noite em menos de 20 minutos, com muito sabor e zero complicação."
        },
        'marmita-inteligente': {
            title: "Para uma Marmita Saudável e Prática",
            text: "Estas são as minhas soluções favoritas para um almoço nutritivo no trabalho. Fáceis de preparar e deliciosas para reaquecer."
        },
        'momento-especial': {
            title: "Para um Momento Especial a Dois",
            text: "Crie uma noite inesquecível com estes pratos gourmet. A praticidade fica por minha conta, o romance por conta de vocês!"
        },
        'para-familia': {
            title: "Aprovados pela Família (e pelas Crianças!)",
            text: "Estes são os pratos que fazem sucesso com todos em casa, unindo o sabor que as crianças amam com a nutrição que os pais procuram."
        },
        'performance': {
            title: "Para sua Performance e Dieta",
            text: "Comida como combustível. Aqui estão as opções com foco em proteína, leveza e baixo carboidrato para te ajudar a alcançar seus objetivos."
        }
    };

    if (allFilterButtons.length > 0 && productCards.length > 0) {
        allFilterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                allFilterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                // Lógica da Caixa de Curadoria
                if (curatorshipBox && filter !== 'all' && curatorshipContent[filter]) {
                    curatorshipTitle.textContent = curatorshipContent[filter].title;
                    curatorshipText.textContent = curatorshipContent[filter].text;
                    curatorshipBox.style.display = 'block';
                } else if (curatorshipBox) {
                    curatorshipBox.style.display = 'none';
                }

                // Lógica dos Filtros
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
