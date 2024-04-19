import {useGetFoodTrucks} from "./hooks/useGetFoodTrucks.ts";
import {FoodTruckCard} from "./food-trucks/FoodTruckCard.tsx";
import {useState} from "react";
import {Position} from "./models/Position.ts";

function App() {
    const [myPosition, setMyPosition] = useState<Position>();
    const { foodTrucks } = useGetFoodTrucks({latitude: myPosition?.latitude, longitude: myPosition?.longitude});

    const handleFindFoodTrucksButtonClick = () => {
        navigator.geolocation.getCurrentPosition((position) => {
          setMyPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        });
    }

  if (!foodTrucks) {
    return <div className="flex items-center justify-center h-screen">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleFindFoodTrucksButtonClick}>Find Food Trucks Open Now</button>
    </div>
  }

  return (
        <div className="container mx-auto px-2">
          <h1>Food Trucks</h1>
          <div className="grid gap-4 md:grid-cols-3 grid-cols-1">
            {foodTrucks.map((foodTruck, index) => <FoodTruckCard key={index} foodTruck={foodTruck} />)}
          </div>
        </div>
  )
}

export default App
