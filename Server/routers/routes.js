const express = require('express')
const router = express.Router()
const albumController = require('../controllers/albumController')

//Rutas para discos
router.get('/', albumController.getAlbumsByNombre)

module.exports = router