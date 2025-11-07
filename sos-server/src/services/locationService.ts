import { database } from '../utils/database';
import { paginate, validatePaginationParams } from '../utils/pagination';
import { Location, CreateLocationDto, UpdateLocationDto, PaginatedResponse } from '../types';

export class LocationService {
    async getAll(params: {
        _page?: string;
        _limit?: string;
        search?: string;
    }): Promise<PaginatedResponse<Location>> {
        const { page, limit } = validatePaginationParams(params._page, params._limit);
        const locations = database.getAllLocations();

        return paginate(locations, {
            page,
            limit,
            search: params.search,
        });
    }

    async getById(id: string): Promise<Location> {
        const location = database.getLocationById(id);
        if (!location) {
            throw new Error('Location not found');
        }
        return location;
    }

    async create(data: CreateLocationDto): Promise<Location> {
        // Validate required fields
        if (!data.title || !data.description || !data.location) {
            throw new Error('Title, description, and location are required');
        }

        return database.createLocation(data);
    }

    async update(id: string, data: UpdateLocationDto): Promise<Location> {
        const location = database.updateLocation(id, data);
        if (!location) {
            throw new Error('Location not found');
        }
        return location;
    }

    async delete(id: string): Promise<void> {
        const deleted = database.deleteLocation(id);
        if (!deleted) {
            throw new Error('Location not found');
        }
    }

    async getCount(): Promise<number> {
        return database.getLocationCount();
    }
}

export const locationService = new LocationService();
