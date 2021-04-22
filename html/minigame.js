var slider = document.getElementById("myRange");
var levelOne = document.getElementById("levelOne");
var levelTwo = document.getElementById("levelTwo");
var levelThree = document.getElementById("levelThree");
var levelFour = document.getElementById("levelFour");
var cooking= document.getElementById("cooking");
var button=document.getElementById("button");

slider.oninput = function() {
  if (this.value < 25) {
    levelOne.classList.remove("hidden");
    levelTwo.classList.add("hidden");
    levelThree.classList.add("hidden");
    levelFour.classList.add("hidden");
    cooking.innerHTML="blue";
  } else if (this.value >= 25 && this.value < 50) {
    levelOne.classList.add("hidden");
    levelTwo.classList.remove("hidden");
    levelThree.classList.add("hidden");
    levelThree.classList.add("hidden");
    cooking.innerHTML="medium well";
  }else if (this.value >= 50 && this.value < 75) {
    levelOne.classList.add("hidden");
    levelTwo.classList.add("hidden");
    levelThree.classList.remove("hidden");
    levelFour.classList.add("hidden");
    cooking.innerHTML="well done";
  } else if (this.value >= 75) {
    levelOne.classList.add("hidden");
    levelTwo.classList.add("hidden");
    levelThree.classList.add("hidden");
    levelFour.classList.remove("hidden");
    cooking.innerHTML="burnt";
  }
};
function myFunction() {
  console.log("le nombre de star est "+localStorage.getItem('star'));
    switch(cooking.innerHTML){
        case "blue":
            document.location.href="end2.html";
            localStorage.setItem('and2',"blue");
            break;
        case "medium well":
            document.location.href="end2.html";
            localStorage.setItem('end2',"medium well");
        break;
        case "well done":
          localStorage.setItem('win2',"well done");
            switch(localStorage.getItem('star'))
            {
              case "0":
                document.location.href="win2.html";
                localStorage.setItem('star',"1");
                break;
              case "1":
                document.location.href="win2.html";
                localStorage.setItem('star',"2");
                break;
              case "2":
                document.location.href="win2.html";
                localStorage.setItem('star',"3");
                break;
              default:
                break;
            }
            
        break;
        case "burnt":
            document.location.href="end2.html";
            localStorage.setItem('end2',"burnt");
        break;
        default:
            break;

    }
    
  };

