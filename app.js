const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
function isPrime(num) {
    if (num <2) 
        return false;
    for (let i = 2; i<= Math.sqrt(num); i++){
        if (num % i ===0)
            return false;
    }
    return true;
}  
const primeNumbers = numbers.filter(isPrime);
const maxPrime = Math.sqrt(...primeNumbers);
const sumPrime = primeNumbers.reduce((acc,num) => acc +num,0);

console.log("prime number",primeNumbers);
console.log("max prime number",maxPrime);
console.log("sum of prime number",sumPrime);
