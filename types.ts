export type Language = 'en' | 'zh-TW';
export type Theme = 'light' | 'dark';

export interface Coordinates {
  lat: number;
  lng: number;
}

export type TransportMode = 'train' | 'subway' | 'bus' | 'taxi' | 'walk' | 'flight';

export interface TransitOption {
  mode: TransportMode;
  name: string; // e.g., "JR Yamanote Line"
  duration: string; // e.g., "15 mins"
  cost?: string; // e.g., "¥200"
  instructions: string; // Specific platform info or walking directions
  officialUrl?: string; // URL to official transport page
  imageUrl?: string; // Image of the train/bus/route
}

export interface TransitInfo {
  summary: string; // Short text for the timeline card
  destination: string; // The name of the next stop
  options: TransitOption[]; // List of available ways to get there
}

export interface Activity {
  time: string;
  activity: string;
  locationName: string;
  description: string;
  coordinates: Coordinates;
  category: 'sightseeing' | 'food' | 'shopping' | 'transport';
  // New detailed fields
  extendedDescription?: string;
  address?: string;
  openingHours?: string;
  tips?: string[];
  imageUrl?: string;
  // Navigation to next spot (Rich Data)
  transitToNext?: TransitInfo;
}

export interface DayPlan {
  date: string;
  summary: string;
  activities: Activity[];
}

export interface HotelOnsenInfo {
  description: string;
  types: string[]; // e.g., ["Indoor bath", "Outdoor bath", "Private bath"]
  hours?: string;
  privateBathPrice?: string;
}

export interface HotelRestaurant {
  name: string;
  cuisine: string;
  description: string;
}

export interface Hotel {
  name: string;
  nameJapanese?: string;
  description: string;
  coordinates: Coordinates;
  priceRange: string;
  rating: string;
  // Extended details
  address?: string;
  phone?: string;
  checkIn?: string;
  checkOut?: string;
  officialWebsite?: string;
  bookingUrl?: string;
  youtubeUrl?: string;
  instagramUrl?: string;
  // Facilities & Features
  facilities?: string[];
  highlights?: string[]; // Key selling points
  roomTypes?: string[];
  // Onsen specific (for ryokan)
  onsenInfo?: HotelOnsenInfo;
  // On-site restaurants
  restaurants?: HotelRestaurant[];
  // Images
  imageUrl?: string;
  images?: string[];
}

export interface Restaurant {
  name: string;
  cuisine: string;
  description: string;
  coordinates: Coordinates;
  priceRange: string;
  // Tabelog & Visuals
  tabelogRating?: number; // e.g. 3.58
  tabelogUrl?: string;
  imageUrl?: string; // Food photo
}

export interface TripPlan {
  tripName: string;
  hotels: Hotel[];
  restaurants: Restaurant[];
  days: DayPlan[];
  transportTips: string[];
}

export interface Translations {
  title: string;
  subtitle: string;
  generateBtn: string;
  generating: string;
  hotels: string;
  restaurants: string;
  itinerary: string;
  transport: string;
  viewMap: string;
  closeMap: string;
  darkMode: string;
  lightMode: string;
  days: string;
  readMore: string;
  address: string;
  hours: string;
  tips: string;
  back: string;
  transitDetails: string;
  transitOptions: string;
}