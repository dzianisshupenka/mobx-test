import { makeAutoObservable } from "mobx"

class Modal {
    isVisible = false
    constructor() {
        makeAutoObservable(this)
    }

    setModalVisibility(value: boolean) {
        this.isVisible = value
    }
}

export default new Modal()