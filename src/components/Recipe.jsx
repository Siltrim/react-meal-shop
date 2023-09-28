import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getMealById } from '../api';
import Preloader from './Preloader';

const Recipe = () => {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, [id]);

  return (
    <>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className="recipe">
          <img src={recipe.strMealThumb} alt="" />
          <h1>{recipe.strMeal}</h1>
          <h6>Category: {recipe.strCategory}</h6>
          {recipe.strCategory && <h6>{recipe.strCategory}</h6>}
          {recipe.strArea ? <h6>Area {recipe.strArea}</h6> : null}
          <p>{recipe.strInstructions}</p>

          <table className="centered">
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map((key) => {
                if (key.includes('Ingredient') && recipe[key]) {
                  return (
                    <tr key={key}>
                      <td>{recipe[key]}</td>
                      <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>

          {recipe.strYoutube ? (
            <div className="row">
              <h5 style={{ margin: '2rem' }}>Video Recipe</h5>
              <iframe
                title={id}
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
                allowFullScreen
              />
            </div>
          ) : null}
        </div>
      )}
      <Link to={`/category/${recipe.strCategory}`} className="btn">
        Go back
      </Link>
    </>
  );
};

export default Recipe;
