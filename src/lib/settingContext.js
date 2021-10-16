// Core
import { createContext, useState } from 'react';

export const Context = createContext([false, () => null]);

export const SettingProvider = (props) => {
    const [temp, setTemperature] = useState("");
    const [coordinate, setCoordinate] = useState("");
    const [allowment, setAllowment] = useState(false)
    const store = {temp, setTemperature, coordinate, setCoordinate,allowment, setAllowment}
    console.log(coordinate)
    return (
        <Context.Provider value={store}>
            {props.children}
        </Context.Provider>
    );
};
