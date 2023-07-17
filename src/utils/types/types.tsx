interface CatalogData { 
  name: string;
  img: string;
  specs?: Specs 
  type: string;
}

interface Specs {
  descirption?: string;
  minMeasures?: string;
  maxMeasures?: string;
  features?: string[];
}
