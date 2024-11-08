import "./MainButton.css";

import { capitalizeFirstLetter } from "../../utils/utilityFunctions";
import { brandArray } from "../../utils/lists";

function MainButton(props) {
  // eslint-disable-next-line react/prop-types
  const { text, type } = props;
  if (type === "addToCart") {
    return <AddToCartButton />;
  } else if (type === "dropdown") {
    return <DropdownButton text={text} />;
  } else if (type === "cart") {
    return <CartButton />;
  } else {
    return <DefaultButton text={text} />;
  }
}

function AddToCartButton() {
  return (
    <button className="main-button">
      Aggiungi al carrello
    </button>
  );
}

// eslint-disable-next-line react/prop-types
function DefaultButton({ text = "Bottone Default" }) {
  return <button className="main-button">{text}</button>;
}

// eslint-disable-next-line react/prop-types
function DropdownButton({ text }) {
  return (
    <div className="dropdown-button">
      <button className="main-button">
        {capitalizeFirstLetter(text)}
      </button>
      <button className="main-button">v</button>
      <ul className="dropdown-list">
        {brandArray.map(DropdownElementCallback)}
      </ul>
    </div>
  );
}

function DropdownElementCallback(brand, index) {
  return <li key={"li" + index}>{brand}</li>;
}

function CartButton() {
  return (
    <div className="dropdown-button">
      <button className="main-button">Carrello</button>
      <button className="main-button">v</button>
      <ul className="dropdown-list"></ul>
    </div>
  );
}

export default MainButton;

/*
bradArray.forEach(brand => {
    const li = document.createElement("li")
    li.innerText = brand
    dropdown-list.appendChild(li)
    })
*/
