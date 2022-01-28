// more suggestion for you section

var toBeClicked = document.querySelectorAll(".relative.pb2 .discover-fluid-entity-list.discover-fluid-entity-list--default-width-cards .ember-view.display-flex .discover-entity-type-card__bottom-container .mt2 button span.artdeco-button__text");
lengthtoBeClicked = toBeClicked .length;

for( i=0; i< lengthtoBeClicked; i++ ){
    if(toBeClicked[i].innerText==("Connect")){
        toBeClicked[i].parentElement.click();
        console.log("button clicked");}
    else console.log("this is not a button you want to press");
}

