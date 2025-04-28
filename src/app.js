import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


let pronombre = ['el', 'mi', 'yo'];
let adjetivo = ['hermoso', 'intolerable'];
let sustantivo = ['juego', 'tele'];
let extension = ['.com', '.cl', '.py', '.arg'];

let get_html = document.getElementById('listaDominios');

window.onload = function Dominios() {
    for (let a = 0; a < pronombre.length; a++) {
        for (let b = 0; b < adjetivo.length; b++) {
            for (let c = 0; c < sustantivo.length; c++) {
                for (let d = 0; d < extension.length; d++) {
                    let domain = pronombre[a] + adjetivo[b] + sustantivo[c] + extension[d];

                    
                    let domainListItem = document.createElement('li');
                    domainListItem.textContent = domain;
                  
                    get_html.appendChild(domainListItem);

                    console.log(domain); 
                }
            }
        }
    }
}


Dominios();