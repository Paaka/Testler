import React from 'react';
import MainTemplate from '../../templates/MainTemplate';
import './NewSetView.scss';
import StyledH2 from '../../components/Atoms/Typography/H2/H2';
import StyledInput from '../../components/Atoms/StyledInput/StyledInput';

const NewSetView = () => {
    return (
    <MainTemplate>
        <div className="newSetWrapper">
            <StyledH2 color="black">Create new set :</StyledH2>
            <StyledInput placeholder={`Enter title, for example : "Javascript is the Best".`} labelValue="Title"></StyledInput>
        </div>
    </MainTemplate>
    );
};

export default NewSetView;