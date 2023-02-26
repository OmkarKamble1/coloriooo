import React from 'react';
import { useState, useEffect } from 'react';
import { BiSun, BiMoon } from 'react-icons/bi';

function Theme() {
  const [mode, setmode] = useState('l');
  const setTheme = () => {
    if (mode === 'l') {
      document.documentElement.classList.add('dark');
      setmode('d');
      localStorage.setItem('t', 'd');
    } else {
      document.documentElement.classList.remove('dark');
      setmode('l');
      localStorage.setItem('t', 'l');
    }
  };
  useEffect(() => {
    if (localStorage.getItem('t') === 'd') {
      setmode('d');
    } else {
      setmode('l');
    }
  }, []);
  return (
    <div
      className=" fixed right-3 z-10 top-4 rounded-[.7em] cursor-pointer"
      onClick={setTheme}
    >
      {mode === 'd' ? (
        <BiSun size="25px" color="white" />
      ) : (
        <BiMoon size="25px" color="black" />
      )}
    </div>
  );
}

export default Theme;
