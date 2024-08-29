// 먼저 랜덤 배열 생성

const RandomArr = () => {
    let arr = [];
    for (i = 0; i < 6; i++) {
        let num1 = Math.floor(Math.random() * 10)
        arr.push(num1)
    } return arr
}
let array = RandomArr()
console.log(array)

// 랜덤 배열 완성 

//- 이제 랜덤 배열의 평균값을 구해보자

const Average = (arr) => {
    let sum = 0;
    for (a = 0; a < arr.length; a++) {
        sum = sum + arr[a]
    } return Math.floor(sum / arr.length)
}
let answer = Average(array)
console.log(answer)
//for 루프 안에 return 문이 있으면 루프가 첫 번째 반복에서 종료되므로,
// 루프가 끝난 후에 평균을 계산하고 반환해야 합니다.

