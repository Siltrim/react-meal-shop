import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import Preloader from './Preloader';
import MealList from './MealList';

const Category = () => {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <>
      <Link to="/" className="btn">
        Go back
      </Link>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
};

export default Category;
