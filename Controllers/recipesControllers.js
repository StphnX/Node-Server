const recipes = require('../recipes.json');

const getRecipes = (req, res) => {
    res.send(recipes);
    // console.log(recipes);
};


module.exports = getRecipes;