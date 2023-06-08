"use strict";

// RICHIAMO LA FUNZIONE CREATE_APP DA VUE.JS
const {createApp} = Vue;

// FUNZIONE CREATE_APP
createApp({
    // FUNZIONE DATA CON OGGETTO RETURN
    data(){
        return{
            // DEFINIZIONE ARRAY DI OGGETTI CONTENENTI LE IMMAGINI E LE DIDASCALIE
            slides : [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                },
            
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                },
            
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                },
            
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                },
            
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
            activeImage : 0,
            autoPlay : true,
        }
    },
    // FUNZIONE CREATED
    created() {
        // RICHIAMO LA FUNZIONE START_AUTOPLAY
        this.startAutoplay();
    },
    // FUNZIONE METHODS
    methods: {
        prevImage(){
            // DECREMENTO IL CONTATORE DELL'INDICE
            this.activeImage--;

            // CONTROLLO CHE L'INDICE NON SIA ARRIVATO AL PRIMO ELEMENTO
            if(this.activeImage < 0){

                // RIPORTO L'INDICE ALL'ULTIMO ELEMENTO
                this.activeImage = this.slides.length - 1;
            }
        },

        nextImage(){
            // INCREMENTO IL CONTATORE DELL'INDICE
            this.activeImage++;

            // CONTROLLO CHE L'INDICE NON SIA ARRIVATO ALL'ULTIMO ELEMENTO
            if (this.activeImage > this.slides.length - 1){

                // RIPORTO L'INDICE AL PRIMO ELEMENTO
                this.activeImage = 0;
            }
        },

        clickImage(index){
            // ASSEGNO L'INDICE DELL'IMMAGINE CLICCATA ALLA VARIABILE ACTIVE_IMAGE
            this.activeImage = index;
        },

        startAutoplay(){
            // RICHIAMO LA FUNZIONE NEXT_IMAGE (SCORRE OGNI IMMAGINE VERSO AVANTI) OGNI 3 SECONDI
            this.autoPlay = setInterval(() => {
                this.nextImage();
            }, 3000);
        },

        stopAutoplay(){
            // STOPPO L'ESECUZIONE DELLA TIMING FUNCTION SET INTERVAL
            clearInterval(this.autoPlay);
        },
    }
}).mount('#app'); // COLLEGO LA FUNZIONE AL CONTAINER HTML