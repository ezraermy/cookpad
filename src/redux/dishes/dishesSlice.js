import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDishes = createAsyncThunk('dishes/fetchDishes', async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
  const data = await response.json();
  return data.meals.slice(0, 10);
});

const dishesSlice = createSlice({
  name: 'dishes',
  initialState: {
    dishes: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDishes.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchDishes.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        dishes: action.payload,
      }))
      .addCase(fetchDishes.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export default dishesSlice.reducer;
