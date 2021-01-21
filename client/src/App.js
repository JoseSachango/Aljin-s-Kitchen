import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";
import NavBar from "./components/NavBar";
// import Loading from "./components/Loading";
// import ExternalApi from "./views/ExternalApi";
import { useAuth0 } from "@auth0/auth0-react";
import { Container } from "reactstrap";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

function App() {

  function App() {
    const {
      isLoading,
      isAuthenticated,
      error,
      user,
      loginWithRedirect,
      logout,
    } = useAuth0();

    // if (isLoading) {
    //   return <div>Loading...</div>;
    // }
    if (error) {
      return <div>Oops... {error.message}</div>;
    }

  // if (isLoading) {
  //   return <Loading />;
  // }

  if (isAuthenticated) {
    return (
    <Router>
      <div>
      Hello {user.name}{' '}
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log out
        </button>
      </div>
    </Router>
  );
     } else {
    return <button onClick={loginWithRedirect}>Log in</button>
  }
}}

export default App;
