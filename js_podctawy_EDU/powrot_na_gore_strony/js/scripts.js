(function(){

function createButton(){

    var button = document.createElement("button");

        button.classList.add("backToTop", "hidden");
        button.textContent= "up"
        document.body.appendChild(button);

        return button;

}

var button = createButton();



function animateScroll() {
     document.body.scrollTop = "0" ;
    }




button.addEventListener("click", function(e){
console.log("asd");  
    e.stopPropagation();

    animateScroll();

},false )



window.addEventListener("scroll", function(e){
    

    if(document.body.scrollTop = 20 ){ 

        button.classList.remove("hidden");
     } else {

        button.classList.add("hidden");
     }


},false );

})();

//srollTop nie chce działać na mojej przegladarce