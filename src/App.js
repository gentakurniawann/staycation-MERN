import React from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "assets/scss/style.scss";
import LandingPage from "pages/LandingPages";
import DetailsPage from "pages/DetailsPage";
import Checkout from "pages/Checkout";
import BrowseBy from "pages/BrowseBy";
function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/browse-by" component={BrowseBy} />
        <Route exact path="/properties/:id" component={DetailsPage} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
      {/* </Router> */}
      
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
