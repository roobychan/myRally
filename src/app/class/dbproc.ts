import { User } from './user';
import { Iteration } from './iteration';
import { Tag } from './tag';

const Database = require('lokijs');

export class Dbproc {
  static mrdb = new Database('../../assets/mr.json', {
    autoload: true,
    autosave: true,
    env: 'NODEJS'
  });
  static tags: any;

  static userList: User[];
  static iterList: Iteration[];
  static tagList: Tag[];

  static init() {
    console.log(Dbproc.mrdb.listCollections());
    Dbproc.tags = Dbproc.mrdb.getCollection('Tag');
    if (!Dbproc.tags) {
      console.log('est');
      Dbproc.tags = Dbproc.mrdb.addCollection('Tag', { unique: ['name'] });
    }
    Dbproc.tagList = Dbproc.tags.chain().data();
    console.log(Dbproc.tags.chain().data());
    console.log(Dbproc.tagList);
  }

  static createData() {
    const tags = [
      {
        name: '#DEV',
        ref: '/tag/262701511704'
      },
      {
        name: '#OPS',
        ref: '/tag/262701508908'
      }
    ];
    tags.forEach(ele => {
      const tmp = Dbproc.tags.find({ name: ele.name });
      if (!tmp) {
        console.log('up');
        Dbproc.tags.update(ele);
      } else {
        console.log('ins');
        Dbproc.tags.insert(ele);
      }
    });
  }
}
