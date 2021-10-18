// Core
import { createContext, useState } from 'react';

export const Context = createContext();

export const SettingProvider = (props) => {
    const [temp, setTemperature] = useState("");
    const [coordinate, setCoordinate] = useState("");
    const [allowment, setAllowment] = useState(false)
    const store = { temp, setTemperature, coordinate, setCoordinate, allowment, setAllowment }
    return (
        <Context.Provider value={store}>
            {props.children}
        </Context.Provider>
    );
};
