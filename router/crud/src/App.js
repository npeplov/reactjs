import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NewPost from './components/NewPost';
import Post from './components/Post';
import PostsList from './components/PostsList';

function App() {

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/posts" component={PostsList}></Route>
        <Route exact path="/posts/new" component={NewPost}></Route>
        <Route path="/posts/:id" component={Post}></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
