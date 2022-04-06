import { createContext } from 'react';
import { IUser, initialUser } from './types';

const UserContext = createContext<IUser>(initialUser);

export default UserContext;