import React, { useReducer, FC, useContext } from 'react';
import UserContext from './UserContext';
import { IUser, initialUser, IFamilyMember } from './types';
import WarningContext from '../../context/warning/WarningContext';
import UserReducer from './UserReducer';
import { ADD_USER, ADD_FAMILY } from '../../actions';

const UserState: FC = props => {

    const [state, dispatch] = useReducer(UserReducer, initialUser);
    const warning = useContext(WarningContext);

    const addUser = (user: IUser, newUser: boolean) : boolean => {

        // Validations
        // Validate that fields are not empty

        if ((newUser && ((user.password?.length === 0) || (user.confirm_password?.length === 0))) || (user.first_name?.length === 0) || (user.last_name?.length === 0) || 
        (user.email?.length === 0) || (user.address?.length === 0) || (user.country?.length === 0) || (user.state?.length === 0) || (user.city?.length === 0) || 
        (user.phone?.length === 0) || (user.gender?.length === 0)) {
            warning.updateWarning!({
                description: "All fields must be filled",
                class: "error-message"
            })
            window.scrollTo(0, 0);
            return false;
        }

        // Validate that passwords match
        if (newUser && user.password !== user.confirm_password) {
            warning.updateWarning!({
                description: "Password does not match",
                class: "error-message"
            })
            window.scrollTo(0, 0);
            return false;
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

        return true;
    }

    const addFamily = (family: IFamilyMember[]) => {

        try {
            dispatch({
                type: ADD_FAMILY,
                payload: family
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
            date_of_birth: state.date_of_birth,
            gender: state.gender,
            country: state.country,
            state: state.state,
            city: state.city,
            address: state.address,
            phone: state.phone,
            family_members: state.family_members,
            addUser,
            addFamily
        }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserState;