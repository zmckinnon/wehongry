import { getFoodTrucks } from '../../src/services/foodTruckService';

describe('foodTruckScheduleService', () => {
  describe('getFoodTruckSchedule', () => {
    it('should return a list of food truck schedules', async () => {
      const foodTrucks = await getFoodTrucks();
      expect(foodTrucks).toBeDefined();
      expect(foodTrucks.length).toBeGreaterThan(0);
    });
  });
});
