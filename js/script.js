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

//info button Coffee House

$(document).ready(function(){
    $(".info1").click(function(){
      $(".infoDiv1").show();
      $("#coffee").hide();
      $("#coffeeMob").hide();
    });
    $(".close1").click(function(){
      $(".infoDiv1").hide();
      $("#coffee").show();
      $("#coffeeMob").show();
    });
  });
  

  //info button Travel Bug

$(document).ready(function(){
    $(".info2").click(function(){
      $(".infoDiv2").show();
      $("#travel").hide();
      $("#travelMob").hide();
    });
    $(".close2").click(function(){
      $(".infoDiv2").hide();
      $("#travel").show();
      $("#travelMob").show();
    });
  });

  //info button PW Services 

$(document).ready(function(){
    $(".info3").click(function(){
      $(".infoDiv3").show();
      $("#pwServices").hide();
      $("#pwServicesMob").hide();
    });
    $(".close3").click(function(){
      $(".infoDiv3").hide();
      $("#pwServices").show();
      $("#pwServicesMob").show();
    });
  });

  
  
  

