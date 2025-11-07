export interface Ambulance {
  id: string;
  title: string;
  description: string;
  locationId: string; // Changed from location string to locationId reference
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Doctor {
  id: string;
  title: string;
  description: string;
  locationId: string; // Changed from location string to locationId reference
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Location {
  id: string;
  location: string; // This remains as the address/location string
  image?: string;
}

export interface CreateAmbulanceDto {
  title: string;
  description: string;
  locationId: string;
  image?: string;
}

export interface UpdateAmbulanceDto {
  title?: string;
  description?: string;
  location?: string;
  image?: string;
}

export interface CreateDoctorDto {
  title: string;
  description: string;
  locationId: string;
  image?: string;
}

export interface UpdateDoctorDto {
  title?: string;
  description?: string;
  location?: string;
  image?: string;
}

export interface CreateLocationDto {
  title: string;
  description: string;
  location: string;
  image?: string;
}

export interface UpdateLocationDto {
  title?: string;
  description?: string;
  location?: string;
  image?: string;
}

export interface PaginationQuery {
  _page?: string;
  _limit?: string;
  search?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ApiError {
  message: string;
  status: number;
  errors?: Array<{
    field: string;
    message: string;
  }>;
}

export interface SuccessResponse<T = any> {
  success: boolean;
  data: T;
  message?: string;
}

export interface ErrorResponse {
  success: boolean;
  error: string;
  message: string;
  statusCode: number;
}