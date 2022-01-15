import React from 'react'

function NumPadButton(props) {

    /**
     * Convert style class names to button text
     */
    const buttonText = 
        (props.value === 'Plus')     ? '+'     :
        (props.value === 'Minus')    ? '-'     :
        (props.value === 'Multiply') ? 'x'     :
        (props.value === 'Divide')   ? '/'     :
        (props.value === 'Point')    ? '.'     :
        (props.value === 'Equals')   ? '='     : 
        (props.value === 'Del')      ? 'DEL'   : 
        (props.value === 'Reset')    ? 'RESET' : 
            props.value;

    /**
     * Choose button type for styles
     */
    const buttonType =
        (props.value === 'Del' || props.value === 'Reset') ? 'keyDelAndRes' : 
        (props.value === 'Equals') ? 'keyEquals' :
            'keyNumsAndOps'; 

    return (<>
        <button
          className={"mainNumpadButton"+props.value + " rounded " + buttonType}
          onClick={() => props.handleClick(props.value)}
          >
            {buttonText}
        </button>
    </>)
}

export default NumPadButton
