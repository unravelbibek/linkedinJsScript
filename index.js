
let toBeClicked = document.querySelectorAll("footer.mt2 button");
let lengthtoBeClicked = toBeClicked.length;

for( i=0 ; i < lengthtoBeClicked ; i++ ){
    clickButtons();
   
}

function clickButtons(){ 
    toBeClicked[i].click();
    console.log("connection sent");
    console.log("about to run next itteration");
}


