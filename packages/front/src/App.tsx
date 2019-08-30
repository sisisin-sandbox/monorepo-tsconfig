import React from 'react';

import { HogeRepository } from 'shared/lib/es';
import * as firebase from 'firebase';
firebase.initializeApp({});

const hogeRepository = new HogeRepository(firebase.firestore());

export const App: React.FC = () => {
  const [hoge, setHoge] = React.useState<number[]>([]);
  React.useEffect(() => {
    hogeRepository.get().then(hoge => {
      console.log(hoge.docs);
    });
  }, []);
  return <div>hoge: {hoge.join()}</div>;
};
