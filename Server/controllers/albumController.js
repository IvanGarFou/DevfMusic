const Album = require('../models/Album')

exports.deleteAlbum = async (req, res) => {
    try{

        const album = await Album.findById(req.params.id)

        if(!album){
            return res.status(404).json({error: 'Album no encontrado'})
        }

        await album.remove()
        res.status(200).json({message: 'Album eliminado exitosamente'})

    }catch(error){
        res.status(500).json({error: 'Error al poder eliminar el album'})
    }
}

exports.getById = async (req, res) =>{
    try{
        const album = await Album.findById(req.params.id)
        if(!album){
            return res.status(404).json({error: 'Album no encontrado'})
        }
        res.json(album)
    }catch(error){
        res.status(404).json({error: 'Error al obtener los datos'})
    }
}

exports.getAlbums = async(req, res) =>{
    try{
        const albums = await Album.find()
        res.json(albums)
        
    }catch(error){
        res.status(500).json({error: 'Error al obtener los datos'})
    }
}

//Controlador para crear los albums de musica
exports.createAlbum = async (req, res) => {
    try{
        const {nombre, artista, descripcion, imagen_url} = req.body;
        const newAlbum = new Album({
            nombre,
            artista,
            descripcion,
            imagen_url,
        })
        const savedAlbum = await newAlbum.save()

        res.status(201).json(savedAlbum)

    }catch(error){
        res.status(500).json({error: 'Error al crear los albums'})
    }
}