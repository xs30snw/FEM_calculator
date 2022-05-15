import React from 'react';

function NumPadButton({value, handleClick}) {

    /**
     * Convert style class names to button text
     */
    const buttonText = 
        (value === 'Plus')     ? '+'     :
        (value === 'Minus')    ? '-'     :
        (value === 'Multiply') ? 'x'     :
        (value === 'Divide')   ? '/'     :
        (value === 'Point')    ? '.'     :
        (value === 'Equals')   ? '='     : 
        (value === 'Del')      ? 'DEL'   : 
        (value === 'Reset')    ? 'RESET' : 
            value;

    /**
     * Choose button type for styles
     */
    const buttonType =
        (value === 'Del' || value === 'Reset') ? 'keyDelAndRes' : 
        (value === 'Equals') ? 'keyEquals' :
            'keyNumsAndOps'; 

    return (<>
        <button
          className={"mainNumpadButton"+value + " rounded " + buttonType}
          onClick={() => handleClick(value)}
          >
            {buttonText}
        </button>
    </>)
}

export default NumPadButton;