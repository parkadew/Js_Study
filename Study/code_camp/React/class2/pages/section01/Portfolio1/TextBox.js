import { BoxTitle, BoxTitle__Wrapper, Input } from "../../../styles/portfolio"


const TextBox = ({ title, placeholder, style, inputStyle }) => {

    return <>

        <BoxTitle__Wrapper style={style}>
            <BoxTitle>{title}</BoxTitle>
            <Input type="text" placeholder={placeholder} style={inputStyle}></Input>
        </BoxTitle__Wrapper>
    </>
}
export default TextBox