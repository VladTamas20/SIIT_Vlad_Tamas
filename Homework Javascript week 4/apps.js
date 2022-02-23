// Exercitiul 1
// display in the console the numbers from 1 to 20



console.log("Exercitiul 1")
var nr = 1;
while (nr <= 20) {
    console.log (nr)
    nr++
    
}

console.log("Exercitiul 1, varianta for ")
for(i = 1; i <= 20; i++) {
    console.log(i)
}

// Exercitiul 2
// display in the console the odd numbers from 1 to 20

console.log("Exercitiul 2, varianta i++")

var x = 20

for(let i = 1; i <= x; i++) {
    if(i % 2 != 0) {
        console.log(i)
    }
}
console.log("Exercitiul 2, varianta i += 2")

for(let i = 1; i <= 20; i += 2) {
    console.log(i)
}


// Exercitiul 3
// compute the sum of the elements of an array and display it in the console
console.log("Exercitiul 3")

var arrayNumere = [ 1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8.8, 1, 1] 
var sum = 0
for(let i = 0; i < arrayNumere.length; i += 1) {
    sum += arrayNumere[i]
}
console.log(sum)

// Exercitiul 4
// compute the maximum of the elements of an array and display it in the console
console.log("Exercitiul 4")

var max = arrayNumere[0]
for(let i = 1; i < arrayNumere.length; i += 1) {
    console.log("comparam", arrayNumere[i], max) 
    if(arrayNumere[i] > max) {
        max = arrayNumere[i]
    }
}
console.log(max)

// Exercitiul 5
// compute how many times a certain element appears in an array - tips: use object, var element = 2

//[ 1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8.8, 1, 1]

var counter = {}
for(let i = 0; i < arrayNumere.length; i += 1){
    console.log(counter)
    var number  = arrayNumere[i]
    if (!counter[number]) {
        counter[number]=0
    }
    counter[number]++
}
console.log(counter)

// Exercitiul 6
// Using nested control structures (doua for + if) for generate the following pattern

/* 0 1 0 1

   1 0 1 0

   0 1 0 1

   1 0 1 0 */

   for(let rand = 1; rand <= 4; rand++) {
       var line = ""
       for(let coloana = 1; coloana <= 4; coloana++){
            var element = (rand + coloana ) % 2
            line += element + " "
       }
        console.log(line)
   }

// Extra homework 1

console.log("Extra homework 1")

   function addition(a, b) {
    return a+b
}
var add = addition(2,3)
console.log(add)


// Extra homework 2

console.log("Extra homework 2")

function findNemo(text) {
    const words = text.split(' ') 
    for(let i = 0; i < text.length; i++) {
        if(words[i] == "Nemo") {
        return "I found Nemo at " + (i + 1) + "! " 
        
         }
    
    }	
    return "I haven't found Nemo"  
    }
    