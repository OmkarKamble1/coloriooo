import React from 'react';
import { FiCopy } from 'react-icons/fi';

function Copied() {
  return (
    <div className="copy dark:text-white dark:bg-[#202020] dark:border-gray-500 border-black border-[1px] flex gap-2 items-center w-[auto] fixed top-[4vh] right-[3vw] bg-slate-100 pl-4 pr-10 py-2 rounded-xl font-bold font-VarelaRound">
      <FiCopy size="3vh" />
      Copied
    </div>
  );
}

export default Copied;
