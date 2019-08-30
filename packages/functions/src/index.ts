import { HogeRepository } from 'shared/lib/cjs';
import admin from 'firebase-admin';

const hogeRepository = new HogeRepository(admin.firestore());
async function main() {
  console.log(await hogeRepository.get());
}

main().catch(console.error);
