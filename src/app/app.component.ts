import {Component, OnInit} from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import dayGridPlugin from '@fullcalendar/daygrid';
import {FullCalendarComponent} from '@fullcalendar/angular';
import  interactionPlugin from '@fullcalendar/interaction' ;
import {Interaction} from '@fullcalendar/core/interactions/interaction';
import {Time} from '@angular/common';
import {EventInt} from './EventInt';
import {stringify} from 'querystring';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  t:Time;

  ngOnInit(): void {


    setInterval(() => {



      this.eventslist.map(event=>{

        let startDate= new Date(event.startDate+' '+event.startTime);
        let endDate= new Date(event.endDate+' '+event.endTime);
        let today= new Date();

        let DifMin= ((startDate.getTime()-today.getTime())/(1000*60));

        if(today>endDate) {
          this.deleteEvent(event.id)
        }

        if(DifMin<5){

          alert(DifMin+' more for event :'+event.title);

        }



      })


    }, 60000);

  }

  timeout() {


  }



  etitle:string="";
  estartDate: string;
  eendDate: string ;
  estartTime : string ;
  eendTime : string;


 eventslist= new Array<EventInt>();
 filteredlist= new Array<EventInt>();

  calendarPlugins = [dayGridPlugin, interactionPlugin] ;


//adding a event

   AddEvent(){

     if(this.etitle==="" || (!this.estartDate) || (!this.estartTime) || (!this.eendDate) || (!this.eendTime)){
       alert('please fill all the fields required')
       return;
     }

    let eve ={
      id: this.ID(),
      title: this.etitle,
      startDate: this.estartDate,
      startTime: this.estartTime,
      endDate: this.eendDate,
      endTime: this.eendTime
    }

   this.eventslist.push(eve)

     this.timeout();

     this.etitle=""; this.estartDate=null; this.estartTime=null; this.eendDate=null; this.eendTime=null;


    console.log(this.eventslist)
   }
//generating a unique ID
   ID(){

    return "_"+Math.random().toString().substring(2,8);
   }



// Edit event details
  HandleEdit(type, value, id){

    this.eventslist.map(x=>{

      if(x.id===id){

        if(type==='title')
          x.title=value;
        if(type==='startDate')
          x.startDate=value;
        if(type==='startTime')
          x.startTime=value;
        if(type==='endDate')
          x.endDate=value;
        if(type==='endTime')
          x.endTime=value;



      }
    });

  }

  // getting events to a particular date
  filterEvents(date){

     let filterdate=date.dateStr;

    this.filteredlist= this.eventslist.filter(x=> x.startDate===filterdate);

  }

  //reffer to show all events button
  showAllEvents(){

     this.filteredlist=this.eventslist;
  }


  deleteEvent(id){

    this.eventslist= this.eventslist.filter(x=> x.id!=id);
    this.filteredlist= this.eventslist.filter(x=> x.id!=id);


  }


   }





