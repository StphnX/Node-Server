require("dotenv").config()
const express = require('express');
const app = express();
const recipes = require("./recipes.json")
const recipesRoute = require('./Routes/recipesRoutes');



const port = process.env.PORT;






app.use(recipesRoute);







app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});