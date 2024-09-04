// import { Title } from "../../styles/emotion-practice"
import styled from "@emotion/styled"

const myPractice = () => {

    return <>
        <S.Title>
            가장 먼저 제목입니다.
        </S.Title>
        <S.Box1>
            <S.Subtitle>
                제목입니다
            </S.Subtitle>
            <S.Content> 내용입니다</S.Content>
        </S.Box1>

    </>

}
export default myPractice

const Title = styled.h1`
color: red 
`

const Box1 = styled.div`

`
const Subtitle = styled.h2`
    color: aqua;
`
const Content = styled.p`
font-size: 28px;
font-style: italic;
text-decoration: underline;
font-weight: 600;
    
`
const S = {
    Title,
    Box1,
    Subtitle,
    Content
}



