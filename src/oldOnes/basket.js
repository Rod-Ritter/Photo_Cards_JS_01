import "./style.css";

function capFirstLetter(letter) {
  return letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase()
};

const basket = [
  {
    name: "PANTS",
    quantity: 1,
    price: "10"
  },
  {
    name: "SHOES",
    quantity: 1,
    price: "90"
  },
  {
    name: "TIE",
    quantity: 2,
    price: "50"
  }
];

const total = basket.reduce((acc, value) => 
  acc += value.price * value.quantity, 0);

console.log(total);



















