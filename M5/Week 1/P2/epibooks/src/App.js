//style imports
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//element imports
import MyNav from "./components/MyNav/MyNav.component";
import MyFooter from "./components/MyFooter/MyFooter.component";
import Welcome from "./components/Welcome/Welcome.component";
import AllTheBooks from "./components/AllTheBooks/AllTheBooks.component";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </div>
  );
}

export default App;
