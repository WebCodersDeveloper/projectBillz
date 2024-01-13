import { useContext, useState } from "react";
import "../style/store.scss";
import { FaPlus } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { ThemeContext } from "../App";
import { useNavigate } from "react-router-dom";
import { IoMdCloseCircle } from "react-icons/io";

export default function Store() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const getParsedStorage = () => {
    const storage = localStorage.getItem("store");
    return storage ? JSON.parse(storage) : [];
  };

  const [parsedStorage, setParsedStorage] = useState(getParsedStorage());
  const [searchInput, setSearchInput] = useState("");

  const handleNavigate = () => {
    navigate("/createstore");
  };

  const handleDelete = (id) => {
    const updatedStorage = parsedStorage.filter((item) => item.id !== id);
    localStorage.setItem("store", JSON.stringify(updatedStorage));
    setParsedStorage(updatedStorage);
  };

  // Filter the list based on the search input
  const filteredStorage = parsedStorage.filter(
    (item) =>
      item.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <div className="store__main w-full h-full flex flex-col items-center">
        <div className="store__title h-36 flex w-[90%] items-center">
          <h1 className={`text-4xl font-bold`}>Настройки магазинов</h1>
        </div>
        <div className={`search__store h-32 flex items-center justify-center border-t-2 w-full relative gap-16 ${theme}_container`}>
          <span className="absolute text-xl left-[84px]"><IoSearch /></span>
          <input
            type="text"
            className={`${theme}_inp w-[869px] h-14 px-10 outline-none font-semibold text-base rounded-2xl`}
            placeholder="Название магазина"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button onClick={handleNavigate} className="bg-blue-500 flex items-center justify-center gap-2 text-white text-base font-semibold w-52 rounded-2xl py-2 h-12">
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
          <div className="flex flex-col justify-between gap-2 mt-4">
            {filteredStorage.map((item) => (
              <div
                key={item.id}
                className={`${theme}_inp h-14 w-full px-8 rounded-2xl flex items-center justify-between`}
              >
                <h1 className="w-[33%] capitalize">{item.title}</h1>
                <p className="w-[33%]">{filteredStorage.length}</p>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 text-white p-1 rounded-md"
                >
                  <IoMdCloseCircle />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
