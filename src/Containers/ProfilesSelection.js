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
          <Profiles.User>
            <Profiles.Avatar />
            <Profiles.Name>Sebastian</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
};

export default ProfilesSelection;
