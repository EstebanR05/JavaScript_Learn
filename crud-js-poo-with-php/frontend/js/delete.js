class Delete {
    constructor(id) {
        this.id = id;
    }

    view() {
        const url = "http://localhost/crud%20js%20poo%20with%20php/backend/php/";
        fetch(url + "?borrar=" + this.id)
            .then(r => r.json())
            .then((resp) => { console.log("Eliminado!") })
            .catch(console.log);
    };
}