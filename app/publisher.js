export default class Publisher {
    static instance = null;

    subscribers = {};

    constructor() {
        if (!Publisher.instance) {
            Publisher.instance = this;
        }
        return Publisher.instance
    }

    subscribe(event, func) {
        if (!this.subscribers[event]) {
            this.subscribers[event] = [];
        }
        this.subscribers[event].push(func);
        console.log(this.subscribeers)
    }
    unsubscribe(event, func) {
        if (!this.subscribers[event]) {
            this.subscribers[event] = [];
        }
        this.subscribers[event].filter(listener => listener != func)
    }

    notify(event, data) {
        if (!this.subscribers[event]) {
            this.subscribers[event] = [];
        }
        this.subscribers[event].forEach(listener => listener(data))

    }
}