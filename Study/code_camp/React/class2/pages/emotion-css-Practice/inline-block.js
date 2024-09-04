import styled from "@emotion/styled"

const inlineBlock = () => {
    return <>
        <S.InlineContainer>
            <S.Span>span</S.Span>
            <S.Span>span</S.Span>
            <S.Span>span</S.Span>
            <S.Span>span</S.Span>
        </S.InlineContainer>
        <S.BlockContainer>
            <S.Block>div</S.Block>
            <S.Block>div</S.Block>
            <S.Block>div</S.Block>
            <S.Block>div</S.Block>
        </S.BlockContainer>
    </>
}
export default inlineBlock

const Block = styled.div`
border: 3px solid green;
width: 400px;
display: inline;
`

const Span = styled.span`
    background-color: red;
    width: 400px;
    display: block;
`

const InlineContainer = styled.div`
border: 3px solid red;

`

const BlockContainer = styled.div`
border: 1px solid blue;

`

const S = {
    BlockContainer,
    InlineContainer,
    Span,
    Block

}