var toBeClicked = document.querySelectorAll("footer.mt2 button");
lengthtoBeClicked = toBeClicked .length;

for( i=0; i< lengthtoBeClicked; i++ ){
    if(document.querySelectorAll("button")[i].innerText==("Connect")){
        toBeClicked[i].click();
        console.log("button clicked");}
    else console.log("this is not a button you want to press");
}
