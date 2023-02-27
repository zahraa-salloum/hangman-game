let lose_count = 0;
let str = "";
let status_game = document.getElementById("status");
const letters = document.getElementById("letters");
let image = document.getElementById("image");
let word_to_guess = document.getElementById("wordToGuess");
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
let word_length = "";
for(var i = 0; i < random_word.length;i++){
    word_length +="_";
}
word_to_guess.innerHTML = word_length;

let button = document.getElementsByClassName("button");
let button_value;
for (let i = 0; i < button.length; i++){
    button[i].addEventListener('click',function(){
        button_value = button[i].innerText
        button[i].disabled = true;
        if(!random_word.toLowerCase().includes(button_value.toLowerCase())){
            lose_count += 1;
            // console.log(lose_count)
        }
        if(lose_count == 1){
            image.setAttribute('src',"image-2.PNG")
        }else if (lose_count == 2){
            image.setAttribute('src',"image-3.PNG")
        }else if (lose_count == 3){
            image.setAttribute('src',"image-4.PNG")
        }else if (lose_count == 4){
            image.setAttribute('src',"image-5.PNG")
        }else if (lose_count == 5){
            image.setAttribute('src',"image-6.PNG")
        }else if (lose_count == 6){
            image.setAttribute('src',"image-7.PNG")
        }
        if(lose_count == 6){
            status_game.innerText = "You lose"
        }

        
        
        if(random_word.toLowerCase().includes(button_value.toLowerCase()) && lose_count < 6){
        for (var index = 0; index < random_word.length; index++) {
            if (random_word[index].toLowerCase() === button_value.toLowerCase()) {
                word_length = setCharAt(word_length,index,button_value.toLowerCase())
                
            }
        }
        // console.log(word_length)
        word_to_guess.innerHTML = word_length;
    }
    })
    
}
function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}
// console.log(random_word)



  