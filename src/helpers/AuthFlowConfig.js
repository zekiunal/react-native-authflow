import React from 'react';
import {_} from 'lodash';

export default class AuthFlowConfig {
    static configuration = {
        api: {},
        SignIn: {},
        SignUp: {},
        SignOut: {},
        translate: {
            "en": {
                RTL: false,
                signUp: 'Üye Ol!',
                signIn: 'Giriş',
                signOut: 'Çıkış',
                "E-Mail": 'E-Mail',
                password: 'Şifre',
                signUpLink: "Kayıtlı bir hesabınız yok mu? Üye olun!",
                signInLink: "Zaten üye misiniz? Giriş yapın!",
                "loading": 'loading...',
                "Already have an account? Sign in instead" : "Already have an account? Sign in instead",
                "Dont you have an account? Sign up instead": "Dont you have an account? Sign up instead"
            },
            "tr": {
                RTL: false,
                signUp: 'Üye Ol!',
                signIn: 'Giriş',
                signOut: 'Çıkış',
                password: 'Şifre',
                signUpLink: "Kayıtlı bir hesabınız yok mu? Üye olun!",
                signInLink: "Zaten üye misiniz? Giriş yapın!",
                "loading": 'yükleniyor',

                "Already have an account? Sign in instead" : "Zaten üye misiniz? Giriş yapın!",
                "Dont you have an account? Sign up instead": "Kayıtlı bir hesabınız yok mu? Üye olun!"
            }
        },
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
