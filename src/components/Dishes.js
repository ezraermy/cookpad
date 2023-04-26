import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDishes } from 'redux/dishes/dishesSlice';
import { fetchRecipe } from 'redux/recipe/recipeSlice';
import { useNavigate } from 'react-router-dom';
import './styles/Dishes.css';

const Dishes = () => {
  const dispatch = useDispatch();
  const { dishes, status, error } = useSelector((state) => state.dishes);
  const [selectedDish, setSelectedDish] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchDishes());
  }, [dispatch]);

  const handleDetailClick = (id) => {
    if (id === selectedDish) {
      return;
    }
    dispatch(fetchRecipe(id));
    setSelectedDish(id);
    navigate(`/recipe?id=${id}`);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredDishes = dishes.filter((dish) => {
    const dishName = dish.strMeal.toLowerCase();
    const dishLetter = dish.strMeal.charAt(0).toLowerCase();
    const query = searchQuery.toLowerCase();
    return dishName.includes(query) || dishLetter === query;
  });

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
      <div className="search-bar">
        <input
          className="search-term"
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      <div className="dish-container">

        {filteredDishes.map((dish) => (
          <div key={dish.idMeal}>
            <div className="dish-list">
              <button type="button" onClick={() => handleDetailClick(dish.idMeal)}>
                <img src={dish.strMealThumb || 'default-image.jpg'} alt="pic" className="dish-image" />
              </button>
              <h5 className="dish-title">{dish.strMeal}</h5>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Dishes;
