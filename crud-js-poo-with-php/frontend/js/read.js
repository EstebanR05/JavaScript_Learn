class read {
    view() {
        const url = "http://localhost/crud%20js%20poo%20with%20php/backend/php/";
        let empleados = document.getElementById("tableEmpleados");
        var data = ``;

        fetch(url)
            .then(r => r.json())
            .then((resp) => {
                resp.map(function (empleados, index, array) {
                    data += `
                    <tr>
                        <td>${empleados.id}</td>
                        <td>${empleados.nombre}</td>
                        <td>${empleados.correo}</td>
                    <td>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button onclick="new update(${empleados.id}).view()" class="btn btn-dark me-md-2" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button>
                            <button onclick="new Delete(${empleados.id}).view()" class="btn btn-danger" type="button">Borrar</button>
                        </div>
                    </td>
                    </tr>`;
                });
                return empleados.innerHTML = data;
            }).catch(console.log);
    };
}
