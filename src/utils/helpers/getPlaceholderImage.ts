import windowsPlaceholder from '../../assets/img/windows-placeholder.png';
import doorsPlaceholder from '../../assets/img/doors-placeholder.png';
import complementarySystemPlaceholder from '../../assets/img/complementary-system.png';
import { TypeProduct } from '../types/types';

export const getThePlaceholderImage = (filter :string[]):string => {
  if (filter.includes(TypeProduct.DOOR_PRODUCT)) {
    return windowsPlaceholder;
  }
  
  if (filter.includes(TypeProduct.WINDOW_PRODUCT)) {
    return windowsPlaceholder;
  }

  return complementarySystemPlaceholder; 
}