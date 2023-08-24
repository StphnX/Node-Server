
const express = require('express');
const path = require('path');
const addNewRecipe = require('../Controllers/newRecipeControllers.js');
const { Router } = require('express');

const newRecipeRouter = Router();

newRecipeRouter.route('/addRecipe').post(addNewRecipe)


module.exports = newRecipeRouter;