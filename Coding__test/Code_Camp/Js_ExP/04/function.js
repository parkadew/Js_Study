// 자바스크립트에서 기본적으로 내장하고 있는 기능을 '내장 함수'라고 부르고,
// 우리가 직접 만드는 기능을 '함수'라고 부릅니다.
// '함수'는 입력(input)을 받아, 우리가 작성한 코드를 거쳐 결과를 출력(output)하는, 하나의 작은 기능 단위입니다.
// 첫번째 매개변수 'num1'과 두번째 매개변수 'num2'가 주어졌을 때,
// 이 두 값을 곱한 값을 변수 result에 할당하여 리턴하는 함수 fnc를 작성하세요

const Function = (num1, num2) => {
    return num1 * num2
}
let answer = Function(10, 1)
console.log(answer)