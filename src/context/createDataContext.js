import React, {useReducer} from 'react';
import api from "../api/api";

export default (reducer, actions, defaultValue) => {
    const Context = React.createContext();

    const Provider = (props) => {

        const children = props.children;
        const configuration = props.configuration;

        const [state, dispatch] = useReducer(reducer, defaultValue);

        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }
        
        return (
            <Context.Provider value={{state, ...boundActions}}>
                {children}
            </Context.Provider>
        );
    }

    return {Context, Provider}
};
