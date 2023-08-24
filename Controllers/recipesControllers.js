const recipes = require('../recipes.json');
const client = require('../db/elephantsql.js')

// const getRecipes = (req, res) => {
//     res.send(recipes);
//     // console.log(recipes);
// };

const getRecipes = (req, res) => {
    try {
        client.query(`SELECT * FROM recipes;`, (err, result) => {
          if (err) {
            return res.status(404).send('Error running query: ' + err.message);
          }
          res.status(201).send(result.rows);
        });
      } catch (error) {
        res.status(400).json({ error: 'Recipe not found' });
      }
};


module.exports = getRecipes;