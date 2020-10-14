import { useEffect, useState } from 'react';
import instance from 'axios/init';

// TODO Make this for many movies too

const useMovie = (target) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await instance.get(target);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
          ],
        );
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);
  return movie;
};

export default useMovie;
