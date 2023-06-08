PROBLEMA:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.


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