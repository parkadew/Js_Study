import styled from "@emotion/styled";

export const Container = styled.div`
display: flex;
justify-content: center;
`

export const Wrapper__Paper = styled.div`
width: 100%;
height: 100%;
margin: 80px;
display: flex;
//justify-content: center; 이게 세로에서 중앙 도됌
flex-direction: column;
align-items: center;
box-shadow: 10px 10px 20px rgba(0,0,0,0.3);
`

export const Title = styled.div`
font-weight: 700;
font-size: 36px;
margin-bottom: 50px;
`
export const Input = styled.input`
width: 100%;
height: 40px;
margin-top: 10px;
border: 1px solid #ccc;
border-radius: 2px;

&:focus {
    border-color: #aaa;
    outline: none;
}

&::placeholder {
    color: #aaa;
    
}

`

//---------

//textboxcss

export const Header_Box = styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-around;
`

export const Body_Box = styled.div`
    width: 100%;
    display: flex;
    display: row;
    flex-wrap: wrap;
    margin-top: 15px;
`
export const Bottom_Box = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap; // 요소들이 필요할 경우 다음 줄로 넘어갈 수 있게 설정
`
export const PictureBox = styled.div`
    width: 78px;
    height: 78px;
    margin-top: 10px;
    margin-right: 20px;
    background-color: gray;
`


export const BoxTitle__Wrapper = styled.div`
margin : 10px;
width: 100%;

`

export const BoxTitle = styled.div`
    font-size: 16px;
    font-weight: 500;
`
export const MainSetting = styled.div`
 width: 100%;
 margin: 15px;
`
