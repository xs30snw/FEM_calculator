import React from 'react';

function Header() {
    /**
     * As 'data-theme' attribute takes values 'theme-1', 'theme-2' or 'theme-3' from the radio group
     * CSS :root gets different custom color properties based on the choice
     */
    const onRadioChange = () => {
        let themeToggle = document.querySelector('input[name="themeToggle"]:checked') as HTMLInputElement;
        document.documentElement.setAttribute('data-theme', themeToggle.value);
    };

    return (<>
        <h1>calc</h1>
        <div className='headerTheme'>
            <div className="headerThemeNumbers">
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </div>
            <div className="headerThemeLabel">
                <p>THEME</p>
            </div>

            <div className="headerThemeToggle">
                <input type="radio" id="theme-1" name="themeToggle" value="theme-1" onChange={onRadioChange}/>
                <label htmlFor="theme-1"></label>
                <input type="radio" id="theme-2" name="themeToggle" value="theme-2" onChange={onRadioChange}/>
                <label htmlFor="theme-2"></label>
                <input type="radio" id="theme-3" name="themeToggle" value="theme-3" onChange={onRadioChange}/>
                <label htmlFor="theme-3"></label>
                <div className='headerThemeToggleMovingLabel'></div>
            </div>
        </div>
    </>)
}

export default Header
