import {useGetFoodTrucks} from "./hooks/useGetFoodTrucks.ts";
import {FoodTruckCard} from "./food-trucks/FoodTruckCard.tsx";

function App() {
  const myPosition = {
    latitude: 37.745156012803449,
    longitude: -122.403946659673494
  }
  const { foodTrucks } = useGetFoodTrucks({latitude: myPosition.latitude, longitude: myPosition.longitude});

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
