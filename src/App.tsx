import React, { useState } from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import Display from "./components/Display";
import NumPad from "./components/NumPad";

const App = () => {
    const [ currentNumber, setCurrentNumber ] = useState('0'),
          [ buffer, setBuffer ] = useState('0'),
          [ pendingOperation, setPendingOperation ] = useState(undefined);

    const numbers = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ],
          operations = [ 'Plus', 'Minus', 'Multiply', 'Divide', 'Equals' ];

    function handleCLick(val) {
        // Append a digit to the current number
        if (numbers.includes(val)) {
            if (currentNumber === '0') {
                setCurrentNumber(val);
            } else {
                setCurrentNumber(currentNumber + val);
            }
        } else

        // Add floating point
        if (val === "Point" && !currentNumber.includes(",")) {
            setCurrentNumber(currentNumber + ",");
        } else
        
        // Commit operation
        if (operations.includes(val)) {
            if (val==="Equals") {
                if (pendingOperation) {
                    let a = parseFloat(buffer),
                        b = parseFloat(currentNumber),
                        res;
                    if (pendingOperation==="Plus") {
                        res = a+b;
                    } else 
                    if (pendingOperation==="Minus") {
                        res = a-b;
                    } else 
                    if (pendingOperation==="Multiply") {
                        res = a*b;
                    } else 
                    if (pendingOperation==="Divide") {
                        res = a/b;
                    };
                    setCurrentNumber( ''+res );

                    /**
                     * In calculators pressing 'Equals' rapidly usually results in
                     * repeating the last operation, so maybe this part should be
                     * changed
                     */
                    setPendingOperation(undefined);
                }
            } else {
                setPendingOperation(val);
                setBuffer(currentNumber);
                setCurrentNumber('0');
            }
        } else

        // Delete current number
        if (val==="Del") { 
            setCurrentNumber('0');
        } else

        // Reset calculator
        if (val==="Reset") {
            setCurrentNumber('0');
            setPendingOperation(undefined);
        }
    }

    return(
        <div className="wrapper">
            <header className="container">
                <Header />
            </header>

            <main className="container">
                <Display 
                    value={currentNumber}
                />
                <NumPad 
                    handleClick={handleCLick}
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
  