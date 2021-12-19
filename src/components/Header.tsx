import React from 'react'

function Header() {
    return (<>
        <h1>Calc</h1>
        <div>
            <div>
                <input type="radio" id="theme-1" name="drone" value="huey" checked />
                <label htmlFor="theme-1">1</label>
            </div>
            <div>
                <input type="radio" id="theme-2" name="drone" value="huey" checked />
                <label htmlFor="theme-2">2</label>
            </div>
            <div>
                <input type="radio" id="theme-2" name="drone" value="huey" checked />
                <label htmlFor="theme-2">3</label>
            </div>
        </div>
    </>)
}

export default Header
