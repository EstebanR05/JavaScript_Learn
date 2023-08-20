var aplication = new function () {
    //variables principal´s
    this.table = document.getElementById("dataTable");

    this.nombre = document.getElementById("nombre");
    this.apellido = document.getElementById("apellido");
    this.edad = document.getElementById("edad");
    this.telefono = document.getElementById("telefono");
    this.correo = document.getElementById("correo");
    this.direccion = document.getElementById("direccion");

    this.dataObject = [1, "Esteban", "Restrepo", 19, 3116686210, "e05072003@gmail.com", "carrera 7c bis #84-11"];

    //method
    this.addForm = function () {
        console.log(this.nombre.value,
            this.apellido.value,
            this.edad.value,
            this.telefono.value,
            this.correo.value,
            this.direccion.value);
    }

    this.seeDataTable = function () {
        var dataSend = '<td>' + this.dataObject[0] + '</td>' +
            '<td>' + this.dataObject[1] + '</td>' +
            '<td>' + this.dataObject[2] + '</td>' +
            '<td>' + this.dataObject[3] + '</td>' +
            '<td>' + this.dataObject[4] + '</td>' +
            '<td>' + this.dataObject[5] + '</td>' +
            '<td>' + this.dataObject[6] + '</td>';

        return this.table.innerHTML = dataSend;
    }
}

aplication.seeDataTable();