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
        a = array[i] 
        // multiply = a * 2
        result.push(a)
    }
    console.log(result)
}

revntimes([1,4,6,7])