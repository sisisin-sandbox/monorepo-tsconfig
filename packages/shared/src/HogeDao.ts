export class HogeDao {
  get() {
    return Promise.resolve({ hoge: [1, 2, 3] });
  }
}
