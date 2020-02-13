var addRang = function (){
  var zakres = {}
  zakres.min = function (){
    var minv = document.querySelector("#minV").value;
    return minv;
  };
  zakres.max = function (){
    var maxv = document.querySelector("#maxV").value;
    return maxv;
  };
  return zakres;
};


function losowanie(los){
    var arr = [];
    var z = new addRang;
    var ma = z.max();
    var mi = z.min();
    console.log(ma,mi);
      for(var i = 0 ; i < 2; i++){
      var   los = Math.floor(Math.random() * (ma - mi + 1) + mi);
         console.log(los);
         arr.push([los]);
    };
  };  //return Math.floor(Math.random() * (max - min)) + min;

    
    var sbt = document.querySelector("#getNumbers").addEventListener("click", function(){
      var z = new addRang;

      console.log(z.min(),z.max());

      losowanie();
   
      


  },false ) ;
  
// poprawka wyżej
 
     
   // var hm = document.querySelector("#hmNumbers").parseInt;
    

   
    //var dc = document.createDocumentFragment();

  //  var divul = document.querySelector("#divul");
//    var ul = document.createElement("ul");
   
                
  //  /    sbt.setAttribute("disabled","true");
       //             var divbutton = document.querySelector("#button");
    //                var reset = document.createElement("button");
         //           text2 = document.createTextNode("Reset")
           //         reset.classList.add('btn');
             //       reset.appendChild(text2);
               //     reset.setAttribute("id","res");
                 //   divbutton.appendChild(reset);

                   // var secondbutton = sbt.nextElementSibling;
                    
                   // secondbutton.addEventListener("click", function(){
                        
                    //    var hmNum = document.querySelector("#hmNumbers");
                      //  ul.remove();
                    //    sbt.removeAttribute("disabled");
                       // hmNum.value = "";
                        //reset.remove();               
                   // },false);
        
                
        
        

                                            
                








 // przerobić tak by podawać pole z zakresem chowa się, liczbe , i pokazuje napis wynik z liczbami jako fragment kodu  a nie odzielnie