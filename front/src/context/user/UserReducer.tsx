import { ADD_USER, ADD_FAMILY } from '../../actions';

const UserReducer  = (state: any, action: any) => {

    switch(action.type) {
        case ADD_USER:
            return {
                ...action.payload
            }
        case ADD_FAMILY:
            return {
                ...state,
                family_members: action.payload
            }
    }
}

export default UserReducer;