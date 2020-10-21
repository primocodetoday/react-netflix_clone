﻿import { useEffect, useState, useContext } from 'react';
import FirebaseContext from '../context/firebase';

const useFirebaseContent = (target) => {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));

        setContent(allContent);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  }, []);

  return { [target]: content };
};

export default useFirebaseContent;
