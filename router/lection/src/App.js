import './App.css';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom'
import RecipesList from './components/RecipesList';
import NewRecipe from './components/NewRecipe'
import RecipesProvider from './context/RecipesProvider';
import Recipe from './components/Recipe';
import Page404 from './components/Page404';

function App() {
  const activeStyle = {
    color: 'black'
  }
  return (
    <RecipesProvider>
    <Router>
    <div className="App">
      <nav>
        <NavLink exact to="/recipes/new" activeStyle={activeStyle}>Новый рецепт</NavLink>
      </nav>
      <RecipesList />

      <Switch>
        <Route path='/recipes/new' component={NewRecipe}/>
        <Route path="/recipes/:id" component={Recipe}/>
        <Route path="*" component={Page404}/>
      </Switch>

    </div>
    </Router>
    </RecipesProvider>
  );
}

export default App;
