import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {Time} from '@angular/common';
import {calevent, EventInt} from './EventInt';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  t: Time;

  ngOnInit(): void {


    setInterval(() => {


      this.eventslist.map(event => {



        let startDate = new Date(event.startDate + ' ' + event.startTime);
        let endDate = new Date(event.endDate + ' ' + event.endTime);
        let today = new Date();

        let DifMin = ((startDate.getTime() - today.getTime()) / (1000 * 60));

        if (today > endDate) {
          this.deleteEvent(event.id)
        }

        if (DifMin < 5 && DifMin > 0) {

         if (event.Style === false) {
           alert(DifMin + ' more for event :' + event.title);
           event.Style = true;
         }
        }


      })


    }, 10000);

  }

  timeout() {


  }


  etitle: string = "";
  estartDate: string;
  eendDate: string;
  estartTime: string;
  eendTime: string;




  eventslist = new Array<EventInt>();
  filteredlist = new Array<EventInt>();
  calevent= new Array<calevent>();

  calendarPlugins = [dayGridPlugin, interactionPlugin];


//adding a event

  AddEvent() {

    if (this.etitle === "" || (!this.estartDate) || (!this.estartTime) || (!this.eendDate) || (!this.eendTime)) {
      alert('please fill all the fields required')
      return;
    }

    let eve = {
      id: this.ID(),
      title: this.etitle,
      startDate: this.estartDate,
      startTime: this.estartTime,
      endDate: this.eendDate,
      endTime: this.eendTime,
      ssDate: new Date(this.estartDate + ' ' + this.estartTime),
      Style: false
    }

    this.eventslist.push(eve)

    let caleve ={
      title: this.etitle,
      date: this.estartDate
    }

    this.calevent.push(caleve);


    this.timeout();

    this.etitle = "";
    this.estartDate = null;
    this.estartTime = null;
    this.eendDate = null;
    this.eendTime = null;


    console.log(this.eventslist)

    this.sort();
    this.showAllEvents();
  }

//generating a unique ID
  ID() {

    return "_" + Math.random().toString().substring(2, 8);
  }


// Edit event details
  HandleEdit(type, value, id) {

    this.eventslist.map(x => {

      if (x.id === id) {

        if (type === 'title')
          x.title = value;
        if (type === 'startDate')
          x.startDate = value;
        if (type === 'startTime')
          x.startTime = value;
        if (type === 'endDate')
          x.endDate = value;
        if (type === 'endTime')
          x.endTime = value;

        x.ssDate = new Date(x.startDate + ' ' + x.startTime);


      }
    });

    this.sort();

  }

  // getting events to a particular date
  filterEvents(date) {

    let filterdate = date.dateStr;

    this.filteredlist = this.eventslist.filter(x => x.startDate === filterdate);
    this.sort();

  }

  //reffer to show all events button
  showAllEvents() {

    this.filteredlist = this.eventslist;
    this.sort();
  }


  deleteEvent(id) {

    this.eventslist = this.eventslist.filter(x => x.id != id);
    this.filteredlist = this.eventslist.filter(x => x.id != id);

    this.sort();


  }


  sort() {



    if(this.eventslist.length>1)
    this.eventslist = this.eventslist.sort((a, b) =>  a.ssDate.getTime() - b.ssDate.getTime());
    if(this.filteredlist.length>1)
    this.filteredlist = this.filteredlist.sort((a, b) => a.ssDate.getTime() - b.ssDate.getTime());


    console.log(this.eventslist, this.filteredlist)
  }


}
