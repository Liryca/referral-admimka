



export interface ModalAction {
    type: string;
    show: boolean;
    name: string;
}


export type ModalState = {
    show: any;
    name:string
};