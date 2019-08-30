import { HogeDao } from 'shared/lib/cjs';
import admin from 'firebase-admin';

const hogeDao = new HogeDao(admin.firestore());
async function main() {
  console.log(await hogeDao.get());
}

main().catch(console.error);
