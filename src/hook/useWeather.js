import { useQuery } from "react-query";
import { api } from "../api/api";

export const useWeather = (coordinate) => {
    const query = useQuery(`${coordinate}`, () => api.getWeather(coordinate))
    return query
}