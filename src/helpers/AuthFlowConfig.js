import React from 'react';
import {_} from 'lodash';
import translate from "./translate";

export default class AuthFlowConfig {
    static configuration = {
        api: {},
        SignIn: {},
        SignUp: {},
        SignOut: {},
        translate: translate,
        language: 'tr',
        defaultRoute: 'Home'
    };

    static setConfig(config) {
        this.configuration = _.merge({}, this.configuration, config);
    }

    static getConfig() {
        console.log('getConfig');
        return this.configuration;
    }

    static getApiConfig() {
        console.log('getApiConfig');
        return this.configuration.api;
    }

    static setApiConfig(config) {
        this.configuration.api = _.merge({}, this.configuration.api, config);
        return this.configuration.api;
    }
}
