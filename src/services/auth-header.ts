import {AuthService} from "./auth.service";

export async function authHeader() {
    let tokenValue = AuthService.shared.getCurrentToken();
    if (!tokenValue) {
        try {
            const token: any = await AuthService.shared.getToken({userName: 'IPhone', Password: 'I@S'});
            tokenValue = token?.token;
        } catch (e) {
            tokenValue = '';
        }
    }
    console.log(tokenValue);
    AuthService.shared.setToken(tokenValue);
    return {
        'Content-Type': 'application/json;charset=UTF-8',
        Authorization: tokenValue
    };
    // return { 'x-access-token': AuthService.shared.getCurrentToken() };       // for Node.js Express back-end
}

export function headers() {
    return {
        'Content-Type': 'application/json;charset=UTF-8',
    };
}