import React from 'react';

import NumPadButton from './NumPadButton';

function NumPad(props) {

    /**
     * Array of button names to map through and create NumPad
     */
    const buttonNames = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Point', 
        'Plus', 'Minus', 'Multiply', 'Divide',
        'Equals',
        'Del', 'Reset'
    ];

    return (
        <section className='mainNumpad rounded'>
            {
                buttonNames.map((item, index) =>
                    <NumPadButton
                        key={'button-'+index}
                        value={item}
                        handleClick={props.handleClick}
                    />
                )
            }
        </section>
    )
}

export default NumPad
