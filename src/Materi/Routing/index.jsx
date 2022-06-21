import Navigation from "./Navigation";
import { BrowserRouter as Router, Switch, Route }  from "react-router-dom";
import Home from "./Home";
import Service from "./Service";
import Client from "./Client";
import Contact from "./Contact";
import Post from "./Post";

const Routing = () => {
  return (
    <div>
      <Router>
      <Navigation />
        <Switch>
          <Route exact path="/" children={() => <Home />} /> 
          <Route path="/service" children={() => <Service />} /> 
          <Route path="/client" children={() => <Client />} /> 
          <Route path="/contact" children={() => <Contact />} /> 
          <Route path="/post/:id" children={() => <Post />} /> 
        </Switch>
      </Router>
    </div>
  )
}

export default Routing;