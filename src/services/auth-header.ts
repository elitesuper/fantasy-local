import {AuthService} from "./auth.service";

export function authHeader() {
    return {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: AuthService.shared.getCurrentToken()
    };
    // return { 'x-access-token': AuthService.shared.getCurrentToken() };       // for Node.js Express back-end
}

export function headers() {
    return {
        'Content-Type': 'application/json;charset=UTF-8',
    };
}