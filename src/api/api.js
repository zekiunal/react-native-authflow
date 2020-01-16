import axios from 'axios';
import {AuthFlowConfig} from "../../index";

/*
export default class api {

    static configuration= {};

    static requester= axios.create({});

    static setConfig(config) {
        this.configuration = config;
        this.requester = axios.create(this.configuration);
        return this;
    }
}
*/

export default axios.create(AuthFlowConfig.getApiConfig())
