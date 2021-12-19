import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import Display from "./components/Display";
import NumPad from "./components/NumPad";

const App = () => {
    return(
        <div className="wrapper">
            <header>
                <Header />
            </header>

            <main>
                <Display />
                <NumPad />
            </main>

            <footer className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="#">Your Name Here</a>.
            </footer>
        </div>
    )
};

ReactDOM.render(
    <App />,
    document.getElementById('root')  
);
  