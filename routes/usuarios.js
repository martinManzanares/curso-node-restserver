const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { esRolValido, emailExiste } = require('../helpers/dbValidators');


const { usuariosGet, 
    usuariosPut, 
    usuariosPost,
    usuariosDelete } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet );

router.put('/:id', usuariosPut );

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser mas de 6 letras').isLength({ min: 6 }),
    check('correo').custom( emailExiste ),
    check('rol').custom( esRolValido ),
    validarCampos
],usuariosPost );


router.delete('/', usuariosDelete );



module.exports = router;