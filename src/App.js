import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout';
import Dishes from 'components/Dishes';
import Recipe from 'components/Recipe';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dishes />} />
        <Route path="recipe" element={<Recipe />} />
      </Route>
    </Routes>
  );
}

export default App;
