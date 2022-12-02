const { response } = require('express')

const usuariosGet = (req,res = response) => {
    const params = req.query;

    res.json({
        msg: 'get API - Controlador'
    });
}

const usuariosPost = (req,res) => {
    const body = req.body;

    res.status(201).json({
        msg: 'post API - Controlador',
        body
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