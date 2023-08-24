const express = require('express');
const path = require('path');
const getSingleRecipe = require('../Controllers/recipeController.js');
const { Router } = require('express');

const recipeRouter = Router();

recipeRouter.route('/recipe/:id').get(getSingleRecipe)


module.exports = recipeRouter;
