export interface Data {
  email: string;
  gender: string;
  location: {
    city: string,
    street:{
      name: string,
      number: number,
    }
  };
  name: {
    first: string,
    last: string,
  };
  phone: string;
  picture: {
    large: string,
    medium: string,
    thumbnail: string,
  }
}
