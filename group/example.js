'use strict'

const fizzBuzz = Myvariable =>{
   
   while(Myvariable < 100){
       Myvariable++
       console.log(Myvariable)
       if (Myvariable % 3 == 0) {
           console.log('Fizz')
       }
       if (Myvariable % 5 == 0) {
           console.log('Buzz')
       }
       if (Myvariable % 3 == 0 && Myvariable % 5 == 0) {
           console.log('FizzBuzz')
       }
   } 
   
}

fizzBuzz(0)