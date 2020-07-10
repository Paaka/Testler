import React from 'react';
import styled from 'styled-components';
import StyledH2 from '../../Atoms/Typography/H2/H2';
import trashSVG from '../../../assets/trash.svg';
import dragSVG from '../../../assets/drag.svg';
import ButtonIcon from '../../Atoms/ButtonIcon/ButtonIcon';
import StyledInput from '../../Atoms/StyledInput/StyledInput';

const Container = styled.div`
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

const NewFisheItem = ({fisheNumber=0}) => {
    const deleteFisheHandler = () => {
        console.log(`delet this`);
    }

    const dragFisheHandler = () => {
        console.log(`drag this`);
    }

    return(
    <Container>
        <ContainerHeader>
            <StyledH2 color="black">{fisheNumber}</StyledH2>
            <FlexWrapper>
            <ButtonIcon 
                icon={trashSVG} 
                onClickFn={deleteFisheHandler}
                alt="Delete item" />
            <ButtonIcon 
                icon={dragSVG} 
                onClickFn={dragFisheHandler}
                alt="Drag item" />
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