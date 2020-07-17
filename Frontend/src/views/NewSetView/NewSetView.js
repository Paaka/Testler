import React, {useState} from 'react';
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
    min-height: 90vh;
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
    const [title,setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [initalState, setIntialState] = useState([
        {
            index:1,
            concept:"123"
        },
        {
            index:2,
            concept:'No ciekawe'
        },
        {
            index:3,
            concept:'xxx'
        }
    ]);

    const createNewSet = (e) => {
        console.log(title, description);
    }

    const addNewFisheHandler = () => {
        const value = initalState.length+1;
        setIntialState(state => [...state, {index:value}]);
    }

    const deleteFisheHandler = (idToDelete) => {
        const newState = initalState.filter(fishe => fishe.index !== idToDelete);
        const deleting = initalState[idToDelete];
        newState.map((fishe, index) => {
            fishe.index = index +1
            console.log(initalState[index])
        });
        setIntialState(newState);
    }

    const onChangeInputHandler = (value,updatingFn) => {
        updatingFn(value);
    }

    return (
    <MainTemplate>
        <NewSetWrapper>
            <StyledH2 color="black">Create new set :</StyledH2>
            <SetTitleAndDescription>
            <StyledInput
                value={title}
                placeholder={`Enter title, for example : "Javascript is the Best".`}
                labelValue="Title"
                someFn={(val)=>onChangeInputHandler(val,setTitle)} />
            <StyledInput
                value={description}
                placeholder={`Add additional description, "Vocabulary to French test."`}
                labelValue="Description"
                someFn={(val)=> onChangeInputHandler(val, setDescription)} />
            </SetTitleAndDescription>
            <RightButtonWrapper>
               <Button onClickFn={createNewSet}>Create</Button>
            </RightButtonWrapper>
            {initalState.map(fishe => <NewFisheItem 
                titleValue={fishe.concept}
                deleteFn={deleteFisheHandler} 
                key={fishe.index} 
                fisheNumber={fishe.index}/>) }
            <NewSetBtn onClickFn={addNewFisheHandler}></NewSetBtn>
        </NewSetWrapper>
    </MainTemplate>
    );
};

export default NewSetView;