import React from 'react';
import { Header, Profiles } from 'components';
import routes from 'routes';

const ProfilesSelection = ({ user, setProfile }) => {
  return (
    <>
      <Header isProfiles>
        <Header.Top>
          <Header.Logo
            to={routes.home}
            src="assets/images/Netflix_logo.png"
            alt="Netflix"
          />
        </Header.Top>
      </Header>
      <Profiles>
        <Profiles.Title>Who&apos;s watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.Item
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
          >
            <Profiles.Avatar src={1} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.Item>
        </Profiles.List>
      </Profiles>
    </>
  );
};

export default ProfilesSelection;
