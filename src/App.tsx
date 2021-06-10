import React from "react";
import Routes from "./Routes";
import { AuthProvider } from "contexts";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes />
      </Router>
    </AuthProvider>
  );
}

export default App;
