import React, { useState } from 'react';
import FormComponent from './components/FormComponent';
import ModalComponent from './components/ModalComponent';

const App = () => {

    const [visible, setVisible] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const closeModalHandler = () => {
        setVisible(false);
        setFirstName('');
        setLastName('');
    }

    return (
        <div className="app-container">
            <FormComponent firstName={firstName} lastName={lastName} openModal={setVisible} setFirstName={setFirstName} setLastName={setLastName} />
            {visible && <ModalComponent firstName={firstName} lastName={lastName} closeModal={closeModalHandler} />}
        </div>
    );
};

export default App;