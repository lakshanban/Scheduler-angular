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


  }

  timeout() {

    setInterval(() => {

      this.eventslist.map(x => {

        let today = new Date();
        let date = today.getDate();
        let now = today.getTime();

        if (x.startDate === today) {

          alert('fuck');
        }


      })


    }, 5000);
  }



  etitle:string="";
  estartDate: Date;
  eendDate: Date ;
  estartTime : Time ;
  eendTime : Time;

 eventslist= new Array<EventInt>();
 filteredlist= new Array<EventInt>();

  calendarPlugins = [dayGridPlugin, interactionPlugin] ;




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

    console.log(this.eventslist)
   }

   ID(){

    return "_"+Math.random().toString().substring(2,8);
   }




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

  filterEvents(date){

     let filterdate=date.dateStr;

    this.filteredlist= this.eventslist.filter(x=> x.startDate===filterdate);

  }

  showAllEvents(){

     this.filteredlist=this.eventslist;
  }


   }





