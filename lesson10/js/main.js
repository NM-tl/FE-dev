function main (a = 2, b = 3, c) { 
    const result = sum(a, b);

    if(typeof c === 'function'){
       return c(result)
    }
  
    return result
}

function sum (a, b) { 
    return a + b; 
} 

const res = main(10, 20, (c1) =>  c1 * 2);
console.log(res)