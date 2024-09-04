
import styled from "@emotion/styled"

const practice2 = () => {
    return <>
        <S.Box1_1  >1</S.Box1_1>
        <S.Box1_1 className="box" >2</S.Box1_1>

    </>

}
export default practice2


// const Box1 = styled.div`
//         background-color: gray;
//         width: 400px;
//         height: 300px;
//         border: 2px solid red;
//         padding : 50px;
//         margin: 50px;
//         `

const Box1_1 = styled.div`
    &.box  {
        padding: 50px;
        border: 1px solid blue
    }
    //  컴포넌트의 class명으로 styled-components를 지정해주고 싶을 경우.
    width: 200px;
    height: 200px;
    background-color: gray;

`


const S = {
    Box1_1,

}


