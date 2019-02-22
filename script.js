const textInput = document.querySelector(".text-input");
const button = document.querySelector(".button");
const listItem = document.querySelector(".errandlist");



// Luisteren voor klik Voeg Toe
button.addEventListener('click', function () {
    
    if (textInput.value === "") {
    window.alert('Een leeg klusje is geen klusje! Vul wat in!');
    } else {
        listItem.innerHTML += `<li class="errand"><div class="left">
        <span class="erranddone">&check;</span><p class="strike">${textInput.value}</p></div><div class="right erranddelete">
        X</li>`
    }
});


// Hieronder ben ik aan het rotzooien!
const errandDone = document.querySelector(".erranddone");
const strikeThrough = document.querySelector(".strike");
const errand = document.querySelector(".errand");

errand.addEventListener('click', function (event) {
    console.log(event.target.classList);
    if (event.target.classList.contains('erranddelete')) {
        console.log("is dit 1");
        return;
    } else {
        console.log("toch 2");
        event.currentTarget.classList.toggle('checked');
    }

});




// Vink is afvinken


// Kruisje is verwijderen


// Alles afgevinkt is klaaaaaaar