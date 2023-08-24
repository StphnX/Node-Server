const recipes = require('../recipes.json');
const path = require('path');
const fs = require('fs');
const client =  require('../db/elephantsql.js')




// const findRecipe = id => {
//     if (!id) return null;
//     return recipes.find(recipe => recipe.id === id); // Fix: Change recipe.id to id
// };

// const getRecipes = (req, res) => {
//     res.json(recipes);
// };

// ORIGINAL VERSION USING THE RECIPES.JSON FILE
// const addNewRecipe = (req, res) => {
//     const {
//         body: { id, name, description, ingredients, img, group }
//     } = req;

//     const recipe = findRecipe(id);
//     if (recipe) return res.status(403).json({ msg: 'Recipe already exists' });
//     const newRecipe = { id: recipes.length + 1, name, description, ingredients, img, group };
//     recipes.push(newRecipe);
//     res.json(newRecipe);
// };

const addNewRecipe = (req, res) => {
    const {
        body: { id, name, description, ingredients, img, group_name }
    } = req;

    const queryString = `INSERT INTO recipes (id, name, group_name, img, description, ingredients)
    VALUES (
        '${id}',
        '${name}',
        '${group_name}',
        '${img}',
        '${description}',
        '${JSON.stringify(ingredients)}'
        );`

        console.log(queryString);

    try {
        client.query(queryString, (err, result) => {
          if (err) {
            return res.status(500).json({msg: `Unable to add recipe: ${err.message}`})
          }
          res.status(201).send('Recipe added successfully');
        });
      } catch (error) {
        res.status(500).json({ error: 'Recipe load failed' });
      }

    // res.send(req.body);

    
};

module.exports = addNewRecipe;


// const client = require('../db/elephantsql.js')




// const addNewRecipe = async (req, res) => {
//     const {
//         body: { id, name, description, ingredients, img, group }
//     } = req;

//     try {
//         const recipe = await findRecipe(id);

//         if (recipe) {
//             return res.status(403).json({ msg: 'Recipe already exists' });
//         }

//         const newRecipe = {
//             id: recipes.length + 1, // You might want to change this if you're using database-generated IDs
//             name,
//             description,
//             ingredients,
//             img,
//             group
//         };
//         // client.query(`SELECT * FROM recipes WHERE id = ${id};`, (err, result) => {
//         const queryString =
//             INSERT INTO recipes (id, name, description, ingredients, img, group)
//         VALUES($1, $2, $3, $4, $5, $6)
//         RETURNING *;
//         ;

//         const values = [
//             newRecipe.id,
//             newRecipe.name,
//             newRecipe.description,
//             newRecipe.ingredients,
//             newRecipe.img,
//             newRecipe.group_name
//         ];

//         const result = await client.query(queryString, values);
//         const insertedRecipe = result.rows[0];

//         res.json(insertedRecipe);
//     } catch (error) {
//         console.error('Error adding recipe to database:', error);
//         res.status(500).json({ msg: 'Error adding recipe to database' });
//     }
// };

// module.exports = addNewRecipe;