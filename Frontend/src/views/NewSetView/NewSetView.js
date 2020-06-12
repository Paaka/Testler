import React from 'react';
import MainTemplate from '../../templates/MainTemplate';
import './NewSetView.scss';
import StyledH2 from '../../components/Atoms/Typography/H2/H2';
import StyledInput from '../../components/Atoms/StyledInput/StyledInput';
import Button from '../../components/Atoms/Button/Button';
import NewFisheItem from '../../components/Organisms/NewFicheItem/NewFisheItem';

const NewSetView = () => {

    const createNewSet = () => {
        console.log('Work');
    }

    return (
    <MainTemplate>
        <div className="newSetWrapper">
            <StyledH2 color="black">Create new set :</StyledH2>
            <div className="titleAndDescriptionWrapper">
            <StyledInput
                id="Title"
                placeholder={`Enter title, for example : "Javascript is the Best".`}
                labelValue="Title" />
            <StyledInput
                id="setDesription"
                placeholder={`Add additional description, "Vocabulary to French test."`}
                labelValue="Description" />
                
            </div>
            <div className="rightTopPosition">
               <Button onClickFn={createNewSet}>Create</Button>
            </div>
            <NewFisheItem> </NewFisheItem>
        </div>
    </MainTemplate>
    );
};

export default NewSetView;