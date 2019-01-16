const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PokemonList = require('./models/pokemon');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))

// Index Route
app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {
        pokemonKey: PokemonList
    })
});

// New Route
app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs')
})
// Post Route - New
app.post('/pokemon', (req, res) => {
    PokemonList.push(req.body);
    res.redirect('/pokemon')
})

// Show Route
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {
        pokemonKey: PokemonList[req.params.id],
        i: req.params.id
    })
});

// Edit Route
app.get('/pokemon/:id/edit', (req, res) => {
    res.render('edit.ejs', {
        pokemonEdit: PokemonList[req.params.id],
        index: req.params.id
    })
})
// PUT Route - Edit
app.put('/pokemon/:id', (req, res) => {
    PokemonList[req.params.id] = req.body;
    res.redirect('/pokemon')
})

// Delete Route
app.delete('/pokemon/:id', (req, res) => {
    PokemonList.splice(req.params.id, 1);
    res.redirect('/pokemon')
})


// Port 
app.listen(3000, () => {
    console.log('Express Pokemon HW Server is listening on port 3000');
});

module.exports = app;