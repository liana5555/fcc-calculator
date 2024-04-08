

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

}




module.exports = {
    checkForMultipleDot
}