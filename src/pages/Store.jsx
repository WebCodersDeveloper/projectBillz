import { useContext, useState } from "react";
import "../style/store.scss";
import { FaPlus } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { ThemeContext } from "../App";
import CreateStore from "./CreateStore";
export default function Store() {
  const {theme} = useContext(ThemeContext)
  const [store, setStore] = useState(false)
  return (
    <>
      {
      store === false &&
      <div className="store__main w-full h-full flex flex-col items-center">
        <div className="store__title h-36 flex w-[90%] items-center">
          <h1 className={`text-4xl font-bold`}>Настройки магазинов</h1>
        </div>
        <div className={`search__store h-32 flex items-center justify-center border-t-2 w-full relative gap-16 ${theme}_container`}>
          <span className="absolute text-xl left-[136px]"><IoSearch /></span>
          <input type="text" className={`${theme}_inp w-[759px] h-14 px-10 outline-none font-semibold text-base rounded-2xl`} placeholder="Название магазина"/>
          <button onClick={() => setStore(true)} className="bg-blue-500 flex items-center justify-center gap-2 text-white text-base font-semibold w-52 rounded-2xl py-2 h-12">
          <FaPlus />
            Название магазина
          </button>
        </div>
        <div className="w-[90%] h-full flex flex-col">
          <div className={`${theme}_container w-full border-t-2 border-b-2 px-3 py-2 flex justify-between text-gray-400 font-semibold text-base`}>
            <p>Магазин</p>
            <p>Кол-во касс</p>
            <p>Действие</p>
          </div>
        </div>
      </div>
      
      }
      {store === true && <CreateStore />}
    </>
  );
}
