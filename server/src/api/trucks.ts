import express, { Request, Response } from 'express';
import {getFoodTrucksInRadius} from "../services/foodTruckService";
import {Position} from "../models/Position";
import {Paging} from "../models/Paging";
import {FoodTruck} from "../models/FoodTruck";
import ErrorResponse from "../interfaces/ErrorResponse";

const router = express.Router();

type IndexResponseBody = {
  items: FoodTruck[];
  pageSize: number;
  totalCount: number;
}

router.get<Request, IndexResponseBody | ErrorResponse>('/', async (req, res) => {
  if (!req.query.latitude || !req.query.longitude) {
    return res.status(400).json({
      message: 'Must supply a position in the query.'
    });
  }

  if (!req.query.radius) {
    return res.status(400).json({
      message: 'Must supply a radius in the query.'
    });
  }

  if (!req.query.take || !req.query.skip) {
    return res.status(400).json({
      message: 'Must supply paging in the query.'
    });
  }

  const position = {
    latitude: Number(req.query.latitude),
    longitude: Number(req.query.longitude),
  } as Position;

  const radiusInMiles = Number(req.query.radius);

    const paging = {
        take: Number(req.query.take),
        skip: Number(req.query.skip),
    } as Paging;

  const { items, pageSize, totalCount } = await getFoodTrucksInRadius(position, radiusInMiles, paging);

  res.json({
    items,
    pageSize,
    totalCount,
  });
});

export default router;
