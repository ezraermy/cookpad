import { configureStore } from '@reduxjs/toolkit';
import dishesReducer from 'redux/dishes/dishesSlice';
import recipeReducer from 'redux/recipe/recipeSlice';

const store = configureStore({
  reducer: {
    dishes: dishesReducer,
    recipe: recipeReducer,
  },
});

export default store;
