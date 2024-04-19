import { config } from '../../config';
import { FoodTruck } from '../models/FoodTruck';
import { Position } from '../models/Position';
import { Paging } from '../models/Paging';

const mapFoodTruckResponseItemToFoodTruck = (foodTruckResponseItem: FoodTruckResponseItem): FoodTruck => {
  return {
    name: foodTruckResponseItem.applicant,
    tagline: foodTruckResponseItem.optionaltext,
    latitude: Number(foodTruckResponseItem.latitude),
    longitude: Number(foodTruckResponseItem.longitude),
    address: foodTruckResponseItem.location,
  } as FoodTruck;
};

export const getFoodTrucks = async (): Promise<FoodTruck[]> => {
  const response = await fetch(config.sfFoodTruckEndpoint);
  const foodTruckResponseItems = await response.json() as FoodTruckResponseItem[];
  return foodTruckResponseItems.map(mapFoodTruckResponseItemToFoodTruck);
};

export const getFoodTrucksInRadius = async (position: Position, radiusInMiles: number, paging: Paging): Promise<{ items: FoodTruck[], pageSize: number, totalCount: number }> => {
  const foodTrucks = await getFoodTrucks();

  // TODO: Implement filtering by radius
  const foodTrucksFilteredByRadius = foodTrucks;

  const foodTrucksPaged = foodTrucksFilteredByRadius.slice(paging.skip, paging.skip + paging.take);

  return {
    items: foodTrucksPaged,
    pageSize: paging.take,
    totalCount: foodTrucksFilteredByRadius.length,
  };
};

interface FoodTruckResponseItem {
  applicant: string;
  optionaltext: string;
  latitude: string;
  longitude: string;
  location: string;
}
