import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateRangeService {

  constructor() { }

  addDays = (date: Date, days: number) => {
    let updated = new Date(date);
    updated.setDate(updated.getDate() + days);
    return updated;
  }

  subtractDays = (date: Date, days: number) => {
    let updated = new Date(date);
    updated.setDate(updated.getDate() - days);
    return updated;
  }

  formatDate(date: Date) {
    let month = '' + (date.getMonth() + 1);
    let day = '' + date.getDate();
    const year = date.getFullYear();

    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }
    return [year, month, day].join('-');
  }

  initRange() {
    const date = new Date();
    const minDate = this.subtractDays(date, 22);
    const maxDate = this.addDays(date, 22);

    const range = [this.formatDate(minDate), this.formatDate(maxDate)];
    return range;
  }

  calcRange(range, mode) {
    let startDate: Date;
    let endDate: Date;
    if (mode === 'next') {
      startDate = this.addDays(new Date(range[0]), 15);
      endDate = this.addDays(new Date(range[1]), 15);
  } else if (mode === 'prev') {
      startDate = this.subtractDays(new Date(range[0]), 15);
      endDate = this.subtractDays(new Date(range[1]), 15);
  }
    return [this.formatDate(startDate), this.formatDate(endDate)];
  }
}
