const getDeviceRegistration = (): string =>{
    const navigator_info = window.navigator;
    const screen_info = window.screen;
    let registration: string = navigator_info?.mimeTypes?.length.toString();
    registration += navigator_info.userAgent.replace(/\D+/g, '');

    return registration
}

export default getDeviceRegistration;