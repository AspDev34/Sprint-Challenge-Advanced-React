import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const DarkButton = () => {
  const [someValue, setSomeValue] = useDarkMode(false);

  const toggleTheme = e => {
    e.preventDefault();
    setSomeValue(!someValue);
  }
  return (
    <div className="dark-mode__toggle">
      <button type="button" onClick={toggleTheme} className={someValue ? 'toggle toggled' : 'toggle'}>
        Dark/Light Mode
      </button>
    </div>
  )
}

export default DarkButton;