import { v4 as uuidv4 } from 'uuid';
import { Ambulance, Doctor, Location } from '../types';

// In-memory database - simulating the JSON server data
class Database {
  private ambulances: Ambulance[] = [];
  private doctors: Doctor[] = [];
  private locations: Location[] = [];

  constructor() {
    this.seedData();
  }

  // Seed initial data
  private seedData(): void {
    // Seed locations first
    this.locations = [
      {
        id: '1',
        title: 'City General Hospital',
        description: 'Main public hospital serving the downtown area with 24/7 emergency services.',
        location: '123 Main Street, Downtown, City 12345',
        image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=400&fit=crop',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01'),
      },
      {
        id: '2',
        title: 'Metro Medical Center',
        description: 'Specialized medical center with advanced surgical facilities and ICU.',
        location: '456 Health Avenue, Metro District, City 12346',
        image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&h=400&fit=crop',
        createdAt: new Date('2024-01-02'),
        updatedAt: new Date('2024-01-02'),
      },
      {
        id: '3',
        title: 'North Side Emergency Clinic',
        description: 'Quick care clinic for minor emergencies and urgent care needs.',
        location: '789 Emergency Lane, North Side, City 12347',
        image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&h=400&fit=crop',
        createdAt: new Date('2024-01-03'),
        updatedAt: new Date('2024-01-03'),
      },
      {
        id: '4',
        title: 'Children\'s Specialty Hospital',
        description: 'Dedicated pediatric hospital with specialized children\'s emergency care.',
        location: '321 Kids Care Boulevard, Family District, City 12348',
        image: 'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=400&fit=crop',
        createdAt: new Date('2024-01-04'),
        updatedAt: new Date('2024-01-04'),
      },
      {
        id: '5',
        title: 'Heart & Vascular Institute',
        description: 'Specialized cardiac care center with state-of-the-art cardiology equipment.',
        location: '654 Cardiac Center Drive, Medical Plaza, City 12349',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop',
        createdAt: new Date('2024-01-05'),
        updatedAt: new Date('2024-01-05'),
      },
    ];

    // Seed ambulances with locationId references
    this.ambulances = [
      {
        id: '1',
        title: 'Advanced Life Support Unit 01',
        description: 'Fully equipped ALS ambulance with cardiac monitor, ventilator, and advanced medications.',
        locationId: '1',
        image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=400&h=400&fit=crop',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01'),
      },
      {
        id: '2',
        title: 'Basic Life Support Unit 02',
        description: 'BLS ambulance for non-critical patient transport and basic emergency care.',
        locationId: '2',
        image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=400&h=400&fit=crop',
        createdAt: new Date('2024-01-02'),
        updatedAt: new Date('2024-01-02'),
      },
      {
        id: '3',
        title: 'Critical Care Transport 03',
        description: 'Specialized ICU-level ambulance for critical patient transfers between hospitals.',
        locationId: '2',
        image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=400&h=400&fit=crop',
        createdAt: new Date('2024-01-03'),
        updatedAt: new Date('2024-01-03'),
      },
      {
        id: '4',
        title: 'Pediatric Ambulance 04',
        description: 'Specialized ambulance equipped for pediatric emergencies with child-sized equipment.',
        locationId: '4',
        image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=400&h=400&fit=crop',
        createdAt: new Date('2024-01-04'),
        updatedAt: new Date('2024-01-04'),
      },
      {
        id: '5',
        title: 'Cardiac Response Unit 05',
        description: 'Specialized cardiac ambulance with 12-lead EKG, balloon pump, and cardiac medications.',
        locationId: '5',
        image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=400&h=400&fit=crop',
        createdAt: new Date('2024-01-05'),
        updatedAt: new Date('2024-01-05'),
      },
      {
        id: '6',
        title: 'Trauma Response Unit 06',
        description: 'Heavy rescue ambulance equipped for major trauma and multi-casualty incidents.',
        locationId: '1',
        image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=400&h=400&fit=crop',
        createdAt: new Date('2024-01-06'),
        updatedAt: new Date('2024-01-06'),
      },
      {
        id: '7',
        title: 'Air Medical Unit 07',
        description: 'Helicopter ambulance for rapid transport and access to remote locations.',
        locationId: '3',
        image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=400&h=400&fit=crop',
        createdAt: new Date('2024-01-07'),
        updatedAt: new Date('2024-01-07'),
      },
      {
        id: '8',
        title: 'Mobile Stroke Unit 08',
        description: 'Specialized ambulance with CT scanner for rapid stroke diagnosis and treatment.',
        locationId: '2',
        image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=400&h=400&fit=crop',
        createdAt: new Date('2024-01-08'),
        updatedAt: new Date('2024-01-08'),
      },
      {
        id: '9',
        title: 'Neonatal Transport 09',
        description: 'Specialized unit for transporting critically ill newborns and premature infants.',
        locationId: '4',
        image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=400&h=400&fit=crop',
        createdAt: new Date('2024-01-09'),
        updatedAt: new Date('2024-01-09'),
      },
      {
        id: '10',
        title: 'Hazmat Response Unit 10',
        description: 'Specialized ambulance for chemical, biological, and radiation emergency response.',
        locationId: '1',
        image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=400&h=400&fit=crop',
        createdAt: new Date('2024-01-10'),
        updatedAt: new Date('2024-01-10'),
      },
      {
        id: '11',
        title: 'Bariatric Ambulance 11',
        description: 'Heavy-duty ambulance equipped for transporting patients over 400 pounds safely.',
        locationId: '3',
        image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=400&h=400&fit=crop',
        createdAt: new Date('2024-01-11'),
        updatedAt: new Date('2024-01-11'),
      },
      {
        id: '12',
        title: 'Mental Health Crisis Unit 12',
        description: 'Specialized ambulance with trained psychiatric technicians for mental health emergencies.',
        locationId: '5',
        image: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=400&h=400&fit=crop',
        createdAt: new Date('2024-01-12'),
        updatedAt: new Date('2024-01-12'),
      },
    ];

    // Seed doctors with locationId references
    this.doctors = [
      {
        id: '1',
        title: 'Dr. Sarah John',
        description: 'Emergency Medicine Specialist with 15 years of experience. Available 24/7 for critical care.',
        locationId: '1',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&face',
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01'),
      },
      {
        id: '2',
        title: 'Dr. Michael Chen',
        description: 'Trauma Surgeon specializing in emergency procedures and critical care.',
        locationId: '2',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&face',
        createdAt: new Date('2024-01-02'),
        updatedAt: new Date('2024-01-02'),
      },
      {
        id: '3',
        title: 'Dr. Emily Rodriguez',
        description: 'Pediatric Emergency Specialist focused on children\'s emergency care.',
        locationId: '4',
        image: 'https://images.unsplash.com/photo-1594824804732-ca8db7d52b35?w=400&h=400&fit=crop&face',
        createdAt: new Date('2024-01-03'),
        updatedAt: new Date('2024-01-03'),
      },
      {
        id: '4',
        title: 'Dr. James Wilson',
        description: 'Cardiologist specializing in heart emergencies and cardiac arrest response.',
        locationId: '5',
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&face',
        createdAt: new Date('2024-01-04'),
        updatedAt: new Date('2024-01-04'),
      },
      {
        id: '5',
        title: 'Dr. Lisa Thompson',
        description: 'Neurologist specializing in stroke and brain injury emergency care.',
        locationId: '2',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&face',
        createdAt: new Date('2024-01-05'),
        updatedAt: new Date('2024-01-05'),
      },
      {
        id: '6',
        title: 'Dr. Robert Kim',
        description: 'Orthopedic Surgeon for emergency bone and joint injuries.',
        locationId: '1',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&face',
        createdAt: new Date('2024-01-06'),
        updatedAt: new Date('2024-01-06'),
      },
      {
        id: '7',
        title: 'Dr. Amanda Davis',
        description: 'Emergency Psychiatrist for mental health crisis intervention.',
        locationId: '3',
        image: 'https://images.unsplash.com/photo-1594824804732-ca8db7d52b35?w=400&h=400&fit=crop&face',
        createdAt: new Date('2024-01-07'),
        updatedAt: new Date('2024-01-07'),
      },
      {
        id: '8',
        title: 'Dr. David Brown',
        description: 'Anesthesiologist available for emergency surgeries and pain management.',
        locationId: '1',
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&face',
        createdAt: new Date('2024-01-08'),
        updatedAt: new Date('2024-01-08'),
      },
      {
        id: '9',
        title: 'Dr. Jennifer Lee',
        description: 'Emergency Radiologist for urgent imaging and diagnostic services.',
        locationId: '2',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&face',
        createdAt: new Date('2024-01-09'),
        updatedAt: new Date('2024-01-09'),
      },
      {
        id: '10',
        title: 'Dr. Rachel Green',
        description: 'Emergency Pharmacist for critical medication management and poison control.',
        locationId: '4',
        image: 'https://images.unsplash.com/photo-1594824804732-ca8db7d52b35?w=400&h=400&fit=crop&face',
        createdAt: new Date('2024-01-10'),
        updatedAt: new Date('2024-01-10'),
      },
      {
        id: '11',
        title: 'Dr. Kevin White',
        description: 'Emergency ENT Specialist for airway emergencies and respiratory issues.',
        locationId: '5',
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&face',
        createdAt: new Date('2024-01-11'),
        updatedAt: new Date('2024-01-11'),
      },
      {
        id: '12',
        title: 'Dr. Susan Black',
        description: 'Emergency Infectious Disease Specialist for outbreak response and critical infections.',
        locationId: '3',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&face',
        createdAt: new Date('2024-01-12'),
        updatedAt: new Date('2024-01-12'),
      },
    ];
  }

  // Helper method to get location name by ID
  private getLocationNameById(locationId: string): string {
    const location = this.locations.find(loc => loc.id === locationId);
    return location ? location.location : 'Unknown Location';
  }

  // Ambulance methods
  getAllAmbulances(): (Ambulance & { location: string })[] {
    return this.ambulances.map(ambulance => ({
      ...ambulance,
      location: this.getLocationNameById(ambulance.locationId)
    }));
  }

  getAmbulanceById(id: string): (Ambulance & { location: string }) | undefined {
    const ambulance = this.ambulances.find(ambulance => ambulance.id === id);
    if (!ambulance) return undefined;

    return {
      ...ambulance,
      location: this.getLocationNameById(ambulance.locationId)
    };
  }

  createAmbulance(data: Omit<Ambulance, 'id' | 'createdAt' | 'updatedAt'>): Ambulance {
    const newAmbulance: Ambulance = {
      id: uuidv4(),
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.ambulances.push(newAmbulance);
    return newAmbulance;
  }

  updateAmbulance(id: string, data: Partial<Omit<Ambulance, 'id' | 'createdAt' | 'updatedAt'>>): (Ambulance & { location: string }) | undefined {
    const index = this.ambulances.findIndex(ambulance => ambulance.id === id);
    if (index === -1) return undefined;

    const existingAmbulance = this.ambulances[index]!;
    this.ambulances[index] = {
      id: existingAmbulance.id,
      title: data.title ?? existingAmbulance.title,
      description: data.description ?? existingAmbulance.description,
      locationId: data.locationId ?? existingAmbulance.locationId,
      image: data.image ?? existingAmbulance.image,
      createdAt: existingAmbulance.createdAt,
      updatedAt: new Date(),
    };
    return {
      ...this.ambulances[index]!,
      location: this.getLocationNameById(this.ambulances[index]!.locationId)
    };
  }

  deleteAmbulance(id: string): boolean {
    const index = this.ambulances.findIndex(ambulance => ambulance.id === id);
    if (index === -1) return false;

    this.ambulances.splice(index, 1);
    return true;
  }

  getAmbulanceCount(): number {
    return this.ambulances.length;
  }

  // Doctor methods
  getAllDoctors(): (Doctor & { location: string })[] {
    return this.doctors.map(doctor => ({
      ...doctor,
      location: this.getLocationNameById(doctor.locationId)
    }));
  }

  getDoctorById(id: string): (Doctor & { location: string }) | undefined {
    const doctor = this.doctors.find(doctor => doctor.id === id);
    if (!doctor) return undefined;

    return {
      ...doctor,
      location: this.getLocationNameById(doctor.locationId)
    };
  }

  createDoctor(data: Omit<Doctor, 'id' | 'createdAt' | 'updatedAt'>): Doctor {
    const newDoctor: Doctor = {
      id: uuidv4(),
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.doctors.push(newDoctor);
    return newDoctor;
  }

  updateDoctor(id: string, data: Partial<Omit<Doctor, 'id' | 'createdAt' | 'updatedAt'>>): (Doctor & { location: string }) | undefined {
    const index = this.doctors.findIndex(doctor => doctor.id === id);
    if (index === -1) return undefined;

    const existingDoctor = this.doctors[index]!;
    this.doctors[index] = {
      id: existingDoctor.id,
      title: data.title ?? existingDoctor.title,
      description: data.description ?? existingDoctor.description,
      locationId: data.locationId ?? existingDoctor.locationId,
      image: data.image ?? existingDoctor.image,
      createdAt: existingDoctor.createdAt,
      updatedAt: new Date(),
    };
    return {
      ...this.doctors[index]!,
      location: this.getLocationNameById(this.doctors[index]!.locationId)
    };
  }

  deleteDoctor(id: string): boolean {
    const index = this.doctors.findIndex(doctor => doctor.id === id);
    if (index === -1) return false;

    this.doctors.splice(index, 1);
    return true;
  }

  getDoctorCount(): number {
    return this.doctors.length;
  }

  // Location methods
  getAllLocations(): Location[] {
    return [...this.locations];
  }

  getLocationById(id: string): Location | undefined {
    return this.locations.find(location => location.id === id);
  }

  createLocation(data: Omit<Location, 'id' | 'createdAt' | 'updatedAt'>): Location {
    const newLocation: Location = {
      id: uuidv4(),
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.locations.push(newLocation);
    return newLocation;
  }

  updateLocation(id: string, data: Partial<Omit<Location, 'id' | 'createdAt' | 'updatedAt'>>): Location | undefined {
    const index = this.locations.findIndex(location => location.id === id);
    if (index === -1) return undefined;

    const existingLocation = this.locations[index]!;
    this.locations[index] = {
      id: existingLocation.id,
      title: data.title ?? existingLocation.title,
      description: data.description ?? existingLocation.description,
      location: data.location ?? existingLocation.location,
      image: data.image ?? existingLocation.image,
      createdAt: existingLocation.createdAt,
      updatedAt: new Date(),
    };
    return this.locations[index];
  }

  deleteLocation(id: string): boolean {
    const index = this.locations.findIndex(location => location.id === id);
    if (index === -1) return false;

    this.locations.splice(index, 1);
    return true;
  }

  getLocationCount(): number {
    return this.locations.length;
  }

  // New relationship methods
  getAmbulancesByLocationId(locationId: string): (Ambulance & { location: string })[] {
    return this.ambulances
      .filter(ambulance => ambulance.locationId === locationId)
      .map(ambulance => ({
        ...ambulance,
        location: this.getLocationNameById(ambulance.locationId)
      }));
  }

  getDoctorsByLocationId(locationId: string): (Doctor & { location: string })[] {
    return this.doctors
      .filter(doctor => doctor.locationId === locationId)
      .map(doctor => ({
        ...doctor,
        location: this.getLocationNameById(doctor.locationId)
      }));
  }

  getLocationWithResources(locationId: string): { location: Location; ambulances: (Ambulance & { location: string })[]; doctors: (Doctor & { location: string })[] } | undefined {
    const location = this.getLocationById(locationId);
    if (!location) return undefined;

    return {
      location,
      ambulances: this.getAmbulancesByLocationId(locationId),
      doctors: this.getDoctorsByLocationId(locationId),
    };
  }

  getAllLocationsWithCounts(): Array<Location & { ambulanceCount: number; doctorCount: number }> {
    return this.locations.map(location => ({
      ...location,
      ambulanceCount: this.getAmbulancesByLocationId(location.id).length,
      doctorCount: this.getDoctorsByLocationId(location.id).length,
    }));
  }
}

// Singleton instance
export const database = new Database();