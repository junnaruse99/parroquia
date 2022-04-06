import { ADD_USER } from '../../actions';

const UserReducer  = (state: any, action: any) => {

    switch(action.type) {
        case ADD_USER:
            return {
                ...action.payload
            }
    }
}

export default UserReducer;