import { Injectable } from '@angular/core';
import { Event } from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventList: Event[] =
  [
    {name:"eros"
    ,date:"4/23/2021"
    ,time:"12:43 AM"
    ,location:
      {
        address:"81803 Monument Park"
        ,city:"Praia do Ribatejo"
        ,country:"Portugal"
      }
    },
    {name:"diam",date:"12/12/2021",time:"6:53 PM",location:{address:"1 Forest Terrace",city:"Nerekhta",country:"Russia"}},
    {name:"ridiculus",date:"2/17/2021",time:"1:29 PM",location:{address:"1107 Kenwood Road",city:"Sabirabad",country:"Azerbaijan"}},
    {name:"nulla",date:"5/19/2021",time:"9:52 AM",location:{address:"27 Atwood Plaza",city:"Kota Kinabalu",country:"Malaysia"}},
    {name:"luctus et ultrices posuere",date:"1/5/2022",time:"11:33 PM",location:{address:"6 Lindbergh Park",city:"Shenglilu",country:"China"}},
    {name:"ipsum",date:"3/3/2021",time:"2:53 PM",location:{address:"8524 Sullivan Alley",city:"Opočno",country:"Czech Republic"}},
    {name:"vitae consectetuer eget rutrum",date:"5/17/2021",time:"6:04 AM",location:{address:"9706 Sheridan Place",city:"Genova",country:"Italy"}},
    {name:"massa",date:"1/4/2022",time:"12:52 PM",location:{address:"0 New Castle Circle",city:"Pagelaran",country:"Indonesia"}},
    {name:"turpis integer aliquet massa",date:"5/30/2021",time:"2:07 PM",location:{address:"2 Dottie Crossing",city:"Guanabacoa",country:"Cuba"}},
    {name:"condimentum neque sapien placerat",date:"9/3/2021",time:"12:09 AM",location:{address:"4916 Chinook Trail",city:"Richmond",country:"Canada"}}
  ]

  constructor() { }

  getAll(): Event[]{

    return this.eventList;

  }
}
