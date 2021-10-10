import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './Page/login';
import Register from './Page/register';
import Home from './Page/home';
import Forget from './Page/forget';
import Repass from './Page/repass';
import Changepass from './Page/changePass';
import Product from './Page/product';
import Addedit from './Page/addEdit';

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
        <Route exact path="/addedit" component={Addedit} />
        <Route exact path="/reset/:token"  >
          <Repass />
          </Route>
        {/* <Route exact path="/reset/:id" component={Reset} /> */}
      </Switch>
    </Router>
    
  );
}

export default App;
