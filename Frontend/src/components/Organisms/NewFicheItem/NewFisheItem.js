import React from 'react';
import './NewFicheItem.scss';
import StyledH2 from '../../Atoms/Typography/H2/H2';
import trashSVG from '../../../assets/trash.svg';
import dragSVG from '../../../assets/drag.svg';
import ButtonIcon from '../../Atoms/ButtonIcon/ButtonIcon';
import StyledInput from '../../Atoms/StyledInput/StyledInput';

const NewFisheItem = ({fisheNumber=0}) => {
    const deleteFisheHandler = () => {
        console.log(`delet this`);
    }

    const dragFisheHandler = () => {
        console.log(`delet this`);
    }

    return(
    <div className="newFischeItem">
        <div className="newFischeItem__header">
            <StyledH2 color="black">{fisheNumber}</StyledH2>
            <div className="newFischeItem__header--flex">
            <ButtonIcon 
                icon={trashSVG} 
                onClickFn={deleteFisheHandler}
                alt="Delete item" />
            <ButtonIcon 
                icon={dragSVG} 
                onClickFn={dragFisheHandler}
                alt="Drag item" />
            </div>
        </div>
        <div className="newFischeItem__form">
            <div className="newFischeItem__form--item">
                <StyledInput 
                    id={`concept-${fisheNumber}`} 
                    labelValue="concept" />
            </div>
            <div className="newFischeItem__form--item">
                <StyledInput 
                    id={`definition-${fisheNumber}`}
                    labelValue="definition" />
            </div>
        </div>
    </div>
    );
}

export default NewFisheItem;