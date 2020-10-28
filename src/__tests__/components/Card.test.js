import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Card, Player } from 'components';

const category = 'series';
const slideRows = [
  {
    title: 'Documentaries',
    data: [
      {
        genre: 'documentaries',
        maturity: '18',
        slug: 'tiger-king',
        description: 'Tiger King description',
        id: '07adcf19-517f-41b4-8f8b-04fee694bce1',
        title: 'Tiger King',
        docId: 'IcRxJBanzE7nmIp2GMGb',
      },
    ],
  },
  {
    title: 'Feel Good',
    data: [
      {
        title: 'Juno',
        genre: 'feel-good',
        description: 'Juno description',
        maturity: '0',
        id: 'a938b5a6-fe25-4a06-8050-353bc7146ccd',
        slug: 'juno',
        docId: '4JDgdf5vE0K3YrW9ZnbP',
      },
    ],
  },
];

describe('<Card/> renders properly', () => {
  it('with data', () => {
    const { container, getByText } = render(
      <Card.Row>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Poster
                    src={`/assets/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
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
                  <Player.Video src="assets/videos/jellyfish.mp4" />
                </Player>
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Row>,
    );

    expect(getByText('Documentaries')).toBeTruthy();
    expect(getByText('Tiger King')).toBeTruthy();
    expect(getByText('Tiger King description')).toBeTruthy();

    expect(getByText('Feel Good')).toBeTruthy();
    expect(getByText('Juno')).toBeTruthy();
    expect(getByText('Juno description')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('with data and toggle feature', () => {
    const { container, queryByText, getByTestId, getByAltText } = render(
      <Card.Row>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item
                  key={item.docId}
                  item={item}
                  data-testid={`${item.slug}-feature`}
                >
                  <Card.Poster
                    src={`/assets/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
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
                  <Player.Video src="assets/videos/jellyfish.mp4" />
                </Player>
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Row>,
    );

    expect(queryByText('18')).toBeFalsy();

    fireEvent.click(getByTestId('tiger-king-feature'));

    expect(queryByText('18')).toBeTruthy();
    fireEvent.click(getByAltText('close'));
    expect(queryByText('18')).toBeFalsy();

    expect(queryByText('PG')).toBeFalsy();
    fireEvent.click(getByTestId('juno-feature'));
    expect(queryByText('PG')).toBeTruthy();
    fireEvent.click(getByAltText('close'));
    expect(queryByText('PG')).toBeFalsy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
