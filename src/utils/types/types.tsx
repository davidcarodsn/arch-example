export interface CatalogData { 
  name: string;
  img?: string;
  specs?: Specs; 
  filters: string[];
}

interface Specs {
  descirption?: string;
  minMeasures?: string;
  maxMeasures?: string;
  features?: string[];
}

export enum ProductFathersTypes {
  OPENERS_TYPES = 'OPENERS',
  CLOSERS_TYPES = 'CLOSERS',
  CS_TYPES = 'COMPLEMENTARY SYSTEM',
  SERVICES_TYPES = 'SERVICES'
}

export enum TypeProduct {
  WINDOW_PRODUCT = 'WINDOW',
  DOOR_PRODUCT = 'DOOR',
}
