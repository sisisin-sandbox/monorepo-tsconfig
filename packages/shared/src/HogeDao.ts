import { MyFirestore } from 'firebase';

export class HogeDao {
  constructor(private db: MyFirestore) {}
  get() {
    return this.db.collection('hoge').get();
  }
}
