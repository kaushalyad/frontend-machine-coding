import React from 'react'
import { useTheme } from './ThemeProvider';

const DarkMode = () => {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);
  return (
    <div style={{backgroundColor: theme=="dark"?"black":"white",width:"100vw",height:"100vh"}}>
      <h1>Dark Mode</h1>
      <button onClick={toggleTheme}>Dark</button>
      <button onClick={toggleTheme}>White</button>
    </div>
  )
}

export default DarkMode