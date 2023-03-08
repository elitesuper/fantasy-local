import React, {useState, useContext, createContext, useLayoutEffect} from 'react';
import {AuthService} from "../services/auth.service";
import {Navigate, Route} from 'react-router-dom';

const defaultState = {
    authorized: false,
};

export const AuthContext = createContext(defaultState);
export const AuthProvider = (props: { children: any; }) => {
    const [authorize, setAuthorize] = useState(false);

    const { children } = props;

    useLayoutEffect(() => {
        const auth = AuthService.shared.checkAuthenticate();
        if (auth !== authorize) {
            setAuthorize(auth);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <AuthContext.Provider
            value={{ authorized: authorize }}
        >
            {children}
        </AuthContext.Provider>
    );
}

// @ts-ignore
export const AuthRoute = ({ element: Component, ...rest }) => (
    <AuthContext.Consumer>
        {
            (authorize) => authorize.authorized?React.useContext(Component):<Navigate to="/" />
        }
    </AuthContext.Consumer>
);