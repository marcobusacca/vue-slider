PROBLEMA:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.

BONUS:
1 - al click su una thumb, visualizzare in grande l'immagine corrispondente;

2 - applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente;

3 - quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce.


SOLUZIONE:

- Dichiarare in JavaScript la Constante contenente la funzione "createApp";

- Richiamare la funzione "createApp";

- Richiamare il Container html con "mount";

- Inserire dentro createApp il Data con l'oggetto Return;

- Inserire dentro createApp la Funzione Methods;


- Inserire dentro Return l'Array di oggetti "slides";

- Inserire dentro Return una Variabile contenente l'indice delle immagine attiva (activeImage);


- Usare la direttiva v-bind per assegnare la source dell'immagine nel DOM HTML;

- Usare la direttiva v-text per assegnare il title dell'immagine nel DOM HTML;

- Usare la direttiva v-text per assegnare la didascalia (text) dell'immagine nel DOM HTML;


- Usare la direttiva v-for per creare le thumb con le immagini;

- Usare la direttiva v-bind e il metodo ternario per impostare la classe "active" delle thumb;


- Usare la direttiva v-on:click sul Previous Button per richiamare la Funzione "prevImage";

- Definire la funzione "prevImage" dentro Methods;


- Usare la direttiva v-on:click sul Next Button per richiamare la Funzione "nextImage";

- Definire la funzione "nextImage" dentro Methods.


SOLUZIONE BONUS 1:

- Usare la direttiva v-on:click sull'Image delle Thumbnail per richiamare la Funzione "clickImage";

- Definire la funzione "clickImage" dentro Methods.


SOLUZIONE BONUS 2:

- Creare la Funzione Created();

- Dentro la Funzione Created() usare la Timing Function setInterval(), con l'Arrow Function Anonima;

- Dentro l'Arrow Function Anonima richiamare la Funzione nextImage (ogni 3 secondi).

