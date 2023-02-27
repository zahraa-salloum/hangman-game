
const letters = document.getElementById("letters");
for (let i = 65; i < 91; i++) {
    let button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    letters.append(button);
    button.classList.add("button");
  }

  let dict = {
    fruits: ["Strawberry","Orange","Apple","Blueberry","Mandarin","Pineapple","Pomegranate","Watermelon"],
    animals: ["Elephant","Cow","Fox","Hedgehog", "Rhinoceros", "Squirrel", "Panther", "Walrus", "Zebra","Ant","Ladybug"],
    countries: ["Lebanon","Syria","Russia","India","Hungary","Kyrgyzstan","Switzerland","Zimbabwe","Dominica"],
  };