import { useGetFoodTrucks } from './hooks/useGetFoodTrucks.ts';
import { FoodTruckCard } from './food-trucks/FoodTruckCard.tsx';
import { FC, useState } from 'react';
import { Position } from './models/Position.ts';
import { FoodTruck } from './models/FoodTruck.ts';

function App() {
  const [myPosition, setMyPosition] = useState<Position>();
  const { foodTrucks, loading } = useGetFoodTrucks({
    latitude: myPosition?.latitude,
    longitude: myPosition?.longitude,
  });

  const findFoodTrucksOpenNow = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setMyPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  };

  const goBack = () => {
    setMyPosition(undefined);
  };

  if (!foodTrucks) {
    return (
      <FoodTrucksSearch
        onFindFoodTrucksOpenNow={findFoodTrucksOpenNow}
        loading={loading}
      />
    );
  }

  return <FoodTruckSearchResults foodTrucks={foodTrucks} onGoBack={goBack} />;
}

interface FoodTrucksSearchProps {
  onFindFoodTrucksOpenNow: () => void;
  loading: boolean;
}

const FoodTrucksSearch: FC<FoodTrucksSearchProps> = ({
  onFindFoodTrucksOpenNow,
  loading,
}) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onFindFoodTrucksOpenNow}
        disabled={loading}
      >
        Find Food Trucks Open Now
      </button>
    </div>
  );
};

interface FoodTruckSearchResults {
  foodTrucks: FoodTruck[];
  onGoBack: () => void;
}

const FoodTruckSearchResults: FC<FoodTruckSearchResults> = ({
  foodTrucks,
  onGoBack,
}) => {
  return (
    <div className="container mx-auto p-2 grid gap-4">
      <h1 className="text-xl font-bold">Food Trucks</h1>
      <div className="grid gap-4 md:grid-cols-3 grid-cols-1">
        {foodTrucks.map((foodTruck, index) => (
          <FoodTruckCard key={index} foodTruck={foodTruck} />
        ))}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onGoBack}
      >
        Go Back
      </button>
    </div>
  );
};

export default App;
