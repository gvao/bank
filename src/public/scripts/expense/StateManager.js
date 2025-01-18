import Observer from './Observer.js'

export default class StateManager {
    /** @private */
    #observer = new Observer
    constructor(initialState) {
        this.state = initialState
    }
    getState(listener) {
        if (listener) this.#observer.subscribe(listener)
        return this.state
    }
    setState(state) {
        this.state = state
        this.#observer.notify(this.state)
    }
}
