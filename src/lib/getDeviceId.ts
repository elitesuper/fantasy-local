export const getDeviceId = (): string => {
    const navigator_info = window.navigator;
    const screen_info = window.screen;
    let uid: string = navigator_info?.mimeTypes?.length.toString();
    uid += navigator_info.userAgent.replace(/\D+/g, '');
    uid += navigator_info.plugins.length;
    uid += screen_info.height || '';
    uid += screen_info.width || '';
    uid += screen_info.pixelDepth || '';
    return uid;
};

export default getDeviceId;
