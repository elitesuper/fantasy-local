import {AuthService} from "./auth.service";

export async function authHeader() {

    let TokenData = AuthService.shared.getCurrentToken();

    let token = "Bearer " + TokenData?.authToken;
    
    return {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "POST, PUT, PATCH, GET, DELETE, OPTIONS",
        'Authorization': token
    };
    // return { 'x-access-token': AuthService.shared.getCurrentToken() };       // for Node.js Express back-end
}

export async function uploadHeader() {

    let TokenData = AuthService.shared.getCurrentToken();

    let token = "Bearer " + TokenData?.authToken;
    
    return {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "POST, PUT, PATCH, GET, DELETE, OPTIONS",
        'Authorization': token
    };
    // return { 'x-access-token': AuthService.shared.getCurrentToken() };       // for Node.js Express back-end
}

export function headers() {
    return {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "POST, PUT, PATCH, GET, DELETE, OPTIONS",
    };
}