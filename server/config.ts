export const config: WeHongryConfiguration = {
    sfFoodTruckEndpoint: process.env.WE_HONGRY_SF_FOOD_TRUCK_ENDPOINT!,
}

type WeHongryConfiguration = {
    sfFoodTruckEndpoint: string;
}
