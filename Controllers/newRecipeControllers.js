const recipes = require('../recipes.json');
const path = require('path');
const fs = require('fs');


// const Data = fs.readFileSync(filePath, 'utf8');
// const filePath = path.join(__dirname, '../recipes.json');

const findRecipe = id => {
    if (!id) return null;
    return recipes.find(recipe => recipe.id === id); // Fix: Change recipe.id to id
};

const getRecipes = (req, res) => {
    res.json(recipes);
};

const addNewRecipe = (req, res) => {
    const {
        body: { id, name, description, ingredients, img, group }
    } = req;

    const recipe = findRecipe(id);
    if (recipe) return res.status(403).json({ msg: 'Recipe already exists' });
    const newRecipe = { id: recipes.length + 1, name, description, ingredients, img, group };
    recipes.push(newRecipe);
    res.json(newRecipe);
};

module.exports = addNewRecipe;