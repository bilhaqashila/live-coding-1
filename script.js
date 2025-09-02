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
    const result = []
    for (let i = array.length - 1 ; i >= 0 ; i--) {
        let a = array[i] 
        let multiply = a * 2
        result.push(multiply)  
    }
    console.log(result) 
} 
 
const array1 = revntimes([1,4,6,7])

const array2 = revntimes([7,4,2,1])

const array3 = revntimes([5])
