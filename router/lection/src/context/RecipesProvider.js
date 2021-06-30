/* eslint-disable no-unused-vars */
import {useState} from "react"
import RecipesContext from "./RecipesContext"

export default function RecipesProvider(props) {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      name: 'Plov'
    },
    {
      id: 2,
      name: 'Shawerma'
    },
    {
      id: 3,
      name: 'Fuagra'
    },
  ])

  return (
    <RecipesContext.Provider value={recipes}>
      {props.children}
    </RecipesContext.Provider>
  )
}