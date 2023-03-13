// Code your solutions in this file
let emptyArr = []
function writeCards(Arr, Event) {
    for (let i = 0; i < Arr.length; i++) {
        emptyArr.push(`Thank you, ${Arr[i]}, for the wonderful ${Event} gift!`)
    }
    console.log(emptyArr)
    return emptyArr
}
writeCards([Guadalupe, Ollie, Aki], "surprise")

//===============================

function countDown(num) {
    while (num >= 0) {
        console.log(num)
        --num
    }
}
countDown(10)
