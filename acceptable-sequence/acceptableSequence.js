module.exports = function acceptableSequence(str) {
    var letters = "abcdefghijklmnopqrstuvqxyz";
    for(var i=0; i < str.length; i++) {
        if ( (letters.indexOf(str[i]) !== -1) && (i !== 0) && (i !== str.length-1) ) { //checks if it is a letter by finding a index in the letters variable
            
            if( (str[i-1] === "+") && (str[i+1] === "+") ) { //if the next characters surrounding it are +'s
                return true;
            } 

        } else if( (letters.indexOf(str[i]) !== -1) && ((i === 0) || (i === str.length-1)) ) {
            return false;
        } 
    
    }
    return false
}