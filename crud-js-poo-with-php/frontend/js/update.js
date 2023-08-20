class update {
    constructor(id) {
        this.id = id;
    }
    view() {
        const url = "http://localhost/crud%20js%20poo%20with%20php/backend/php/";
        let name = document.getElementById("nameUpdate");
        let email = document.getElementById("emailUpdate");

        var dataSend = {
            nombre: name.value,
            correo: email.value
        };

        fetch(url + "?insertar=" + this.id, { method: "POST", body: JSON.stringify(dataSend) })
            .then(r => r.json())
            .then((resp) => { console.log("insertados") })
            .catch(console.log);
    };
}