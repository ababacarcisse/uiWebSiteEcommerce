// app.js

document.addEventListener('DOMContentLoaded', function () {
    // Sélectionnez les éléments nécessaires du DOM
    const navToggle = document.querySelector('.nav-toggle');
    const navbar = document.querySelector('.navbar');

    // Ajoutez un écouteur d'événements pour le bouton de bascule de la navigation
    navToggle.addEventListener('click', function () {
        navbar.classList.toggle('show');
    });
});
