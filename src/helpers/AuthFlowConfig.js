import React from 'react';

export default class authFlowConfig {
    static configuration = {
        api: {},
        SignIn: {},
        SignUp: {},
        SignOut: {}
    };

    static setConfig(config) {
        console.log('setConfig');

        this.configuration = config;
    }

    static getConfig() {
        console.log('getConfig');

        return this.configuration;
    }

    static getApiConfig() {
        console.log('getApiConfig');
        return this.configuration.api;
    }
}
