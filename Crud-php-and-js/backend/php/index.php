<?php

require 'flight/Flight.php';

Flight::register('db', 'PDO', array('mysql:host=localhost;dbname=prueba_tecnica_dev','root',''));

//method GET
Flight::route('GET /empleado', function () {
    $sentencia = Flight::db()->prepare("SELECT * FROM `empleado`");
    $sentencia->execute();
    $datos = $sentencia->fetchAll();
    Flight::json($datos);
});

//method POST
Flight::route('POST /empleado', function () {
    $nombre = (Flight::request()->data->nombre);
    $email = (Flight::request()->data->email);
    $sexo = (Flight::request()->data->sexo);
    $area_id = (Flight::request()->data->area_id);
    $boletin = (Flight::request()->data->boletin);
    $descripcion = (Flight::request()->data->descripcion);
    $sql = "INSERT INTO empleado (nombre, email, sexo, area_id, boletin, descripcion) VALUES (?, ?, ?, ?, ?, ?)";
    $sentencia = Flight::db()->prepare($sql);
    $sentencia-> bindParam(1, $nombre);
    $sentencia-> bindParam(2, $email);
    $sentencia-> bindParam(3, $sexo);
    $sentencia-> bindParam(4, $area_id);
    $sentencia-> bindParam(5, $boletin);
    $sentencia-> bindParam(6, $descripcion);
    $sentencia->execute();
    Flight::jsonp(["Empleado agregado"]);
});

//method DELETE
Flight::route('DELETE /empleado', function () {
    $id = (Flight::request()->data->id);
    $sql = "DELETE FROM empleado WHERE id=?";
    $sentencia = Flight::db()->prepare($sql);
    $sentencia-> bindParam(1, $id);
    $sentencia->execute();
    Flight::jsonp(["Empleado Borrado"]);
});

//method PUT
Flight::route('PUT /empleado', function () {

    $id = (Flight::request()->data->id);
    $nombre = (Flight::request()->data->nombre);
    $email = (Flight::request()->data->email);
    $sexo = (Flight::request()->data->sexo);
    $area_id = (Flight::request()->data->area_id);
    $boletin = (Flight::request()->data->boletin);
    $descripcion = (Flight::request()->data->descripcion);

    $sql = "UPDATE empleado SET nombre=?, email=?, sexo=?, area_id=?, boletin=?, descripcion=? WHERE id=?";
    $sentencia = Flight::db()->prepare($sql);
    
    $sentencia-> bindParam(1, $nombre);
    $sentencia-> bindParam(2, $email);
    $sentencia-> bindParam(3, $sexo);
    $sentencia-> bindParam(4, $area_id);
    $sentencia-> bindParam(5, $boletin);
    $sentencia-> bindParam(6, $descripcion);
    $sentencia-> bindParam(7, $id);

    $sentencia->execute();
    Flight::jsonp(["Empleado Modificado"]);
});

//GET a un solo empleado
Flight::route('GET /empleado/@id', function ($id) {
    
    $sentencia = Flight::db()->prepare("SELECT * FROM `empleado` WHERE id=?");
    $sentencia-> bindParam(1, $id);   

    $sentencia->execute();
    $datos = $sentencia->fetchAll();
    Flight::json($datos);
});

Flight::start();
