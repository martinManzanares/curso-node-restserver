const { response } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');


const usuariosGet = (req,res = response) => {
    const params = req.query;

    res.json({
        msg: 'get API - Controlador'
    });
}

const usuariosPost = async (req,res) => {
    const { nombre, password, correo, rol } = req.body;
    const usuario = new Usuario({ nombre, correo, password, rol });

    // Encriptar la contraseña.
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt );

    // Guardar en BS.
    await usuario.save();

    res.status(201).json({
        msg: 'post API - Controlador',
        usuario
    });
}

const usuariosPut = (req,res) => {
    const { id } = req.params;

    res.status(400).json({
        msg: 'put API - Controlador',
        id
    });
}

const usuariosDelete = (req,res) => {
    res.json({
        msg: 'delete API - Controlador'
    });
}



module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}