import { BoxTitle, BoxTitle__Wrapper, Input } from "../../../styles/portfolio"


const TextBox = ({ title, placeholder }) => {

    return <>

        <BoxTitle__Wrapper>
            <BoxTitle>{title}</BoxTitle>
            <Input type="text" placeholder={placeholder}></Input>
        </BoxTitle__Wrapper>
    </>
}
export default TextBox