import { useContext, useState } from "react";
import { IoIosArrowBack, IoMdCloseCircle } from "react-icons/io";
import Cleave from "cleave.js/react";
import { useNavigate } from "react-router-dom";
import { weekdays } from "../components/weekData/week";
import { ThemeContext } from "../App";

import "cleave.js/dist/addons/cleave-phone.uz";
import { FaPlus } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";
import { countries } from "../components/country/country";

export default function CreateStore() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [phone2, setPhone2] = useState("");
  const [phone3, setPhone3] = useState("");
  const [phone4, setPhone4] = useState("");
  const [enabled, setEnabled] = useState(false);
  const [title, setTitle] = useState("");
  const [creditCard, setCreditCard] = useState('');

  const [firstPhone, setFirstPhone] = useState(true);
  const [secondPhone, setSecondPhone] = useState(true);
  const [thirdPhone, setThirdPhone] = useState(false);
  const [fourthPhone, setFourthPhone] = useState(false);
  const [btnshow, setBtnShow] = useState(true);
  const [country, setCountry] = useState("");

  const handleBack = () => {
    navigate("/store");
  };

  const [weekdaysState, setWeekdays] = useState(weekdays);

  const handleToggle = (id) => {
    setWeekdays((prevWeekdays) => {
      return prevWeekdays.map((day) => {
        if (day.id === id) {
          return {
            ...day,
            isTrue: !day.isTrue,
          };
        }
        return day;
      });
    });
  };

  const handleAddNumber = () => {
    if (!firstPhone || !secondPhone || !thirdPhone || !fourthPhone) {
      setFirstPhone(true);
      setSecondPhone(true);
      setThirdPhone(true);
      setFourthPhone(true);
      setBtnShow(false);
    } else {
      setBtnShow(true);
    }
  };

  return (
    <>
      <div className="store__main w-full h-[100vh] flex flex-col items-center overflow-hidden">
        <div
          className={`store__title h-36 flex gap-3 w-full items-center justify-between px-10 border-b-2 ${theme}_container`}
        >
          <div className="flex items-center justify-center gap-2">
            <button
              className={`p-2 rounded-[50%] text-blue-500 bg-gray-100 ${theme}_icon`}
              onClick={handleBack}
            >
              <IoIosArrowBack />
            </button>
            <h1 className={`text-4xl font-bold`}>Магазин </h1>
            <h1 className={`text-4xl text-gray-400 font-bold`}>{title}</h1>
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
        <div className="flex flex-col h-full w-full overflow-y-scroll">
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
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
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

              {weekdaysState.map((day) => (
                <div
                  key={day.id}
                  className={`w-[774px] h-14 bg-gray-100 rounded-2xl px-2 py-1 ${theme}_inp flex items-center justify-around gap-6`}
                >
                  <b
                    className={`flex items-center w-40 font-semibold text-base border-r-2 h-full ${theme}_container`}
                  >
                    {day.name}
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
                      disabled={!day.isTrue}
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
                      disabled={!day.isTrue}
                    />
                  </span>
                  <button
                    className={`${
                      day.isTrue ? "bg-blue-500" : "bg-gray-200"
                    } relative inline-flex flex-shrink-0 h-7 w-14 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                    onClick={() => handleToggle(day.id)}
                  >
                    <span
                      className={`${
                        day.isTrue ? "translate-x-7" : "translate-x-0"
                      } inline-block h-6 w-6 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex mt-3">
            <div className="w-[30%]">
              <h2 className="text-2xl font-semibold px-12 py-8">Контакты</h2>
            </div>
            <div className="w-[70%] h-full flex flex-col py-8 gap-9">
              <label htmlFor="Телефоны" className="text-lg font-semibold">
                Телефоны
              </label>
              <div className="w-[87%] flex flex-wrap gap-x-[132px] gap-y-10">
                {firstPhone === true && (
                  <div className="relative">
                    <Cleave
                      options={{ phone: true, phoneRegionCode: "uz" }}
                      value={phone}
                      onChange={(e) => setPhone(e.target.rawValue)}
                      placeholder="+xxx xx xxx xx xx"
                      className={`${theme}_inp w-80 h-14 rounded-2xl px-4 outline-none`}
                    />
                    <button className="absolute left-[290px] top-5 text-red-600">
                      <IoCloseCircle />
                    </button>
                  </div>
                )}
                {secondPhone === true && (
                  <div className="relative">
                    <Cleave
                      options={{ phone: true, phoneRegionCode: "uz" }}
                      value={phone2}
                      onChange={(e) => setPhone2(e.target.rawValue)}
                      placeholder="+xxx xx xxx xx xx"
                      className={`${theme}_inp w-80 h-14 rounded-2xl px-4 outline-none`}
                    />
                    <button className="absolute left-[290px] top-5 text-red-600">
                      <IoMdCloseCircle />
                    </button>
                  </div>
                )}
                {thirdPhone === true && (
                  <div className="relative">
                    <Cleave
                      options={{ phone: true, phoneRegionCode: "uz" }}
                      value={phone3}
                      onChange={(e) => setPhone3(e.target.rawValue)}
                      placeholder="+xxx xx xxx xx xx"
                      className={`${theme}_inp w-80 h-14 rounded-2xl px-4 outline-none`}
                    />
                    <button className="absolute left-[290px] top-5 text-red-600">
                      <IoMdCloseCircle />
                    </button>
                  </div>
                )}
                {fourthPhone === true && (
                  <div className="relative">
                    <Cleave
                      options={{ phone: true, phoneRegionCode: "uz" }}
                      value={phone4}
                      onChange={(e) => setPhone4(e.target.rawValue)}
                      placeholder="+xxx xx xxx xx xx"
                      className={`${theme}_inp w-80 h-14 rounded-2xl px-4 outline-none`}
                    />
                    <button className="absolute left-[290px] top-5 text-red-600">
                      <IoMdCloseCircle />
                    </button>
                  </div>
                )}
                {btnshow && (
                  <button
                    onClick={handleAddNumber}
                    className={`${theme}_inp w-80 h-14 rounded-2xl outline-none flex items-center justify-center gap-3 hover:bg-blue-500 hover:text-white`}
                  >
                    <FaPlus /> Добавить телефон
                  </button>
                )}
              </div>
              <div className="w-[87%] flex flex-wrap gap-x-[132px] gap-y-10">
                <div className="flex flex-col">
                  <label htmlFor="Телефоны" className="text-lg font-semibold">
                    Facebook
                  </label>
                  <input
                    type="text"
                    placeholder="Название страницы"
                    className={`${theme}_inp w-80 h-14 rounded-2xl px-4 outline-none`}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="Телефоны" className="text-lg font-semibold">
                    Instagram
                  </label>
                  <input
                    type="text"
                    placeholder="@ Юзернейм"
                    className={`${theme}_inp w-80 h-14 rounded-2xl px-4 outline-none`}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="Телефоны" className="text-lg font-semibold">
                    Telegram
                  </label>
                  <input
                    type="text"
                    placeholder="@ Юзернейм"
                    className={`${theme}_inp w-80 h-14 rounded-2xl px-4 outline-none`}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="Телефоны" className="text-lg font-semibold">
                    Сайт
                  </label>
                  <input
                    type="text"
                    placeholder="Ссылка на сайт"
                    className={`${theme}_inp w-80 h-14 rounded-2xl px-4 outline-none`}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-3">
            <div className="w-[30%]">
              <h2 className="text-2xl font-semibold px-12 py-8">Реквизиты</h2>
            </div>
            <div className="w-[70%] h-full flex flex-col py-8 gap-9">
              <div className="flex items-center justify-self-start">
                <label htmlFor="Телефоны" className="text-lg font-semibold">
                  Магазин имеет уникальные реквизиты
                </label>
                <label className="text-lg font-semibold ml-28">
                  Юридическое название компании
                </label>
              </div>
              <div className="w-[87%] flex flex-wrap gap-x-[132px] gap-y-10 items-center">
                <button
                  className={`relative inline-flex items-center bg-gray-100 rounded-lg w-[320px] h-14 px-1 ${theme}_inp`}
                  onClick={() => setEnabled(!enabled)}
                  role="switch"
                  aria-checked={enabled}
                >
                  <span
                    className={`inline-block h-[50px] w-40 transform  rounded-lg shadow transition ease-in-out duration-200 ${
                      enabled ? "translate-x-[152px]" : "translate-x-0"
                    } ${theme === "dark" ? "bg-blue-500" : "bg-white"}`}
                  />
                  <span
                    className={`absolute left-[75px] text-base font-semibold `}
                  >
                    No
                  </span>
                  <span className={`absolute text-base font-semibold left-56`}>
                    Yes
                  </span>
                </button>
                <div className="flex flex-col">
                  <input
                    type="text"
                    className={`${theme}_inp w-80 h-14 rounded-2xl px-4 outline-none`}
                    placeholder="Введите название"
                  />
                </div>
              </div>
              <div className="w-[87%] flex flex-wrap gap-x-[132px] gap-y-10">
                <div className="flex flex-col">
                  <label htmlFor="Телефоны" className="text-lg font-semibold">
                    Юридический адрес
                  </label>
                  <input
                    type="text"
                    placeholder="Город, район, улица, дом"
                    className={`${theme}_inp w-[770px] h-14 rounded-2xl px-4 outline-none`}
                  />
                </div>
                <div className="flex flex-col">
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className={`bg-gray-50 text-base font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 h-14 cursor-pointer p-2.5 outline-none ${theme}_inp`}
                  >
                    <option value="">Select a country</option>
                    {countries.map((country) => (
                      <option key={country.value} value={country.value}>
                        {country.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder="Введите почтовый индекс"
                    className={`${theme}_inp w-80 h-14 rounded-2xl px-4 outline-none`}
                  />
                </div>
                <div className={`flex flex-col w-[770px] h-[114px] rounded-2xl ${theme}_inp overflow-hidden`}>
                  <Cleave
                    placeholder="Enter your credit card"
                    options={{ creditCard: true }}
                    onChange={(e) => setCreditCard(e.target.value)}
                    value={creditCard}
                    className={`${theme}_inp w-[770px] h-14 rounded-2xl px-4 outline-none`}
                  />
                  <input
                    type="text"
                    placeholder="Название банка и филиал"
                    className={`${theme}_inp w-[770px] border-t-2 h-14  px-4 outline-none`}
                  />
                </div>
                <button className={`flex items-center justify-center gap-2 w-[770px] rounded-2xl h-14 ${theme}_inp`}><FaPlus /> Добавить еще один банковский счет</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
