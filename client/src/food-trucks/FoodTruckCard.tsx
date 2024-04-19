import {FC} from "react";
import {FoodTruck} from "../models/FoodTruck.ts";

interface OwnProps {
    foodTruck: FoodTruck;
}

export const FoodTruckCard: FC<OwnProps> = ({ foodTruck }) => {
    return <div className="p-2 rounded-md bg-gray-400">
        <div>{foodTruck.name}</div>
        <div>{foodTruck.tagline}</div>
        <div>{foodTruck.address}</div>
    </div>
}
