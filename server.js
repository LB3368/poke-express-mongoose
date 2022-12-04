require("dotenv").config
const express = require('express')
const app = express()
const PORT = 3000
const reactViews = require("express-react-views")
const mongoose = require("mongoose")
//set database to variable called pokemon
const Pokemon = require('./models/pokemon.js')


//Connection Mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once("open", () => {
    console.log("MongoDB connected")
})


// View
app.set("view engine", "jsx")
app.engine("jsx", reactViews.createEngine())


//Middleware
app.use((req, res, next) => {
    next()
})

// setting static files
app.use(express.static({ extended: false }))

// Controllers

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

// Index
app.get("/pokemon", (req, res) => {
    //res.render("Index", { pokemon: pokemon })
    pokemon.find({}, (error, allPokemon) => {
        if(!error) {
            res.status(200).render("Index", {
                pokemon: allPokemon
            })
        } else {
            res.status(400).send(error)
        }
    })
})

//New create a get route /pokemon that will res.send(pokemon)
app.get('/pokemon', (req, res) => {
    res.render("New")
})

//Create
app.post("/pokemon", (req, res) => {
    //pokemon.push(req.body)
    //res.redirect("/pokemon")
    Pokemon.create(req.body, (error, createdPokemon) => {
        if(!error) {
            res.status(200).redirect("/pokemon")
        } else {
            res.status(400).send(error)
        }
    })
})

// Show
app.get("/pokemon/:id", (req, res) => {
    //res.render("Show", {
        //pokemon: pokemon[req.params.id]
    Pokemon.findById(req.params.id, (error, foundPokemon) => {
        if(!error) {
            res.status(200).render("Show", {
                pokemon: foundPokemon
            })
        } else {
            res.status(400).send(error)
        }
    })
    })
    // console.log(pokemon[req.params.id])





app.listen(PORT, () => {
    console.log('listening')
})
