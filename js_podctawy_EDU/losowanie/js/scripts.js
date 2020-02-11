
function addCom(maxv,minv){

    var minv = document.querySelector("#minV").value;
    var maxv = document.querySelector("#maxV").value;
    console.log(minv);
    console.log(maxv);
    return maxv,minv;
}
function losowanie(los){
    var arr = [];
    for(var i = 0 ; i < 10 ; i++){
        los = Math.floor(Math.random() * (addCom.maxv - addCom.minv + 1) + addCom.minv);
        arr.push([los]);
    }
    console.log(arr);
    }
    
    var sbt = document.querySelector("#getNumbers").addEventListener("click", function(){

    addCom();
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