
import styled from "@emotion/styled"

//inline과 block요소를 교차해서 변경시켜줄수있다.


const BoxSizing = () => {

    return <S.Container >
        <Box1  >왜이래</Box1>
        <Box2 ></Box2>
        <Box3></Box3>
    </S.Container>

}
//boxsizing borderbox 지정해주기 전체 선택자

export default BoxSizing

const Container = styled.div`
background-color: gray;
position: relative;
display: flex;
flex-direction: column;
width: 100%;
height: auto;
`
const Box1 = styled.div`
  width: 200px;
  height: 200px;
  background-color: white;
  border: 3px solid blue;
  box-sizing: content-box;
  padding: 50px;
`
const Box2 = styled.div`
  width: 200px;
  height: 200px;
  background-color: white;
  border: 3px solid red;
  box-sizing: border-box;
  padding: 50px;
`
const Box3 = styled.div`
  width: 200px;
  height: 200px;
  background-color: white;
  border: 3px solid green;
`




const S = {
    Container,
    Box1,
    Box2,
    Box3,


}