export default function authHeader() {
    const userStr = localStorage.getItem("user");
    let user = null;
    if (userStr)
        user = JSON.parse(userStr);

    if (user && user.regisToken) {
        return {
            'Content-Type': 'application/json;charset=UTF-8',
            Authorization: 'JWT ' + user.regisToken
        };
        // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
    } else {
        return {
            'Content-Type': 'application/json;charset=UTF-8',
            Authorization: ''
        };
    }
}