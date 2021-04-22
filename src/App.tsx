import { observer } from 'mobx-react-lite';
import React from 'react';
import FormComponent from './components/FormComponent';
import ModalComponent from './components/ModalComponent';
import modal from './store/modal';

const App:React.FC = observer(() => {
    return (
        <div className="app-container">
            <FormComponent />
            {modal.isVisible && <ModalComponent />}
        </div>
    );
});

export default App;