//JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız.
// Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. (Araştırma konusu : şart blokları : if )

function findPrime(...numbers) {
    let primeNumbers = []
    let nonPrimeNumbers = []
    for (let i = 0; i < numbers.length; i++) {
        let prime = 0
        if (numbers[i] >= 2) {
            for (let j = 2; j < numbers[i]; j++) {
                if (numbers[i] % j == 0) {
                    nonPrimeNumbers.push(numbers[i])
                    prime = prime + 1
                    break
                }
            }
            if (prime == 0) {
                primeNumbers.push(numbers[i])
            }
        } else {
            nonPrimeNumbers.push(numbers[i])
        }
    }
    console.log(numbers + " from the numbers")
    console.log("Prime ones: " + primeNumbers)
    console.log("non-prime numbers: " + nonPrimeNumbers)
}

findPrime(8, 13 ,23,37,45,54,64,73,85,99, -3, -15, 123 )
