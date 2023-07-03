

const { createApp } = Vue;

createApp({

    data(){


        return{   
            slides : [
                {
                image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],

            activeIndex: 0
        }   
        
    },

    methods : {

        buttonUp(){
            alert('cliccato');
            
        },

        buttonDown(){
            alert('cliccato');
        },

        checkIndex() {

            return (this.activeIndex == 0 ? 'd_block' : 'd_none');
        }

    }

}).mount('#app');


// in teoria mi basterà capire come fare le singole cose del carosello in vanilla js 
// traducendole in vue, quindi alla fine sarà la stessa cosa, solo scritto in maniera diversa
// per ora mi basta capire cosa si traduce in cosa, quindi i "sinonimi" di ciò che ho scritto



// secondo me per cambiare le immagini bisogna mettere un "selettore" nell'html
// e poi cambierà direttramente la sorgente dell'immagine una volta cliccato il bottone
// senza creare nulla di nuovo...


//ps passare anche la classe active tra le thumbnails


//ho capito perchè, dato che l'indice risulta 0 lo applica a tutte indiscriminatamente
//devo trovare il modo di fargli capire che mi riferisco alla singola immagine