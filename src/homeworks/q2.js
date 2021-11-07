//Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. (Arkadaş sayılar için google)

//In number theory, friendly numbers are two or more natural numbers 
//with a common abundancy index, the ratio between the sum of divisors 
//of a number and the number itself. Two numbers with the same "abundancy" 
//form a friendly pair; n numbers with the same "abundancy" form a friendly
//n-tuple.

function friendNumbers(numberOne,numberTwo){
    let total = 0;
    for(let i = 1; i < numberOne; i++){
            if( numberOne % i == 0){
                total = total + i;
            }
        }
    if(total == numberTwo){
        console.log("this numbers is friend numbers")
    }
    else{
        console.log("this numbers is not friend numbers")
        
    }

}
friendNumbers(220,284)
friendNumbers(180,660)