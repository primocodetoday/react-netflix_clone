import React, { createContext, useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { Container, Overlay, Inner, Button, Close } from './styles/StyledPlayer';

export const PlayerContext = createContext();

export const Player = ({ children, ...restProps }) => {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
};

Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay {...restProps} onClick={() => setShowPlayer(false)} data-testid="player">
          <Inner>
            <video id="netflix-player" controls>
              <source src={src} type="video/mp4" />
            </video>
            <Close />
          </Inner>
        </Overlay>,
        document.body,
      )
    : null;
};

Player.Button = function PlayerButton({ ...restProps }) {
  const { setShowPlayer } = useContext(PlayerContext);

  return (
    <Button onClick={() => setShowPlayer((showPlayer) => !showPlayer)} {...restProps}>
      Play
    </Button>
  );
};
