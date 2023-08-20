class Pelicula {

    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    reproducirPelicula(){
       return `Reproduciendo ${this.name}`;
    }

}

class Serie extends Pelicula{

    constructor(name, id, cap) {
        super(name, id);
        this.cap = cap;
    }

    reproducirSerie(){
        return `reproduciendo ${this.name} y estas en el capitulo ${this.cap}`;
    }
}

let pelicula1 = new Pelicula('esteban', 1).reproducirPelicula();
let serie1 = new Serie("serieEsteban", 2, 5).reproducirSerie();
console.log(pelicula1);
console.log(serie1);