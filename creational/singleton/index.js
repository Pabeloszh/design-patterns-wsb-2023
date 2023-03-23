class AxiosSingleton {
    static instance
    
    constructor() {
        if(AxiosSingleton.instance) return AxiosSingleton.instance

        this.baseUrl = "http://127.0.0.1:8000/api"

        AxiosSingleton.instance = this
    }

    getInstance() {
        return this
    }
}

const axios = new AxiosSingleton()