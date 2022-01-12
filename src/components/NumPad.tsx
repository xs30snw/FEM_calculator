import React from 'react'

function NumPad() {
    return (
        <section className='mainNumpad container rounded'>
            <button className="mainNumpadButton0 rounded keyNumsAndOps keyTextColor-1">
                0</button>
            <button className="mainNumpadButton1 rounded keyNumsAndOps keyTextColor-1">
                1</button>
            <button className="mainNumpadButton2 rounded keyNumsAndOps keyTextColor-1">
                2</button>
            <button className="mainNumpadButton3 rounded keyNumsAndOps keyTextColor-1">
                3</button>
            <button className="mainNumpadButton4 rounded keyNumsAndOps keyTextColor-1">
                4</button>
            <button className="mainNumpadButton5 rounded keyNumsAndOps keyTextColor-1">
                5</button>
            <button className="mainNumpadButton6 rounded keyNumsAndOps keyTextColor-1">
                6</button>
            <button className="mainNumpadButton7 rounded keyNumsAndOps keyTextColor-1">
                7</button>
            <button className="mainNumpadButton8 rounded keyNumsAndOps keyTextColor-1">
                8</button>
            <button className="mainNumpadButton9 rounded keyNumsAndOps keyTextColor-1">
                9</button>
            <button className="mainNumpadButtonPlus rounded keyNumsAndOps keyTextColor-1">
                +</button>
            <button className="mainNumpadButtonMinus rounded keyNumsAndOps keyTextColor-1">
                -</button>
            <button className="mainNumpadButtonMultiply rounded keyNumsAndOps keyTextColor-1">
                x</button>
            <button className="mainNumpadButtonDivide rounded keyNumsAndOps keyTextColor-1">
                /</button>
            <button className="mainNumpadButtonEquals rounded keyEquals keyTextColor-2">
                =</button>
            <button className="mainNumpadButtonPoint rounded keyNumsAndOps keyTextColor-1">
                .</button>
            <button className="mainNumpadButtonDelete rounded keyDelAndRes keyTextColor-2">
                DEL</button>
            <button className="mainNumpadButtonReset rounded keyDelAndRes keyTextColor-2">
                RESET</button>
        </section>
    )
}

export default NumPad
