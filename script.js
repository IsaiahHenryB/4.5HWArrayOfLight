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
    console.log(num)
}
addArray(numArray1)
addArray(numArray2)

const averageArray = (array) =>{
    let num = 0
    for(let i=0; i<array.length; i++){
        num += array[i]
    }
    let average = num / array.length
    console.log(average)
}
averageArray(numArray1)
averageArray(numArray2)

// const averageArray2 = (array) =>{
//     let num = 0
//     for(let i=0; i<array.length; i++){
//         num += array[i]
//     }
//     let average = num / array.length
//     console.log(average)
// }

const findLargest = (array) =>{
    let num = array[0]
    for(let i=0; i<array.length; i++){
        if(num<array[i]){
            num = array[i]
        }
    }
    console.log(num)
}
findLargest(numArray3)

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
    console.log(num + num2)
}
sumOfLargest(numArray4,numArray5)
