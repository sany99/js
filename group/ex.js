'use  strict'

/*
1 can of soup is 650 FCFA
3 can of soup is 1000 FCFA
 */

const getCostcount = nbre => {
    const onecanprice = 650, threecanprice = 1000
     let price3 = 1000
     let prix = 0
    
    if (nbre == 3){
        /*let n = 1 * threecanprice
        return prix*/
        console.log(threecanprice)}
    else if(nbre % 3 == 0 && nbre != 3){
        price3 +=  + 1000
        console.log(price3)
        
    }

    else{
        prix = nbre * onecanprice
        console.log(prix)
    }
}

getCostcount(6)