import { useCallback, useEffect, useState } from 'react';
import { config } from '../config.ts';
import { FoodTruck } from '../models/FoodTruck.ts';

type OwnProps = {
  latitude?: number;
  longitude?: number;
  radius?: number;
  take?: number;
  skip?: number;
};

export const useGetFoodTrucks = ({
  latitude,
  longitude,
  radius = 5,
  take = 3,
  skip: defaultSkip = 0,
}: OwnProps) => {
  const [skip, setSkip] = useState<number>(defaultSkip);
  const [foodTrucks, setFoodTrucks] = useState<FoodTruck[]>();
  const [loading, setLoading] = useState<boolean>(false);

  const getFoodTrucks = useCallback(async () => {
    setLoading(true);
    if (latitude && longitude) {
      let getFoodTrucksUrl = `${config.weHongryApiBaseEndpoint}/trucks`;
      getFoodTrucksUrl += `?latitude=${latitude}&longitude=${longitude}&radius=${radius}`;
      getFoodTrucksUrl += `&take=${take}&skip=${skip}`;

      const response = await fetch(getFoodTrucksUrl);
      const getFoodTrucksResponse =
        (await response.json()) as GetFoodTrucksReponse;
      setFoodTrucks(getFoodTrucksResponse.items);
    } else {
      setFoodTrucks(undefined);
    }
    setLoading(false);
  }, [latitude, longitude, radius, take, skip]);

  useEffect(() => {
    getFoodTrucks();
  }, [getFoodTrucks, latitude, longitude, radius, take, skip]);

  const loadMore = () => {
    setSkip(skip + take);
  };

  return {
    foodTrucks,
    loading,
    loadMore,
  };
};

type GetFoodTrucksReponse = {
  items: FoodTruck[];
};
