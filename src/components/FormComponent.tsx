import React, { useState } from 'react';

type FormPropsType = {
    openModal(flag: boolean): void
    setFirstName(firtName: string): void
    setLastName(lastName: string): void
    firstName: string,
    lastName: string
}

const FormComponent:React.FC<FormPropsType> = ({
    openModal, 
    setFirstName, 
    setLastName,
    firstName,
    lastName}: FormPropsType) => {

        const [firstNameError, setFirstNameError] = useState(false);
        const [lastNameError, setLastNameError] = useState(false);

    const firstNameHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setFirstName(event.currentTarget.value);
    };

    const lastNameHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setLastName(event.currentTarget.value);
    }

    const openModalHandler = () => {
        if(firstName && lastName) {
            openModal(true);
        }
        if (!firstName) {
            setFirstNameError(true)
        } else setFirstNameError(false)
        if (!lastName) {
            setLastNameError(true)
        } else setLastNameError(false)
    }

    return (
        <div className="form-wrapper">
            <form>
                <div>
                    {firstNameError ? (firstName ? null : <div className="required-error">Обязательное поле</div>) : null}
                    <label className="form-label">
                    Имя:
                    <input value={firstName} onChange={(e) => firstNameHandler(e)} />
                    </label>
                </div>
                <div>
                    {lastNameError ? (lastName ? null : <div className="required-error">Обязательное поле</div>) : null}
                    <label className="form-label">
                    Фамилия:
                    <input value={lastName} onChange={(e) => lastNameHandler(e)} />
                    </label>
                </div>
                <div className="button-wrapper">
                    <input className="open-close-button" onClick={() => openModalHandler()} value="Готово" />
                </div>
            </form>
        </div>
    );
};

export default FormComponent;