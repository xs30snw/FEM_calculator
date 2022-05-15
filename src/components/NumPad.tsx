import React, { useState } from 'react';
import NumPadButton from './NumPadButton';

function NumPad({setDisplayNumber}) {
    const [ buffer, setBuffer ] = useState('0'),
          [ currentNumber, setCurrentNumber ] = useState('0'),
          [ pendingOperation, setPendingOperation ] = useState(undefined),
          [ isPrevEquals, setIsPrevEquals ] = useState(false);

    /**
     * Array of button names to map through and create NumPad
     */
    const buttonNames = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Point', 
        'Plus', 'Minus', 'Multiply', 'Divide',
        'Equals',
        'Del', 'Reset'
    ];

    const numbers = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ],
          operations = [ 'Plus', 'Minus', 'Multiply', 'Divide', 'Equals' ];

    function handleClick(val: string) {
        let cur: string = currentNumber,
            disp: string = undefined;

        // Append a digit to the current number
        if (numbers.includes(val)) {
            if (cur === '0') {
                cur = val;
            } else {
                cur = cur + val;
            }
        } else

        // Add floating point
        if (val === "Point" && !cur.includes(".")) {
            cur = cur + ".";
        } else
        
        // Commit operation
        if (operations.includes(val)) {
            if (val==="Equals") {
                if (pendingOperation) {
                    console.log(isPrevEquals);
                    let a: number = parseFloat(buffer),
                        b: number = parseFloat(cur),
                        res: number;

                    /**
                     * Heuristics for repeating equals operation;
                     * commutative property didn't work for
                     * a-b and a/b
                     */
                    if (!isPrevEquals) {
                        setBuffer(cur);
                    } else {
                        let c = a;
                        a = b;
                        b = c;
                    }
                    
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
                    cur = ''+res;
                }
            setIsPrevEquals(true);
            } else {
                setIsPrevEquals(false);
                setPendingOperation(val);
                setBuffer(cur);
                disp = buffer;
                cur = '0';
            }
        } else

        // Delete current number
        if (val==="Del") { 
            cur = '0';
        } else

        // Reset calculator
        if (val==="Reset") {
            cur = '0';
            setPendingOperation(undefined);
        }

        setCurrentNumber(cur);
        if (!disp) setDisplayNumber(cur.replace('.', ','));
    }

    return (
        <div className='mainNumpad rounded'>
            {
                buttonNames.map(item =>
                    <NumPadButton
                        key={'btn'+item}
                        value={item}
                        handleClick={handleClick}
                    />
                )
            }
        </div>
    )
}

export default NumPad;