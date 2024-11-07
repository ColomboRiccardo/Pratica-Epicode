import MainButton from "../MainButton/MainButton";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#">EpicShop</a>
        <a href="#">BackOffice</a>
        <MainButton type="dropdown" text="brand" />
        <form>
          <input
            type="text"
            placeholder="Inserisci il prodotto da cercare"
          />
          <MainButton text="Cerca" />
        </form>
      </div>
      <MainButton type="cart" />
    </nav>
  );
}

export default Navbar;
