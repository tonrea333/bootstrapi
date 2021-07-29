
const randomBoot = document.querySelector(".btn.btn-secondary");
const randomPicture = document.querySelector(".card-img-top");
const tempLocation = document.querySelector('input[type="text"]');
const tempButton = document.querySelector(".btn.btn-weather");

console.log (randomPicture)
randomBoot.addEventListener("click", onClick);

function onClick(){


fetch("https://dog.ceo/api/breeds/image/random")
.then(function(bootdata){
    return bootdata.json();
})
.then(function (data){
console.log(data, "data")

const x = data.message

randomPicture.src = x
})
}

tempButton.addEventListener("click", weatherClick);

function weatherClick(){
console.log("click")
//function to remove text in weather input field

function removeText(tempLocation) {
    tempLocation.value = "";
} removeText(tempLocation)
}