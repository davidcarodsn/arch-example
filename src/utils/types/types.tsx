interface CatalogData { 
  name: string;
  img: string;
  specs?: Specs; 
  filters: string[];
}

interface Specs {
  descirption?: string;
  minMeasures?: string;
  maxMeasures?: string;
  features?: string[];
}
