import React, { useReducer, FC, useContext } from 'react';
import UserContext from './UserContext';
import { IUser, initialUser } from './types';
import UserReducer from './UserReducer';
import WarningContext from '../warning/WarningContext';
import { ADD_USER } from '../../actions';

const UserState: FC = props => {

    const [state, dispatch] = useReducer(UserReducer, initialUser);
    const warning = useContext(WarningContext);


    const addUser = (user: IUser) => {
        // Validations
        // Validate that fields are not empty
        if ((user.first_name?.length === 0) || (user.last_name?.length === 0) || (user.email?.length === 0) || (user.password?.length === 0) || (user.confirm_password?.length === 0) ||
        (user.address?.length === 0) || (user.country?.length === 0) || (user.state?.length === 0) || (user.city?.length === 0) || (user.phone?.length === 0)){
            warning.updateWarning!({
                description: "All fields must be filled",
                class: "error-message"
            })
            window.scrollTo(0, 0);
        }

        // Validate that passwords match
        if (user.password !== user.confirm_password) {
            warning.updateWarning!({
                description: "Password does not match",
                class: "error-message"
            })
            window.scrollTo(0, 0);
        }

        // Validation of valid email is done by browser

        try {
            dispatch({
                type: ADD_USER,
                payload: user
            });

        } catch (e) {
            console.log(e)
        }
    }

    return (
        <UserContext.Provider
        value={{
            first_name: state.first_name,
            last_name: state.last_name,
            email: state.email,
            password: state.password,
            country: state.country,
            city: state.city,
            address: state.address,
            addUser
        }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserState;