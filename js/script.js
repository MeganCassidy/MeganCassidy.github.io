let text = document.querySelector('.heading'); 
let stringTxt = text.textContent;
let splitTxt = stringTxt.split('');
text.textContent = '';

//creating a loop to add span tag between each letter
for (let i = 0; i < splitTxt.length; i++) {
    text.innerHTML += '<span>' + splitTxt[i] + '</span>';
}

let char = 0;
let timer = setInterval(onTick, 50);

//Creating a function to add a Fade class 
function onTick() {
    let span = text.querySelectorAll('span') [char];
    span.classList.add('fade');
    char++
    if(char === splitTxt.length) {
        complete();
        return;
    }
}

//function to end the animation 
function complete(){
    clearInterval(timer);
    timer = null;
}
