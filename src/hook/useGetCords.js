import { useContext } from "react";
import { Context } from "../lib/settingContext";


export const useGetCordinate = () => {
const {setCoordinate, allowment, coordinate} = useContext(Context)
if(allowment&&!coordinate){
    let options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    function success(pos) {
        const crd = pos.coords;
        setCoordinate(`/?lattlong=${crd.latitude},${crd.longitude}`)
    };

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    navigator.geolocation.getCurrentPosition(success, error, options)
}
}