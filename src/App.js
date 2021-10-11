import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './Page/login';
import Register from './Page/register';
import Home from './Page/home';
import Forget from './Page/forget';
import Repass from './Page/repass';
import Changepass from './Page/changePass';
import Product from './Page/product';
import Add from './Page/add';
import Edit from './Page/edit';
import Dashboard from './Page/DashBoard';

function App() {
  return (
    <Router>
      
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/forget" component={Forget} />
        <Route exact path="/changepass" component={Changepass} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/add" component={Add} />
        <Route exact path="/edit" component={Edit} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/reset/:token"  >
          <Repass />
          </Route>
        {/* <Route exact path="/reset/:id" component={Reset} /> */}
      </Switch>
    </Router>
    
  );
}

export default App;
