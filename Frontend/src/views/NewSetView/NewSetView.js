import React from 'react';
import styled from 'styled-components';

import MainTemplate from '../../templates/MainTemplate';
import StyledH2 from '../../components/Atoms/Typography/H2/H2';
import StyledInput from '../../components/Atoms/StyledInput/StyledInput';
import Button from '../../components/Atoms/Button/Button';
import NewFisheItem from '../../components/Organisms/NewFicheItems/NewFisheItem';
import colors from '../../constants/colors';
import NewSetBtn from '../../components/Organisms/NewFicheItems/NewSetBtn';


const NewSetWrapper = styled.div`
    background-color: ${colors.white};
    padding: 2rem;
    width: 100%;
    height: 90vh;
    position: relative;
`

const SetTitleAndDescription = styled.div`
    margin: 10px 0;
    width: 50%;
`

const RightButtonWrapper = styled.div`
    position: absolute;
    right: 10px;
    top:10px;
`

const NewSetView = () => {

    const createNewSet = () => {
        console.log('Work');
    }

    return (
    <MainTemplate>
        <NewSetWrapper>
            <StyledH2 color="black">Create new set :</StyledH2>
            <SetTitleAndDescription>
            <StyledInput
                id="Title"
                placeholder={`Enter title, for example : "Javascript is the Best".`}
                labelValue="Title" />
            <StyledInput
                id="setDesription"
                placeholder={`Add additional description, "Vocabulary to French test."`}
                labelValue="Description" />
            </SetTitleAndDescription>
            <RightButtonWrapper>
               <Button onClickFn={createNewSet}>Create</Button>
            </RightButtonWrapper>
            <NewFisheItem> </NewFisheItem>
            <NewSetBtn></NewSetBtn>
        </NewSetWrapper>
    </MainTemplate>
    );
};

export default NewSetView;