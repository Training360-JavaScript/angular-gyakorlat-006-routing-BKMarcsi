import { Location } from "./location";

export class Event {

  [key: string]: any;
  name: string = '';
  date: string = '';
  time: string = '';
  location: Location = new Location();


  constructor(properties?: Event) {
    if (properties) {
      this.name = properties.name || '';
      this.date = properties.date || '';
      this.time = properties.time || '';
      this.location = properties.location || new Location();
    }
  }
}
