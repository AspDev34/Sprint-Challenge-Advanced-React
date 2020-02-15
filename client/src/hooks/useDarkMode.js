import { useEffect, useState } from 'react';

// const useDarkMode = () => {

// const [theme, setTheme] = useState('light')

// useEffect(() => {
//     if (theme === 'light') {
//       window.localStorage.setItem('theme', 'dark')
//       setTheme('dark')
//     } else {
//       window.localStorage.setItem('theme', 'light')
//       setTheme('light')
//     }
//   }, [theme]
// )

// useEffect(() => {
//     const localTheme = window.localStorage.getItem('theme')
//     if (localTheme) {
//         setTheme(localTheme)
//     }
// }, [])

// return [theme, setTheme, ]

// }

const useDarkMode = () => {
  const [someValue, setSomeValue] = useState('darkMode');

  useEffect (() => {
      someValue ? document.querySelector('body').classList.add('dark-mode') : document.querySelector('body').classList.remove('dark-mode')
  }, [someValue])

  return [someValue, setSomeValue]
}

export default useDarkMode;