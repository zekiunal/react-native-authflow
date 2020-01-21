import createDataContext from './createDataContext';
import AuthFlowConfig from "../helpers/AuthFlowConfig";
import AsyncStorage from '@react-native-community/async-storage';

let config = AuthFlowConfig.getConfig();
let default_language = loaded_language = config.language;
let isReady = false;
let dictionary = config.translate;

const initLanguageFlow = async (dispatch) => {
    console.log("initLanguageFlow");
    const language = await AsyncStorage.getItem('language');
    if (language) {
        if (isReady !== true) {
            if (default_language != language) {
                loaded_language = language;
                dispatch({type: "changeLanguage", payload: language})
            }
            dispatch({type: "ready", payload: true})
        }
    } else {
        const language = loaded_language = default_language;
        if (isReady !== true) {
            dispatch({type: "changeLanguage", payload: language})
            dispatch({type: "ready", payload: true})
        }
    }
};

const languageReducer = (state, action) => {

    console.log("languageReducer", action, state);

    switch (action.type) {
        case 'ready':
            if (state.isReady !== action.payload) {
                isReady = true;
                return {...state, isReady: action.payload};
            }
            return state;
        case 'changeLanguage':
            if (state.language !== action.payload) {
                loaded_language = action.payload;
                return {...state, language: action.payload};
            }
            return state;
        default:
            return state;
    }
};

const translate = (dispatch) => (key) => {
    lang = loaded_language;
    return dictionary[lang][key] ? dictionary[lang][key] : key;
}
const changeLanguage = (dispatch) => async (language) => {
    console.log("changeLanguage", language)
    await AsyncStorage.setItem('language', language);
    dispatch({type: 'changeLanguage', payload: language})
};

export const {Provider, Context} = createDataContext(
    languageReducer,
    {changeLanguage, initLanguageFlow, translate},
    {language: default_language, isReady: false},
);
