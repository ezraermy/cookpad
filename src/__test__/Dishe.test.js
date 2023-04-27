import dishesReducer, { fetchDishes } from 'redux/dishes/dishesSlice';

describe('dishesSlice', () => {
  it('should return the initial state', () => {
    expect(dishesReducer(undefined, {})).toEqual({
      dishes: [],
      status: 'idle',
      error: null,
    });
  });

  it('should handle fetchDishes.fulfilled', () => {
    const initialState = {
      dishes: [],
      status: 'idle',
      error: null,
    };

    const action = {
      type: fetchDishes.fulfilled.type,
      payload: [
        {
          idMeal: '1',
          strMeal: 'Meal 1',
          strMealThumb: 'https://www.themealdb.com/images/media/meals/meal1.jpg',
        },
        {
          idMeal: '2',
          strMeal: 'Meal 2',
          strMealThumb: 'https://www.themealdb.com/images/media/meals/meal2.jpg',
        },
      ],
    };

    const state = dishesReducer(initialState, action);

    expect(state).toEqual({
      dishes: [
        {
          idMeal: '1',
          strMeal: 'Meal 1',
          strMealThumb: 'https://www.themealdb.com/images/media/meals/meal1.jpg',
        },
        {
          idMeal: '2',
          strMeal: 'Meal 2',
          strMealThumb: 'https://www.themealdb.com/images/media/meals/meal2.jpg',
        },
      ],
      status: 'succeeded',
      error: null,
    });
  });
});
