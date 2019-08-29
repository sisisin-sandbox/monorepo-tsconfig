import { HogeDao } from '../../shared/lib/es';
const hogeDao = new HogeDao();
async function main() {
  console.log(await hogeDao.get());
}

main().catch(console.error);
