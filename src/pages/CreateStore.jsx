import { useContext, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { ThemeContext } from "../App";
import Cleave from 'cleave.js/react';


export default function CreateStore() {

  const [toggled, setToggled] = useState(false);
  const { theme } = useContext(ThemeContext);
  const handleToggle = (e) =>{
    e.preventDefault();
    setToggled(!toggled)
  }


  return (
    <>
      <div className="store__main w-full h-[100vh] flex flex-col items-center overflow-hidden">
        <div
          className={`store__title h-36 flex gap-3 w-full items-center justify-between px-10 border-b-2 ${theme}_container`}
        >
          <div className="flex items-center justify-center gap-2">
            <span
              className={`p-2 rounded-[50%] text-blue-500  bg-gray-100 ${theme}_icon`}
            >
              <IoIosArrowBack />
            </span>
            <h1 className={`text-4xl font-bold`}>Магазин</h1>
          </div>
          <div className="flex gap-6">
            <button
              className={`${theme}_icon w-32 h-12 rounded-xl bg-gray-100 font-semibold`}
            >
              Сбросить
            </button>
            <button className="w-32 h-12 rounded-xl bg-blue-500 text-white font-semibold">
              Сохранить
            </button>
          </div>
        </div>
        <form className="flex flex-col h-full w-full overflow-y-scroll">
          <div className="flex">
            <div className="w-[30%]">
              <h2 className=" text-2xl font-semibold px-12 py-8">Основные</h2>
            </div>
            <div className="w-[70%] h-full flex flex-col py-8 gap-9">
              <div className="flex w-full justify-between">
                <span className="flex flex-col w-[50%] gap-4">
                  <label
                    htmlFor="Наименование"
                    className="font-semibold  text-base"
                  >
                    Наименование
                  </label>
                  <input
                    type="text"
                    placeholder="Наименование"
                    className={`${theme}_inp w-80 h-14 rounded-2xl px-4 outline-none`}
                  />
                </span>
                <span className="flex flex-col w-[50%] gap-4">
                  <label
                    htmlFor="Квадратура"
                    className="font-semibold text-base"
                  >
                    Квадратура
                  </label>
                  <input
                    type="text"
                    placeholder="Введите квадратуру"
                    className={`${theme}_inp w-80 h-14 rounded-2xl px-4 outline-none`}
                  />
                </span>
              </div>
              <div className="flex flex-col gap-4 w-full">
                <h3 className=" text-base font-semibold">Режим работы</h3>
                <div
                  className={`w-[774px] h-14 bg-gray-100 rounded-2xl px-2 py-1] ${theme}_inp flex items-center justify-around gap-6`}
                >
                  <b
                    className={`flex items-center w-40 font-semibold text-base border-r-2 h-full ${theme}_container`}
                  >
                    Понедельник
                  </b>
                  <span className="flex h-full items-center">
                    <p
                      className={`${theme}_container text-base font-semibold text-gray-400 px-8`}
                    >
                      Открытие:
                    </p>
                    <Cleave
                      className={`${theme}_inp w-16 h-full px-1 outline-none text-lg`}
                      options={{ time: true, timePattern: ["h", "m"] }}
                      placeholder="XX : XX"
                      disabled={!toggled}
                    />
                  </span>
                  <span className="flex h-full items-center">
                    <p
                      className={`${theme}_container text-base font-semibold text-gray-400 px-8`}
                    >
                      Закрытие:
                    </p>
                    <Cleave
                      className={`${theme}_inp w-16 h-full px-1 outline-none text-lg`}
                      options={{ time: true, timePattern: ["h", "m"] }}
                      placeholder="XX : XX"
                      disabled={!toggled}
                    />
                  </span>
                  <button
                    className={`${
                      toggled ? "bg-blue-500" : "bg-gray-200"
                    } relative inline-flex flex-shrink-0 h-7 w-14 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                    onClick={handleToggle}
                  >
                    <span
                      className={`${
                        toggled ? "translate-x-7" : "translate-x-0"
                      } inline-block h-6 w-6 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                    />
                  </button>
                </div>
                <div
                  className={`w-[774px] h-14 bg-gray-100 rounded-2xl px-2 py-1] ${theme}_inp flex items-center justify-around gap-6`}
                >
                  <b
                    className={`flex items-center w-40 font-semibold text-base border-r-2 h-full ${theme}_container`}
                  >
                    Вторник
                  </b>
                  <span className="flex h-full items-center">
                    <p
                      className={`${theme}_container text-base font-semibold text-gray-400 px-8`}
                    >
                      Открытие:
                    </p>
                    <Cleave
                      className={`${theme}_inp w-16 h-full px-1 outline-none text-lg`}
                      options={{ time: true, timePattern: ["h", "m"] }}
                      placeholder="XX : XX"
                      disabled={!toggled}
                    />
                  </span>
                  <span className="flex h-full items-center">
                    <p
                      className={`${theme}_container text-base font-semibold text-gray-400 px-8`}
                    >
                      Закрытие:
                    </p>
                    <Cleave
                      className={`${theme}_inp w-16 h-full px-1 outline-none text-lg`}
                      options={{ time: true, timePattern: ["h", "m"] }}
                      placeholder="XX : XX"
                      disabled={!toggled}
                    />
                  </span>
                  <button
                    className={`${
                      toggled ? "bg-blue-500" : "bg-gray-200"
                    } relative inline-flex flex-shrink-0 h-7 w-14 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                    onClick={handleToggle}
                  >
                    <span
                      className={`${
                        toggled ? "translate-x-7" : "translate-x-0"
                      } inline-block h-6 w-6 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                    />
                  </button>
                </div>
                <div
                  className={`w-[774px] h-14 bg-gray-100 rounded-2xl px-2 py-1] ${theme}_inp flex items-center justify-around gap-6`}
                >
                  <b
                    className={`flex items-center w-40 font-semibold text-base border-r-2 h-full ${theme}_container`}
                  >
                    Среда
                  </b>
                  <span className="flex h-full items-center">
                    <p
                      className={`${theme}_container text-base font-semibold text-gray-400 px-8`}
                    >
                      Открытие:
                    </p>
                    <Cleave
                      className={`${theme}_inp w-16 h-full px-1 outline-none text-lg`}
                      options={{ time: true, timePattern: ["h", "m"] }}
                      placeholder="XX : XX"
                      disabled={!toggled}
                    />
                  </span>
                  <span className="flex h-full items-center">
                    <p
                      className={`${theme}_container text-base font-semibold text-gray-400 px-8`}
                    >
                      Закрытие:
                    </p>
                    <Cleave
                      className={`${theme}_inp w-16 h-full px-1 outline-none text-lg`}
                      options={{ time: true, timePattern: ["h", "m"] }}
                      placeholder="XX : XX"
                      disabled={!toggled}
                    />
                  </span>
                  <button
                    className={`${
                      toggled ? "bg-blue-500" : "bg-gray-200"
                    } relative inline-flex flex-shrink-0 h-7 w-14 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                    onClick={handleToggle}
                  >
                    <span
                      className={`${
                        toggled ? "translate-x-7" : "translate-x-0"
                      } inline-block h-6 w-6 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                    />
                  </button>
                </div>
                <div
                  className={`w-[774px] h-14 bg-gray-100 rounded-2xl px-2 py-1] ${theme}_inp flex items-center justify-around gap-6`}
                >
                  <b
                    className={`flex items-center w-40 font-semibold text-base border-r-2 h-full ${theme}_container`}
                  >
                    Четверг
                  </b>
                  <span className="flex h-full items-center">
                    <p
                      className={`${theme}_container text-base font-semibold text-gray-400 px-8`}
                    >
                      Открытие:
                    </p>
                    <Cleave
                      className={`${theme}_inp w-16 h-full px-1 outline-none text-lg`}
                      options={{ time: true, timePattern: ["h", "m"] }}
                      placeholder="XX : XX"
                      disabled={!toggled}
                    />
                  </span>
                  <span className="flex h-full items-center">
                    <p
                      className={`${theme}_container text-base font-semibold text-gray-400 px-8`}
                    >
                      Закрытие:
                    </p>
                    <Cleave
                      className={`${theme}_inp w-16 h-full px-1 outline-none text-lg`}
                      options={{ time: true, timePattern: ["h", "m"] }}
                      placeholder="XX : XX"
                      disabled={!toggled}
                    />
                  </span>
                  <button
                    className={`${
                      toggled ? "bg-blue-500" : "bg-gray-200"
                    } relative inline-flex flex-shrink-0 h-7 w-14 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                    onClick={handleToggle}
                  >
                    <span
                      className={`${
                        toggled ? "translate-x-7" : "translate-x-0"
                      } inline-block h-6 w-6 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                    />
                  </button>
                </div>
                <div
                  className={`w-[774px] h-14 bg-gray-100 rounded-2xl px-2 py-1] ${theme}_inp flex items-center justify-around gap-6`}
                >
                  <b
                    className={`flex items-center w-40 font-semibold text-base border-r-2 h-full ${theme}_container`}
                  >
                    Пятница
                  </b>
                  <span className="flex h-full items-center">
                    <p
                      className={`${theme}_container text-base font-semibold text-gray-400 px-8`}
                    >
                      Открытие:
                    </p>
                    <Cleave
                      className={`${theme}_inp w-16 h-full px-1 outline-none text-lg`}
                      options={{ time: true, timePattern: ["h", "m"] }}
                      placeholder="XX : XX"
                      disabled={!toggled}
                    />
                  </span>
                  <span className="flex h-full items-center">
                    <p
                      className={`${theme}_container text-base font-semibold text-gray-400 px-8`}
                    >
                      Закрытие:
                    </p>
                    <Cleave
                      className={`${theme}_inp w-16 h-full px-1 outline-none text-lg`}
                      options={{ time: true, timePattern: ["h", "m"] }}
                      placeholder="XX : XX"
                      disabled={!toggled}
                    />
                  </span>
                  <button
                    className={`${
                      toggled ? "bg-blue-500" : "bg-gray-200"
                    } relative inline-flex flex-shrink-0 h-7 w-14 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                    onClick={handleToggle}
                  >
                    <span
                      className={`${
                        toggled ? "translate-x-7" : "translate-x-0"
                      } inline-block h-6 w-6 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                    />
                  </button>
                </div>
                <div
                  className={`w-[774px] h-14 bg-gray-100 rounded-2xl px-2 py-1] ${theme}_inp flex items-center justify-around gap-6`}
                >
                  <b
                    className={`flex items-center w-40 font-semibold text-base border-r-2 h-full ${theme}_container`}
                  >
                    Суббота
                  </b>
                  <span className="flex h-full items-center">
                    <p
                      className={`${theme}_container text-base font-semibold text-gray-400 px-8`}
                    >
                      Открытие:
                    </p>
                    <Cleave
                      className={`${theme}_inp w-16 h-full px-1 outline-none text-lg`}
                      options={{ time: true, timePattern: ["h", "m"] }}
                      placeholder="XX : XX"
                      disabled={!toggled}
                    />
                  </span>
                  <span className="flex h-full items-center">
                    <p
                      className={`${theme}_container text-base font-semibold text-gray-400 px-8`}
                    >
                      Закрытие:
                    </p>
                    <Cleave
                      className={`${theme}_inp w-16 h-full px-1 outline-none text-lg`}
                      options={{ time: true, timePattern: ["h", "m"] }}
                      placeholder="XX : XX"
                      disabled={!toggled}
                    />
                  </span>
                  <button
                    className={`${
                      toggled ? "bg-blue-500" : "bg-gray-200"
                    } relative inline-flex flex-shrink-0 h-7 w-14 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                    onClick={handleToggle}
                  >
                    <span
                      className={`${
                        toggled ? "translate-x-7" : "translate-x-0"
                      } inline-block h-6 w-6 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                    />
                  </button>
                </div>
                <div
                  className={`w-[774px] h-14 bg-gray-100 rounded-2xl px-2 py-1] ${theme}_inp flex items-center justify-around gap-6`}
                >
                  <b
                    className={`flex items-center w-40 font-semibold text-base border-r-2 h-full ${theme}_container`}
                  >
                    Воскресенье
                  </b>
                  <span className="flex h-full items-center">
                    <p
                      className={`${theme}_container text-base font-semibold text-gray-400 px-8`}
                    >
                      Открытие:
                    </p>
                    <Cleave
                      className={`${theme}_inp w-16 h-full px-1 outline-none text-lg`}
                      options={{ time: true, timePattern: ["h", "m"] }}
                      placeholder="XX : XX"
                      disabled={!toggled}
                    />
                  </span>
                  <span className="flex h-full items-center">
                    <p
                      className={`${theme}_container text-base font-semibold text-gray-400 px-8`}
                    >
                      Закрытие:
                    </p>
                    <Cleave
                      className={`${theme}_inp w-16 h-full px-1 outline-none text-lg`}
                      options={{ time: true, timePattern: ["h", "m"] }}
                      placeholder="XX : XX"
                      disabled={!toggled}
                    />
                  </span>
                  <button
                    className={`${
                      toggled ? "bg-blue-500" : "bg-gray-200"
                    } relative inline-flex flex-shrink-0 h-7 w-14 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                    onClick={handleToggle}
                  >
                    <span
                      className={`${
                        toggled ? "translate-x-7" : "translate-x-0"
                      } inline-block h-6 w-6 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
