import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "./components/Container"
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";
// import NavBar from "./components/Auth0NavBar";
//import Loading from "./components/Loading";
// import ExternalApi from "./views/ExternalApi";
import { useAuth0 } from "@auth0/auth0-react";
// import { Container } from "reactstrap";

// fontawesome
// import initFontAwesome from "./utils/initFontAwesome";
// initFontAwesome();

function App() {

 const {isLoading} = useAuth0();
 
 if (isLoading) return <div>Loading...</div>
    return (
    <Router>
      <div>
        <Route exact path="/" component={Container} />
      </div>
    </Router>
  );
    
  
}

export default App;
