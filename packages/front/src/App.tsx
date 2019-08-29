import React from 'react';

import { HogeDao } from '../../shared/lib/es';
const hogeDao = new HogeDao();
export const App: React.FC = () => {
  const [hoge, setHoge] = React.useState<number[]>([]);
  React.useEffect(() => {
    hogeDao.get().then(({ hoge }) => setHoge(hoge));
  }, []);
  return <div>hoge: {hoge.join()}</div>;
};
