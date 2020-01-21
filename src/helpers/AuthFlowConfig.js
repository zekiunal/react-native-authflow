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
                "Sign In": null,
                "Sign Up": null,
                "Sign Out": null,
                "E-Mail": null,
                "Password": null,
                "loading": null,
                "Already have an account? Sign in instead": null,
                "Dont you have an account? Sign up instead": null
            },
            "tr": {
                RTL: false,
                "Sign In": 'Giriş',
                "Sign Up": 'Üye Ol',
                "Sign Out": 'Çıkış',
                "E-Mail": 'E-Posta Adresi',
                "Password": 'Şifre',
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
