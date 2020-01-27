
    var form = document.querySelector("#myForm"),
        fields = form.querySelectorAll("[data-error]");


        form.addEventListener("submit",function(e) {
            e.preventDefault();

            var errArr = [];

            for(var i = 0; i < fields.length; i++){

                field = fields[i];
                //field.push(errArr);

                if(field.type === "text" && field.value == ""  ){

                    errArr.push(field.dataset.error);
                } else  if(field.type === "email"  && field.value.indexOf('@') === -1 ) 
                {
                    errArr.push(field.dataset.error);
                } else if(field.name === "your-subject" && field.value === "")
                {
                    errArr.push(field.dataset.error);
                }else if(field.type === "textarea" && field.value === "")
                {
                    errArr.push(field.dataset.error);
                }

                }
        
            console.log(errArr);


    },false);    
    







