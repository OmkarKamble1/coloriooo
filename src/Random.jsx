import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import ReactLoading from 'react-loading';

function Random({ copied }) {
  const [colors, setColors] = useState([]);
  const uri = 'https://x-colors.yurace.pro/api/random?number=10';
  const getColors = async () => {
    await axios.get(uri).then((res) => {
      setColors([...colors, ...res.data]);
      setLoading(false);
    });
  };
  const copy = (hex) => {
    console.log(hex);
    navigator.clipboard.writeText(hex);
    copied();
  };
  useEffect(() => {
    getColors();
  }, []);
  const [loading, setLoading] = useState(true);

  return (
    <div className="px-[3%] py-[1%] w-[100vw] font-VarelaRound relative">
      <a
        href="/color"
        className="float-right text-base text-slate-800 dark:text-slate-300"
      >
        Browse with selective color
      </a>
      <div className="select-none gap-4 font-bold cursor-default flex items-center text-[4.5vh]  w-[100vw] h-[7vh] font-VarelaRound">
        <div>
          <span className="hover:text-[5.5vh]  transition-all duration-150">
            R
          </span>
          <span className="hover:text-[5.5vh] transition-all duration-150">
            a
          </span>
          <span className="hover:text-[5.5vh] transition-all duration-150">
            n
          </span>
          <span className="hover:text-[5.5vh] transition-all duration-150">
            d
          </span>
          <span className="hover:text-[5.5vh] transition-all duration-150">
            o
          </span>
          <span className="hover:text-[5.5vh] transition-all duration-150">
            m
          </span>
        </div>
        <div>
          <span className="hover:text-[5.5vh] transition-all duration-150">
            s
          </span>
          <span className="hover:text-[5.5vh] transition-all duration-150">
            h
          </span>
          <span className="hover:text-[5.5vh] transition-all duration-150">
            a
          </span>
          <span className="hover:text-[5.5vh] transition-all duration-150">
            d
          </span>
          <span className="hover:text-[5.5vh] transition-all duration-150">
            e
          </span>
          <span className="hover:text-[5.5vh] transition-all duration-150">
            s
          </span>
        </div>
      </div>
      {loading ? (
        <ReactLoading
          className="mx-[auto]"
          type="bubbles"
          color="grey"
          height={100}
          width={100}
        />
      ) : (
        <>
          <div className="flex flex-wrap  justify-center dark:text-black">
            {colors.map((item, index) => (
              <div
                onClick={(e) => {
                  copy(e.currentTarget.id);
                }}
                id={item.hex}
                style={{ background: item.hex }}
                className="w-[230px] h-[150px] rounded-[1em] m-[13px] hover:scale-[1.16] hover:border-[6px] hover:border-white transition-all cursor-pointer p-4 hover:outline-[3px] hover:outline outline-[#c7c7c7]"
                key={index}
              >
                <div className="text-sm">
                  <p className="mb-1 font-bold">{item.hex}</p>
                  <p className="mb-1">{item.rgb}</p>
                  <p className="mb-1">{item.hsl}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center dark:text-black">
            <button
              onClick={getColors}
              className="hover:bg-slate-400 dark:bg-neutral-800 hover:dark:bg-neutral-700 dark:text-gray-200 transition-colors mt-[1%] w-[auto] p-5 h-[5vh] rounded-3xl bg-slate-300 font-bold flex items-center justify-center text-lg cursor-pointer  "
            >
              Load more <BiChevronDown />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Random;
