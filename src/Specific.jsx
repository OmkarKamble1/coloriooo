import React, { useState, useEffect } from 'react';
import { FaDice } from 'react-icons/fa';
import axios from 'axios';
import { SyncLoader } from 'react-spinners';

function Specific({ copied }) {
  const [Rcolors, setRColors] = useState([]);
  const [Lcolors, setLColors] = useState([]);
  const [Dcolors, setDColors] = useState([]);
  const [select, setSelect] = useState(null);
  const [loading, setLoading] = useState(true);

  const getRcolors = async (color) => {
    await axios
      .get(`https://x-colors.yurace.pro/api/random/${color}?number=10`)
      .then((res) => {
        setRColors([...res.data]);
      });
  };

  const getLcolors = async (color) => {
    await axios
      .get(
        `https://x-colors.yurace.pro/api/random/${color}?number=10&type=light`
      )
      .then((res) => {
        setLColors([...res.data]);
      });
  };

  const getDcolors = async (color) => {
    await axios
      .get(
        `https://x-colors.yurace.pro/api/random/${color}?number=10&type=dark`
      )
      .then((res) => {
        setDColors([...res.data]);
        setLoading(false);
      });
  };

  const getColors = async (color, type) => {
    if (type === 'r') {
      getRcolors(color);
    } else if (type === 'l') {
      getLcolors(color);
    } else if (type === 'd') {
      getDcolors(color);
    } else {
      getRcolors(color);
      getLcolors(color);
      getDcolors(color);
    }
  };

  const copy = (hex) => {
    console.log(hex);
    navigator.clipboard.writeText(hex);
    copied();
  };

  return (
    <div className="px-[3%] py-[1%] w-[100vw] font-VarelaRound">
      {' '}
      <a
        href="/"
        className="float-right atext-base text-slate-800 dark:text-slate-300"
      >
        Home
      </a>
      <div>
        <div className="select-none gap-4 font-bold cursor-default flex items-center text-[4.5vh] h-[8vh] w-[100vw] font-VarelaRound">
          <div>
            <span className="hover:text-[5.5vh]  transition-all duration-150">
              S
            </span>
            <span className="hover:text-[5.5vh] transition-all duration-150">
              e
            </span>
            <span className="hover:text-[5.5vh] transition-all duration-150">
              l
            </span>
            <span className="hover:text-[5.5vh] transition-all duration-150">
              e
            </span>
            <span className="hover:text-[5.5vh] transition-all duration-150">
              c
            </span>
            <span className="hover:text-[5.5vh] transition-all duration-150">
              t
            </span>
          </div>
          <div>
            <span className="hover:text-[5.5vh] transition-all duration-150">
              c
            </span>
            <span className="hover:text-[5.5vh] transition-all duration-150">
              o
            </span>
            <span className="hover:text-[5.5vh] transition-all duration-150">
              l
            </span>
            <span className="hover:text-[5.5vh] transition-all duration-150">
              o
            </span>
            <span className="hover:text-[5.5vh] transition-all duration-150">
              r
            </span>
          </div>
        </div>

        <div className="mt-3 flex justify-between ">
          <div
            onClick={() => {
              getColors('red');
              setSelect('red');
            }}
            className="w-[7.5vw] h-[8vh] bg-[linear-gradient(135deg,#ff8989,red)] rounded-xl cursor-pointer hover:scale-125 transition-all "
          ></div>
          <div
            onClick={() => {
              getColors('orange');
              setSelect('orange');
            }}
            className="w-[7.5vw] h-[8vh] bg-[linear-gradient(135deg,#ffdc9d,rgb(255_165_0))] rounded-xl cursor-pointer hover:scale-125 transition-all"
          ></div>
          <div
            onClick={() => {
              getColors('yellow');
              setSelect('yellow');
            }}
            className="w-[7.5vw] h-[8vh] bg-[linear-gradient(135deg,#ffffc3,rgb(255_255_0))] rounded-xl cursor-pointer hover:scale-125 transition-all"
          ></div>
          <div
            onClick={() => {
              getColors('navy');
              setSelect('navy');
            }}
            className="w-[7.5vw] h-[8vh] bg-[linear-gradient(135deg,#8282ff,rgb(0_0_128))]  rounded-xl cursor-pointer hover:scale-125 transition-all"
          ></div>
          <div
            onClick={() => {
              getColors('blue');
              setSelect('blue');
            }}
            className="w-[7.5vw] h-[8vh]  bg-[linear-gradient(135deg,#8b8bff,rgb(0_0_255))] rounded-xl cursor-pointer hover:scale-125 transition-all"
          ></div>
          <div
            onClick={() => {
              getColors('aqua');
              setSelect('aqua');
            }}
            className="w-[7.5vw] h-[8vh] bg-[linear-gradient(135deg,#eaffff,rgb(0_255_255))] rounded-xl cursor-pointer hover:scale-125 transition-all"
          ></div>
          <div
            onClick={() => {
              getColors('green');
              setSelect('green');
            }}
            className="w-[7.5vw] h-[8vh] bg-[linear-gradient(135deg,#7cc87c,rgb(0_128_0))] rounded-xl cursor-pointer hover:scale-125 transition-all"
          ></div>
          <div
            onClick={() => {
              getColors('lime');
              setSelect('lime');
            }}
            className="w-[7.5vw] h-[8vh] bg-[linear-gradient(135deg,#c5ffc5,rgb(0_255_0))] rounded-xl cursor-pointer hover:scale-125 transition-all"
          ></div>
          <div
            onClick={() => {
              getColors('purple');
              setSelect('purple');
            }}
            className="w-[7.5vw] h-[8vh] bg-[linear-gradient(135deg,#d18dd1,rgb(128_0_128))] rounded-xl cursor-pointer hover:scale-125 transition-all"
          ></div>
          <div
            onClick={() => {
              getColors('pink');
              setSelect('pink');
            }}
            className="w-[7.5vw] h-[8vh] bg-[linear-gradient(135deg,#ffe8ec,rgb(255_192_203))] bg-[rgb(255_192_203)] rounded-xl cursor-pointer  hover:scale-125 transition-all"
          ></div>
        </div>
      </div>
      {loading ? (
        <div className="w-[100%] flex flex-col justify-center h-[50vh] items-center">
          <SyncLoader color="rgb(93, 103, 115)" size="15px" />
          <h1 className="m-5 font-bold text-[2.5vw] text-slate-900 dark:text-slate-300">
            choose a color
          </h1>
        </div>
      ) : (
        <div>
          {/* random */}
          <div className=" mt-9 select-none gap-4 font-bold cursor-default flex items-center text-[4.5vh]  w-[100vw] h-[7vh] font-VarelaRound">
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
          <div className="dark:text-black flex flex-wrap mt-3 justify-center ">
            {Rcolors.map((item, index) => (
              <div
                onClick={(e) => {
                  copy(e.currentTarget.id);
                }}
                id={item.hex}
                style={{ background: item.hex }}
                className="w-[230px] h-[150px] rounded-xl  m-[13px] transition-all cursor-pointer hover:scale-[1.16] hover:border-[6px] hover:border-white p-4 hover:outline-[3px] hover:outline outline-[#c7c7c7]"
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
          <div className="flex flex-col items-center">
            <button
              onClick={() => getColors(select, 'r')}
              className="hover:bg-slate-400 dark:bg-neutral-800 hover:dark:bg-neutral-700 dark:text-gray-200 transition-colors mt-[1%] w-[auto] p-5 h-[5vh] rounded-3xl bg-slate-300 font-bold flex items-center justify-center text-lg cursor-pointer"
            >
              <FaDice className="mr-2" />
              Shuffle
            </button>
          </div>

          {/* Light */}
          <div className="select-none gap-4 font-bold cursor-default flex items-center text-[4.5vh]  w-[100vw] h-[7vh] font-VarelaRound">
            <div>
              <span className="hover:text-[5.5vh]  transition-all duration-150">
                L
              </span>
              <span className="hover:text-[5.5vh] transition-all duration-150">
                i
              </span>
              <span className="hover:text-[5.5vh] transition-all duration-150">
                g
              </span>
              <span className="hover:text-[5.5vh] transition-all duration-150">
                h
              </span>
              <span className="hover:text-[5.5vh] transition-all duration-150">
                t
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
          <div className="flex flex-wrap mt-3 justify-center dark:text-black">
            {Lcolors.map((item, index) => (
              <div
                onClick={(e) => {
                  copy(e.currentTarget.id);
                }}
                id={item.hex}
                style={{ background: item.hex }}
                className="w-[230px] h-[150px] rounded-xl m-[13px] hover:scale-[1.16] hover:border-[6px] hover:border-white transition-all cursor-pointer p-4 hover:outline-[3px] hover:outline outline-[#c7c7c7]"
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
          <div className="flex flex-col items-center">
            <button
              onClick={() => getColors(select, 'l')}
              className="hover:bg-slate-400 transition-colors mt-[1%] w-[auto] p-5 h-[5vh] rounded-3xl bg-slate-300 font-bold flex items-center justify-center text-lg cursor-pointer dark:bg-neutral-800 hover:dark:bg-neutral-700 dark:text-gray-200 "
            >
              <FaDice className="mr-2" />
              Shuffle
            </button>
          </div>

          {/* Dark */}
          <div className="select-none gap-4 font-bold cursor-default flex items-center text-[4.5vh]  w-[100vw] h-[7vh] font-VarelaRound">
            <div>
              <span className="hover:text-[5.5vh]  transition-all duration-150">
                D
              </span>
              <span className="hover:text-[5.5vh] transition-all duration-150">
                a
              </span>
              <span className="hover:text-[5.5vh] transition-all duration-150">
                r
              </span>
              <span className="hover:text-[5.5vh] transition-all duration-150">
                k
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

          <div className="flex flex-wrap mt-3 justify-center dark:text-black">
            {Dcolors.map((item, index) => (
              <div
                onClick={(e) => {
                  copy(e.currentTarget.id);
                }}
                id={item.hex}
                style={{ background: item.hex }}
                className="w-[230px] h-[150px] rounded-xl  m-[13px] hover:scale-[1.16] hover:border-[6px] hover:border-white transition-all cursor-pointer p-4 hover:outline-[3px] hover:outline outline-[#c7c7c7]"
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
          <div className="flex flex-col items-center">
            <button
              onClick={() => getColors(select, 'd')}
              className="hover:bg-slate-400 transition-colors mt-[1%] w-[auto] p-5 h-[5vh] rounded-3xl bg-slate-300 font-bold flex items-center justify-center text-lg cursor-pointer mb-20 dark:bg-neutral-800 hover:dark:bg-neutral-700 dark:text-gray-200 "
            >
              <FaDice className="mr-2" />
              Shuffle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Specific;
