const Album = require('../models/Album')

exports.getAlbumsByNombre = async(req, res) =>{
    try{
        
        const albums = await Album.find()
        res.json(albums)
        
    }catch(error){
        res.status(500).json({error: 'Error al obtener los datos'})
    }
}