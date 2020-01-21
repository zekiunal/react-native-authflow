import React, {useReducer} from 'react';
import api from "../api/api";
import AuthFlowConfig from "react-native-authflow/src/helpers/AuthFlowConfig";

export default (reducer, actions, defaultValue) => {

    console.log("createDataContext")

    const Context = React.createContext();

    const Provider = (props) => {

        const children = props.children;

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
