export interface Address {
  id?: number;
  street?: string;
  formattedAddress?: string;
  city?: string;
  postcode?: string;
  province?: string;
  region?: string;
  state?: string;
  country?: string;
  latitude?: number;
  longitude?: number;
  buildingNumber?: number;
  created_at?: string;
  updated_at?: string;
}
