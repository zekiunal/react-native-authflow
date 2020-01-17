import React from 'react';

export default class AuthFlowConfig {
    static configuration = {
        api: {},
        SignIn: {},
        SignUp: {},
        SignOut: {},
        translate: {
            en: {
                RTL: false,
                button: {
                    signUp: 'Sign Up',
                    signIn: 'Sign In',
                    signOut: 'Sign Out'
                }
            },
            tr: {
                RTL: false,
                button: {
                    signUp: 'Üye Ol',
                    signIn: 'Giriş',
                    signOut: 'Çıkış'
                }
            }
        },
        language: 'en'
    };

    static setConfig(config) {
        console.log('setConfig');
        this.configuration = {...this.configuration, config}
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
        this.configuration.api = {...this.configuration.api, config}
        return this.configuration.api;
    }
}
