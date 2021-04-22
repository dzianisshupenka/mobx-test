import { observer } from 'mobx-react-lite';
import React from 'react';
import modal from '../store/modal';
import Names from '../store/names';

const ModalComponent:React.FC = observer(() => {

    const closeModalHandler = () => {
        modal.setModalVisibility(false)
        Names.setFirstName('')
        Names.setLastName('')
    }

    return  (<div className="modal-wrapper">
                <div className="modal-content">
                    <h3>Здравствуйте, {Names.firstName.toUpperCase()} {Names.lastName.toUpperCase()}</h3>
                    <button className="open-close-button" onClick={() => closeModalHandler()}>Закрыть</button>
                </div>
            </div>)
});

export default ModalComponent;