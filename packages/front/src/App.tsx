import React from 'react';

import { HogeDao } from 'shared/lib/es';
import * as firebase from 'firebase';
firebase.initializeApp({});

const hogeDao = new HogeDao(firebase.firestore());

export const App: React.FC = () => {
  const [hoge, setHoge] = React.useState<number[]>([]);
  React.useEffect(() => {
    hogeDao.get().then(hoge => {
      console.log(hoge.docs);
    });
  }, []);
  return <div>hoge: {hoge.join()}</div>;
};
