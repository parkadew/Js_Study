import styled from "@emotion/styled"

const MyDiary = () => {

    return <>
        <S.Container>
            <S.Wrapper>
                <S.Wrapper_Box>
                    <S.Wrapper__Head>
                        <S.Wrapper__HeadTitle>나만의 일기장</S.Wrapper__HeadTitle>
                        <S.Wrapper__Head__subtitle>
                            나만의 일기장입니다!<br></br>
                            원하는 색과 사이즈로 일기장을 커스텀해보세요!
                            <br></br>
                            <Point>
                                Have a Good Day :D
                            </Point>

                        </S.Wrapper__Head__subtitle>
                    </S.Wrapper__Head>

                    <S.Wrapper__Body>
                        <S.Wrapper__Body__content>
                            <Diary_title>씨발 일기</Diary_title>
                        </S.Wrapper__Body__content>
                    </S.Wrapper__Body>
                </S.Wrapper_Box>
            </S.Wrapper>
        </S.Container>

    </>
}
export default MyDiary

const Container = styled.div`
background-color: #eeeeee;
display: flex;
justify-content: center;
align-items: center;
padding: 50px 0; // 이거중요
height: 100%;
`

const Wrapper = styled.div`
width: 620px;
padding:40px 30px;
background-color: white;
border: 1px solid gray;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;

`
const Wrapper_Box = styled.div`


`


const Title = styled.h1`
`

const Wrapper__Head = styled.div`
    border-bottom: 1px dashed gray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px dashed gray;
`
const Wrapper__HeadTitle = styled.h1`
font-size: 32px;
text-align: center;
background-color: orange;
color: white;
`
const Wrapper__Head__subtitle = styled.p`

    font-size: 18px;
    padding: 10px 0;

`

const Point = styled.span`
color: orange;
font-weight: 800;
margin-top: 10px;

`

const Wrapper__Body = styled.div`

`

const Wrapper__Body__content = styled.div`

`
const Diary_title = styled.p`

`

const S = {
    Container,
    Wrapper,
    Wrapper_Box,
    Title,
    Wrapper__Head,
    Wrapper__Body,
    Wrapper__Body__content,
    Wrapper__HeadTitle,
    Wrapper__Head__subtitle
}

