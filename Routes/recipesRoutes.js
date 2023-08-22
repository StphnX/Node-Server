
const express = require('express');
const path = require('path');
const getRecipes = require('../Controllers/recipesControllers.js');
const { Router } = require('express');

const recipesRouter = Router();

recipesRouter.route('/recipes').get(getRecipes)


module.exports = recipesRouter;



