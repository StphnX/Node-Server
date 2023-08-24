require("dotenv").config()
const express = require('express');
const app = express();
const cors = require('cors');
const recipes = require("./recipes.json")
const recipesRoute = require('./Routes/recipesRoutes');
const newRecipeRoute = require('./Routes/newRecipeRoutes');
const recipeRoute = require('./Routes/recipeRoute')
const bodyParser = require('body-parser')



const port = process.env.PORT;





app.use(cors());
app.use(bodyParser.json())
app.use(recipesRoute);
app.use(newRecipeRoute);
app.use(recipeRoute)








app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});