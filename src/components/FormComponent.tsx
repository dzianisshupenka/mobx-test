import { observer } from 'mobx-react-lite';
import React from 'react';
import modal from '../store/modal';
import Names from '../store/names';

const FormComponent:React.FC = observer(() => {

    const firstNameHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        Names.setFirstName(event.currentTarget.value);
    };

    const lastNameHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        Names.setLastName(event.currentTarget.value);
    };

    const openModalHandler = () => {
        if(Names.firstName && Names.lastName) {
            modal.setModalVisibility(true);
        }
        if (!Names.firstName) {
            Names.setFirstNameError(true)
        } else Names.setFirstNameError(false)
        if (!Names.lastName) {
            Names.setLastNameError(true)
        } else Names.setLastNameError(false)
    }

    return (
        <div className="form-wrapper">
            <form>
                <div>
                    {Names.firstNameError ? (Names.firstName ? null : <div className="required-error">Обязательное поле</div>) : null}
                    <label className="form-label">
                    Имя:
                    <input value={Names.firstName} onChange={(e) => firstNameHandler(e)} />
                    </label>
                </div>
                <div>
                    {Names.lastNameError ? (Names.lastName ? null : <div className="required-error">Обязательное поле</div>) : null}
                    <label className="form-label">
                    Фамилия:
                    <input value={Names.lastName} onChange={(e) => lastNameHandler(e)} />
                    </label>
                </div>
                <div className="button-wrapper">
                    <input className="open-close-button" onClick={() => openModalHandler()} value="Готово" />
                </div>
            </form>
        </div>
    );
}) ;

export default FormComponent;