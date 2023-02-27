
const letters = document.getElementById("letters");
for (let i = 65; i < 91; i++) {
    let button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    letters.append(button);
    button.classList.add("button");
  }