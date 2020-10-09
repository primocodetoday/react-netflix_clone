import React from 'react';
import {
  Container,
  Title,
  List,
  Item,
  Avatar,
  Name,
} from './styles/StyledProfiles';

const Profiles = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Profiles.Title = function ProfilesTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Profiles.List = function ProfilesList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Profiles.Item = function ProfilesItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Profiles.Avatar = function ProfilesAvatar({ src, ...restProps }) {
  return (
    <Avatar
      {...restProps}
      src={
        src ? `assets/images/profiles/${src}.png` : `assets/images/loading.gif`
      }
    />
  );
};

Profiles.Name = function ProfilesName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};

export default Profiles;
