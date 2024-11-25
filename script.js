// Script para alternar entre as categorias
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove classe ativa de todas as abas
            tabs.forEach(t => t.classList.remove('active'));
            // Adiciona classe ativa à aba clicada
            tab.classList.add('active');

            // Esconde todo o conteúdo
            contents.forEach(content => content.classList.remove('active'));
            // Mostra o conteúdo correspondente
            const category = tab.getAttribute('data-category');
            document.getElementById(category).classList.add('active');
        });
    });
});
