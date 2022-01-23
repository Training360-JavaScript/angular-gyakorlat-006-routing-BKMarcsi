export class Location {

  address :string = '';
  city :string = '';
  country :string = '';

  constructor(properties?: Location) {
    if (properties) {
      this.address = properties.address || '';
      this.city = properties.city || '';
      this.country = properties.country || '';
    }
  }
}
