var m;

var sbt = document.querySelector("#getNumbers");


sbt.addEventListener("click", function(){
    

    var hmNumbers = document.querySelector("#hmNumbers").value;  
    hm = parseInt(hmNumbers);
        for(var z = 0 ; z <  hm ; z++   ){
   los = Math.floor(Math.random() * 49 + 1)   ;


   var text = document.createTextNode(los);
   var ul = document.querySelector("#wynik");
   var li = document.createElement("li","p");
   li.classList.add('list-group-item');
   li.appendChild(text);
   p.appendChild('Wynik');
        ul.appendChild(p);
       ul.appendChild(li);    
      
   


    }
 },false ) 




// przerobić tak by podawać pole z zakresem chowa się, liczbe , i pokazuje napis wynik z liczbami jako fragment kodu  a nie odzielnie