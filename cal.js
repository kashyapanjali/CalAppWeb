let string = "";

let resultInput= document.querySelector('#result');
let Inputs=document.querySelectorAll('#calcu input[type="button"]');
let currentExpression='';

Array.from(Inputs).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        try{
            if(e.target.innerHTML == '='){
                string=eval(string);
                resultInput.value=string;
            }
            else if(e.target.innerHTML=='c'){
                string="";
                resultInput.value=string;
            }
            else{
                console.log(e.target)
                string=string+e.target.innerHTML;
                resultInput.value = string;
            }
        }
        
        catch(error){
            console.error("Error:",error.message);
            resultInput.value="Error";
        }
    });
});