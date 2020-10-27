import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import SplashForm from "./splash/splashForm";
import LogInForm from "./logIn/logInContainer";
import SignUpForm from "./signUp/signUpContainer";
import { Authorized, ProtectedRoute } from "../util/routeUtil";
import NotebooksIndexForm from "./notebooks/notebooksIndexContainer";
import NotebookShowForm from "./notebooks/notebookShowContainer";
import AllNotesContainer from "../components/notes/allNotesContainer";
import TagIndexContainer from "../components/tags/tagsIndexContainer";

import Modal from "./modal/modal";

const App = () => (
  <>
    <Modal />
    <Switch>
      <ProtectedRoute exact path="/notebooks" component={NotebooksIndexForm} />
      <ProtectedRoute exact path="/allnotes" component={AllNotesContainer} />
      <ProtectedRoute
        path="/username/:notebook_id"
        component={NotebookShowForm}
      />
      <Authorized exact path="/login" component={LogInForm} />
      <Route exact path="/" component={SplashForm} />
      <ProtectedRoute exact path="/tags" component={TagIndexContainer} />
      <Authorized exact path="/signup" component={SignUpForm} />
    </Switch>
  </>
);
export default App;
