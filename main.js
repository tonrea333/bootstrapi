
const randomBoot = document.querySelector(".btn.btn-secondary");
const randomPicture = document.querySelector(".card-img-top");

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