import styled from "@emotion/styled";

export const Container = styled.div`
display: flex;
justify-content: center;
height: 100vh;
`

export const Wrapper__Paper = styled.div`
width: 100%;
height: 100%;
background-color: aqua;
margin: 150px;
display: flex;
//justify-content: center; 이게 세로에서 중앙 도 됌
flex-direction: column;
align-items: center;
`

export const Title = styled.div`
font-weight: 700;
font-size: 36px;
`
export const Input = styled.input`
width: 100%;
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

`

export const BoxTitle__Wrapper = styled.div`

`

export const BoxTitle = styled.div`
    font-size: 16px;
    font-weight: 500;
`

