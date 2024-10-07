const numbersarry = [
    3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18,
  ];
 function checkevenodd(arr) {
    arr.forEach(number => {
        if(number % 2 ==0) {
            console.log(`${number}is even`);
        }else {
            console.log(`${number}is odd`)
        }
    });
 } 
 
 checkevenodd(numbersarry);