const repeatString = function(text, noOfRepititions) {
    let textToDisplay = "";
    if(noOfRepititions > 0){
        for(let i = 0; i < noOfRepititions; i++)
            textToDisplay += text;
    } else {
        textToDisplay = 'ERROR';
    }
    return textToDisplay;   
};

// Do not edit below this line
module.exports = repeatString;
