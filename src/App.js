import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Libraries from "./components/Libraries";

import Navbar from "./components/Navbar";

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
        <div className="container">
          <div className="mt-4">
            <Switch>
              <Route path="/libraries">
                <Libraries />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
