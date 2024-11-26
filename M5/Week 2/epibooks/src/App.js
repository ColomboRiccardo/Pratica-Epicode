import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

//component imports

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
import Homepage from "./Pages/Homepage/Homepage.page";
import NotFound from "./Pages/NotFound/NotFound.page";
import BookDetails from "./Pages/BookDetails/BookDetails.page";

function App() {
  const [bookList, setBookList] = useState(bookStore);
  const [theme, setTheme] = useState("dark");
  const [idSelected, setIdSelected] = useState(1234567890);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <BrowserRouter>
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

              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route
                  path="/login"
                  element={<Welcome />}
                />
                <Route
                  path="/book/:asin"
                  element={<BookDetails />}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>

              <MyFooter />
            </div>
          </ThemeContext.Provider>
        </BookContext.Provider>
      </IdSelectedContext.Provider>
    </BrowserRouter>
  );
}

export default App;
