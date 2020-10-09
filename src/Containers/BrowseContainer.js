import React, { useContext, useState, useEffect } from 'react';
import ProfilesSelection from 'containers/ProfilesSelection';
import FirebaseContext from 'context/firebase';
import { Loading, Header } from 'components';
import axios from 'axios/init';
import requests from 'axios/requests';
import routes from 'routes';

const BrowseContainer = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ],
      );
    }
    fetchData();

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [profile.displayName]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src="1" /> : <Loading.ReleaseBody />}
      <Header bg={movie?.backdrop_path}>
        <Header.Top>
          <Header.Logo
            to={routes.home}
            src="assets/images/Netflix_logo.png"
            alt="Netflix"
          />
        </Header.Top>
      </Header>
    </>
  ) : (
    <ProfilesSelection user={user} setProfile={setProfile} />
  );
};

export default BrowseContainer;
