//reverse and times array
// input
// [1,4,6,7]
// [7,4,2,1]
// [5]

// output
// [14,12,8,2]
// [2,4,8,14]
// [10]

function revntimes (array) {
    let result = []
    for (let i = array.length ; i < 0 ; i--) {
        let a = array[i] - 1
        let multiply = a * 2
        result.push(multiply) 
    }
    console.log(result) 
} 
 
let array1 = revntimes([1,4,6,7])
console.log(array1)    