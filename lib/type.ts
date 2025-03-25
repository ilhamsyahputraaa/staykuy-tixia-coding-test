export interface HotelSearchResponse {
  data: {
    data: Hotel[];
    page: number;
    page_size: number;
    total: number;
    total_pages: number;
  };
  statusCode: number;
  success: boolean;
}

export interface Hotel {
  id: number;
  name: string;
  address: string;
  city: City;
  description: string;
  facilities: string[];
  images: string[];
  latitude: number;
  longitude: number;
  policy: string;
  rooms: Room[];
  star: number;
}

export interface City {
  id: number;
  name: string;
  country: string;
}

export interface Room {
  id: number;
  name: string;
  available_rooms: number;
  total_rooms: number;
  bed_type: string;
  facilities: string[];
  guest_capacity: number;
  images: string[];
  is_breakfast_included: boolean;
  price: number;
  size: number;
}


export interface CityResponse {
  data: City[];
  statusCode: number;
  success: boolean;
}
