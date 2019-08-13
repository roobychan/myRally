import { RallyObject } from './rallyobject';
import { User } from './user';
import { Tag } from './tag';
import { Iteration } from './iteration';

export class Record extends RallyObject {
  usid: string;
  crm: number;
  owner: User;
  owner2: User;
  tester: User;
  tag: Tag;
  createDate: string;
  dueDate: string;
  itert: Iteration;
  depStat: string;

  constructor(par: {}) {
    super(par);
    this.usid = par['usid'];
    this.crm = par['crm'];
    this.owner = new User(par['owner']);
    this.owner2 = new User(par['owner2']);
    this.tester = new User(par['tester']);
    this.tag = new Tag(par['tag']);
    this.createDate = par['createDate'];
    this.dueDate = par['dueDate'];
    this.itert = new Iteration(par['itert']);
    this.depStat = par['depStat'];
  }
}
