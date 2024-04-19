import {config} from "../../config";
import {FoodTruck} from "../models/FoodTruck";


export const getFoodTrucks = async (): Promise<FoodTruck[]> => {
    const response = await fetch(config.sfFoodTruckEndpoint);
    const foodTruckResponseItems = await response.json() as FoodTruckResponseItem[];
    return foodTruckResponseItems.map(mapFoodTruckResponseItemToFoodTruck);
};

const mapFoodTruckResponseItemToFoodTruck = (foodTruckResponseItem: FoodTruckResponseItem): FoodTruck => {
    return {
        name: foodTruckResponseItem.applicant,
        tagline: foodTruckResponseItem.optionaltext,
        latitude: Number(foodTruckResponseItem.latitude),
        longitude: Number(foodTruckResponseItem.longitude),
        address: foodTruckResponseItem.location
    } as FoodTruck
}

interface FoodTruckResponseItem {
    applicant: string;
    optionaltext: string;
    latitude: string;
    longitude: string;
    location: string;
}
