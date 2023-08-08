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
  OPENERS_TYPES = 'aberturas',
  CLOSERS_TYPES = 'cerramientos',
  CS_TYPES = 'sistemas-complementarios',
  SERVICES_TYPES = 'servicios'
}

export enum TypeProduct {
  WINDOW_PRODUCT = 'ventanas',
  DOOR_PRODUCT = 'puertas',
}

export enum CatalogFiltersTypes {
  SEARCH = 'BY_SEARCH',
  PRODUCT_FILTER = 'BY_FILTER',
  IMG = 'BY_IMG'
}

export interface TexturesTypes {
  name: string;
  img: string;
}
