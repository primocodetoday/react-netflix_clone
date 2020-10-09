import React from 'react';
import useContent from 'hooks/useContent';
import genreFilter from 'helpers/genreFilter';
import BrowseContainer from 'containers/BrowseContainer';

const Browse = () => {
  const { series } = useContent('series');
  const { films } = useContent('films');

  const slides = genreFilter({ series, films });

  return (
    <>
      <BrowseContainer slides={slides} />
    </>
  );
};

export default Browse;
