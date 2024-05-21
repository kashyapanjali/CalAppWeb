let string="";
// let exponent=null;
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
    try{
      if(e.target.innerHTML=='='){
        string=eval(string);           // evaluate to the input
        document.querySelector('input').value=string;
      }
      else if(e.target.innerHTML=='c'){
        string=""                     // clear the input
        document.querySelector('input').value=string;
      }
      else if (e.target.innerHTML == '%') {
        string = eval(string) / 100; // Convert the current expression to percentage
        document.querySelector('input').value = string;
    }
      else if (e.target.innerHTML === '$') {
      // Check if there is a valid expression before attempting to calculate
        if (string !== "") {
          let base = eval(string);
          let exponent = prompt("Enter the exponent value");
          
          // Check if exponent is a valid number
          if (!isNaN(exponent) && exponent !== null && exponent !== "") {
              exponent = parseFloat(exponent);
              let result = Math.pow(base, exponent);
              document.querySelector('input').value = result;
              string = result.toString(); // Update the string with the result for further calculations if needed
          } else {
              alert("Please enter a valid number for the exponent.");
          }
        }
     }
      else{
        console.log(e.target)
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
      }
   } 
    catch(error){
    console.error("error:",error.message)
    document.querySelector('input').value=string;
   }
    })
})