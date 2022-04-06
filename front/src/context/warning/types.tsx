export interface IWarning {
    description: string;
    class: string;
    updateWarning?: (warning:IWarning) => void
}

export const initialWarning = {
    description: "",
    class: "",
    updateWarning: ()=>{}
}