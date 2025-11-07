import { Router } from 'express';
import { locationController } from '../controllers/locationController';
import {
    validateCreateLocation,
    validateUpdateLocation,
    validateId,
    validatePagination,
} from '../middleware/validation';

const router = Router();

// GET /api/locations
router.get('/', validatePagination, locationController.getAll.bind(locationController));

// GET /api/locations/count
router.get('/count', locationController.getCount.bind(locationController));

// GET /api/locations/:id
router.get('/:id', validateId, locationController.getById.bind(locationController));

// POST /api/locations
router.post('/', validateCreateLocation, locationController.create.bind(locationController));

// PUT /api/locations/:id
router.put('/:id', validateId, validateUpdateLocation, locationController.update.bind(locationController));

// DELETE /api/locations/:id
router.delete('/:id', validateId, locationController.delete.bind(locationController));

export default router;
