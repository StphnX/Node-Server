const recipes = require('../recipes.json');

const getSingleRecipe = (req, res) => {
    const {
        params: {id}
    } = req; 
    const recipe = findRecipe(id);
    recipe ? res.send(recipe) : res.status(404).json({msg: `Recipe with id of ${id} does not exist.`});
    console.log(recipe);
};

const findRecipe = id => {
    if (!id) return null;
    return recipes.find(recipe => recipe.id === id );
};
   

module.exports = getSingleRecipe;