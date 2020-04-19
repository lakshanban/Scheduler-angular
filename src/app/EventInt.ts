import {Time} from '@angular/common';

export interface EventInt {
  id: string;
  title: string;
  startDate: Date;
  startTime: Time;
  endDate: Date ;
  endTime: Time;
}
