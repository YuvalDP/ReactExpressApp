export const CHANGE_APP = 'CHANGE_APP';

export const ChangeApp = (appName) => {
    return {
        type : CHANGE_APP,
        payload : appName
    }
};