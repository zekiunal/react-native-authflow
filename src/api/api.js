import axios from 'axios';

export default class api {

    static configuration= false;

    static requester= axios.create({});

    static setConfig(config) {
        this.configuration = config;
        this.requester = axios.create(this.configuration);
        return this;
    }
}
