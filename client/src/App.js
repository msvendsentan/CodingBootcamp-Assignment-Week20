import React, { Component } from "react";
import Header from "./components/wrappers/Header";
import ModulesContainer from "./components/wrappers/ModulesContainer";

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <ModulesContainer />
            </div>
        );
    }
}

export default App;
