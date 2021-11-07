//1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

for (let a = 2; a <= 1000; a++) {
    let prime = 0

    for (let b = 2; b < a; b++){
        if( b % a == 0) {
            prime = prime + 1
            break
        }
    }

    if(prime == 0 ) {
        console.log( a + "is prime numbers")
    }
}