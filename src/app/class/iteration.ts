import { RallyObject } from './rallyobject';

export class Iteration extends RallyObject {
  begDate: string;
  endDate: string;

  constructor( par: {}) {
    super(par);
    this.begDate = par['begDate'];
    this.endDate = par['endDate'];
  }

  getDepDate(): string {
    const ldate: Date = new Date(this.endDate);
    ldate.setMonth(ldate.getMonth() + 1);
    return ldate.toString();
  }
}
