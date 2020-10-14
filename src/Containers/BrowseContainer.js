import React, { useContext, useState, useEffect } from 'react';
import ProfilesSelection from 'containers/ProfilesSelection';
import FirebaseContext from 'context/firebase';
import { Loading, Header } from 'components';
import routes from 'routes';
import useMovie from 'hooks/useMovie';
import requests from 'axios/requests';

const BrowseContainer = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  const movie = useMovie(requests.fetchNetflixOriginals);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  const truncate = (str, n) => {
    return str?.length > n ? `${str.substr(0, n - 1)}...` : str;
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
      <Header bg={movie?.backdrop_path}>
        <Header.Top>
          <Header.Group>
            <Header.Logo
              to={routes.home}
              src="assets/images/Netflix_logo.png"
              alt="Netflix"
            />
            <Header.MenuLink to="#">Home</Header.MenuLink>
            <Header.MenuLink to="#">TV Shows</Header.MenuLink>
            <Header.MenuLink to="#">Movies</Header.MenuLink>
            <Header.MenuLink to="#">Latest</Header.MenuLink>
            <Header.MenuLink to="#">My List</Header.MenuLink>
          </Header.Group>
          <Header.Group>
            <Header.Profile>
              <Header.Picture src={1} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={1} />
                  <Header.MenuLink to="#">{user.displayName}</Header.MenuLink>
                </Header.Group>
                <Header.Group>
                  <Header.MenuLink
                    to="#"
                    onClick={() => firebase.auth().signOut()}
                  >
                    Sign out
                  </Header.MenuLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Top>
        <Header.Feature>
          <Header.Title>
            {movie?.name || movie?.title || movie?.original_name}
          </Header.Title>
          <Header.Description>
            {truncate(movie?.overview, 150)}
          </Header.Description>
        </Header.Feature>
      </Header>
    </>
  ) : (
    <ProfilesSelection user={user} setProfile={setProfile} />
  );
};

export default BrowseContainer;
