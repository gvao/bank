export default class Observer {
    
    listeners = []
    subscribe = listener => this.listeners.push(listener)
    notify(...args) { this.listeners.forEach(listener => listener(...args)) }
}
