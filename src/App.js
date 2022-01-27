import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./component/Nav";
import React, { Component } from "react";
import HomeScreen from "./screens/HomeScreen";
import ProjectScreen from "./screens/ProjectScreen";
import ContactScreen from "./screens/ContactScreen";
import AboutScreen from "./screens/AboutScreen";
import CertificateScreen from "./screens/CertificateScreen";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Route path="/" component={HomeScreen} exact />
        <Route path="/projects" component={ProjectScreen} />
        <Route path="/certificate" component={CertificateScreen} />
        <Route path="/about" component={AboutScreen} />
        <Route path="/contact" component={ContactScreen} />
      </Router>
    );
  }
}
export default App;
