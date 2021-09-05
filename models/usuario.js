const { Schema, model} = require("mongoose");
const UsuarioSchema = Schema ({
    nombre: {
        type: String,
        require: [true,'El nombre es obligatorio']
    },
    apellido: {
        type: String,
        require: [true,'El apellido es obligatorio']
    },
    correo: {
        type: String,
        require: [true,'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        require: [true,'La contraseña es obligatoria']
    },
    rol: {
        type: String,

        default: 'user_rol',
        enum: ['user_rol', 'admin_rol']
    },
    estado: {
        type: Boolean,
        default: true
    }
})

module.exports = model('Usuario',UsuarioSchema)