import React, { useState } from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import Display from "./components/Display";
import NumPad from "./components/NumPad";

const App = () => {
    if (!localStorage.theme) localStorage.theme = '1';
    document.documentElement.setAttribute('data-theme', "theme-"+localStorage.theme);
    const [ displayNumber, setDisplayNumber ] = useState('0');   

    return(
        <div className="wrapper">
            <header className="container">
                <Header />
            </header>

            <main className="container">
                <Display 
                    value={displayNumber}
                />
                <NumPad
                    setDisplayNumber={setDisplayNumber}
                />
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