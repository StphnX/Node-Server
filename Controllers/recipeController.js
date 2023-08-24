const recipes = require('../recipes.json');
const client = require('../db/elephantsql.js')

// const getSingleRecipe = (req, res) => {
//     const {
//         params: {id}
//     } = req; 
//     const recipe = findRecipe(id);
//     recipe ? res.send(recipe) : res.status(404).json({msg: `Recipe with id of ${id} does not exist.`});
//     console.log(recipe);
// };

const getSingleRecipe = (req, res) => {
    const {
        params: {id}
    } = req; 
    try {
        client.query(`SELECT * FROM recipes WHERE id = ${id};`, (err, result) => {
          if (err) {
            return res.status(404).json({msg: `Recipe with id of ${id} does not exist. ${err.message}`})
          }
          if (result.rows.id == null) {
            return res.status(404).json({msg: `Recipe with id of ${id} does not exist.`})
          }
          console.log(result)
          res.status(201).send(result.rows);
        });
      } catch (error) {
        res.status(400).json({ error: 'Recipe not found' });
      }
};

const findRecipe = id => {
    if (!id) return null;
    return recipes.find(recipe => recipe.id === id );
};
   

module.exports = getSingleRecipe;