import React, {Suspense,lazy} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import Home from './Home';
// import Chart from './Chart';
import "../styles/App.css";
const Home = lazy(() => import('./Home'));
const Chart = lazy(() => import('./Chart'));
const App = (props) => {
  return(
  <React.Fragment>
    <Router>
    <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Redirect exact from='/' to='/home' />
      <Route component={Home} path='/home'/>
      <Route component={Chart} path='/chart' />
    </Switch>
    </Suspense>
    </Router>
  </React.Fragment>
  )
}
export default App;