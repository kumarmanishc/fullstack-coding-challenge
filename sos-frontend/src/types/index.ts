export interface Ambulance {
    id: string;
    title: string;
    description: string;
    location?: string;
    locationId?: string;
    image?: string;
}

export interface Doctor {
    id: string;
    title: string;
    description: string;
    location: string;
    image?: string;
}

export interface Location {
    id: string;
    title: string;
    description: string;
    location: string;
    image?: string;
}

export interface PaginatedResponse<T> {
    data: { data: T[], success: true };
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

export interface ApiError {
    message: string;
    status: number;
}