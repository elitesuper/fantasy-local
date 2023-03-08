const getAvatar = (baseURL: string, targetUrl: string, patternUrl:string) => {
    if(targetUrl && targetUrl !=""){
        return baseURL + targetUrl
    }
    return patternUrl;
}

export default getAvatar;
