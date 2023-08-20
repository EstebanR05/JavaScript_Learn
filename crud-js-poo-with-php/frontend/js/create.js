class create {
    view() {
        const url = "http://localhost/crud%20js%20poo%20with%20php/backend/php/";
        let name = document.getElementById("nameCreate");
        let email = document.getElementById("emailCreate");

        var dataSend = {
            nombre: name.value,
            correo: email.value
        };

        fetch(url + "?insertar=1", { method: "POST", body: JSON.stringify(dataSend) })
            .then(r => r.json())
            .then((resp) => { console.log("insertados") })
            .catch(console.log);
    };
}