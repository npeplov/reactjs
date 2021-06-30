import React from 'react'
import {useContext} from 'react'
import { Link } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext'

export default function RecipesList({match}) {
  const recipes = useContext(RecipesContext);

  return (
    <div>
      <h2>Рецепты</h2>
      <ul>
        {recipes.map((item) => (
          <li key={item.id}>
            <Link to={`/recipes/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
      {/* <Route path={`${match.url}/new`} component={NewRecipe}/> */}
    </div>
  );
}
