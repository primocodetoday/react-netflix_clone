import React, { useEffect, useState, useContext } from 'react';
import { Loading } from 'components';
import FirebaseContext from 'context/firebase';
import useFirebaseContent from 'hooks/useFirebaseContent';
import genreFilter from 'helpers/genreFilter';
import BrowseContainer from 'containers/BrowseContainer';
import ProfilesSelection from 'containers/ProfilesSelection';

const Browse = () => {
  const { series } = useFirebaseContent('series');
  const { films } = useFirebaseContent('films');

  const [loading, setLoading] = useState(() => false);

  const slides = genreFilter({ series, films });

  const [profile, setProfile] = useState({});

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  const handleSignOut = () => {
    firebase.auth().signOut();
  };

  // loading profile imitation

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [profile.displayName]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src="1" /> : <Loading.ReleaseBody />}
      <BrowseContainer
        user={user}
        slides={slides}
        handleSignOut={handleSignOut}
      />
    </>
  ) : (
    <ProfilesSelection
      user={user}
      setProfile={setProfile}
      setLoading={setLoading}
    />
  );
};

export default Browse;
