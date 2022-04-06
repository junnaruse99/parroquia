import { createContext } from 'react';
import { IWarning, initialWarning } from './types';

const WarningContext = createContext<IWarning>(initialWarning);

export default WarningContext;