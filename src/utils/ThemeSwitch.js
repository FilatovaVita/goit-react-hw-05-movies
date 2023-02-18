import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export const themes = {
  dark: "dark-content",
  light: "white-content",
};

export function ThemeSwitch () {
  const [theme, setTheme] = useState(() => {
    const storageTheme = JSON.parse(localStorage.getItem('theme'));
    if (storageTheme) {
      return storageTheme;
    } else {
    return themes.dark;}
  })

  const [darkMode, setDarkMode] = useState(true);



  function changeTheme (theme)  {
    setTheme(theme);
  };
  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.add('dark-content');
        break;
      case themes.dark:
      default:
        document.body.classList.remove('dark-content');
        break;
    }
    window.localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return (
      <div>
          <label style={{display: 'flex', alignItems: 'center', marginLeft: '5px'}}>
            {darkMode ? <FaMoon style={{ width: 30, height: 30 }} />: <FaSun style={{ width: 30, height: 30 }}/>  }
            <input style={{visibility: 'hidden'}}
              type="checkbox"
              id="checkbox-toggle"
              onClick={() => {
                setDarkMode(!darkMode);
                changeTheme(darkMode ? themes.light : themes.dark);
              }}
            />
          </label>
      </div>
  );
}
