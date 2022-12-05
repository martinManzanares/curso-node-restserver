const Rol = require('../models/rol');
const Usuario = require('../models/usuario');

const esRolValido = async ( rol = '' ) => {
    const existeRol = await Rol.findOne({ rol });
    if ( !existeRol ) {
        throw new Error(`El rol ${ rol } no está registrado en la BD`)
    }
}

const emailExiste = async ( correo = '' ) => {
    // Verificar si correo existe.
    const existeEmail = await Usuario.findOne({ correo });
    if ( existeEmail ) {
        throw new Error(`El correo: ${ correo } ya esta registrado`);
    }
}

module.exports = {
    esRolValido,
    emailExiste
}