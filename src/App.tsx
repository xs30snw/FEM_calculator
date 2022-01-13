import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import Display from "./components/Display";
import NumPad from "./components/NumPad";

const App = () => {
    return(
        <div className="wrapper">
            <header className="container">
                <Header />
            </header>

            <main className="container">
                <Display />
                <NumPad />
            </main>

            <footer className="attribution container">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="#">xs30snw</a>.
            </footer>
        </div>
    )
};

ReactDOM.render(
    <App />,
    document.getElementById('root')  
);
  