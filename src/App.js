import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import EventDashboard from "./components/events/EventDashboard";
import Home from "./components/home/Home";

import Navbar from "./components/nav/Navbar";
import Profile from "./components/profile/Profile";
import Register from "./components/register/Register";



function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
          <Route path={"/(.+)"} render={() => (
            <>
              <Navbar />
              <div className="container mx-auto ">
                <Route path="/dashboard" exact component={EventDashboard} />
                <Route path="/profile" exact component={Profile} />

              </div>
            </>
          )} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
