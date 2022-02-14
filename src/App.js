import './App.css';
import { BrowserRouter,  Route, Switch} from 'react-router-dom';
import Nav from './components/Nav';
import Login from './screens/Login';
import Register from './screens/Register';
import CategoryDetails from './screens/CategoryDetails';
import Today from './screens/Today';
import NewTask from './screens/NewTask';
import NewCategory from './screens/NewCategory'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <h1>Tasker</h1>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <Route path='/Today' exact component={Today} />
        <Route path='/newTask' exact component={NewTask} />
        <Route path='/newCategory' exact component={NewCategory} />
        <Route path='/categoryDetails' exact component={CategoryDetails} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
