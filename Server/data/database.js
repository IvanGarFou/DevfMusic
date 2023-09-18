const mongoose = require('mongoose')

async function connectDataBase() {
    try{
        await mongoose.connect('mongodb+srv://ivangarciafou:ivangarciafou@cluster0.70u6jko.mongodb.net/DevfMusic?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Conexion a la base de datos establecida')
    }catch(error){
        console.log('Error en la conexion a la database', error)
    }
}

module.exports = connectDataBase