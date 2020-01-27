

var sbt = document.querySelector("#getNumbers");



sbt.addEventListener("click", function(){

     
    var hmNumbers = document.querySelector("#hmNumbers").value;
    var min = document.querySelector("#minV").value;
    var max = document.querySelector("#maxV").value;

    hm = parseInt(hmNumbers);

    maxv = parseInt(max);
    minv = parseInt(min);

    var dc = document.createDocumentFragment();

    var divul = document.querySelector("#divul");
    var ul = document.createElement("ul");
        for(var i = 0 ; i < hm ; i++){
                los = Math.floor(Math.random() * (maxv - minv + 1) + minv);

                    var text = document.createTextNode("|" + los + "|");
                    var li = document.createElement("li");
                    li.classList.add('list-group-item');
                    li.appendChild(text);
                    dc.appendChild(li);
                    ul.appendChild(dc);
                    divul.appendChild(ul)
                }
        sbt.setAttribute("disabled","true");

                    var divbutton = document.querySelector("#button");
                    var reset = document.createElement("button");
                    text2 = document.createTextNode("Reset")
                    reset.classList.add('btn');
                    reset.appendChild(text2);
                    reset.setAttribute("id","res");
                    divbutton.appendChild(reset);

                    var secondbutton = sbt.nextElementSibling;
                    
                    secondbutton.addEventListener("click", function(){
                        
                        var hmNum = document.querySelector("#hmNumbers");
                        ul.remove();
                        sbt.removeAttribute("disabled");
                        hmNum.value = "";
                        reset.remove();               
                    },false);
        },false ) ;
                
        
        const docStyle = document.documentElement.style
        const aElem = document.querySelector('button')
        const boundingClientRect = aElem.getBoundingClientRect()
        
        aElem.onmousemove = function(e) {
        
            const x = e.clientX - boundingClientRect.left
            const y = e.clientY - boundingClientRect.top
            
            const xc = boundingClientRect.width/2
            const yc = boundingClientRect.height/2
            
            const dx = x - xc
            const dy = y - yc
            
            docStyle.setProperty('--rx', `${ dy/-1 }deg`)
            docStyle.setProperty('--ry', `${ dx/10 }deg`)
            
        }
        
        aElem.onmouseleave = function(e) {
            
            docStyle.setProperty('--ty', '0')
            docStyle.setProperty('--rx', '0')
            docStyle.setProperty('--ry', '0')
            
        }
        
        aElem.onmousedown = function(e) {
            
            docStyle.setProperty('--tz', '-25px')
            
        }
        
        document.body.onmouseup = function(e) {
            
            docStyle.setProperty('--tz', '-12px')
            
        }

                                            
                








 // przerobić tak by podawać pole z zakresem chowa się, liczbe , i pokazuje napis wynik z liczbami jako fragment kodu  a nie odzielnie