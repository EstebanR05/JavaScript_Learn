var url = "http://localhost/Crud_php_and_js/backend/php/empleado";
var aplication = new function () {

  //variables
  this.tableEmpleados = document.getElementById("empleados");

  //metodos
  this.seeDataTable = function () {

    var datos = "";

    // fetch(url)
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.error(error));

    datos = "<td>Esteban</td><td>e05072003@gmail.com</td><td>masculino</td><td>ventas</td><td>si</td><td></td><td></td>";

    return this.tableEmpleados.innerHTML = datos;
  }

}

//ejecutar
aplication.seeDataTable();