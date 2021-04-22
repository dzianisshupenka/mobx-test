import { makeAutoObservable } from "mobx"

class Names {
    firstName = ''
    lastName = ''
    firstNameError = false
    lastNameError = false
    
    constructor() {
        makeAutoObservable(this)
    }

    setFirstName(value: string) {
        this.firstName = value
    }

    setLastName(value: string) {
        this.lastName = value
    }

    setFirstNameError(value: boolean) {
        this.firstNameError = value
    }


    setLastNameError(value: boolean) {
        this.lastNameError = value
    }
}

export default new Names()
