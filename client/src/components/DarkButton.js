import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const DarkButton = () => {
  const [ theme, toggleTheme ] = useDarkMode()
  return (
    <div
      style={{
        background: theme === 'dark' ? '#000' : '#fff',
        color: theme === 'dark' ? '#fff' : '#000',
      }}
    >
      <button type="button" onClick={toggleTheme}>
        Switch theme
      </button>
    </div>
  )
}

export default DarkButton;