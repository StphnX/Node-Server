require("dotenv").config()
const express = require('express');
const app = express();
const recipes = require("./recipes.json")




const port = process.env.PORT;






app.get('/', (req, res) => {
    res.send(recipes)
})







app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});