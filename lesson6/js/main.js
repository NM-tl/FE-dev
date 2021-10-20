let lenght = prompt('Lenght for Array');
const arrA = !isNaN(lenght) ? Array.from(Array(Number(lenght)), () => Math.floor(Math.random() * 20)) : [];

const arrB = arrA.filter(num => {

    if (num <= 1) {
        return false;
    }
 
    if (num <= 3) {
        return true;
    } 
 
    if (num % 2 == 0 || num % 3 == 0){
        return false;
    }
    
    for (let i=5; i*i <= num; i += 6){
       if (num%i == 0 || num%(i+2) == 0){
        return false;
       }      
    }
 
    return true;
})

const max = Math.max.apply(null, arrB);
const min = Math.min.apply(null, arrB);

console.log('arrA[]', arrA)
console.log('Простые числа из arrA[]', arrB)
console.log('Максимальное число из arrB[] =', max, 'Минимальное число из arrB[] =', min)


// function getPrimes(num) {
//     const seive = [];
//     const primes = [];
    
//     for (let i = 2; i <= num; i++) {
//       if (!seive[i]) {
//         primes.push(i);
//         for (let j = i * i; j <= num; j += i) {
//           seive[j] = true;
//         } 
//       }
//     }
    
    
//     return primes;
//   }
  
//   console.log(getPrimes(10));