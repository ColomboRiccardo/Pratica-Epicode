//style imports
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//element imports
import MyNav from "./components/MyNav/MyNav.component";
import MyFooter from "./components/MyFooter/MyFooter.component";
import Welcome from "./components/Welcome/Welcome.component";
import AllTheBooks from "./components/AllTheBooks/AllTheBooks.component";
import RedBackground from "./components/RedBackground/RedBackground.component";

function App() {
  return (
    <div className="App">
      <MyNav />
      <RedBackground>
        <Welcome />
      </RedBackground>
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </div>
  );
}

export default App;
