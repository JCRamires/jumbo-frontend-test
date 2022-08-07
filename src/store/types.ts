export interface JumboStore {
    addressName: string;
    city: string;
    collectionPoint: boolean;
    complexNumber: string;
    distance: number;
    favourite: boolean;
    isHomeStore: boolean;
    latitude: string;
    locationType: string;
    longitude: string;
    newStore: number;
    postalCode: string;
    sapStoreID: string;
    showWarningMessage: boolean;
    street: string;
    street2: string;
    street3: string;
    sundayOpen: true;
    todayClose: string;
    todayOpen: string;
    type: string;
    uuid: string;
  }
  
  export interface State {
    isLoading: boolean;
    stores: JumboStore[];
  }