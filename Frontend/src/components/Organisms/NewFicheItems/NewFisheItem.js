import React from 'react';
import styled, {keyframes} from 'styled-components';
import StyledH2 from '../../Atoms/Typography/H2/H2';
import deleteSVG from '../../../assets/criss-cross.svg';
import ButtonIcon from '../../Atoms/ButtonIcon/ButtonIcon';
import StyledInput from '../../Atoms/StyledInput/StyledInput';

const CardAnimation = keyframes`
    from{
        opacity:0;
    }
    to{
        opacity:1;
    }
`

const Container = styled.div`
    animation: 0.2s ${CardAnimation} ease-in;
    margin-top: 10px;
`

const ContainerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    background-color: white;    
    
`

const FlexWrapper = styled.div`
    display: flex;
    align-items: center;
`

const ContnainerBody = styled.div`
    display: flex;
    width: 100%;
    margin-top: 3px;
    justify-content: center;
    background-color: white;
    padding: 30px;
`

const FormItem = styled.div`
    width: 45%;
    margin-left:20px;
`

const NewFisheItem = ({fisheNumber=0, deleteFn}) => {
    const deleteFisheHandler = () => {
        deleteFn(fisheNumber);
    }


    return(
    <Container>
        <ContainerHeader>
            <StyledH2 color="black">{fisheNumber}</StyledH2>
            <FlexWrapper>
            <ButtonIcon 
                icon={deleteSVG} 
                onClickFn={deleteFisheHandler}
                alt="Delete Fishe" />
            </FlexWrapper>
        </ContainerHeader>
        <ContnainerBody>
            <FormItem>
                <StyledInput 
                    id={`concept-${fisheNumber}`} 
                    labelValue="concept" />
            </FormItem>
            <FormItem>
                <StyledInput 
                    id={`definition-${fisheNumber}`}
                    labelValue="definition" />
            </FormItem>
        </ContnainerBody>
    </Container>
    );
}

export default NewFisheItem;