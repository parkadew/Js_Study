const RandomArr = () => {
    let arr = [];
    for (i = 0; i < 6; i++) {
        let num1 = Math.floor(Math.random() * 10)
        arr.push(num1)
    } return arr
}
let array = RandomArr()
console.log(array)

// 랜덤 배열이 완료되었다

// let sum = array.reduce((acc, cuu) => {
//     //acc = 누적값 cuu = 현재요소
//     return (acc + cuu);
// })
// console.log(sum)
// let a = Math.floor(sum / array.length);
// console.log(a)

function solution(numbers) {
    let sum = numbers.reduce((acc, ann) => {
        return acc + ann
    })
    return sum / numbers.length
}
let a = solution(array)
console.log(a)