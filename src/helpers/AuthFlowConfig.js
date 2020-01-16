import React from 'react';

export default class AuthFlowConfig {

    static configuration = {
        api: {},
        SignIn: {},
        SignUp: {},
        SignOut: {}
    };

    static setConfig(config) {
        this.configuration = config;
    }

    static getConfig() {
        return this.configuration;
    }

    static getApiConfig() {
        return this.configuration.api;
    }
}
