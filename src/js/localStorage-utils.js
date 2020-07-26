import { CONFIGS } from '../configs'

var md5 = require('md5')

export const userLogout = () => {
    localStorage.removeItem(CONFIGS.LOCAL_UUID_KEY)
    localStorage.removeItem(CONFIGS.LOCAL_USER_EMAIL_KEY)
    localStorage.removeItem(CONFIGS.LOCAL_USER_NAME_KEY)
    localStorage.removeItem(CONFIGS.LOCAL_USER_PIC_KEY)
    localStorage.removeItem(CONFIGS.LOCAL_USER_AUTH_PROVIDER_KEY)
}

export const userLogin = (signIn) => {
    localStorage.setItem(CONFIGS.LOCAL_UUID_KEY, md5(signIn.email))
    localStorage.setItem(CONFIGS.LOCAL_USER_EMAIL_KEY, signIn.email)
    localStorage.setItem(CONFIGS.LOCAL_USER_NAME_KEY, signIn.name)
    if(signIn.imageUrl === null){
        localStorage.setItem(
            CONFIGS.LOCAL_USER_PIC_KEY, 
            ('https://via.placeholder.com/300.webp/eee/999?text=' + signIn.name[0])
        )
    }else{
        localStorage.setItem(CONFIGS.LOCAL_USER_PIC_KEY, signIn.imageUrl)
    }
    localStorage.setItem(CONFIGS.LOCAL_USER_AUTH_PROVIDER_KEY, signIn.provider)
}

export const getUser = () => {
    let u = {
        username: localStorage.getItem(CONFIGS.LOCAL_USER_NAME_KEY),
        profilePic: localStorage.getItem(CONFIGS.LOCAL_USER_PIC_KEY),
        email: localStorage.getItem(CONFIGS.LOCAL_USER_EMAIL_KEY),
        provider: localStorage.getItem(CONFIGS.LOCAL_USER_AUTH_PROVIDER_KEY),
        uuid: localStorage.getItem(CONFIGS.LOCAL_UUID_KEY)
    }
    return u;
}

export const getUsername = () => {
    return localStorage.getItem(CONFIGS.LOCAL_USER_NAME_KEY);
}

export const getUserPicture = () => {
    return localStorage.getItem(CONFIGS.LOCAL_USER_PIC_KEY);
}