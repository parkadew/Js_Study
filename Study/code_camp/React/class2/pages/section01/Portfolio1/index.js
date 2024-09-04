import { Input, Title, Wrapper, Wrapper__Paper, Container, Header_Box, Body_Box, Bottom_Box, PictureBox, MainSetting } from "../../../styles/portfolio"
import TextBox from "./TextBox"
import styled from "@emotion/styled"


const portfolio1 = () => {

    return <Container>
        <Wrapper__Paper>
            <Title>게시물 등록</Title>
            <Header_Box>
                <TextBox title='작성자' placeholder='이름을 입력해주세요'></TextBox>
                <TextBox title='비밀번호' placeholder='비밀번호를 입력해주세요'></TextBox>
            </Header_Box>
            <Body_Box>
                <TextBox title='제목' placeholder='제목을 입력해주세요' style={{ flexBasis: '100%' }} ></TextBox>
                <TextBox title='내용' placeholder='내용을 작성해주세요' inputStyle={{ height: '480px' }}></TextBox>
            </Body_Box>

            <Bottom_Box>
                <TextBox title='주소' placeholder='07250' style={{ width: '110px' }}></TextBox>
                <A_Button style={{ width: "110px" }}>우편번호 검색</A_Button>
                <TextBox></TextBox>
                <TextBox></TextBox>
                <TextBox title='유투브' placeholder='링크를 복사해주세요'></TextBox>
                <PictureWrapper>
                    사진 첨부
                    <BoxWrapper>
                        <PictureBox></PictureBox>
                        <PictureBox></PictureBox>
                        <PictureBox></PictureBox>
                    </BoxWrapper>
                </PictureWrapper>
                <MainSetting>메인설정</MainSetting>
            </Bottom_Box>
        </Wrapper__Paper>
    </Container >

}
export default portfolio1

//style={{ flex: 1 }}는 TextBox에 전체 공간 중 남은 공간을 모두 차지하도록 설정
const A_Button = styled.button`
    background-color: black;
    color: white;
   height: 52px;
   margin-top : 30px;
    
`
const PictureWrapper = styled.div`
    margin : 10px;
    width: 100%;
    `
const BoxWrapper = styled.div`
    display: flex;
    flex-direction: row;
    `