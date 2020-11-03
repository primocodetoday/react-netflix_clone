import React, { useEffect, useState, useContext } from 'react';
import { Loading } from 'components';
import FirebaseContext from 'context/firebase';
import useFirebaseContent from 'hooks/useFirebaseContent';
import genreFilter from 'helpers/genreFilter';
import { BrowseContainer } from 'containers/BrowseContainer';
import { ProfilesSelection } from 'containers/ProfilesSelection';

export interface IDataProps {
  id: string;
  slug: string;
  title: string;
  genre: string;
  maturity: number;
  description: string;
}

export interface ISeriesProps {
  series?: Array<IDataProps>;
}
export interface IFilmsProps {
  films?: Array<IDataProps>;
}

export interface ISlides {
  series?: {
    title: string;
    data: Array<IDataProps>;
  };
  films?: {
    title: string;
    data: Array<IDataProps>;
  };
}

export const Browse: React.FC = () => {
  const { series }: ISeriesProps = useFirebaseContent('series');
  const { films }: IFilmsProps = useFirebaseContent('films');

  const [loading, setLoading] = useState(() => false);

  const slides = genreFilter({ series, films });

  console.log(slides);

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
      <BrowseContainer user={user} slides={slides} handleSignOut={handleSignOut} />
    </>
  ) : (
    <ProfilesSelection user={user} setProfile={setProfile} setLoading={setLoading} />
  );
};
