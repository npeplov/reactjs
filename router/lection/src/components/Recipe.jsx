import React, { useContext } from 'react'
import RecipesContext from '../context/RecipesContext';

export default function Recipe({match}) {
  const recipes = useContext(RecipesContext)
  const recipe = recipes.find(item => item.id === +match.params.id)

  return (
    <div>
      <h1>{`Рецепт №${match.params.id}`}</h1>
      <p>
        {recipe ? recipe.name : 'No recipe found'}        
      </p>
    </div>
  )
}
