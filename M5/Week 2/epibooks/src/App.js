//component imports
import AllTheBooks from "./Components/AllTheBooks/AllTheBooks.component";
import MyFooter from "./Components/MyFooter/MyFooter.component";
import MyNav from "./Components/MyNav/MyNav.component";
import Welcome from "./Components/Welcome/Welcome.component";

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
