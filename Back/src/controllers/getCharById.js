const axios = require("axios")

// const getCharById = async (req, res) => {
//     const {data} = req.params
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(responce => responce.data)
//     .then((data) => {
//         let character = {
//             id: data.id,
//             image: data.image,
//             name: data.name,
//             gender: data.gender,
//             species: data.species
//         }
//         res.writeHead(200,{"Content-type": "application/json"})
//         res.end(JSON.stringify(character));
//     })
//     .catch((error) => {
//         res.writeHead(500,{"Content-type":"text/plain"})
//         res.end(error.message)
//     })  
// }
const axios = require("axios");
const url = 'https://rickandmortyapi.com/api/character/';

const getCharById =async (req, res) => {
    const { id } = req.params;
    try {
       const result= await axios(`${url}${id}`);
       const characterApi=result.data;
            const character = {
                id: characterApi.id,
                image: characterApi.image,
                name: characterApi.name,
                gender: characterApi.gender,
                species: characterApi.species
            }
            res.status(200).json(character);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}


module.exports = {
    getCharById
}