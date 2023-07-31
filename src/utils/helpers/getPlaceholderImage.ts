import windowsPlaceholder from '../../assets/img/windows-placeholder.png';
import doorsPlaceholder from '../../assets/img/doors-placeholder.png';
import { TypeProduct } from '../types/types';

export const getThePlaceholderImage = (filter :string[]) => {
  if (filter.includes(TypeProduct.DOOR_PRODUCT)) {
    return doorsPlaceholder;
  } 
  
  if (filter.includes(TypeProduct.WINDOW_PRODUCT)) {
    return windowsPlaceholder;
  }
}