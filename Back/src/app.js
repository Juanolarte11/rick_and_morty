const expres = require('express');
const axios = require('axios');

const app = expres()

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));

app.get('/rickandmorty/character/:id',(req, res) => {
    const { id } = req.params;
    axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.data)
        .then(data => {
            let characters = {
                id: data.id,
                image: data.image,
                name: data.name,
                gender: data.gender,
                species: data.species
            }
            res.status(200).send(characters)
        })
        .cath(err => res.status(400).send(err))
})

app.get('/rickandmorty/detail/:detailid',(req, res) => {
    const { detailid } = req.params;
    axios(`https://rickandmortyapi.com/api/character/${detailid}`)
        .then(response => response.data)
        .then(data => {
            let characters = {
                id: data.id,
                image: data.image,
                name: data.name,
                gender: data.gender,
                species: data.species,
                status: data.status,
                origin: data.origin.name
            }
            res.status(200).send(characters)
        })
        .cath(err => res.status(400).send(err))
})

app.get('/rickandmorty/fav', (req,res) => {

})