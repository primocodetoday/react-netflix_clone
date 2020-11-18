import React from 'react';
import { Spinner, LockBody, Picture, ReleaseBody } from './styles/StyledLoading';

export const Loading = ({ src, ...restProps }) => {
  return (
    <Spinner {...restProps} data-testid="loading">
      <LockBody />
      <Picture src={`/assets/images/profiles/${src}.png`} data-testid="loading-picture" />
    </Spinner>
  );
};

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
