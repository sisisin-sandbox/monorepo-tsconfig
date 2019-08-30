export class FugaRepository {
  get() {
    return Promise.resolve({ fuga: [1, 2, 3] });
  }
}
