function addString() {
    let result = '7' + 1;
    if (isNaN(result)) return result
}
let a = addString()
console.log(a)

//result는 '71'이라는 문자열이기 때문에 숫자가 아닙니다. 
// 하지만 isNaN('71')은 false를 반환합니다. 왜냐하면 '71'은 숫자로 변환 가능한 문자열이기 때문입니다.

// 파라미터가 숫자가 아닐 경우 true를 리턴하고,
// 파라미터가 숫자일 경우 false를 리턴합니다.
