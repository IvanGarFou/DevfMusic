const express = require('express')
const router = express.Router()
const albumController = require('../controllers/albumController')

//Rutas para discos
router.get('/', albumController.getAlbums)
router.get('/:id', albumController.getById)
router.post('/create', albumController.createAlbum)
router.delete('/:id', albumController.deleteAlbum)

module.exports = router