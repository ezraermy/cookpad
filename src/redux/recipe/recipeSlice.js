import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRecipe = createAsyncThunk('recipe/fetchRecipe', async (id) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await response.json();
  return data.meals[0];
});

const recipeSlice = createSlice({
  name: 'recipe',
  initialState: {
    recipe: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipe.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchRecipe.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        recipe: action.payload,
      }))
      .addCase(fetchRecipe.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export default recipeSlice.reducer;
