'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 * @next multiply-recursive
 */

// Your code :
const multiply = (a, b) => {
    if(a > 0 && b > 0){
        let i = 1
        if(i < Math.abs(b)){
            let resultat = a
                while(i < Math.abs(b)){
                    resultat = resultat + a 
                    i++
                }
                return resultat
            }
    }

    else if(a < 0 && b < 0){
        let i = 1
        if(i < Math.abs(b)){
            let resultat = a
                while(i < Math.abs(b)){
                    resultat = resultat + a 
                    i++
                }
                return -resultat
            }
    }

    if(a < 0 && b > 0){
        let i = 1
        if(i < Math.abs(b)){
            let resultat = a
                while(i < Math.abs(b)){
                    resultat = resultat + a 
                    i++
                }
                return resultat
            }
    }

    else if((a === 0) && (b === 0)){
        let resultat = 0
            return resultat
    }

    else if((a === 0) || (b === 0)){
        let resultat = 0
            return resultat
    }

    else{
        let resultat = b
        let i = 1
            while(i < Math.abs(a)){
            resultat = resultat + b
                i++
            }
        return resultat
    }
}
//
console.log(multiply(23, 0), 0)
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
