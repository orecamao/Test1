const { request, response } = require("express");
const Usuario = require("../models/usuario");

const usuariosPost = async (req = request, res = response)=>{
    const  {nombre, correo, password,apellido} = req.body;
    const usuario = new Usuario({nombre,correo,password,apellido})
    
    try {
  
        const usuario2 = await usuario.save();

        if (!usuario2){
            return res.status(400).json({
                status: 'El usuario ya existe',
                usuario2
            })   
        }

        return res.status(200).json({
            status: 'USUARIO GUARDADO',
            usuario
        })


    } catch (error) {
        return res.status(500).json({
            status: 'Error en el servidor',
            error
        })
    }
    return res.status(200).json({
        status: 'Cierto'
    })
}


module.exports = {
    usuariosPost
}