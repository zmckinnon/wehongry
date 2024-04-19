import { getFoodTrucks, getFoodTrucksInRadius } from '../../src/services/foodTruckService';

describe('foodTruckService', () => {
  describe('getFoodTrucks', () => {
    it('should return a list of food trucks', async () => {
      const foodTrucks = await getFoodTrucks();
      expect(foodTrucks).toBeDefined();
      expect(foodTrucks.length).toBeGreaterThan(0);
    });
  });

  describe('getFoodTrucksInRadius', () => {
    it('should return a list of food trucks within a radius', async () => {
      const foodTrucksInRadius = await getFoodTrucksInRadius({ latitude: 37.7749, longitude: -122.4194 }, 1, { skip: 0, take: 10 });
      expect(foodTrucksInRadius).toBeDefined();
      expect(foodTrucksInRadius.items.length).toBeGreaterThan(0);
    });
  });
});
