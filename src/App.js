import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Libraries from "./components/Libraries";

import Navbar from "./components/Navbar";
// import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Book from "./pages/Book/Book";
import Contact from "./pages/Contact/Contact";

import bg from "./img/bg.png";

import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />

        <div>
          <div className="mt-4">
            <Switch>
              <Route exact path="/libraries" component={Libraries}></Route>
              <Route exact path="/about" component={About} />
              <Route exact path="/book" component={Book} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
