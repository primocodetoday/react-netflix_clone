import React from 'react';
import useFirebaseContent from 'hooks/useFirebaseContent';
import genreFilter from 'helpers/genreFilter';
import BrowseContainer from 'containers/BrowseContainer';

const Browse = () => {
  const { series } = useFirebaseContent('series');
  const { films } = useFirebaseContent('films');

  const slides = genreFilter({ series, films });

  return (
    <>
      <BrowseContainer slides={slides} />
    </>
  );
};

export default Browse;
