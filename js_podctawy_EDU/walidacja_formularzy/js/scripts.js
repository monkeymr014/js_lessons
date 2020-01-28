
    var form = document.querySelector("#myForm"),
        fields = form.querySelectorAll("[data-error]"),
        errordiv = document.querySelector("#error");



        function isEmpty(field){

            return field.value === "" ;
        }

        form.addEventListener("submit",function(e) {    
            e.preventDefault();
            var errArr = [];
            
            for(var i = 0; i < fields.length; i++){
                
                field = fields[i];
                isValid = false;
                field.classList.remove("error");

                if(field.type === "text" && field.value == ""  ){
                    
                    isValid = isEmpty(field);


                } else  if(field.type === "email"  && field.value.indexOf('@') === -1 ) 
                {
                    isValid = isEmpty(field);
                } else if(field.name === "your-subject" && field.value === "")
                {
                    isValid = isEmpty(field);
                }else if(field.type === "textarea" && field.value === "")
                {
                    isValid = isEmpty(field);
                }


                if(isValid){
                    field.classList.add("error");
                    errArr.push(field.dataset.error);
                }

            }
            

        },false);    
        







