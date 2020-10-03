import React from 'react';
import Row from 'components/Row/Row';
import requests from 'axios/requests';
import Banner from 'components/Banner/Banner';
import Nav from 'components/Nav/Nav';

const oldHome = () => {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <section>
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </section>
    </div>
  );
};

export default oldHome;
