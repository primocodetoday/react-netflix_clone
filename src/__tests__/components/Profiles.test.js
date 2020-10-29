import React from 'react';
import { render, screen } from '@testing-library/react';
import { Profiles } from 'components';

describe('<Profiles/> renders properly', () => {
  const user = {
    displayName: 'Sebastian',
  };

  it('with data', () => {
    const { container } = render(
      <Profiles>
        <Profiles.Title>Who&apos;s watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.Item
            onClick={() => {
              return console.log(`I'm working`);
            }}
          >
            <Profiles.Avatar src="assets/images/fake.png" data-testid="profiles-avatar" />
            <Profiles.Avatar data-testid="profiles-loading" />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.Item>
        </Profiles.List>
      </Profiles>,
    );
    expect(screen.getByText("Who's watching?")).toBeTruthy();
    expect(screen.getByText('Sebastian')).toBeTruthy();
    expect(screen.getAllByTestId('profiles-avatar')).toBeTruthy();
    expect(screen.getAllByTestId('profiles-loading')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
