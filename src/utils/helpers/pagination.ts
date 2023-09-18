import type { Dispatch, SetStateAction } from "react";

interface paginationIndex {
  startIndex: number;
  lastIndex: number; 
}
export function pagination(arr: any[], index: paginationIndex, setData: Dispatch<SetStateAction<any>>) {
  let paginated;
  if (index.lastIndex <= arr.length) {
    paginated = arr.slice(index.startIndex, index.lastIndex); 
  } else {
    paginated = arr.slice(index.startIndex, arr.length);
  }
  
  setData(paginated)
} 