import { useState } from "react";

//component imports
import AllTheBooks from "./Components/AllTheBooks/AllTheBooks.component";
import MyFooter from "./Components/MyFooter/MyFooter.component";
import MyNav from "./Components/MyNav/MyNav.component";
import Welcome from "./Components/Welcome/Welcome.component";

//data import
import bookStore from "./assets/scifi.json";

//context import
import {
  BookContext,
  ThemeContext,
  IdSelectedContext,
} from "./Contexts/context";

function App() {
  const [bookList, setBookList] = useState(bookStore);
  const [theme, setTheme] = useState("dark");
  const [idSelected, setIdSelected] = useState(1234567890);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <IdSelectedContext.Provider
      value={{ idSelected, setIdSelected }}
    >
      <BookContext.Provider
        value={{ bookList, setBookList }}
      >
        <ThemeContext.Provider value={theme}>
          <div
            className={`App ${theme}`}
            data-bs-theme={theme}
          >
            <MyNav toggleTheme={toggleTheme} />
            <Welcome />
            <AllTheBooks />
            <MyFooter />
          </div>
        </ThemeContext.Provider>
      </BookContext.Provider>
    </IdSelectedContext.Provider>
  );
}

export default App;
