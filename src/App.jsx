import { createContext, useState } from "react";
import MenuBar from "./MenuBar";
import Rout from "./routes/Rout";
import "./style/main.scss"

export const ThemeContext = createContext({
  theme: "ligth",
  switchTheme: () => {},

});

export default function App() {
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  console.log(theme);
  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      <div className="flex my-0 mx-auto max-w-[1920px]">
        <MenuBar />
        <Rout />
      </div>
    </ThemeContext.Provider>
  );
}
