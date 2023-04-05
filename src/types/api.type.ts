export type Person = {
  cell: string;
  dob: { date: string; age: number };
  email: string;
  gender: string;
  id: { name: string; value: string };
  location: {
    street: { number: number; name: string };
    city: string;
    state: string;
    country: string;
    postcode: number | string;
    coordinates: { latitude: string; longitude: string };
    timezone: { offset: string; description: string };
  };
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  nat: string;
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  registered: { date: string; age: number };
};

export type ApiResponse = {
  results: Person[];
  info: {};
};
