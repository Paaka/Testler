import React, {useRef} from 'react';
import MainTemplate from '../../templates/MainTemplate';
import './NewSetView.scss';
import StyledH2 from '../../components/Atoms/Typography/H2/H2';
import StyledInput from '../../components/Atoms/StyledInput/StyledInput';
import Button from '../../components/Atoms/Button/Button';

const NewSetView = () => {
    const titleRef = useRef(null);

    const createNewSet = () => {
        console.log('Work');
    }

    return (
    <MainTemplate>
        <div className="newSetWrapper">
            <StyledH2 color="black">Create new set :</StyledH2>
            <StyledInput
                id="Title"
                ref={titleRef}
                placeholder={`Enter title, for example : "Javascript is the Best".`}
                labelValue="Title" />
            <StyledInput
                id="setDesription"
                ref={titleRef}
                placeholder={`Additional description, "Words to test"`}
                labelValue="Title" />
            <Button onClickFn={createNewSet}>Create new Set</Button>
        </div>
    </MainTemplate>
    );
};

export default NewSetView;