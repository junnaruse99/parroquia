import React, { useState, FC } from 'react';
import { IWarning, initialWarning } from './types';
import WarningContext from './WarningContext';

const WarningState: FC = props => {

    const [warnning, setWarning] = useState<IWarning>(initialWarning);

    const updateWarning = (warningInput : IWarning) => {
        setWarning(warningInput);
    }

    return (
        <WarningContext.Provider
        value={{
            description: warnning.description,
            class: warnning.class,
            updateWarning
        }}>
            {props.children}
        </WarningContext.Provider>
    );
}

export default WarningState;
