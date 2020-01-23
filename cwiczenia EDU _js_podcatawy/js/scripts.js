

var sbt = document.querySelector("#getNumbers");



sbt.addEventListener("click", function(){
    
    var hmNumbers = document.querySelector("#hmNumbers").value;  
    var min = document.querySelector("#minV").value;
    var max = document.querySelector("#maxV").value;

    hm = parseInt(hmNumbers);
    
    maxv = parseInt(max);
    minv = parseInt(min);

    var dc = document.createDocumentFragment();

        for(var i = 0 ; i < hm ; i++){
                los = Math.floor(Math.random() * (maxv - minv + 1) + minv);

                    var text = document.createTextNode(los);
                    var ul = document.querySelector("#wynik");
                    var li = document.createElement("li");

                    li.classList.add('list-group-item');
                    li.appendChild(text);
                    dc.appendChild(li);  
                    ul.appendChild(dc);
                }
        sbt.setAttribute("disabled","true");

                    var divbutton = document.querySelector("#button");
                    var reset = document.createElement("button");
                    text2= document.createTextNode("Reset")
                    reset.classList.add('btn');
                    reset.appendChild(text2);
                    reset.setAttribute("id","res");
                    divbutton.appendChild(reset);
                    
                     var resbtn = document.querySelector("#res");
     
                     resbtn.addEventListener("click", function(){ 
             
             
                         console.log('asd');
             
                     },false);
                },false ) ;
               







 // przerobić tak by podawać pole z zakresem chowa się, liczbe , i pokazuje napis wynik z liczbami jako fragment kodu  a nie odzielnie