export interface UserData {
    uId: string;
    mobNo: string;
    fName: string;
    lName: string;
    email: string;
    dob: Date;
    city: string;
    pic: string;
    uType: string;
    country: string;
    uStatus: string;
    wins: number;
    lost: number;
    unreadNotifications: string;
    preferredSportId: number;
    regisToken: string | undefined;
    isLoggedIn: boolean | undefined;
    appStoreUrl: string | undefined;
    playStoreUrl: string | undefined;
    sportId: number | undefined;
}

export interface User {
    mobileNumber: string;
    deviceToken: string;
    deviceRegistration: string;
    password: string | undefined;
}

export interface PhoneVerify {
    mobileNumber: string;
    verificationCode: string;
}