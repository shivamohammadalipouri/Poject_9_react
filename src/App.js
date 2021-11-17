
import './App.css';
import {BrowserRouter, Route, Switch, Redirect, Link, useHistory} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Weblog from './Pages/Weblog/Weblog';
import Hello from './Pages/Hello/Hello';
import Detail from './Pages/Detail/Detail';



function App() {

  const history = useHistory();


  return (

    <div>

      <ul>

        <li><Link to="/">Home</Link></li>
        <li onClick={() => history.push("/H")}>Hello</li>
        <li><Link to="/weblog">weblog</Link></li>
        
      </ul>

      <Switch>


        <Route path="/" exact>
          <Home/>
        </Route>


        <Route path="/weblog" exact>
          <Weblog/>
        </Route>


        <Route path="/H" exact>
          <Hello/>
        </Route>


        <Route path="/weblog/:id" exact>
          <Detail/>
        </Route>

        
        
        {/*<Route path="*">
          <Redirect to="/" />
        </Route>*/}

        <Route path="/weblog/:id" component={Weblog} exact/>


      </Switch>

    </div>


  );
}

export default App;
