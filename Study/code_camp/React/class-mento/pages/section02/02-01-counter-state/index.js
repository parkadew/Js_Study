import { useState } from 'react'

const CounterLetDocumentPage = () => {
    // let을 사용하면 상태가 변경 되지 않는다
    // react는 상태를 변경 시켜야하기 떄문에 
    // let은 react 전용 html에서 변경을 감지하지 못함 따라서 state를 사용해야한다
    const [count, setCount] = useState('')

    //state라는 react전용 변수는

    const onClickCountUp = () => {
        setCount(count + 1)
    }

    const onClickCountDown = () => {
        setCount(count - 1)
    }


    return (
        <>
            <div>{count}</div>
            <button onClick={onClickCountUp}>카운트 올리기!!</button>
            <button onClick={onClickCountDown}>카운트 내리기!!</button>
        </>
    )
}

export default CounterLetDocumentPage