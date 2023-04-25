import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDishes } from 'redux/dishes/dishesSlice';
import { fetchRecipe } from 'redux/recipe/recipeSlice';
import Recipe from './Recipe';

const Dishes = () => {
  const dispatch = useDispatch();
  const { dishes, status, error } = useSelector((state) => state.dishes);
  const [selectedDish, setSelectedDish] = useState(null);

  useEffect(() => {
    dispatch(fetchDishes());
  }, [dispatch]);

  const handleDetailClick = (id) => {
    dispatch(fetchRecipe(id));
    setSelectedDish(id);
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <main>
      <div className="row">
        {dishes.map((dish) => (
          <div key={dish.idMeal} className="col-md-4 mt-3 mb-3">
            <div className="card">
              <img src={dish.strMealThumb} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{dish.strMeal}</h5>
                <button type="button" onClick={() => handleDetailClick(dish.idMeal)}>Detail</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedDish && <Recipe id={selectedDish} />}
    </main>
  );
};

export default Dishes;
