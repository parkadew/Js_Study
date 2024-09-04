import { Input, Title, Wrapper, Wrapper__Paper, Container, Header_Box } from "../../../styles/portfolio"
import TextBox from "./TextBox"


const portfolio1 = () => {

    return <Container>
        <Wrapper__Paper>
            <Title>게시물 등록</Title>
            <Header_Box>
                <TextBox title='작성자' placeholder='이름을 입력해주세요'></TextBox>
                <TextBox title='비밀번호' placeholder='비밀번호를 입력해주세요'></TextBox>
            </Header_Box>
        </Wrapper__Paper>

    </Container>

}
export default portfolio1