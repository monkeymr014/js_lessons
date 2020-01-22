

var sbt = document.querySelector("#getNumbers");

sbt.addEventListener("click", function(){

   los = Math.floor(Math.random() * 49 + 1)   ;
   
   var text = document.createTextNode(los);
   var ul = document.querySelector("#wynik");
   var li = document.createElement("li");
   li.appendChild(text);
   
       ul.appendChild(li);    

 },false ) 

 



