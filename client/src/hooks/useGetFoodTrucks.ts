import {useCallback, useEffect, useState} from "react";
import {config} from "../config.ts";
import {FoodTruck} from "../models/FoodTruck.ts";

type OwnProps = {
    latitude?: number;
    longitude?: number;
    radius?: number;
    take?: number;
    skip?: number;
}

export const useGetFoodTrucks = ({ latitude, longitude, radius = 5, take = 3, skip = 0 }: OwnProps) => {
    const [foodTrucks, setFoodTrucks] = useState<FoodTruck[]>();

    const getFoodTrucks = useCallback(async () => {
        if (latitude && longitude) {
            let getFoodTrucksUrl = `${config.weHongryApiBaseEndpoint}/trucks`;
            getFoodTrucksUrl += `?latitude=${latitude}&longitude=${longitude}&radius=${radius}`;
            getFoodTrucksUrl += `&take=${take}&skip=${skip}`;

            const response = await fetch(getFoodTrucksUrl);
            const getFoodTrucksResponse = await response.json() as GetFoodTrucksReponse;
            setFoodTrucks(getFoodTrucksResponse.items);
        }
    }, [latitude, longitude, radius, take, skip]);

    useEffect(() => {
        getFoodTrucks();
    }, [getFoodTrucks, latitude, longitude, radius, take, skip]);

    return {
        foodTrucks,
    };
}

type GetFoodTrucksReponse = {
    items: FoodTruck[];
}
