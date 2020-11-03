import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import { Header, Card, Player } from 'components';
import { routes } from 'routes';
import useRandomMovie from 'hooks/useRandomMovie';
import requests from 'axios/requests';
import { FooterContainer } from 'containers/FooterContainer';
import { ISlides } from 'views/Browse';

interface IBrowserContainer extends React.ReactElement {
  slides: ISlides;
}

export const BrowseContainer: React.FC = ({ slides, user, handleSignOut }): IBrowserContainer => {
  const [category, setCategory] = useState('series');
  const [search, setSearch] = useState(() => '');

  const [slideRows, setSlideRows] = useState([]);

  const movie = useRandomMovie(requests.fetchNetflixOriginals);

  const truncate = (str, n) => {
    return str?.length > n ? `${str.substr(0, n - 1)}...` : str;
  };

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ['data.description', 'data.title', 'data.genre'],
    });
    const results = fuse.search(search).map(({ item }) => item);

    if (slideRows.length > 0 && search.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [search]);

  // TODO Add Gradient on Top and bottom

  return (
    <>
      <Header bg={movie?.backdrop_path}>
        <Header.Top>
          <Header.Group>
            <Header.Logo to={routes.home} src="assets/images/Netflix_logo.png" alt="Netflix" />
            <Header.MenuLink to="#">Home</Header.MenuLink>
            <Header.MenuLink
              active={category === 'series' ? 'true' : 'false'}
              onClick={() => setCategory('series')}
              to="#"
            >
              TV Shows
            </Header.MenuLink>
            <Header.MenuLink
              active={category === 'films' ? 'true' : 'false'}
              onClick={() => setCategory('films')}
              to="#"
            >
              Movies
            </Header.MenuLink>
          </Header.Group>
          <Header.Group>
            <Header.Search search={search} setSearch={setSearch} />
            <Header.Profile>
              <Header.Picture src={1} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={1} />
                  <Header.MenuLink to="#">{user.displayName}</Header.MenuLink>
                </Header.Group>
                <Header.Group>
                  <Header.MenuLink to="#" onClick={() => handleSignOut()}>
                    Sign out
                  </Header.MenuLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Top>
        <Header.Feature>
          <Header.Title>{movie?.name || movie?.title || movie?.original_name}</Header.Title>
          <Header.Description>{truncate(movie?.overview, 150)}</Header.Description>
          <Header.Play>Play</Header.Play>
        </Header.Feature>
      </Header>
      <Card.Row>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Poster src={`/assets/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player>
                  <Player.Button />
                  <Player.Video src="/videos/bunny.mp4" />
                </Player>
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Row>
      <FooterContainer />
    </>
  );
};
