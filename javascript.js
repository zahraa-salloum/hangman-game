
const letters = document.getElementById("letters");
let hint = document.getElementById("hint");
for (let i = 65; i < 91; i++) {
    let button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    letters.append(button);
    button.classList.add("button");
  }

let dict = {
    fruits: ["Strawberry","Orange","Apple","Blueberry","Mandarin","Pineapple","Pomegranate","Watermelon","kiwi"],
    animals: ["Elephant","Cow","Fox","Squirrel", "Panther", "Walrus", "Zebra","Ant","Ladybug"],
    countries: ["Lebanon","Syria","Russia","India","Hungary","Kyrgyzstan","Switzerland","Zimbabwe","Dominica"],
  };

let choose_category = Math.floor(Math.random()*3)
let random_word;

if(choose_category == 0){
    hint.innerHTML = "Hint: It is a fruit"
    random_word = dict["fruits"][Math.floor(Math.random()*9)]
}else if (choose_category == 1){
    hint.innerHTML = "Hint: It is an animal"
    random_word = dict["animals"][Math.floor(Math.random()*9)]
}else{
    hint.innerHTML = "Hint: It is a country"
    random_word = dict["countries"][Math.floor(Math.random()*9)]
}

let button = document.getElementsByClassName("button");
for (let i = 0; i < button.length; i++){
    button[i].addEventListener('click',function(){
        button[i].disabled = true;
    })

}
console.log(random_word)
  