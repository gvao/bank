import Observer from './Observer.js'

export default class FormController {
    /** @private */
    observer = new Observer
    constructor() {
        this.form = document.querySelector('.expense__form')
        this.form.addEventListener('submit', event => {
            event.preventDefault()
            const title = this.form.title.value
            const value = this.form.value.value
            const isCredit = this.form.isCredit.checked

            this.form.reset()
            this.observer.notify({ title, value, isCredit })
        })
    }

    onSubmit(listener) {
        this.observer.subscribe(listener)
    }
}
