import { MyFirestore } from 'firebase';

export class HogeRepository {
  constructor(private db: MyFirestore) {}
  get() {
    return this.db.collection('hoge').get();
  }
}
