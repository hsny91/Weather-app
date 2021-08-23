import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./components/searchPage";
import HomePage from "./components/homePage";
import MapPage from "./components/map/mapPage";
import NavBar from "./components/navBar"

function App() {
  return (
    <Router>
      <NavBar/>
      <div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/search" exact component={SearchPage} />
         <Route path="/map" exact component={MapPage} /> 
      </Switch>
      </div>
      </Router>
  );
}

export default App;
