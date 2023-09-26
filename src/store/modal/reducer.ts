import { CHANGE_MODAL_STATE} from "./action"
import { ModalAction,ModalState } from "./typesModal"


const modalState: ModalState = {
    show: false,
    name:''
};


export const modalReducer = (state = modalState, action:ModalAction):ModalState => {

    switch (action.type) {
        case CHANGE_MODAL_STATE: {
            return { ...state, show:action.show, name:action.name}
        }
        default:
            return state
    }
}