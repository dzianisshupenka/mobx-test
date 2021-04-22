import React from 'react';

type ModalPropsType = {
    firstName: string,
    lastName: string,
    closeModal(): void
}

const ModalComponent:React.FC<ModalPropsType> = ({firstName, lastName, closeModal}) => {
    return (
        <div className="modal-wrapper">
            <div className="modal-content">
                <h3>Здравствуйте, {firstName.toUpperCase()} {lastName.toUpperCase()}</h3>
                <button className="open-close-button" onClick={() => closeModal()}>Закрыть</button>
            </div>
        </div>
    );
};

export default ModalComponent;