export const CHANGE_MODAL_STATE = 'CHANGE_POPUP_STATE';

export const changeModalShow = (show: boolean, name:string) => ({
    type: CHANGE_MODAL_STATE,
    show,
    name

})
