import React, { useContext } from 'react'
import { Theme, ThemeContext } from '../context/ThemeContext'

const MyPage = () => {
    const {theme, setTheme} = useContext(ThemeContext)
    return (
        <div>
            <button onClick={() => setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark)}>
                Switch to {theme} Theme
            </button>
        </div>
    )
}

export default MyPage