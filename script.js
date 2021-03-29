const numArray1 = [3,4,5];
const numArray2 = [10,5,9];
const numArray3 = [7,10,30,1];
const numArray4 = [3,2,8];
const numArray5 = [4,9,1];

const addArray = (array) =>{
    let num = 0
    for(let i=0; i<array.length; i++){
        num += array[i]
    }
    return num
}
console.log(addArray(numArray1))
console.log(addArray(numArray2))

const averageArray = (array) =>{
    let num = 0
    for(let i=0; i<array.length; i++){
        num += array[i]
    }
    let average = num / array.length
    return average
}
console.log(averageArray(numArray1))
console.log(averageArray(numArray2))

const averageArray2 = (array) =>{
    let average = addArray(array) / array.length
    return average
}
console.log(averageArray2(numArray1))
console.log(averageArray2(numArray2))

const findLargest = (array) =>{
    let num = array[0]
    for(let i=0; i<array.length; i++){
        if(num<array[i]){
            num = array[i]
        }
    }
    return num
}
console.log(findLargest(numArray3))

const sumOfLargest = (array,array2) =>{
    let num = array[0]
    let num2 = array[0]
    for(let i=0; i<array.length; i++){
        if(num<array[i]){
            num = array[i]
        }
    }
    for(let i=0; i<array2.length; i++){
        if(num2<array2[i]){
            num2 = array2[i]
        }
    }
    let sum = num + num2
    return sum
}
console.log(sumOfLargest(numArray4,numArray5))
