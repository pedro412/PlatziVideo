import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: [],
  });

  useEffect(() => {
    fetch(API)
      .then((resp) => resp.json())
      .then((resp) => {
        setVideos({
          mylist: [...resp.mylist],
          trends: [...resp.trends],
          originals: [...resp.trends],
        });
      });
  }, []);

  return videos;
};

export default useInitialState;
