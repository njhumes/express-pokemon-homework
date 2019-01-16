const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PokemonList = require('./models/pokemon');

app.use(express.static('public'));


app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {
        pokemonKey: PokemonList
    })
});

app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {
        pokemonKey: PokemonList[req.params.id]
    })
});



app.listen(3000, () => {
    console.log('Express Pokemon HW Server is listening on port 3000');
});

