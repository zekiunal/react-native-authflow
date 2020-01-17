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
                },
                link: {
                    signUp: "Dont you have an account? Sign up instead",
                    signIn: "Already have an account? Sign in instead"
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
        language: 'tr'
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
