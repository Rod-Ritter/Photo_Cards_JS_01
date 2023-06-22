import "./style.css";

const cardContainer = document.querySelector(".card-container");

const arr = [
  {
    firstname: "AMIR",
    lastname: "NOURAVI",
    age: "42",
    photo:
      "https://i2.wp.com/ritterfotobook.com/wp-content/uploads/2018/06/Rodolphe-Ritter-Photographe-12.jpg?w=682&ssl=1",
  },
  {
    firstname: "NOUR",
    lastname: "JEHAN",
    age: "32",
    photo:
      "https://i1.wp.com/ritterfotobook.com/wp-content/uploads/2018/06/Rodolphe-Ritter-Photographe-05.jpg?w=681&ssl=1",
  },
  {
    firstname: "LEÏLA",
    lastname: "IMAD",
    age: "22",
    photo:
      "https://i0.wp.com/ritterfotobook.com/wp-content/uploads/2018/06/Rodolphe-Ritter-Photographe-03.jpg?w=768&ssl=1",
    promo:"50%"
  },
  {
    firstname: "SARA",
    lastname: "DJOUN",
    age: "22",
    photo:
      "https://i0.wp.com/ritterfotobook.com/wp-content/uploads/2018/06/Rodolphe-Ritter-Photographe-09.jpg?w=768&ssl=1",
  },
  {
    firstname: "FIRYA",
    lastname: "DEMIR",
    age: "22",
    photo:
      "https://i0.wp.com/ritterfotobook.com/wp-content/uploads/2018/06/Rodolphe-Ritter-Photographe-02.jpg?w=768&ssl=1",
      promo:"40%"
  },
  {
    firstname: "CHLOE",
    lastname: "MOUSFI",
    age: "22",
    photo:
      "https://i0.wp.com/ritterfotobook.com/wp-content/uploads/2018/06/Rodolphe-Ritter-Photographe-06.jpg?w=768&ssl=1",
  },
  {
    firstname: "RORO",
    lastname: "TUTU",
    age: "32",
    photo:
      "https://i0.wp.com/ritterfotobook.com/wp-content/uploads/2018/06/Rodolphe-Ritter-Photographe-14.jpg?w=768&ssl=1",
    promo:"60%"
  },
  {
    firstname: "YANNOUCH",
    lastname: "TUTU",
    age: "32",
    photo:
      "https://i0.wp.com/ritterfotobook.com/wp-content/uploads/2018/06/Rodolphe-Ritter-Photographe-15.jpg?w=768&ssl=1",
    promo:"40%"
  },
  {
    firstname: "YANNOUCH",
    lastname: "TUTU",
    age: "32",
    photo:
      "https://i0.wp.com/ritterfotobook.com/wp-content/uploads/2018/06/Rodolphe-Ritter-Photographe-11.jpg?w=768&ssl=1",
    promo:"40%"
  },
];

const dispayCards = () => {
  arr.map((item, index) => {
    return createCardElement(item);
  });
};

function createCardElement(item) {
  const card = document.createElement("div");
  card.setAttribute("class", "card-elem");
  const a = document.createElement("a");
  a.href="#";
  const imgContainer = document.createElement("div");
  imgContainer.setAttribute("class", "img-container");
  const img = document.createElement("img");
  img.src = item.photo;
  imgContainer.appendChild(img);
  const textContainer = document.createElement("div");
  textContainer.setAttribute("class", "text-container");
  const firstNameAll = document.createElement("p");
  const firstNameTitle = document.createElement("span");
  firstNameTitle.setAttribute("class", "bold");
  firstNameTitle.textContent = "Prénom: ";
  firstNameAll.append(firstNameTitle, capFirstLetter(item.firstname));
  textContainer.append(firstNameAll);
  const lastNameAll = document.createElement("p");
  const lastNameTitle = document.createElement("span");
  lastNameTitle.setAttribute("class", "bold");
  lastNameTitle.textContent = "Nom: ";
  lastNameAll.append(lastNameTitle, capFirstLetter(item.lastname));
  textContainer.append(lastNameAll);
  const ageAll = document.createElement("p");
  const ageTitle = document.createElement("span");
  ageTitle.setAttribute("class", "bold");
  ageTitle.textContent = "Age: ";
  ageAll.append(ageTitle, item.age);
  textContainer.append(ageAll);
  const promoContainer = document.createElement("div");
  const promoContent = document.createElement("div");
  if (item.promo) {
    promoContainer.setAttribute("class", "promo-container");
  } else {
    item.promo = ""
  };
  promoContent.append(item.promo);
  promoContainer.appendChild(promoContent);
  a.append(card);
  card.append(imgContainer, textContainer, promoContainer);
  cardContainer.append(a);
  a.onmouseover= function(){
    firstNameTitle.style.textDecoration="underline";
  };
  a.onmouseout= function(){
    firstNameTitle.style.textDecoration="none";
  }
  return card;
}

function capFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

dispayCards();

// function createCardElement(item) {
//   const card = document.createElement("div");
//   card.setAttribute("class", "card-elem");
//   card.innerHTML = `
//   <div class="img-container"> <img src="${item.photo}"> </div>
//   <div class="text-container">
//   <p><span class="bold">Prénom: </span> ${capFirstLetter(item.firstname)}</p>
//   <p><span class="bold">Nom: </span> ${capFirstLetter(item.lastname)}</p>
//   <p><span class="bold">Age: </span> ${item.age}</p>
//   </div>
//   `;
//   cardContainer.append(card);
//   return card;
// }
