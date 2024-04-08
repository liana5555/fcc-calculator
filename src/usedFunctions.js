

 /*
  
    Handling the cases when the operators are pressed multiple times after each other. 

    Decides the index to slice to. 

    If the last two characters are the same operators it cuts the last one. 
  
  */


    function multiple_operators_handling(s2) {

        let len = s2.length
        console.log(len)
    
        let lenght_to_slice_to = len;
    
    
        for (let i = len - 1; i > 0; i--) {
          if (s2[i] === "+" || s2[i] === "-" || s2[i] === "*" || s2[i] === "/") {
            if (s2[i - 1] === "+" || s2[i - 1] === "-" || s2[i - 1] === "*" || s2[i - 1] === "/") {
              lenght_to_slice_to = i - 1;
            }
    
          }
    
        }
        return lenght_to_slice_to
    
      }
    



 /*
  
   Checking for multiple dots in the displayed string eg.: 10 + 5.5.5 

   Splitted string will be ['10' , '5.5.5' ]

   The display stirng is splitted outside the function and the resulted array is 

   given to the function as argument.

   If there is a string in the array that contains more than 1 dot then it returns true. 
   
  
  */


   function checkForMultipleDot(arr) {
    return arr.some(str => str.split('.').length > 2);
  }
/*
function checkForMultipleDot (arr) {
    const length = arr.length;

    for (let i=0; i<length; i++) {
        console.log(typeof(arr[i]))
        let result = arr[i].match(/\./g); //search() gives back the index. 
        console.log(result)

        if (result !== null) {
            console.log("") 
            
            if (result.length > 1) {
            return true
        }
        }

       
    }

    return false;

} */




module.exports = {
    checkForMultipleDot,
    multiple_operators_handling
}