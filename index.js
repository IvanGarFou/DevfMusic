const express = require('express')
const app = express()

const connectDataBase = require('./Server/data/database')
const albumRoutes = require('./Server/routers/routes')

//Conexion a la base de datos MongoDB
connectDataBase();

//Middleware para manejar el JSON
app.use(express.json())

app.use('/discografia', albumRoutes)


const PORT = 3000
app.listen(PORT, () =>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})