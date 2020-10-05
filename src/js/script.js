document.addEventListener("DOMContentLoaded", function(event) {
    console.log("Ça fonctionne!!!");

    var hamburgers = document.querySelectorAll('.hamburger');


    for(let i = 0; i < hamburgers.length; i++) {
        var hamburger = hamburgers[i];
        hamburger.addEventListener('click', openMenu);

    }

    function openMenu(evt) {
        evt.preventDefault();

        var cible = evt.currentTarget;


        if(cible.classList.contains('open')){
            cible.classList.remove('open');
        } else {
            cible.classList.add('open');
        }

    }

});