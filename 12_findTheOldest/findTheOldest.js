const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        if(Object.keys(oldest).length === 0 && oldest.constructor === Object){
            return person;
        }

        if(!("yearOfDeath" in person))
            person.yearOfDeath = new Date().getFullYear();
        if(!("yearOfDeath" in oldest))
            oldest.yearOfDeath = new Date().getFullYear();

        let oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        let personAge = person.yearOfDeath - person.yearOfBirth;
        return oldestAge < personAge ? person : oldest;
    }, {});
};

// Do not edit below this line
module.exports = findTheOldest;
