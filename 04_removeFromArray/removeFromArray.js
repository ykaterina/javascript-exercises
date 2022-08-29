const removeFromArray = function(mainArr, ...args) {    
    args.forEach(element => {
        let index = mainArr.indexOf(element);
        if(index > -1)
            mainArr.splice(index, 1);
    });

    return mainArr;
};

// Do not edit below this line
module.exports = removeFromArray;
