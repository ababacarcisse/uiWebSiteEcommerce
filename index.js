const title =document.createElement('h2');
title.textContent = 'Hello ';
const main=document.querySelector('main');
main.appendChild(title);
const divCarte = document.createElement('div');
divCarte.classList.add('carte');
const balise ="<h2>how are you </h2>";
divCarte.innerHTML = balise;
main.append(divCarte);