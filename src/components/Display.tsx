import React from 'react'

function Display(props) {
    return (
        <section className='mainDisplay rounded'>
            <label className='mainDisplayLabel'>{props.value}</label>
        </section>
    )
}

export default Display
