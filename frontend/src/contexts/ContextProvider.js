import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false
};

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);    /* Pour éviter que le menu reste perma ouvert ou fermé lors du resize */
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');    /*DarkMode ou LightMode */
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);   /* Burger menu active ou pas  */
  const [isClicked, setIsClicked] = useState(initialState);  /*  Navbar nom de l'élément cliqué  */

  const setMode = (e) => {
    setCurrentMode(e.target.value);  /* J'accède à la valeur avec  e.target.value. */
    localStorage.setItem('themeMode', e.target.value);    /* La méthode setItem() de l'interface Storage, lorsque lui sont passées le duo clé-valeur, les ajoute à l'emplacement de stockage, sinon elle met à jour la valeur si la clé existe déjà. */
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

  return (
    <StateContext.Provider value={{ currentColor, currentMode, activeMenu, screenSize, setScreenSize, handleClick, isClicked, initialState, setIsClicked, setActiveMenu, setCurrentColor, setCurrentMode, setMode, setColor, themeSettings, setThemeSettings }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);