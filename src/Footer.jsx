import React from 'react';
import { BsSuitHeartFill } from 'react-icons/bs';

function Footer() {
  return (
    <div className="dark:text-white dark:bg-[#0a0a0c] w-[100vw] border-t-2 border-slate-400 bg-slate-300 h-[50px] flex items-center justify-center gap-2 mt-6 absolute bottom-0">
      <h1 className="font-bold">Made with</h1>
      <BsSuitHeartFill />
      <h1 className="font-Pacifico">Colorioo</h1>
    </div>
  );
}

export default Footer;
