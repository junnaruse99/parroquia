import React, { useReducer, FC } from 'react';
import UserContext from './UserContext';
import { IUser, initialUser, IFamilyMember } from './types';
import UserReducer from './UserReducer';
import { ADD_USER, ADD_FAMILY } from '../../actions';

const UserState: FC = props => {

    const [state, dispatch] = useReducer(UserReducer, initialUser);


    const addUser = (user: IUser) => {

        try {
            dispatch({
                type: ADD_USER,
                payload: user
            });

        } catch (e) {
            console.log(e)
        }
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
            addUser,
            addFamily
        }}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserState;