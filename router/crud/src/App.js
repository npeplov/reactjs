import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import NewPost from './components/NewPost';
import Post from './components/Post';
import PostsList from './components/PostsList';
import PostEdit from './components/PostEdit';
import ContentContext from './context/ContentContext';
import {useState} from 'react'

function App() {
  const [context, setContext] = useState([]);

  return (
    <ContentContext.Provider value={[context, setContext]}>
    <Router>
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/posts/new" className="btn">Создать пост</Link>
      </nav>
      <div>
        <Switch>
          <Route path="/posts/new" component={NewPost}></Route>
          <Route path="/posts/:id/edit" component={PostEdit}></Route>
          <Route path="/posts/:id" component={Post}></Route>
          <Route path="/" component={PostsList}></Route>
        </Switch>
      </div>
    </div>
    </Router>
    </ContentContext.Provider>
  );
}

export default App;
