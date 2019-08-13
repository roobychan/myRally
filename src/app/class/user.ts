import { RallyObject } from './rallyobject';

export class User extends RallyObject {
  email: string;
  constructor( par: {}) {
    super(par);
    this.email = par['email'];
  }
}
