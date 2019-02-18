const textInput = document.querySelector(".text-input");
const button = document.querySelector(".button");
const listItem = document.querySelector(".errandlist");


// Luisteren voor klik
button.addEventListener('click', function (event) {
    console.log(textInput.value);
    if (textInput.value === "") {
    window.alert('Een leeg klusje is geen klusje! Vul wat in!');
    } else {
        listItem.innerHTML += `<li class="errand"><div class="left">
        <span class="erranddone">&check;</span>${textInput.value}</div><div class="right erranddelete">
        X</li>`
    }
});




// Klik op knop is toevoegen


// Vink is afvinken


// Kruisje is verwijderen


// Alles afgevinkt is klaaaaaaar