import { Request, Response, NextFunction } from 'express';
import { locationService } from '../services/locationService';
import { PaginationQuery, CreateLocationDto, UpdateLocationDto } from '../types';

export class LocationController {
    // GET /api/locations
    async getAll(
        req: Request<{}, {}, {}, PaginationQuery>,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const { _page, _limit, search } = req.query;
            const result = await locationService.getAll({ _page, _limit, search });
            res.json({
                success: true,
                data: result,
            });
        } catch (error) {
            next(error);
        }
    }

    // GET /api/locations/:id
    async getById(
        req: Request<{ id: string }>,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const location = await locationService.getById(req.params.id);
            res.json({
                success: true,
                data: location,
            });
        } catch (error) {
            next(error);
        }
    }

    // POST /api/locations
    async create(
        req: Request<{}, {}, CreateLocationDto>,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const location = await locationService.create(req.body);
            res.status(201).json({
                success: true,
                data: location,
                message: 'Location created successfully',
            });
        } catch (error) {
            next(error);
        }
    }

    // PUT /api/locations/:id
    async update(
        req: Request<{ id: string }, {}, UpdateLocationDto>,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const location = await locationService.update(req.params.id, req.body);
            res.json({
                success: true,
                data: location,
                message: 'Location updated successfully',
            });
        } catch (error) {
            next(error);
        }
    }

    // DELETE /api/locations/:id
    async delete(
        req: Request<{ id: string }>,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            await locationService.delete(req.params.id);
            res.status(204).json({
                success: true,
                message: 'Location deleted successfully',
            });
        } catch (error) {
            next(error);
        }
    }

    // GET /api/locations/count
    async getCount(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const count = await locationService.getCount();
            res.json({
                success: true,
                data: { count },
            });
        } catch (error) {
            next(error);
        }
    }
}

export const locationController = new LocationController();
