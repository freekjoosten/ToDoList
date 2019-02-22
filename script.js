const textInput = document.querySelector(".text-input");
const button = document.querySelector(".button");
const listItem = document.querySelector(".errandlist");
const deleteThis = document.querySelector(".visible");



// Luisteren voor klik Voeg Toe
button.addEventListener('click', function () {
    
    if (textInput.value === "") {
    window.alert('Een leeg klusje is geen klusje! Vul wat in!');
    } else {
        deleteThis.classList.add('hidden');
        listItem.innerHTML += `<li class="errand">
        ${textInput.value}<button class="erranddelete">
        X</button></li>`;
        textInput.value = '';
        textInput.placeholder = 'Nog meer klusjes?';
    }
});


// Hieronder ben ik aan het rotzooien!
// const errandDone = document.querySelector(".erranddone");
// const strikeThrough = document.querySelector(".strike");
// const errand = document.querySelector(".errand");

// listItem.addEventListener('click', function (event) {
//     console.log(event.target.classList);
//     if (event.target.classList.contains('erranddelete')) {
//         console.log("is dit 1");
//         return;
//     } else {
//         console.log(event.currentTarget);
//         event.target.classList.toggle('checked');
//     }

// });

listItem.addEventListener('click', function (event) {
        if (event.target.classList.contains('erranddelete')) {
        event.target.closest(".errand").remove();
    } else {
    event.target.classList.toggle('checked');
    }

});



// Vink is afvinken


// Kruisje is verwijderen


// Alles afgevinkt is klaaaaaaar