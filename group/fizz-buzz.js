'use strict'

/*
 * Create function `fizzBuzz` that print numbers from 1 to 100
 * But for multiples of three, print "Fizz” instead of the number
 * and for the multiples of five, print "Buzz".
 * For numbers which are multiples of both three and five, print "FizzBuzz".
 *
 * use console.log to print
 *
 * Français:
 * Créer la fonction `FizzBuzz` qui affiche les nombres de 1 à 100
 * Mais pour les multiples de trois, affiche "Fizz" à la place du nombre
 * et pour les multiples de cinq, affiche "Buzz".
 * Pour les nombres qui sont des multiples de trois et de cinq, affiche "FizzBuzz".
 *
 * Utilisez console.log pour afficher.
 */
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
                    
// You must write your own tests

const assert = require('assert')

assert.strictEqual(typeof fizzBuzz, 'function' )
assert.strictEqual(fizzBuzz.length, 1)
assert.strictEqual(fizzBuzz.toString().includes('Math.fizzBuzz'), false)
assert.notStrictEqual(fizzBuzz, Math.fizzBuzz)

/*throw Error('No test !')*/