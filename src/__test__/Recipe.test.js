import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchRecipe } from 'redux/recipe/recipeSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchRecipe', () => {
  it('should fetch a recipe and update the store', async () => {
    const store = mockStore({});
    const id = '52772';
    await store.dispatch(fetchRecipe(id));
    const actions = store.getActions();
    expect(actions[0].type).toEqual('recipe/fetchRecipe/pending');
    expect(actions[1].type).toEqual('recipe/fetchRecipe/fulfilled');
    expect(actions[1].payload.idMeal).toEqual(id);
  });
});
