import {Component, OnInit} from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import dayGridPlugin from '@fullcalendar/daygrid';
import {FullCalendarComponent} from '@fullcalendar/angular';
import  interactionPlugin from '@fullcalendar/interaction' ;
import {Interaction} from '@fullcalendar/core/interactions/interaction';
import {Time} from '@angular/common';
import {EventInt} from './EventInt';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  ngOnInit(): void {

    let today=new Date();
    let date= today.getFullYear()+'-'+'0'+(today.getMonth()+1)+'-'+today.getDate();
    let time="";
    if(today.getMinutes()<10) {
       time = today.getHours() + ':' +'0'+ today.getMinutes();
    }else {
       time= today.getHours() + ':' + today.getMinutes();
    }
    setInterval(() => {

      this.eventslist.map(event=>{

       if(event.startDate.toString()===date){

         alert(time)

         if(event.startTime.hours)
         {

         }



       }




      })


    }, 2000);

  }

  timeout() {


  }



  etitle:string="";
  estartDate: Date;
  eendDate: Date ;
  estartTime : Time ;
  eendTime : Time;

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


   }





