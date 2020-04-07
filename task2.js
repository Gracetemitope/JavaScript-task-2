let data, interestData; 

data = [
     {
        principal: 2500,
        time: 1.8,
    },
     {
        principal: 1000,
        time: 5, 
    }, 
    {
        principal: 3000, 
        time: 1, 
    }, 
    {
        principal: 2000, 
        time: 3,
    },
];
// console.log(data);

function InterestCalculator (array) {
    
    array.forEach(candidate => {
        if (candidate.principal >= 2500 && candidate.time > 1 && candidate.time < 3 ) {
            candidate.rate = 3;

        }
        else if (candidate.principal >= 2500 && candidate.time >= 3) {
            candidate.rate = 4;
        }
        else if (candidate.ptincipal < 2500 || candidate.time <+1) {
            candidate.rate = 1;
        }
        else {
            candidate.rate = 1
        }
        candidate.interest = (candidate.principal * candidate.rate * candidate.time)/100
        
    });
    interestData = data.map(candidate => {
        return candidate;
    });
    console.log(interestData);
    return interestData;
}
InterestCalculator(data);
